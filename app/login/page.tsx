'use client'

import { useState, FormEvent } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Suspense } from 'react'

function LoginForm() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [shaking, setShaking] = useState(false)
  const router = useRouter()
  const searchParams = useSearchParams()

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()

    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    })

    if (res.ok) {
      let redirect = searchParams.get('redirect') || '/'
      // Strip .html extension if present (legacy URLs)
      if (redirect.endsWith('.html')) {
        redirect = redirect.slice(0, -5)
      }
      router.push(redirect)
      router.refresh()
    } else {
      setError('Incorrect password. Try again.')
      setShaking(true)
      setPassword('')
      setTimeout(() => setShaking(false), 600)
    }
  }

  return (
    <div className="login-container">
      <div className="login-logo">Agent Team OS</div>
      <div className="login-subtitle">Enter password to continue</div>
      <form className="login-form" onSubmit={handleSubmit} autoComplete="off">
        <input
          type="password"
          className={`login-input ${shaking ? 'error' : ''}`}
          placeholder="Password"
          autoFocus
          autoComplete="off"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="login-btn">Enter</button>
        <div className="login-error">{error}</div>
      </form>
    </div>
  )
}

export default function LoginPage() {
  return (
    <Suspense fallback={
      <div className="login-container">
        <div className="login-logo">Agent Team OS</div>
        <div className="login-subtitle">Loading...</div>
      </div>
    }>
      <LoginForm />
    </Suspense>
  )
}
