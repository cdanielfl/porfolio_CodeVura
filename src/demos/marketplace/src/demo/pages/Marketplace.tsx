import React, { useMemo, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Search, ArrowRight, ShoppingCart, Info } from 'lucide-react';
import { PRODUCTS, CATEGORIES } from '../data/mockData';
import { cn } from '../lib/utils';
import { mp } from '../lib/paths';
import { resolveDemoLanguage } from '../../../../../utils/demoLanguage';
import { useMarketplaceCart } from '../context/CartContext';

export const Marketplace = () => {
  const location = useLocation();
  const lang = resolveDemoLanguage(location.search);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const { addToCart } = useMarketplaceCart();

  const text = lang === 'pt'
    ? {
        index: 'Catalogo_Index',
        title: 'Catalogo de Produtos',
        subtitle: 'Explore nosso inventario industrial atual. Todos os produtos sao processados internamente sob protocolos rigorosos de cadeia fria.',
        searchInventory: 'Buscar_Inventario',
        searchPlaceholder: 'Buscar no catalogo...',
        productionLines: 'Linhas_de_Producao',
        all: 'Todos',
        procurementTitle: 'Compra_Direta',
        procurementText: 'Para pedidos em atacado acima de 5 toneladas, inicie um protocolo de compra direta.',
        initOrder: 'Iniciar Pedido',
        promo: 'Oferta da semana: frete reduzido para pedidos acima de 300kg.',
        grade: 'Classificacao',
        origin: 'Origem',
        analyze: 'Analisar',
        buyNow: 'Comprar agora',
        noProducts: 'Nenhum produto encontrado para os filtros selecionados.',
      }
    : {
        index: 'Catalog_Index',
        title: 'Product Catalog',
        subtitle: 'Explore our current industrial inventory. All products are processed on-site under strict cold chain protocols.',
        searchInventory: 'Search_Inventory',
        searchPlaceholder: 'Search catalog...',
        productionLines: 'Production_Lines',
        all: 'All',
        procurementTitle: 'Direct_Procurement',
        procurementText: 'For bulk orders exceeding 5 tons, please initialize a direct procurement protocol.',
        initOrder: 'Initialize Order',
        promo: 'Weekly offer: reduced freight on orders above 300kg.',
        grade: 'Grade',
        origin: 'Origin',
        analyze: 'Analyze',
        buyNow: 'Buy now',
        noProducts: 'No products found matching your search criteria.',
      };

  const categoryPt: Record<string, string> = {
    Beef: 'Bovino',
    Pork: 'Suino',
    Lamb: 'Cordeiro',
    Poultry: 'Aves',
    Game: 'Caca',
  };

  const categoryOptions = useMemo(() => {
    const base = [text.all, ...CATEGORIES.map((c) => (lang === 'pt' ? (categoryPt[c.name] ?? c.name) : c.name))];
    return base;
  }, [lang, text.all]);

  const filteredProducts = PRODUCTS.filter((product) => {
    const nameMatches = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const localizedCategory = lang === 'pt' ? (categoryPt[product.category] ?? product.category) : product.category;
    const categoryMatches = selectedCategory === text.all || selectedCategory === localizedCategory;
    return nameMatches && categoryMatches;
  });

  return (
    <div className="min-h-screen pt-32 sm:pt-40 pb-20 sm:pb-32 bg-surface px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <header className="mb-12 sm:mb-24">
          <div className="flex items-center gap-4 sm:gap-6 mb-5 sm:mb-8">
            <span className="text-[11px] font-sans font-bold uppercase tracking-[0.5em] text-oxblood/40">{text.index}</span>
            <span className="w-12 sm:w-20 h-px bg-oxblood/10"></span>
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-serif font-bold text-charcoal mb-5 sm:mb-8 tracking-tight">{text.title.split(' ')[0]} <span className="serif-italic text-oxblood">{text.title.split(' ').slice(1).join(' ')}</span></h1>
          <p className="text-charcoal/60 font-serif italic text-lg sm:text-2xl max-w-2xl leading-relaxed">{text.subtitle}</p>
          <div className="mt-4">
            <span className="promo-chip">{text.promo}</span>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-16 lg:gap-20">
          <aside className="lg:col-span-3">
            <div className="sticky top-32 space-y-8 sm:space-y-12 lg:space-y-16">
              <div>
                <h3 className="text-[11px] font-sans font-bold uppercase tracking-[0.28em] sm:tracking-[0.4em] text-oxblood mb-4 sm:mb-6">{text.searchInventory}</h3>
                <div className="relative group">
                  <input
                    type="text"
                    placeholder={text.searchPlaceholder}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full rounded-xl bg-white border border-border px-4 sm:px-8 py-3 sm:py-5 text-sm font-sans focus:outline-none focus:border-oxblood transition-all duration-500 shadow-sm"
                  />
                  <Search className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 text-charcoal/20 group-focus-within:text-oxblood transition-colors duration-500" size={18} />
                </div>
              </div>

              <div>
                <h3 className="text-[11px] font-sans font-bold uppercase tracking-[0.28em] sm:tracking-[0.4em] text-oxblood mb-4 sm:mb-6">{text.productionLines}</h3>
                <div className="flex gap-2 overflow-x-auto pb-2 lg:block lg:space-y-3">
                  {categoryOptions.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={cn(
                        'shrink-0 rounded-xl lg:w-full text-left px-4 sm:px-6 lg:px-8 py-3 sm:py-4 lg:py-5 text-[10px] sm:text-[11px] font-sans font-bold uppercase tracking-[0.2em] sm:tracking-[0.3em] transition-all duration-500 border',
                        selectedCategory === cat
                          ? 'bg-oxblood text-white border-oxblood shadow-lg shadow-oxblood/10'
                          : 'bg-surface-2 text-charcoal/70 border-border hover:border-oxblood/30 hover:text-charcoal',
                      )}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              <div className="premium-card surface-deep p-6 sm:p-8 lg:p-10 text-white">
                <h4 className="text-[10px] font-sans font-bold uppercase tracking-[0.28em] sm:tracking-[0.4em] text-oxblood mb-5 sm:mb-8">{text.procurementTitle}</h4>
                <p className="text-base font-serif italic text-white/65 mb-6 sm:mb-10 leading-relaxed">{text.procurementText}</p>
                <Link to={mp('wholesale')} className="w-full rounded-xl py-4 sm:py-5 bg-oxblood text-white text-[11px] font-sans font-bold uppercase tracking-[0.2em] sm:tracking-[0.3em] flex items-center justify-center gap-3 hover:bg-white hover:text-charcoal transition-all duration-500">
                  {text.initOrder} <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </aside>

          <main className="lg:col-span-9">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
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
                    <div className="h-64 sm:h-80 overflow-hidden relative">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale hover:grayscale-0"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-8 left-8">
                        <span className="px-5 py-2 bg-surface-2/95 backdrop-blur-md text-[10px] font-sans font-bold uppercase tracking-[0.3em] text-oxblood border border-border shadow-sm">
                          {lang === 'pt' ? (categoryPt[product.category] ?? product.category) : product.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6 sm:p-9">
                      <div className="flex justify-between items-start mb-8">
                        <h3 className="text-2xl sm:text-3xl font-serif font-bold text-charcoal tracking-tight">{product.name}</h3>
                        <span className="text-xl font-serif italic text-oxblood">${product.pricePerKg.toFixed(2)}</span>
                      </div>
                      <div className="grid grid-cols-2 gap-5 sm:gap-8 mb-8 sm:mb-10 border-y border-border py-6 sm:py-8">
                        <div>
                          <p className="text-[10px] font-sans font-bold uppercase tracking-[0.3em] text-charcoal/30 mb-2">{text.grade}</p>
                          <p className="text-sm font-sans font-bold text-charcoal">{product.grade}</p>
                        </div>
                        <div>
                          <p className="text-[10px] font-sans font-bold uppercase tracking-[0.3em] text-charcoal/30 mb-2">{text.origin}</p>
                          <p className="text-sm font-sans font-bold text-charcoal">{product.origin}</p>
                        </div>
                      </div>
                      <div className="flex gap-3 sm:gap-4">
                        <Link
                          to={mp(`product/${product.id}`)}
                          className="flex-1 rounded-xl py-4 sm:py-5 bg-charcoal text-white text-[11px] font-sans font-bold uppercase tracking-[0.2em] sm:tracking-[0.3em] flex items-center justify-center gap-3 hover:bg-oxblood transition-all duration-500 shadow-xl shadow-charcoal/10"
                        >
                          {text.analyze} <Info size={16} />
                        </Link>
                        <button
                          onClick={() => addToCart(product, product.minOrder)}
                          className="rounded-xl p-4 sm:p-5 border border-border text-charcoal hover:bg-oxblood hover:text-white hover:border-oxblood transition-all duration-500"
                          aria-label={lang === 'pt' ? 'Adicionar no carrinho' : 'Add to cart'}
                        >
                          <ShoppingCart size={20} strokeWidth={1.5} />
                        </button>
                      </div>
                      <Link to={mp('checkout')} className="mt-3 block rounded-xl bg-oxblood px-4 py-3 text-center text-[11px] font-bold uppercase tracking-[0.2em] text-white transition-colors hover:bg-charcoal">
                        {text.buyNow}
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {filteredProducts.length === 0 && (
              <div className="py-48 text-center">
                <p className="text-2xl font-serif italic text-charcoal/20">{text.noProducts}</p>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

