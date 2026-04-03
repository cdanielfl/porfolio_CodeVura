import React from "react";
import { Outlet, Navigate, Link, useLocation } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";
import { Navbar } from "../components/Navbar";
import { useAuth } from "../context/AuthContext";
import { LayoutDashboard, Calendar, PhoneCall, History, Users, Wrench } from "lucide-react";
import { cn } from "../lib/utils";
import { mech } from "../lib/paths";
import { resolveDemoLanguage } from "../../../../utils/demoLanguage";

interface DashboardLayoutProps {
  role: "customer" | "admin";
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({ role }) => {
  const { user, isAuthenticated } = useAuth();
  const location = useLocation();
  const lang = resolveDemoLanguage(location.search);
  const text =
    lang === "pt"
      ? {
          customerHome: "Inicio",
          customerBook: "Agendar",
          customerSos: "SOS",
          customerHistory: "Historico",
          adminHome: "Inicio",
          adminServices: "Servicos",
          adminUsers: "Usuarios",
          adminApps: "Agenda",
        }
      : {
          customerHome: "Home",
          customerBook: "Book",
          customerSos: "SOS",
          customerHistory: "History",
          adminHome: "Home",
          adminServices: "Services",
          adminUsers: "Users",
          adminApps: "Apps",
        };

  if (!isAuthenticated) {
    return <Navigate to={mech("login")} replace />;
  }

  if (user?.role !== role) {
    return <Navigate to={mech()} replace />;
  }

  const customerLinks = [
    { name: text.customerHome, path: mech("dashboard"), icon: LayoutDashboard },
    { name: text.customerBook, path: mech("dashboard/schedule"), icon: Calendar },
    { name: text.customerSos, path: mech("dashboard/emergency"), icon: PhoneCall },
    { name: text.customerHistory, path: mech("dashboard/appointments"), icon: History },
  ];

  const adminLinks = [
    { name: text.adminHome, path: mech("admin"), icon: LayoutDashboard },
    { name: text.adminServices, path: mech("admin/services"), icon: Wrench },
    { name: text.adminUsers, path: mech("admin/customers"), icon: Users },
    { name: text.adminApps, path: mech("admin/appointments"), icon: Calendar },
  ];

  const mobileLinks = role === "admin" ? adminLinks : customerLinks;

  return (
    <div className="min-h-screen bg-black text-white flex flex-col md:flex-row">
      <Navbar />
      
      {/* Desktop Sidebar */}
      <div className="hidden md:block">
        <Sidebar type={role} />
      </div>

      {/* Main Content */}
      <main className="flex-1 pt-16 pb-24 md:pb-0 md:pl-64 min-h-screen">
        <div className="p-4 md:p-8 max-w-6xl mx-auto">
          <Outlet />
        </div>
      </main>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-xl border-t border-white/5 px-2 py-3">
        <div className="flex items-center justify-around">
          {mobileLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "flex flex-col items-center space-y-1 px-3 py-1 rounded-xl transition-all",
                  isActive ? "text-blue-500" : "text-gray-500"
                )}
              >
                <link.icon className={cn("w-6 h-6", isActive && "animate-pulse")} />
                <span className="text-[10px] font-bold uppercase tracking-widest">{link.name}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
};
