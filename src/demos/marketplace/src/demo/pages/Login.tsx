import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, ArrowRight, Mail, Lock, User } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { mp } from '../lib/paths';

export const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock login
    navigate(mp());
  };

  return (
    <div className="min-h-screen pt-40 pb-32 bg-surface px-6 flex items-center justify-center">
      <div className="max-w-md w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="premium-card p-12 bg-white"
        >
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-oxblood/5 text-oxblood rounded-full">
                <ShieldCheck size={32} />
              </div>
            </div>
            <h1 className="text-4xl font-serif font-bold text-charcoal mb-4 tracking-tight">Facility Access</h1>
            <p className="text-charcoal/50 font-serif italic text-lg">Initialize secure procurement node.</p>
          </div>

          <form className="space-y-8" onSubmit={handleSubmit}>
            <div className="space-y-4">
              <label className="text-[11px] font-sans font-bold uppercase tracking-widest text-oxblood/60 block">Network ID (Email)</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-charcoal/20" size={18} />
                <input 
                  type="email" 
                  required
                  className="w-full bg-surface border-b border-border p-4 pl-12 font-serif italic text-lg focus:outline-none focus:border-oxblood transition-colors" 
                  placeholder="procurement@vantage.node" 
                />
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <label className="text-[11px] font-sans font-bold uppercase tracking-widest text-oxblood/60">Access Protocol (Password)</label>
                <Link to="#" className="text-[10px] font-sans font-bold uppercase tracking-widest text-oxblood/40 hover:text-oxblood transition-colors">Reset_Key</Link>
              </div>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-charcoal/20" size={18} />
                <input 
                  type="password" 
                  required
                  className="w-full bg-surface border-b border-border p-4 pl-12 font-serif italic text-lg focus:outline-none focus:border-oxblood transition-colors" 
                  placeholder="••••••••" 
                />
              </div>
            </div>

            <button 
              type="submit"
              className="w-full py-6 bg-oxblood text-white text-[11px] font-sans font-bold uppercase tracking-[0.3em] hover:bg-charcoal transition-all duration-500 flex items-center justify-center gap-4 group"
            >
              Authorize Access <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </form>

          <div className="mt-12 pt-8 border-t border-border text-center">
            <p className="text-charcoal/40 font-serif italic text-sm mb-4">New procurement partner?</p>
            <Link 
              to={mp('register')} 
              className="text-[11px] font-sans font-bold uppercase tracking-widest text-oxblood hover:text-charcoal transition-colors"
            >
              Request_Facility_Node
            </Link>
          </div>
        </motion.div>

        <div className="mt-8 flex items-center justify-center gap-4 text-[9px] font-sans font-bold uppercase tracking-[0.2em] text-charcoal/30">
          <ShieldCheck size={12} />
          SSL_ENCRYPTED_NODE // FACILITY_SECURE_ACCESS
        </div>
      </div>
    </div>
  );
};
