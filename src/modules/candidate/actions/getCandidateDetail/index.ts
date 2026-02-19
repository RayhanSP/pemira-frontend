import { makeRequest } from '@/modules/common/actions/makeRequest'
import { GetCandidateDetailResponseInterface } from '@/modules/candidate/actions/getCandidateDetail/interfaces'

export const getCandidateDetail = async (id: string) => {
  return await makeRequest<GetCandidateDetailResponseInterface>({
    path: `candidate/get?candidate_id=${id}`,
    method: 'GET',
  })
}
