import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Globe } from 'lucide-react';

export const Contact = () => {
  return (
    <div className="pt-32 pb-24 px-6 bg-charcoal min-h-screen relative">
      <div className="fixed inset-0 tech-grid opacity-10 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div>
            <div className="flex items-center gap-2 text-neon-red font-mono text-[10px] font-bold uppercase tracking-[0.3em] mb-6">
              <span>System</span>
              <span>//</span>
              <span className="text-ice/40">Communication_Interface</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-mono font-black tracking-tighter uppercase text-white mb-10 leading-none">
              Initialize <span className="text-neon-red italic glow-text">Contact</span>
            </h1>
            <p className="text-xl font-mono text-ice/50 leading-relaxed mb-16 border-l-2 border-neon-red/30 pl-8">
              Our technical specialists are available across global time zones to assist with node integration, thermal logistics, and molecular specifications.
            </p>

            <div className="space-y-12">
              {[
                { icon: MapPin, label: 'Global_HQ', val: '124 Heritage Way, Culinary District\nLondon, EC1A 4JQ, UK' },
                { icon: Phone, label: 'Wholesale_Desk', val: '+44 (0) 20 7946 0123\nMon-Fri, 08:00 - 18:00 GMT' },
                { icon: Mail, label: 'System_Inquiries', val: 'procurement@primecutglobal.com\nlogistics@primecutglobal.com' },
              ].map((item, i) => (
                <div key={i} className="flex gap-8 group">
                  <div className="w-16 h-16 glass-panel industrial-border flex items-center justify-center text-neon-red shrink-0 group-hover:bg-neon-red group-hover:text-white transition-all">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h4 className="font-mono font-bold text-[10px] uppercase tracking-[0.4em] text-neon-red mb-3">{item.label}</h4>
                    <p className="text-sm font-mono text-ice/60 whitespace-pre-line leading-relaxed">{item.val}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-panel p-12 industrial-border relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 opacity-10 pointer-events-none">
              <div className="absolute inset-0 tech-grid"></div>
            </div>
            <h3 className="text-3xl font-mono font-black text-white uppercase tracking-tighter mb-10">Send_Message_Protocol</h3>
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[9px] font-mono font-bold uppercase tracking-[0.4em] text-ice/30">User_Identity</label>
                  <input type="text" className="w-full glass-panel industrial-border px-6 py-4 text-sm font-mono text-white focus:outline-none focus:border-neon-red" placeholder="Jane_Smith" />
                </div>
                <div className="space-y-3">
                  <label className="text-[9px] font-mono font-bold uppercase tracking-[0.4em] text-ice/30">Network_Address</label>
                  <input type="email" className="w-full glass-panel industrial-border px-6 py-4 text-sm font-mono text-white focus:outline-none focus:border-neon-red" placeholder="jane@node.com" />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-[9px] font-mono font-bold uppercase tracking-[0.4em] text-ice/30">Subject_Header</label>
                <select className="w-full glass-panel industrial-border px-6 py-4 text-sm font-mono text-white focus:outline-none focus:border-neon-red appearance-none cursor-pointer">
                  <option>General_Inquiry</option>
                  <option>Logistics_Tracking</option>
                  <option>Compliance_Protocol</option>
                  <option>Partnership_Node</option>
                </select>
              </div>
              <div className="space-y-3">
                <label className="text-[9px] font-mono font-bold uppercase tracking-[0.4em] text-ice/30">Payload_Data</label>
                <textarea rows={6} className="w-full glass-panel industrial-border px-6 py-4 text-sm font-mono text-white focus:outline-none focus:border-neon-red" placeholder="Describe your requirements..."></textarea>
              </div>
              <button className="w-full bg-neon-red text-white py-6 font-mono font-black uppercase tracking-[0.3em] hover:bg-white hover:text-charcoal transition-all flex items-center justify-center gap-4 group">
                Transmit Data <Send size={20} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
              </button>
            </form>
            <div className="scanline"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
