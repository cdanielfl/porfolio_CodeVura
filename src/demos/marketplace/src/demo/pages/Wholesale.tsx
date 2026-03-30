import React from 'react';
import { motion } from 'motion/react';
import { Building2, FileText, ShieldCheck, Truck, Phone, Mail, MapPin, ArrowRight } from 'lucide-react';

export const Wholesale = () => {
  return (
    <div className="min-h-screen pt-40 pb-32 bg-surface px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="mb-32">
          <div className="flex items-center gap-6 mb-8">
            <span className="text-[11px] font-sans font-bold uppercase tracking-[0.5em] text-oxblood/40">Facility_Access</span>
            <span className="w-20 h-px bg-oxblood/10"></span>
          </div>
          <h1 className="text-7xl md:text-9xl font-serif font-bold text-charcoal mb-12 tracking-tight">Direct <span className="serif-italic text-oxblood">Procurement</span></h1>
          <p className="text-charcoal/60 font-serif italic text-2xl max-w-3xl leading-relaxed">
            We provide high-volume industrial supply and specialized logistics for global distributors and institutional partners.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          {/* Left Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="premium-card p-16 bg-white">
              <h3 className="text-3xl font-serif font-bold text-charcoal mb-12 tracking-tight">Inquiry Protocol</h3>
              <form className="space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-4">
                    <label className="text-[11px] font-sans font-bold uppercase tracking-widest text-oxblood/60">Full Name</label>
                    <input type="text" className="w-full bg-surface border-b border-border p-4 font-serif italic text-lg focus:outline-none focus:border-oxblood transition-colors" placeholder="John Doe" />
                  </div>
                  <div className="space-y-4">
                    <label className="text-[11px] font-sans font-bold uppercase tracking-widest text-oxblood/60">Organization</label>
                    <input type="text" className="w-full bg-surface border-b border-border p-4 font-serif italic text-lg focus:outline-none focus:border-oxblood transition-colors" placeholder="Global Logistics Inc." />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-4">
                    <label className="text-[11px] font-sans font-bold uppercase tracking-widest text-oxblood/60">Email Address</label>
                    <input type="email" className="w-full bg-surface border-b border-border p-4 font-serif italic text-lg focus:outline-none focus:border-oxblood transition-colors" placeholder="procurement@org.com" />
                  </div>
                  <div className="space-y-4">
                    <label className="text-[11px] font-sans font-bold uppercase tracking-widest text-oxblood/60">Region</label>
                    <select className="w-full bg-surface border-b border-border p-4 font-serif italic text-lg focus:outline-none focus:border-oxblood transition-colors">
                      <option>North America</option>
                      <option>European Union</option>
                      <option>Asia Pacific</option>
                      <option>Middle East</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-4">
                  <label className="text-[11px] font-sans font-bold uppercase tracking-widest text-oxblood/60">Inquiry Details</label>
                  <textarea rows={4} className="w-full bg-surface border-b border-border p-4 font-serif italic text-lg focus:outline-none focus:border-oxblood transition-colors" placeholder="Describe your volume requirements and logistics needs..."></textarea>
                </div>
                <button className="w-full py-6 bg-oxblood text-white text-[11px] font-sans font-bold uppercase tracking-[0.3em] hover:bg-charcoal transition-all duration-500 flex items-center justify-center gap-4 group">
                  Submit Inquiry <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                </button>
              </form>
            </div>
          </div>

          {/* Right Column: Info */}
          <div className="lg:col-span-5 space-y-12">
            <div className="premium-card p-12 bg-charcoal text-white">
              <h4 className="text-[11px] font-sans font-bold uppercase tracking-[0.5em] text-oxblood mb-8">Facility_Coordinates</h4>
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <MapPin className="text-oxblood shrink-0" size={24} />
                  <div>
                    <p className="text-white/40 text-[10px] font-sans font-bold uppercase tracking-widest mb-1">Location</p>
                    <p className="font-serif italic text-lg">Industrial Sector 04, Cold Chain Hub, SP 01000-000</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <Phone className="text-oxblood shrink-0" size={24} />
                  <div>
                    <p className="text-white/40 text-[10px] font-sans font-bold uppercase tracking-widest mb-1">Direct Line</p>
                    <p className="font-serif italic text-lg">+55 (11) 4004-9000</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <Mail className="text-oxblood shrink-0" size={24} />
                  <div>
                    <p className="text-white/40 text-[10px] font-sans font-bold uppercase tracking-widest mb-1">Email</p>
                    <p className="font-serif italic text-lg">procurement@vantage.protein</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="premium-card p-12 bg-white">
              <h4 className="text-[11px] font-sans font-bold uppercase tracking-[0.5em] text-oxblood mb-8">Service_Protocols</h4>
              <ul className="space-y-6">
                {[
                  { icon: ShieldCheck, text: 'HACCP & ISO 22000 Compliance' },
                  { icon: Truck, text: 'Integrated Cold Chain Logistics' },
                  { icon: FileText, text: 'Customized Export Documentation' },
                  { icon: Building2, text: 'On-Site Quality Inspections' },
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
