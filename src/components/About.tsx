import Image from "next/image";

export default function About() {
  return (
    <section id="sobre" className="section-padding bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Image */}
          <div className="relative overflow-hidden rounded-2xl">
            <Image
              src="/images/loja-5.jpg"
              alt="Interior da Ótica Zanfir - Display de óculos"
              width={1200}
              height={900}
              className="h-auto w-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/40 to-transparent p-6">
              <p className="font-display text-lg text-white/90 italic">
                &ldquo;Você vê a diferença&rdquo;
              </p>
            </div>
          </div>

          {/* Text */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-400">
              Sobre nós
            </p>
            <h2 className="section-title mt-2">
              Tradição e sofisticação em cada detalhe
            </h2>
            <div className="mt-6 space-y-4 text-gray-600 leading-relaxed">
              <p>
                A Ótica Zanfir é referência em óculos de grau e sol no centro de
                Erechim. Com um ambiente moderno e acolhedor, oferecemos as
                melhores marcas internacionais para quem busca qualidade,
                sofisticação e estilo.
              </p>
              <p>
                Nosso atendimento personalizado garante que cada cliente encontre
                a armação perfeita, com orientação especializada na escolha de
                lentes e modelos que combinam com seu estilo de vida e
                personalidade.
              </p>
              <p>
                Trabalhamos com marcas consagradas mundialmente como Gucci, YSL,
                Chloé, Jimmy Choo, entre outras, trazendo para Erechim o que há
                de melhor em design e tecnologia óptica.
              </p>
            </div>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-gray-100 pt-8">
              <div>
                <p className="text-3xl font-bold text-brand-400">14+</p>
                <p className="mt-1 text-sm text-gray-500">
                  Marcas Premium
                </p>
              </div>
              <div>
                <p className="text-3xl font-bold text-brand-400">100%</p>
                <p className="mt-1 text-sm text-gray-500">
                  Atendimento Personalizado
                </p>
              </div>
              <div>
                <p className="text-3xl font-bold text-brand-400">Centro</p>
                <p className="mt-1 text-sm text-gray-500">
                  de Erechim
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
