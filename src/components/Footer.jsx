import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-brand-navy text-white pt-6 pb-3 border-t-2 border-brand-amber text-[11px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-4">
          
          {/* Col 1: Profil */}
          <div className="space-y-2 md:col-span-1">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center p-1 shrink-0">
                <img src={logo} alt="CV Sinergi Banyu Bening" className="w-full h-full object-contain" />
              </div>
              <span className="font-bold text-white text-xs">
                CV Sinergi Banyu Bening
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed text-[10px]">
              Spesialis kontraktor gedung fasilitas kesehatan, umum, hunian, serta pengaspalan dan pengecoran jalan.
            </p>
          </div>

          {/* Col 2: Navigasi */}
          <div>
            <h4 className="text-[11px] font-bold mb-2 text-brand-amber uppercase tracking-wider">Navigasi</h4>
            <ul className="space-y-1 text-gray-300">
              <li><a href="#home" className="hover:text-brand-amber transition-colors">Beranda</a></li>
              <li><a href="#about" className="hover:text-brand-amber transition-colors">Tentang Kami</a></li>
              <li><a href="#services" className="hover:text-brand-amber transition-colors">Layanan</a></li>
              <li><a href="#projects" className="hover:text-brand-amber transition-colors">Portofolio</a></li>
            </ul>
          </div>

          {/* Col 3: Layanan */}
          <div>
            <h4 className="text-[11px] font-bold mb-2 text-brand-amber uppercase tracking-wider">Layanan</h4>
            <ul className="space-y-1 text-gray-300">
              <li>Konstruksi Gedung Kesehatan</li>
              <li>Pembangunan Gedung & Hunian</li>
              <li>Pengaspalan & Jalan Beton</li>
              <li>Renovasi & Infrastruktur</li>
            </ul>
          </div>

          {/* Col 4: Kontak */}
          <div>
            <h4 className="text-[11px] font-bold mb-2 text-brand-amber uppercase tracking-wider">Kontak</h4>
            <ul className="space-y-1.5 text-gray-300">
              <li className="flex items-start gap-1.5">
                <MapPin className="text-brand-amber shrink-0 mt-0.5" size={12} />
                <span>PERUMAHAN CIPANAS VILLAS BLOK B9, DESA LAGENSARI, KEC. TAROGONG KALER, KAB. GARUT, JAWA BARAT</span>
              </li>
              <li className="flex items-center gap-1.5">
                <Phone className="text-brand-amber shrink-0" size={12} />
                <span>085315743553</span>
              </li>
              <li className="flex items-center gap-1.5">
                <Mail className="text-brand-amber shrink-0" size={12} />
                <span>cv.sinergibanyubening@gmail.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-3 border-t border-gray-800 text-center text-[10px] text-gray-500">
          <p>© {new Date().getFullYear()} CV Sinergi Banyu Bening. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;