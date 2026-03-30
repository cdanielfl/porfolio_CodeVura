import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Wrench, Clock, Shield, Phone, MapPin, Menu, X, ArrowRight, ArrowLeft, CheckCircle, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { routes } from '../../routes';

export default function MechanicDemo() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showBudgetModal, setShowBudgetModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    { title: 'Revisão Geral', desc: 'Check-up completo de todos os sistemas do seu veículo.', icon: <Wrench className="w-6 h-6" /> },
    { title: 'Freios e Suspensão', desc: 'Segurança em primeiro lugar com componentes de alta qualidade.', icon: <Shield className="w-6 h-6" /> },
    { title: 'Injeção Eletrônica', desc: 'Diagnóstico preciso com equipamentos de última geração.', icon: <ZapIcon className="w-6 h-6" /> },
    { title: 'Troca de Óleo', desc: 'Manutenção preventiva essencial para a vida útil do motor.', icon: <Clock className="w-6 h-6" /> },
  ];

  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
      return;
    }
    const lang = document.documentElement.lang.startsWith('en') ? 'en' : 'pt';
    navigate(routes[lang].portfolio);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Demo Header Overlay */}
      <div className="fixed top-0 left-0 w-full bg-indigo-600 text-white py-1 px-4 text-center text-xs font-bold z-[100] flex justify-between items-center">
        <span>DEMO: SITE DE MECÂNICA</span>
        <button onClick={handleBack} className="inline-flex items-center gap-1 underline hover:no-underline">
          <ArrowLeft className="w-3.5 h-3.5" />
          Voltar
        </button>
      </div>

      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 top-6 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="bg-orange-600 p-2 rounded-lg">
                <Wrench className="text-white w-6 h-6" />
              </div>
              <span className="font-black text-2xl italic tracking-tighter text-slate-900">AUTO<span className="text-orange-600">EXPERT</span></span>
            </div>

            <div className="hidden md:flex items-center gap-8">
              <a href="#servicos" className="font-bold hover:text-orange-600 transition-colors">Serviços</a>
              <a href="#beneficios" className="font-bold hover:text-orange-600 transition-colors">Benefícios</a>
              <a href="#contato" className="font-bold hover:text-orange-600 transition-colors">Contato</a>
              <button
                onClick={() => setShowBudgetModal(true)}
                className="bg-orange-600 text-white px-6 py-2.5 rounded-lg font-bold hover:bg-orange-700 transition-all shadow-lg active:scale-95"
              >
                Orçamento Rápido
              </button>
            </div>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2">
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 bg-white z-[60] flex flex-col p-8"
          >
            <div className="flex justify-end mb-12">
              <button onClick={() => setIsMenuOpen(false)}><X className="w-8 h-8" /></button>
            </div>
            <div className="flex flex-col gap-8 text-2xl font-bold">
              <a href="#servicos" onClick={() => setIsMenuOpen(false)}>Serviços</a>
              <a href="#beneficios" onClick={() => setIsMenuOpen(false)}>Benefícios</a>
              <a href="#contato" onClick={() => setIsMenuOpen(false)}>Contato</a>
              <button
                onClick={() => { setIsMenuOpen(false); setShowBudgetModal(true); }}
                className="bg-orange-600 text-white py-4 rounded-xl"
              >
                Orçamento Rápido
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero */}
      <section className="relative h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80&w=1920"
            alt="Oficina"
            className="w-full h-full object-cover brightness-[0.3]"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl"
          >
            <span className="bg-orange-600 px-4 py-1 rounded text-sm font-bold mb-6 inline-block">MECÂNICA ESPECIALIZADA</span>
            <h1 className="text-5xl lg:text-7xl font-black mb-6 leading-tight">CUIDAMOS DO SEU CARRO COMO SE FOSSE NOSSO.</h1>
            <p className="text-xl text-slate-300 mb-10">Transparência, agilidade e as melhores peças para garantir a sua segurança na estrada.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setShowBudgetModal(true)}
                className="bg-orange-600 hover:bg-orange-700 text-white px-10 py-4 rounded-lg font-bold text-lg transition-all flex items-center justify-center gap-2"
              >
                Agendar Agora <ArrowRight className="w-5 h-5" />
              </button>
              <a
                href="#servicos"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-10 py-4 rounded-lg font-bold text-lg transition-all text-center"
              >
                Nossos Serviços
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section id="servicos" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4">SERVIÇOS PROFISSIONAIS</h2>
            <div className="w-20 h-1.5 bg-orange-600 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((s, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border-b-4 border-transparent hover:border-orange-600 group">
                <div className="bg-slate-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6 text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                  {s.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{s.title}</h3>
                <p className="text-slate-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="beneficios" className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1530046339160-ce3e5b0c7a2f?auto=format&fit=crop&q=80&w=800"
                alt="Mecânico trabalhando"
                className="rounded-3xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-black mb-8">POR QUE ESCOLHER A AUTOEXPERT?</h2>
              <div className="space-y-6">
                {[
                  'Peças originais com garantia de fábrica',
                  'Equipe técnica altamente qualificada',
                  'Orçamento transparente sem surpresas',
                  'Equipamentos de diagnóstico computadorizado',
                  'Atendimento rápido e personalizado',
                ].map((text, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <CheckCircle className="text-orange-600 w-6 h-6 flex-shrink-0" />
                    <span className="text-lg font-medium">{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contato" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row">
            <div className="lg:w-1/2 bg-orange-600 p-12 lg:p-20 text-white">
              <h2 className="text-4xl font-black mb-8">ONDE ESTAMOS</h2>
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <MapPin className="w-8 h-8" />
                  <p className="text-xl">Av. das Oficinas, 1234 - Centro, São Paulo</p>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="w-8 h-8" />
                  <p className="text-xl">(11) 4002-8922</p>
                </div>
                <div className="flex items-center gap-4">
                  <Clock className="w-8 h-8" />
                  <p className="text-xl">Seg à Sex: 08h - 18h | Sáb: 08h - 12h</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 p-12 lg:p-20">
              <h3 className="text-2xl font-bold mb-8">FALE CONOSCO</h3>
              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Mensagem enviada com sucesso!'); }}>
                <input type="text" placeholder="Seu Nome" className="w-full p-4 bg-slate-100 rounded-lg outline-none focus:ring-2 focus:ring-orange-600" required />
                <input type="tel" placeholder="Seu Telefone" className="w-full p-4 bg-slate-100 rounded-lg outline-none focus:ring-2 focus:ring-orange-600" required />
                <textarea placeholder="Como podemos ajudar?" rows={4} className="w-full p-4 bg-slate-100 rounded-lg outline-none focus:ring-2 focus:ring-orange-600" required></textarea>
                <button className="w-full bg-slate-900 text-white py-4 rounded-lg font-bold hover:bg-slate-800 transition-all">Enviar Mensagem</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Budget Modal */}
      <AnimatePresence>
        {showBudgetModal && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowBudgetModal(false)}
              className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-3xl p-8 max-w-md w-full relative z-10 shadow-2xl"
            >
              <h3 className="text-2xl font-black mb-4">SOLICITAR ORÇAMENTO</h3>
              <p className="text-slate-600 mb-6">Preencha os dados e entraremos em contato em até 30 minutos.</p>
              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setShowBudgetModal(false); alert('Solicitação recebida!'); }}>
                <input type="text" placeholder="Seu Nome" className="w-full p-4 bg-slate-100 rounded-xl outline-none border-2 border-transparent focus:border-orange-600" required />
                <input type="tel" placeholder="WhatsApp" className="w-full p-4 bg-slate-100 rounded-xl outline-none border-2 border-transparent focus:border-orange-600" required />
                <input type="text" placeholder="Modelo do Carro" className="w-full p-4 bg-slate-100 rounded-xl outline-none border-2 border-transparent focus:border-orange-600" required />
                <button className="w-full bg-orange-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-orange-700 transition-all">Enviar Agora</button>
              </form>
              <button onClick={() => setShowBudgetModal(false)} className="mt-4 w-full text-slate-500 font-bold">Cancelar</button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

function ZapIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 14.71 12 3l1.5 9H20L12 21l-1.5-9H4z" />
    </svg>
  );
}
