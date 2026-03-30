import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, Truck, Globe, Award } from 'lucide-react';
import { PRODUCTS } from '../data/mockData';
import { mp } from '../lib/paths';

export const Home = () => {
  const featuredProducts = PRODUCTS.slice(0, 3).map(p => ({
    ...p,
    price: `$${p.pricePerKg.toFixed(2)}`,
    grade: p.grade,
    origin: p.origin
  }));

  return (
    <div className="relative min-h-screen pt-20 overflow-hidden bg-surface">
      {/* Hero Section */}
      <section className="relative h-[95vh] flex items-center px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1551028150-64b9f398f678?auto=format&fit=crop&q=80&w=2000" 
            alt="Industrial Facility" 
            className="w-full h-full object-cover opacity-15 grayscale"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/90 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-6 mb-10">
              <span className="w-16 h-px bg-oxblood"></span>
              <span className="text-[11px] font-sans font-bold uppercase tracking-[0.5em] text-oxblood">VANTAGE_NODE_01</span>
            </div>
            <h1 className="text-7xl md:text-[120px] font-serif font-bold leading-[0.85] mb-10 text-charcoal tracking-tight uppercase">
              Vantage <br />
              <span className="serif-italic text-oxblood">Protein</span> <br />
              Facility
            </h1>
            <p className="text-xl md:text-2xl text-charcoal/60 font-serif italic mb-16 max-w-2xl leading-relaxed">
              Next-generation frigorífico infrastructure. Precision engineering meets traditional heritage in our state-of-the-art processing node.
            </p>
            <div className="flex flex-wrap gap-8">
              <Link 
                to={mp('marketplace')} 
                className="px-12 py-6 bg-oxblood text-white font-sans font-bold text-[11px] uppercase tracking-[0.3em] hover:bg-charcoal transition-all duration-500 shadow-xl shadow-oxblood/10"
              >
                View Catalog
              </Link>
              <Link 
                to={mp('wholesale')} 
                className="px-12 py-6 border border-charcoal/20 text-charcoal font-sans font-bold text-[11px] uppercase tracking-[0.3em] hover:bg-charcoal hover:text-white transition-all duration-500"
              >
                Facility Access
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-40 px-6 bg-white relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {[
              { label: "Daily Processing", value: "450", unit: "TONS", detail: "Automated Lines" },
              { label: "Cold Storage", value: "12k", unit: "M³", detail: "Precision Temp" },
              { label: "Quality Grade", value: "A+", unit: "CERT", detail: "Global Standards" },
              { label: "Logistics", value: "24/7", unit: "OPS", detail: "Cold Chain" }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="premium-card p-12 group"
              >
                <p className="text-[10px] font-sans font-bold uppercase tracking-[0.4em] text-oxblood/40 mb-10 group-hover:text-oxblood transition-colors duration-500">{stat.label}</p>
                <div className="flex items-baseline gap-3 mb-6">
                  <span className="text-6xl font-serif font-bold text-charcoal">{stat.value}</span>
                  <span className="text-sm font-sans font-bold text-oxblood tracking-widest">{stat.unit}</span>
                </div>
                <p className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-charcoal/30">{stat.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-40 px-6 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-10">
            <div>
              <h2 className="text-6xl font-serif font-bold mb-8 text-charcoal leading-tight">Premium <br /><span className="serif-italic text-oxblood">Selections</span></h2>
              <p className="text-charcoal/50 font-serif italic text-xl max-w-md leading-relaxed">Curated industrial inventory from our primary processing lines.</p>
            </div>
            <Link to={mp('marketplace')} className="text-[11px] font-sans font-bold uppercase tracking-[0.4em] text-oxblood hover:text-charcoal transition-colors flex items-center gap-4 group pb-2 border-b border-oxblood/20">
              View Full Catalog <ArrowRight size={16} className="group-hover:translate-x-3 transition-transform duration-500" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {featuredProducts.map((product, idx) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="premium-card group overflow-hidden"
              >
                <div className="h-[450px] overflow-hidden relative">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale hover:grayscale-0"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-8 left-8">
                    <span className="px-5 py-2 bg-white/95 backdrop-blur-md text-[10px] font-sans font-bold uppercase tracking-[0.3em] text-oxblood border border-border shadow-sm">
                      {product.category}
                    </span>
                  </div>
                </div>
                <div className="p-12">
                  <div className="flex justify-between items-start mb-8">
                    <h3 className="text-3xl font-serif font-bold text-charcoal tracking-tight">{product.name}</h3>
                    <span className="text-xl font-serif italic text-oxblood">{product.price}</span>
                  </div>
                  <div className="flex items-center gap-6 mb-10">
                    <span className="text-[11px] font-sans font-bold text-charcoal/40 uppercase tracking-[0.2em]">Grade: {product.grade}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-oxblood/10"></span>
                    <span className="text-[11px] font-sans font-bold text-charcoal/40 uppercase tracking-[0.2em]">{product.origin}</span>
                  </div>
                  <Link 
                    to={mp(`product/${product.id}`)}
                    className="w-full py-5 border border-border text-[11px] font-sans font-bold uppercase tracking-[0.3em] text-charcoal hover:bg-oxblood hover:text-white hover:border-oxblood transition-all duration-500 flex items-center justify-center gap-3"
                  >
                    View Details
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Heritage Section */}
      <section className="py-48 px-6 bg-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="flex justify-center mb-12">
              <div className="w-px h-24 bg-oxblood/20"></div>
            </div>
            <h2 className="text-6xl md:text-8xl font-serif font-bold tracking-tight text-charcoal mb-12 leading-none">
              Industrial <br />
              <span className="serif-italic text-oxblood">Heritage</span>
            </h2>
            <p className="text-xl md:text-2xl text-charcoal/50 font-serif italic mb-20 leading-relaxed max-w-3xl mx-auto">
              Since 1984, Vantage Protein has defined the standards of industrial meat processing. Our facility represents the pinnacle of cold chain technology and ethical sourcing.
            </p>
            <div className="flex flex-wrap justify-center gap-10">
              <Link 
                to={mp('wholesale')} 
                className="px-14 py-7 bg-charcoal text-white font-sans font-bold text-[11px] uppercase tracking-[0.4em] hover:bg-oxblood transition-all duration-500 shadow-2xl"
              >
                Direct Procurement
              </Link>
              <Link 
                to={mp('contact')} 
                className="px-14 py-7 border border-charcoal/20 text-charcoal font-sans font-bold text-[11px] uppercase tracking-[0.4em] hover:bg-charcoal hover:text-white transition-all duration-500"
              >
                Facility Support
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
