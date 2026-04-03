import React, { useState } from "react";
import { motion } from "motion/react";
import { Calendar, Clock, User, CheckCircle2, XCircle, AlertCircle, Search, Filter } from "lucide-react";
import { MOCK_APPOINTMENTS, MOCK_USERS, SERVICES, localizeServices } from "../../data/mockData";
import { useLocation } from "react-router-dom";
import { resolveDemoLanguage } from "../../../../../utils/demoLanguage";

export const AdminAppointments: React.FC = () => {
  const [filter, setFilter] = useState<string>("all");
  const location = useLocation();
  const lang = resolveDemoLanguage(location.search);
  const services = localizeServices(SERVICES, lang);
  const text =
    lang === "pt"
      ? {
          title: "Gestao de atendimentos",
          subtitle: "Monitore e atualize todos os agendamentos de servico.",
          filter: "Filtrar",
          export: "Exportar CSV",
          all: "todos",
          pending: "pendente",
          completed: "concluido",
          canceled: "cancelado",
          id: "ID",
          at: "as",
          reschedule: "Reagendar",
          cancel: "Cancelar",
        }
      : {
          title: "Appointment Management",
          subtitle: "Monitor and update all scheduled service appointments.",
          filter: "Filter",
          export: "Export CSV",
          all: "all",
          pending: "pending",
          completed: "completed",
          canceled: "canceled",
          id: "ID",
          at: "@",
          reschedule: "Reschedule",
          cancel: "Cancel",
        };

  const statusLabels: Record<string, string> = {
    all: text.all,
    pending: text.pending,
    completed: text.completed,
    canceled: text.canceled,
  };

  const filteredAppointments = MOCK_APPOINTMENTS.filter(a => 
    filter === "all" ? true : a.status === filter
  );

  return (
    <div className="space-y-8">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black tracking-tighter mb-2 uppercase">{text.title}</h1>
          <p className="text-gray-500 font-medium">{text.subtitle}</p>
        </div>
        <div className="flex items-center space-x-2">
          <button className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-white/10 transition-all flex items-center space-x-2">
            <Filter className="w-4 h-4" />
            <span>{text.filter}</span>
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-blue-700 transition-all">
            {text.export}
          </button>
        </div>
      </header>

      <div className="flex space-x-4">
        {["all", "pending", "completed", "canceled"].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
              filter === f 
                ? "bg-blue-600 text-white" 
                : "bg-zinc-900 text-gray-500 border border-white/5 hover:border-white/20"
            }`}
          >
            {statusLabels[f]}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-4">
        {filteredAppointments.map((app, i) => {
          const service = services.find((s) => s.id === app.serviceId);
          const customer = MOCK_USERS.find(u => u.id === app.userId);
          
          return (
            <motion.div
              key={app.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05 }}
              className="p-6 bg-zinc-900 border border-white/5 rounded-3xl flex flex-col lg:flex-row lg:items-center justify-between gap-6"
            >
              <div className="flex items-center space-x-6">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <div className="flex items-center space-x-2 mb-1">
                    <h3 className="text-lg font-bold">{service?.title}</h3>
                    <span className="text-gray-600">•</span>
                    <span className="text-sm text-gray-400 font-medium">{customer?.name}</span>
                  </div>
                  <div className="flex items-center space-x-4 text-xs text-gray-500 font-bold uppercase tracking-widest">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{app.date} {text.at} {app.time}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <User className="w-3 h-3" />
                      <span>{text.id}: {app.id}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between lg:justify-end gap-6">
                <div className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-[10px] font-bold uppercase tracking-widest border ${
                  app.status === "completed" 
                    ? "bg-green-500/10 text-green-500 border-green-500/20" 
                    : app.status === "pending"
                    ? "bg-blue-500/10 text-blue-500 border-blue-500/20"
                    : "bg-red-500/10 text-red-500 border-red-500/20"
                }`}>
                  {app.status === "completed" && <CheckCircle2 className="w-3 h-3" />}
                  {app.status === "pending" && <AlertCircle className="w-3 h-3" />}
                  {app.status === "canceled" && <XCircle className="w-3 h-3" />}
                  <span>{statusLabels[app.status]}</span>
                </div>
                
                <div className="flex items-center space-x-2">
                  <button className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all">
                    {text.reschedule}
                  </button>
                  <button className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all">
                    {text.cancel}
                  </button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
