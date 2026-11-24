import { useState } from 'react'
import { Phone, MessageCircle, MapPin, Send } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import Seo from '../components/Seo'
import { shop, whatsappLink, telLink } from '../data/shop'

export default function Contact() {
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')

  // No server needed: the form opens WhatsApp with the message already written.
  const send = (e) => {
    e.preventDefault()
    const text = `Hello ${shop.name}, my name is ${name || 'a customer'}. ${message}`
    window.open(whatsappLink(text), '_blank', 'noopener')
  }

  const field = 'mt-1 w-full rounded-lg border border-slate-300 px-3 py-3 outline-none focus:border-brand-600'

  return (
    <>
      <Seo path="/contact" />
      <PageHeader title="Contact us" intro="Ask about prices, stock or repairs. We reply fast on WhatsApp." />

      <section className="mx-auto grid max-w-6xl gap-10 px-4 pt-10 md:grid-cols-2">
        <div className="space-y-4">
          <a
            href={telLink}
            className="flex items-center gap-3 rounded-2xl bg-sun p-5 font-bold text-brand-900"
          >
            <Phone className="h-6 w-6" aria-hidden="true" />
            <span>
              <span className="block text-sm font-medium">Call us today</span>
              <span className="text-xl">{shop.phoneDisplay}</span>
            </span>
          </a>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-2xl bg-emerald-500 p-5 font-bold text-white"
          >
            <MessageCircle className="h-6 w-6" aria-hidden="true" />
            <span>
              <span className="block text-sm font-medium">Chat with us</span>
              <span className="text-xl">WhatsApp</span>
            </span>
          </a>
          <p className="flex gap-3 rounded-2xl bg-brand-50 p-5 text-slate-700">
            <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" aria-hidden="true" />
            {shop.address}
          </p>
        </div>

        <form onSubmit={send} className="rounded-2xl border border-brand-100 p-6">
          <h2 className="text-xl font-extrabold">Send us a message</h2>
          <label className="mt-4 block text-sm font-medium">
            Your name
            <input className={field} value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" />
          </label>
          <label className="mt-4 block text-sm font-medium">
            What do you need?
            <textarea
              className={field}
              rows={4}
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Example: Do you have iPhone 14 in stock? What is the price?"
            />
          </label>
          <button
            type="submit"
            className="mt-5 inline-flex items-center gap-2 rounded-lg bg-brand-700 px-5 py-3 font-bold text-white hover:bg-brand-900"
          >
            <Send className="h-4 w-4" aria-hidden="true" /> Send on WhatsApp
          </button>
        </form>
      </section>
    </>
  )
}
