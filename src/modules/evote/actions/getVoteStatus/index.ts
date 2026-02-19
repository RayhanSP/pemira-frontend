import { makeRequest } from '@/modules/common/actions/makeRequest'
import { GetVoteStatusResponseInterface } from '@/modules/evote/actions/getVoteStatus/interfaces'

export const getVoteStatus = async () => {
  return await makeRequest<GetVoteStatusResponseInterface>({
    path: 'vote/check-status',
    method: 'GET',
    isAuthenticated: true,
  })
}
