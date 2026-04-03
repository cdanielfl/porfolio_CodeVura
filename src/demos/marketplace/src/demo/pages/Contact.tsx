import React from 'react';
import { useLocation } from 'react-router-dom';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { resolveDemoLanguage } from '../../../../../utils/demoLanguage';

export const Contact = () => {
  const location = useLocation();
  const lang = resolveDemoLanguage(location.search);
  const text = lang === 'pt'
    ? {
        system: 'Sistema',
        comm: 'Interface_de_Comunicacao',
        titleA: 'Iniciar',
        titleB: 'Contato',
        subtitle:
          'Nossos especialistas tecnicos atendem em varios fusos para suporte de integracao, logistica termica e especificacoes moleculares.',
        info: [
          { label: 'Sede_Global', val: '124 Heritage Way, Culinary District\nLondon, EC1A 4JQ, UK' },
          { label: 'Mesa_Atacado', val: '+44 (0) 20 7946 0123\nSeg-Sex, 08:00 - 18:00 GMT' },
          { label: 'Solicitacoes', val: 'procurement@primecutglobal.com\nlogistics@primecutglobal.com' },
        ],
        sendProtocol: 'Protocolo_de_Mensagem',
        identity: 'Identificacao',
        network: 'Endereco_de_Rede',
        subject: 'Assunto',
        payload: 'Dados_da_Mensagem',
        placeholderMsg: 'Descreva seus requisitos...',
        send: 'Transmitir Dados',
        options: ['Consulta_Geral', 'Rastreamento_Logistico', 'Protocolo_de_Conformidade', 'No_de_Parceria'],
      }
    : {
        system: 'System',
        comm: 'Communication_Interface',
        titleA: 'Initialize',
        titleB: 'Contact',
        subtitle:
          'Our technical specialists are available across global time zones to assist with node integration, thermal logistics, and molecular specifications.',
        info: [
          { label: 'Global_HQ', val: '124 Heritage Way, Culinary District\nLondon, EC1A 4JQ, UK' },
          { label: 'Wholesale_Desk', val: '+44 (0) 20 7946 0123\nMon-Fri, 08:00 - 18:00 GMT' },
          { label: 'System_Inquiries', val: 'procurement@primecutglobal.com\nlogistics@primecutglobal.com' },
        ],
        sendProtocol: 'Send_Message_Protocol',
        identity: 'User_Identity',
        network: 'Network_Address',
        subject: 'Subject_Header',
        payload: 'Payload_Data',
        placeholderMsg: 'Describe your requirements...',
        send: 'Transmit Data',
        options: ['General_Inquiry', 'Logistics_Tracking', 'Compliance_Protocol', 'Partnership_Node'],
      };

  return (
    <div className="min-h-screen pt-32 sm:pt-40 pb-20 sm:pb-24 px-4 sm:px-6 bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start">
          <div>
            <div className="flex items-center gap-3 text-oxblood text-[10px] font-sans font-bold uppercase tracking-[0.28em] mb-5">
              <span>{text.system}</span>
              <span>//</span>
              <span className="text-charcoal/50">{text.comm}</span>
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-bold tracking-tight text-charcoal mb-6 leading-none">
              {text.titleA} <span className="serif-italic text-oxblood">{text.titleB}</span>
            </h1>
            <p className="text-lg sm:text-xl font-serif italic text-charcoal/60 leading-relaxed mb-8 sm:mb-12 border-l-2 border-oxblood/20 pl-5 sm:pl-8">
              {text.subtitle}
            </p>

            <div className="space-y-5 sm:space-y-6">
              {[
                { icon: MapPin, ...text.info[0] },
                { icon: Phone, ...text.info[1] },
                { icon: Mail, ...text.info[2] },
              ].map((item, i) => (
                <div key={i} className="premium-card surface-panel p-4 sm:p-6 flex gap-4 sm:gap-5">
                  <div className="w-11 h-11 rounded-xl bg-oxblood/10 border border-oxblood/20 flex items-center justify-center text-oxblood shrink-0">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-[10px] uppercase tracking-[0.24em] text-oxblood mb-1.5">{item.label}</h4>
                    <p className="text-sm font-serif text-charcoal/70 whitespace-pre-line leading-relaxed">{item.val}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="premium-card surface-deep p-5 sm:p-8 text-white">
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight mb-6">{text.sendProtocol}</h3>
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-white/70">{text.identity}</label>
                  <input type="text" autoComplete="name" className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/50 focus:outline-none focus:border-oxblood" placeholder="Jane_Smith" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-white/70">{text.network}</label>
                  <input type="email" autoComplete="email" className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/50 focus:outline-none focus:border-oxblood" placeholder="jane@node.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-white/70">{text.subject}</label>
                <select className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-oxblood">
                  {text.options.map((option) => (
                    <option key={option} className="text-charcoal">{option}</option>
                  ))}
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-white/70">{text.payload}</label>
                <textarea rows={5} className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/50 focus:outline-none focus:border-oxblood" placeholder={text.placeholderMsg}></textarea>
              </div>
              <button className="w-full rounded-xl bg-oxblood text-white py-4 font-sans font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-charcoal transition-all flex items-center justify-center gap-3">
                {text.send} <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
