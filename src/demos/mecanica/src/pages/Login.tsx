import React, { useState } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { motion } from "motion/react";
import { Car, Mail, Phone, ArrowRight, ArrowLeft } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { mech } from "../lib/paths";
import { resolveDemoLanguage } from "../../../../utils/demoLanguage";

export const Login: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [role, setRole] = useState<"customer" | "admin">("customer");
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const lang = resolveDemoLanguage(location.search);
  const text = lang === "pt"
    ? {
        back: "Voltar para a home",
        welcome: "BEM-VINDO DE VOLTA",
        create: "CRIAR CONTA",
        welcomeSubtitle: "Acesse seu painel automotivo",
        createSubtitle: "Entre para a comunidade Apex Auto",
        fullName: "Nome completo",
        email: "Email",
        phone: "Telefone",
        accessRole: "Perfil de acesso",
        customer: "Cliente",
        admin: "Admin",
        signIn: "Entrar",
        createAccount: "Criar conta",
        noAccount: "Nao tem conta? Cadastre-se",
        hasAccount: "Ja tem conta? Entrar",
        credentials: "Credenciais demo: use qualquer email e escolha o perfil.",
      }
    : {
        back: "Back to demo home",
        welcome: "WELCOME BACK",
        create: "CREATE ACCOUNT",
        welcomeSubtitle: "Access your automotive dashboard",
        createSubtitle: "Join the Apex Auto community",
        fullName: "Full Name",
        email: "Email Address",
        phone: "Phone Number",
        accessRole: "Access Role",
        customer: "Customer",
        admin: "Admin",
        signIn: "Sign In",
        createAccount: "Create Account",
        noAccount: "Don't have an account? Sign Up",
        hasAccount: "Already have an account? Sign In",
        credentials: "Demo Credentials: Use any email. Select role to switch views.",
      };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(email || "john@example.com", role);
    navigate(role === "admin" ? mech("admin") : mech("dashboard"));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4 py-12">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px]" />
      </div>

      <Link
        to={mech()}
        className="absolute left-4 top-10 z-20 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-widest text-white transition-colors hover:bg-white/10"
      >
        <ArrowLeft className="h-4 w-4" />
        {text.back}
      </Link>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative z-10 w-full max-w-md bg-zinc-900/50 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 md:p-12 shadow-2xl"
      >
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600/10 rounded-2xl mb-6">
            <Car className="w-8 h-8 text-blue-500" />
          </div>
          <h2 className="text-3xl font-black tracking-tighter mb-2">
            {isLogin ? text.welcome : text.create}
          </h2>
          <p className="text-gray-500 text-sm">
            {isLogin ? text.welcomeSubtitle : text.createSubtitle}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {!isLogin && (
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">{text.fullName}</label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-12 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-blue-500 transition-colors"
                />
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-600" />
              </div>
            </div>
          )}

          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">{text.email}</label>
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-12 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-blue-500 transition-colors"
                required
              />
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-600" />
            </div>
          </div>

          {!isLogin && (
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">{text.phone}</label>
              <div className="relative">
                <input
                  type="tel"
                  placeholder="(555) 000-0000"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-12 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-blue-500 transition-colors"
                />
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-600" />
              </div>
            </div>
          )}

          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">{text.accessRole}</label>
            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => setRole("customer")}
                className={`py-3 rounded-xl text-sm font-bold border transition-all ${
                  role === "customer" 
                    ? "bg-blue-600 border-blue-600 text-white" 
                    : "bg-white/5 border-white/10 text-gray-500 hover:border-white/20"
                }`}
              >
                {text.customer}
              </button>
              <button
                type="button"
                onClick={() => setRole("admin")}
                className={`py-3 rounded-xl text-sm font-bold border transition-all ${
                  role === "admin" 
                    ? "bg-blue-600 border-blue-600 text-white" 
                    : "bg-white/5 border-white/10 text-gray-500 hover:border-white/20"
                }`}
              >
                {text.admin}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-2xl transition-all shadow-lg shadow-blue-600/20 flex items-center justify-center space-x-2"
          >
            <span>{isLogin ? text.signIn : text.createAccount}</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </form>

        <div className="mt-8 text-center">
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-sm text-gray-500 hover:text-blue-500 transition-colors"
          >
            {isLogin ? text.noAccount : text.hasAccount}
          </button>
        </div>

        <div className="mt-8 pt-8 border-t border-white/5">
          <p className="text-[10px] text-gray-600 uppercase tracking-widest text-center">
            {text.credentials}
          </p>
        </div>
      </motion.div>
    </div>
  );
};
