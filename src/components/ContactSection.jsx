import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    projectType: 'Gedung / Fasilitas Kesehatan',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const waNumber = '6285315743553';
    const text = `Halo Admin CV Sinergi Banyu Bening,%0A%0ASaya ingin berkonsultasi mengenai proyek.%0A- *Nama:* ${formData.name}%0A- *No HP:* ${formData.phone}%0A- *Jenis Proyek:* ${formData.projectType}%0A- *Pesan/Catatan:* ${formData.message}`;
    
    window.open(`https://wa.me/${waNumber}?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="relative min-h-[calc(100vh-5rem)] flex flex-col justify-center items-center bg-brand-bg-light/60 px-4 py-6 overflow-hidden">
      
      {/* ================= ORNAMEN GEOMETRIS BACKGROUND (ANIMASI FLOATING) ================= */}
      <motion.div 
        animate={{ y: [0, -8, 0], rotate: [12, 18, 12] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 left-6 w-28 h-28 border-2 border-brand-amber/20 rounded-2xl pointer-events-none z-0"
      />
      <motion.div 
        animate={{ scale: [1, 1.2, 1], rotate: [-6, -14, -6] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-14 w-14 h-14 bg-brand-blue/10 rounded-xl pointer-events-none z-0"
      />
      <motion.div 
        animate={{ y: [0, 8, 0], rotate: [-12, -20, -12] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 right-8 w-32 h-32 border-2 border-brand-blue/15 rounded-3xl pointer-events-none z-0"
      />
      <motion.div 
        animate={{ rotate: [45, 90, 45] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute top-24 right-16 w-12 h-12 bg-brand-amber/10 rounded-xl pointer-events-none z-0"
      />
      <div className="absolute bottom-8 left-10 w-20 h-20 bg-brand-blue/5 rounded-2xl rotate-45 pointer-events-none z-0"></div>
      <div className="absolute bottom-8 right-8 w-24 h-24 border border-brand-navy/15 rounded-2xl -rotate-6 pointer-events-none z-0"></div>

      {/* ================= KONTEN UTAMA ================= */}
      <div className="relative z-10 max-w-6xl mx-auto text-center w-full my-auto">
        
        {/* Header Seksi */}
        <motion.div 
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="space-y-1.5 mb-6 max-w-3xl mx-auto"
        >
          <span className="inline-block px-3 py-0.5 bg-brand-blue/10 text-brand-blue font-bold text-[11px] uppercase tracking-widest rounded-full shadow-sm hover:scale-105 transition-transform cursor-default">
            Hubungi Kami
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy leading-tight tracking-tight">
            Konsultasikan Rencana Proyek Anda
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed max-w-xl mx-auto">
            Tim teknis kami siap membantu kebutuhan pembangunan gedung, fasilitas kesehatan, maupun infrastruktur jalan.
          </p>
        </motion.div>

        {/* Grid Informasi & Formulir */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 text-left items-stretch">
          
          {/* Kartu Informasi Kantor (Slide In From Left) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col justify-between bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
          >
            <div>
              <h3 className="text-base font-bold text-brand-navy border-b border-gray-100 pb-3 mb-4">
                Informasi Kantor
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3 group">
                  <div className="w-9 h-9 rounded-lg bg-brand-bg-light group-hover:bg-brand-blue group-hover:text-white flex items-center justify-center shrink-0 text-brand-blue border border-gray-100 transition-colors duration-300">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <h4 className="text-[11px] font-bold text-brand-navy uppercase group-hover:text-brand-blue transition-colors">Alamat Utama</h4>
                    <p className="text-xs text-gray-600 mt-0.5 leading-relaxed">
                      PERUMAHAN CIPANAS VILLAS BLOK B9, DESA LAGENSARI, KEC. TAROGONG KALER, KAB. GARUT, JAWA BARAT
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 group">
                  <div className="w-9 h-9 rounded-lg bg-brand-bg-light group-hover:bg-brand-blue group-hover:text-white flex items-center justify-center shrink-0 text-brand-blue border border-gray-100 transition-colors duration-300">
                    <Phone size={18} />
                  </div>
                  <div>
                    <h4 className="text-[11px] font-bold text-brand-navy uppercase group-hover:text-brand-blue transition-colors">Telepon / WhatsApp</h4>
                    <p className="text-xs text-gray-600 mt-0.5">085315743553</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 group">
                  <div className="w-9 h-9 rounded-lg bg-brand-bg-light group-hover:bg-brand-blue group-hover:text-white flex items-center justify-center shrink-0 text-brand-blue border border-gray-100 transition-colors duration-300">
                    <Mail size={18} />
                  </div>
                  <div>
                    <h4 className="text-[11px] font-bold text-brand-navy uppercase group-hover:text-brand-blue transition-colors">Email Resmi</h4>
                    <p className="text-xs text-gray-600 mt-0.5">cv.sinergibanyubening@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 group">
                  <div className="w-9 h-9 rounded-lg bg-brand-bg-light group-hover:bg-brand-blue group-hover:text-white flex items-center justify-center shrink-0 text-brand-blue border border-gray-100 transition-colors duration-300">
                    <Clock size={18} />
                  </div>
                  <div>
                    <h4 className="text-[11px] font-bold text-brand-navy uppercase group-hover:text-brand-blue transition-colors">Jam Operasional</h4>
                    <p className="text-xs text-gray-600 mt-0.5">Senin – Sabtu: 08.00 – 17.00 WIB</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-gray-100 text-[11px] text-gray-500">
              *Respon cepat via WhatsApp pada jam operasional kerja.
            </div>
          </motion.div>

          {/* Kartu Formulir Konsultasi (Slide In From Right) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
          >
            <form onSubmit={handleSubmit} className="space-y-3.5">
              <h3 className="text-base font-bold text-brand-navy mb-1">
                Formulir Penawaran & Konsultasi
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold text-brand-navy mb-1">
                    Nama Lengkap / Instansi
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: Bpk. Ahmad"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-gray-200 text-xs focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-brand-navy mb-1">
                    Nomor WhatsApp / Telepon
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="0812xxxxxxx"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-gray-200 text-xs focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-brand-navy mb-1">
                  Jenis Proyek
                </label>
                <select
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-gray-200 text-xs focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue bg-white transition-all"
                >
                  <option value="Gedung / Fasilitas Kesehatan">Konstruksi Gedung / Fasilitas Kesehatan</option>
                  <option value="Perumahan / Gedung Komersial">Perumahan / Gedung Komersial</option>
                  <option value="Pengaspalan Jalan (Hotmix)">Pengaspalan Jalan (Hotmix)</option>
                  <option value="Pengecoran Jalan Beton">Pengecoran Jalan Beton (Rigid)</option>
                  <option value="Renovasi & Perbaikan">Renovasi & Pemeliharaan</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-brand-navy mb-1">
                  Detail Pesan / Catatan Proyek
                </label>
                <textarea
                  rows="3"
                  required
                  placeholder="Jelaskan secara singkat rencana lokasi, estimasi luas, atau kebutuhan proyek Anda..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-gray-200 text-xs focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue resize-none transition-all"
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.01, y: -1 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-brand-amber text-brand-navy font-bold py-2.5 px-5 rounded-lg shadow-sm hover:bg-amber-500 hover:shadow-md transition-all flex items-center justify-center gap-2 text-xs uppercase tracking-wider mt-2 group"
              >
                <Send size={15} className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-300" />
                Kirim Pesan Konsultasi
              </motion.button>
            </form>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default ContactSection;