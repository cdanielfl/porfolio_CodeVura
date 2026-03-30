import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  ArrowLeft, 
  ShieldCheck, 
  Truck, 
  Globe, 
  Info, 
  ChevronRight, 
  FileText, 
  Microscope,
  ThermometerSnowflake,
  PackageCheck
} from 'lucide-react';
import { PRODUCTS } from '../data/mockData';
import { cn } from '../lib/utils';
import { mp } from '../lib/paths';

export const ProductDetails = () => {
  const { id } = useParams();
  const product = PRODUCTS.find(p => p.id === id) || PRODUCTS[0];
  const [quantity, setQuantity] = useState(product.minOrder);

  return (
    <div className="min-h-screen pt-40 pb-32 bg-surface px-6">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-4 mb-16 text-[11px] font-sans font-bold uppercase tracking-[0.3em]">
          <Link to={mp('marketplace')} className="text-charcoal/40 hover:text-oxblood transition-colors flex items-center gap-2">
            <ArrowLeft size={14} /> Back_to_Catalog
          </Link>
          <span className="text-charcoal/10">/</span>
          <span className="text-oxblood">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
          {/* Product Visuals */}
          <div className="lg:col-span-7 space-y-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="premium-card overflow-hidden aspect-[4/3] bg-charcoal"
            >
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            <div className="grid grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="premium-card aspect-square overflow-hidden bg-charcoal/5">
                  <img 
                    src={product.image} 
                    alt={`${product.name} view ${i}`} 
                    className="w-full h-full object-cover opacity-40 hover:opacity-100 transition-opacity duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
              ))}
            </div>

            <div className="premium-card p-12 bg-white space-y-10">
              <h3 className="text-[11px] font-sans font-bold uppercase tracking-[0.4em] text-oxblood">Industrial_Specifications</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-oxblood/5 text-oxblood">
                      <Microscope size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-charcoal/40 mb-1">Quality_Grade</p>
                      <p className="text-base font-serif italic text-charcoal">{product.grade} Standard</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-oxblood/5 text-oxblood">
                      <ThermometerSnowflake size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-charcoal/40 mb-1">Storage_Protocol</p>
                      <p className="text-base font-serif italic text-charcoal">Deep Freeze (-18°C)</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-oxblood/5 text-oxblood">
                      <PackageCheck size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-charcoal/40 mb-1">Packaging_Unit</p>
                      <p className="text-base font-serif italic text-charcoal">{product.specs.packaging}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-oxblood/5 text-oxblood">
                      <Globe size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-charcoal/40 mb-1">Traceability</p>
                      <p className="text-base font-serif italic text-charcoal">Full Facility Origin: {product.origin}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Info & Actions */}
          <div className="lg:col-span-5">
            <div className="sticky top-40 space-y-12">
              <header>
                <div className="flex items-center gap-4 mb-6">
                  <span className="px-4 py-1 bg-oxblood text-white text-[9px] font-sans font-bold uppercase tracking-[0.3em]">
                    {product.category}
                  </span>
                  <span className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-charcoal/30">
                    ID: VNT-{product.id}00X
                  </span>
                </div>
                <h1 className="text-6xl font-serif font-bold text-charcoal mb-6 tracking-tight leading-tight">
                  {product.name}
                </h1>
                <p className="text-2xl font-serif italic text-oxblood mb-10">
                  ${product.pricePerKg.toFixed(2)} <span className="text-sm font-sans font-bold uppercase tracking-widest text-charcoal/30 ml-2">per_kg</span>
                </p>
                <p className="text-charcoal/60 font-serif text-lg leading-relaxed">
                  {product.description} Our industrial processing lines ensure maximum yield and consistent quality for wholesale distribution.
                </p>
              </header>

              <div className="premium-card p-12 bg-charcoal text-white">
                <h3 className="text-[11px] font-sans font-bold uppercase tracking-[0.4em] text-oxblood mb-10">Procurement_Interface</h3>
                
                <div className="space-y-8 mb-12">
                  <div>
                    <div className="flex justify-between text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-white/40 mb-4">
                      <span>Quantity (KG)</span>
                      <span>Min: {product.minOrder}kg</span>
                    </div>
                    <input 
                      type="number" 
                      value={quantity}
                      onChange={(e) => setQuantity(Number(e.target.value))}
                      className="w-full bg-white/5 border border-white/10 px-6 py-4 text-xl font-serif italic text-white focus:outline-none focus:border-oxblood transition-all"
                    />
                  </div>

                  <div className="flex justify-between items-end pt-6 border-t border-white/10">
                    <span className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-white/40">Estimated_Total</span>
                    <span className="text-4xl font-serif font-bold text-oxblood">${(quantity * product.pricePerKg).toLocaleString()}</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <button className="w-full py-6 bg-oxblood text-white text-[11px] font-sans font-bold uppercase tracking-[0.3em] flex items-center justify-center gap-3 hover:bg-white hover:text-charcoal transition-all duration-500 shadow-2xl shadow-oxblood/20">
                    Initialize Order <ChevronRight size={16} />
                  </button>
                  <button className="w-full py-6 border border-white/10 text-white text-[11px] font-sans font-bold uppercase tracking-[0.3em] flex items-center justify-center gap-3 hover:bg-white/5 transition-all duration-500">
                    Download Specs <FileText size={16} />
                  </button>
                </div>

                <div className="mt-10 flex items-center gap-4 text-[9px] font-sans font-bold uppercase tracking-[0.2em] text-white/30">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                  Production Line Active // Ready for Dispatch
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="premium-card p-8 bg-white border border-border">
                  <ShieldCheck className="text-oxblood mb-4" size={24} />
                  <h4 className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-charcoal mb-2">Certified</h4>
                  <p className="text-xs font-serif italic text-charcoal/50">Full compliance with international standards.</p>
                </div>
                <div className="premium-card p-8 bg-white border border-border">
                  <Truck className="text-oxblood mb-4" size={24} />
                  <h4 className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-charcoal mb-2">Logistics</h4>
                  <p className="text-xs font-serif italic text-charcoal/50">Global cold chain distribution network.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
;
