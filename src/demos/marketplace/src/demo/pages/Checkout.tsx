import { useState, type FormEvent } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CheckCircle2, CreditCard, FileText, Truck } from 'lucide-react';
import { mp } from '../lib/paths';
import { resolveDemoLanguage } from '../../../../../utils/demoLanguage';
import { useMarketplaceCart } from '../context/CartContext';

export const Checkout = () => {
  const location = useLocation();
  const lang = resolveDemoLanguage(location.search);
  const [paymentType, setPaymentType] = useState<'invoice' | 'card'>('invoice');
  const [submitted, setSubmitted] = useState(false);
  const { items, clearCart } = useMarketplaceCart();

  const text = lang === 'pt'
    ? {
        title: 'Checkout B2B',
        subtitle: 'Revise os dados do pedido e confirme a compra.',
        step1: '1. Dados da empresa',
        step2: '2. Entrega e pagamento',
        step3: '3. Confirmacao',
        company: 'Empresa',
        buyer: 'Responsavel',
        email: 'Email',
        phone: 'Telefone',
        address: 'Endereco de entrega',
        note: 'Observacoes do pedido',
        payment: 'Pagamento',
        invoice: 'Faturado (30 dias)',
        card: 'Cartao corporativo',
        summary: 'Resumo',
        items: 'Itens',
        freight: 'Frete',
        taxes: 'Impostos',
        total: 'Total',
        placeOrder: 'Finalizar pedido',
        secure: 'Ambiente seguro. Simulacao visual sem backend.',
        empty: 'Nao ha itens no carrinho para finalizar.',
        successTitle: 'Pedido enviado com sucesso',
        successText: 'Numero do pedido: VNT-2026-0417. Nossa equipe comercial entrara em contato para validacao final.',
        backCatalog: 'Voltar ao marketplace',
        backCart: 'Voltar ao carrinho',
      }
    : {
        title: 'B2B Checkout',
        subtitle: 'Review order details and confirm purchase.',
        step1: '1. Company data',
        step2: '2. Delivery and payment',
        step3: '3. Confirmation',
        company: 'Company',
        buyer: 'Buyer name',
        email: 'Email',
        phone: 'Phone',
        address: 'Delivery address',
        note: 'Order notes',
        payment: 'Payment',
        invoice: 'Invoice terms (30 days)',
        card: 'Corporate card',
        summary: 'Summary',
        items: 'Items',
        freight: 'Freight',
        taxes: 'Taxes',
        total: 'Total',
        placeOrder: 'Place order',
        secure: 'Secure environment. Visual simulation without backend.',
        empty: 'There are no items in the cart to checkout.',
        successTitle: 'Order submitted successfully',
        successText: 'Order number: VNT-2026-0417. Our sales team will contact you for final validation.',
        backCatalog: 'Back to marketplace',
        backCart: 'Back to cart',
      };

  const subtotal = items.reduce((acc, item) => acc + item.product.pricePerKg * item.quantity, 0);
  const freight = items.length > 0 ? 150 : 0;
  const taxes = 0;
  const total = subtotal + freight + taxes;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (items.length === 0) return;
    clearCart();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen pt-32 sm:pt-40 pb-20 sm:pb-24 px-4 sm:px-6 bg-surface">
      <div className="max-w-7xl mx-auto">
        {!submitted ? (
          <>
            <header className="mb-8 sm:mb-12">
              <h1 className="text-4xl sm:text-6xl font-serif font-bold text-charcoal tracking-tight mb-4">{text.title}</h1>
              <p className="text-lg sm:text-xl font-serif italic text-charcoal/60">{text.subtitle}</p>
              <div className="mt-6 flex flex-wrap gap-2 sm:gap-3">
                {[text.step1, text.step2, text.step3].map((step) => (
                  <span key={step} className="rounded-full border border-oxblood/20 bg-white px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-oxblood">
                    {step}
                  </span>
                ))}
              </div>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
              <form className="lg:col-span-8 premium-card surface-panel p-5 sm:p-8 space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input required placeholder={text.company} autoComplete="organization" className="w-full px-4 py-3" />
                  <input required placeholder={text.buyer} autoComplete="name" className="w-full px-4 py-3" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input required type="email" placeholder={text.email} autoComplete="email" className="w-full px-4 py-3" />
                  <input required placeholder={text.phone} autoComplete="tel" inputMode="tel" className="w-full px-4 py-3" />
                </div>
                <input required placeholder={text.address} className="w-full px-4 py-3" />
                <textarea rows={4} placeholder={text.note} className="w-full px-4 py-3" />

                <div>
                  <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-charcoal/70">{text.payment}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setPaymentType('invoice')}
                      className={`rounded-xl border px-4 py-3 text-left transition-colors ${paymentType === 'invoice' ? 'border-oxblood bg-oxblood/10 text-oxblood' : 'border-border bg-white text-charcoal/70'}`}
                    >
                      <span className="inline-flex items-center gap-2 text-sm font-semibold"><FileText size={16} /> {text.invoice}</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setPaymentType('card')}
                      className={`rounded-xl border px-4 py-3 text-left transition-colors ${paymentType === 'card' ? 'border-oxblood bg-oxblood/10 text-oxblood' : 'border-border bg-white text-charcoal/70'}`}
                    >
                      <span className="inline-flex items-center gap-2 text-sm font-semibold"><CreditCard size={16} /> {text.card}</span>
                    </button>
                  </div>
                </div>

                <button className="w-full rounded-xl bg-oxblood px-6 py-4 text-sm font-bold uppercase tracking-[0.2em] text-white transition-colors hover:bg-charcoal">
                  {text.placeOrder}
                </button>
                {items.length === 0 && (
                  <p className="text-sm text-oxblood">{text.empty}</p>
                )}
              </form>

              <aside className="lg:col-span-4">
                <div className="premium-card surface-deep sticky top-28 p-5 sm:p-8 text-white">
                  <h2 className="mb-6 text-2xl font-serif font-bold tracking-tight">{text.summary}</h2>
                  <div className="space-y-4 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-white/70">{text.items}</span>
                      <span className="font-semibold">${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-white/70">{text.freight}</span>
                      <span className="font-semibold">${freight.toFixed(2)}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-white/70">{text.taxes}</span>
                      <span className="font-semibold">${taxes.toFixed(2)}</span>
                    </div>
                    <div className="mt-2 border-t border-white/15 pt-4 flex items-center justify-between">
                      <span className="text-oxblood font-bold uppercase tracking-[0.16em]">{text.total}</span>
                      <span className="text-3xl font-serif font-bold text-oxblood">${total.toFixed(2)}</span>
                    </div>
                  </div>
                  <p className="mt-6 inline-flex items-center gap-2 text-[11px] text-white/70">
                    <Truck size={14} className="text-oxblood" />
                    {text.secure}
                  </p>
                </div>
              </aside>
            </div>
          </>
        ) : (
          <div className="mx-auto max-w-3xl premium-card surface-panel p-8 sm:p-12 text-center">
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
              <CheckCircle2 size={32} />
            </div>
            <h2 className="mb-3 text-3xl sm:text-4xl font-serif font-bold text-charcoal tracking-tight">{text.successTitle}</h2>
            <p className="mx-auto mb-8 max-w-xl text-charcoal/65 leading-relaxed">{text.successText}</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link to={mp('marketplace')} className="w-full sm:w-auto rounded-xl bg-oxblood px-6 py-3 text-sm font-bold uppercase tracking-[0.16em] text-white hover:bg-charcoal transition-colors">
                {text.backCatalog}
              </Link>
              <Link to={mp('cart')} className="w-full sm:w-auto rounded-xl border border-border bg-white px-6 py-3 text-sm font-bold uppercase tracking-[0.16em] text-charcoal hover:bg-surface-2 transition-colors">
                {text.backCart}
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

