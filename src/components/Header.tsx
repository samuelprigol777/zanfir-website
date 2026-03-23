"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "Início", href: "#hero" },
  { label: "Marcas", href: "#brands" },
  { label: "Galeria", href: "#gallery" },
  { label: "Serviços", href: "#services" },
  { label: "Contato", href: "#contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-neutral-950/90 backdrop-blur-md border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between px-5 md:px-8 h-14 md:h-16">
          {/* Social links left */}
          <div className="flex items-center gap-4 text-xs tracking-[0.2em] uppercase">
            <a
              href="https://wa.me/555437124500"
              target="_blank"
              rel="noopener noreferrer"
              className="link-hover text-white/70 hover:text-brand-400 transition-colors"
            >
              WA
            </a>
            <a
              href="https://www.instagram.com/oticazanfir/"
              target="_blank"
              rel="noopener noreferrer"
              className="link-hover text-white/70 hover:text-brand-400 transition-colors"
            >
              IG
            </a>
          </div>

          {/* Logo center */}
          <a
            href="#hero"
            className="font-display font-bold text-sm md:text-base tracking-[0.15em] uppercase text-white hover:text-brand-400 transition-colors"
          >
            Ótica Zanfir
          </a>

          {/* Hamburger right */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="relative w-8 h-8 flex flex-col items-center justify-center gap-1.5 z-[60]"
            aria-label="Menu"
          >
            <span
              className={`block w-6 h-[1.5px] bg-white transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-[4.5px]" : ""
              }`}
            />
            <span
              className={`block w-6 h-[1.5px] bg-white transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-[4.5px]" : ""
              }`}
            />
          </button>
        </div>
      </header>

      {/* Full-screen menu overlay */}
      <div
        className={`menu-overlay fixed inset-0 z-[55] bg-neutral-950 flex items-center justify-center ${
          menuOpen ? "open" : ""
        }`}
      >
        <nav className="text-center">
          <ul className="space-y-6">
            {navLinks.map((link, i) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-display text-display-md text-white hover:text-brand-400 transition-colors block"
                  style={{ transitionDelay: menuOpen ? `${i * 0.05}s` : "0s" }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-12 text-white/40 text-sm tracking-widest uppercase">
            <a
              href="https://wa.me/555437124500"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-400 transition-colors"
            >
              WhatsApp
            </a>
            <span className="mx-3">/</span>
            <a
              href="https://www.instagram.com/oticazanfir/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-400 transition-colors"
            >
              Instagram
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
