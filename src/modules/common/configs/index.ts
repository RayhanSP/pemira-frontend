export const configKey = {
  apiUrl: process.env.NEXT_PUBLIC_API_URL,
  serviceUrl: process.env.NEXT_PUBLIC_SERVICE_URL,
  jwtToken: process.env.NEXT_PUBLIC_JWT_TOKEN || '',
} as const
