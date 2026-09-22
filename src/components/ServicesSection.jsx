import React from 'react';
import { motion } from 'framer-motion';
import { Stethoscope, Building, Route, Wrench, CheckCircle2 } from 'lucide-react';

// Variasi Animasi Slide-Up Cascade Unik untuk Layanan
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Selisih antar kartu meluncur
      delayChildren: 0.1,
    },
  },
};

const slideUpVariant = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1], // Custom Smooth Cubic Easing
    },
  },
};

const ServicesSection = () => {
  const services = [
    {
      icon: <Stethoscope className="text-brand-blue group-hover:scale-110 transition-transform duration-300" size={24} />,
      title: 'Fasilitas Kesehatan',
      desc: 'Pembangunan & renovasi klinik, puskesmas, serta sarana penunjang medis dengan standar sanitasi dan tata ruang kesehatan.',
      features: ['Klinik & Puskesmas', 'Ruang Medis Khusus', 'Standar Sanitasi Tinggi'],
    },
    {
      icon: <Building className="text-brand-blue group-hover:scale-110 transition-transform duration-300" size={24} />,
      title: 'Gedung & Perumahan',
      desc: 'Konstruksi bangunan komersial, kantor, perumahan, hingga fasilitas umum dengan struktur bangunan yang kokoh.',
      features: ['Gedung Komersial', 'Perumahan & Hunian', 'Fasilitas Umum'],
    },
    {
      icon: <Route className="text-brand-blue group-hover:scale-110 transition-transform duration-300" size={24} />,
      title: 'Pembangunan Jalan',
      desc: 'Pengerjaan jalan aspal (hotmix) dan pengecoran jalan beton (rigid pavement) untuk akses publik maupun area industri.',
      features: ['Pengaspalan Hotmix', 'Beton Rigid Pavement', 'Drainase & Trotuar'],
    },
    {
      icon: <Wrench className="text-brand-blue group-hover:scale-110 transition-transform duration-300" size={24} />,
      title: 'Renovasi & Pemeliharaan',
      desc: 'Jasa perbaikan struktur, renovasi fasad, hingga perawatan berkala untuk menjaga kualitas fisik bangunan dan jalan.',
      features: ['Perbaikan Struktur', 'Renovasi Fasad', 'Maintenance Berkala'],
    },
  ];

  return (
    <section id="services" className="relative min-h-[calc(100vh-5rem)] flex flex-col justify-start sm:justify-center items-center bg-gradient-to-b from-brand-bg-light/50 via-white to-brand-bg-light/30 px-4 pt-16 pb-12 overflow-hidden">
      
      {/* ================= ORNAMEN GEOMETRIS BACKGROUND (ANIMASI ORBIT ROTATE) ================= */}
      <motion.div 
        animate={{ rotate: [12, 24, 12], y: [0, -6, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 left-6 w-28 h-28 border-2 border-brand-amber/20 rounded-2xl pointer-events-none z-0"
      />
      <motion.div 
        animate={{ scale: [1, 1.2, 1], rotate: [-6, -16, -6] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-14 w-14 h-14 bg-brand-blue/10 rounded-xl pointer-events-none z-0"
      />
      <motion.div 
        animate={{ rotate: [-12, -24, -12], y: [0, 8, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 right-8 w-32 h-32 border-2 border-brand-blue/15 rounded-3xl pointer-events-none z-0"
      />
      <motion.div 
        animate={{ rotate: [45, 90, 45] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute top-24 right-16 w-12 h-12 bg-brand-amber/10 rounded-xl pointer-events-none z-0"
      />
      <div className="absolute bottom-8 left-10 w-20 h-20 bg-brand-amber/5 rounded-2xl rotate-45 pointer-events-none z-0"></div>
      <div className="absolute bottom-8 right-8 w-24 h-24 border border-brand-navy/15 rounded-2xl -rotate-6 pointer-events-none z-0"></div>

      {/* ================= KONTEN UTAMA LAYANAN ================= */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-6xl mx-auto text-center w-full my-auto"
      >
        
        {/* Header Seksi */}
        <motion.div variants={slideUpVariant} className="space-y-1.5 mb-6 max-w-3xl mx-auto">
          <span className="inline-block px-3 py-0.5 bg-brand-blue/10 text-brand-blue font-bold text-[11px] uppercase tracking-widest rounded-full shadow-sm hover:scale-105 transition-transform">
            Layanan Utama
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-navy leading-tight tracking-tight">
            Solusi Konstruksi & Pembangunan Infrastruktur
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed pt-0.5 max-w-2xl mx-auto">
            Kami menyediakan layanan konstruksi komprehensif dari perencanaan hingga pengerjaan akhir.
          </p>
        </motion.div>

        {/* Grid Kartu Layanan (Slide-Up & Glowing Hover) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
          {services.map((item, index) => (
            <motion.div
              key={index}
              variants={slideUpVariant}
              whileHover={{ 
                y: -8, 
                scale: 1.02,
                transition: { duration: 0.25, ease: 'easeOut' }
              }}
              whileTap={{ scale: 0.98 }}
              className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 sm:p-5 border border-gray-100 shadow-sm hover:shadow-2xl hover:border-brand-blue/40 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-brand-bg-light group-hover:bg-brand-blue group-hover:text-white flex items-center justify-center mb-3 transition-all duration-300 shadow-inner">
                  {React.cloneElement(item.icon, {
                    className: "group-hover:text-white transition-colors duration-300"
                  })}
                </div>
                <h3 className="text-sm font-bold text-brand-navy mb-1.5 group-hover:text-brand-blue transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-[11px] text-gray-500 leading-relaxed mb-3">
                  {item.desc}
                </p>
              </div>

              <div className="pt-2.5 border-t border-gray-100">
                <ul className="space-y-1.5">
                  {item.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-1.5 text-[11px] text-gray-700 group-hover:translate-x-1 transition-transform duration-200">
                      <CheckCircle2 className="text-brand-blue shrink-0 group-hover:text-brand-amber transition-colors duration-300" size={13} />
                      <span className="font-medium">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

      </motion.div>
    </section>
  );
};

export default ServicesSection;