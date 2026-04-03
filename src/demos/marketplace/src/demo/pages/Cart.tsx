import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Trash2, ArrowRight, Truck, ShieldCheck, Info, Minus, Plus } from 'lucide-react';
import { mp } from '../lib/paths';
import { resolveDemoLanguage } from '../../../../../utils/demoLanguage';
import { useMarketplaceCart } from '../context/CartContext';

export const Cart = () => {
  const location = useLocation();
  const lang = resolveDemoLanguage(location.search);
  const { items, removeFromCart, updateQuantity } = useMarketplaceCart();
  const text = lang === 'pt'
    ? {
        system: 'Sistema',
        orderManagement: 'Gestao_de_Pedidos',
        titlePrefix: 'Seu',
        titleAccent: 'Pedido_Atacado',
        weight: 'Peso',
        rate: 'Preco',
        notice: 'Aviso:',
        noticeDesc: 'Desconto por atacado e aplicado automaticamente acima de 500kg. O estoque do sistema esta sincronizado.',
        continueBrowsing: 'Continuar_Navegando',
        summary: 'Resumo_do_Pedido',
        subtotal: 'Subtotal',
        logistics: 'Logistica_Atacado',
        taxes: 'Impostos_Estimados',
        calculated: 'Calculado_no_checkout',
        total: 'Carga_Total',
        checkout: 'Iniciar Checkout',
        dispatch: 'Despacho_Garantido_24h',
        secure: 'Protocolo_B2B_Seguro',
        invoice: 'Nota_Fiscal_Gerada',
        empty: 'Seu carrinho esta vazio.',
        emptyCta: 'Ver produtos',
      }
    : {
        system: 'System',
        orderManagement: 'Order_Management',
        titlePrefix: 'Your',
        titleAccent: 'Bulk_Order',
        weight: 'Weight',
        rate: 'Rate',
        notice: 'Notice:',
        noticeDesc: 'Wholesale discount protocols apply automatically at 500kg+ volume. System inventory is currently synchronized.',
        continueBrowsing: 'Continue_Browsing',
        summary: 'Order_Summary',
        subtotal: 'Subtotal',
        logistics: 'Logistics_Bulk',
        taxes: 'Est_Taxes',
        calculated: 'Calculated_at_checkout',
        total: 'Total_Payload',
        checkout: 'Initialize Checkout',
        dispatch: 'Guaranteed_24h_Dispatch',
        secure: 'Secure_B2B_Protocol',
        invoice: 'VAT_Invoice_Generated',
        empty: 'Your cart is empty.',
        emptyCta: 'Browse products',
      };

  const categoryPt: Record<string, string> = {
    Beef: 'Bovino',
    Pork: 'Suino',
    Lamb: 'Cordeiro',
    Poultry: 'Aves',
    Game: 'Caca',
  };

  const subtotal = items.reduce((acc, item) => acc + (item.product.pricePerKg * item.quantity), 0);
  const shipping = items.length > 0 ? 150.0 : 0;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen pt-32 sm:pt-40 pb-20 sm:pb-24 px-4 sm:px-6 bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 sm:mb-12">
          <div className="flex items-center gap-3 text-oxblood text-[10px] font-sans font-bold uppercase tracking-[0.28em] mb-4">
            <span>{text.system}</span>
            <span>//</span>
            <span className="text-charcoal/50">{text.orderManagement}</span>
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-bold tracking-tight text-charcoal leading-none">
            {text.titlePrefix} <span className="serif-italic text-oxblood">{text.titleAccent}</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16">
          <div className="lg:col-span-8 space-y-4 sm:space-y-6">
            {items.length === 0 && (
              <div className="premium-card p-6 sm:p-8 text-center">
                <p className="text-charcoal/70 mb-4">{text.empty}</p>
                <Link to={mp('marketplace')} className="inline-flex rounded-xl bg-oxblood px-5 py-3 text-xs font-bold uppercase tracking-[0.16em] text-white">
                  {text.emptyCta}
                </Link>
              </div>
            )}
            {items.map((item) => (
              <div key={item.product.id} className="premium-card surface-panel p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                  <div className="w-full h-48 sm:w-32 sm:h-32 overflow-hidden rounded-xl border border-border shrink-0">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <span className="text-[10px] text-oxblood font-sans font-bold uppercase tracking-[0.2em] mb-2 block">
                          {lang === 'pt' ? (categoryPt[item.product.category] ?? item.product.category) : item.product.category}
                        </span>
                        <h3 className="text-2xl font-serif font-bold text-charcoal tracking-tight">{item.product.name}</h3>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.product.id)}
                        className="rounded-lg p-2 text-charcoal/40 hover:text-oxblood hover:bg-charcoal/5 transition-colors"
                        aria-label="Remove item"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-3">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-[10px] font-sans uppercase tracking-[0.2em] text-charcoal/60">
                        <span>{text.rate}: ${item.product.pricePerKg.toFixed(2)}/kg</span>
                        <span className="inline-flex items-center gap-2">
                          {text.weight}:
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-border"
                            aria-label="Decrease quantity"
                          >
                            <Minus size={14} />
                          </button>
                          <strong className="min-w-8 text-center">{item.quantity}kg</strong>
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-border"
                            aria-label="Increase quantity"
                          >
                            <Plus size={14} />
                          </button>
                        </span>
                      </div>
                      <div className="text-2xl font-serif font-bold text-oxblood">
                        ${(item.product.pricePerKg * item.quantity).toFixed(2)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {items.length > 0 && (
              <div className="premium-card p-5 sm:p-7 border border-dashed border-oxblood/30 bg-surface-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <p className="text-sm text-charcoal/60 italic leading-relaxed max-w-md">
                <span className="text-oxblood font-bold uppercase mr-2 not-italic">{text.notice}</span>
                {text.noticeDesc}
              </p>
              <Link to={mp('marketplace')} className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-oxblood border-b border-oxblood pb-1 hover:text-charcoal transition-all">
                {text.continueBrowsing}
              </Link>
            </div>
            )}
          </div>

          <div className="lg:col-span-4">
            <div className="premium-card surface-deep p-6 sm:p-8 sticky top-28 text-white">
              <h3 className="text-2xl font-serif font-bold tracking-tight mb-8">{text.summary}</h3>
              <div className="space-y-6 mb-8">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-sans font-bold text-white/60 uppercase tracking-[0.2em]">{text.subtotal}</span>
                  <span className="font-serif text-xl">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-sans font-bold text-white/60 uppercase tracking-[0.2em]">{text.logistics}</span>
                  <span className="font-serif text-xl">${shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-sans font-bold text-white/60 uppercase tracking-[0.2em]">{text.taxes}</span>
                  <span className="font-serif text-sm text-white/70 italic">{text.calculated}</span>
                </div>
                <div className="pt-6 border-t border-white/20 flex justify-between items-end">
                  <span className="text-oxblood font-sans font-bold uppercase tracking-[0.2em]">{text.total}</span>
                  <span className="text-4xl font-serif font-bold text-oxblood">${total.toFixed(2)}</span>
                </div>
              </div>

              <Link to={mp('checkout')} className={`w-full rounded-xl text-white py-4 font-sans font-bold uppercase tracking-[0.2em] transition-all mb-6 inline-flex items-center justify-center gap-3 ${items.length > 0 ? 'bg-oxblood hover:bg-white hover:text-charcoal' : 'bg-white/20 pointer-events-none opacity-60'}`}>
                {text.checkout} <ArrowRight size={18} />
              </Link>

              <div className="space-y-3 pt-6 border-t border-white/20">
                {[
                  { icon: Truck, text: text.dispatch },
                  { icon: ShieldCheck, text: text.secure },
                  { icon: Info, text: text.invoice },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-[10px] font-sans font-bold uppercase tracking-[0.18em] text-white/70">
                    <item.icon size={14} className="text-oxblood" /> {item.text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

