import React from "react";
import { motion } from "motion/react";
import { Users, Calendar, PhoneCall, TrendingUp, DollarSign, Activity } from "lucide-react";
import { useLocation } from "react-router-dom";
import { MOCK_USERS, MOCK_APPOINTMENTS } from "../../data/mockData";
import { resolveDemoLanguage } from "../../../../../utils/demoLanguage";

export const AdminHome: React.FC = () => {
  const location = useLocation();
  const lang = resolveDemoLanguage(location.search);
  const text =
    lang === "pt"
      ? {
          title: "Painel administrativo",
          subtitle: "Visao em tempo real das operacoes da Apex Auto.",
          totalCustomers: "Total de clientes",
          activeAppointments: "Agendamentos ativos",
          revenue: "Receita (mes)",
          emergencyCalls: "Chamadas de emergencia",
          revenuePerformance: "Desempenho de receita",
          last30: "Ultimos 30 dias",
          last6: "Ultimos 6 meses",
          systemHealth: "Saude do sistema",
          server: "Status do servidor",
          database: "Banco de dados",
          latency: "Latencia da API",
          sessions: "Sessoes ativas",
          operational: "Operacional",
          healthy: "Saudavel",
          recentLogs: "Logs recentes",
          log1: "Novo usuario cadastrado: sarah@example.com",
          log2: "Agendamento #425 confirmado",
          log3: "Unidade de emergencia #4 despachada",
        }
      : {
          title: "Admin Dashboard",
          subtitle: "Real-time overview of Apex Auto operations.",
          totalCustomers: "Total Customers",
          activeAppointments: "Active Appointments",
          revenue: "Revenue (MTD)",
          emergencyCalls: "Emergency Calls",
          revenuePerformance: "Revenue Performance",
          last30: "Last 30 Days",
          last6: "Last 6 Months",
          systemHealth: "System Health",
          server: "Server Status",
          database: "Database",
          latency: "API Latency",
          sessions: "Active Sessions",
          operational: "Operational",
          healthy: "Healthy",
          recentLogs: "Recent Logs",
          log1: "New user registered: sarah@example.com",
          log2: "Appointment #425 confirmed",
          log3: "Emergency unit #4 dispatched",
        };

  const stats = [
    { label: text.totalCustomers, value: MOCK_USERS.length, icon: Users, color: "text-blue-500", bg: "bg-blue-500/10" },
    { label: text.activeAppointments, value: MOCK_APPOINTMENTS.filter(a => a.status === "pending").length, icon: Calendar, color: "text-green-500", bg: "bg-green-500/10" },
    { label: text.revenue, value: "$42,500", icon: DollarSign, color: "text-purple-500", bg: "bg-purple-500/10" },
    { label: text.emergencyCalls, value: "12", icon: PhoneCall, color: "text-red-500", bg: "bg-red-500/10" },
  ];

  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-3xl font-black tracking-tighter mb-2 uppercase">{text.title}</h1>
        <p className="text-gray-500 font-medium">{text.subtitle}</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="p-6 bg-zinc-900 border border-white/5 rounded-3xl"
          >
            <div className={`w-10 h-10 ${stat.bg} rounded-xl flex items-center justify-center mb-4`}>
              <stat.icon className={`w-5 h-5 ${stat.color}`} />
            </div>
            <div className="text-2xl font-black mb-1">{stat.value}</div>
            <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{stat.label}</div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Revenue Chart Simulation */}
        <div className="lg:col-span-2 p-6 md:p-8 bg-zinc-900 border border-white/5 rounded-[2.5rem] space-y-6 overflow-hidden">
          <div className="flex items-center justify-between">
            <h2 className="text-lg md:text-xl font-bold flex items-center space-x-2">
              <TrendingUp className="w-5 h-5 text-blue-500" />
              <span>{text.revenuePerformance}</span>
            </h2>
            <select className="bg-white/5 border border-white/10 rounded-lg px-2 py-1 text-[10px] text-gray-400">
              <option>{text.last30}</option>
              <option>{text.last6}</option>
            </select>
          </div>
          <div className="h-48 md:h-64 flex items-end justify-between gap-1 md:gap-2 pt-4 overflow-x-auto pb-2 scrollbar-hide">
            {[40, 60, 45, 80, 55, 90, 70, 85, 60, 75, 95, 100].map((h, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{ delay: i * 0.05, duration: 1 }}
                className="min-w-[12px] md:min-w-0 flex-1 bg-blue-600/20 hover:bg-blue-600 rounded-t-lg transition-colors relative group"
              >
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-black text-[8px] md:text-[10px] font-bold px-1 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  ${h}k
                </div>
              </motion.div>
            ))}
          </div>
          <div className="flex justify-between text-[10px] text-gray-600 font-bold uppercase tracking-widest">
            <span>Jan</span>
            <span>Jun</span>
            <span>Dec</span>
          </div>
        </div>

        {/* System Health */}
        <div className="p-8 bg-zinc-900 border border-white/5 rounded-[2.5rem] space-y-6">
          <h2 className="text-xl font-bold flex items-center space-x-2">
            <Activity className="w-5 h-5 text-green-500" />
            <span>{text.systemHealth}</span>
          </h2>
          <div className="space-y-6">
            {[
              { label: text.server, status: text.operational, color: "text-green-500" },
              { label: text.database, status: text.healthy, color: "text-green-500" },
              { label: text.latency, status: "24ms", color: "text-blue-500" },
              { label: text.sessions, status: "142", color: "text-white" },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between">
                <span className="text-sm text-gray-500">{item.label}</span>
                <span className={`text-sm font-bold ${item.color}`}>{item.status}</span>
              </div>
            ))}
          </div>
          <div className="pt-6 border-t border-white/5">
            <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">{text.recentLogs}</div>
            <div className="space-y-3">
              {[
                text.log1,
                text.log2,
                text.log3,
              ].map((log, i) => (
                <div key={i} className="text-[10px] text-gray-600 font-mono flex items-center space-x-2">
                  <span className="text-blue-500">•</span>
                  <span>{log}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
