import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Filter, ChevronDown, ArrowRight, ShoppingCart, Info, Globe, ShieldCheck, Truck } from 'lucide-react';
import { PRODUCTS, CATEGORIES } from '../data/mockData';
import { cn } from '../lib/utils';
import { mp } from '../lib/paths';

export const Marketplace = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProducts = PRODUCTS.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen pt-40 pb-32 bg-surface px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="mb-24">
          <div className="flex items-center gap-6 mb-8">
            <span className="text-[11px] font-sans font-bold uppercase tracking-[0.5em] text-oxblood/40">Catalog_Index</span>
            <span className="w-20 h-px bg-oxblood/10"></span>
          </div>
          <h1 className="text-7xl md:text-8xl font-serif font-bold text-charcoal mb-8 tracking-tight">Product <span className="serif-italic text-oxblood">Catalog</span></h1>
          <p className="text-charcoal/50 font-serif italic text-2xl max-w-2xl leading-relaxed">
            Explore our current industrial inventory. All products are processed on-site under strict cold chain protocols.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          {/* Sidebar Filters */}
          <aside className="lg:col-span-3">
            <div className="sticky top-40 space-y-16">
              <div>
                <h3 className="text-[11px] font-sans font-bold uppercase tracking-[0.4em] text-oxblood mb-10">Search_Inventory</h3>
                <div className="relative group">
                  <input
                    type="text"
                    placeholder="Search catalog..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-white border border-border px-8 py-5 text-sm font-sans focus:outline-none focus:border-oxblood transition-all duration-500 shadow-sm"
                  />
                  <Search className="absolute right-6 top-1/2 -translate-y-1/2 text-charcoal/20 group-focus-within:text-oxblood transition-colors duration-500" size={20} />
                </div>
              </div>

              <div>
                <h3 className="text-[11px] font-sans font-bold uppercase tracking-[0.4em] text-oxblood mb-10">Production_Lines</h3>
                <div className="space-y-3">
                  {['All', ...CATEGORIES.map(c => c.name)].map(cat => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={cn(
                        "w-full text-left px-8 py-5 text-[11px] font-sans font-bold uppercase tracking-[0.3em] transition-all duration-500 border",
                        selectedCategory === cat 
                          ? "bg-oxblood text-white border-oxblood shadow-lg shadow-oxblood/10" 
                          : "bg-white text-charcoal/40 border-border hover:border-oxblood/30 hover:text-charcoal"
                      )}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              <div className="premium-card p-10 bg-charcoal text-white">
                <h4 className="text-[10px] font-sans font-bold uppercase tracking-[0.4em] text-oxblood mb-8">Direct_Procurement</h4>
                <p className="text-base font-serif italic text-white/50 mb-10 leading-relaxed">
                  For bulk orders exceeding 5 tons, please initialize a direct procurement protocol.
                </p>
                <Link to={mp('wholesale')} className="w-full py-5 bg-oxblood text-white text-[11px] font-sans font-bold uppercase tracking-[0.3em] flex items-center justify-center gap-3 hover:bg-white hover:text-charcoal transition-all duration-500">
                  Initialize Order <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <main className="lg:col-span-9">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <AnimatePresence mode="popLayout">
                {filteredProducts.map((product, idx) => (
                  <motion.div
                    key={product.id}
                    layout
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.6, delay: idx * 0.05 }}
                    className="premium-card group overflow-hidden"
                  >
                    <div className="h-80 overflow-hidden relative">
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
                        <span className="text-xl font-serif italic text-oxblood">${product.pricePerKg.toFixed(2)}</span>
                      </div>
                      <div className="grid grid-cols-2 gap-8 mb-10 border-y border-border py-8">
                        <div>
                          <p className="text-[10px] font-sans font-bold uppercase tracking-[0.3em] text-charcoal/30 mb-2">Grade</p>
                          <p className="text-sm font-sans font-bold text-charcoal">{product.grade}</p>
                        </div>
                        <div>
                          <p className="text-[10px] font-sans font-bold uppercase tracking-[0.3em] text-charcoal/30 mb-2">Origin</p>
                          <p className="text-sm font-sans font-bold text-charcoal">{product.origin}</p>
                        </div>
                      </div>
                      <div className="flex gap-6">
                        <Link 
                          to={mp(`product/${product.id}`)}
                          className="flex-1 py-5 bg-charcoal text-white text-[11px] font-sans font-bold uppercase tracking-[0.3em] flex items-center justify-center gap-3 hover:bg-oxblood transition-all duration-500 shadow-xl shadow-charcoal/10"
                        >
                          Analyze <Info size={16} />
                        </Link>
                        <button className="p-5 border border-border text-charcoal hover:bg-oxblood hover:text-white hover:border-oxblood transition-all duration-500">
                          <ShoppingCart size={20} strokeWidth={1.5} />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {filteredProducts.length === 0 && (
              <div className="py-48 text-center">
                <p className="text-2xl font-serif italic text-charcoal/20">No products found matching your search criteria.</p>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};
