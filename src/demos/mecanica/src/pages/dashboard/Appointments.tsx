import React from "react";
import { motion } from "motion/react";
import { Calendar, Clock, MapPin, MoreVertical, ChevronRight } from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import { MOCK_APPOINTMENTS, SERVICES, localizeServices } from "../../data/mockData";
import { useLocation } from "react-router-dom";
import { resolveDemoLanguage } from "../../../../../utils/demoLanguage";

export const Appointments: React.FC = () => {
  const { user } = useAuth();
  const location = useLocation();
  const lang = resolveDemoLanguage(location.search);
  const services = localizeServices(SERVICES, lang);
  const text =
    lang === "pt"
      ? {
          title: "Meus atendimentos",
          subtitle: "Gerencie e acompanhe seu historico de servicos.",
          newAppointment: "Novo agendamento",
          at: "as",
          center: "Unidade principal",
          noAppointments: "Nenhum atendimento ainda",
          noAppointmentsSub: "Agende seu primeiro servico para ver o historico aqui.",
          statusPending: "pendente",
          statusCompleted: "concluido",
          statusCanceled: "cancelado",
        }
      : {
          title: "My Appointments",
          subtitle: "Manage and track your vehicle service history.",
          newAppointment: "New Appointment",
          at: "at",
          center: "Main Service Center",
          noAppointments: "No appointments yet",
          noAppointmentsSub: "Schedule your first service to see it here.",
          statusPending: "pending",
          statusCompleted: "completed",
          statusCanceled: "canceled",
        };

  const getStatusLabel = (status: "pending" | "completed" | "canceled") => {
    if (status === "pending") return text.statusPending;
    if (status === "completed") return text.statusCompleted;
    return text.statusCanceled;
  };
  const userAppointments = MOCK_APPOINTMENTS.filter(a => a.userId === user?.id);

  return (
    <div className="space-y-8">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black tracking-tighter mb-2 uppercase">{text.title}</h1>
          <p className="text-gray-500 font-medium">{text.subtitle}</p>
        </div>
        <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all">
          {text.newAppointment}
        </button>
      </header>

      <div className="space-y-4">
        {userAppointments.map((app, i) => {
          const service = services.find((s) => s.id === app.serviceId);
          return (
            <motion.div
              key={app.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group p-6 bg-zinc-900 border border-white/5 rounded-3xl hover:border-white/10 transition-all flex flex-col md:flex-row md:items-center justify-between gap-6"
            >
              <div className="flex items-center space-x-6">
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-blue-600/10 transition-colors">
                  <Calendar className="w-8 h-8 text-gray-400 group-hover:text-blue-500 transition-colors" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">{service?.title}</h3>
                  <div className="flex flex-wrap gap-4 text-xs text-gray-500 font-medium">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{app.date} {text.at} {app.time}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-3 h-3" />
                      <span>{text.center}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between md:justify-end gap-6">
                <div className={`text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full ${
                  app.status === "completed" 
                    ? "bg-green-500/10 text-green-500 border border-green-500/20" 
                    : app.status === "pending"
                    ? "bg-blue-500/10 text-blue-500 border border-blue-500/20"
                    : "bg-red-500/10 text-red-500 border border-red-500/20"
                }`}>
                  {getStatusLabel(app.status)}
                </div>
                <div className="flex items-center space-x-2">
                  <button className="p-2 text-gray-500 hover:text-white hover:bg-white/5 rounded-lg transition-all">
                    <MoreVertical className="w-5 h-5" />
                  </button>
                  <button className="p-2 text-gray-500 hover:text-blue-500 hover:bg-blue-500/10 rounded-lg transition-all">
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          );
        })}

        {userAppointments.length === 0 && (
          <div className="text-center py-20 bg-zinc-900/50 border border-dashed border-white/10 rounded-[3rem]">
            <Calendar className="w-12 h-12 text-gray-600 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-gray-400">{text.noAppointments}</h3>
            <p className="text-sm text-gray-600 mt-2">{text.noAppointmentsSub}</p>
          </div>
        )}
      </div>
    </div>
  );
};
