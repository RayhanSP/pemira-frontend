export interface CandidatePairInterface {
  id: string
  election_number: number
  name: string
  candidate_pair_photo: string
  tagline: string
  president: string
  vice_president: string
  is_empty_box: boolean
}

export interface GetCandidatePairsInterface {
  candidates: Array<CandidatePairInterface>
}
