import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight, Zap, Layout, ShieldCheck, Star } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { curate } from '../lib/paths';
import { resolveDemoLanguage } from '../../../../utils/demoLanguage';

export function LandingPage() {
  const location = useLocation();
  const lang = resolveDemoLanguage(location.search);

  const text = lang === 'pt'
    ? {
        badge: 'Feito para crescimento profissional de alto nivel',
        titleA: 'O criador de curriculos para',
        titleB: 'profissionais modernos.',
        subtitle:
          'Pare de sofrer com formatacao. O Curate ajuda voce a criar curriculos elegantes em minutos, com templates criados por designers.',
        start: 'Comecar Gratis',
        templates: 'Ver Templates',
        featuresTitle: 'Tudo o que voce precisa para se destacar.',
        featuresSubtitle: 'Ferramentas poderosas para ajudar voce a conquistar sua vaga ideal.',
        features: [
          { title: 'Templates de Designer', description: 'Escolha entre templates premium criados por especialistas.' },
          { title: 'Preview em Tempo Real', description: 'Veja suas alteracoes instantaneamente com preview de alta fidelidade.' },
          { title: 'Otimizado para ATS', description: 'Modelos preparados para leitura por sistemas de triagem de candidatos.' },
        ],
        quote:
          '"Curate foi o primeiro criador de curriculos que realmente parece uma ferramenta profissional de design. Consegui minha vaga na TechFlow em duas semanas."',
        role: 'Designer de Produto Senior na TechFlow',
        ctaTitle: 'Pronto para elevar sua carreira?',
        ctaSubtitle: 'Junte-se a mais de 10.000 profissionais que usam o Curate para construir sua identidade profissional.',
      }
    : {
        badge: 'Crafted for high-fidelity career growth',
        titleA: 'The resume builder for',
        titleB: 'modern professionals.',
        subtitle:
          'Stop wrestling with formatting. Curate helps you build polished, high-fidelity resumes in minutes with designer-crafted templates.',
        start: 'Get Started for Free',
        templates: 'View Templates',
        featuresTitle: 'Everything you need to stand out.',
        featuresSubtitle: 'Powerful tools designed to help you land your dream job.',
        features: [
          { title: 'Designer Templates', description: 'Choose from a collection of premium templates designed by industry experts.' },
          { title: 'Real-time Preview', description: 'See your changes instantly as you type with our high-fidelity live preview.' },
          { title: 'ATS Optimized', description: 'Our templates are built to be easily parsed by applicant tracking systems.' },
        ],
        quote:
          '"Curate is the first resume builder that actually feels like a professional design tool. I landed my role at TechFlow within two weeks of using it."',
        role: 'Senior Product Designer at TechFlow',
        ctaTitle: 'Ready to elevate your career?',
        ctaSubtitle: 'Join 10,000+ professionals who use Curate to build their professional identity.',
      };

  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden pt-20 pb-24 lg:pt-32 lg:pb-40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 inline-flex items-center rounded-full bg-zinc-100 px-3 py-1 text-sm font-medium text-zinc-900"
            >
              <Zap className="mr-2 h-4 w-4 text-zinc-900" />
              <span>{text.badge}</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-8 max-w-4xl text-5xl font-bold tracking-tight text-zinc-900 sm:text-7xl"
            >
              {text.titleA} <span className="text-zinc-400">{text.titleB}</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-10 max-w-2xl text-lg text-zinc-600 sm:text-xl"
            >
              {text.subtitle}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
            >
              <Link to={curate('signup')}>
                <Button size="lg" className="w-full sm:w-auto">
                  {text.start}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to={curate('templates')}>
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  {text.templates}
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="features" className="bg-zinc-50 py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">{text.featuresTitle}</h2>
            <p className="text-lg text-zinc-600">{text.featuresSubtitle}</p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { icon: Layout, title: text.features[0].title, description: text.features[0].description },
              { icon: Zap, title: text.features[1].title, description: text.features[1].description },
              { icon: ShieldCheck, title: text.features[2].title, description: text.features[2].description },
            ].map((feature, idx) => (
              <Card key={idx} className="p-8 hover:border-zinc-300 transition-colors">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-900 text-white">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-zinc-900">{feature.title}</h3>
                <p className="text-zinc-600">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center">
            <div className="mb-12 flex items-center space-x-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="h-5 w-5 fill-zinc-900 text-zinc-900" />
              ))}
            </div>
            <p className="mb-12 max-w-3xl text-center text-2xl font-medium italic text-zinc-900 sm:text-3xl">{text.quote}</p>
            <div className="flex items-center space-x-4">
              <div className="h-12 w-12 rounded-full bg-zinc-200 overflow-hidden">
                <img src="https://picsum.photos/seed/sarah/48/48" alt="Sarah" referrerPolicy="no-referrer" />
              </div>
              <div>
                <p className="font-bold text-zinc-900">Sarah Jenkins</p>
                <p className="text-sm text-zinc-500">{text.role}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-900 py-24 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-5xl">{text.ctaTitle}</h2>
            <p className="mb-10 max-w-2xl text-lg text-zinc-400">{text.ctaSubtitle}</p>
            <Link to={curate('signup')}>
              <Button size="lg" className="bg-white text-zinc-900 hover:bg-zinc-100">
                {text.start}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
