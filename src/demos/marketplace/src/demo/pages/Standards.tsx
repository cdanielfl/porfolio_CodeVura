import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Award, CheckCircle2, Globe, FileText, Scale } from 'lucide-react';

export const Standards = () => {
  const certifications = [
    { name: 'HACCP_Certified', icon: <ShieldCheck size={32} />, desc: 'Hazard Analysis Critical Control Point system for food safety management.' },
    { name: 'ISO_22000', icon: <Award size={32} />, desc: 'International standard for food safety management systems.' },
    { name: 'BRCGS_Global', icon: <Globe size={32} />, desc: 'Setting the benchmark for good manufacturing practices.' },
    { name: 'Halal_Protocol', icon: <CheckCircle2 size={32} />, desc: 'Compliance with Islamic dietary laws and processing standards.' },
  ];

  return (
    <div className="pt-32 pb-24 px-6 bg-charcoal min-h-screen relative">
      <div className="fixed inset-0 tech-grid opacity-10 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-24">
          <div className="flex items-center gap-2 text-neon-red font-mono text-[10px] font-bold uppercase tracking-[0.3em] mb-6">
            <span>System</span>
            <span>//</span>
            <span className="text-ice/40">Quality_Assurance</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-mono font-black tracking-tighter uppercase text-white leading-none mb-10">
            Uncompromising <span className="text-neon-red italic glow-text">Standards</span>
          </h1>
          <p className="text-xl font-mono text-ice/50 leading-relaxed max-w-3xl border-l-2 border-neon-red/30 pl-8">
            In the world of premium meat distribution, trust is built on transparency. Our multi-layered quality control system ensures that every cut meets the highest global benchmarks for safety, ethics, and molecular excellence.
          </p>
        </div>

        {/* Certification Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {certifications.map((cert, idx) => (
            <motion.div 
              key={cert.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-10 glass-panel industrial-border hover:border-neon-red transition-all group relative overflow-hidden"
            >
              <div className="w-16 h-16 glass-panel industrial-border flex items-center justify-center text-neon-red mb-10 group-hover:bg-neon-red group-hover:text-white transition-all">
                {cert.icon}
              </div>
              <h3 className="text-xl font-mono font-black text-white uppercase tracking-tighter mb-4">{cert.name}</h3>
              <p className="text-xs font-mono text-ice/40 leading-relaxed">{cert.desc}</p>
              <div className="scanline"></div>
            </motion.div>
          ))}
        </div>

        {/* The 12-Point Process */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <div className="relative group">
            <div className="industrial-border overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1603048297172-c92544798d5e?q=80&w=1000&auto=format&fit=crop" 
                alt="Quality Control" 
                className="w-full aspect-square object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-neon-red/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div className="absolute -inset-4 border border-neon-red/20 pointer-events-none group-hover:border-neon-red/50 transition-all"></div>
            <div className="absolute top-4 right-4 font-mono text-[10px] text-neon-red bg-charcoal px-3 py-1 industrial-border">
              SCAN_ACTIVE
            </div>
          </div>
          <div>
            <h2 className="text-5xl font-mono font-black text-white uppercase tracking-tighter mb-16">The 12-Point <span className="text-neon-red italic glow-text">Inspection</span></h2>
            <div className="space-y-10">
              {[
                { title: 'Origin_Verification', desc: 'DNA testing and farm-of-origin certification for every batch.' },
                { title: 'Marbling_Analysis', desc: 'Digital scanning to confirm BMS and USDA grading accuracy.' },
                { title: 'Cold_Chain_Integrity', desc: 'Continuous temperature monitoring from dispatch to delivery.' },
                { title: 'Aging_Precision', desc: 'Controlled environment monitoring for dry and wet aging processes.' },
              ].map((item, i) => (
                <div key={i} className="flex gap-8 group">
                  <span className="text-neon-red font-mono text-3xl font-black opacity-20 group-hover:opacity-100 transition-opacity">0{i+1}</span>
                  <div className="pt-1">
                    <h4 className="text-[10px] font-mono font-bold uppercase tracking-[0.4em] text-neon-red mb-3">{item.title}</h4>
                    <p className="text-sm font-mono text-ice/40 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Documentation CTA */}
        <div className="glass-panel p-16 industrial-border flex flex-col md:flex-row justify-between items-center gap-12 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full tech-grid opacity-5 pointer-events-none"></div>
          <div className="max-w-xl relative z-10">
            <h3 className="text-3xl font-mono font-black text-white uppercase tracking-tighter mb-6">Request_Compliance_Pack</h3>
            <p className="text-sm font-mono text-ice/40 leading-relaxed">Need specific health certificates or audit reports for your procurement process? Our compliance team is ready to assist with full data transparency.</p>
          </div>
          <button className="px-12 py-6 bg-neon-red text-white font-mono font-black uppercase tracking-[0.3em] hover:bg-white hover:text-charcoal transition-all flex items-center gap-4 group relative z-10">
            Download Data <FileText size={20} className="group-hover:scale-110 transition-transform" />
          </button>
          <div className="scanline"></div>
        </div>
      </div>
    </div>
  );
};
