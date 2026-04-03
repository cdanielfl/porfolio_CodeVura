import { useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Navbar, Footer } from './src/demo/components/Layout';
import { Home } from './src/demo/pages/Home';
import { Marketplace } from './src/demo/pages/Marketplace';
import { ProductDetails } from './src/demo/pages/ProductDetails';
import { Categories } from './src/demo/pages/Categories';
import { About } from './src/demo/pages/About';
import { Contact } from './src/demo/pages/Contact';
import { Wholesale } from './src/demo/pages/Wholesale';
import { Cart } from './src/demo/pages/Cart';
import { Checkout } from './src/demo/pages/Checkout';
import { Standards } from './src/demo/pages/Standards';
import { Login } from './src/demo/pages/Login';
import { Register } from './src/demo/pages/Register';
import { CartProvider } from './src/demo/context/CartContext';
import { routes } from '../../routes';
import { resolveDemoLanguage, syncDemoLanguage } from '../../utils/demoLanguage';
import DemoFeatureGuide from '../../components/DemoFeatureGuide';
import './src/index.css';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default function MarketplaceDemo() {
  const navigate = useNavigate();
  const location = useLocation();
  const lang = resolveDemoLanguage(location.search);

  useEffect(() => {
    void syncDemoLanguage(location.search);
  }, [location.search]);

  const handleBack = () => {
    navigate(routes[lang].portfolio);
  };

  return (
    <CartProvider>
      <div className="marketplace-demo demo-mobile-root min-h-screen">
      <div className="fixed top-0 left-0 z-[100] flex w-full items-center justify-between bg-rose-900 px-4 py-1 text-center text-xs font-bold text-white">
        <span>{lang === 'pt' ? 'DEMO: MARKETPLACE INDUSTRIAL' : 'DEMO: INDUSTRIAL MARKETPLACE'}</span>
        <button onClick={handleBack} className="inline-flex items-center gap-1 underline hover:no-underline">
          <ArrowLeft className="h-3.5 w-3.5" />
          {lang === 'pt' ? 'Voltar' : 'Back'}
        </button>
      </div>

      <ScrollToTop />
      <div className="flex min-h-screen flex-col pt-6">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route index element={<Home />} />
            <Route path="marketplace" element={<Marketplace />} />
            <Route path="product/:id" element={<ProductDetails />} />
            <Route path="categories" element={<Categories />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="wholesale" element={<Wholesale />} />
            <Route path="cart" element={<Cart />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="standards" element={<Standards />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Routes>
        </main>
        <Footer />
      </div>

      <DemoFeatureGuide
        content={{
          pt: {
            label: 'Guia da Demo',
            title: 'Funcionalidades da Demo de Marketplace',
            items: [
              'Comece em "Marketplace" para navegar no catalogo B2B.',
              'Abra um produto para testar detalhes e adicao ao carrinho.',
              'Finalize um pedido no fluxo visual de checkout.',
              'Use "Login/Register" para simular o inicio da jornada autenticada.',
            ],
          },
          en: {
            label: 'Demo Guide',
            title: 'Marketplace Demo Features',
            items: [
              'Start in "Marketplace" to navigate the B2B catalog.',
              'Open a product page to test details and cart actions.',
              'Complete an order in the visual checkout flow.',
              'Use "Login/Register" to simulate authenticated entry points.',
            ],
          },
        }}
      />
      </div>
    </CartProvider>
  );
}
