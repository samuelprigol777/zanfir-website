"use client";

const reviews = [
  {
    name: "Sherin Ruden",
    stars: 5,
    text: "Ótimo atendimento tanto físico quanto online, as funcionárias são atenciosas, simpáticas e bem gentis, tiveram paciência comigo.",
    time: "5 dias atrás",
  },
  {
    name: "Lenir Bilhar",
    stars: 5,
    text: "Estou muito satisfeita com meus óculos, fui muito bem atendida por a Jaqueline, muito atenciosa e super profissional. Estão de parabéns!",
    time: "3 semanas atrás",
  },
  {
    name: "Jurandir",
    stars: 5,
    text: "Ótimo atendimento e excelente preço dos óculos.",
    time: "2 semanas atrás",
  },
  {
    name: "Bruna Skrzypek Badalotti",
    stars: 5,
    text: "Excelente atendimento, desde o momento de experimentar os óculos até o pós venda. Achei muito atencioso entrarem em contato perguntando se eu tinha me adaptado ao óculos novo. Ótima variedade de armações e lentes!",
    time: "Cliente desde 2021",
  },
];

function StarIcon() {
  return (
    <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

function GoogleIcon() {
  return (
    <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24">
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
    </svg>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-black py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="mb-12 md:mb-16">
          <p className="reveal text-brand-400 text-xs tracking-[0.3em] uppercase mb-4">
            Depoimentos
          </p>
          <h2 className="reveal font-display font-bold text-display-md text-white max-w-2xl">
            O que nossos <span className="text-brand-400">clientes</span> dizem
          </h2>
        </div>

        {/* Google rating badge */}
        <div className="reveal mb-10 md:mb-14 inline-flex items-center gap-3 bg-neutral-900 border border-white/10 rounded-full px-5 py-3">
          <GoogleIcon />
          <span className="text-white font-display font-bold text-lg">4,8</span>
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <StarIcon key={i} />
            ))}
          </div>
          <span className="text-white/50 text-sm">12 avaliações no Google</span>
        </div>

        {/* Review cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {reviews.map((review, i) => (
            <div
              key={review.name}
              className={`reveal reveal-delay-${Math.min(i, 4)} bg-neutral-900 border border-white/5 rounded-xl p-6 md:p-8 flex flex-col justify-between hover:border-brand-400/20 transition-all duration-500`}
            >
              {/* Stars + Google icon */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-0.5">
                    {[...Array(review.stars)].map((_, j) => (
                      <StarIcon key={j} />
                    ))}
                  </div>
                  <GoogleIcon />
                </div>

                {/* Review text */}
                <p className="text-white/70 text-sm leading-relaxed mb-6">
                  &ldquo;{review.text}&rdquo;
                </p>
              </div>

              {/* Reviewer info */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                {/* Avatar initial */}
                <div className="w-9 h-9 rounded-full bg-brand-400/10 text-brand-400 flex items-center justify-center font-display font-bold text-sm flex-shrink-0">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="text-white text-sm font-medium">{review.name}</p>
                  <p className="text-white/30 text-xs">{review.time}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
