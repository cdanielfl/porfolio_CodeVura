import React from "react";
import { motion } from "motion/react";
import { ShieldCheck, Clock, Award, Users } from "lucide-react";

export const About: React.FC = () => {
  return (
    <div className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12 mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-1"
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest text-blue-400 uppercase bg-blue-400/10 border border-blue-400/20 rounded-full">
              Our Story
            </span>
            <h1 className="text-4xl md:text-7xl font-black tracking-tighter mb-8 leading-none">
              WE ARE <span className="text-blue-500">APEX AUTO</span>
            </h1>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed max-w-xl">
              Founded in 2010, Apex Auto has grown from a small local garage to Detroit's most trusted automotive service center. Our mission is to provide premium vehicle diagnostics and maintenance services with precision and speed.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="text-3xl font-black text-white mb-1">15+</div>
                <div className="text-xs uppercase tracking-widest text-gray-500 font-bold">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-black text-white mb-1">10k+</div>
                <div className="text-xs uppercase tracking-widest text-gray-500 font-bold">Happy Customers</div>
              </div>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex-1 relative"
          >
            <div className="aspect-square rounded-[3rem] overflow-hidden border border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1530046339160-ce3e5b0c7a2f?auto=format&fit=crop&q=80&w=800" 
                alt="Workshop" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-blue-600 p-8 rounded-3xl shadow-2xl hidden md:block">
              <Award className="w-12 h-12 text-white mb-4" />
              <div className="text-xl font-bold text-white">Certified Excellence</div>
              <div className="text-sm text-blue-100">Top Rated Service Center</div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: ShieldCheck,
              title: "Quality Guaranteed",
              description: "We use only the highest quality parts and our work is backed by a comprehensive warranty."
            },
            {
              icon: Clock,
              title: "Fast Turnaround",
              description: "We understand your time is valuable. Most services are completed within the same day."
            },
            {
              icon: Users,
              title: "Expert Team",
              description: "Our certified mechanics undergo continuous training to stay ahead of automotive technology."
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-10 bg-zinc-900/50 border border-white/5 rounded-3xl"
            >
              <item.icon className="w-10 h-10 text-blue-500 mb-6" />
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
