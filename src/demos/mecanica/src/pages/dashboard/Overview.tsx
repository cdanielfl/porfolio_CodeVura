import React from "react";
import { motion } from "motion/react";
import { Calendar, History, PhoneCall, ArrowRight, CheckCircle2, Clock, AlertCircle } from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import { MOCK_APPOINTMENTS, SERVICES } from "../../data/mockData";
import { Link } from "react-router-dom";
import { mech } from "../../lib/paths";

export const Overview: React.FC = () => {
  const { user } = useAuth();
  const userAppointments = MOCK_APPOINTMENTS.filter(a => a.userId === user?.id);
  const pendingCount = userAppointments.filter(a => a.status === "pending").length;
  const completedCount = userAppointments.filter(a => a.status === "completed").length;

  const stats = [
    { label: "Upcoming", value: pendingCount, icon: Clock, color: "text-blue-500", bg: "bg-blue-500/10" },
    { label: "Completed", value: completedCount, icon: CheckCircle2, color: "text-green-500", bg: "bg-green-500/10" },
    { label: "Total Services", value: userAppointments.length, icon: History, color: "text-purple-500", bg: "bg-purple-500/10" },
  ];

  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-3xl font-black tracking-tighter mb-2 uppercase">Welcome back, {user?.name}</h1>
        <p className="text-gray-500 font-medium">Your vehicle's health is our priority. Here's your overview.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="p-6 bg-zinc-900 border border-white/5 rounded-3xl"
          >
            <div className={`w-12 h-12 ${stat.bg} rounded-2xl flex items-center justify-center mb-4`}>
              <stat.icon className={`w-6 h-6 ${stat.color}`} />
            </div>
            <div className="text-3xl font-black mb-1">{stat.value}</div>
            <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">{stat.label}</div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Appointments */}
        <div className="p-8 bg-zinc-900 border border-white/5 rounded-[2.5rem] space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold">Recent Appointments</h2>
            <Link to={mech("dashboard/appointments")} className="text-sm text-blue-500 hover:underline flex items-center space-x-1">
              <span>View All</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="space-y-4">
            {userAppointments.length > 0 ? (
              userAppointments.map((app) => {
                const service = SERVICES.find(s => s.id === app.serviceId);
                return (
                  <div key={app.id} className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/5">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-blue-500/10 rounded-xl flex items-center justify-center">
                        <Calendar className="w-5 h-5 text-blue-500" />
                      </div>
                      <div>
                        <div className="font-bold text-sm">{service?.title}</div>
                        <div className="text-xs text-gray-500">{app.date} at {app.time}</div>
                      </div>
                    </div>
                    <div className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full ${
                      app.status === "completed" ? "bg-green-500/10 text-green-500" : "bg-blue-500/10 text-blue-500"
                    }`}>
                      {app.status}
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="text-center py-8 text-gray-500 text-sm">No recent appointments found.</div>
            )}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="p-8 bg-zinc-900 border border-white/5 rounded-[2.5rem] space-y-6">
          <h2 className="text-xl font-bold">Quick Actions</h2>
          <div className="grid grid-cols-1 gap-4">
            <Link
              to={mech("dashboard/schedule")}
              className="group p-6 bg-blue-600 hover:bg-blue-700 rounded-3xl transition-all flex items-center justify-between"
            >
              <div className="flex items-center space-x-4">
                <Calendar className="w-6 h-6 text-white" />
                <div>
                  <div className="font-bold">Schedule Service</div>
                  <div className="text-xs text-blue-100">Book your next maintenance</div>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              to={mech("dashboard/emergency")}
              className="group p-6 bg-red-600/10 hover:bg-red-600/20 border border-red-600/20 rounded-3xl transition-all flex items-center justify-between"
            >
              <div className="flex items-center space-x-4">
                <PhoneCall className="w-6 h-6 text-red-500" />
                <div>
                  <div className="font-bold text-red-500">Emergency Call</div>
                  <div className="text-xs text-red-400/60">Request immediate assistance</div>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-red-500 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="p-6 bg-white/5 rounded-3xl border border-white/5 flex items-start space-x-4">
            <AlertCircle className="w-6 h-6 text-yellow-500 shrink-0" />
            <div>
              <div className="font-bold text-sm">Maintenance Tip</div>
              <p className="text-xs text-gray-500 mt-1">Check your tire pressure monthly to ensure optimal fuel efficiency and safety on the road.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
