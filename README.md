# Nshuti Phones website

React + Vite + Tailwind CSS. Five pages, pre-rendered for Google, hosted free on Cloudflare Pages.

## Where to edit things
| What | File |
|---|---|
| Phone, address, hours, website address | `src/data/shop.js` |
| Products and categories | `src/data/products.js` |
| Product photos | put in `public/images/` and set `image: '/images/name.jpg'` |
| Colors | `src/index.css` (the `@theme` block) |

## Run on your computer
    npm install
    npm run dev        # live preview at http://localhost:5173
    npm run build      # makes the final site in /dist

## Update the live site
Edit a file, then:

    git add .
    git commit -m "Update products"
    git push

Cloudflare rebuilds the site automatically in about a minute.

## Cloudflare Pages settings
- Framework preset: None
- Build command: `npm run build`
- Build output directory: `dist`
