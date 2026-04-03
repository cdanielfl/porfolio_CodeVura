import React from 'react';
import { useLocation } from 'react-router-dom';
import { Building2, FileText, ShieldCheck, Truck, Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import { resolveDemoLanguage } from '../../../../../utils/demoLanguage';

export const Wholesale = () => {
  const location = useLocation();
  const lang = resolveDemoLanguage(location.search);
  const text = lang === 'pt'
    ? {
        tag: 'Acesso_da_Unidade',
        titleA: 'Compra',
        titleB: 'Direta',
        subtitle: 'Oferecemos fornecimento industrial em grande volume e logistica especializada para distribuidores globais e parceiros institucionais.',
        inquiry: 'Protocolo de Solicitacao',
        fullName: 'Nome Completo',
        organization: 'Empresa',
        email: 'Email',
        region: 'Regiao',
        details: 'Detalhes da Solicitacao',
        detailsPlaceholder: 'Descreva sua demanda de volume e necessidades logisticas...',
        submit: 'Enviar Solicitacao',
        coordinates: 'Coordenadas_da_Unidade',
        location: 'Localizacao',
        directLine: 'Linha Direta',
        serviceProtocols: 'Protocolos_de_Servico',
        protocols: [
          'Conformidade HACCP e ISO 22000',
          'Logistica integrada de cadeia fria',
          'Documentacao de exportacao personalizada',
          'Inspecoes de qualidade no local',
        ],
      }
    : {
        tag: 'Facility_Access',
        titleA: 'Direct',
        titleB: 'Procurement',
        subtitle: 'We provide high-volume industrial supply and specialized logistics for global distributors and institutional partners.',
        inquiry: 'Inquiry Protocol',
        fullName: 'Full Name',
        organization: 'Organization',
        email: 'Email Address',
        region: 'Region',
        details: 'Inquiry Details',
        detailsPlaceholder: 'Describe your volume requirements and logistics needs...',
        submit: 'Submit Inquiry',
        coordinates: 'Facility_Coordinates',
        location: 'Location',
        directLine: 'Direct Line',
        serviceProtocols: 'Service_Protocols',
        protocols: [
          'HACCP & ISO 22000 Compliance',
          'Integrated Cold Chain Logistics',
          'Customized Export Documentation',
          'On-Site Quality Inspections',
        ],
      };

  return (
    <div className="min-h-screen pt-32 sm:pt-40 pb-20 sm:pb-32 bg-surface px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <header className="mb-14 sm:mb-24">
          <div className="flex items-center gap-6 mb-8">
            <span className="text-[11px] font-sans font-bold uppercase tracking-[0.5em] text-oxblood/40">{text.tag}</span>
            <span className="w-20 h-px bg-oxblood/10"></span>
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-serif font-bold text-charcoal mb-12 tracking-tight">{text.titleA} <span className="serif-italic text-oxblood">{text.titleB}</span></h1>
          <p className="text-charcoal/60 font-serif italic text-lg sm:text-2xl max-w-3xl leading-relaxed">{text.subtitle}</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16">
          <div className="lg:col-span-7">
            <div className="premium-card p-6 sm:p-10 bg-surface-2">
              <h3 className="text-3xl font-serif font-bold text-charcoal mb-12 tracking-tight">{text.inquiry}</h3>
              <form className="space-y-6 sm:space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10">
                  <div className="space-y-4">
                    <label className="text-[11px] font-sans font-bold uppercase tracking-widest text-oxblood/60">{text.fullName}</label>
                    <input type="text" className="w-full bg-white border border-border rounded-xl px-4 py-3 font-serif italic text-base sm:text-lg focus:outline-none focus:border-oxblood transition-colors" placeholder="John Doe" />
                  </div>
                  <div className="space-y-4">
                    <label className="text-[11px] font-sans font-bold uppercase tracking-widest text-oxblood/60">{text.organization}</label>
                    <input type="text" className="w-full bg-white border border-border rounded-xl px-4 py-3 font-serif italic text-base sm:text-lg focus:outline-none focus:border-oxblood transition-colors" placeholder="Global Logistics Inc." />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10">
                  <div className="space-y-4">
                    <label className="text-[11px] font-sans font-bold uppercase tracking-widest text-oxblood/60">{text.email}</label>
                    <input type="email" className="w-full bg-white border border-border rounded-xl px-4 py-3 font-serif italic text-base sm:text-lg focus:outline-none focus:border-oxblood transition-colors" placeholder="procurement@org.com" />
                  </div>
                  <div className="space-y-4">
                    <label className="text-[11px] font-sans font-bold uppercase tracking-widest text-oxblood/60">{text.region}</label>
                    <select className="w-full bg-white border border-border rounded-xl px-4 py-3 font-serif italic text-base sm:text-lg focus:outline-none focus:border-oxblood transition-colors">
                      <option>{lang === 'pt' ? 'America do Norte' : 'North America'}</option>
                      <option>{lang === 'pt' ? 'Uniao Europeia' : 'European Union'}</option>
                      <option>{lang === 'pt' ? 'Asia Pacifico' : 'Asia Pacific'}</option>
                      <option>{lang === 'pt' ? 'Oriente Medio' : 'Middle East'}</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-4">
                  <label className="text-[11px] font-sans font-bold uppercase tracking-widest text-oxblood/60">{text.details}</label>
                  <textarea rows={4} className="w-full bg-white border border-border rounded-xl px-4 py-3 font-serif italic text-base sm:text-lg focus:outline-none focus:border-oxblood transition-colors" placeholder={text.detailsPlaceholder}></textarea>
                </div>
                <button className="w-full rounded-xl py-4 sm:py-6 bg-oxblood text-white text-[11px] font-sans font-bold uppercase tracking-[0.3em] hover:bg-charcoal transition-all duration-500 flex items-center justify-center gap-4 group">
                  {text.submit} <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                </button>
              </form>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6 sm:space-y-10">
            <div className="premium-card p-12 bg-charcoal text-white">
              <h4 className="text-[11px] font-sans font-bold uppercase tracking-[0.5em] text-oxblood mb-8">{text.coordinates}</h4>
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <MapPin className="text-oxblood shrink-0" size={24} />
                  <div>
                    <p className="text-white/60 text-[10px] font-sans font-bold uppercase tracking-widest mb-1">{text.location}</p>
                    <p className="font-serif italic text-lg">Industrial Sector 04, Cold Chain Hub, SP 01000-000</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <Phone className="text-oxblood shrink-0" size={24} />
                  <div>
                    <p className="text-white/60 text-[10px] font-sans font-bold uppercase tracking-widest mb-1">{text.directLine}</p>
                    <p className="font-serif italic text-lg">+55 (11) 4004-9000</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <Mail className="text-oxblood shrink-0" size={24} />
                  <div>
                    <p className="text-white/60 text-[10px] font-sans font-bold uppercase tracking-widest mb-1">Email</p>
                    <p className="font-serif italic text-lg">procurement@vantage.protein</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="premium-card p-12 bg-surface-2">
              <h4 className="text-[11px] font-sans font-bold uppercase tracking-[0.5em] text-oxblood mb-8">{text.serviceProtocols}</h4>
              <ul className="space-y-6">
                {[
                  { icon: ShieldCheck, text: text.protocols[0] },
                  { icon: Truck, text: text.protocols[1] },
                  { icon: FileText, text: text.protocols[2] },
                  { icon: Building2, text: text.protocols[3] },
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-4 text-charcoal/60 font-serif italic">
                    <item.icon size={18} className="text-oxblood" />
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};



