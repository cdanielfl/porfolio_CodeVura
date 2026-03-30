import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Activity, Users, Calendar, Phone, MapPin, Clock, Menu, X, CheckCircle2, ArrowRight, Star, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function ClinicDemo() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showAppointmentModal, setShowAppointmentModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const specialties = [
    { title: 'Cardiologia', icon: <Heart className="w-8 h-8" />, desc: 'Cuidado completo com a saúde do seu coração.' },
    { title: 'Clínica Geral', icon: <Activity className="w-8 h-8" />, desc: 'Atendimento preventivo e diagnóstico integral.' },
    { title: 'Pediatria', icon: <Users className="w-8 h-8" />, desc: 'Saúde e desenvolvimento para os pequenos.' },
    { title: 'Ginecologia', icon: <ShieldCheck className="w-8 h-8" />, desc: 'Saúde da mulher em todas as fases da vida.' },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">
      {/* Demo Header Overlay */}
      <div className="fixed top-0 left-0 w-full bg-cyan-600 text-white py-1 px-4 text-center text-xs font-bold z-[100] flex justify-between items-center">
        <span>DEMO: SITE DE CLÍNICA MÉDICA</span>
        <Link to="/portfolio" className="underline hover:no-underline">Voltar ao Portfólio</Link>
      </div>

      {/* Top Bar */}
      <div className="hidden lg:block bg-slate-50 py-2 border-b border-slate-100 mt-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-sm text-slate-600">
          <div className="flex gap-6">
            <span className="flex items-center gap-2"><Phone className="w-4 h-4 text-cyan-600" /> (11) 5566-7788</span>
            <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-cyan-600" /> Av. Saúde, 789 - São Paulo</span>
          </div>
          <div className="flex gap-4">
            <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-cyan-600" /> Seg - Sex: 07h às 20h</span>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3 top-6 lg:top-0' : 'bg-white/80 backdrop-blur-md py-5 top-6 lg:top-10'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="bg-cyan-600 p-2 rounded-full">
                <Heart className="text-white w-6 h-6" fill="white" />
              </div>
              <span className="font-bold text-2xl tracking-tight text-slate-900">Vitality<span className="text-cyan-600">Clínica</span></span>
            </div>

            <div className="hidden md:flex items-center gap-8">
              <a href="#sobre" className="font-semibold text-slate-600 hover:text-cyan-600 transition-colors">Sobre</a>
              <a href="#especialidades" className="font-semibold text-slate-600 hover:text-cyan-600 transition-colors">Especialidades</a>
              <a href="#contato" className="font-semibold text-slate-600 hover:text-cyan-600 transition-colors">Contato</a>
              <button
                onClick={() => setShowAppointmentModal(true)}
                className="bg-cyan-600 text-white px-6 py-3 rounded-full font-bold hover:bg-cyan-700 transition-all shadow-lg hover:shadow-cyan-200 active:scale-95"
              >
                Agendar Consulta
              </button>
            </div>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 text-slate-600">
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 bg-white z-[60] flex flex-col p-8 pt-24"
          >
            <button onClick={() => setIsMenuOpen(false)} className="absolute top-12 right-8"><X className="w-8 h-8" /></button>
            <div className="flex flex-col gap-6 text-2xl font-bold text-slate-800">
              <a href="#sobre" onClick={() => setIsMenuOpen(false)}>Sobre Nós</a>
              <a href="#especialidades" onClick={() => setIsMenuOpen(false)}>Especialidades</a>
              <a href="#contato" onClick={() => setIsMenuOpen(false)}>Contato</a>
              <button
                onClick={() => { setIsMenuOpen(false); setShowAppointmentModal(true); }}
                className="bg-cyan-600 text-white py-5 rounded-2xl shadow-xl"
              >
                Agendar Consulta
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero */}
      <section className="relative pt-40 pb-20 lg:pt-64 lg:pb-40 bg-gradient-to-br from-cyan-50 via-white to-blue-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:w-1/2"
            >
              <span className="inline-block px-4 py-1.5 bg-cyan-100 text-cyan-700 rounded-full text-sm font-bold mb-6">CUIDADO HUMANIZADO</span>
              <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-tight mb-8">Sua saúde em <span className="text-cyan-600">boas mãos</span> todos os dias.</h1>
              <p className="text-xl text-slate-600 mb-10 leading-relaxed">
                Oferecemos atendimento médico de excelência com tecnologia de ponta e uma equipe dedicada ao seu bem-estar integral.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setShowAppointmentModal(true)}
                  className="bg-cyan-600 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-cyan-700 transition-all shadow-xl hover:shadow-cyan-200 flex items-center justify-center gap-2"
                >
                  Marcar Consulta <Calendar className="w-5 h-5" />
                </button>
                <a
                  href="#especialidades"
                  className="bg-white text-slate-900 border-2 border-slate-200 px-10 py-5 rounded-full font-bold text-lg hover:border-cyan-600 hover:text-cyan-600 transition-all text-center"
                >
                  Ver Especialidades
                </a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="lg:w-1/2 relative"
            >
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800"
                alt="Médica sorrindo"
                className="rounded-[3rem] shadow-2xl relative z-10"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-3xl shadow-xl z-20 flex items-center gap-4 border border-slate-100">
                <div className="bg-green-100 p-3 rounded-full text-green-600">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div>
                  <p className="font-bold text-slate-900">Atendimento 24h</p>
                  <p className="text-sm text-slate-500">Para emergências</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Specialties */}
      <section id="especialidades" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Nossas Especialidades</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Contamos com profissionais experientes em diversas áreas para um atendimento completo.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {specialties.map((s, i) => (
              <div key={i} className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
                <div className="bg-cyan-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 text-cyan-600 group-hover:bg-cyan-600 group-hover:text-white transition-all">
                  {s.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{s.title}</h3>
                <p className="text-slate-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="sobre" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 order-2 lg:order-1">
              <h2 className="text-4xl font-bold text-slate-900 mb-8">Excelência Médica e Tecnologia de Ponta</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                A Vitality Clínica é referência em diagnósticos precisos e tratamentos humanizados. Nossa infraestrutura foi projetada para oferecer o máximo de conforto e segurança aos nossos pacientes.
              </p>
              <div className="space-y-4">
                {[
                  'Corpo clínico altamente qualificado',
                  'Exames laboratoriais e de imagem no local',
                  'Ambiente moderno e climatizado',
                  'Convênios com os principais planos de saúde',
                ].map((text, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="bg-cyan-100 p-1 rounded-full">
                      <CheckCircle2 className="w-4 h-4 text-cyan-600" />
                    </div>
                    <span className="font-semibold text-slate-700">{text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 order-1 lg:order-2">
              <div className="grid grid-cols-2 gap-4">
                <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=400" alt="Clínica" className="rounded-3xl shadow-lg mt-8" referrerPolicy="no-referrer" />
                <img src="https://images.unsplash.com/photo-1504813184591-01592fd03cfd?auto=format&fit=crop&q=80&w=400" alt="Equipamento" className="rounded-3xl shadow-lg" referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Appointment Modal */}
      <AnimatePresence>
        {showAppointmentModal && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowAppointmentModal(false)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-white rounded-[2.5rem] p-8 lg:p-12 max-w-lg w-full relative z-10 shadow-2xl"
            >
              <h3 className="text-3xl font-bold text-slate-900 mb-4">Agendar Consulta</h3>
              <p className="text-slate-600 mb-8">Escolha a especialidade e deixe seus dados. Retornaremos para confirmar o horário.</p>
              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setShowAppointmentModal(false); alert('Agendamento solicitado! Entraremos em contato.'); }}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input type="text" placeholder="Nome" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-cyan-600 outline-none" required />
                  <input type="tel" placeholder="Telefone" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-cyan-600 outline-none" required />
                </div>
                <select className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-cyan-600 outline-none appearance-none" required>
                  <option value="">Selecione a Especialidade</option>
                  {specialties.map(s => <option key={s.title} value={s.title}>{s.title}</option>)}
                </select>
                <input type="date" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-cyan-600 outline-none" required />
                <button className="w-full bg-cyan-600 text-white py-5 rounded-2xl font-bold text-lg hover:bg-cyan-700 transition-all shadow-xl">Solicitar Agendamento</button>
              </form>
              <button onClick={() => setShowAppointmentModal(false)} className="mt-6 w-full text-slate-400 font-bold hover:text-slate-600">Fechar</button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer id="contato" className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="col-span-1 lg:col-span-2">
              <div className="flex items-center gap-2 mb-8">
                <div className="bg-cyan-600 p-2 rounded-full">
                  <Heart className="text-white w-6 h-6" fill="white" />
                </div>
                <span className="font-bold text-2xl tracking-tight">Vitality<span className="text-cyan-600">Clínica</span></span>
              </div>
              <p className="text-slate-400 max-w-sm mb-8">Sua saúde é nossa prioridade. Atendimento de qualidade com o respeito que você merece.</p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-cyan-600 transition-all"><Phone className="w-5 h-5" /></a>
                <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-cyan-600 transition-all"><MapPin className="w-5 h-5" /></a>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-8">Links Rápidos</h4>
              <ul className="space-y-4 text-slate-400">
                <li><a href="#sobre" className="hover:text-cyan-600 transition-colors">Sobre Nós</a></li>
                <li><a href="#especialidades" className="hover:text-cyan-600 transition-colors">Especialidades</a></li>
                <li><a href="#contato" className="hover:text-cyan-600 transition-colors">Contato</a></li>
                <li><button onClick={() => setShowAppointmentModal(true)} className="hover:text-cyan-600 transition-colors">Agendamento</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-8">Horários</h4>
              <ul className="space-y-4 text-slate-400">
                <li>Seg - Sex: 07h às 20h</li>
                <li>Sábado: 08h às 14h</li>
                <li>Domingo: Fechado</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-16 pt-8 text-center text-slate-500 text-sm">
            <p>© 2024 Vitality Clínica Médica. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
