import { useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { DemoLayout } from './src/demo/DemoLayout';
import { Dashboard } from './src/demo/pages/Dashboard';
import { Orders } from './src/demo/pages/Orders';
import { Inventory } from './src/demo/pages/Inventory';
import { Customers } from './src/demo/pages/Customers';
import { Sales } from './src/demo/pages/Sales';
import { Workflow } from './src/demo/pages/Workflow';
import { Reports } from './src/demo/pages/Reports';
import { Settings } from './src/demo/pages/Settings';
import { Profile } from './src/demo/pages/Profile';
import { routes } from '../../routes';
import i18n from '../../i18n';
import DemoFeatureGuide from '../../components/DemoFeatureGuide';
import './src/index.css';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default function SaasDemo() {
  const navigate = useNavigate();

  const handleBack = () => {
    const lang = i18n.resolvedLanguage?.startsWith('en') ? 'en' : 'pt';
    navigate(routes[lang].portfolio);
  };

  return (
    <div className="saas-demo demo-mobile-root min-h-screen">
      <div className="fixed top-0 left-0 z-[100] flex w-full items-center justify-between bg-slate-800 px-4 py-1 text-center text-xs font-bold text-white">
        <span>DEMO: OPERATIONAL SAAS</span>
        <button onClick={handleBack} className="inline-flex items-center gap-1 underline hover:no-underline">
          <ArrowLeft className="h-3.5 w-3.5" />
          Back
        </button>
      </div>

      <ScrollToTop />
      <div className="pt-6">
        <Routes>
          <Route path="/" element={<DemoLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="orders" element={<Orders />} />
            <Route path="inventory" element={<Inventory />} />
            <Route path="customers" element={<Customers />} />
            <Route path="sales" element={<Sales />} />
            <Route path="tasks" element={<Workflow />} />
            <Route path="reports" element={<Reports />} />
            <Route path="settings" element={<Settings />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Routes>
      </div>

      <DemoFeatureGuide
        content={{
          pt: {
            label: 'Guia da Demo',
            title: 'Funcionalidades da Demo de SaaS',
            items: [
              'Entre por "Dashboard" para visão geral da operação.',
              'Navegue em "Orders", "Inventory" e "Customers" para rotinas do time.',
              'Use "Sales", "Tasks" e "Reports" para validar gestão orientada a dados.',
              'Finalize em "Settings" e "Profile" para ver o sistema completo.',
            ],
          },
          en: {
            label: 'Demo Guide',
            title: 'Operational SaaS Demo Features',
            items: [
              'Start on "Dashboard" for a high-level operations overview.',
              'Navigate through "Orders", "Inventory", and "Customers" for daily workflows.',
              'Use "Sales", "Tasks", and "Reports" to validate data-driven operations.',
              'Finish on "Settings" and "Profile" for complete system coverage.',
            ],
          },
        }}
      />
    </div>
  );
}
