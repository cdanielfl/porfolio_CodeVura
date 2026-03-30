import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, BriefcaseBusiness, CheckCircle2, ExternalLink, Layers3, Target } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { routes } from '../routes';

type StatItem = {
  value: string;
  label: string;
};

type ProjectCase = {
  title: string;
  category: string;
  description: string;
  challenge: string;
  focus: string;
  stack: string[];
};

type ExecutionItem = {
  title: string;
  description: string;
};

const cardStyles = [
  'from-orange-500/20 via-slate-900/80 to-slate-900/95 border-orange-300/25',
  'from-amber-500/20 via-slate-900/80 to-slate-900/95 border-amber-300/25',
  'from-cyan-500/20 via-slate-900/80 to-slate-900/95 border-cyan-300/25',
  'from-violet-500/20 via-slate-900/80 to-slate-900/95 border-violet-300/25',
];

export default function Portfolio() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language?.startsWith('en') ? 'en' : 'pt';

  const stats = t('portfolio.stats', { returnObjects: true }) as StatItem[];
  const executionItems = t('portfolio.execution.items', { returnObjects: true }) as ExecutionItem[];
  const projectMap = t('portfolio.projects', { returnObjects: true }) as Record<string, ProjectCase>;

  const projects = Object.entries(projectMap).map(([id, project]) => ({
    id,
    demoPath: `/demo/${id}`,
    ...project,
  }));

  return (
    <main className="flex-grow pb-24 pt-32 text-white">
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-slate-900/55 p-8 backdrop-blur-xl sm:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-300/90">
            {t('portfolio.eyebrow')}
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
            {t('portfolio.title')}
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-slate-300 sm:text-lg">
            {t('portfolio.subtitle')}
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {stats.map((item) => (
              <div key={item.label} className="rounded-2xl border border-white/10 bg-slate-950/70 p-5">
                <p className="text-2xl font-semibold text-white">{item.value}</p>
                <p className="mt-2 text-sm text-slate-300">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto mt-12 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 xl:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              className={`rounded-3xl border bg-gradient-to-b p-6 backdrop-blur-xl ${cardStyles[index % cardStyles.length]}`}
            >
              <div className="rounded-2xl border border-white/10 bg-slate-950/75 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
                  {project.category}
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-white">{project.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">{project.description}</p>
              </div>

              <div className="mt-4 space-y-4 rounded-2xl border border-white/10 bg-slate-950/75 p-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
                    {t('portfolio.caseLabels.challenge')}
                  </p>
                  <p className="mt-1 text-sm text-slate-200">{project.challenge}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
                    {t('portfolio.caseLabels.focus')}
                  </p>
                  <p className="mt-1 text-sm text-slate-200">{project.focus}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
                    {t('portfolio.caseLabels.stack')}
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-lg border border-white/10 bg-slate-900 px-2.5 py-1.5 text-xs text-slate-200"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-5 flex flex-col gap-3">
                <Link
                  to={project.demoPath}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500 px-5 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5"
                >
                  {t('portfolio.openDemo')}
                  <ExternalLink className="h-4 w-4" />
                </Link>
                <Link
                  to={project.demoPath}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-100 transition-colors hover:bg-white/10"
                >
                  {t('portfolio.viewDemo')}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-300/90">
              {t('portfolio.execution.eyebrow')}
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
              {t('portfolio.execution.title')}
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-300">
              {t('portfolio.execution.subtitle')}
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <article className="rounded-2xl border border-white/10 bg-slate-900/60 p-5">
              <BriefcaseBusiness className="h-5 w-5 text-violet-300" />
              <h3 className="mt-3 text-base font-semibold text-white">{executionItems[0].title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">{executionItems[0].description}</p>
            </article>
            <article className="rounded-2xl border border-white/10 bg-slate-900/60 p-5">
              <Target className="h-5 w-5 text-violet-300" />
              <h3 className="mt-3 text-base font-semibold text-white">{executionItems[1].title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">{executionItems[1].description}</p>
            </article>
            <article className="rounded-2xl border border-white/10 bg-slate-900/60 p-5">
              <Layers3 className="h-5 w-5 text-violet-300" />
              <h3 className="mt-3 text-base font-semibold text-white">{executionItems[2].title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">{executionItems[2].description}</p>
            </article>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-violet-300/25 bg-gradient-to-r from-slate-900 via-indigo-950/70 to-slate-900 p-8 sm:p-12">
          <div className="absolute -left-20 top-1/2 h-56 w-56 -translate-y-1/2 rounded-full bg-sky-400/20 blur-3xl" />
          <div className="absolute -right-16 top-0 h-56 w-56 rounded-full bg-violet-500/25 blur-3xl" />

          <div className="relative z-10">
            <h2 className="max-w-3xl text-3xl font-semibold text-white sm:text-4xl">
              {t('portfolio.customCta.title')}
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-200">
              {t('portfolio.customCta.subtitle')}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to={routes[lang].contact}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_18px_45px_-16px_rgba(99,102,241,0.85)] transition-all hover:-translate-y-0.5"
              >
                {t('portfolio.customCta.button')}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <p className="mt-6 inline-flex items-center gap-2 text-sm text-slate-300">
              <CheckCircle2 className="h-4 w-4 text-emerald-300" />
              {t('portfolio.customCta.commitment')}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
