import { CandidatePairInterface } from '@/modules/candidate/actions/getCandidatePairs/interfaces'
import React, { SetStateAction } from 'react'

export interface VotingModalInterface {
  candidate: CandidatePairInterface
  handleSectionAction: React.Dispatch<SetStateAction<'PROFILE' | 'VOTE'>>
}
