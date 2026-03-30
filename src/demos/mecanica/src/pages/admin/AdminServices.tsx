import React, { useState } from "react";
import { motion } from "motion/react";
import { Plus, Edit2, Trash2, Search, Wrench, MoreVertical } from "lucide-react";
import { SERVICES } from "../../data/mockData";

export const AdminServices: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredServices = SERVICES.filter(s => 
    s.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-8">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black tracking-tighter mb-2 uppercase">Manage Services</h1>
          <p className="text-gray-500 font-medium">Add, edit, or remove automotive service offerings.</p>
        </div>
        <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all flex items-center space-x-2">
          <Plus className="w-5 h-5" />
          <span>Add Service</span>
        </button>
      </header>

      <div className="relative">
        <input
          type="text"
          placeholder="Search services..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full bg-zinc-900 border border-white/5 rounded-2xl px-12 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-blue-500 transition-colors"
        />
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-600" />
      </div>

      <div className="grid grid-cols-1 gap-4">
        {filteredServices.map((service, i) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="p-6 bg-zinc-900 border border-white/5 rounded-3xl flex flex-col md:flex-row md:items-center justify-between gap-6 group hover:border-white/10 transition-all"
          >
            <div className="flex items-center space-x-6">
              <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-blue-600/10 transition-colors">
                <Wrench className="w-6 h-6 text-gray-400 group-hover:text-blue-500 transition-colors" />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-1">{service.title}</h3>
                <p className="text-xs text-gray-500 max-w-md line-clamp-1">{service.description}</p>
              </div>
            </div>

            <div className="flex items-center justify-between md:justify-end gap-8">
              <div className="text-right">
                <div className="text-xs text-gray-500 uppercase font-bold tracking-widest mb-1">Price</div>
                <div className="text-sm font-black text-blue-500">{service.price}</div>
              </div>
              <div className="flex items-center space-x-2">
                <button className="p-3 text-gray-500 hover:text-white hover:bg-white/5 rounded-xl transition-all">
                  <Edit2 className="w-5 h-5" />
                </button>
                <button className="p-3 text-gray-500 hover:text-red-500 hover:bg-red-500/10 rounded-xl transition-all">
                  <Trash2 className="w-5 h-5" />
                </button>
                <button className="p-3 text-gray-500 hover:text-white hover:bg-white/5 rounded-xl transition-all">
                  <MoreVertical className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
