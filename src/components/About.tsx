"use client";

export default function About() {
  return (
    <section className="bg-neutral-950 py-20 md:py-32 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Large statement text */}
        <div className="max-w-5xl">
          <h2 className="reveal font-display font-bold text-display-lg text-white leading-tight">
            Tradição e sofisticação{" "}
            <span className="text-brand-400">em cada detalhe.</span>
          </h2>
          <p className="reveal reveal-delay-1 mt-8 text-white/50 text-lg md:text-xl max-w-2xl leading-relaxed">
            Há 7 anos transformando vidas com experiências únicas.
            Atendimento personalizado com as melhores marcas de luxo
            no coração de Erechim.
          </p>
        </div>

        {/* Stats row */}
        <div className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          <div className="reveal">
            <span className="font-display text-display-md text-brand-400 font-bold block">
              7+
            </span>
            <span className="text-white/40 text-sm tracking-widest uppercase mt-2 block">
              Anos de História
            </span>
          </div>
          <div className="reveal reveal-delay-1">
            <span className="font-display text-display-md text-brand-400 font-bold block">
              17+
            </span>
            <span className="text-white/40 text-sm tracking-widest uppercase mt-2 block">
              Marcas Premium
            </span>
          </div>
          <div className="reveal reveal-delay-2">
            <span className="font-display text-display-md text-brand-400 font-bold block">
              100%
            </span>
            <span className="text-white/40 text-sm tracking-widest uppercase mt-2 block">
              Personalizado
            </span>
          </div>
          <div className="reveal reveal-delay-3">
            <span className="font-display text-display-md text-brand-400 font-bold block">
              Centro
            </span>
            <span className="text-white/40 text-sm tracking-widest uppercase mt-2 block">
              De Erechim
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
