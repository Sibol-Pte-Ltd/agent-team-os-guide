'use client'

import { useState } from 'react'
import Link from 'next/link'
import { getAllSectionSummaries } from '@/lib/summaries'

export default function SummaryContent() {
  const sections = getAllSectionSummaries()
  const [expandedSection, setExpandedSection] = useState<string | null>(null)

  function toggleSection(title: string) {
    setExpandedSection(prev => prev === title ? null : title)
  }

  return (
    <div>
      <div className="breadcrumbs">
        <a href="/">Home</a>
        <span className="separator">/</span>
        Summary
      </div>

      <h1 className="page-title">Documentation Summary</h1>
      <p className="page-subtitle">A condensed overview of every section in the Agent Team OS guide.</p>

      <div className="page-summary">
        <div className="page-summary-label">TL;DR</div>
        <p className="page-summary-text">
          Agent Team OS is a personal AI agent system with four agents (Ember, Scout, Forge, Architect) running on OpenClaw.
          They follow daily cadences, sync through Notes (LogSeq + Syncthing), and communicate via Discord and Pushover.
          This page summarizes all {sections.reduce((acc, s) => acc + s.pages.length, 0)} documentation pages across {sections.length} sections.
        </p>
      </div>

      <div className="summary-sections">
        {sections.map((section) => {
          const isExpanded = expandedSection === section.title
          return (
            <div key={section.title} className="summary-section-card">
              <div
                className="summary-section-header"
                onClick={() => toggleSection(section.title)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') toggleSection(section.title) }}
              >
                <div>
                  <h2 className="summary-section-title">
                    <Link href={section.href}>{section.title}</Link>
                  </h2>
                  <p className="summary-section-desc">{section.summary}</p>
                </div>
                <span className={`summary-chevron ${isExpanded ? 'expanded' : ''}`}>&#9660;</span>
              </div>
              {isExpanded && (
                <div className="summary-section-pages">
                  {section.pages.map((page) => (
                    <div key={page.href} className="summary-page-item">
                      <Link href={page.href} className="summary-page-link">{page.label}</Link>
                      <p className="summary-page-desc">{page.summary}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
