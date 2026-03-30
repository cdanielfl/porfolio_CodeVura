import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import MechanicDemo from './demos/mecanica/MechanicDemo';
import RestaurantDemo from './demos/restaurante/RestaurantDemo';
import ClinicDemo from './demos/clinica/ClinicDemo';
import MarketplaceDemo from './demos/marketplace/MarketplaceDemo';
import MainLayout from './components/MainLayout';
import ScrollToTop from './components/ScrollToTop';
import i18n from './i18n';

const getDefaultLanguagePath = () => {
  const lang = i18n.language?.startsWith('en') ? 'en' : 'pt';
  return `/${lang}`;
};

export default function App() {
  return (
    <Router>
      <ScrollToTop />
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
        <Route path="/demo/mecanica" element={<MechanicDemo />} />
        <Route path="/demo/restaurante" element={<RestaurantDemo />} />
        <Route path="/demo/clinica" element={<ClinicDemo />} />
        <Route path="/demo/marketplace/*" element={<MarketplaceDemo />} />

        <Route path="*" element={<Navigate to={getDefaultLanguagePath()} replace />} />
      </Routes>
    </Router>
  );
}
