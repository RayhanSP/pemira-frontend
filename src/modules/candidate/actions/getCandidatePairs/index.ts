import { makeRequest } from '@/modules/common/actions/makeRequest'
import { GetCandidatePairsInterface } from './interfaces'

export const getCandidatePairs = async () => {
  return await makeRequest<GetCandidatePairsInterface>({
    path: `candidate/list/`,
    method: 'GET',
  })
}
