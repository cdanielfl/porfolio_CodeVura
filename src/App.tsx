import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import ScrollToTop from './components/ScrollToTop';
import i18n from './i18n';

const Home = lazy(() => import('./pages/Home'));
const Portfolio = lazy(() => import('./pages/Portfolio'));
const Contact = lazy(() => import('./pages/Contact'));
const MechanicDemo = lazy(() => import('./demos/mecanica/MechanicDemo'));
const RestaurantDemo = lazy(() => import('./demos/restaurante/RestaurantDemo'));
const ClinicDemo = lazy(() => import('./demos/clinica/ClinicDemo'));
const MarketplaceDemo = lazy(() => import('./demos/marketplace/MarketplaceDemo'));
const SaasDemo = lazy(() => import('./demos/saas/SaasDemo'));
const CurateDemo = lazy(() => import('./demos/curate/CurateDemo'));

const getDefaultLanguagePath = () => {
  const lang = i18n.language?.startsWith('en') ? 'en' : 'pt';
  return `/${lang}`;
};

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Suspense fallback={<div className="flex min-h-screen items-center justify-center bg-[#05031a] text-sm text-slate-300">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Navigate to={getDefaultLanguagePath()} replace />} />

          <Route path="/pt" element={<MainLayout lang="pt" />}>
            <Route index element={<Home />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="contato" element={<Contact />} />
          </Route>

          <Route path="/en" element={<MainLayout lang="en" />}>
            <Route index element={<Home />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="contact" element={<Contact />} />
          </Route>

          {/* Demo Routes - These usually have their own nav/footer */}
          <Route path="/demo/mecanica/*" element={<MechanicDemo />} />
          <Route path="/demo/restaurante/*" element={<RestaurantDemo />} />
          <Route path="/demo/clinica/*" element={<ClinicDemo />} />
          <Route path="/demo/marketplace/*" element={<MarketplaceDemo />} />
          <Route path="/demo/saas/*" element={<SaasDemo />} />
          <Route path="/demo/curate/*" element={<CurateDemo />} />

          <Route path="*" element={<Navigate to={getDefaultLanguagePath()} replace />} />
        </Routes>
      </Suspense>
    </Router>
  );
}
