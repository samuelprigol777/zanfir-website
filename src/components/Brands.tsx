const brands = [
  "Gucci",
  "YSL",
  "Chloé",
  "Salvatore Ferragamo",
  "Jimmy Choo",
  "Michael Kors",
  "Polo Ralph Lauren",
  "Carolina Herrera",
  "Lanvin",
  "Porsche Design",
  "Hugo Boss",
  "Ermenegildo Zegna",
  "Police",
  "David Beckham",
];

export default function Brands() {
  return (
    <section id="marcas" className="section-padding bg-gray-50">
      <div className="mx-auto max-w-7xl text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-brand-400">
          Nossas Marcas
        </p>
        <h2 className="section-title mt-2">
          As melhores grifes internacionais
        </h2>
        <p className="section-subtitle">
          Curadoria exclusiva das marcas mais desejadas do mundo em óculos de
          grau e sol.
        </p>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7">
          {brands.map((brand) => (
            <div
              key={brand}
              className="brand-card group flex items-center justify-center rounded-xl border border-gray-200 bg-white px-4 py-6 md:py-8"
            >
              <span className="text-center text-sm font-semibold uppercase tracking-wider text-gray-400 transition-colors group-hover:text-brand-400 md:text-base">
                {brand}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
