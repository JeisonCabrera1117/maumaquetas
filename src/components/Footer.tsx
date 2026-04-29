const WA_URL =
  'https://wa.me/3147446053?text=Hola%2C%20estoy%20interesado%20en%20una%20maqueta%20personalizada';

const navLinks = [
  { href: '#about', label: 'Sobre mí' },
  { href: '#gallery', label: 'Galería' },
  { href: '#services', label: 'Servicios' },
  { href: '#contact', label: 'Contacto' },
];

const Footer = () => {
  return (
    <footer className="bg-stone-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 border-b border-stone-800">
          <div>
            <a href="#" className="inline-block mb-4">
              <span className="text-2xl font-black tracking-tight">
                Mau<span className="text-amber-500">maquetas</span>
              </span>
            </a>
            <p className="text-stone-400 text-sm leading-relaxed max-w-xs">
              Taller artesanal especializado en maquetas personalizadas de alta calidad.
              Transformamos tus ideas en obras de arte tridimensionales.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold text-stone-300 uppercase tracking-widest mb-5">
              Navegación
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-stone-400 hover:text-amber-400 text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold text-stone-300 uppercase tracking-widest mb-5">
              Contacto
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={WA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-stone-400 hover:text-green-400 text-sm transition-colors"
                >
                  <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 4.315 1.731 6.086l.004.006l-1.355 4.953 5.048-1.322-.006-.004z" />
                  </svg>
                  314 744 6053
                </a>
              </li>
              <li>
                <span className="text-stone-400 text-sm">Colombia</span>
              </li>
            </ul>
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 bg-amber-500 hover:bg-amber-600 text-white text-sm font-bold px-5 py-2.5 rounded-full transition-colors"
            >
              Cotizar ahora
            </a>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-stone-500 text-xs">
          <p>© {new Date().getFullYear()} Maumaquetas · Todos los derechos reservados</p>
          <p>Arte en maquetas artesanales personalizadas · Colombia</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;