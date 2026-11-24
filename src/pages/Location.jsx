import { MapPin, Clock, Navigation } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import Seo from '../components/Seo'
import { shop, mapQuery } from '../data/shop'

export default function Location() {
  const q = encodeURIComponent(mapQuery)

  return (
    <>
      <Seo path="/location" />
      <PageHeader title="Find our shop" intro="Come and see the products in person." />

      <section className="mx-auto grid max-w-6xl gap-8 px-4 pt-10 md:grid-cols-2">
        <div className="space-y-6">
          <div className="flex gap-3">
            <MapPin className="mt-1 h-6 w-6 shrink-0 text-brand-600" aria-hidden="true" />
            <div>
              <h2 className="text-xl font-extrabold">Address</h2>
              <p className="mt-1 text-slate-700">{shop.address}</p>
            </div>
          </div>

          <div className="flex gap-3">
            <Clock className="mt-1 h-6 w-6 shrink-0 text-brand-600" aria-hidden="true" />
            <div>
              <h2 className="text-xl font-extrabold">Opening hours</h2>
              <ul className="mt-1 space-y-1 text-slate-700">
                {shop.hours.map((h) => (
                  <li key={h.days}>{h.days}: {h.time}</li>
                ))}
              </ul>
            </div>
          </div>

          <a
            href={`https://www.google.com/maps/dir/?api=1&destination=${q}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-brand-700 px-5 py-3 font-bold text-white hover:bg-brand-900"
          >
            <Navigation className="h-4 w-4" aria-hidden="true" /> Get directions
          </a>
        </div>

        <iframe
          title={`Map showing ${shop.name}`}
          src={`https://www.google.com/maps?q=${q}&output=embed`}
          className="h-80 w-full rounded-2xl border border-brand-100 md:h-full md:min-h-80"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </>
  )
}
