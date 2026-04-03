import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, ArrowRight, Mail, Lock, User, Building2, Globe } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { mp } from '../lib/paths';
import { resolveDemoLanguage } from '../../../../../utils/demoLanguage';

export const Register = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const lang = resolveDemoLanguage(location.search);
  const text = lang === 'pt'
    ? {
        title: 'Solicitar acesso a unidade',
        subtitle: 'Inicialize um novo no de parceiro.',
        fullName: 'Nome completo',
        organization: 'Empresa',
        email: 'Email',
        region: 'Regiao',
        password: 'Protocolo de acesso (senha)',
        confirm: 'Confirmar protocolo',
        request: 'Solicitar acesso',
        already: 'Ja possui um no?',
        authorize: 'Autorizar acesso existente',
        secure: 'NO SSL ENCRIPTADO // ACESSO SEGURO',
      }
    : {
        title: 'Request Facility Access',
        subtitle: 'Initialize new procurement partner node.',
        fullName: 'Full Name',
        organization: 'Organization',
        email: 'Email Address',
        region: 'Region',
        password: 'Access Protocol (Password)',
        confirm: 'Confirm Protocol',
        request: 'Request Access',
        already: 'Already have a node?',
        authorize: 'Authorize_Existing_Access',
        secure: 'SSL_ENCRYPTED_NODE // FACILITY_SECURE_ACCESS',
      };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock register
    navigate(mp('login'));
  };

  return (
    <div className="min-h-screen pt-32 sm:pt-40 pb-20 sm:pb-32 bg-surface px-4 sm:px-6 flex items-center justify-center">
      <div className="max-w-2xl w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="premium-card p-12 bg-surface-2"
        >
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-oxblood/5 text-oxblood rounded-full">
                <Building2 size={32} />
              </div>
            </div>
            <h1 className="text-4xl font-serif font-bold text-charcoal mb-4 tracking-tight">{text.title}</h1>
            <p className="text-charcoal/50 font-serif italic text-lg">{text.subtitle}</p>
          </div>

          <form className="space-y-10" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-4">
                <label className="text-[11px] font-sans font-bold uppercase tracking-widest text-oxblood/60 block">{text.fullName}</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-charcoal/20" size={18} />
                  <input 
                    type="text" 
                    required
                    autoComplete="name"
                    className="w-full bg-white border border-border rounded-xl p-4 pl-12 font-serif italic text-lg focus:outline-none focus:border-oxblood transition-colors" 
                    placeholder="John Doe" 
                  />
                </div>
              </div>
              <div className="space-y-4">
                <label className="text-[11px] font-sans font-bold uppercase tracking-widest text-oxblood/60 block">{text.organization}</label>
                <div className="relative">
                  <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 text-charcoal/20" size={18} />
                  <input 
                    type="text" 
                    required
                    autoComplete="organization"
                    className="w-full bg-white border border-border rounded-xl p-4 pl-12 font-serif italic text-lg focus:outline-none focus:border-oxblood transition-colors" 
                    placeholder="Global Logistics Inc." 
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-4">
                <label className="text-[11px] font-sans font-bold uppercase tracking-widest text-oxblood/60 block">{text.email}</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-charcoal/20" size={18} />
                  <input 
                    type="email" 
                    required
                    autoComplete="email"
                    className="w-full bg-white border border-border rounded-xl p-4 pl-12 font-serif italic text-lg focus:outline-none focus:border-oxblood transition-colors" 
                    placeholder="procurement@org.com" 
                  />
                </div>
              </div>
              <div className="space-y-4">
                <label className="text-[11px] font-sans font-bold uppercase tracking-widest text-oxblood/60 block">{text.region}</label>
                <div className="relative">
                  <Globe className="absolute left-4 top-1/2 -translate-y-1/2 text-charcoal/20" size={18} />
                  <select className="w-full bg-white border border-border rounded-xl p-4 pl-12 font-serif italic text-lg focus:outline-none focus:border-oxblood transition-colors appearance-none">
                    <option>North America</option>
                    <option>European Union</option>
                    <option>Asia Pacific</option>
                    <option>Middle East</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-4">
                <label className="text-[11px] font-sans font-bold uppercase tracking-widest text-oxblood/60 block">{text.password}</label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-charcoal/20" size={18} />
                  <input 
                    type="password" 
                    required
                    autoComplete="new-password"
                    className="w-full bg-white border border-border rounded-xl p-4 pl-12 font-serif italic text-lg focus:outline-none focus:border-oxblood transition-colors" 
                    placeholder="••••••••" 
                  />
                </div>
              </div>
              <div className="space-y-4">
                <label className="text-[11px] font-sans font-bold uppercase tracking-widest text-oxblood/60 block">{text.confirm}</label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-charcoal/20" size={18} />
                  <input 
                    type="password" 
                    required
                    autoComplete="new-password"
                    className="w-full bg-white border border-border rounded-xl p-4 pl-12 font-serif italic text-lg focus:outline-none focus:border-oxblood transition-colors" 
                    placeholder="••••••••" 
                  />
                </div>
              </div>
            </div>

            <button 
              type="submit"
              className="w-full py-6 bg-oxblood text-white text-[11px] font-sans font-bold uppercase tracking-[0.3em] hover:bg-charcoal transition-all duration-500 flex items-center justify-center gap-4 group"
            >
              {text.request} <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </form>

          <div className="mt-12 pt-8 border-t border-border text-center">
            <p className="text-charcoal/40 font-serif italic text-sm mb-4">{text.already}</p>
            <Link 
              to={mp('login')} 
              className="text-[11px] font-sans font-bold uppercase tracking-widest text-oxblood hover:text-charcoal transition-colors"
            >
              {text.authorize}
            </Link>
          </div>
        </motion.div>

        <div className="mt-8 flex items-center justify-center gap-4 text-[9px] font-sans font-bold uppercase tracking-[0.2em] text-charcoal/30">
          <ShieldCheck size={12} />
          {text.secure}
        </div>
      </div>
    </div>
  );
};


