import { useEffect } from "react";
import { Navigate, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { AuthProvider } from "./src/context/AuthContext";
import { MainLayout } from "./src/layouts/MainLayout";
import { DashboardLayout } from "./src/layouts/DashboardLayout";
import { Home } from "./src/pages/Home";
import { Login } from "./src/pages/Login";
import { Services } from "./src/pages/Services";
import { About } from "./src/pages/About";
import { Contact } from "./src/pages/Contact";
import { Overview } from "./src/pages/dashboard/Overview";
import { Schedule } from "./src/pages/dashboard/Schedule";
import { Emergency } from "./src/pages/dashboard/Emergency";
import { Appointments } from "./src/pages/dashboard/Appointments";
import { AdminHome } from "./src/pages/admin/AdminHome";
import { AdminServices } from "./src/pages/admin/AdminServices";
import { AdminCustomers } from "./src/pages/admin/AdminCustomers";
import { AdminAppointments } from "./src/pages/admin/AdminAppointments";
import { routes } from "../../routes";
import i18n from "../../i18n";
import DemoFeatureGuide from "../../components/DemoFeatureGuide";
import "./src/index.css";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default function MechanicDemo() {
  const navigate = useNavigate();

  const handleBack = () => {
    const lang = i18n.resolvedLanguage?.startsWith("en") ? "en" : "pt";
    navigate(routes[lang].portfolio);
  };

  return (
    <div className="mecanica-demo demo-mobile-root min-h-screen">
      <div className="fixed left-0 top-0 z-[100] flex w-full items-center justify-between bg-blue-700 px-4 py-1 text-center text-xs font-bold text-white">
        <span>DEMO: AUTO REPAIR WEBSITE</span>
        <button onClick={handleBack} className="inline-flex items-center gap-1 underline hover:no-underline">
          <ArrowLeft className="h-3.5 w-3.5" />
          Back
        </button>
      </div>

      <div className="pt-6">
        <AuthProvider>
          <ScrollToTop />
          <Routes>
            <Route element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path="services" element={<Services />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
            </Route>

            <Route path="login" element={<Login />} />

            <Route path="dashboard" element={<DashboardLayout role="customer" />}>
              <Route index element={<Overview />} />
              <Route path="schedule" element={<Schedule />} />
              <Route path="emergency" element={<Emergency />} />
              <Route path="appointments" element={<Appointments />} />
            </Route>

            <Route path="admin" element={<DashboardLayout role="admin" />}>
              <Route index element={<AdminHome />} />
              <Route path="services" element={<AdminServices />} />
              <Route path="customers" element={<AdminCustomers />} />
              <Route path="appointments" element={<AdminAppointments />} />
            </Route>

            <Route path="*" element={<Navigate to="." replace />} />
          </Routes>
        </AuthProvider>
      </div>

      <DemoFeatureGuide
        content={{
          pt: {
            label: 'Guia da Demo',
            title: 'Funcionalidades da Demo de Mecânica',
            items: [
              'Clique em "Sign In" para entrar no sistema de teste.',
              'Escolha "Customer" para ver agenda, emergências e histórico de atendimentos.',
              'Escolha "Admin" para acessar gestão de serviços, clientes e agendamentos.',
              'Volte para Home e teste também a jornada institucional e CTA de contato.',
            ],
          },
          en: {
            label: 'Demo Guide',
            title: 'Auto Repair Demo Features',
            items: [
              'Click "Sign In" to access the demo system.',
              'Choose "Customer" to explore schedule, emergency, and appointment history.',
              'Choose "Admin" to access service, customer, and appointment management.',
              'Go back to Home to review the institutional journey and lead CTA.',
            ],
          },
        }}
      />
    </div>
  );
}
