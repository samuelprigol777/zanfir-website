"use client";

import Image from "next/image";

const galleryItems = [
  {
    src: "/images/loja-1.jpg",
    alt: "Parede de oculos de sol",
    aspect: "aspect-[4/3]",
    span: "md:col-span-2",
    label: "Colecao de Sol",
  },
  {
    src: "/images/loja-2.jpg",
    alt: "Interior da loja",
    aspect: "aspect-[3/4]",
    span: "md:row-span-2",
    label: "Ambiente Exclusivo",
  },
  {
    src: "/images/loja-3.jpg",
    alt: "Area de atendimento",
    aspect: "aspect-[4/3]",
    span: "",
    label: "Atendimento",
  },
  {
    src: "/images/loja-4.jpg",
    alt: "Exposicao de armacoes",
    aspect: "aspect-[4/3]",
    span: "",
    label: "Armacoes",
  },
  {
    src: "/images/loja-6.jpg",
    alt: "Vista interior",
    aspect: "aspect-[3/4]",
    span: "",
    label: "Detalhes",
  },
  {
    src: "/images/loja-5.jpg",
    alt: "Parede Otica Zanfir",
    aspect: "aspect-[4/3]",
    span: "md:col-span-2",
    label: "Nossa Loja",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="bg-neutral-950 py-16 md:py-24 px-4 md:px-8">
      {/* Section header */}
      <div className="max-w-7xl mx-auto mb-10 md:mb-14">
        <p className="reveal text-brand-400 text-xs tracking-[0.3em] uppercase mb-4">
          Galeria
        </p>
        <h2 className="reveal font-display font-bold text-display-md text-white">
          Conheca nosso <span className="text-brand-400">espaco</span>
        </h2>
      </div>

      {/* Bento grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[200px] md:auto-rows-[250px]">
        {galleryItems.map((item, i) => (
          <div
            key={item.src}
            className={`reveal reveal-delay-${Math.min(i, 4)} gallery-card rounded-lg ${item.span}`}
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              className="object-cover rounded-lg"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
            <div className="overlay rounded-lg" />
            {/* Hover label */}
            <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
              <span className="text-white text-sm font-display tracking-wider uppercase">
                {item.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
