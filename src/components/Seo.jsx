import { useEffect } from 'react'
import { pageMeta } from '../seo'

// Updates the tab title when people move between pages.
export default function Seo({ path }) {
  useEffect(() => {
    const meta = pageMeta[path]
    if (meta) document.title = meta.title
  }, [path])
  return null
}
