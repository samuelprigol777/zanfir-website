const services = [
  {
    title: "Óculos de Grau",
    description:
      "Armações das melhores marcas internacionais com lentes de alta tecnologia para sua melhor visão.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Óculos de Sol",
    description:
      "Modelos exclusivos das grifes mais desejadas do mundo. Proteção UV e estilo em um só lugar.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
  },
  {
    title: "Lentes",
    description:
      "Lentes oftálmicas com tecnologia de ponta: multifocais, antirreflexo, fotossensíveis e mais.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
      </svg>
    ),
  },
  {
    title: "Ajuste e Conserto",
    description:
      "Serviço especializado de ajuste, manutenção e conserto para seus óculos. Cuidamos de cada detalhe.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1 5.1a2.121 2.121 0 01-3-3l5.1-5.1m0 0L3.6 8.35a2.121 2.121 0 010-3l.707-.707a2.121 2.121 0 013 0L11.42 8.76m0 6.41l4.24-4.24m1.06 5.3l5.1-5.1a2.121 2.121 0 000-3l-.707-.707a2.121 2.121 0 00-3 0l-5.1 5.1m0 0l-1.06-1.06" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="servicos" className="section-padding bg-gray-50">
      <div className="mx-auto max-w-7xl text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-brand-400">
          Serviços
        </p>
        <h2 className="section-title mt-2">O que oferecemos</h2>
        <p className="section-subtitle">
          Soluções completas para a sua visão, com qualidade e atendimento
          diferenciado.
        </p>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-2xl border border-gray-200 bg-white p-8 text-left transition-all duration-300 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-400/5"
            >
              <div className="inline-flex items-center justify-center rounded-xl bg-brand-50 p-3 text-brand-400 transition-colors group-hover:bg-brand-400 group-hover:text-white">
                {service.icon}
              </div>
              <h3 className="mt-5 text-lg font-bold text-gray-900">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-500">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
