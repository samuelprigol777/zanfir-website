"use client";

const brands = [
  "Gucci",
  "YSL",
  "Chloe",
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
  "Longchamp",
  "Missoni",
  "Tommy Hilfiger",
];

export default function Brands() {
  const doubled = [...brands, ...brands];

  return (
    <section id="brands" className="bg-neutral-950 py-16 md:py-24 overflow-hidden">
      {/* Section label */}
      <div className="px-5 md:px-8 mb-10">
        <p className="reveal text-brand-400 text-xs tracking-[0.3em] uppercase">
          Nossas Marcas
        </p>
      </div>

      {/* Marquee row 1 */}
      <div className="relative mb-4">
        <div className="marquee-track animate-marquee">
          {doubled.map((brand, i) => (
            <span
              key={`a-${i}`}
              className={`inline-block px-6 md:px-10 font-display font-bold text-3xl md:text-5xl lg:text-6xl whitespace-nowrap ${
                i % 3 === 0 ? "text-brand-400" : "text-white/20"
              }`}
            >
              {brand}
              <span className="text-white/10 mx-4 md:mx-6">&bull;</span>
            </span>
          ))}
        </div>
      </div>

      {/* Marquee row 2 - reverse direction */}
      <div className="relative">
        <div
          className="marquee-track animate-marquee-slow"
          style={{ animationDirection: "reverse" }}
        >
          {[...doubled].reverse().map((brand, i) => (
            <span
              key={`b-${i}`}
              className={`inline-block px-6 md:px-10 font-display font-bold text-3xl md:text-5xl lg:text-6xl whitespace-nowrap ${
                i % 4 === 0 ? "text-brand-400/60" : "text-white/10"
              }`}
            >
              {brand}
              <span className="text-white/10 mx-4 md:mx-6">&bull;</span>
            </span>
          ))}
        </div>
      </div>

      {/* Brand count */}
      <div className="px-5 md:px-8 mt-12 flex items-center gap-4">
        <span className="reveal font-display text-display-md text-brand-400 font-bold">17+</span>
        <span className="reveal reveal-delay-1 text-white/40 text-sm tracking-widest uppercase">
          Marcas Premium<br />Internacionais
        </span>
      </div>
    </section>
  );
}
