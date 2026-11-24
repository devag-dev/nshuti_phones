// ✏️ EDIT THIS FILE to change shop details everywhere on the site.

export const shop = {
  name: 'Nshuti Phones',
  tagline: 'Buy Smart... Buy with Confidence!',
  slogan: 'Smart Choices... Better Life!',
  description:
    'Your one-stop shop for iPhones, Samsung phones, laptops, printers, headphones, JBL speakers, smartwatches and accessories.',

  // Phone as customers dial it locally:
  phoneDisplay: '0780 759 489',
  // Phone in international format with NO plus sign and NO spaces.
  // ⚠️ 250 = Rwanda. If your shop is in another country, change this code.
  phoneInternational: '250780759489',

  address: 'TSB F1 008, First Floor, Opposite SP Station, Mugane',
  // ⚠️ Add your town/city here to help Google Maps and SEO, e.g. 'Kigali'
  city: '',
  // ⚠️ Placeholder hours: change to your real opening hours.
  hours: [
    { days: 'Monday to Saturday', time: '8:00 am to 7:00 pm' },
    { days: 'Sunday', time: '10:00 am to 5:00 pm' },
  ],

  // ⚠️ Replace after you deploy, with your real address (no trailing slash).
  siteUrl: 'https://nshuti-phones.pages.dev',

  highlights: [
    { title: 'Original products', text: 'Every phone and gadget is genuine.' },
    { title: 'Best prices', text: 'Fair prices you can compare with anyone.' },
    { title: 'Reliable service', text: 'Honest advice before you buy.' },
    { title: 'After-sales support', text: 'We stay with you after the sale.' },
  ],
}

export const whatsappLink = (message = `Hello ${shop.name}, I would like to ask about a product.`) =>
  `https://wa.me/${shop.phoneInternational}?text=${encodeURIComponent(message)}`

export const telLink = `tel:+${shop.phoneInternational}`

export const mapQuery = [shop.address, shop.city].filter(Boolean).join(', ')
