"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Hero() {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffsetY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen bg-neutral-950 overflow-hidden">
      {/* Store facade image with parallax */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{ transform: `translateY(${offsetY * 0.3}px)` }}
      >
        <Image
          src="/images/loja-7.jpg"
          alt="Fachada Otica Zanfir"
          fill
          className="object-cover object-center opacity-40"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/60 via-transparent to-neutral-950" />
      </div>

      {/* Giant typography */}
      <div className="relative z-10 flex flex-col items-center justify-end min-h-screen pb-16 md:pb-24 px-4">
        {/* Small tagline above */}
        <p className="text-brand-400 text-xs md:text-sm tracking-[0.3em] uppercase mb-6 animate-fade-in">
          Voce ve a diferenca
        </p>

        {/* Giant brand name */}
        <h1 className="font-display font-black text-display-xl text-center text-white leading-none tracking-tighter">
          <span className="block">OTICA</span>
          <span className="block text-brand-400">ZANFIR</span>
        </h1>

        {/* Scroll indicator */}
        <div className="mt-12 md:mt-16 flex flex-col items-center gap-2 animate-fade-in" style={{ animationDelay: "0.5s" }}>
          <span className="text-white/30 text-[10px] tracking-[0.3em] uppercase">Scroll</span>
          <div className="w-[1px] h-10 bg-gradient-to-b from-white/30 to-transparent" />
        </div>
      </div>
    </section>
  );
}
