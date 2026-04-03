import React, { useState } from "react";
import { motion } from "motion/react";
import { Search, User, Mail, Phone, MoreVertical, Shield } from "lucide-react";
import { useLocation } from "react-router-dom";
import { MOCK_USERS } from "../../data/mockData";
import { resolveDemoLanguage } from "../../../../../utils/demoLanguage";

export const AdminCustomers: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const location = useLocation();
  const lang = resolveDemoLanguage(location.search);
  const text =
    lang === "pt"
      ? {
          title: "Gestao de clientes",
          subtitle: "Visualize e gerencie usuarios cadastrados e seus perfis.",
          search: "Buscar clientes por nome ou email...",
          customer: "Cliente",
          contact: "Contato",
          role: "Perfil",
          actions: "Acoes",
          admin: "admin",
          customerRole: "cliente",
        }
      : {
          title: "Customer Management",
          subtitle: "View and manage registered users and their profiles.",
          search: "Search customers by name or email...",
          customer: "Customer",
          contact: "Contact",
          role: "Role",
          actions: "Actions",
          admin: "admin",
          customerRole: "customer",
        };

  const filteredUsers = MOCK_USERS.filter(u => 
    u.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    u.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-3xl font-black tracking-tighter mb-2 uppercase">{text.title}</h1>
        <p className="text-gray-500 font-medium">{text.subtitle}</p>
      </header>

      <div className="relative">
        <input
          type="text"
          placeholder={text.search}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full bg-zinc-900 border border-white/5 rounded-2xl px-12 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-blue-500 transition-colors"
        />
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-600" />
      </div>

      <div className="bg-zinc-900 border border-white/5 rounded-[2.5rem] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-white/5">
                <th className="px-8 py-6 text-[10px] font-bold text-gray-500 uppercase tracking-widest">{text.customer}</th>
                <th className="px-8 py-6 text-[10px] font-bold text-gray-500 uppercase tracking-widest">{text.contact}</th>
                <th className="px-8 py-6 text-[10px] font-bold text-gray-500 uppercase tracking-widest">{text.role}</th>
                <th className="px-8 py-6 text-[10px] font-bold text-gray-500 uppercase tracking-widest text-right">{text.actions}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {filteredUsers.map((u, i) => (
                <motion.tr
                  key={u.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                  className="group hover:bg-white/[0.02] transition-colors"
                >
                  <td className="px-8 py-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-blue-500/10 rounded-full flex items-center justify-center">
                        <User className="w-5 h-5 text-blue-500" />
                      </div>
                      <div className="font-bold">{u.name}</div>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2 text-xs text-gray-400">
                        <Mail className="w-3 h-3" />
                        <span>{u.email}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-xs text-gray-400">
                        <Phone className="w-3 h-3" />
                        <span>{u.phone}</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <div className={`inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${
                      u.role === "admin" ? "bg-purple-500/10 text-purple-500" : "bg-blue-500/10 text-blue-500"
                    }`}>
                      {u.role === "admin" && <Shield className="w-3 h-3" />}
                      <span>{u.role === "admin" ? text.admin : text.customerRole}</span>
                    </div>
                  </td>
                  <td className="px-8 py-6 text-right">
                    <button className="p-2 text-gray-500 hover:text-white transition-colors">
                      <MoreVertical className="w-5 h-5" />
                    </button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
