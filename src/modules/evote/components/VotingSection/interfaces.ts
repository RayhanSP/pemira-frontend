import React, { SetStateAction } from 'react'

export interface VotingSectionInterface {
  handleSectionAction: React.Dispatch<SetStateAction<'PROFILE' | 'VOTE'>>
}
