import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
// Import file logo secara langsung agar Vite menyesuaikan path relatifnya secara otomatis
import logoImg from '../assets/logo.png';

const Navbar = ({ activePage, setActivePage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Beranda', id: 'home' },
    { name: 'Tentang Kami', id: 'about' },
    { name: 'Layanan', id: 'services' },
    { name: 'Portofolio', id: 'projects' },
    { name: 'Kontak', id: 'contact' },
  ];

  const handleNavClick = (id) => {
    setActivePage(id);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-100 z-50 shadow-sm transition-all duration-300">
      <div className="w-full px-6 sm:px-10">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Gambar Murni & Nama CV */}
          <div 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-11 h-11 rounded-full bg-brand-bg-light border border-gray-200 flex items-center justify-center overflow-hidden p-1 shadow-sm shrink-0 group-hover:border-brand-blue/50 transition-all duration-300">
              <img 
                src={logoImg} 
                alt="Logo CV Sinergi Banyu Bening" 
                className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <span className="font-extrabold text-brand-navy text-base sm:text-lg tracking-tight group-hover:text-brand-blue transition-colors duration-300">
              CV SINERGI BANYU BENING
            </span>
          </div>

          {/* Navigasi Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-sm sm:text-base font-semibold transition-all duration-300 relative py-1.5 group ${
                  activePage === link.id
                    ? 'text-brand-blue font-bold'
                    : 'text-gray-700 hover:text-brand-blue'
                }`}
              >
                {link.name}
                
                <span 
                  className={`absolute bottom-0 left-0 h-0.5 bg-brand-amber rounded-full transition-all duration-300 ${
                    activePage === link.id 
                      ? 'w-full' 
                      : 'w-0 group-hover:w-full group-hover:bg-brand-blue/40'
                  }`}
                ></span>
              </button>
            ))}

            <button
              onClick={() => handleNavClick('contact')}
              className="bg-brand-amber text-brand-navy px-6 py-2.5 rounded-lg text-xs sm:text-sm font-bold shadow-sm hover:bg-amber-500 hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 flex items-center gap-2 tracking-wide group"
            >
              <Phone size={16} className="group-hover:rotate-12 transition-transform duration-300" />
              HUBUNGI KAMI
            </button>
          </div>

          {/* Toggle Mobile */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-navy p-2 rounded-md hover:bg-gray-100 transition-colors duration-200"
            >
              {isOpen ? <X size={26} className="animate-in fade-in zoom-in duration-200" /> : <Menu size={26} className="animate-in fade-in zoom-in duration-200" />}
            </button>
          </div>

        </div>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="md:hidden bg-white/98 backdrop-blur-lg border-b border-gray-100 px-6 pt-2 pb-5 space-y-2 animate-in slide-in-from-top-4 fade-in duration-300 shadow-lg">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`block w-full text-left py-2.5 px-3 rounded-md text-sm font-semibold transition-all duration-200 ${
                activePage === link.id
                  ? 'bg-brand-bg-light text-brand-blue font-bold border-l-4 border-brand-amber'
                  : 'text-gray-700 hover:bg-gray-50 hover:pl-4'
              }`}
            >
              {link.name}
            </button>
          ))}
          <button
            onClick={() => handleNavClick('contact')}
            className="w-full mt-3 bg-brand-amber text-brand-navy text-center py-3 rounded-md text-sm font-bold flex items-center justify-center gap-2 shadow-sm hover:bg-amber-500 transition-all active:scale-98"
          >
            <Phone size={16} />
            HUBUNGI KAMI
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;