import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { Send, CheckCircle, ArrowLeft } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { routes } from '../routes';

const sectionReveal = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: 'easeOut' },
  },
};

export default function Contact() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language?.startsWith('en') ? 'en' : 'pt';
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
    <main className="flex-grow pt-32 pb-24 bg-transparent text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Contact Info */}
          <motion.div
            className="lg:w-1/3"
            variants={sectionReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
          >
            <Link to={routes[lang].home} className="inline-flex items-center gap-2 text-indigo-300 font-semibold mb-8 hover:gap-3 transition-all">
              <ArrowLeft className="w-5 h-5" /> {t('contact.backHome')}
            </Link>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">{t('contact.title')}</h1>
            <p className="text-slate-200 text-lg mb-10">
              {t('contact.subtitle')}
            </p>

          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="lg:w-2/3"
            initial={{ opacity: 0, x: 26 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
          >
            <div className="bg-slate-900/80 rounded-[2.5rem] p-8 lg:p-12 shadow-2xl border border-white/10 relative overflow-hidden backdrop-blur">
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
                        <label htmlFor="name" className="text-sm font-bold text-slate-100 ml-1">{t('contact.form.nameLabel')}</label>
                        <input
                          type="text"
                          id="name"
                          required
                          placeholder={t('contact.form.namePlaceholder')}
                          className="w-full px-6 py-4 bg-slate-800/70 border border-slate-700 rounded-2xl text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-bold text-slate-100 ml-1">{t('contact.form.emailLabel')}</label>
                        <input
                          type="email"
                          id="email"
                          required
                          placeholder={t('contact.form.emailPlaceholder')}
                          className="w-full px-6 py-4 bg-slate-800/70 border border-slate-700 rounded-2xl text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-bold text-slate-100 ml-1">{t('contact.form.subjectLabel')}</label>
                      <select
                        id="subject"
                        className="w-full px-6 py-4 bg-slate-800/70 border border-slate-700 rounded-2xl text-white appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                      >
                        <option>{t('contact.form.subjectOptions.newProject')}</option>
                        <option>{t('contact.form.subjectOptions.support')}</option>
                        <option>{t('contact.form.subjectOptions.consulting')}</option>
                        <option>{t('contact.form.subjectOptions.other')}</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-bold text-slate-100 ml-1">{t('contact.form.messageLabel')}</label>
                      <textarea
                        id="message"
                        required
                        rows={5}
                        placeholder={t('contact.form.messagePlaceholder')}
                        className="w-full px-6 py-4 bg-slate-800/70 border border-slate-700 rounded-2xl text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all resize-none"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-5 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-2xl font-bold text-lg hover:from-indigo-400 hover:to-purple-600 transition-all shadow-2xl shadow-purple-900/40 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed group"
                    >
                      {isSubmitting ? (
                        <div className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin"></div>
                      ) : (
                        <>
                          {t('contact.form.submit')}
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
                    className="text-center py-12 space-y-6"
                  >
                    <div className="w-20 h-20 bg-green-500/10 text-green-400 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-400/40">
                      <CheckCircle className="w-10 h-10" />
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-2">{t('contact.form.successTitle')}</h2>
                    <p className="text-slate-200 text-lg max-w-md mx-auto">
                      {t('contact.form.successSubtitle')}
                    </p>
                    <button
                      onClick={() => setIsSuccess(false)}
                      className="px-8 py-4 bg-white/10 text-white rounded-full font-bold hover:bg-white/20 transition-all border border-white/20"
                    >
                      {t('contact.form.sendAnother')}
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
