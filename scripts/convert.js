#!/usr/bin/env node
/**
 * Convert static HTML pages to Next.js page components.
 * Uses dangerouslySetInnerHTML to render the original HTML content,
 * which avoids all JSX parsing issues with code blocks, comments, etc.
 */
const fs = require('fs')
const path = require('path')

const SRC = '/home/ubuntu/workspace/repos/agent-team-os-guide'
const DST = '/home/ubuntu/workspace/repos/agent-team-os-guide-nextjs/app/(authenticated)'

// Map: source HTML file -> Next.js route directory
const pageMap = {
  'index.html': '',
  'getting-started/index.html': 'getting-started',
  'getting-started/first-day.html': 'getting-started/first-day',
  'getting-started/setup-checklist.html': 'getting-started/setup-checklist',
  'life-os/index.html': 'life-os',
  'life-os/daily-workflow.html': 'life-os/daily-workflow',
  'life-os/templates.html': 'life-os/templates',
  'life-os/logseq-tips.html': 'life-os/logseq-tips',
  'agents/index.html': 'agents',
  'agents/ember.html': 'agents/ember',
  'agents/scout.html': 'agents/scout',
  'agents/forge.html': 'agents/forge',
  'agents/architect.html': 'agents/architect',
  'agents/trust-levels.html': 'agents/trust-levels',
  'cadence/index.html': 'cadence',
  'cadence/morning-report.html': 'cadence/morning-report',
  'cadence/evening-checkin.html': 'cadence/evening-checkin',
  'cadence/weekly-review.html': 'cadence/weekly-review',
  'cadence/monthly-review.html': 'cadence/monthly-review',
  'automation/index.html': 'automation',
  'automation/cron-jobs.html': 'automation/cron-jobs',
  'automation/notifications.html': 'automation/notifications',
  'troubleshooting/index.html': 'troubleshooting',
  'troubleshooting/syncthing.html': 'troubleshooting/syncthing',
  'troubleshooting/faq.html': 'troubleshooting/faq',
  'reference/commands.html': 'reference/commands',
  'reference/file-locations.html': 'reference/file-locations',
  'reference/glossary.html': 'reference/glossary',
  'reference/changelog.html': 'reference/changelog',
  'implementation/index.html': 'implementation',
  'implementation/gap-analysis.html': 'implementation/gap-analysis',
  'implementation/roadmap.html': 'implementation/roadmap',
  'implementation/activity-log.html': 'implementation/activity-log',
}

function extractTitle(html) {
  const m = html.match(/<title>(.*?)<\/title>/)
  return m ? m[1].replace(/ — Agent Team OS Guide$/, '').replace(/ — Agent Team OS$/, '') : 'Page'
}

function extractContent(html) {
  const startMarker = '<div class="content-wrapper">'
  const startIdx = html.indexOf(startMarker)
  if (startIdx === -1) return null

  let depth = 1
  let i = startIdx + startMarker.length

  while (i < html.length && depth > 0) {
    if (html.substring(i).startsWith('<div')) {
      depth++
      i += 4
    } else if (html.substring(i).startsWith('</div>')) {
      depth--
      if (depth === 0) break
      i += 6
    } else {
      i++
    }
  }

  return html.substring(startIdx + startMarker.length, i).trim()
}

// Resolve a relative href to an absolute clean URL
function resolveHref(href, sourceFile) {
  if (href.startsWith('http://') || href.startsWith('https://')) return href
  if (href.startsWith('#')) return href

  let hash = ''
  let cleanHref = href
  const hashIdx = cleanHref.indexOf('#')
  if (hashIdx !== -1) {
    hash = cleanHref.substring(hashIdx)
    cleanHref = cleanHref.substring(0, hashIdx)
  }

  const sourceDir = path.dirname(sourceFile)
  let resolved = path.posix.join('/', sourceDir, cleanHref)
  resolved = resolved.replace(/\.html$/, '')
  resolved = resolved.replace(/\/index$/, '')
  if (resolved === '' || resolved === '/.') resolved = '/'
  resolved = path.posix.normalize(resolved)

  return resolved + hash
}

// Fix all href attributes in the HTML to use clean URLs
function fixLinks(html, sourceFile) {
  return html.replace(/href="([^"]+)"/g, (match, href) => {
    if (href.startsWith('http') || href === '#') return match
    const resolved = resolveHref(href, sourceFile)
    return `href="${resolved}"`
  })
}

function generatePage(title, content, sourceFile) {
  // Fix links in the HTML content
  const fixedContent = fixLinks(content, sourceFile)

  // Escape backticks and ${} in template literal
  const escaped = fixedContent
    .replace(/\\/g, '\\\\')
    .replace(/`/g, '\\`')
    .replace(/\$\{/g, '\\${')

  return `import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '${title.replace(/'/g, "\\'")} — Agent Team OS Guide',
}

const content = \`${escaped}\`

export default function Page() {
  return <div dangerouslySetInnerHTML={{ __html: content }} />
}
`
}

// Main
let count = 0
for (const [srcFile, routeDir] of Object.entries(pageMap)) {
  const srcPath = path.join(SRC, srcFile)
  if (!fs.existsSync(srcPath)) {
    console.error(`Source file not found: ${srcPath}`)
    continue
  }

  const html = fs.readFileSync(srcPath, 'utf-8')
  const title = extractTitle(html)
  const content = extractContent(html)

  if (!content) {
    console.error(`Could not extract content from: ${srcPath}`)
    continue
  }

  const dstDir = path.join(DST, routeDir)
  fs.mkdirSync(dstDir, { recursive: true })

  const pageContent = generatePage(title, content, srcFile)
  const dstPath = path.join(dstDir, 'page.tsx')
  fs.writeFileSync(dstPath, pageContent)
  count++
  console.log(`✓ ${srcFile} -> ${routeDir || '/'}/page.tsx`)
}

console.log(`\nConverted ${count} pages.`)
