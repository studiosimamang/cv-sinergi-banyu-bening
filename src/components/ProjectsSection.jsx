import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Calendar, Building2, Road } from 'lucide-react';

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Konstruksi Gedung Fasilitas Kesehatan',
      category: 'bangunan',
      categoryLabel: 'Fasilitas Kesehatan',
      location: 'Jawa Barat',
      year: '2023',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80',
      desc: 'Pembangunan struktur dan finishing gedung fasilitas pelayanan kesehatan dengan standar sanitasi & K3 ketat.',
    },
    {
      id: 2,
      title: 'Pengerjaan Pengaspalan Jalan Akses Utama',
      category: 'jalan',
      categoryLabel: 'Pembangunan Jalan',
      location: 'Jawa Barat',
      year: '2023',
      // Gambar baru Unsplash untuk Pengaspalan Jalan Hotmix
      image: 'https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?auto=format&fit=crop&w=800&q=80',
      desc: 'Pengaspalan jalan hotmix presisi tinggi untuk kelancaran arus transportasi publik dan kawasan pemukiman.',
    },
    {
      id: 3,
      title: 'Pembangunan Kompleks Gedung & Hunian',
      category: 'bangunan',
      categoryLabel: 'Gedung & Hunian',
      location: 'Jawa Barat',
      year: '2024',
      // Gambar baru Unsplash untuk Kompleks Gedung & Konstruksi Modern
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
      desc: 'Konstruksi gedung bertingkat dengan fondasi kokoh dan desain arsitektur modern sesuai spesifikasi.',
    },
    {
      id: 4,
      title: 'Pengecoran Jalan Beton (Rigid Pavement)',
      category: 'jalan',
      categoryLabel: 'Pembangunan Jalan',
      location: 'Jawa Barat',
      year: '2024',
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80',
      desc: 'Pengecoran jalan beton rigid pavement untuk ketahanan beban berat dan akses jangka panjang.',
    },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="relative pt-6 pb-16 bg-white overflow-hidden scroll-mt-20">
      
      {/* ORNAMEN GEOMETRIS BACKGROUND (FLOATING ANIMATIONS) */}
      <motion.div 
        animate={{ y: [0, -10, 0], rotate: [12, 18, 12] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-6 -left-10 w-40 h-40 border-2 border-brand-blue/10 rounded-3xl pointer-events-none z-0"
      />
      <motion.div 
        animate={{ y: [0, 10, 0], rotate: [-12, -20, -12] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 -right-8 w-32 h-32 bg-brand-amber/10 rounded-2xl pointer-events-none z-0"
      />
      <div className="absolute bottom-12 left-8 w-24 h-24 border border-brand-navy/15 rounded-xl rotate-45 pointer-events-none z-0"></div>
      <div className="absolute top-4 left-1/2 -translate-x-1/2 w-80 h-80 bg-brand-blue/5 rounded-full blur-3xl pointer-events-none z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Seksi */}
        <div className="text-center max-w-2xl mx-auto mb-6">
          <span className="inline-block px-3 py-0.5 bg-brand-blue/10 text-brand-blue font-bold text-[11px] uppercase tracking-widest rounded-full shadow-sm mb-1">
            Portofolio Proyek
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-navy leading-tight">
            Rekam Jejak Pekerjaan Konstruksi Kami
          </h3>
          <p className="mt-2 text-gray-600 text-xs sm:text-sm">
            Beberapa hasil pengerjaan proyek fasilitas kesehatan, gedung umum, serta pembangunan jalan.
          </p>
        </div>

        {/* Filter Buttons dengan Tap Bounce */}
        <div className="flex justify-center items-center gap-2.5 mb-8 flex-wrap">
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveFilter('all')}
            className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-300 ${
              activeFilter === 'all'
                ? 'bg-brand-navy text-white shadow-md scale-105'
                : 'bg-brand-bg-light text-brand-navy hover:bg-gray-200'
            }`}
          >
            Semua Proyek
          </motion.button>
          
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveFilter('bangunan')}
            className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-300 flex items-center gap-1.5 ${
              activeFilter === 'bangunan'
                ? 'bg-brand-navy text-white shadow-md scale-105'
                : 'bg-brand-bg-light text-brand-navy hover:bg-gray-200'
            }`}
          >
            <Building2 size={13} />
            Gedung & Kesehatan
          </motion.button>

          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveFilter('jalan')}
            className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-300 flex items-center gap-1.5 ${
              activeFilter === 'jalan'
                ? 'bg-brand-navy text-white shadow-md scale-105'
                : 'bg-brand-bg-light text-brand-navy hover:bg-gray-200'
            }`}
          >
            <Road size={13} />
            Pembangunan Jalan
          </motion.button>
        </div>

        {/* Grid Portofolio dengan AnimatePresence & Smooth Layout Shift */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                whileHover={{ y: -6 }}
                className="bg-brand-bg-light/90 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:border-brand-blue/40 transition-all duration-300 group flex flex-col justify-between cursor-pointer"
              >
                <div className="relative h-40 sm:h-44 bg-gray-200 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 ease-out"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/600x400?text=Proyek+Konstruksi';
                    }}
                  />
                  <span className="absolute top-3 left-3 bg-brand-amber text-brand-navy font-bold text-[10px] uppercase px-2.5 py-1 rounded-full shadow-sm">
                    {project.categoryLabel}
                  </span>
                </div>

                <div className="p-4 sm:p-5 flex-grow">
                  <div className="flex items-center gap-3 text-[11px] text-gray-500 mb-1.5">
                    <span className="flex items-center gap-1">
                      <MapPin size={13} className="text-brand-blue" />
                      {project.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar size={13} className="text-brand-blue" />
                      {project.year}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-brand-navy mb-1.5 leading-snug group-hover:text-brand-blue transition-colors duration-300">
                    {project.title}
                  </h4>

                  <p className="text-xs text-gray-600 leading-normal">
                    {project.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default ProjectsSection;