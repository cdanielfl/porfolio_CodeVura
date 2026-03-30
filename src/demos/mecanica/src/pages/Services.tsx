import React from "react";
import { motion } from "motion/react";
import { Wrench, Droplets, Activity, Settings, Battery, CircleDot, Wind, ArrowUpCircle } from "lucide-react";
import { SERVICES } from "../data/mockData";

const iconMap: Record<string, any> = {
  Droplets,
  Disc: Activity, // Fallback
  Activity,
  Settings,
  Battery,
  CircleDot,
  Wind,
  ArrowUpCircle,
};

export const Services: React.FC = () => {
  return (
    <div className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black tracking-tighter mb-6"
          >
            OUR <span className="text-blue-500">SERVICES</span>
          </motion.h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            We provide a comprehensive range of automotive services to keep your vehicle running at its best.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, i) => {
            const Icon = iconMap[service.icon] || Wrench;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 bg-zinc-900/50 border border-white/5 rounded-3xl hover:border-blue-500/50 transition-all"
              >
                <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-blue-500" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-blue-400 font-bold text-lg">{service.price}</span>
                  <button className="px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-sm font-medium transition-colors">
                    Learn More
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
