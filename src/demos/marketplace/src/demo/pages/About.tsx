import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Award, Users, Globe, Factory, Microscope, ThermometerSnowflake, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { mp } from '../lib/paths';

export const About = () => {
  return (
    <div className="min-h-screen pt-40 pb-32 bg-surface px-6">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <header className="mb-32">
          <div className="flex items-center gap-6 mb-8">
            <span className="text-[11px] font-sans font-bold uppercase tracking-[0.5em] text-oxblood/40">Facility_Heritage</span>
            <span className="w-20 h-px bg-oxblood/10"></span>
          </div>
          <h1 className="text-7xl md:text-9xl font-serif font-bold text-charcoal mb-12 tracking-tight uppercase">Vantage <span className="serif-italic text-oxblood">Protein</span></h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-end">
            <p className="text-charcoal/60 font-serif italic text-2xl leading-relaxed">
              Established in 1984, Vantage Protein has evolved into a global benchmark for high-tech meat processing and cold chain logistics.
            </p>
            <div className="flex gap-8">
              <Link to={mp('marketplace')} className="px-10 py-5 bg-oxblood text-white text-[11px] font-sans font-bold uppercase tracking-[0.3em] hover:bg-charcoal transition-all duration-500">
                Direct Procurement
              </Link>
              <Link to={mp('wholesale')} className="px-10 py-5 border border-border text-charcoal text-[11px] font-sans font-bold uppercase tracking-[0.3em] hover:bg-oxblood hover:text-white hover:border-oxblood transition-all duration-500">
                Facility Access
              </Link>
            </div>
          </div>
        </header>

        {/* Vision & Values */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-40">
          <div className="premium-card p-16 bg-white">
            <Microscope className="text-oxblood mb-10" size={40} />
            <h3 className="text-3xl font-serif font-bold text-charcoal mb-6 tracking-tight">Precision Processing</h3>
            <p className="text-charcoal/50 font-serif italic text-lg leading-relaxed">
              Our proprietary processing lines utilize advanced molecular analysis to ensure consistent quality and maximum yield for every cut.
            </p>
          </div>
          <div className="premium-card p-16 bg-charcoal text-white">
            <ThermometerSnowflake className="text-oxblood mb-10" size={40} />
            <h3 className="text-3xl font-serif font-bold text-white mb-6 tracking-tight">Cold Chain Integrity</h3>
            <p className="text-white/40 font-serif italic text-lg leading-relaxed">
              From the moment of intake to final dispatch, our sub-zero environment is monitored 24/7 by integrated industrial nodes.
            </p>
          </div>
          <div className="premium-card p-16 bg-white">
            <Truck className="text-oxblood mb-10" size={40} />
            <h3 className="text-3xl font-serif font-bold text-charcoal mb-6 tracking-tight">Global Logistics</h3>
            <p className="text-charcoal/50 font-serif italic text-lg leading-relaxed">
              Our strategic location and integrated distribution network allow for rapid dispatch to global markets within 48-72 hours.
            </p>
          </div>
        </div>

        {/* Timeline/History */}
        <section className="mb-40">
          <div className="flex items-center gap-6 mb-20">
            <span className="text-[11px] font-sans font-bold uppercase tracking-[0.5em] text-oxblood/40">Evolution_Timeline</span>
            <span className="flex-1 h-px bg-oxblood/10"></span>
          </div>
          <div className="space-y-24">
            {[
              { year: '1984', title: 'Facility Foundation', desc: 'Initial establishment as a regional processing hub with a focus on traditional craftsmanship.' },
              { year: '1998', title: 'Industrial Expansion', desc: 'Implementation of automated processing lines and advanced cold storage infrastructure.' },
              { year: '2012', title: 'Global Integration', desc: 'Achieved full international certification and established a global distribution network.' },
              { year: '2024', title: 'Digital Transformation', desc: 'Integration of AI-driven quality control and blockchain-based traceability protocols.' },
            ].map((item, idx) => (
              <div key={item.year} className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
                <div className="md:col-span-2">
                  <span className="text-6xl font-serif font-bold text-oxblood/20">{item.year}</span>
                </div>
                <div className="md:col-span-10 border-l border-border pl-12">
                  <h4 className="text-3xl font-serif font-bold text-charcoal mb-4 tracking-tight">{item.title}</h4>
                  <p className="text-charcoal/50 font-serif italic text-xl max-w-3xl leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section className="premium-card p-20 bg-white text-center">
          <h3 className="text-[11px] font-sans font-bold uppercase tracking-[0.5em] text-oxblood mb-12">Global_Compliance_Standards</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-16 opacity-40">
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
              <span className="text-[10px] font-sans font-bold uppercase tracking-widest">Social Compliance</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
