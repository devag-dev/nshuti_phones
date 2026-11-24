import { useState, useEffect } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { Menu, X, Phone, MapPin, Clock, MessageCircle, Zap } from 'lucide-react'
import { shop, whatsappLink, telLink } from '../data/shop'

const links = [
  { to: '/', label: 'Home' },
  { to: '/products', label: 'Products' },
  { to: '/about', label: 'About' },
  { to: '/location', label: 'Location' },
  { to: '/contact', label: 'Contact' },
]

function Navbar() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {setOpen(false)}, [pathname])

  const linkClass = ({ isActive }) =>
    `rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
      isActive ? 'bg-brand-100 text-brand-700' : 'text-slate-700 hover:bg-brand-50'
    }`

  return (
    <header className="sticky top-0 z-40 border-b border-brand-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-2 font-display text-xl font-extrabold text-brand-700">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-brand-700 text-sun">
            <Zap className="h-5 w-5" aria-hidden="true" />
          </span>
          {shop.name}
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.to === '/'} className={linkClass}>
              {l.label}
            </NavLink>
          ))}
          <a
            href={telLink}
            className="ml-2 inline-flex items-center gap-2 rounded-lg bg-sun px-4 py-2 text-sm font-bold text-brand-900 hover:brightness-95"
          >
            <Phone className="h-4 w-4" aria-hidden="true" /> {shop.phoneDisplay}
          </a>
        </nav>

        <button
          className="rounded-lg p-2 text-brand-700 hover:bg-brand-50 md:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-brand-100 bg-white px-4 pb-4 pt-2 md:hidden" aria-label="Mobile">
          <div className="flex flex-col gap-1">
            {links.map((l) => (
              <NavLink key={l.to} to={l.to} end={l.to === '/'} className={linkClass}>
                {l.label}
              </NavLink>
            ))}
            <a
              href={telLink}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-sun px-4 py-3 font-bold text-brand-900"
            >
              <Phone className="h-4 w-4" aria-hidden="true" /> Call {shop.phoneDisplay}
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}

function Footer() {
  return (
    <footer className="mt-20 bg-brand-900 text-brand-100">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-3">
        <div>
          <p className="font-display text-xl font-extrabold text-white">{shop.name}</p>
          <p className="mt-2 text-sm text-brand-100/80">{shop.tagline}</p>
          <p className="mt-1 text-sm text-brand-100/80">{shop.slogan}</p>
        </div>
        <div className="space-y-3 text-sm">
          <p className="flex gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-sun" aria-hidden="true" />{shop.address}</p>
          <p className="flex gap-2"><Phone className="mt-0.5 h-4 w-4 shrink-0 text-sun" aria-hidden="true" />
            <a href={telLink} className="hover:underline">{shop.phoneDisplay}</a></p>
          <p className="flex gap-2"><Clock className="mt-0.5 h-4 w-4 shrink-0 text-sun" aria-hidden="true" />{shop.hours[0].days}, {shop.hours[0].time}</p>
        </div>
        <ul className="space-y-2 text-sm">
          {links.map((l) => (
            <li key={l.to}><Link to={l.to} className="hover:underline">{l.label}</Link></li>
          ))}
        </ul>
      </div>
      <p className="border-t border-white/10 py-4 text-center text-xs text-brand-100/70">
        © {new Date().getFullYear()} {shop.name}. All rights reserved.
      </p>
    </footer>
  )
}

function FloatingWhatsApp() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-4 right-4 z-50 inline-flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-3 font-bold text-white shadow-lg hover:bg-emerald-600"
    >
      <MessageCircle className="h-5 w-5" aria-hidden="true" />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  )
}

export default function Layout() {
  const { pathname } = useLocation()
  useEffect(() =>{ window.scrollTo(0, 0)}, [pathname])

  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-2 focus:top-2 focus:z-50 focus:rounded focus:bg-sun focus:px-3 focus:py-2">
        Skip to content
      </a>
      <Navbar />
      <main id="main"><Outlet /></main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
