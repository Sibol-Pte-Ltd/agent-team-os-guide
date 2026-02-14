import type { Metadata } from 'next'
import SummaryContent from './SummaryContent'

export const metadata: Metadata = {
  title: 'Summary — Agent Team OS Guide',
}

export default function Page() {
  return <SummaryContent />
}
