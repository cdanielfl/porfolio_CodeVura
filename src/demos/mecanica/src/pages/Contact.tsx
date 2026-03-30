import React from "react";
import { motion } from "motion/react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const Contact: React.FC = () => {
  return (
    <div className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black tracking-tighter mb-6"
          >
            GET IN <span className="text-blue-500">TOUCH</span>
          </motion.h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Have questions or need to schedule a service? Reach out to us today.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            {[
              { icon: Phone, title: "Phone", value: "(555) 123-4567" },
              { icon: Mail, title: "Email", value: "support@apexauto.com" },
              { icon: MapPin, title: "Location", value: "123 Mechanic Way, Detroit, MI 48201" },
              { icon: Clock, title: "Hours", value: "Mon-Fri: 8am-6pm, Sat: 9am-3pm" }
            ].map((item, i) => (
              <div key={i} className="flex items-start space-x-6 p-8 bg-zinc-900/50 border border-white/5 rounded-3xl">
                <div className="w-12 h-12 bg-blue-500/10 rounded-2xl flex items-center justify-center shrink-0">
                  <item.icon className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-1">{item.title}</h4>
                  <p className="text-xl font-bold text-white">{item.value}</p>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="p-10 bg-zinc-900 border border-white/10 rounded-[3rem]"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-500 uppercase tracking-widest mb-2">Name</label>
                  <input type="text" className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 focus:border-blue-500 outline-none transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-500 uppercase tracking-widest mb-2">Email</label>
                  <input type="email" className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 focus:border-blue-500 outline-none transition-colors" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-500 uppercase tracking-widest mb-2">Subject</label>
                <input type="text" className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 focus:border-blue-500 outline-none transition-colors" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-500 uppercase tracking-widest mb-2">Message</label>
                <textarea rows={4} className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 focus:border-blue-500 outline-none transition-colors" />
              </div>
              <button className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-600/20">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
