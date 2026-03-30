import React from "react";
import { motion } from "motion/react";
import { Users, Calendar, PhoneCall, TrendingUp, DollarSign, Activity } from "lucide-react";
import { MOCK_USERS, MOCK_APPOINTMENTS } from "../../data/mockData";

export const AdminHome: React.FC = () => {
  const stats = [
    { label: "Total Customers", value: MOCK_USERS.length, icon: Users, color: "text-blue-500", bg: "bg-blue-500/10" },
    { label: "Active Appointments", value: MOCK_APPOINTMENTS.filter(a => a.status === "pending").length, icon: Calendar, color: "text-green-500", bg: "bg-green-500/10" },
    { label: "Revenue (MTD)", value: "$42,500", icon: DollarSign, color: "text-purple-500", bg: "bg-purple-500/10" },
    { label: "Emergency Calls", value: "12", icon: PhoneCall, color: "text-red-500", bg: "bg-red-500/10" },
  ];

  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-3xl font-black tracking-tighter mb-2 uppercase">Admin Dashboard</h1>
        <p className="text-gray-500 font-medium">Real-time overview of Apex Auto operations.</p>
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
              <span>Revenue Performance</span>
            </h2>
            <select className="bg-white/5 border border-white/10 rounded-lg px-2 py-1 text-[10px] text-gray-400">
              <option>Last 30 Days</option>
              <option>Last 6 Months</option>
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
            <span>System Health</span>
          </h2>
          <div className="space-y-6">
            {[
              { label: "Server Status", status: "Operational", color: "text-green-500" },
              { label: "Database", status: "Healthy", color: "text-green-500" },
              { label: "API Latency", status: "24ms", color: "text-blue-500" },
              { label: "Active Sessions", status: "142", color: "text-white" },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between">
                <span className="text-sm text-gray-500">{item.label}</span>
                <span className={`text-sm font-bold ${item.color}`}>{item.status}</span>
              </div>
            ))}
          </div>
          <div className="pt-6 border-t border-white/5">
            <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Recent Logs</div>
            <div className="space-y-3">
              {[
                "New user registered: sarah@example.com",
                "Appointment #425 confirmed",
                "Emergency unit #4 dispatched",
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
