import { Link } from 'react-router-dom'
import { Check, MapPin, Phone, ArrowRight } from 'lucide-react'
import Icon from '../components/Icon'
import ProductCard from '../components/ProductCard'
import Seo from '../components/Seo'
import { categories, products } from '../data/products'
import { shop, telLink } from '../data/shop'

export default function Home() {
  const featured = products.filter((p) => p.featured).slice(0, 6)

  return (
    <>
      <Seo path="/" />

      {/* Hero */}
      <section className="bg-brand-700 text-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-2 md:items-center md:py-20">
          <div>
            <p className="inline-block rounded-full bg-sun px-3 py-1 text-sm font-bold text-brand-900">
              {shop.tagline}
            </p>
            <h1 className="mt-5 text-5xl font-extrabold leading-[1.05] md:text-6xl">{shop.name}</h1>
            <p className="mt-4 max-w-md text-lg text-brand-100">
              Your one-stop shop for iPhones, Samsung and more. {shop.slogan}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 rounded-lg bg-sun px-5 py-3 font-bold text-brand-900 hover:brightness-95"
              >
                See products <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                to="/location"
                className="inline-flex items-center gap-2 rounded-lg border border-white/40 px-5 py-3 font-bold hover:bg-white/10"
              >
                Visit our shop
              </Link>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-6 text-ink">
            <ul className="space-y-4">
              {shop.highlights.map((h) => (
                <li key={h.title} className="flex gap-3">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-emerald-100 text-emerald-700">
                    <Check className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block font-bold">{h.title}</span>
                    <span className="text-sm text-slate-600">{h.text}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Address and phone strip, like the shop flyer */}
        <div className="bg-sun text-brand-900">
          <div className="mx-auto grid max-w-6xl gap-2 px-4 py-4 sm:grid-cols-2">
            <p className="flex items-center gap-2 font-bold">
              <MapPin className="h-5 w-5 shrink-0" aria-hidden="true" /> {shop.address}
            </p>
            <a href={telLink} className="flex items-center gap-2 font-bold sm:justify-end">
              <Phone className="h-5 w-5 shrink-0" aria-hidden="true" /> {shop.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-6xl px-4 pt-16">
        <h2 className="text-3xl font-extrabold text-brand-900">Shop by category</h2>
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {categories.map((c) => (
            <Link
              key={c.id}
              to={`/products?category=${c.id}`}
              className="flex items-center gap-3 rounded-xl bg-brand-50 p-4 font-medium text-brand-900 transition-colors hover:bg-brand-100"
            >
              <Icon name={c.icon} className="h-6 w-6 shrink-0 text-brand-600" />
              {c.label}
            </Link>
          ))}
        </div>
      </section>

      {/* Featured */}
      <section className="mx-auto max-w-6xl px-4 pt-16">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-3xl font-extrabold text-brand-900">Featured products</h2>
          <Link to="/products" className="text-sm font-bold text-brand-700 hover:underline">
            View all
          </Link>
        </div>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* Visit */}
      <section className="mx-auto mt-16 max-w-6xl px-4">
        <div className="rounded-2xl bg-brand-50 p-8 md:flex md:items-center md:justify-between md:gap-8">
          <div>
            <h2 className="text-2xl font-extrabold text-brand-900">Come and see it in person</h2>
            <p className="mt-2 text-slate-600">{shop.address}</p>
          </div>
          <Link
            to="/location"
            className="mt-5 inline-flex rounded-lg bg-brand-700 px-5 py-3 font-bold text-white hover:bg-brand-900 md:mt-0"
          >
            Get directions
          </Link>
        </div>
      </section>
    </>
  )
}
