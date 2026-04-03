import React from "react";
import { motion } from "motion/react";
import { Wrench, Droplets, Activity, Settings, Battery, CircleDot, Wind, ArrowUpCircle } from "lucide-react";
import { useLocation } from "react-router-dom";
import { SERVICES, localizeServices } from "../data/mockData";
import { resolveDemoLanguage } from "../../../../utils/demoLanguage";

const iconMap: Record<string, any> = {
  Droplets,
  Disc: Activity,
  Activity,
  Settings,
  Battery,
  CircleDot,
  Wind,
  ArrowUpCircle,
};

export const Services: React.FC = () => {
  const location = useLocation();
  const lang = resolveDemoLanguage(location.search);
  const text = lang === "pt"
    ? {
        titleA: "NOSSOS",
        titleB: "SERVICOS",
        subtitle:
          "Visao geral dos principais servicos para voce comparar rapidamente e decidir com mais seguranca.",
        learnMore: "Detalhes",
        quickView: "VISUALIZACAO RAPIDA",
        desktopHint: "Cards compactos para leitura mais rapida.",
      }
    : {
        titleA: "OUR",
        titleB: "SERVICES",
        subtitle:
          "A quick overview of key services so you can compare faster and decide with confidence.",
        learnMore: "Details",
        quickView: "QUICK OVERVIEW",
        desktopHint: "Compact cards for faster scanning.",
      };

  const services = localizeServices(SERVICES, lang);

  const renderServiceCard = (service: (typeof services)[number], i: number, mobile = false) => {
    const Icon = iconMap[service.icon] || Wrench;
    return (
      <motion.article
        key={service.id}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: i * 0.05 }}
        className={
          mobile
            ? "min-w-[280px] snap-start rounded-2xl border border-white/10 bg-zinc-900/70 p-5"
            : "h-full rounded-2xl border border-white/10 bg-zinc-900/60 p-6 transition-all hover:border-blue-500/50"
        }
      >
        <div className="mb-4 flex items-start justify-between gap-4">
          <div className="flex items-center gap-3 min-w-0">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/15">
              <Icon className="h-5 w-5 text-blue-500" />
            </div>
            <h3 className="truncate text-lg font-bold tracking-tight">{service.title}</h3>
          </div>
          <span className="shrink-0 rounded-full bg-blue-500/10 px-2.5 py-1 text-xs font-bold text-blue-400">
            {service.price}
          </span>
        </div>

        <p className="text-sm leading-relaxed text-gray-400">
          {service.description}
        </p>

        <button className="mt-5 inline-flex items-center rounded-lg bg-white/5 px-3 py-2 text-xs font-semibold text-gray-200 transition-colors hover:bg-white/10">
          {text.learnMore}
        </button>
      </motion.article>
    );
  };

  return (
    <div className="px-4 py-16 md:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center md:mb-14">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-5 text-4xl font-black tracking-tighter md:text-6xl"
          >
            {text.titleA} <span className="text-blue-500">{text.titleB}</span>
          </motion.h1>
          <p className="mx-auto max-w-2xl text-base text-gray-400 md:text-lg">{text.subtitle}</p>
        </div>

        <div className="mb-5 flex items-center justify-between">
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-blue-400">{text.quickView}</p>
          <p className="hidden text-xs text-gray-500 md:block">{text.desktopHint}</p>
        </div>

        <div className="md:hidden -mx-4 overflow-x-auto px-4 pb-2">
          <div className="flex snap-x snap-mandatory gap-4">
            {services.map((service, i) => renderServiceCard(service, i, true))}
          </div>
        </div>

        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => renderServiceCard(service, i))}
        </div>
      </div>
    </div>
  );
};
