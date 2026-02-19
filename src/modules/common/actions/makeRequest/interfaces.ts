export interface MakeRequestInterface {
  path: string
  method: 'GET' | 'POST'
  body?: any
  isAuthenticated?: boolean
}
