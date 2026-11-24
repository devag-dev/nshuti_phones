import { MessageCircle } from 'lucide-react'
import Icon from './Icon'
import { categories } from '../data/products'
import { whatsappLink, shop } from '../data/shop'

export default function ProductCard({ product }) {
  const cat = categories.find((c) => c.id === product.category)

  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-brand-100 bg-white">
      <div className="grid h-40 place-items-center bg-brand-50">
        {product.image ? (
          <img src={product.image} alt={product.name} loading="lazy" className="h-full w-full object-cover" />
        ) : (
          <Icon name={cat?.icon} className="h-14 w-14 text-brand-600" />
        )}
      </div>
      <div className="flex flex-1 flex-col p-4">
        <p className="text-xs font-medium text-brand-600">{cat?.label} · {product.brand}</p>
        <h3 className="mt-1 text-lg font-extrabold leading-tight">{product.name}</h3>
        <p className="mt-2 flex-1 text-sm text-slate-600">{product.description}</p>
        <p className="mt-3 font-bold text-brand-700">
          {product.price ? product.price : 'Ask for price'}
        </p>
        <a
          href={whatsappLink(`Hello ${shop.name}, is the ${product.name} available? What is the price?`)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex items-center justify-center gap-2 rounded-lg bg-brand-700 px-4 py-2.5 text-sm font-bold text-white hover:bg-brand-900"
        >
          <MessageCircle className="h-4 w-4" aria-hidden="true" /> Ask on WhatsApp
        </a>
      </div>
    </article>
  )
}
