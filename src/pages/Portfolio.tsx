import { useEffect, useMemo, useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, BriefcaseBusiness, CheckCircle2, ChevronDown, ExternalLink, Layers3, Target } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { routes } from '../routes';
import { withDemoLanguage } from '../utils/demoLanguage';

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

const projectImages: Record<string, string> = {
  mecanica: '/demoshots/mecanica-home.png',
  restaurante: '/demoshots/restaurante-home.png',
  clinica: '/demoshots/clinica-home.png',
  marketplace: '/demoshots/marketplace-home.png',
  saas: '/demoshots/saas-home.png',
  curate: '/demoshots/curate-home.png',
};

const revealUp = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: 'easeOut' },
  },
};

const staggerGroup = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Portfolio() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language?.startsWith('en') ? 'en' : 'pt';

  const stats = t('portfolio.stats', { returnObjects: true }) as StatItem[];
  const executionItems = t('portfolio.execution.items', { returnObjects: true }) as ExecutionItem[];
  const projectMap = t('portfolio.projects', { returnObjects: true }) as Record<string, ProjectCase>;

  const projects = Object.entries(projectMap).map(([id, project]) => ({
    id,
    demoPath: withDemoLanguage(`/demo/${id}`, lang),
    coverImage: projectImages[id] ?? 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1200',
    ...project,
  }));

  const [activeCategory, setActiveCategory] = useState<string>('all');
  const categoryOptions = useMemo(() => {
    const categories = Array.from(new Set(projects.map((project) => project.category)));
    return ['all', ...categories];
  }, [projects]);

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'all') return projects;
    return projects.filter((project) => project.category === activeCategory);
  }, [activeCategory, projects]);

  useEffect(() => {
    if (activeCategory !== 'all' && !categoryOptions.includes(activeCategory)) {
      setActiveCategory('all');
    }
  }, [activeCategory, categoryOptions]);

  const visibleProjects = filteredProjects.length > 0 ? filteredProjects : projects;

  return (
    <main className="flex-grow pb-20 pt-24 text-white sm:pb-24 sm:pt-32">
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerGroup}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="rounded-3xl border border-white/10 bg-slate-900/55 p-4 backdrop-blur-xl sm:p-12"
        >
          <motion.p variants={revealUp} className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-300/90">
            {t('portfolio.eyebrow')}
          </motion.p>
          <motion.h1 variants={revealUp} className="mt-2.5 max-w-4xl text-2xl font-semibold leading-tight text-white sm:mt-4 sm:text-5xl lg:text-6xl">
            {t('portfolio.title')}
          </motion.h1>
          <motion.p variants={revealUp} className="mt-3 max-w-3xl text-xs leading-relaxed text-slate-300 sm:mt-6 sm:text-lg">
            {t('portfolio.subtitle')}
          </motion.p>

          <motion.div variants={staggerGroup} className="mt-5 flex snap-x snap-mandatory gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mt-8 sm:grid sm:gap-4 sm:overflow-visible sm:pb-0 md:grid-cols-3">
            {stats.map((item) => (
              <motion.div variants={revealUp} key={item.label} className="min-w-[58%] snap-start rounded-2xl border border-white/10 bg-slate-950/70 p-3 sm:min-w-0 sm:p-5">
                <p className="text-xl font-semibold text-white sm:text-2xl">{item.value}</p>
                <p className="mt-1.5 text-xs text-slate-300 sm:mt-2 sm:text-sm">{item.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      <section className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerGroup}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="mb-5 sm:mb-6"
        >
          <motion.div variants={revealUp} className="w-full max-w-sm md:max-w-md">
            <label
              htmlFor="portfolio-category"
              className="mb-2.5 block text-xs font-semibold uppercase tracking-[0.12em] text-slate-300 md:text-sm"
            >
              {t('portfolio.filters.label')}
            </label>
            <div className="relative overflow-hidden rounded-2xl border border-violet-300/25 bg-slate-900/70 shadow-[0_16px_40px_-24px_rgba(99,102,241,0.9)] backdrop-blur-xl md:rounded-3xl md:shadow-[0_24px_60px_-30px_rgba(99,102,241,0.9)]">
              <div className="pointer-events-none absolute inset-y-0 right-0 w-14 bg-gradient-to-l from-violet-500/20 via-indigo-500/10 to-transparent md:w-16" />
              <select
                id="portfolio-category"
                value={activeCategory}
                onChange={(event) => setActiveCategory(event.target.value)}
                className="w-full appearance-none bg-transparent px-4 py-3 pr-12 text-sm font-medium text-slate-100 outline-none [color-scheme:dark] md:px-5 md:py-3.5 md:pr-14 md:text-base"
                aria-label={t('portfolio.filters.label')}
              >
                {categoryOptions.map((category) => (
                  <option key={category} value={category} className="bg-slate-950 text-slate-100">
                    {category === 'all' ? t('portfolio.filters.all') : category}
                  </option>
                ))}
              </select>
              <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-violet-200 md:right-5 md:h-5 md:w-5" />
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={staggerGroup}
          initial="hidden"
          animate="visible"
          className="flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:grid sm:gap-6 sm:overflow-visible sm:pb-0 xl:grid-cols-3"
        >
          {visibleProjects.map((project, index) => (
            <motion.article
              key={project.id}
              variants={revealUp}
              transition={{ delay: index * 0.04 }}
              className={`w-[74vw] max-w-[280px] shrink-0 snap-start rounded-2xl border bg-gradient-to-b p-2.5 backdrop-blur-xl sm:w-auto sm:max-w-none sm:min-w-0 sm:rounded-3xl sm:p-6 ${cardStyles[index % cardStyles.length]}`}
            >
              <div className="relative mb-3 overflow-hidden rounded-2xl border border-white/10 sm:mb-4">
                <img
                  src={project.coverImage}
                  alt={project.title}
                  loading="lazy"
                  className="h-24 w-full object-cover transition-transform duration-500 hover:scale-105 sm:h-44"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
              </div>

              <div className="rounded-2xl border border-white/10 bg-slate-950/75 p-3 sm:p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
                  {project.category}
                </p>
                <h3 className="mt-1.5 text-base font-semibold text-white sm:mt-2 sm:text-2xl">{project.title}</h3>
                <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-slate-300 sm:mt-3 sm:line-clamp-none sm:text-sm">{project.description}</p>
                <div className="mt-2.5 flex flex-wrap gap-1.5 sm:hidden">
                  {project.stack.slice(0, 2).map((item) => (
                    <span
                      key={item}
                      className="rounded-lg border border-white/10 bg-slate-900 px-2 py-1 text-[10px] text-slate-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-3 hidden rounded-2xl border border-white/10 bg-slate-950/75 p-3 sm:mt-4 sm:block sm:p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-300">
                  {t('portfolio.caseLabels.stack')}
                </p>
                <div className="mt-2 flex flex-wrap gap-1.5 sm:gap-2">
                  {project.stack.slice(0, 3).map((item, stackIndex) => (
                    <span
                      key={item}
                      className={`rounded-lg border border-white/10 bg-slate-900 px-2 py-1 text-[11px] text-slate-200 sm:px-2.5 sm:py-1.5 sm:text-xs ${stackIndex === 2 ? 'hidden sm:inline-flex' : ''}`}
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <details className="group mt-3 rounded-xl border border-white/10 bg-slate-900/60 p-3 sm:mt-4">
                  <summary className="flex cursor-pointer list-none items-center justify-between text-xs font-semibold text-slate-100 sm:text-sm">
                    {t('portfolio.caseLabels.details')}
                    <ChevronDown className="h-4 w-4 text-slate-400 transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="mt-2.5 space-y-2.5 sm:mt-3 sm:space-y-3">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-300">
                        {t('portfolio.caseLabels.challenge')}
                      </p>
                      <p className="mt-1 text-xs text-slate-200 sm:text-sm">{project.challenge}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-300">
                        {t('portfolio.caseLabels.focus')}
                      </p>
                      <p className="mt-1 text-xs text-slate-200 sm:text-sm">{project.focus}</p>
                    </div>
                  </div>
                </details>
              </div>

              <div className="mt-2.5 flex flex-col gap-2 sm:mt-5 sm:gap-3">
                <Link
                  to={project.demoPath}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500 px-3.5 py-2 text-[11px] font-semibold text-white transition-all hover:-translate-y-0.5 sm:px-5 sm:py-3 sm:text-sm"
                >
                  {t('portfolio.openDemo')}
                  <ExternalLink className="h-4 w-4" />
                </Link>
                <Link
                  to={project.demoPath}
                  className="hidden items-center justify-center gap-2 px-2 py-1 text-xs font-semibold text-slate-200 transition-colors hover:text-white sm:inline-flex sm:text-sm"
                >
                  {t('portfolio.viewDemoSimple')}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </section>

      <section className="mx-auto mt-16 max-w-7xl px-4 sm:mt-20 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerGroup}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.28 }}
          className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]"
        >
          <motion.div variants={revealUp}>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-300/90">
              {t('portfolio.execution.eyebrow')}
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-white sm:text-4xl">
              {t('portfolio.execution.title')}
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-300 sm:mt-4 sm:text-base">
              {t('portfolio.execution.subtitle')}
            </p>
          </motion.div>

          <motion.div variants={staggerGroup} className="grid gap-4 sm:grid-cols-3">
            <motion.article variants={revealUp} className="rounded-2xl border border-white/10 bg-slate-900/60 p-4 sm:p-5">
              <BriefcaseBusiness className="h-5 w-5 text-violet-300" />
              <h3 className="mt-3 text-base font-semibold text-white">{executionItems[0].title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">{executionItems[0].description}</p>
            </motion.article>
            <motion.article variants={revealUp} className="rounded-2xl border border-white/10 bg-slate-900/60 p-4 sm:p-5">
              <Target className="h-5 w-5 text-violet-300" />
              <h3 className="mt-3 text-base font-semibold text-white">{executionItems[1].title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">{executionItems[1].description}</p>
            </motion.article>
            <motion.article variants={revealUp} className="rounded-2xl border border-white/10 bg-slate-900/60 p-4 sm:p-5">
              <Layers3 className="h-5 w-5 text-violet-300" />
              <h3 className="mt-3 text-base font-semibold text-white">{executionItems[2].title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">{executionItems[2].description}</p>
            </motion.article>
          </motion.div>
        </motion.div>
      </section>

      <section className="mx-auto mt-16 max-w-7xl px-4 sm:mt-20 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="relative overflow-hidden rounded-3xl border border-violet-300/25 bg-gradient-to-r from-slate-900 via-indigo-950/70 to-slate-900 p-5 sm:p-12"
        >
          <div className="absolute -left-20 top-1/2 h-56 w-56 -translate-y-1/2 rounded-full bg-sky-400/20 blur-3xl" />
          <div className="absolute -right-16 top-0 h-56 w-56 rounded-full bg-violet-500/25 blur-3xl" />

          <div className="relative z-10">
            <h2 className="max-w-3xl text-2xl font-semibold text-white sm:text-4xl">
              {t('portfolio.customCta.title')}
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-200 sm:mt-4 sm:text-base">
              {t('portfolio.customCta.subtitle')}
            </p>
            <div className="mt-6 flex flex-col gap-2.5 sm:mt-8 sm:gap-3 sm:flex-row">
              <Link
                to={routes[lang].contact}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500 px-5 py-3 text-sm font-semibold text-white shadow-[0_18px_45px_-16px_rgba(99,102,241,0.85)] transition-all hover:-translate-y-0.5 sm:px-6 sm:py-3.5"
              >
                {t('portfolio.customCta.button')}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <p className="mt-5 inline-flex items-center gap-2 text-xs text-slate-300 sm:mt-6 sm:text-sm">
              <CheckCircle2 className="h-4 w-4 text-emerald-300" />
              {t('portfolio.customCta.commitment')}
            </p>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
