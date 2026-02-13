import { cookies } from 'next/headers'
import crypto from 'crypto'

const COOKIE_NAME = 'agent-os-auth'
const COOKIE_MAX_AGE = 60 * 60 * 24 * 7 // 7 days

/**
 * Create an HMAC-signed auth token.
 * The token format is: timestamp.hex_signature
 * This proves the cookie was issued by this server.
 */
function createToken(): string {
  const secret = process.env.AUTH_SECRET
  if (!secret) throw new Error('AUTH_SECRET is not set')

  const timestamp = Date.now().toString()
  const signature = crypto
    .createHmac('sha256', secret)
    .update(timestamp)
    .digest('hex')

  return `${timestamp}.${signature}`
}

/**
 * Set the auth cookie after successful password verification.
 */
export async function setAuthCookie(): Promise<void> {
  const cookieStore = await cookies()
  const token = createToken()
  cookieStore.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: COOKIE_MAX_AGE,
    path: '/',
  })
}

/**
 * Clear the auth cookie (logout).
 */
export async function clearAuthCookie(): Promise<void> {
  const cookieStore = await cookies()
  cookieStore.delete(COOKIE_NAME)
}

/**
 * Verify a password against the server-side secret.
 */
export function verifyPassword(password: string): boolean {
  const sitePassword = process.env.SITE_PASSWORD
  if (!sitePassword) return false
  return password === sitePassword
}
