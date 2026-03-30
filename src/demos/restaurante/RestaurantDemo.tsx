import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Utensils, Clock, MapPin, Phone, Instagram, Facebook, Menu as MenuIcon, X, ChevronRight, ArrowLeft, Star, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { routes } from '../../routes';

export default function RestaurantDemo() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeCategory, setActiveCategory] = useState('entradas');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = {
    entradas: [
      { name: 'Bruschetta Italiana', price: 'R$ 32', desc: 'Pão italiano tostado, tomates frescos, manjericão e azeite extra virgem.' },
      { name: 'Carpaccio de Filé', price: 'R$ 48', desc: 'Lâminas de filé mignon, rúcula, alcaparras e lascas de parmesão.' },
    ],
    principais: [
      { name: 'Risoto de Cogumelos', price: 'R$ 64', desc: 'Arroz arbóreo, mix de cogumelos frescos e azeite de trufas brancas.' },
      { name: 'Salmão Grelhado', price: 'R$ 78', desc: 'Filé de salmão, purê de mandioquinha e legumes salteados na manteiga.' },
      { name: 'Filé ao Poivre', price: 'R$ 85', desc: 'Medalhão de filé mignon com molho de pimentas e batatas rústicas.' },
    ],
    sobremesas: [
      { name: 'Tiramisù Clássico', price: 'R$ 28', desc: 'Biscoito champagne embebido em café, creme de mascarpone e cacau.' },
      { name: 'Petit Gâteau', price: 'R$ 26', desc: 'Bolinho quente de chocolate com sorvete de baunilha artesanal.' },
    ],
  };

  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
      return;
    }
    const lang = document.documentElement.lang.startsWith('en') ? 'en' : 'pt';
    navigate(routes[lang].portfolio);
  };

  return (
    <div className="min-h-screen bg-[#faf7f2] font-serif text-[#2d2a26]">
      {/* Demo Header Overlay */}
      <div className="fixed top-0 left-0 w-full bg-amber-800 text-white py-1 px-4 text-center text-xs font-bold z-[100] flex justify-between items-center">
        <span>DEMO: SITE DE RESTAURANTE</span>
        <button onClick={handleBack} className="inline-flex items-center gap-1 underline hover:no-underline">
          <ArrowLeft className="w-3.5 h-3.5" />
          Voltar
        </button>
      </div>

      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-500 top-6 ${isScrolled ? 'bg-white/95 shadow-sm py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Utensils className="text-amber-700 w-8 h-8" />
              <span className="font-bold text-2xl tracking-widest uppercase text-amber-900">BISTRO<span className="font-light">GOURMET</span></span>
            </div>

            <div className="hidden md:flex items-center gap-10">
              <a href="#sobre" className="text-sm font-bold uppercase tracking-widest hover:text-amber-700 transition-colors">Sobre</a>
              <a href="#cardapio" className="text-sm font-bold uppercase tracking-widest hover:text-amber-700 transition-colors">Cardápio</a>
              <a href="#contato" className="text-sm font-bold uppercase tracking-widest hover:text-amber-700 transition-colors">Contato</a>
              <button
                onClick={() => alert('Sistema de reservas em breve! Entre em contato por telefone.')}
                className="bg-amber-800 text-white px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-amber-900 transition-all shadow-lg active:scale-95"
              >
                Reservar Mesa
              </button>
            </div>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 text-amber-900">
              {isMenuOpen ? <X /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-white z-[60] flex flex-col items-center justify-center gap-8 p-8"
          >
            <button onClick={() => setIsMenuOpen(false)} className="absolute top-12 right-8"><X className="w-8 h-8" /></button>
            <a href="#sobre" onClick={() => setIsMenuOpen(false)} className="text-3xl font-bold uppercase tracking-widest">Sobre</a>
            <a href="#cardapio" onClick={() => setIsMenuOpen(false)} className="text-3xl font-bold uppercase tracking-widest">Cardápio</a>
            <a href="#contato" onClick={() => setIsMenuOpen(false)} className="text-3xl font-bold uppercase tracking-widest">Contato</a>
            <button
              onClick={() => { setIsMenuOpen(false); alert('Sistema de reservas em breve!'); }}
              className="bg-amber-800 text-white px-10 py-5 rounded-full text-sm font-bold uppercase tracking-widest"
            >
              Reservar Mesa
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=1920"
            alt="Restaurante"
            className="w-full h-full object-cover brightness-[0.4]"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-4xl px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <span className="text-amber-400 font-bold uppercase tracking-[0.3em] mb-6 block">Sabor & Elegância</span>
            <h1 className="text-6xl lg:text-8xl font-bold text-white mb-8 leading-tight">UMA EXPERIÊNCIA GASTRONÔMICA ÚNICA.</h1>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href="#cardapio"
                className="w-full sm:w-auto bg-amber-700 hover:bg-amber-800 text-white px-10 py-5 rounded-full font-bold uppercase tracking-widest transition-all shadow-xl"
              >
                Ver Cardápio
              </a>
              <button
                onClick={() => alert('Redirecionando para o sistema de reservas...')}
                className="w-full sm:w-auto bg-transparent border-2 border-white text-white hover:bg-white hover:text-amber-900 px-10 py-5 rounded-full font-bold uppercase tracking-widest transition-all"
              >
                Fazer Reserva
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section id="sobre" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 relative">
              <img
                src="https://images.unsplash.com/photo-1550966842-2849a2830a28?auto=format&fit=crop&q=80&w=800"
                alt="Chef cozinhando"
                className="rounded-2xl shadow-2xl relative z-10"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-amber-100 rounded-full -z-10"></div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-amber-900">Nossa História</h2>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Fundado em 2010, o Bistro Gourmet nasceu da paixão pela culinária clássica francesa com um toque contemporâneo brasileiro. Utilizamos apenas ingredientes frescos e sazonais de produtores locais.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="text-3xl font-bold text-amber-700 mb-2">15+</h4>
                  <p className="text-slate-500 uppercase tracking-widest text-xs font-bold">Anos de Tradição</p>
                </div>
                <div>
                  <h4 className="text-3xl font-bold text-amber-700 mb-2">50k+</h4>
                  <p className="text-slate-500 uppercase tracking-widest text-xs font-bold">Clientes Felizes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu */}
      <section id="cardapio" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-amber-900">Cardápio Selecionado</h2>
            <p className="text-slate-500 uppercase tracking-widest text-sm font-bold">Descubra nossos sabores</p>
          </div>

          <div className="flex justify-center gap-4 mb-16 overflow-x-auto pb-4">
            {['entradas', 'principais', 'sobremesas'].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${activeCategory === cat ? 'bg-amber-800 text-white shadow-lg' : 'bg-slate-100 text-slate-500 hover:bg-slate-200'}`}
              >
                {cat}
              </button>
            ))}
          </div>

          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto"
          >
            {menuItems[activeCategory as keyof typeof menuItems].map((item, i) => (
              <div key={i} className="flex justify-between items-start gap-4 group cursor-pointer">
                <div className="flex-grow">
                  <div className="flex items-center gap-4 mb-2">
                    <h3 className="text-xl font-bold group-hover:text-amber-700 transition-colors">{item.name}</h3>
                    <div className="flex-grow border-b border-dotted border-slate-300"></div>
                    <span className="text-xl font-bold text-amber-800">{item.price}</span>
                  </div>
                  <p className="text-slate-500 italic">{item.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>

          <div className="text-center mt-16">
            <button
              onClick={() => alert('Cardápio completo em PDF baixando...')}
              className="inline-flex items-center gap-2 text-amber-800 font-bold uppercase tracking-widest hover:gap-4 transition-all"
            >
              Ver Menu Completo <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contato" className="py-24 bg-[#2d2a26] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div>
              <h2 className="text-3xl font-bold mb-8 text-amber-400">Visite-nos</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="text-amber-400 w-6 h-6 flex-shrink-0" />
                  <p className="text-slate-300">Rua das Gastronomia, 456 - Jardins, São Paulo - SP</p>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="text-amber-400 w-6 h-6 flex-shrink-0" />
                  <p className="text-slate-300">(11) 3344-5566</p>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="text-amber-400 w-6 h-6 flex-shrink-0" />
                  <div>
                    <p className="text-slate-300">Terça a Quinta: 18h - 23h</p>
                    <p className="text-slate-300">Sexta e Sábado: 12h - 00h</p>
                    <p className="text-slate-300">Domingo: 12h - 17h</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-8 text-amber-400">Newsletter</h2>
              <p className="text-slate-300 mb-8">Receba novidades, eventos exclusivos e promoções especiais diretamente no seu e-mail.</p>
              <form className="flex flex-col sm:flex-row gap-4" onSubmit={(e) => { e.preventDefault(); alert('Inscrito com sucesso!'); }}>
                <input
                  type="email"
                  placeholder="Seu melhor e-mail"
                  className="flex-grow bg-white/10 border border-white/20 rounded-full px-8 py-4 outline-none focus:border-amber-400 transition-all"
                  required
                />
                <button className="bg-amber-700 hover:bg-amber-800 text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest transition-all">
                  Inscrever
                </button>
              </form>
              <div className="flex gap-6 mt-12">
                <a href="#" className="text-slate-400 hover:text-amber-400 transition-colors"><Instagram className="w-8 h-8" /></a>
                <a href="#" className="text-slate-400 hover:text-amber-400 transition-colors"><Facebook className="w-8 h-8" /></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-[#1a1816] text-center text-slate-500 text-sm border-t border-white/5">
        <p>© 2024 Bistro Gourmet. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
