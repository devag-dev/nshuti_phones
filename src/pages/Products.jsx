import { useState, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Search } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import ProductCard from '../components/ProductCard'
import Seo from '../components/Seo'
import { categories, products } from '../data/products'

export default function Products() {
  const [params, setParams] = useSearchParams()
  const [query, setQuery] = useState('')
  const active = params.get('category') || 'all'

  const shown = useMemo(() => {
    const q = query.trim().toLowerCase()
    return products.filter((p) => {
      const inCategory = active === 'all' || p.category === active
      const inSearch = !q || `${p.name} ${p.brand} ${p.description}`.toLowerCase().includes(q)
      return inCategory && inSearch
    })
  }, [active, query])

  const choose = (id) => (id === 'all' ? setParams({}) : setParams({ category: id }))

  const chip = (isOn) =>
    `rounded-full px-4 py-2 text-sm font-medium transition-colors ${
      isOn ? 'bg-brand-700 text-white' : 'bg-brand-50 text-brand-900 hover:bg-brand-100'
    }`

  return (
    <>
      <Seo path="/products" />
      <PageHeader title="Our products" intro="Original phones, laptops and gadgets. Message us for today's price and stock." />

      <section className="mx-auto max-w-6xl px-4 pt-8">
        <label className="relative block max-w-md">
          <span className="sr-only">Search products</span>
          <Search className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" aria-hidden="true" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search iPhone, JBL, laptop..."
            className="w-full rounded-lg border border-slate-300 py-3 pl-10 pr-3 outline-none focus:border-brand-600"
          />
        </label>

        <div className="mt-5 flex flex-wrap gap-2">
          <button className={chip(active === 'all')} onClick={() => choose('all')}>All</button>
          {categories.map((c) => (
            <button key={c.id} className={chip(active === c.id)} onClick={() => choose(c.id)}>
              {c.label}
            </button>
          ))}
        </div>

        {shown.length ? (
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {shown.map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
        ) : (
          <p className="mt-10 rounded-xl bg-brand-50 p-6 text-slate-700">
            Nothing matches your search. Try another word or choose All.
          </p>
        )}
      </section>
    </>
  )
}
