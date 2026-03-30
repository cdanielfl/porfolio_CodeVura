import React from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  LayoutDashboard, 
  Calendar, 
  PhoneCall, 
  History, 
  Settings, 
  Users, 
  Wrench,
  LogOut,
  ChevronRight
} from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { cn } from "../lib/utils";
import { mech } from "../lib/paths";

interface SidebarProps {
  type: "customer" | "admin";
}

export const Sidebar: React.FC<SidebarProps> = ({ type }) => {
  const location = useLocation();
  const { logout } = useAuth();

  const customerLinks = [
    { name: "Overview", path: mech("dashboard"), icon: LayoutDashboard },
    { name: "Schedule", path: mech("dashboard/schedule"), icon: Calendar },
    { name: "Emergency", path: mech("dashboard/emergency"), icon: PhoneCall },
    { name: "Appointments", path: mech("dashboard/appointments"), icon: History },
  ];

  const adminLinks = [
    { name: "Admin Home", path: mech("admin"), icon: LayoutDashboard },
    { name: "Services", path: mech("admin/services"), icon: Wrench },
    { name: "Customers", path: mech("admin/customers"), icon: Users },
    { name: "All Appointments", path: mech("admin/appointments"), icon: Calendar },
  ];

  const links = type === "admin" ? adminLinks : customerLinks;

  return (
    <aside className="w-64 bg-zinc-950 border-r border-white/5 flex flex-col h-[calc(100vh-1.5rem)] fixed left-0 top-6 pt-20">
      <div className="flex-1 px-4 space-y-2">
        {links.map((link) => {
          const isActive = location.pathname === link.path;
          return (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                "flex items-center justify-between px-4 py-3 rounded-xl transition-all group",
                isActive 
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20" 
                  : "text-gray-400 hover:bg-white/5 hover:text-white"
              )}
            >
              <div className="flex items-center space-x-3">
                <link.icon className={cn("w-5 h-5", isActive ? "text-white" : "text-gray-500 group-hover:text-blue-500")} />
                <span className="text-sm font-medium">{link.name}</span>
              </div>
              {isActive && <ChevronRight className="w-4 h-4" />}
            </Link>
          );
        })}
      </div>

      <div className="p-4 border-t border-white/5">
        <button
          onClick={logout}
          className="flex items-center space-x-3 w-full px-4 py-3 text-gray-400 hover:text-red-500 hover:bg-red-500/10 rounded-xl transition-all"
        >
          <LogOut className="w-5 h-5" />
          <span className="text-sm font-medium">Logout</span>
        </button>
      </div>
    </aside>
  );
};
