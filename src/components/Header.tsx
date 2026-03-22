"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { href: "#sobre", label: "Sobre" },
  { href: "#marcas", label: "Marcas" },
  { href: "#galeria", label: "Galeria" },
  { href: "#servicos", label: "Serviços" },
  { href: "#contato", label: "Contato" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between md:h-20">
          {/* Logo */}
          <a
            href="#"
            className={`text-xl font-display font-bold tracking-wide transition-colors ${
              scrolled ? "text-brand-400" : "text-white"
            }`}
          >
            ÓTICA ZANFIR
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium tracking-wide uppercase transition-colors hover:text-brand-400 ${
                  scrolled ? "text-gray-700" : "text-white/90"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/555437124500?text=Olá! Gostaria de agendar uma visita na Ótica Zanfir."
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-brand-400 px-5 py-2 text-sm font-semibold text-white transition-all hover:bg-brand-500 hover:shadow-lg"
            >
              WhatsApp
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`md:hidden p-2 transition-colors ${
              scrolled ? "text-gray-700" : "text-white"
            }`}
            aria-label="Menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-96 bg-white shadow-lg" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col px-4 py-4 gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-4 py-3 text-sm font-medium text-gray-700 transition-colors hover:bg-brand-50 hover:text-brand-400"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/555437124500?text=Olá! Gostaria de agendar uma visita na Ótica Zanfir."
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 rounded-full bg-brand-400 px-5 py-3 text-center text-sm font-semibold text-white transition-all hover:bg-brand-500"
          >
            WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
