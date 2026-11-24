// Runs after the build. Creates a real HTML file for every page so Google
// can read the text, and writes sitemap.xml and robots.txt.
import fs from 'node:fs'
import path from 'node:path'
import { pathToFileURL } from 'node:url'

const root = path.resolve(import.meta.dirname, '..')
const dist = path.join(root, 'dist')
const serverDir = path.join(root, 'dist-server')

const { render, pageMeta, routes, shop } = await import(
  pathToFileURL(path.join(serverDir, 'entry-server.js')).href
)

const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf-8')
const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')

const jsonLd = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'ElectronicsStore',
  name: shop.name,
  description: shop.description,
  url: shop.siteUrl,
  telephone: `+${shop.phoneInternational}`,
  address: { '@type': 'PostalAddress', streetAddress: shop.address, addressLocality: shop.city || undefined },
}).replace(/</g, '\\u003c')

for (const route of routes) {
  const meta = pageMeta[route]
  const url = shop.siteUrl + (route === '/' ? '' : route)
  const head = [
    `<title>${esc(meta.title)}</title>`,
    `<meta name="description" content="${esc(meta.description)}" />`,
    `<link rel="canonical" href="${url}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="${esc(shop.name)}" />`,
    `<meta property="og:title" content="${esc(meta.title)}" />`,
    `<meta property="og:description" content="${esc(meta.description)}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<script type="application/ld+json">${jsonLd}</script>`,
  ].join('\n    ')

  const html = template
    .replace('<!--app-head-->', head)
    .replace('<!--app-html-->', render(route))

  const outDir = route === '/' ? dist : path.join(dist, route.slice(1))
  fs.mkdirSync(outDir, { recursive: true })
  fs.writeFileSync(path.join(outDir, 'index.html'), html)
  console.log('prerendered', route)
}

const urls = routes
  .map((r) => `  <url><loc>${shop.siteUrl + (r === '/' ? '' : r)}</loc></url>`)
  .join('\n')
fs.writeFileSync(
  path.join(dist, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
)
fs.writeFileSync(
  path.join(dist, 'robots.txt'),
  `User-agent: *\nAllow: /\nDisallow: /admin\n\nSitemap: ${shop.siteUrl}/sitemap.xml\n`
)

fs.rmSync(serverDir, { recursive: true, force: true })
console.log('sitemap.xml and robots.txt written')
