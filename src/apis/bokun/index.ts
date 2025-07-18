import { createHmac } from 'crypto'
import { Api } from './swagger/Api'

// Validate required environment variables
const BOKUN_ACCESS_KEY = process.env.BOKUN_ACCESS_KEY
const BOKUN_SECRET_KEY = process.env.BOKUN_SECRET_KEY
const BOKUN_BASE_URL = process.env.BOKUN_API_URL

if (!BOKUN_ACCESS_KEY) {
  throw new Error('BOKUN_ACCESS_KEY environment variable is required')
}

if (!BOKUN_SECRET_KEY) {
  throw new Error('BOKUN_SECRET_KEY environment variable is required')
}

if (!BOKUN_BASE_URL) {
  throw new Error('BOKUN_API_URL environment variable is required')
}

// Helper function to generate Bokun signature
function generateBokunSignature(
  date: string,
  accessKey: string,
  method: string,
  path: string,
  secretKey: string,
): string {
  // Concatenate: date + accessKey + method + path
  const message = date + accessKey + method + path

  // Create HMAC-SHA1 signature
  const hmac = createHmac('sha1', secretKey)
  hmac.update(message)

  // Return Base64 encoded signature
  return hmac.digest('base64')
}

// Helper function to format date for Bokun API
function formatBokunDate(date: Date): string {
  return date
    .toISOString()
    .replace('T', ' ')
    .replace(/\.\d{3}Z$/, '')
}

const bokunApi = new Api({
  baseUrl: BOKUN_BASE_URL,
  baseApiParams: {
    secure: true,
  },
  securityWorker: (_securityData) => {
    // Generate the current date in UTC format required by Bokun
    const now = new Date()
    const bokunDate = formatBokunDate(now)

    // We need to get the HTTP method and path from the request context
    // This will be populated by the actual request when it's made
    const headers: Record<string, string> = {
      'X-Bokun-Date': bokunDate,
      'X-Bokun-AccessKey': BOKUN_ACCESS_KEY,
      'Content-Type': 'application/json;charset=UTF-8',
    }

    return {
      headers,
    }
  },
})

//Intercepts every request and adds the signature header
const originalRequest = bokunApi.request.bind(bokunApi)
bokunApi.request = async (params) => {
  // Generate signature for this specific request
  const now = new Date()
  const bokunDate = formatBokunDate(now)
  const method = (params.method || 'GET').toString().toUpperCase()

  // Build the path with query parameters
  let path = params.path
  if (params.query) {
    const queryString = Object.entries(params.query)
      .filter(([_, value]) => value !== undefined && value !== null)
      .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`)
      .join('&')
    if (queryString) {
      path += '?' + queryString
    }
  }

  const signature = generateBokunSignature(
    bokunDate,
    BOKUN_ACCESS_KEY,
    method,
    path,
    BOKUN_SECRET_KEY,
  )

  // Add the signature to the headers
  const updatedParams = {
    ...params,
    headers: {
      ...params.headers,
      'X-Bokun-Date': bokunDate,
      'X-Bokun-AccessKey': BOKUN_ACCESS_KEY,
      'X-Bokun-Signature': signature,
      'Content-Type': 'application/json;charset=UTF-8',
    },
  }

  return originalRequest(updatedParams)
}

export const getBokunApi = () => {
  return bokunApi
}
