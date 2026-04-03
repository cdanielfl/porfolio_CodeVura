import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { resolveDemoLanguage } from "../../../../utils/demoLanguage";

export const MainLayout: React.FC = () => {
  const location = useLocation();
  const lang = resolveDemoLanguage(location.search);
  const text =
    lang === "pt"
      ? {
          description:
            "Cuidado automotivo premium para o motorista moderno. Servicos rapidos, confiaveis e profissionais.",
          services: "Servicos",
          diagnostics: "Diagnostico",
          engineRepair: "Reparo de motor",
          brakeService: "Freios",
          oilChanges: "Troca de oleo",
          company: "Empresa",
          aboutUs: "Sobre nos",
          careers: "Carreiras",
          privacyPolicy: "Politica de privacidade",
          termsOfService: "Termos de servico",
          contact: "Contato",
          rights: "Todos os direitos reservados.",
        }
      : {
          description:
            "Premium automotive care for the modern driver. Fast, reliable, and professional services in the heart of the USA.",
          services: "Services",
          diagnostics: "Diagnostics",
          engineRepair: "Engine Repair",
          brakeService: "Brake Service",
          oilChanges: "Oil Changes",
          company: "Company",
          aboutUs: "About Us",
          careers: "Careers",
          privacyPolicy: "Privacy Policy",
          termsOfService: "Terms of Service",
          contact: "Contact",
          rights: "All rights reserved.",
        };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-blue-500/30">
      <Navbar />
      <main className="pt-16">
        <Outlet />
      </main>
      <footer className="bg-zinc-950 border-t border-white/5 py-12 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold tracking-tighter">
              APEX<span className="text-blue-500">AUTO</span>
            </h3>
            <p className="text-sm text-gray-400 max-w-xs">{text.description}</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">{text.services}</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>{text.diagnostics}</li>
              <li>{text.engineRepair}</li>
              <li>{text.brakeService}</li>
              <li>{text.oilChanges}</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">{text.company}</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>{text.aboutUs}</li>
              <li>{text.careers}</li>
              <li>{text.privacyPolicy}</li>
              <li>{text.termsOfService}</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">{text.contact}</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>123 Mechanic Way</li>
              <li>Detroit, MI 48201</li>
              <li>(555) 123-4567</li>
              <li>support@apexauto.com</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/5 text-center text-xs text-gray-500">
          © 2024 Apex Auto Services. {text.rights}
        </div>
      </footer>
    </div>
  );
};

