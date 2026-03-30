import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, ArrowRight, Mail, Lock, User, Building2, Globe } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { mp } from '../lib/paths';

export const Register = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock register
    navigate(mp('login'));
  };

  return (
    <div className="min-h-screen pt-40 pb-32 bg-surface px-6 flex items-center justify-center">
      <div className="max-w-2xl w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="premium-card p-12 bg-white"
        >
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-oxblood/5 text-oxblood rounded-full">
                <Building2 size={32} />
              </div>
            </div>
            <h1 className="text-4xl font-serif font-bold text-charcoal mb-4 tracking-tight">Request Facility Access</h1>
            <p className="text-charcoal/50 font-serif italic text-lg">Initialize new procurement partner node.</p>
          </div>

          <form className="space-y-10" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-4">
                <label className="text-[11px] font-sans font-bold uppercase tracking-widest text-oxblood/60 block">Full Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-charcoal/20" size={18} />
                  <input 
                    type="text" 
                    required
                    className="w-full bg-surface border-b border-border p-4 pl-12 font-serif italic text-lg focus:outline-none focus:border-oxblood transition-colors" 
                    placeholder="John Doe" 
                  />
                </div>
              </div>
              <div className="space-y-4">
                <label className="text-[11px] font-sans font-bold uppercase tracking-widest text-oxblood/60 block">Organization</label>
                <div className="relative">
                  <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 text-charcoal/20" size={18} />
                  <input 
                    type="text" 
                    required
                    className="w-full bg-surface border-b border-border p-4 pl-12 font-serif italic text-lg focus:outline-none focus:border-oxblood transition-colors" 
                    placeholder="Global Logistics Inc." 
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-4">
                <label className="text-[11px] font-sans font-bold uppercase tracking-widest text-oxblood/60 block">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-charcoal/20" size={18} />
                  <input 
                    type="email" 
                    required
                    className="w-full bg-surface border-b border-border p-4 pl-12 font-serif italic text-lg focus:outline-none focus:border-oxblood transition-colors" 
                    placeholder="procurement@org.com" 
                  />
                </div>
              </div>
              <div className="space-y-4">
                <label className="text-[11px] font-sans font-bold uppercase tracking-widest text-oxblood/60 block">Region</label>
                <div className="relative">
                  <Globe className="absolute left-4 top-1/2 -translate-y-1/2 text-charcoal/20" size={18} />
                  <select className="w-full bg-surface border-b border-border p-4 pl-12 font-serif italic text-lg focus:outline-none focus:border-oxblood transition-colors appearance-none">
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
                <label className="text-[11px] font-sans font-bold uppercase tracking-widest text-oxblood/60 block">Access Protocol (Password)</label>
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
              <div className="space-y-4">
                <label className="text-[11px] font-sans font-bold uppercase tracking-widest text-oxblood/60 block">Confirm Protocol</label>
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
            </div>

            <button 
              type="submit"
              className="w-full py-6 bg-oxblood text-white text-[11px] font-sans font-bold uppercase tracking-[0.3em] hover:bg-charcoal transition-all duration-500 flex items-center justify-center gap-4 group"
            >
              Request Access <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </form>

          <div className="mt-12 pt-8 border-t border-border text-center">
            <p className="text-charcoal/40 font-serif italic text-sm mb-4">Already have a node?</p>
            <Link 
              to={mp('login')} 
              className="text-[11px] font-sans font-bold uppercase tracking-widest text-oxblood hover:text-charcoal transition-colors"
            >
              Authorize_Existing_Access
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
