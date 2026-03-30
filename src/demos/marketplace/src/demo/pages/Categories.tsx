import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Microscope, ThermometerSnowflake, ShieldCheck, Factory } from 'lucide-react';
import { CATEGORIES } from '../data/mockData';
import { mp } from '../lib/paths';

export const Categories = () => {
  return (
    <div className="min-h-screen pt-40 pb-32 bg-surface px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="mb-24">
          <div className="flex items-center gap-6 mb-8">
            <span className="text-[11px] font-sans font-bold uppercase tracking-[0.5em] text-oxblood/40">Facility_Infrastructure</span>
            <span className="w-20 h-px bg-oxblood/10"></span>
          </div>
          <h1 className="text-7xl md:text-8xl font-serif font-bold text-charcoal mb-8 tracking-tight">Production <span className="serif-italic text-oxblood">Lines</span></h1>
          <p className="text-charcoal/50 font-serif italic text-2xl max-w-2xl leading-relaxed">
            Our facility is organized into specialized processing nodes, each optimized for specific product categories and quality standards.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {CATEGORIES.map((category, idx) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="premium-card group overflow-hidden bg-white"
            >
              <div className="h-[400px] overflow-hidden relative">
                <img 
                  src={category.image} 
                  alt={category.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-transparent transition-colors duration-700"></div>
                <div className="absolute top-10 left-10">
                  <span className="px-6 py-2 bg-white/95 backdrop-blur-md text-[10px] font-sans font-bold uppercase tracking-[0.3em] text-oxblood border border-border">
                    Node_0{idx + 1}
                  </span>
                </div>
              </div>
              <div className="p-16">
                <div className="flex justify-between items-start mb-8">
                  <h3 className="text-4xl font-serif font-bold text-charcoal tracking-tight">{category.name}</h3>
                  <span className="text-[11px] font-sans font-bold uppercase tracking-[0.3em] text-oxblood/40">
                    {category.count} Active_SKUs
                  </span>
                </div>
                <p className="text-charcoal/60 font-serif italic text-lg mb-12 leading-relaxed">
                  {category.description} Specialized processing lines with integrated cold chain monitoring and quality assurance protocols.
                </p>
                
                <div className="grid grid-cols-2 gap-8 mb-12 border-y border-border py-10">
                  <div className="flex items-center gap-4">
                    <ThermometerSnowflake className="text-oxblood/40" size={20} />
                    <span className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-charcoal/60">Sub-Zero Chilled</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <ShieldCheck className="text-oxblood/40" size={20} />
                    <span className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-charcoal/60">HACCP Certified</span>
                  </div>
                </div>

                <Link 
                  to={mp('marketplace')} 
                  className="inline-flex items-center gap-4 text-[11px] font-sans font-bold uppercase tracking-[0.4em] text-oxblood group-hover:gap-8 transition-all duration-500"
                >
                  Access Production Line <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Facility Stats */}
        <div className="mt-32 premium-card p-16 bg-charcoal text-white text-center">
          <div className="max-w-3xl mx-auto">
            <Factory className="text-oxblood mx-auto mb-10" size={48} />
            <h2 className="text-4xl font-serif font-bold mb-8 tracking-tight">Integrated Processing Infrastructure</h2>
            <p className="text-white/50 font-serif italic text-xl mb-12 leading-relaxed">
              Our facility operates 24/7 under strict industrial protocols, ensuring that every product meets the highest standards of the global meat industry.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-12 border-t border-white/10">
              <div>
                <p className="text-4xl font-serif font-bold text-oxblood mb-2">12,000m²</p>
                <p className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-white/30">Facility_Footprint</p>
              </div>
              <div>
                <p className="text-4xl font-serif font-bold text-oxblood mb-2">100%</p>
                <p className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-white/30">Cold_Chain_Integrity</p>
              </div>
              <div>
                <p className="text-4xl font-serif font-bold text-oxblood mb-2">Global</p>
                <p className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-white/30">Distribution_Ready</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
