'use server'

import { makeRequest } from '@/modules/common/actions/makeRequest'
import { GetVoteCountResponseInterface } from '@/modules/home/actions/getVoteCount/interface'

export const getVoteCount = async () => {
  const response = await makeRequest<GetVoteCountResponseInterface>({
    path: 'vote/count',
    method: 'GET',
  })

  if (!response.is_success) {
    throw new Error('Something went wrong')
  }

  return response.content
}
