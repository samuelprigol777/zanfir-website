"use client";

import Image from "next/image";

export default function Statement() {
  return (
    <section className="relative bg-neutral-950">
      {/* Full-bleed image with text overlay */}
      <div className="relative w-full h-[70vh] md:h-[85vh] overflow-hidden">
        <Image
          src="/images/loja-5.jpg"
          alt="Interior Otica Zanfir"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/50" />

        {/* Large overlaid text */}
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <h2 className="reveal font-display font-bold text-display-lg text-white text-center max-w-4xl">
            Voce ve a{" "}
            <span className="text-brand-400 italic">diferenca.</span>
          </h2>
        </div>
      </div>

      {/* Asymmetric grid thumbnails */}
      <div className="px-4 md:px-8 py-8 md:py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-7xl mx-auto">
          <div className="reveal gallery-card aspect-[4/3] rounded-lg overflow-hidden">
            <Image
              src="/images/loja-1.jpg"
              alt="Interior da loja"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
            <div className="overlay" />
          </div>
          <div className="reveal reveal-delay-1 gallery-card aspect-[3/4] rounded-lg overflow-hidden row-span-2">
            <Image
              src="/images/loja-2.jpg"
              alt="Interior da loja"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
            <div className="overlay" />
          </div>
          <div className="reveal reveal-delay-2 gallery-card aspect-[4/3] rounded-lg overflow-hidden">
            <Image
              src="/images/loja-3.jpg"
              alt="Interior da loja"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
            <div className="overlay" />
          </div>
          <div className="reveal reveal-delay-3 gallery-card aspect-[4/3] rounded-lg overflow-hidden">
            <Image
              src="/images/loja-4.jpg"
              alt="Interior da loja"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
            <div className="overlay" />
          </div>
        </div>
      </div>
    </section>
  );
}
