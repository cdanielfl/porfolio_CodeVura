import React, { useState } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
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
  PackageCheck,
} from 'lucide-react';
import { PRODUCTS } from '../data/mockData';
import { mp } from '../lib/paths';
import { resolveDemoLanguage } from '../../../../../utils/demoLanguage';
import { useMarketplaceCart } from '../context/CartContext';

export const ProductDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const lang = resolveDemoLanguage(location.search);
  const product = PRODUCTS.find((p) => p.id === id) || PRODUCTS[0];
  const [quantity, setQuantity] = useState(product.minOrder);
  const { addToCart } = useMarketplaceCart();

  const text = lang === 'pt'
    ? {
        back: 'Voltar_ao_Catalogo',
        specs: 'Especificacoes_Industriais',
        quality: 'Classificacao_de_Qualidade',
        storage: 'Protocolo_de_Armazenamento',
        packaging: 'Unidade_de_Embalagem',
        traceability: 'Rastreabilidade',
        freeze: 'Congelamento Profundo (-18C)',
        tracePrefix: 'Origem da unidade:',
        perKg: 'por_kg',
        descSuffix: 'Nossas linhas industriais garantem alto rendimento e qualidade consistente para distribuicao em atacado.',
        procurement: 'Interface_de_Compra',
        qty: 'Quantidade (KG)',
        min: 'Min',
        estimated: 'Total_Estimado',
        initOrder: 'Iniciar Pedido',
        addToCart: 'Adicionar no carrinho',
        download: 'Baixar Ficha',
        status: 'Linha ativa // Pronto para despacho',
        certified: 'Certificado',
        certifiedDesc: 'Conformidade total com padroes internacionais.',
        logistics: 'Logistica',
        logisticsDesc: 'Rede global de distribuicao em cadeia fria.',
      }
    : {
        back: 'Back_to_Catalog',
        specs: 'Industrial_Specifications',
        quality: 'Quality_Grade',
        storage: 'Storage_Protocol',
        packaging: 'Packaging_Unit',
        traceability: 'Traceability',
        freeze: 'Deep Freeze (-18C)',
        tracePrefix: 'Full Facility Origin:',
        perKg: 'per_kg',
        descSuffix: 'Our industrial processing lines ensure maximum yield and consistent quality for wholesale distribution.',
        procurement: 'Procurement_Interface',
        qty: 'Quantity (KG)',
        min: 'Min',
        estimated: 'Estimated_Total',
        initOrder: 'Initialize Order',
        addToCart: 'Add to cart',
        download: 'Download Specs',
        status: 'Production Line Active // Ready for Dispatch',
        certified: 'Certified',
        certifiedDesc: 'Full compliance with international standards.',
        logistics: 'Logistics',
        logisticsDesc: 'Global cold chain distribution network.',
      };

  const categoryPt: Record<string, string> = {
    Beef: 'Bovino',
    Pork: 'Suino',
    Lamb: 'Cordeiro',
    Poultry: 'Aves',
    Game: 'Caca',
  };

  return (
    <div className="min-h-screen pt-32 sm:pt-40 pb-20 sm:pb-32 bg-surface px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <nav className="flex items-center gap-4 mb-10 sm:mb-16 text-[11px] font-sans font-bold uppercase tracking-[0.3em]">
          <Link to={mp('marketplace')} className="text-charcoal/40 hover:text-oxblood transition-colors flex items-center gap-2">
            <ArrowLeft size={14} /> {text.back}
          </Link>
          <span className="text-charcoal/10">/</span>
          <span className="text-oxblood">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16">
          <div className="lg:col-span-7 space-y-6 sm:space-y-10">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="premium-card overflow-hidden aspect-[4/3] bg-charcoal">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" referrerPolicy="no-referrer" />
            </motion.div>

            <div className="grid grid-cols-3 gap-3 sm:gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="premium-card aspect-square overflow-hidden bg-charcoal/5">
                  <img src={product.image} alt={`${product.name} view ${i}`} className="w-full h-full object-cover opacity-40 hover:opacity-100 transition-opacity duration-500" referrerPolicy="no-referrer" />
                </div>
              ))}
            </div>

            <div className="premium-card p-6 sm:p-10 bg-surface-2 space-y-6 sm:space-y-10">
              <h3 className="text-[11px] font-sans font-bold uppercase tracking-[0.4em] text-oxblood">{text.specs}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-oxblood/5 text-oxblood">
                      <Microscope size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-charcoal/40 mb-1">{text.quality}</p>
                      <p className="text-base font-serif italic text-charcoal">{product.grade} Standard</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-oxblood/5 text-oxblood">
                      <ThermometerSnowflake size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-charcoal/40 mb-1">{text.storage}</p>
                      <p className="text-base font-serif italic text-charcoal">{text.freeze}</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-oxblood/5 text-oxblood">
                      <PackageCheck size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-charcoal/40 mb-1">{text.packaging}</p>
                      <p className="text-base font-serif italic text-charcoal">{product.specs.packaging}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-oxblood/5 text-oxblood">
                      <Globe size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-charcoal/40 mb-1">{text.traceability}</p>
                      <p className="text-base font-serif italic text-charcoal">{text.tracePrefix} {product.origin}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="sticky top-28 space-y-6 sm:space-y-10">
              <header>
                <div className="flex items-center gap-4 mb-6">
                  <span className="px-4 py-1 bg-oxblood text-white text-[9px] font-sans font-bold uppercase tracking-[0.3em]">
                    {lang === 'pt' ? (categoryPt[product.category] ?? product.category) : product.category}
                  </span>
                  <span className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-charcoal/30">ID: VNT-{product.id}00X</span>
                </div>
                <h1 className="text-4xl sm:text-5xl font-serif font-bold text-charcoal mb-6 tracking-tight leading-tight">{product.name}</h1>
                <p className="text-xl sm:text-2xl font-serif italic text-oxblood mb-6 sm:mb-10">
                  ${product.pricePerKg.toFixed(2)} <span className="text-sm font-sans font-bold uppercase tracking-widest text-charcoal/30 ml-2">{text.perKg}</span>
                </p>
                <p className="text-charcoal/60 font-serif text-lg leading-relaxed">
                  {product.description} {text.descSuffix}
                </p>
              </header>

              <div className="premium-card surface-deep p-6 sm:p-10 text-white">
                <h3 className="text-[11px] font-sans font-bold uppercase tracking-[0.4em] text-oxblood mb-10">{text.procurement}</h3>

                <div className="space-y-6 mb-8 sm:mb-12">
                  <div>
                    <div className="flex justify-between text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-white/40 mb-4">
                      <span>{text.qty}</span>
                      <span>{text.min}: {product.minOrder}kg</span>
                    </div>
                    <input
                      type="number"
                      value={quantity}
                      onChange={(e) => setQuantity(Number(e.target.value))}
                      className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 sm:px-6 sm:py-4 text-lg sm:text-xl font-serif italic text-white focus:outline-none focus:border-oxblood transition-all"
                    />
                  </div>

                  <div className="flex justify-between items-end pt-6 border-t border-white/10">
                    <span className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-white/40">{text.estimated}</span>
                    <span className="text-4xl font-serif font-bold text-oxblood">${(quantity * product.pricePerKg).toLocaleString()}</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <button
                    onClick={() => addToCart(product, quantity)}
                    className="w-full rounded-xl py-4 sm:py-6 border border-white/20 text-white text-[11px] font-sans font-bold uppercase tracking-[0.3em] flex items-center justify-center gap-3 hover:bg-white/10 transition-all duration-500"
                  >
                    {text.addToCart}
                  </button>
                  <button className="w-full rounded-xl py-4 sm:py-6 bg-oxblood text-white text-[11px] font-sans font-bold uppercase tracking-[0.3em] flex items-center justify-center gap-3 hover:bg-white hover:text-charcoal transition-all duration-500 shadow-2xl shadow-oxblood/20">
                    {text.initOrder} <ChevronRight size={16} />
                  </button>
                  <button className="w-full rounded-xl py-4 sm:py-6 border border-white/10 text-white text-[11px] font-sans font-bold uppercase tracking-[0.3em] flex items-center justify-center gap-3 hover:bg-white/5 transition-all duration-500">
                    {text.download} <FileText size={16} />
                  </button>
                </div>

                <div className="mt-10 flex items-center gap-4 text-[9px] font-sans font-bold uppercase tracking-[0.2em] text-white/30">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                  {text.status}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="premium-card p-5 sm:p-8 bg-surface-2 border border-border">
                  <ShieldCheck className="text-oxblood mb-4" size={24} />
                  <h4 className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-charcoal mb-2">{text.certified}</h4>
                  <p className="text-xs font-serif italic text-charcoal/50">{text.certifiedDesc}</p>
                </div>
                <div className="premium-card p-5 sm:p-8 bg-surface-2 border border-border">
                  <Truck className="text-oxblood mb-4" size={24} />
                  <h4 className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-charcoal mb-2">{text.logistics}</h4>
                  <p className="text-xs font-serif italic text-charcoal/50">{text.logisticsDesc}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


