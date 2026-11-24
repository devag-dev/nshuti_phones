import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import App from './App'

export function render(url) {
  return renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>
  )
}

// Re-exported so the prerender script can read them from this one bundle.
export { pageMeta, routes } from './seo'
export { shop } from './data/shop'
