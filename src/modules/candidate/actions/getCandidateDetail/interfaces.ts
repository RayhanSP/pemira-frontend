export interface GetCandidateDetailResponseInterface {
  id: string
  election_number: number
  name: string
  candidate_pair_photo: string
  president: string
  vice_president: string
  tagline: string
  vision: string
  mission: Array<string>
  programs: Array<string>
  social_media: string
  document_url: string
}
