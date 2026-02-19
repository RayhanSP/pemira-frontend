import React, { SetStateAction } from 'react'

export interface VoterProfileSectionInterface {
  handleSectionAction: React.Dispatch<SetStateAction<'PROFILE' | 'VOTE'>>
}
