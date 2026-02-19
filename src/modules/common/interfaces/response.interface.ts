export interface ResponseInterface<T> {
  message: string
  content: T
  status_code: number
  is_success: boolean
}
