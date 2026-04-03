import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, ShoppingCart } from 'lucide-react';
import { PRODUCTS } from '../data/mockData';
import { mp } from '../lib/paths';
import { resolveDemoLanguage } from '../../../../../utils/demoLanguage';
import { useMarketplaceCart } from '../context/CartContext';

export const Home = () => {
  const location = useLocation();
  const lang = resolveDemoLanguage(location.search);
  const { addToCart } = useMarketplaceCart();

  const text = lang === 'pt'
    ? {
        node: 'VANTAGE_NODE_01',
        heroTop: 'Vantage',
        heroMid: 'Protein',
        heroBottom: 'Facility',
        heroSubtitle:
          'Infraestrutura frigorifica de nova geracao. Engenharia de precisao com tradicao em nossa planta de processamento.',
        viewCatalog: 'Ver Catalogo',
        facilityAccess: 'Acesso a Unidade',
        stats: [
          { label: 'Processamento Diario', value: '450', unit: 'TONS', detail: 'Linhas Automatizadas' },
          { label: 'Armazenamento Frio', value: '12k', unit: 'M3', detail: 'Temperatura de Precisao' },
          { label: 'Padrao de Qualidade', value: 'A+', unit: 'CERT', detail: 'Padroes Globais' },
          { label: 'Logistica', value: '24/7', unit: 'OPS', detail: 'Cadeia Fria' },
        ],
        featuredTop: 'Selecoes',
        featuredAccent: 'Premium',
        featuredSubtitle: 'Inventario industrial selecionado das nossas linhas principais de processamento.',
        promoA: 'Frete nacional em 24h',
        promoB: 'Desconto por volume ativo',
        fullCatalog: 'Ver Catalogo Completo',
        grade: 'Classificacao',
        details: 'Ver Detalhes',
        addToCart: 'Adicionar no carrinho',
        heritageTop: 'Heranca',
        heritageAccent: 'Industrial',
        heritageSubtitle:
          'Desde 1984, a Vantage Protein define os padroes de processamento industrial de carnes. Nossa unidade representa o auge da tecnologia de cadeia fria e origem responsavel.',
        directProcurement: 'Compra Direta',
        support: 'Suporte da Unidade',
      }
    : {
        node: 'VANTAGE_NODE_01',
        heroTop: 'Vantage',
        heroMid: 'Protein',
        heroBottom: 'Facility',
        heroSubtitle:
          'Next-generation frigorifico infrastructure. Precision engineering meets traditional heritage in our state-of-the-art processing node.',
        viewCatalog: 'View Catalog',
        facilityAccess: 'Facility Access',
        stats: [
          { label: 'Daily Processing', value: '450', unit: 'TONS', detail: 'Automated Lines' },
          { label: 'Cold Storage', value: '12k', unit: 'M3', detail: 'Precision Temp' },
          { label: 'Quality Grade', value: 'A+', unit: 'CERT', detail: 'Global Standards' },
          { label: 'Logistics', value: '24/7', unit: 'OPS', detail: 'Cold Chain' },
        ],
        featuredTop: 'Premium',
        featuredAccent: 'Selections',
        featuredSubtitle: 'Curated industrial inventory from our primary processing lines.',
        promoA: 'Nationwide 24h freight',
        promoB: 'Volume discount active',
        fullCatalog: 'View Full Catalog',
        grade: 'Grade',
        details: 'View Details',
        addToCart: 'Add to cart',
        heritageTop: 'Industrial',
        heritageAccent: 'Heritage',
        heritageSubtitle:
          'Since 1984, Vantage Protein has defined the standards of industrial meat processing. Our facility represents the pinnacle of cold chain technology and ethical sourcing.',
        directProcurement: 'Direct Procurement',
        support: 'Facility Support',
      };

  const categoryPt: Record<string, string> = {
    Beef: 'Bovino',
    Pork: 'Suino',
    Lamb: 'Cordeiro',
    Poultry: 'Aves',
    Game: 'Caca',
  };

  const featuredProducts = PRODUCTS.slice(0, 3).map((p) => ({
    ...p,
    price: `$${p.pricePerKg.toFixed(2)}`,
    grade: p.grade,
    origin: p.origin,
  }));

  return (
    <div className="relative min-h-screen pt-20 overflow-hidden bg-surface">
      <section className="relative min-h-[85vh] sm:h-[95vh] flex items-center px-4 sm:px-6 overflow-hidden">
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
              <span className="text-[11px] font-sans font-bold uppercase tracking-[0.5em] text-oxblood">{text.node}</span>
            </div>
            <h1 className="text-4xl sm:text-7xl md:text-[120px] font-serif font-bold leading-[0.95] md:leading-[0.85] mb-7 sm:mb-10 text-charcoal tracking-tight uppercase">
              {text.heroTop} <br />
              <span className="serif-italic text-oxblood">{text.heroMid}</span> <br />
              {text.heroBottom}
            </h1>
            <p className="text-base sm:text-xl md:text-2xl text-charcoal/60 font-serif italic mb-8 sm:mb-16 max-w-2xl leading-relaxed">{text.heroSubtitle}</p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-8">
              <Link
                to={mp('marketplace')}
                className="w-full sm:w-auto rounded-xl px-8 sm:px-12 py-4 sm:py-6 bg-oxblood text-white font-sans font-bold text-[11px] uppercase tracking-[0.2em] sm:tracking-[0.3em] hover:bg-charcoal transition-all duration-500 shadow-xl shadow-oxblood/10 text-center"
              >
                {text.viewCatalog}
              </Link>
              <Link
                to={mp('wholesale')}
                className="w-full sm:w-auto rounded-xl px-8 sm:px-12 py-4 sm:py-6 border border-charcoal/20 bg-surface-2 text-charcoal font-sans font-bold text-[11px] uppercase tracking-[0.2em] sm:tracking-[0.3em] hover:bg-charcoal hover:text-white transition-all duration-500 text-center"
              >
                {text.facilityAccess}
              </Link>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              <span className="promo-chip">{text.promoA}</span>
              <span className="promo-chip">{text.promoB}</span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 sm:py-28 px-4 sm:px-6 bg-charcoal relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 sm:gap-8">
            {text.stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="premium-card p-6 sm:p-9 group surface-panel"
              >
                <p className="text-[10px] font-sans font-bold uppercase tracking-[0.4em] text-oxblood/40 mb-10 group-hover:text-oxblood transition-colors duration-500">{stat.label}</p>
                <div className="flex items-baseline gap-3 mb-6">
                  <span className="text-5xl sm:text-6xl font-serif font-bold text-charcoal">{stat.value}</span>
                  <span className="text-sm font-sans font-bold text-oxblood tracking-widest">{stat.unit}</span>
                </div>
                <p className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-charcoal/30">{stat.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28 px-4 sm:px-6 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 sm:mb-16 gap-8">
            <div>
              <h2 className="text-4xl sm:text-6xl font-serif font-bold mb-5 sm:mb-8 text-charcoal leading-tight">
                {text.featuredTop} <br />
                <span className="serif-italic text-oxblood">{text.featuredAccent}</span>
              </h2>
              <p className="text-charcoal/60 font-serif italic text-lg sm:text-xl max-w-md leading-relaxed">{text.featuredSubtitle}</p>
            </div>
            <Link to={mp('marketplace')} className="text-[11px] font-sans font-bold uppercase tracking-[0.4em] text-oxblood hover:text-charcoal transition-colors flex items-center gap-4 group pb-2 border-b border-oxblood/20">
              {text.fullCatalog} <ArrowRight size={16} className="group-hover:translate-x-3 transition-transform duration-500" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
            {featuredProducts.map((product, idx) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="premium-card group overflow-hidden"
              >
                <div className="h-[320px] sm:h-[420px] overflow-hidden relative">
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
                    <span className="text-lg sm:text-xl font-serif italic text-oxblood">{product.price}</span>
                  </div>
                  <div className="flex items-center gap-6 mb-10">
                    <span className="text-[11px] font-sans font-bold text-charcoal/40 uppercase tracking-[0.2em]">{text.grade}: {product.grade}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-oxblood/10"></span>
                    <span className="text-[11px] font-sans font-bold text-charcoal/40 uppercase tracking-[0.2em]">{product.origin}</span>
                  </div>
                  <Link
                    to={mp(`product/${product.id}`)}
                    className="w-full rounded-xl py-4 sm:py-5 border border-border text-[11px] font-sans font-bold uppercase tracking-[0.3em] text-charcoal hover:bg-oxblood hover:text-white hover:border-oxblood transition-all duration-500 flex items-center justify-center gap-3"
                  >
                    {text.details}
                  </Link>
                  <button
                    onClick={() => addToCart(product, product.minOrder)}
                    className="mt-3 w-full rounded-xl border border-charcoal/20 bg-surface px-5 py-3 text-center text-[11px] font-bold uppercase tracking-[0.2em] text-charcoal transition-colors hover:border-oxblood hover:text-oxblood inline-flex items-center justify-center gap-2"
                  >
                    <ShoppingCart size={16} />
                    {text.addToCart}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-36 px-4 sm:px-6 bg-white relative overflow-hidden">
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
            <h2 className="text-4xl sm:text-6xl md:text-8xl font-serif font-bold tracking-tight text-charcoal mb-8 sm:mb-12 leading-none">
              {text.heritageTop} <br />
              <span className="serif-italic text-oxblood">{text.heritageAccent}</span>
            </h2>
            <p className="text-lg md:text-2xl text-charcoal/60 font-serif italic mb-12 sm:mb-20 leading-relaxed max-w-3xl mx-auto">{text.heritageSubtitle}</p>
            <div className="flex w-full flex-col sm:flex-row sm:flex-wrap justify-center gap-4 sm:gap-8">
              <Link
                to={mp('wholesale')}
                className="w-full sm:w-auto rounded-xl px-8 sm:px-14 py-4 sm:py-7 bg-charcoal text-white font-sans font-bold text-[11px] uppercase tracking-[0.28em] sm:tracking-[0.4em] hover:bg-oxblood transition-all duration-500 shadow-2xl text-center"
              >
                {text.directProcurement}
              </Link>
              <Link
                to={mp('contact')}
                className="w-full sm:w-auto rounded-xl px-8 sm:px-14 py-4 sm:py-7 border border-charcoal/20 text-charcoal font-sans font-bold text-[11px] uppercase tracking-[0.28em] sm:tracking-[0.4em] hover:bg-charcoal hover:text-white transition-all duration-500 text-center"
              >
                {text.support}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

