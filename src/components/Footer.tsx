import logo from '@/assets/logot.png';

const footerLinks = [
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Método', href: '#metodo' },
  { label: 'Marcas', href: '#clientes' },
  { label: 'Contacto', href: '#contacto' },
];

export const Footer = () => {
  return (
    <footer className="inverted-section py-24 md:py-32">
      <div className="section-container">
        {/* ÚNICO RENGÓN */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-14 lg:gap-10 items-start">

          {/* Columna 1: Logo + redes + copyright */}
          <div className="flex flex-col">
            <div className="flex items-center gap-6">
              <img
                src={logo}
                alt="Kitchen Media"
                className="h-28 md:h-36 w-auto object-contain invert"
              />
            </div>

            <p className="mt-6 text-sm opacity-60">
              © {new Date().getFullYear()} Kitchen Media
            </p>
          </div>

          {/* Columna 2: Subtítulo */}
          <div className="lg:pt-2">
            <p className="font-heading text-2xl md:text-3xl leading-tight opacity-80 max-w-xl">
              Ideas creativas y estratégicas pensadas para generar resultados reales.
              Buen marketing, bien hecho, sin presupuestos enormes.
            </p>
          </div>

          {/* Columna 3: Menú */}
          <div className="lg:text-right">
            <nav className="flex flex-col gap-4 lg:items-end">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm uppercase tracking-widest hover:opacity-60 transition-opacity"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

        </div>
      </div>
    </footer>
  );
};
