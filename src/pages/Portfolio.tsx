import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ExternalLink, ArrowRight } from 'lucide-react';

export default function Portfolio() {
  const projects = [
    {
      id: 'mecanica',
      title: 'AutoExpert Mecânica',
      category: 'Site Institucional',
      description: 'Plataforma completa para oficinas mecânicas com foco em agendamento e apresentação de serviços especializados.',
      image: 'https://picsum.photos/seed/mechanic/800/600',
      demoPath: '/demo/mecanica',
    },
    {
      id: 'restaurante',
      title: 'Bistro Gourmet',
      category: 'Gastronomia',
      description: 'Site elegante para restaurantes com cardápio digital, sistema de reservas e galeria de pratos.',
      image: 'https://picsum.photos/seed/restaurant/800/600',
      demoPath: '/demo/restaurante',
    },
    {
      id: 'clinica',
      title: 'Vitality Clínica',
      category: 'Saúde & Bem-estar',
      description: 'Solução para clínicas médicas com foco em especialidades, equipe médica e agendamento de consultas.',
      image: 'https://picsum.photos/seed/clinic/800/600',
      demoPath: '/demo/clinica',
    },
  ];

  return (
    <main className="flex-grow pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6"
          >
            Meu Portfólio
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600 max-w-3xl mx-auto"
          >
            Explore alguns dos meus trabalhos recentes. Cada projeto foi desenvolvido com foco em performance, usabilidade e conversão.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <Link
                    to={project.demoPath}
                    className="bg-white text-slate-900 px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 hover:bg-indigo-600 hover:text-white transition-colors"
                  >
                    Abrir Demo <ExternalLink className="w-4 h-4" />
                  </Link>
                </div>
              </div>
              <div className="p-8">
                <span className="text-indigo-600 text-sm font-bold uppercase tracking-wider mb-2 block">{project.category}</span>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{project.title}</h3>
                <p className="text-slate-600 mb-6 line-clamp-3">
                  {project.description}
                </p>
                <Link
                  to={project.demoPath}
                  className="inline-flex items-center gap-2 text-indigo-600 font-bold hover:gap-3 transition-all"
                >
                  Ver Demo Completa <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Custom Project CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-24 bg-slate-900 rounded-[3rem] p-10 lg:p-20 text-center text-white"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Precisa de algo sob medida?</h2>
          <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
            Além das demos acima, desenvolvo soluções personalizadas para qualquer tipo de negócio. Vamos conversar sobre sua ideia.
          </p>
          <Link
            to="/contato"
            className="inline-block px-10 py-5 bg-indigo-600 text-white rounded-full font-bold text-xl hover:bg-indigo-700 transition-all shadow-xl active:scale-95"
          >
            Solicitar Orçamento Personalizado
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
