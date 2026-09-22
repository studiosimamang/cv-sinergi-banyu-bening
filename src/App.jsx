import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import { Building2, Road, ShieldCheck, HardHat } from 'lucide-react';

// Variasi Animasi Fade In & Fade Out Per Halaman
const pageVariants = {
  initial: {
    opacity: 0,
    y: 12,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: [0.25, 1, 0.5, 1], // Custom Smooth Easing
    },
  },
  exit: {
    opacity: 0,
    y: -12,
    transition: {
      duration: 0.25,
      ease: [0.25, 1, 0.5, 1],
    },
  },
};

function App() {
  const [activePage, setActivePage] = useState('home');

  return (
    <div className="min-h-screen bg-white font-sans text-brand-navy flex flex-col justify-between selection:bg-brand-blue selection:text-white">
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      
      {/* Area Konten Utama Per Halaman dengan Framer Motion AnimatePresence */}
      <main className="flex-grow pt-16 overflow-hidden">
        <AnimatePresence mode="wait">
          
          {/* PAGE 1: BERANDA / HERO */}
          {activePage === 'home' && (
            <motion.section
              key="home"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="relative min-h-[calc(100vh-4rem)] flex flex-col justify-center items-center overflow-hidden bg-gradient-to-b from-brand-bg-light via-white to-white py-12 px-4"
            >
              
              {/* Ornamen Geometris Background */}
              <div className="absolute top-12 -left-10 w-40 h-40 border-2 border-brand-blue/15 rounded-2xl rotate-12 pointer-events-none z-0"></div>
              <div className="absolute top-24 left-10 w-24 h-24 bg-brand-amber/10 rounded-xl -rotate-6 pointer-events-none z-0"></div>
              <div className="absolute top-16 -right-12 w-48 h-48 border-2 border-brand-amber/20 rounded-3xl -rotate-12 pointer-events-none z-0"></div>
              <div className="absolute top-36 right-12 w-20 h-20 bg-brand-blue/10 rounded-2xl rotate-12 pointer-events-none z-0"></div>

              <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6 my-auto"> 
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-navy leading-tight tracking-tight drop-shadow-sm">
                  Membangun Infrastruktur & Bangunan Berkualitas High-Standard
                </h1>
                
                <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
                  CV Sinergi Banyu Bening melayani pembangunan fasilitas kesehatan, gedung umum, hunian, serta pengerjaan jalan dengan presisi, keamanan, dan ketepatan waktu.
                </p>
                
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <motion.button
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setActivePage('contact')}
                    className="w-full sm:w-auto bg-brand-amber text-brand-navy px-8 py-3.5 rounded-lg font-bold shadow-md hover:bg-amber-500 hover:shadow-lg transition-all text-sm"
                  >
                    Mulai Konsultasi Proyek
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setActivePage('services')}
                    className="w-full sm:w-auto bg-white border border-gray-300 text-brand-navy px-8 py-3.5 rounded-lg font-bold hover:bg-gray-50 hover:border-brand-blue transition-all text-sm shadow-sm"
                  >
                    Lihat Layanan Kami
                  </motion.button>
                </div>

                {/* Mini Cards Keunggulan Interaktif */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-10 text-left">
                  <motion.div 
                    whileHover={{ y: -4 }}
                    className="bg-white/95 backdrop-blur-sm p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-brand-blue/30 transition-all flex items-center gap-3 cursor-pointer group"
                  >
                    <Building2 className="text-brand-blue shrink-0 group-hover:scale-110 transition-transform" size={24} />
                    <div>
                      <h4 className="text-xs font-bold text-brand-navy group-hover:text-brand-blue transition-colors">Gedung & Faskes</h4>
                      <p className="text-[10px] text-gray-500">Kesehatan & Umum</p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    whileHover={{ y: -4 }}
                    className="bg-white/95 backdrop-blur-sm p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-brand-blue/30 transition-all flex items-center gap-3 cursor-pointer group"
                  >
                    <Road className="text-brand-blue shrink-0 group-hover:scale-110 transition-transform" size={24} />
                    <div>
                      <h4 className="text-xs font-bold text-brand-navy group-hover:text-brand-blue transition-colors">Pembangunan Jalan</h4>
                      <p className="text-[10px] text-gray-500">Aspal & Beton</p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    whileHover={{ y: -4 }}
                    className="bg-white/95 backdrop-blur-sm p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-brand-blue/30 transition-all flex items-center gap-3 cursor-pointer group"
                  >
                    <ShieldCheck className="text-brand-blue shrink-0 group-hover:scale-110 transition-transform" size={24} />
                    <div>
                      <h4 className="text-xs font-bold text-brand-navy group-hover:text-brand-blue transition-colors">Legalitas Resmi</h4>
                      <p className="text-[10px] text-gray-500">SIUJK & Sertifikasi</p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    whileHover={{ y: -4 }}
                    className="bg-white/95 backdrop-blur-sm p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-brand-blue/30 transition-all flex items-center gap-3 cursor-pointer group"
                  >
                    <HardHat className="text-brand-blue shrink-0 group-hover:scale-110 transition-transform" size={24} />
                    <div>
                      <h4 className="text-xs font-bold text-brand-navy group-hover:text-brand-blue transition-colors">Tenaga Ahli</h4>
                      <p className="text-[10px] text-gray-500">Berpengalaman</p>
                    </div>
                  </motion.div>
                </div>

              </div>
            </motion.section>
          )}

          {/* PAGE 2: HALAMAN TENTANG KAMI */}
          {activePage === 'about' && (
            <motion.div key="about" variants={pageVariants} initial="initial" animate="animate" exit="exit">
              <AboutSection />
            </motion.div>
          )}

          {/* PAGE 3: HALAMAN LAYANAN */}
          {activePage === 'services' && (
            <motion.div key="services" variants={pageVariants} initial="initial" animate="animate" exit="exit">
              <ServicesSection />
            </motion.div>
          )}

          {/* PAGE 4: HALAMAN PORTOFOLIO */}
          {activePage === 'projects' && (
            <motion.div key="projects" variants={pageVariants} initial="initial" animate="animate" exit="exit">
              <ProjectsSection />
            </motion.div>
          )}

          {/* PAGE 5: HALAMAN KONTAK */}
          {activePage === 'contact' && (
            <motion.div key="contact" variants={pageVariants} initial="initial" animate="animate" exit="exit">
              <ContactSection />
            </motion.div>
          )}

        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}

export default App;