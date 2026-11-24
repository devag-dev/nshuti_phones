export default function PageHeader({ title, intro }) {
  return (
    <section className="bg-brand-700 text-white">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <h1 className="text-4xl font-extrabold md:text-5xl">{title}</h1>
        {intro && <p className="mt-3 max-w-xl text-lg text-brand-100">{intro}</p>}
      </div>
    </section>
  )
}
