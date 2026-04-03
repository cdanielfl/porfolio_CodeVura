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
    <main className="flex-grow bg-[#05031a] pt-28 pb-20 text-white sm:pt-32 sm:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-16">
          {/* Contact Info */}
          <motion.div
            className="lg:w-1/3"
            variants={sectionReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
          >
            <Link to={routes[lang].home} className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-indigo-300 transition-all hover:gap-3 sm:mb-8 sm:text-base">
              <ArrowLeft className="w-5 h-5" /> {t('contact.backHome')}
            </Link>
            <h1 className="mb-4 text-3xl font-bold text-white sm:mb-6 sm:text-4xl lg:text-5xl">{t('contact.title')}</h1>
            <p className="mb-7 text-base text-slate-200 sm:mb-10 sm:text-lg">
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
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/80 p-5 shadow-2xl backdrop-blur sm:rounded-[2.5rem] sm:p-8 lg:p-12">
              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-5 sm:space-y-6"
                  >
                    <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2">
                      <div className="space-y-2">
                        <label htmlFor="name" className="ml-1 text-xs font-bold text-slate-100 sm:text-sm">{t('contact.form.nameLabel')}</label>
                        <input
                          type="text"
                          id="name"
                          required
                          placeholder={t('contact.form.namePlaceholder')}
                          className="w-full rounded-xl border border-slate-700 bg-slate-800/70 px-4 py-3 text-white transition-all placeholder:text-slate-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:rounded-2xl sm:px-6 sm:py-4"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="ml-1 text-xs font-bold text-slate-100 sm:text-sm">{t('contact.form.emailLabel')}</label>
                        <input
                          type="email"
                          id="email"
                          required
                          placeholder={t('contact.form.emailPlaceholder')}
                          className="w-full rounded-xl border border-slate-700 bg-slate-800/70 px-4 py-3 text-white transition-all placeholder:text-slate-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:rounded-2xl sm:px-6 sm:py-4"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="subject" className="ml-1 text-xs font-bold text-slate-100 sm:text-sm">{t('contact.form.subjectLabel')}</label>
                      <select
                        id="subject"
                        className="w-full appearance-none rounded-xl border border-slate-700 bg-slate-800/70 px-4 py-3 text-white transition-all focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:rounded-2xl sm:px-6 sm:py-4"
                      >
                        <option>{t('contact.form.subjectOptions.newProject')}</option>
                        <option>{t('contact.form.subjectOptions.support')}</option>
                        <option>{t('contact.form.subjectOptions.consulting')}</option>
                        <option>{t('contact.form.subjectOptions.other')}</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="ml-1 text-xs font-bold text-slate-100 sm:text-sm">{t('contact.form.messageLabel')}</label>
                      <textarea
                        id="message"
                        required
                        rows={4}
                        placeholder={t('contact.form.messagePlaceholder')}
                        className="w-full resize-none rounded-xl border border-slate-700 bg-slate-800/70 px-4 py-3 text-white transition-all placeholder:text-slate-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:rounded-2xl sm:px-6 sm:py-4"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 py-4 text-base font-bold text-white shadow-2xl shadow-purple-900/40 transition-all hover:from-indigo-400 hover:to-purple-600 disabled:cursor-not-allowed disabled:opacity-70 sm:py-5 sm:text-lg"
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
                    className="space-y-5 py-8 text-center sm:space-y-6 sm:py-12"
                  >
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-green-400/40 bg-green-500/10 text-green-400 sm:h-20 sm:w-20">
                      <CheckCircle className="h-8 w-8 sm:h-10 sm:w-10" />
                    </div>
                    <h2 className="mb-2 text-2xl font-bold text-white sm:text-3xl">{t('contact.form.successTitle')}</h2>
                    <p className="mx-auto max-w-md text-base text-slate-200 sm:text-lg">
                      {t('contact.form.successSubtitle')}
                    </p>
                    <button
                      onClick={() => setIsSuccess(false)}
                      className="rounded-full border border-white/20 bg-white/10 px-6 py-3 font-bold text-white transition-all hover:bg-white/20 sm:px-8 sm:py-4"
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
