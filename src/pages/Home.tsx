import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Layout, Smartphone, Zap, Globe } from 'lucide-react';

export default function Home() {
  const services = [
    {
      title: 'Desenvolvimento Web',
      description: 'Sites modernos, rápidos e otimizados para SEO usando as tecnologias mais recentes.',
      icon: <Globe className="w-6 h-6 text-indigo-600" />,
    },
    {
      title: 'UI/UX Design',
      description: 'Interfaces intuitivas focadas na experiência do usuário e conversão de clientes.',
      icon: <Layout className="w-6 h-6 text-indigo-600" />,
    },
    {
      title: 'Apps Mobile',
      description: 'Soluções progressivas e responsivas que funcionam perfeitamente em qualquer dispositivo.',
      icon: <Smartphone className="w-6 h-6 text-indigo-600" />,
    },
    {
      title: 'Performance & SEO',
      description: 'Otimização técnica para garantir que seu site carregue rápido e apareça no Google.',
      icon: <Zap className="w-6 h-6 text-indigo-600" />,
    },
  ];

  const differentiators = [
    'Código limpo e sustentável',
    'Foco total em conversão',
    'Suporte e manutenção contínua',
    'Design exclusivo e moderno',
    'Integração com APIs e sistemas',
    'Otimização para alta performance',
  ];

  return (
    <main className="flex-grow">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-[120px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-indigo-600 uppercase bg-indigo-50 rounded-full"
            >
              Desenvolvedor Fullstack & UI Designer
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-tight mb-8"
            >
              Transformo sua visão em <span className="text-indigo-600">resultados digitais</span> de alto impacto.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-600 mb-10 leading-relaxed"
            >
              Crio sites e aplicações web de alta performance que não apenas parecem incríveis, mas convertem visitantes em clientes fiéis.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                to="/portfolio"
                className="w-full sm:w-auto px-8 py-4 bg-indigo-600 text-white rounded-full font-bold text-lg hover:bg-indigo-700 transition-all shadow-lg hover:shadow-indigo-200 flex items-center justify-center gap-2 group"
              >
                Ver Projetos
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contato"
                className="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 border-2 border-slate-200 rounded-full font-bold text-lg hover:border-indigo-600 hover:text-indigo-600 transition-all flex items-center justify-center"
              >
                Solicitar Orçamento
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Serviços Especializados</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Soluções completas para levar o seu negócio ao próximo nível no mundo digital.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all"
              >
                <div className="bg-indigo-50 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiators Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">Por que trabalhar comigo?</h2>
              <p className="text-slate-600 mb-8 text-lg">
                Meu foco não é apenas entregar um site, mas sim uma ferramenta de vendas e autoridade para o seu negócio.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {differentiators.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-slate-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="bg-indigo-600 rounded-3xl p-8 lg:p-12 text-white shadow-2xl">
                <blockquote className="text-2xl font-medium italic mb-8">
                  "O projeto superou todas as expectativas. O site é rápido, bonito e já estamos vendo um aumento real nas conversões."
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-indigo-400 rounded-full flex items-center justify-center font-bold text-xl">R</div>
                  <div>
                    <p className="font-bold">Ricardo Santos</p>
                    <p className="text-indigo-200 text-sm">CEO, TechFlow Solutions</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-indigo-100 rounded-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-8">Pronto para transformar sua presença online?</h2>
          <p className="text-indigo-100 text-xl mb-12 max-w-2xl mx-auto">
            Vamos conversar sobre o seu projeto e como posso ajudar você a alcançar seus objetivos.
          </p>
          <Link
            to="/contato"
            className="inline-block px-10 py-5 bg-white text-indigo-600 rounded-full font-bold text-xl hover:bg-slate-50 transition-all shadow-xl hover:shadow-indigo-800/20 active:scale-95"
          >
            Começar Agora
          </Link>
        </div>
      </section>
    </main>
  );
}
