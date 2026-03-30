import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import MechanicDemo from './demos/mecanica/MechanicDemo';
import RestaurantDemo from './demos/restaurante/RestaurantDemo';
import ClinicDemo from './demos/clinica/ClinicDemo';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans">
        <Routes>
          {/* Main Portfolio Routes */}
          <Route path="/" element={<><Navbar /><Home /><Footer /></>} />
          <Route path="/portfolio" element={<><Navbar /><Portfolio /><Footer /></>} />
          <Route path="/contato" element={<><Navbar /><Contact /><Footer /></>} />

          {/* Demo Routes - These usually have their own nav/footer */}
          <Route path="/demo/mecanica" element={<MechanicDemo />} />
          <Route path="/demo/restaurante" element={<RestaurantDemo />} />
          <Route path="/demo/clinica" element={<ClinicDemo />} />
        </Routes>
      </div>
    </Router>
  );
}
