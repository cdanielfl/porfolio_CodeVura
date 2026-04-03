import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, ArrowRight, Mail, Lock, User } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { mp } from '../lib/paths';
import { resolveDemoLanguage } from '../../../../../utils/demoLanguage';

export const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const lang = resolveDemoLanguage(location.search);
  const text = lang === 'pt'
    ? {
        title: 'Acesso a unidade',
        subtitle: 'Inicialize o no de compras com seguranca.',
        networkId: 'ID de rede (email)',
        accessProtocol: 'Protocolo de acesso (senha)',
        reset: 'Redefinir chave',
        authorize: 'Autorizar acesso',
        newPartner: 'Novo parceiro de compras?',
        requestNode: 'Solicitar no da unidade',
        secure: 'NO SSL ENCRIPTADO // ACESSO SEGURO',
      }
    : {
        title: 'Facility Access',
        subtitle: 'Initialize secure procurement node.',
        networkId: 'Network ID (Email)',
        accessProtocol: 'Access Protocol (Password)',
        reset: 'Reset_Key',
        authorize: 'Authorize Access',
        newPartner: 'New procurement partner?',
        requestNode: 'Request_Facility_Node',
        secure: 'SSL_ENCRYPTED_NODE // FACILITY_SECURE_ACCESS',
      };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock login
    navigate(mp());
  };

  return (
    <div className="min-h-screen pt-32 sm:pt-40 pb-20 sm:pb-32 bg-surface px-4 sm:px-6 flex items-center justify-center">
      <div className="max-w-md w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="premium-card p-12 bg-surface-2"
        >
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-oxblood/5 text-oxblood rounded-full">
                <ShieldCheck size={32} />
              </div>
            </div>
            <h1 className="text-4xl font-serif font-bold text-charcoal mb-4 tracking-tight">{text.title}</h1>
            <p className="text-charcoal/50 font-serif italic text-lg">{text.subtitle}</p>
          </div>

          <form className="space-y-8" onSubmit={handleSubmit}>
            <div className="space-y-4">
              <label className="text-[11px] font-sans font-bold uppercase tracking-widest text-oxblood/60 block">{text.networkId}</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-charcoal/20" size={18} />
                <input 
                  type="email" 
                  required
                  autoComplete="email"
                  className="w-full bg-white border border-border rounded-xl p-4 pl-12 font-serif italic text-lg focus:outline-none focus:border-oxblood transition-colors" 
                  placeholder="procurement@vantage.node" 
                />
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <label className="text-[11px] font-sans font-bold uppercase tracking-widest text-oxblood/60">{text.accessProtocol}</label>
                <Link to="#" className="text-[10px] font-sans font-bold uppercase tracking-widest text-oxblood/40 hover:text-oxblood transition-colors">{text.reset}</Link>
              </div>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-charcoal/20" size={18} />
                <input 
                  type="password" 
                  required
                  autoComplete="current-password"
                  className="w-full bg-white border border-border rounded-xl p-4 pl-12 font-serif italic text-lg focus:outline-none focus:border-oxblood transition-colors" 
                  placeholder="••••••••" 
                />
              </div>
            </div>

            <button 
              type="submit"
              className="w-full py-6 bg-oxblood text-white text-[11px] font-sans font-bold uppercase tracking-[0.3em] hover:bg-charcoal transition-all duration-500 flex items-center justify-center gap-4 group"
            >
              {text.authorize} <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </form>

          <div className="mt-12 pt-8 border-t border-border text-center">
            <p className="text-charcoal/40 font-serif italic text-sm mb-4">{text.newPartner}</p>
            <Link 
              to={mp('register')} 
              className="text-[11px] font-sans font-bold uppercase tracking-widest text-oxblood hover:text-charcoal transition-colors"
            >
              {text.requestNode}
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


