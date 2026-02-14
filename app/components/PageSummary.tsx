'use client'

import { usePathname } from 'next/navigation'
import { getSummary } from '@/lib/summaries'

export default function PageSummary() {
  const pathname = usePathname()
  const summary = getSummary(pathname)

  if (!summary) return null

  return (
    <div className="page-summary">
      <div className="page-summary-label">TL;DR</div>
      <p className="page-summary-text">{summary}</p>
    </div>
  )
}
