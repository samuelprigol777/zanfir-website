export default function Footer() {
  return (
    <footer className="bg-neutral-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-8 md:py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a
            href="#hero"
            className="font-display font-bold text-sm tracking-[0.15em] uppercase text-white hover:text-brand-400 transition-colors"
          >
            Ótica Zanfir
          </a>

          {/* Social links */}
          <div className="flex items-center gap-6 text-xs tracking-[0.2em] uppercase">
            <a
              href="https://wa.me/555437124500"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-brand-400 transition-colors"
            >
              WhatsApp
            </a>
            <a
              href="https://www.instagram.com/oticazanfir/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-brand-400 transition-colors"
            >
              Instagram
            </a>
          </div>

          {/* Copyright */}
          <p className="text-white/20 text-xs tracking-wider">
            &copy; {new Date().getFullYear()} Ótica Zanfir. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
