import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Send, CheckCircle, ArrowLeft } from 'lucide-react';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <main className="flex-grow pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Contact Info */}
          <div className="lg:w-1/3">
            <Link to="/" className="inline-flex items-center gap-2 text-indigo-600 font-semibold mb-8 hover:gap-3 transition-all">
              <ArrowLeft className="w-5 h-5" /> Voltar para Home
            </Link>
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">Vamos conversar?</h1>
            <p className="text-slate-600 text-lg mb-10">
              Estou pronto para ouvir sua ideia e transformar em um projeto de sucesso. Preencha o formulário ou entre em contato pelos canais abaixo.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-indigo-50 p-3 rounded-xl text-indigo-600">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Email</h3>
                  <p className="text-slate-600">contato@devportfolio.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-indigo-50 p-3 rounded-xl text-indigo-600">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">WhatsApp</h3>
                  <p className="text-slate-600">+55 (11) 99999-9999</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-indigo-50 p-3 rounded-xl text-indigo-600">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Localização</h3>
                  <p className="text-slate-600">São Paulo, SP - Brasil</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-[2.5rem] p-8 lg:p-12 shadow-2xl border border-slate-100 relative overflow-hidden">
              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-bold text-slate-700 ml-1">Nome Completo</label>
                        <input
                          type="text"
                          id="name"
                          required
                          placeholder="Seu nome"
                          className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:bg-white transition-all"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-bold text-slate-700 ml-1">E-mail Profissional</label>
                        <input
                          type="email"
                          id="email"
                          required
                          placeholder="seu@email.com"
                          className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:bg-white transition-all"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-bold text-slate-700 ml-1">Assunto</label>
                      <select
                        id="subject"
                        className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:bg-white transition-all appearance-none"
                      >
                        <option>Novo Projeto</option>
                        <option>Manutenção / Suporte</option>
                        <option>Consultoria</option>
                        <option>Outros</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-bold text-slate-700 ml-1">Mensagem</label>
                      <textarea
                        id="message"
                        required
                        rows={5}
                        placeholder="Conte um pouco sobre o seu projeto..."
                        className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:bg-white transition-all resize-none"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-5 bg-indigo-600 text-white rounded-2xl font-bold text-lg hover:bg-indigo-700 transition-all shadow-lg flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed group"
                    >
                      {isSubmitting ? (
                        <div className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin"></div>
                      ) : (
                        <>
                          Enviar Mensagem
                          <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
                      <CheckCircle className="w-10 h-10" />
                    </div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Mensagem Enviada!</h2>
                    <p className="text-slate-600 text-lg mb-10 max-w-md mx-auto">
                      Obrigado pelo contato. Recebi sua mensagem e entrarei em contato em breve para conversarmos.
                    </p>
                    <button
                      onClick={() => setIsSuccess(false)}
                      className="px-8 py-4 bg-slate-100 text-slate-900 rounded-full font-bold hover:bg-slate-200 transition-all"
                    >
                      Enviar outra mensagem
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
