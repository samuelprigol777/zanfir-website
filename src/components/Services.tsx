"use client";

const services = [
  {
    title: "Oculos de Grau",
    description:
      "Armacoes das melhores marcas internacionais com lentes de alta tecnologia.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Oculos de Sol",
    description:
      "Protecao UV com estilo. As tendencias das principais maisons internacionais.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
  },
  {
    title: "Lentes",
    description:
      "Lentes de contato e lentes oftalmicas com as melhores tecnologias do mercado.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
      </svg>
    ),
  },
  {
    title: "Ajuste e Conserto",
    description:
      "Servico especializado de manutencao e ajuste para seus oculos.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1-3.57m5.1 3.57l5.1-3.57m-5.1 3.57V21m0-5.83V9.17M11.42 15.17l-5.1 3.57m5.1-3.57l5.1 3.57M5.315 7.887c1.1.086 2.244.346 3.194.93 1.05.643 1.805 1.628 2.316 2.763a8.306 8.306 0 011.595 0c.511-1.135 1.266-2.12 2.316-2.763a7.33 7.33 0 013.194-.93m-12.615 0A7.053 7.053 0 014.2 8.56 7.05 7.05 0 013 12.42m2.315-4.533a7.053 7.053 0 00-1.115.673m12.615-4.533A7.053 7.053 0 0119.8 8.56 7.05 7.05 0 0121 12.42m-2.315-4.533c-.37-.247-.756-.464-1.155-.651" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-neutral-900 py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="mb-12 md:mb-16">
          <p className="reveal text-brand-400 text-xs tracking-[0.3em] uppercase mb-4">
            Servicos
          </p>
          <h2 className="reveal font-display font-bold text-display-md text-white max-w-2xl">
            Tudo para sua <span className="text-brand-400">visao</span>
          </h2>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`reveal reveal-delay-${Math.min(i, 4)} group relative bg-neutral-950 border border-white/5 rounded-xl p-6 md:p-8 hover:border-brand-400/30 transition-all duration-500`}
            >
              {/* Icon */}
              <div className="text-brand-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="font-display font-bold text-lg text-white mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-white/50 text-sm leading-relaxed">
                {service.description}
              </p>

              {/* Accent line */}
              <div className="mt-6 w-8 h-[2px] bg-brand-400/30 group-hover:w-full group-hover:bg-brand-400 transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
