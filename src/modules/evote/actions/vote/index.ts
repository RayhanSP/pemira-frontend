import { makeRequest } from '@/modules/common/actions/makeRequest'

export const vote = async (candidateId: string) => {
  await makeRequest({
    path: 'vote/submit',
    method: 'POST',
    isAuthenticated: true,
    body: {
      candidate_id: candidateId,
    },
  })
}
