"use client";

import Image from "next/image";

const galleryItems = [
  {
    src: "/images/store/store-5.jpg",
    alt: "Parede principal com óculos e letreiro ÓTICA ZANFIR",
    span: "md:col-span-2 md:row-span-2",
    label: "Nossa Loja",
  },
  {
    src: "/images/products/ig-DNOA8eHAydT.jpg",
    alt: "Óculos de sol rosa fuchsia",
    span: "",
    label: "Fuchsia",
  },
  {
    src: "/images/products/ig-DN8WpuW3LJD.jpg",
    alt: "Óculos de sol azul escuro com flores",
    span: "",
    label: "Coleção Floral",
  },
  {
    src: "/images/products/ig-DL2bA1Ngl0b.jpg",
    alt: "Óculos de sol preto em superfície texturizada",
    span: "",
    label: "Black Edition",
  },
  {
    src: "/images/products/ig-DTA6LioDrOt.jpg",
    alt: "Prateleira de exposição com diversos óculos de sol",
    span: "md:col-span-2",
    label: "Coleção Exclusiva",
  },
  {
    src: "/images/products/ig-DSIf0SHDsmS.jpg",
    alt: "Ray-Ban Meta smart glasses em estojo de couro",
    span: "",
    label: "Ray-Ban Meta",
  },
  {
    src: "/images/store/store-3.jpg",
    alt: "Área de atendimento com poltronas",
    span: "md:col-span-2",
    label: "Atendimento",
  },
  {
    src: "/images/store/store-4.jpg",
    alt: "Interior completo da loja com área de estar e paredes de óculos",
    span: "",
    label: "Ambiente Exclusivo",
  },
];

const productItems = [
  {
    src: "/images/products/ig-DNBFlbCAc00.jpg",
    alt: "Armação Chloé azul translúcido",
    brand: "Chloé",
    type: "Armação de Grau",
  },
  {
    src: "/images/products/ig-DMF4-99g5kl.jpg",
    alt: "Armação em ouro rosé",
    brand: "Coleção",
    type: "Ouro Rosé",
  },
  {
    src: "/images/products/ig-DNOA8eHAydT.jpg",
    alt: "Óculos de sol rosa fuchsia",
    brand: "Exclusivo",
    type: "Óculos de Sol",
  },
  {
    src: "/images/products/ig-DNYR2etyoY4.jpg",
    alt: "Armação metálica burgundy",
    brand: "Premium",
    type: "Armação Metálica",
  },
  {
    src: "/images/products/ig-DMsg4zOg9PW.jpg",
    alt: "Armação redonda tartaruga",
    brand: "Clássico",
    type: "Tartaruga",
  },
  {
    src: "/images/products/ig-DN8WpuW3LJD.jpg",
    alt: "Óculos de sol azul escuro com flores",
    brand: "Floral",
    type: "Óculos de Sol",
  },
  {
    src: "/images/products/ig-DL2bA1Ngl0b.jpg",
    alt: "Óculos de sol preto em superfície texturizada",
    brand: "Black",
    type: "Óculos de Sol",
  },
  {
    src: "/images/products/ig-DSIf0SHDsmS.jpg",
    alt: "Ray-Ban Meta smart glasses em estojo de couro",
    brand: "Ray-Ban",
    type: "Meta Smart Glasses",
  },
];

export default function Gallery() {
  return (
    <>
      {/* Gallery Section - Store & Highlights */}
      <section id="gallery" className="bg-neutral-950 py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto mb-10 md:mb-14">
          <p className="reveal text-brand-400 text-xs tracking-[0.3em] uppercase mb-4">
            Galeria
          </p>
          <h2 className="reveal font-display font-bold text-display-md text-white">
            Conheça nosso <span className="text-brand-400">espaço</span>
          </h2>
        </div>

        {/* Bento grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[180px] md:auto-rows-[220px]">
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
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <span className="text-white text-sm font-display tracking-wider uppercase">
                  {item.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Products Section - Nossos Oculos */}
      <section id="produtos" className="bg-neutral-900 py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto mb-10 md:mb-14">
          <p className="reveal text-brand-400 text-xs tracking-[0.3em] uppercase mb-4">
            Produtos
          </p>
          <h2 className="reveal font-display font-bold text-display-md text-white">
            Nossos <span className="text-brand-400">óculos</span>
          </h2>
          <p className="reveal mt-4 text-neutral-400 max-w-2xl text-base md:text-lg">
            Cada peça é selecionada com cuidado para oferecer estilo, conforto e qualidade.
            Confira alguns dos nossos modelos favoritos.
          </p>
        </div>

        {/* Products grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
          {productItems.map((item, i) => (
            <div
              key={`${item.src}-product`}
              className={`reveal reveal-delay-${Math.min(i, 4)} group relative rounded-xl overflow-hidden bg-neutral-800`}
            >
              <div className="aspect-[3/4] relative">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-brand-400 text-[10px] md:text-xs tracking-[0.2em] uppercase font-medium">
                  {item.brand}
                </p>
                <p className="text-white text-sm md:text-base font-display font-semibold mt-0.5">
                  {item.type}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
