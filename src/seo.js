import { shop } from './data/shop'

// One entry per page: used for the browser tab, Google results and pre-rendering.
export const pageMeta = {
  '/': {
    title: `${shop.name} | iPhones, Samsung, Laptops and Gadgets`,
    description: `${shop.name}: ${shop.description} Visit us at ${shop.address}.`,
  },
  '/products': {
    title: `Products | ${shop.name}`,
    description: `Browse phones, laptops, printers, headphones, JBL speakers, smartwatches, accessories, game pads and power banks at ${shop.name}.`,
  },
  '/about': {
    title: `About us | ${shop.name}`,
    description: `Learn why customers trust ${shop.name}: original products, best prices, reliable service and after-sales support.`,
  },
  '/location': {
    title: `Shop location and opening hours | ${shop.name}`,
    description: `Find ${shop.name} at ${shop.address}. See opening hours and get directions.`,
  },
  '/contact': {
    title: `Contact us | ${shop.name}`,
    description: `Call ${shop.phoneDisplay} or message ${shop.name} on WhatsApp to ask about prices and stock.`,
  },
}

export const routes = Object.keys(pageMeta)
