import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, HardHat, Clock, Award, CheckCircle2 } from 'lucide-react';

// Variasi Animasi Staggered Container & Pop Spring
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

const headerVariants = {
  hidden: { opacity: 0, y: -15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.25, 1, 0.5, 1] },
  },
};

const cardPopVariants = {
  hidden: { opacity: 0, scale: 0.88, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 260,
      damping: 20,
    },
  },
};

const AboutSection = () => {
  const highlights = [
    {
      icon: <ShieldCheck className="text-brand-blue group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300" size={24} />,
      title: 'Legalitas Resmi',
      desc: 'Memiliki kelengkapan berkas legalitas serta sertifikasi SIUJK konstruksi yang sah.',
      points: ['Izin Resmi SIUJK', 'Sertifikat Badan Usaha', 'Legalitas Terverifikasi'],
    },
    {
      icon: <HardHat className="text-brand-blue group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300" size={24} />,
      title: 'Tenaga Ahli',
      desc: 'Didukung oleh tim teknis profesional berpengalaman di bidang bangunan & jalan.',
      points: ['Tim Teknis Bersertifikat', 'Pengalaman Lapangan', 'Pengawasan Ketat'],
    },
    {
      icon: <Clock className="text-brand-blue group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300" size={24} />,
      title: 'Tepat Waktu',
      desc: 'Komitmen penyelesaian proyek presisi sesuai jadwal (time schedule) yang disepakati.',
      points: ['Jadwal Terstruktur', 'Laporan Berkala', 'Garansi Ketepatan'],
    },
    {
      icon: <Award className="text-brand-blue group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300" size={24} />,
      title: 'Standar Kualitas',
      desc: 'Penggunaan material spesifikasi terbaik untuk daya tahan struktur jangka panjang.',
      points: ['Material Premium', 'Pengujian Struktur', 'Daya Tahan Tinggi'],
    },
  ];

  return (
    <section id="about" className="relative min-h-[calc(100vh-5rem)] flex flex-col justify-start sm:justify-center items-center bg-gradient-to-b from-white via-brand-bg-light/40 to-white px-4 pt-4 sm:pt-6 pb-12 overflow-hidden">
      
      {/* ================= ORNAMEN GEOMETRIS BACKGROUND DENGAN INFINITE FLOATING ================= */}
      <motion.div 
        animate={{ y: [0, -8, 0], rotate: [12, 16, 12] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 left-6 w-28 h-28 border-2 border-brand-blue/15 rounded-2xl pointer-events-none z-0"
      />
      <motion.div 
        animate={{ y: [0, 8, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-14 w-14 h-14 bg-brand-amber/10 rounded-xl -rotate-6 pointer-events-none z-0"
      />
      <motion.div 
        animate={{ y: [0, -10, 0], rotate: [-12, -18, -12] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 right-8 w-32 h-32 border-2 border-brand-amber/20 rounded-3xl pointer-events-none z-0"
      />
      <motion.div 
        animate={{ scale: [1, 1.15, 1], rotate: [45, 55, 45] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-24 right-16 w-12 h-12 bg-brand-blue/10 rounded-xl pointer-events-none z-0"
      />
      <div className="absolute bottom-8 left-10 w-20 h-20 bg-brand-blue/5 rounded-2xl rotate-45 pointer-events-none z-0"></div>
      <div className="absolute bottom-8 right-8 w-24 h-24 border border-brand-navy/15 rounded-2xl -rotate-6 pointer-events-none z-0"></div>

      {/* ================= KONTEN UTAMA ================= */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-6xl mx-auto text-center w-full my-auto"
      >
        
        {/* Header Seksi */}
        <motion.div variants={headerVariants} className="space-y-1.5 mb-5 max-w-3xl mx-auto">
          <motion.span 
            whileHover={{ scale: 1.05 }}
            className="inline-block px-3 py-0.5 bg-brand-blue/10 text-brand-blue font-bold text-[11px] uppercase tracking-widest rounded-full shadow-sm cursor-default"
          >
            Tentang Perusahaan
          </motion.span>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-navy leading-tight tracking-tight">
            Komitmen Kami dalam Pembangunan Infrastruktur & Bangunan Berkualitas
          </h2>
          
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed pt-0.5 max-w-2xl mx-auto">
            CV Sinergi Banyu Bening adalah perusahaan jasa konstruksi terpercaya yang berfokus pada pembangunan fasilitas kesehatan, gedung umum, hunian, serta pengerjaan pengaspalan dan jalan beton.
          </p>
        </motion.div>

        {/* Grid Kartu Keunggulan (Spring Elastic Pop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-left">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              variants={cardPopVariants}
              whileHover={{ 
                scale: 1.025, 
                y: -6,
                transition: { type: 'spring', stiffness: 350, damping: 15 }
              }}
              whileTap={{ scale: 0.98 }}
              className="bg-white/95 backdrop-blur-sm p-4 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-brand-blue/40 transition-shadow duration-300 flex flex-col justify-between group cursor-pointer"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-brand-bg-light group-hover:bg-brand-blue/10 flex items-center justify-center mb-3 transition-colors duration-300">
                  {item.icon}
                </div>
                <h3 className="text-sm font-bold text-brand-navy mb-1 group-hover:text-brand-blue transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-[11px] text-gray-500 leading-relaxed mb-3">
                  {item.desc}
                </p>
              </div>

              <div className="pt-2.5 border-t border-gray-100">
                <ul className="space-y-1.5">
                  {item.points.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-center gap-1.5 text-[11px] text-gray-700 group-hover:translate-x-1 transition-transform duration-200">
                      <CheckCircle2 className="text-brand-blue shrink-0 group-hover:text-brand-amber transition-colors duration-300" size={13} />
                      <span className="font-medium">{pt}</span>
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

export default AboutSection;