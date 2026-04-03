import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Phone, ShieldCheck, Clock, Settings, Wrench, Activity, Droplets, Disc, Battery, CircleDot, Wind, ArrowUpCircle, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { SERVICES, localizeServices } from "../data/mockData";
import { resolveDemoLanguage } from "../../../../utils/demoLanguage";

const iconMap: Record<string, any> = {
  Droplets,
  Disc,
  Activity,
  Settings,
  Battery,
  CircleDot,
  Wind,
  ArrowUpCircle,
};

export const Home: React.FC = () => {
  const location = useLocation();
  const lang = resolveDemoLanguage(location.search);
  const text =
    lang === "pt"
      ? {
          badge: "Especialistas em cuidado automotivo",
          heroTitle1: "REPARO AUTOMOTIVO",
          heroTitle2: "RAPIDO E CONFIAVEL",
          heroSubtitle:
            "Servicos premium de diagnostico e manutencao automotiva para manter voce em movimento com seguranca.",
          callNow: "LIGUE AGORA",
          emergency: "Atendimento de emergencia 24/7",
          aboutTitle1: "SOBRE A",
          aboutTitle2: "EMPRESA",
          aboutText:
            "A Apex Auto e referencia em servicos automotivos de alta performance, com mais de 15 anos de experiencia.",
          years: "Anos de experiencia",
          customers: "Clientes satisfeitos",
          servicesTitle: "O QUE FAZEMOS",
          servicesSubtitle: "Solucoes completas para manter seu carro seguro e eficiente.",
        }
      : {
          badge: "Expert Automotive Care",
          heroTitle1: "FAST & RELIABLE",
          heroTitle2: "AUTO REPAIR",
          heroSubtitle:
            "Experience premium vehicle diagnostics and maintenance services in Detroit. We keep you moving with precision and speed.",
          callNow: "CALL NOW",
          emergency: "24/7 Emergency Service",
          aboutTitle1: "ABOUT OUR",
          aboutTitle2: "COMPANY",
          aboutText:
            "Apex Auto is a leader in high-performance automotive services. With over 15 years of experience, our team of certified technicians uses cutting-edge technology to ensure your vehicle receives the best possible care.",
          years: "Years of Experience",
          customers: "Happy Customers",
          servicesTitle: "WHAT WE CAN DO",
          servicesSubtitle: "We offer a full range of automotive solutions to keep you on the road safely.",
      };
  const services = localizeServices(SERVICES, lang);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80&w=2000"
            alt="Auto Shop"
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest text-blue-400 uppercase bg-blue-400/10 border border-blue-400/20 rounded-full">
              {text.badge}
            </span>
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-6 leading-none">
              {text.heroTitle1} <br />
              <span className="text-blue-500">{text.heroTitle2}</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 font-medium">
              {text.heroSubtitle}
            </p>
            
            {/* Call Button */}
            <div className="flex flex-col items-center justify-center space-y-6">
              <a
                href="tel:5551234567"
                className="w-24 h-24 md:w-32 md:h-32 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center text-white shadow-2xl shadow-red-600/40 animate-pulse hover:animate-none transition-all group"
              >
                <Phone className="w-10 h-10 md:w-14 md:h-14 group-hover:scale-110 transition-transform" />
              </a>
              <div className="text-center">
                <h3 className="text-xl font-bold uppercase tracking-tighter">{text.callNow}</h3>
                <p className="text-sm text-gray-500 font-medium">{text.emergency}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Company Presentation */}
      <section className="py-32 px-4 bg-zinc-950">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-6xl font-black tracking-tighter mb-8 leading-none">
              {text.aboutTitle1} <span className="text-blue-500">{text.aboutTitle2}</span>
            </h2>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              {text.aboutText}
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="text-3xl font-black text-white mb-1">15+</div>
                <div className="text-xs uppercase tracking-widest text-gray-500 font-bold">{text.years}</div>
              </div>
              <div>
                <div className="text-3xl font-black text-white mb-1">10k+</div>
                <div className="text-xs uppercase tracking-widest text-gray-500 font-bold">{text.customers}</div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="aspect-video rounded-[3rem] overflow-hidden border border-white/10"
          >
            <img
              src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800"
              alt="Workshop"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </section>

      {/* What can be done */}
      <section className="py-32 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-4 uppercase">{text.servicesTitle}</h2>
            <p className="text-gray-400 max-w-xl mx-auto">{text.servicesSubtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.slice(0, 4).map((service, i) => {
              const Icon = iconMap[service.icon] || Wrench;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group p-8 bg-zinc-900/50 border border-white/5 rounded-3xl hover:border-blue-500/50 hover:bg-zinc-900 transition-all"
                >
                  <div className="w-12 h-12 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-blue-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-sm text-gray-500 mb-6 line-clamp-2">{service.description}</p>
                  <div className="text-blue-400 font-bold text-sm tracking-tight">{service.price}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

