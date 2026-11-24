// ✏️ EDIT THIS FILE to add, change or remove products.
// Each product needs: id, name, category, brand, description.
// price is optional: leave it out (or null) to show "Ask for price".
// image is optional: put photos in /public/images and write '/images/name.jpg'.

export const categories = [
  { id: 'phones', label: 'Phones', icon: 'Smartphone' },
  { id: 'laptops', label: 'Laptops', icon: 'Laptop' },
  { id: 'printers', label: 'Printers', icon: 'Printer' },
  { id: 'headphones', label: 'Headphones', icon: 'Headphones' },
  { id: 'speakers', label: 'Speakers (JBL)', icon: 'Speaker' },
  { id: 'smartwatches', label: 'Smartwatches', icon: 'Watch' },
  { id: 'accessories', label: 'Accessories', icon: 'Plug' },
  { id: 'gamepads', label: 'Game Pads', icon: 'Gamepad2' },
  { id: 'powerbanks', label: 'Power Banks', icon: 'BatteryCharging' },
]

export const products = [
  { id: 1, name: 'iPhone 15 Pro', category: 'phones', brand: 'Apple', description: 'Titanium design, A17 Pro chip and a pro camera system.', featured: true },
  { id: 2, name: 'iPhone 14', category: 'phones', brand: 'Apple', description: 'Reliable everyday iPhone with a great camera.', featured: true },
  { id: 3, name: 'Samsung Galaxy S24', category: 'phones', brand: 'Samsung', description: 'Bright AMOLED screen and a fast, smooth Android experience.', featured: true },
  { id: 4, name: 'Samsung Galaxy A55', category: 'phones', brand: 'Samsung', description: 'Great value mid-range phone with a long-lasting battery.' },
  { id: 5, name: 'Windows Laptop 15"', category: 'laptops', brand: 'Various', description: 'For school, office work and everyday use.', featured: true },
  { id: 6, name: 'MacBook Air', category: 'laptops', brand: 'Apple', description: 'Thin, light and quiet with all-day battery.' },
  { id: 7, name: 'All-in-one Printer', category: 'printers', brand: 'Various', description: 'Print, scan and copy for home or office.', featured: true },
  { id: 8, name: 'Wireless Headphones', category: 'headphones', brand: 'Various', description: 'Comfortable over-ear sound with long playtime.' },
  { id: 9, name: 'AirPods style earbuds', category: 'headphones', brand: 'Various', description: 'Compact earbuds with a charging case.' },
  { id: 10, name: 'JBL Portable Speaker', category: 'speakers', brand: 'JBL', description: 'Loud, clear and water resistant Bluetooth speaker.', featured: true },
  { id: 11, name: 'Smartwatch', category: 'smartwatches', brand: 'Various', description: 'Track steps, calls and notifications from your wrist.' },
  { id: 12, name: 'Fast Charger and Cable', category: 'accessories', brand: 'Various', description: 'Original chargers, cables, cases and screen protectors.' },
  { id: 13, name: 'Wireless Game Pad', category: 'gamepads', brand: 'Various', description: 'Bluetooth controller for phone, PC and console.' },
  { id: 14, name: '20,000mAh Power Bank', category: 'powerbanks', brand: 'Various', description: 'Charge your phone several times on one charge.', featured: true },
]
