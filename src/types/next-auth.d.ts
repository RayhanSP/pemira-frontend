import { DefaultSession } from 'next-auth'

export interface AppSession {
  token: string
  npm: string
  major: string
  batch: string
  userID: string
}

declare module 'next-auth' {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {} & DefaultSession['user'] & AppSession
  }

  interface User extends AppSession {}
}

declare module 'next-auth/jwt' {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT extends AppSession {}
}
