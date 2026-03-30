import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  ArrowRight,
  CheckCircle2,
  Globe,
  Layout,
  LineChart,
  Smartphone,
  Sparkles,
  Zap,
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { routes } from '../routes';

type HeroKpi = {
  value: string;
  label: string;
};

type Service = {
  title: string;
  description: string;
  outcome: string;
};

type ProcessStep = {
  title: string;
  description: string;
  metric: string;
};

const serviceIcons = [
  <Globe className="h-5 w-5" />,
  <Layout className="h-5 w-5" />,
  <Smartphone className="h-5 w-5" />,
  <Zap className="h-5 w-5" />,
];

export default function Home() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language?.startsWith('en') ? 'en' : 'pt';

  const heroKpis = t('home.hero.kpis', { returnObjects: true }) as HeroKpi[];
  const services = t('home.services.items', { returnObjects: true }) as Service[];
  const steps = t('home.process.steps', { returnObjects: true }) as ProcessStep[];

  return (
    <main className="pb-24 pt-10 sm:pt-14">
      <section className="relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-[560px] bg-gradient-to-b from-indigo-500/10 via-fuchsia-500/5 to-transparent blur-3xl" />
        <div className="absolute left-1/2 top-24 h-72 w-[68rem] -translate-x-1/2 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.12),transparent_58%)]" />

        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.18fr_0.82fr] lg:items-center lg:px-8">
          <div className="relative z-10 pt-14 lg:pt-24">
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-sky-100"
            >
              <Sparkles className="h-3.5 w-3.5 text-violet-300" />
              {t('home.hero.badge')}
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12, duration: 0.7 }}
              className="mt-6 text-4xl font-semibold leading-[1.08] text-white sm:text-5xl lg:text-[3.35rem]"
            >
              {t('home.hero.titlePrefix')}{' '}
              <span className="bg-gradient-to-r from-sky-300 via-indigo-200 to-violet-300 bg-clip-text text-transparent">
                {t('home.hero.titleHighlight')}
              </span>{' '}
              {t('home.hero.titleSuffix')}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="mt-7 max-w-2xl text-lg leading-relaxed text-slate-300"
            >
              {t('home.hero.subtitle')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.32, duration: 0.7 }}
              className="mt-9 flex flex-col gap-3 sm:flex-row"
            >
              <Link
                to={routes[lang].contact}
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_16px_50px_-12px_rgba(99,102,241,0.75)] transition-all hover:-translate-y-0.5 hover:from-indigo-400 hover:to-violet-400"
              >
                {t('home.hero.primaryCta')}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href="#processo"
                className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-slate-100 transition-colors hover:bg-white/10"
              >
                {t('home.hero.secondaryCta')}
              </a>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.38, duration: 0.65 }}
              className="mt-4 text-sm text-slate-400"
            >
              {t('home.hero.microProof')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.42, duration: 0.65 }}
              className="mt-10 grid grid-cols-3 gap-3 sm:max-w-xl"
            >
              {heroKpis.map((kpi) => (
                <div key={kpi.label} className="rounded-xl border border-white/10 bg-slate-900/50 p-4 backdrop-blur-xl">
                  <p className="text-xl font-semibold text-white sm:text-2xl">{kpi.value}</p>
                  <p className="mt-1 text-xs leading-relaxed text-slate-400 sm:text-sm">{kpi.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.22, duration: 0.85 }}
            className="relative mx-auto w-full max-w-xl lg:max-w-none"
          >
            <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-violet-500/35 blur-3xl" />
            <div className="absolute -left-8 bottom-10 h-32 w-32 rounded-full bg-sky-400/35 blur-3xl" />

            <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-slate-900/65 p-4 shadow-[0_28px_90px_-35px_rgba(15,23,42,1)] backdrop-blur-2xl sm:p-6">
              <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(99,102,241,0.16),transparent_35%,rgba(56,189,248,0.08))]" />
              <div className="relative">
                <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-xs text-slate-300">
                  <span>{t('home.hero.mockup.pipeline')}</span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/15 px-2.5 py-1 text-emerald-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
                    {t('home.hero.mockup.signal')}
                  </span>
                </div>

                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-4">
                    <p className="text-xs uppercase tracking-[0.14em] text-slate-400">{t('home.hero.mockup.panelTitle')}</p>
                    <p className="mt-2 text-2xl font-semibold text-white">{t('home.hero.mockup.panelValue')}</p>
                    <div className="mt-4 h-20 rounded-xl bg-[linear-gradient(180deg,rgba(99,102,241,0.35),rgba(15,23,42,0.05))]" />
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-4">
                    <p className="text-xs uppercase tracking-[0.14em] text-slate-400">{t('home.hero.mockup.roiTitle')}</p>
                    <p className="mt-2 text-2xl font-semibold text-white">{t('home.hero.mockup.roiValue')}</p>
                    <p className="mt-3 text-sm text-slate-300">{t('home.hero.mockup.roiDescription')}</p>
                  </div>
                </div>

                <div className="mt-4 rounded-2xl border border-white/10 bg-slate-900/80 p-4">
                  <div className="mb-3 flex items-center gap-2 text-sm font-medium text-slate-100">
                    <LineChart className="h-4 w-4 text-violet-300" />
                    {t('home.hero.mockup.stackTitle')}
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs text-slate-300 sm:grid-cols-4">
                    {(t('home.hero.mockup.stackItems', { returnObjects: true }) as string[]).map((item) => (
                      <span key={item} className="rounded-lg border border-white/10 bg-slate-950/70 px-3 py-2 text-center">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="processo" className="mx-auto mt-24 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-slate-900/55 p-7 backdrop-blur-xl sm:p-10">
          <div className="grid gap-5 md:grid-cols-3">
            {(t('home.results.items', { returnObjects: true }) as HeroKpi[]).map((item) => (
              <div key={item.label} className="rounded-2xl border border-white/10 bg-slate-950/60 p-5">
                <p className="text-3xl font-semibold text-white">{item.value}</p>
                <p className="mt-2 text-sm text-slate-300">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto mt-24 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-300/90">{t('home.services.eyebrow')}</p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">{t('home.services.title')}</h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-300">{t('home.services.subtitle')}</p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group rounded-2xl border border-white/10 bg-slate-900/60 p-6 transition-all hover:-translate-y-1 hover:border-violet-400/45 hover:bg-slate-900/75"
            >
              <div className="inline-flex rounded-xl border border-violet-300/30 bg-violet-500/10 p-2.5 text-violet-200">
                {serviceIcons[index]}
              </div>
              <h3 className="mt-5 text-xl font-semibold text-white">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">{service.description}</p>
              <p className="mt-5 border-t border-white/10 pt-5 text-sm font-medium text-sky-300">{service.outcome}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-24 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-300/90">{t('home.process.eyebrow')}</p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">{t('home.process.title')}</h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-300">{t('home.process.subtitle')}</p>
          </div>

          <div className="grid gap-4">
            {steps.map((step, idx) => (
              <div key={step.title} className="rounded-2xl border border-white/10 bg-slate-900/60 p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">0{idx + 1}</p>
                    <h3 className="mt-1 text-lg font-semibold text-white">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-300">{step.description}</p>
                  </div>
                  <span className="rounded-lg border border-emerald-300/35 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-300">
                    {step.metric}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto mt-24 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-violet-300/25 bg-gradient-to-r from-slate-900 via-indigo-950/70 to-slate-900 p-8 sm:p-12">
          <div className="absolute -left-20 top-1/2 h-56 w-56 -translate-y-1/2 rounded-full bg-sky-400/20 blur-3xl" />
          <div className="absolute -right-16 top-0 h-56 w-56 rounded-full bg-violet-500/25 blur-3xl" />

          <div className="relative z-10">
            <p className="inline-flex rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-slate-200">
              {t('home.finalCta.badge')}
            </p>
            <h2 className="mt-5 max-w-3xl text-3xl font-semibold text-white sm:text-4xl">{t('home.finalCta.title')}</h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-200">{t('home.finalCta.subtitle')}</p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to={routes[lang].contact}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_18px_45px_-16px_rgba(99,102,241,0.85)] transition-all hover:-translate-y-0.5"
              >
                {t('home.finalCta.button')}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to={routes[lang].portfolio}
                className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                {t('home.finalCta.secondary')}
              </Link>
            </div>

            <p className="mt-6 inline-flex items-center gap-2 text-sm text-slate-300">
              <CheckCircle2 className="h-4 w-4 text-emerald-300" />
              {t('home.finalCta.commitment')}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
