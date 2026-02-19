'use server'

import axios, { AxiosError } from 'axios'
import { configKey } from '@/modules/common/configs'
import { MakeRequestInterface } from '@/modules/common/actions/makeRequest/interfaces'
import { ResponseInterface } from '@/modules/common/interfaces/response.interface'
import { getServerSession } from 'next-auth'
import { authConfig } from '@/app/api/auth/[...nextauth]/route'
import { cookies } from 'next/headers'

export const makeRequest = async <T>({
  path,
  method,
  body,
  isAuthenticated = false,
}: MakeRequestInterface) => {
  const headers: { [key: string]: string } = {}

  if (isAuthenticated) {
    const session = await getServerSession(authConfig)

    if (session) {
      headers['authorization'] = `Bearer ${session.user.token}`
    }
  }

  let data: ResponseInterface<T>

  try {
    const response = await axios<ResponseInterface<T>>({
      headers,
      url: `${configKey.apiUrl}/${path}`,
      method,
      data: body,
    })

    data = response.data
  } catch (e: unknown) {
    if (e instanceof AxiosError) {
      if (e.response?.status === 401) {
        ;(await cookies()).delete('__Secure-next-auth.session-token')
        throw new Error('Session expired')
      }
      throw e
    }
    throw new Error('Something went wrong')
  }

  if (!data.is_success) {
    throw new Error(data.message)
  }

  return data
}
