"use client";

export default function Contact() {
  return (
    <section id="contact" className="bg-neutral-950 py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="mb-12 md:mb-16">
          <p className="reveal text-brand-400 text-xs tracking-[0.3em] uppercase mb-4">
            Contato
          </p>
          <h2 className="reveal font-display font-bold text-display-md text-white">
            Venha nos <span className="text-brand-400">visitar</span>
          </h2>
        </div>

        {/* Split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Map side */}
          <div className="reveal rounded-xl overflow-hidden h-[350px] md:h-[450px] border border-white/5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3536.5!2d-52.2744!3d-27.6342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94e3120a79c3afab%3A0x4b3b1a3b1b3b3b3b!2sR.+T%C3%B4rres+Gon%C3%A7alves%2C+305+-+Centro%2C+Erechim+-+RS%2C+99700-442!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) grayscale(30%)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localizacao Otica Zanfir"
            />
          </div>

          {/* Contact info side */}
          <div className="reveal reveal-delay-1 flex flex-col justify-center">
            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/555437124500?text=Ola! Gostaria de agendar uma visita na Otica Zanfir."
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-xl p-5 md:p-6 transition-all duration-300 mb-8"
            >
              <svg className="w-8 h-8 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <div>
                <span className="font-display font-bold text-lg block">
                  Fale pelo WhatsApp
                </span>
                <span className="text-white/80 text-sm">
                  Resposta rapida e personalizada
                </span>
              </div>
              <svg
                className="w-5 h-5 ml-auto group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>

            {/* Contact details */}
            <div className="space-y-6">
              <div>
                <h3 className="text-white/30 text-xs tracking-[0.2em] uppercase mb-2">
                  Endereco
                </h3>
                <p className="text-white text-base">
                  R. Torres Goncalves, 305 - Centro
                  <br />
                  Erechim - RS, 99700-442
                </p>
              </div>

              <div>
                <h3 className="text-white/30 text-xs tracking-[0.2em] uppercase mb-2">
                  Telefone
                </h3>
                <a
                  href="tel:+555437124500"
                  className="text-white text-base hover:text-brand-400 transition-colors"
                >
                  (54) 3712-4500
                </a>
              </div>

              <div>
                <h3 className="text-white/30 text-xs tracking-[0.2em] uppercase mb-2">
                  Horario
                </h3>
                <div className="text-white text-base space-y-1">
                  <p>
                    <span className="text-white/50">Seg - Sex:</span> 08:00 - 18:00
                  </p>
                  <p>
                    <span className="text-white/50">Sabado:</span> 08:00 - 12:00
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-white/30 text-xs tracking-[0.2em] uppercase mb-2">
                  Redes Sociais
                </h3>
                <a
                  href="https://www.instagram.com/oticazanfir/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-brand-400 transition-colors inline-flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                  @oticazanfir
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
