'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { sections } from '@/lib/navigation'

export default function Sidebar() {
  const pathname = usePathname()
  const router = useRouter()

  async function handleLogout() {
    await fetch('/api/auth/logout', { method: 'POST' })
    router.push('/login')
    router.refresh()
  }

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h1>Agent Team OS</h1>
        <div className="subtitle">User Guide</div>
      </div>
      <nav>
        {sections.map((section, i) => (
          <div className="nav-section" key={i}>
            {section.title && (
              <div className="nav-section-title">{section.title}</div>
            )}
            {section.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link${pathname === link.href ? ' active' : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        ))}
      </nav>
      <div className="sidebar-footer">
        <button onClick={handleLogout} className="nav-link logout-link">
          ⎋ Logout
        </button>
      </div>
    </aside>
  )
}
