import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '@/assets/logot.png';

const navItems = [
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Método', href: '#metodo' },
  { label: 'Marcas', href: '#clientes' },
  { label: 'Contacto', href: '#contacto' },

];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/100 backdrop-blur-md text-black font-heading">
      <div className="section-container">
        <div className="flex items-center justify-between h-20 md:h-24">
          <a href="#" className="block">
            <img
              src={logo}
              alt="Kitchen Media"
              className="h-16 w-16 md:h-24 md:w-24 object-contain"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm uppercase tracking-wide font-medium hover:opacity-60 transition-opacity"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-black"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-8 border-t border-black/10 bg-white animate-fade-in font-heading">
            <div className="flex flex-col gap-6">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-lg uppercase tracking-wide font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
