import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, ArrowRight, Truck, ShieldCheck, Info } from 'lucide-react';
import { PRODUCTS } from '../data/mockData';
import { mp } from '../lib/paths';

export const Cart = () => {
  // Mock cart items
  const cartItems = [
    { ...PRODUCTS[0], quantity: 10 },
    { ...PRODUCTS[1], quantity: 25 },
  ];

  const subtotal = cartItems.reduce((acc, item) => acc + (item.pricePerKg * item.quantity), 0);
  const shipping = 150.00; // Bulk shipping flat rate
  const total = subtotal + shipping;

  return (
    <div className="pt-32 pb-24 px-6 bg-charcoal min-h-screen relative">
      <div className="fixed inset-0 tech-grid opacity-10 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-16">
          <div className="flex items-center gap-2 text-neon-red font-mono text-[10px] font-bold uppercase tracking-[0.3em] mb-4">
            <span>System</span>
            <span>//</span>
            <span className="text-ice/40">Order_Management</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-mono font-black tracking-tighter uppercase text-white leading-none">
            Your <span className="text-neon-red italic glow-text">Bulk_Order</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-8">
            {cartItems.map((item) => (
              <div key={item.id} className="flex gap-8 glass-panel industrial-border p-8 relative group overflow-hidden">
                <div className="w-32 h-32 overflow-hidden shrink-0 industrial-border relative">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-neon-red/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <span className="text-[9px] text-neon-red font-mono font-bold uppercase tracking-[0.3em] mb-2 block">{item.category}</span>
                      <h3 className="text-2xl font-mono font-black text-white uppercase tracking-tighter">{item.name}</h3>
                    </div>
                    <button className="text-ice/20 hover:text-neon-red transition-colors">
                      <Trash2 size={20} />
                    </button>
                  </div>
                  <div className="flex justify-between items-end mt-8">
                    <div className="flex items-center gap-8 text-[9px] font-mono uppercase tracking-[0.2em] text-ice/40">
                      <span className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-neon-red rounded-full animate-pulse"></span>
                        Weight: {item.quantity}kg
                      </span>
                      <span>Rate: ${item.pricePerKg.toFixed(2)}/kg</span>
                    </div>
                    <div className="text-2xl font-mono font-black text-neon-red">
                      ${(item.pricePerKg * item.quantity).toFixed(2)}
                    </div>
                  </div>
                </div>
                <div className="scanline"></div>
              </div>
            ))}

            <div className="p-10 glass-panel border border-dashed border-neon-red/30 flex flex-col md:flex-row items-center justify-between gap-6">
              <p className="text-xs font-mono text-ice/40 italic leading-relaxed max-w-md">
                <span className="text-neon-red font-bold uppercase mr-2">Notice:</span>
                Wholesale discount protocols apply automatically at 500kg+ volume. System inventory is currently synchronized.
              </p>
              <Link to={mp('marketplace')} className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-white border-b border-neon-red pb-2 hover:text-neon-red transition-all">
                Continue_Browsing
              </Link>
            </div>
          </div>

          {/* Summary */}
          <div className="lg:col-span-1">
            <div className="glass-panel p-10 industrial-border sticky top-32 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 opacity-10 pointer-events-none">
                <div className="absolute inset-0 tech-grid"></div>
              </div>
              <h3 className="text-2xl font-mono font-black text-white uppercase tracking-tighter mb-10">Order_Summary</h3>
              <div className="space-y-8 mb-12">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-mono font-bold text-ice/30 uppercase tracking-[0.3em]">Subtotal</span>
                  <span className="font-mono text-xl text-white">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-mono font-bold text-ice/30 uppercase tracking-[0.3em]">Logistics_Bulk</span>
                  <span className="font-mono text-xl text-white">${shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-mono font-bold text-ice/30 uppercase tracking-[0.3em]">Est_Taxes</span>
                  <span className="font-mono text-sm text-ice/40 italic">Calculated_at_checkout</span>
                </div>
                <div className="pt-8 border-t border-neon-red/20 flex justify-between items-end">
                  <span className="text-neon-red font-mono font-black uppercase tracking-[0.3em]">Total_Payload</span>
                  <span className="text-4xl font-mono font-black text-neon-red glow-text">${total.toFixed(2)}</span>
                </div>
              </div>

              <button className="w-full bg-neon-red text-white py-6 font-mono font-black uppercase tracking-[0.3em] hover:bg-white hover:text-charcoal transition-all mb-8 flex items-center justify-center gap-4 group">
                Initialize Checkout <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </button>
              
              <div className="space-y-5 pt-8 border-t border-neon-red/20">
                {[
                  { icon: Truck, text: 'Guaranteed_24h_Dispatch' },
                  { icon: ShieldCheck, text: 'Secure_B2B_Protocol' },
                  { icon: Info, text: 'VAT_Invoice_Generated' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 text-[9px] font-mono font-bold uppercase tracking-[0.3em] text-ice/30">
                    <item.icon size={14} className="text-neon-red" /> {item.text}
                  </div>
                ))}
              </div>
              <div className="scanline"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
