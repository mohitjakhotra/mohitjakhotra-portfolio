// Helper utilities to produce stable, human-friendly slugs for blog posts
export function slugify(input: string): string {
  return String(input || '')
    .toLowerCase()
    .trim()
    // remove query/hash
    .replace(/[?#].*$/, '')
    // remove protocol
    .replace(/^https?:\/\//, '')
    // replace non-alphanumeric with hyphens
    .replace(/[^a-z0-9]+/g, '-')
    // collapse hyphens
    .replace(/-+/g, '-')
    // trim
    .replace(/^-+|-+$/g, '')
}

/**
 * Generate a stable slug for a feed item.
 * Strategy:
 * 1. Prefer last path segment of the `link` (decoded).
 * 2. Fall back to parsing `guid` similarly.
 * 3. Fall back to a slugified `title`.
 * 4. Final fallback: `post-<index>` or timestamp.
 */
export function generatePostSlug(item: any, index?: number): string {
  const link = item?.link ? String(item.link) : ''
  const guid = item?.guid ? String(item.guid) : ''
  const title = item?.title ? String(item.title) : ''

  // try link last path segment
  if (link) {
    try {
      const url = new URL(link)
      const segments = url.pathname.split('/').filter(Boolean)
      let candidate = segments.length ? segments[segments.length - 1] : url.hostname
      candidate = decodeURIComponent(candidate)
      const s = slugify(candidate)
      if (s) return s
    } catch (e) {
      // ignore and continue
    }
  }

  // try guid
  if (guid) {
    try {
      const url = new URL(guid)
      const segments = url.pathname.split('/').filter(Boolean)
      const candidate = segments.length ? segments[segments.length - 1] : url.hostname
      const s = slugify(candidate)
      if (s) return s
    } catch (e) {
      const s = slugify(guid)
      if (s) return s
    }
  }

  // try title
  if (title) {
    const s = slugify(title)
    if (s) return s
  }

  // fallback
  if (typeof index !== 'undefined') return `post-${index}`
  return `post-${Date.now()}`
}

export default generatePostSlug
