import Image from "next/image";

const photos = [
  {
    src: "/images/loja-1.jpg",
    alt: "Display de óculos de sol na parede",
    width: 1200,
    height: 900,
    className: "col-span-1 row-span-1",
  },
  {
    src: "/images/loja-2.jpg",
    alt: "Interior da loja - vista retrato",
    width: 1200,
    height: 1600,
    className: "col-span-1 row-span-2",
  },
  {
    src: "/images/loja-3.jpg",
    alt: "Área de atendimento com assentos",
    width: 1200,
    height: 900,
    className: "col-span-1 row-span-1",
  },
  {
    src: "/images/loja-4.jpg",
    alt: "Interior da loja - outro ângulo",
    width: 1200,
    height: 900,
    className: "col-span-1 row-span-1",
  },
  {
    src: "/images/loja-5.jpg",
    alt: "Parede principal com letreiro Ótica Zanfir",
    width: 1200,
    height: 900,
    className: "col-span-1 row-span-1",
  },
  {
    src: "/images/loja-6.jpg",
    alt: "Interior da loja - vista retrato",
    width: 1200,
    height: 1600,
    className: "col-span-1 row-span-2",
  },
];

export default function Gallery() {
  return (
    <section id="galeria" className="section-padding bg-white">
      <div className="mx-auto max-w-7xl text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-brand-400">
          Galeria
        </p>
        <h2 className="section-title mt-2">Conheça nosso espaço</h2>
        <p className="section-subtitle">
          Um ambiente projetado para oferecer a melhor experiência na escolha
          dos seus óculos.
        </p>

        <div className="mt-14 columns-1 gap-4 space-y-4 sm:columns-2 lg:columns-3">
          {photos.map((photo, index) => (
            <div key={index} className="gallery-item break-inside-avoid">
              <Image
                src={photo.src}
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
                className="h-auto w-full rounded-lg object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
