import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, ThermometerSnowflake, ShieldCheck, Factory } from 'lucide-react';
import { CATEGORIES } from '../data/mockData';
import { mp } from '../lib/paths';
import { resolveDemoLanguage } from '../../../../../utils/demoLanguage';

export const Categories = () => {
  const location = useLocation();
  const lang = resolveDemoLanguage(location.search);

  const text = lang === 'pt'
    ? {
        infra: 'Infraestrutura_da_Unidade',
        titleA: 'Linhas de',
        titleB: 'Producao',
        subtitle: 'Nossa unidade e organizada em nodos de processamento especializados, cada um otimizado por categoria e padrao de qualidade.',
        activeSkus: 'SKUs_Ativos',
        extraDesc: 'Linhas especializadas com monitoramento de cadeia fria e protocolos de garantia de qualidade.',
        chilled: 'Sub-Zero Resfriado',
        cert: 'HACCP Certificado',
        access: 'Acessar Linha',
        infraTitle: 'Infraestrutura Integrada de Processamento',
        infraDesc: 'Nossa unidade opera 24/7 sob protocolos industriais rigorosos, garantindo os mais altos padroes globais da industria de carnes.',
        footprint: 'Area_da_Unidade',
        cold: 'Integridade_Cadeia_Fria',
        dist: 'Distribuicao_Global',
      }
    : {
        infra: 'Facility_Infrastructure',
        titleA: 'Production',
        titleB: 'Lines',
        subtitle: 'Our facility is organized into specialized processing nodes, each optimized for specific product categories and quality standards.',
        activeSkus: 'Active_SKUs',
        extraDesc: 'Specialized processing lines with integrated cold chain monitoring and quality assurance protocols.',
        chilled: 'Sub-Zero Chilled',
        cert: 'HACCP Certified',
        access: 'Access Production Line',
        infraTitle: 'Integrated Processing Infrastructure',
        infraDesc: 'Our facility operates 24/7 under strict industrial protocols, ensuring that every product meets the highest standards of the global meat industry.',
        footprint: 'Facility_Footprint',
        cold: 'Cold_Chain_Integrity',
        dist: 'Distribution_Ready',
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
        <header className="mb-24">
          <div className="flex items-center gap-6 mb-8">
            <span className="text-[11px] font-sans font-bold uppercase tracking-[0.5em] text-oxblood/40">{text.infra}</span>
            <span className="w-20 h-px bg-oxblood/10"></span>
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-serif font-bold text-charcoal mb-8 tracking-tight">{text.titleA} <span className="serif-italic text-oxblood">{text.titleB}</span></h1>
          <p className="text-charcoal/60 font-serif italic text-lg sm:text-2xl max-w-2xl leading-relaxed">{text.subtitle}</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
          {CATEGORIES.map((category, idx) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="premium-card group overflow-hidden bg-surface-2"
            >
              <div className="h-[280px] sm:h-[360px] overflow-hidden relative">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-transparent transition-colors duration-700"></div>
                <div className="absolute top-5 left-5 sm:top-10 sm:left-10">
                  <span className="px-6 py-2 bg-surface-2/95 backdrop-blur-md text-[10px] font-sans font-bold uppercase tracking-[0.3em] text-oxblood border border-border">
                    Node_0{idx + 1}
                  </span>
                </div>
              </div>
              <div className="p-6 sm:p-10">
                <div className="flex justify-between items-start mb-8">
                  <h3 className="text-3xl sm:text-4xl font-serif font-bold text-charcoal tracking-tight">{lang === 'pt' ? (categoryPt[category.name] ?? category.name) : category.name}</h3>
                  <span className="text-[11px] font-sans font-bold uppercase tracking-[0.3em] text-oxblood/40">
                    {category.count} {text.activeSkus}
                  </span>
                </div>
                <p className="text-charcoal/60 font-serif italic text-lg mb-12 leading-relaxed">
                  {category.description} {text.extraDesc}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 mb-8 sm:mb-12 border-y border-border py-6 sm:py-10">
                  <div className="flex items-center gap-4">
                    <ThermometerSnowflake className="text-oxblood/40" size={20} />
                    <span className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-charcoal/60">{text.chilled}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <ShieldCheck className="text-oxblood/40" size={20} />
                    <span className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-charcoal/60">{text.cert}</span>
                  </div>
                </div>

                <Link
                  to={mp('marketplace')}
                  className="inline-flex items-center gap-4 text-[11px] font-sans font-bold uppercase tracking-[0.4em] text-oxblood group-hover:gap-8 transition-all duration-500"
                >
                  {text.access} <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-32 premium-card p-6 sm:p-10 bg-charcoal text-white text-center">
          <div className="max-w-3xl mx-auto">
            <Factory className="text-oxblood mx-auto mb-10" size={48} />
            <h2 className="text-3xl sm:text-3xl sm:text-4xl font-serif font-bold mb-5 sm:mb-8 tracking-tight">{text.infraTitle}</h2>
            <p className="text-white/70 font-serif italic text-lg sm:text-xl mb-8 sm:mb-12 leading-relaxed">{text.infraDesc}</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-12 pt-12 border-t border-white/10">
              <div>
                <p className="text-3xl sm:text-4xl font-serif font-bold text-oxblood mb-2">12,000m2</p>
                <p className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-white/30">{text.footprint}</p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-serif font-bold text-oxblood mb-2">100%</p>
                <p className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-white/30">{text.cold}</p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-serif font-bold text-oxblood mb-2">Global</p>
                <p className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-white/30">{text.dist}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


