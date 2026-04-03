import React from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { ShieldCheck, Award, CheckCircle2, Globe, FileText } from 'lucide-react';
import { resolveDemoLanguage } from '../../../../../utils/demoLanguage';

export const Standards = () => {
  const location = useLocation();
  const lang = resolveDemoLanguage(location.search);

  const text = lang === 'pt'
    ? {
        system: 'Sistema',
        qa: 'Garantia_de_Qualidade',
        titleA: 'Padroes',
        titleB: 'Rigorosos',
        subtitle:
          'No mercado premium de carnes, confianca nasce da transparencia. Nosso sistema em camadas garante seguranca, etica e excelencia em cada lote.',
        inspectionA: 'Inspecao',
        inspectionB: '12 Pontos',
        requestPack: 'Solicitar_Pacote_de_Conformidade',
        requestDesc:
          'Precisa de certificados sanitarios ou relatorios de auditoria para seu processo de compras? Nosso time de compliance atende com total transparencia.',
        download: 'Baixar Dados',
        steps: [
          { title: 'Verificacao_de_Origem', desc: 'Teste de DNA e certificacao da fazenda de origem para cada lote.' },
          { title: 'Analise_de_Marmoreio', desc: 'Escaneamento digital para confirmar classificacao e padrao de qualidade.' },
          { title: 'Integridade_da_Cadeia_Fria', desc: 'Monitoramento continuo de temperatura do despacho a entrega.' },
          { title: 'Precisao_de_Maturacao', desc: 'Controle ambiental para maturacao a seco e a umido.' },
        ],
      }
    : {
        system: 'System',
        qa: 'Quality_Assurance',
        titleA: 'Uncompromising',
        titleB: 'Standards',
        subtitle:
          'In premium meat distribution, trust is built on transparency. Our multi-layered quality control system ensures that every cut meets top global benchmarks.',
        inspectionA: 'The 12-Point',
        inspectionB: 'Inspection',
        requestPack: 'Request_Compliance_Pack',
        requestDesc:
          'Need specific health certificates or audit reports for your procurement process? Our compliance team is ready to assist with full data transparency.',
        download: 'Download Data',
        steps: [
          { title: 'Origin_Verification', desc: 'DNA testing and farm-of-origin certification for every batch.' },
          { title: 'Marbling_Analysis', desc: 'Digital scanning to confirm BMS and USDA grading accuracy.' },
          { title: 'Cold_Chain_Integrity', desc: 'Continuous temperature monitoring from dispatch to delivery.' },
          { title: 'Aging_Precision', desc: 'Controlled environment monitoring for dry and wet aging processes.' },
        ],
      };

  const certifications = lang === 'pt'
    ? [
        { name: 'HACCP_Certificado', icon: <ShieldCheck size={28} />, desc: 'Sistema de Analise de Perigos e Pontos Criticos para seguranca de alimentos.' },
        { name: 'ISO_22000', icon: <Award size={28} />, desc: 'Padrao internacional para sistemas de gestao de seguranca de alimentos.' },
        { name: 'BRCGS_Global', icon: <Globe size={28} />, desc: 'Referencia mundial em boas praticas de fabricacao.' },
        { name: 'Protocolo_Halal', icon: <CheckCircle2 size={28} />, desc: 'Conformidade com normas de processamento e dieta islamica.' },
      ]
    : [
        { name: 'HACCP_Certified', icon: <ShieldCheck size={28} />, desc: 'Hazard Analysis Critical Control Point system for food safety management.' },
        { name: 'ISO_22000', icon: <Award size={28} />, desc: 'International standard for food safety management systems.' },
        { name: 'BRCGS_Global', icon: <Globe size={28} />, desc: 'Setting the benchmark for good manufacturing practices.' },
        { name: 'Halal_Protocol', icon: <CheckCircle2 size={28} />, desc: 'Compliance with Islamic dietary laws and processing standards.' },
      ];

  return (
    <div className="min-h-screen pt-32 sm:pt-40 pb-20 sm:pb-24 px-4 sm:px-6 bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 sm:mb-16">
          <div className="flex items-center gap-3 text-oxblood text-[10px] font-sans font-bold uppercase tracking-[0.28em] mb-5">
            <span>{text.system}</span>
            <span>//</span>
            <span className="text-charcoal/50">{text.qa}</span>
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-bold tracking-tight text-charcoal leading-none mb-6">
            {text.titleA} <span className="serif-italic text-oxblood">{text.titleB}</span>
          </h1>
          <p className="text-lg sm:text-xl font-serif italic text-charcoal/60 leading-relaxed max-w-3xl border-l-2 border-oxblood/20 pl-5 sm:pl-8">{text.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-14 sm:mb-20">
          {certifications.map((cert, idx) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="premium-card surface-panel p-5 sm:p-6"
            >
              <div className="w-12 h-12 rounded-xl bg-oxblood/10 border border-oxblood/20 flex items-center justify-center text-oxblood mb-5">
                {cert.icon}
              </div>
              <h3 className="text-xl font-serif font-bold text-charcoal tracking-tight mb-2">{cert.name}</h3>
              <p className="text-sm text-charcoal/60 leading-relaxed">{cert.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-14 sm:mb-20">
          <div className="relative group">
            <div className="rounded-2xl overflow-hidden border border-border">
              <img
                src="https://images.unsplash.com/photo-1603048297172-c92544798d5e?q=80&w=1000&auto=format&fit=crop"
                alt="Quality Control"
                className="w-full aspect-square object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          <div>
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-charcoal tracking-tight mb-8">
              {text.inspectionA} <span className="serif-italic text-oxblood">{text.inspectionB}</span>
            </h2>
            <div className="space-y-6">
              {text.steps.map((item, i) => (
                <div key={i} className="flex gap-4">
                  <span className="text-oxblood font-serif text-3xl font-bold opacity-40">0{i + 1}</span>
                  <div className="pt-1">
                    <h4 className="text-[10px] font-sans font-bold uppercase tracking-[0.25em] text-oxblood mb-2">{item.title}</h4>
                    <p className="text-sm text-charcoal/65 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="premium-card surface-deep p-6 sm:p-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 sm:gap-10 text-white">
          <div className="max-w-xl">
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight mb-3">{text.requestPack}</h3>
            <p className="text-sm text-white/70 leading-relaxed">{text.requestDesc}</p>
          </div>
          <button className="w-full md:w-auto rounded-xl px-8 py-4 bg-oxblood text-white font-sans font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-charcoal transition-all flex items-center justify-center gap-3">
            {text.download} <FileText size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};
