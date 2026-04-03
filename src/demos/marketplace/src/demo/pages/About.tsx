import React from 'react';
import { ShieldCheck, Award, Users, Globe, Microscope, ThermometerSnowflake, Truck } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { mp } from '../lib/paths';
import { resolveDemoLanguage } from '../../../../../utils/demoLanguage';

export const About = () => {
  const location = useLocation();
  const lang = resolveDemoLanguage(location.search);

  const text = lang === 'pt'
    ? {
        heritage: 'Heranca_da_Unidade',
        subtitle:
          'Fundada em 1984, a Vantage Protein se tornou referencia global em processamento de carnes de alta tecnologia e logistica de cadeia fria.',
        direct: 'Compra Direta',
        access: 'Acesso a Unidade',
        cards: [
          {
            title: 'Processamento de Precisao',
            desc: 'Nossas linhas proprietarias usam analise molecular avancada para garantir qualidade consistente e maximo rendimento em cada corte.',
          },
          {
            title: 'Integridade da Cadeia Fria',
            desc: 'Do recebimento ao despacho final, o ambiente sub-zero e monitorado 24/7 por nodos industriais integrados.',
          },
          {
            title: 'Logistica Global',
            desc: 'Nossa localizacao estrategica e rede integrada permitem despacho rapido para mercados globais em 48-72 horas.',
          },
        ],
        timeline: 'Linha_do_Tempo',
        timelineItems: [
          { year: '1984', title: 'Fundacao da Unidade', desc: 'Inicio como hub regional de processamento com foco em excelencia artesanal.' },
          { year: '1998', title: 'Expansao Industrial', desc: 'Implantacao de linhas automatizadas e infraestrutura avancada de armazenamento frio.' },
          { year: '2012', title: 'Integracao Global', desc: 'Certificacao internacional completa e consolidacao da rede de distribuicao global.' },
          { year: '2024', title: 'Transformacao Digital', desc: 'Integracao de controle de qualidade com IA e protocolos de rastreabilidade em blockchain.' },
        ],
        compliance: 'Padroes_Globais_de_Conformidade',
        social: 'Conformidade Social',
      }
    : {
        heritage: 'Facility_Heritage',
        subtitle:
          'Established in 1984, Vantage Protein has evolved into a global benchmark for high-tech meat processing and cold chain logistics.',
        direct: 'Direct Procurement',
        access: 'Facility Access',
        cards: [
          {
            title: 'Precision Processing',
            desc: 'Our proprietary processing lines utilize advanced molecular analysis to ensure consistent quality and maximum yield for every cut.',
          },
          {
            title: 'Cold Chain Integrity',
            desc: 'From the moment of intake to final dispatch, our sub-zero environment is monitored 24/7 by integrated industrial nodes.',
          },
          {
            title: 'Global Logistics',
            desc: 'Our strategic location and integrated distribution network allow for rapid dispatch to global markets within 48-72 hours.',
          },
        ],
        timeline: 'Evolution_Timeline',
        timelineItems: [
          { year: '1984', title: 'Facility Foundation', desc: 'Initial establishment as a regional processing hub with a focus on traditional craftsmanship.' },
          { year: '1998', title: 'Industrial Expansion', desc: 'Implementation of automated processing lines and advanced cold storage infrastructure.' },
          { year: '2012', title: 'Global Integration', desc: 'Achieved full international certification and established a global distribution network.' },
          { year: '2024', title: 'Digital Transformation', desc: 'Integration of AI-driven quality control and blockchain-based traceability protocols.' },
        ],
        compliance: 'Global_Compliance_Standards',
        social: 'Social Compliance',
      };

  return (
    <div className="min-h-screen pt-32 sm:pt-40 pb-20 sm:pb-32 bg-surface px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <header className="mb-32">
          <div className="flex items-center gap-6 mb-8">
            <span className="text-[11px] font-sans font-bold uppercase tracking-[0.5em] text-oxblood/40">{text.heritage}</span>
            <span className="w-20 h-px bg-oxblood/10"></span>
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-serif font-bold text-charcoal mb-12 tracking-tight uppercase">Vantage <span className="serif-italic text-oxblood">Protein</span></h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-14 items-end">
            <p className="text-charcoal/60 font-serif italic text-2xl leading-relaxed">{text.subtitle}</p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
              <Link to={mp('marketplace')} className="rounded-xl px-8 py-4 sm:px-10 sm:py-5 bg-oxblood text-white text-[11px] font-sans font-bold uppercase tracking-[0.3em] hover:bg-charcoal transition-all duration-500">
                {text.direct}
              </Link>
              <Link to={mp('wholesale')} className="rounded-xl px-8 py-4 sm:px-10 sm:py-5 border border-border text-charcoal text-[11px] font-sans font-bold uppercase tracking-[0.3em] hover:bg-oxblood hover:text-white hover:border-oxblood transition-all duration-500">
                {text.access}
              </Link>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-10 mb-20 sm:mb-32">
          <div className="premium-card p-6 sm:p-10 bg-surface-2">
            <Microscope className="text-oxblood mb-10" size={40} />
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-charcoal mb-6 tracking-tight">{text.cards[0].title}</h3>
            <p className="text-charcoal/50 font-serif italic text-lg leading-relaxed">{text.cards[0].desc}</p>
          </div>
          <div className="premium-card p-6 sm:p-10 bg-charcoal text-white">
            <ThermometerSnowflake className="text-oxblood mb-10" size={40} />
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-6 tracking-tight">{text.cards[1].title}</h3>
            <p className="text-white/40 font-serif italic text-lg leading-relaxed">{text.cards[1].desc}</p>
          </div>
          <div className="premium-card p-6 sm:p-10 bg-surface-2">
            <Truck className="text-oxblood mb-10" size={40} />
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-charcoal mb-6 tracking-tight">{text.cards[2].title}</h3>
            <p className="text-charcoal/50 font-serif italic text-lg leading-relaxed">{text.cards[2].desc}</p>
          </div>
        </div>

        <section className="mb-40">
          <div className="flex items-center gap-6 mb-20">
            <span className="text-[11px] font-sans font-bold uppercase tracking-[0.5em] text-oxblood/40">{text.timeline}</span>
            <span className="flex-1 h-px bg-oxblood/10"></span>
          </div>
          <div className="space-y-12 sm:space-y-20">
            {text.timelineItems.map((item) => (
              <div key={item.year} className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
                <div className="md:col-span-2">
                  <span className="text-4xl sm:text-6xl font-serif font-bold text-oxblood/20">{item.year}</span>
                </div>
                <div className="md:col-span-10 border-l border-border pl-6 sm:pl-12">
                  <h4 className="text-2xl sm:text-3xl font-serif font-bold text-charcoal mb-4 tracking-tight">{item.title}</h4>
                  <p className="text-charcoal/60 font-serif italic text-lg sm:text-xl max-w-3xl leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="premium-card p-6 sm:p-12 bg-surface-2 text-center">
          <h3 className="text-[11px] font-sans font-bold uppercase tracking-[0.5em] text-oxblood mb-12">{text.compliance}</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-12 opacity-40">
            <div className="flex flex-col items-center gap-4">
              <ShieldCheck size={48} />
              <span className="text-[10px] font-sans font-bold uppercase tracking-widest">HACCP Certified</span>
            </div>
            <div className="flex flex-col items-center gap-4">
              <Award size={48} />
              <span className="text-[10px] font-sans font-bold uppercase tracking-widest">ISO 22000</span>
            </div>
            <div className="flex flex-col items-center gap-4">
              <Globe size={48} />
              <span className="text-[10px] font-sans font-bold uppercase tracking-widest">Global GAP</span>
            </div>
            <div className="flex flex-col items-center gap-4">
              <Users size={48} />
              <span className="text-[10px] font-sans font-bold uppercase tracking-widest">{text.social}</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};


