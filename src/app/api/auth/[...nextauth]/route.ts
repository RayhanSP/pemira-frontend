import type { Session, NextAuthOptions } from 'next-auth'
import type { JWT } from 'next-auth/jwt'

import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { configKey } from '@/modules/common/configs'
import { XMLParser } from 'fast-xml-parser'
import { SSO_ORG_CODE } from '@/app/api/auth/[...nextauth]/constants'
import { SignInResponseInterface } from '@/app/api/auth/[...nextauth]/interfaces'
import { ResponseInterface } from '@/modules/common/interfaces/response.interface'

export const authConfig: NextAuthOptions = {
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/',
    error: '/',
  },
  cookies: {
    sessionToken: {
      name: 'AT',
      options: {
        httpOnly: true,
        sameSite: 'lax',
        path: '/',
        secure: true,
      },
    },
  },
  providers: [
    CredentialsProvider({
      credentials: {
        ticket: { label: 'Ticket', type: 'text' },
      },
      async authorize(credentials) {
        const { ticket } = credentials || {}

        const response = await fetch(
          `https://sso.ui.ac.id/cas2/serviceValidate?ticket=${ticket}&service=${configKey.serviceUrl}`
        )

        const parser = new XMLParser()
        const result = parser.parse(await response.text())
        const serviceResponse = result['cas:serviceResponse']

        if (!('cas:authenticationSuccess' in serviceResponse)) {
          throw new Error('Login failed')
        }

        const payload =
          serviceResponse['cas:authenticationSuccess']['cas:attributes']

        const loginResponse = await fetch(`${configKey.apiUrl}/auth/login`, {
          headers: {
            'Content-Type': 'application/json',
          },
          method: 'POST',
          body: JSON.stringify({
            name: payload['cas:nama'],
            email: `${serviceResponse['cas:authenticationSuccess']['cas:user']}@ui.ac.id`,
            npm: `${payload['cas:npm']}`,
            major: SSO_ORG_CODE[payload['cas:kd_org']].studyProgram,
          }),
        })
        const responseBody: ResponseInterface<SignInResponseInterface> =
          await loginResponse.json()

        if (!responseBody.is_success) {
          throw new Error('Authentication failed')
        }

        return {
          ...responseBody.content,
          userID: responseBody.content.id,
        }
      },
    }),
  ],
  callbacks: {
    jwt: async ({ token, user, trigger, session }) => {
      if (trigger === 'update') {
        token.name = session.user?.name ?? token.name
        token.email = session.user?.email ?? token.email
        token.npm = session.user?.npm ?? token.npm
        token.major = session.user?.major ?? token.major
        token.batch = session.user?.batch ?? token.batch
        return token
      }

      if (user) {
        token.email = user.email
        token.userID = user.id
        token.token = user.token
        token.name = user.name
        token.npm = user.npm
        token.major = user.major
        token.batch = user.batch
      }
      return token
    },
    session: async ({ session, token }: { session: Session; token?: JWT }) => {
      if (token) {
        session.user.email = token.email
        session.user.userID = token.userID
        session.user.token = token.token
        session.user.name = token.name
        session.user.npm = token.npm
        session.user.major = token.major
        session.user.batch = token.batch
      }
      return session
    },
  },
}

const handler = NextAuth(authConfig)
export { handler as GET, handler as POST }
