import { Link } from 'react-router-dom'
import { ShieldCheck, BadgePercent, HandHeart, Wrench } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import Seo from '../components/Seo'
import { shop } from '../data/shop'

const icons = [ShieldCheck, BadgePercent, HandHeart, Wrench]

export default function About() {
  return (
    <>
      <Seo path="/about" />
      <PageHeader title={`About ${shop.name}`} intro={shop.slogan} />

      <section className="mx-auto max-w-3xl px-4 pt-12">
        <p className="text-lg leading-relaxed text-slate-700">
          {shop.name} is a one-stop shop for iPhones, Samsung phones and the gadgets that go with them:
          laptops, printers, headphones, JBL speakers, smartwatches, game pads, power banks and accessories.
        </p>
        {/* ✏️ Replace this paragraph with your own story: when you started, who you serve. */}
        <p className="mt-4 text-lg leading-relaxed text-slate-700">
          We help every customer choose the right product for their needs and budget, and we stand
          behind what we sell.
        </p>
      </section>

      <section className="mx-auto mt-12 grid max-w-6xl gap-5 px-4 sm:grid-cols-2 lg:grid-cols-4">
        {shop.highlights.map((h, i) => {
          const Ico = icons[i]
          return (
            <div key={h.title} className="rounded-2xl border border-brand-100 p-5">
              <Ico className="h-8 w-8 text-brand-600" aria-hidden="true" />
              <h2 className="mt-3 text-lg font-extrabold">{h.title}</h2>
              <p className="mt-1 text-sm text-slate-600">{h.text}</p>
            </div>
          )
        })}
      </section>

      <div className="mx-auto mt-12 max-w-3xl px-4">
        <Link to="/contact" className="inline-flex rounded-lg bg-brand-700 px-5 py-3 font-bold text-white hover:bg-brand-900">
          Talk to us
        </Link>
      </div>
    </>
  )
}
