import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { PhoneCall, MapPin, ShieldAlert, Navigation, Loader2, CheckCircle2 } from "lucide-react";
import { useLocation } from "react-router-dom";
import { resolveDemoLanguage } from "../../../../../utils/demoLanguage";

export const Emergency: React.FC = () => {
  const [status, setStatus] = useState<"idle" | "requesting" | "dispatched">("idle");
  const location = useLocation();
  const lang = resolveDemoLanguage(location.search);
  const text =
    lang === "pt"
      ? {
          badge: "Assistencia 24/7",
          title: "Mecanico de emergencia",
          subtitle: "Parou na estrada? Nossa equipe movel esta pronta para atender.",
          request: "Solicitar assistencia",
          currentLocation: "Local atual",
          detecting: "Detectando via GPS...",
          vehicleInfo: "Informacoes do veiculo",
          requestDispatch: "Ou solicitar despacho digital",
          dispatching: "Despachando unidade...",
          locating: "Localizando unidade mais proxima...",
          dispatched: "Mecanico a caminho",
          next: "O que acontece agora?",
          step1: "Unidade atribuida",
          step1Desc: "A unidade mais proxima e acionada imediatamente.",
          step2: "Rastreamento em tempo real",
          step2Desc: "Voce recebe um link para acompanhar a chegada.",
          step3: "Reparo no local",
          step3Desc: "A maioria dos casos e resolvida no local em ate 45 minutos.",
          safety: "Seguranca em primeiro lugar",
          safetyDesc: "Se estiver em rodovia, fique no carro com o pisca-alerta ligado ate a chegada da equipe.",
          emergencyLine: "Linha de emergencia",
        }
      : {
          badge: "24/7 Roadside Assistance",
          title: "Emergency Mechanic",
          subtitle: "Stuck on the road? Our mobile units are ready to deploy. Average response time is 25 minutes.",
          request: "Request Assistance",
          currentLocation: "Current Location",
          detecting: "Detecting via GPS...",
          vehicleInfo: "Vehicle Info",
          requestDispatch: "Or request digital dispatch",
          dispatching: "Dispatching unit...",
          locating: "Locating nearest unit...",
          dispatched: "Mechanic Dispatched",
          next: "What happens next?",
          step1: "Unit Assigned",
          step1Desc: "The nearest mobile mechanic is notified immediately.",
          step2: "Real-time Tracking",
          step2Desc: "You'll receive a link to track the mechanic's location.",
          step3: "On-site Repair",
          step3Desc: "Most issues are resolved on the spot within 45 minutes.",
          safety: "Safety First",
          safetyDesc: "If you are on a highway, please stay inside your vehicle with hazard lights on until our unit arrives.",
          emergencyLine: "Emergency Line",
        };

  const handleRequest = () => {
    setStatus("requesting");
    setTimeout(() => {
      setStatus("dispatched");
    }, 3000);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <header className="text-center">
        <div className="inline-flex items-center space-x-2 text-red-500 font-bold mb-4">
          <ShieldAlert className="w-6 h-6" />
          <span className="uppercase tracking-widest text-sm">{text.badge}</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-4 uppercase">{text.title}</h1>
        <p className="text-gray-500 font-medium max-w-xl mx-auto">
          {text.subtitle}
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Request Card */}
        <div className="bg-zinc-900 border border-white/5 rounded-[3rem] p-8 md:p-12 shadow-2xl flex flex-col justify-between">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">{text.request}</h2>
            <div className="space-y-4">
              <div className="p-4 bg-white/5 rounded-2xl border border-white/5 flex items-center space-x-4">
                <MapPin className="w-5 h-5 text-blue-500" />
                <div className="text-sm">
                  <div className="text-gray-500 text-xs uppercase font-bold tracking-widest">{text.currentLocation}</div>
                  <div className="font-bold">{text.detecting}</div>
                </div>
              </div>
              <div className="p-4 bg-white/5 rounded-2xl border border-white/5 flex items-center space-x-4">
                <Navigation className="w-5 h-5 text-blue-500" />
                <div className="text-sm">
                  <div className="text-gray-500 text-xs uppercase font-bold tracking-widest">{text.vehicleInfo}</div>
                  <div className="font-bold">2022 Tesla Model 3 (Gray)</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 space-y-4">
            <a
              href="tel:5551234567"
              className="w-full h-24 bg-red-600 hover:bg-red-700 text-white rounded-[2rem] flex items-center justify-center space-x-4 shadow-2xl shadow-red-600/20 transition-all group"
            >
              <PhoneCall className="w-8 h-8 group-hover:scale-110 transition-transform" />
              <span className="text-2xl font-black uppercase tracking-tighter">(555) 123-4567</span>
            </a>
            <button
              onClick={handleRequest}
              className="w-full py-4 text-gray-500 hover:text-white text-xs font-bold uppercase tracking-widest transition-colors"
            >
              {status === "idle" ? text.requestDispatch : text.dispatching}
            </button>

            <AnimatePresence>
              {status === "requesting" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center justify-center space-x-2 text-blue-500"
                >
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span className="text-xs font-bold uppercase">{text.locating}</span>
                </motion.div>
              )}
              {status === "dispatched" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center justify-center space-x-2 text-green-500"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase">{text.dispatched}</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Info Card */}
        <div className="space-y-6">
          <div className="p-8 bg-zinc-900 border border-white/5 rounded-[2.5rem] space-y-4">
            <h3 className="font-bold text-lg">{text.next}</h3>
            <ul className="space-y-4">
              {[
                { title: text.step1, desc: text.step1Desc },
                { title: text.step2, desc: text.step2Desc },
                { title: text.step3, desc: text.step3Desc },
              ].map((item, i) => (
                <li key={i} className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-blue-500/10 rounded-full flex items-center justify-center text-blue-500 text-xs font-bold shrink-0">
                    {i + 1}
                  </div>
                  <div>
                    <div className="font-bold text-sm">{item.title}</div>
                    <div className="text-xs text-gray-500">{item.desc}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-8 bg-blue-600 rounded-[2.5rem] text-white space-y-4">
            <h3 className="font-bold text-lg">{text.safety}</h3>
            <p className="text-sm text-blue-100">
              {text.safetyDesc}
            </p>
            <div className="pt-4 border-t border-white/20 flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-widest opacity-60">{text.emergencyLine}</span>
              <span className="font-black text-xl">911-APEX-AUTO</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
