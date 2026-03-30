/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Navbar, Footer } from './demo/components/Layout';
import { Home } from './demo/pages/Home';
import { Marketplace } from './demo/pages/Marketplace';
import { ProductDetails } from './demo/pages/ProductDetails';
import { Categories } from './demo/pages/Categories';
import { About } from './demo/pages/About';
import { Contact } from './demo/pages/Contact';
import { Wholesale } from './demo/pages/Wholesale';
import { Cart } from './demo/pages/Cart';
import { Standards } from './demo/pages/Standards';
import { Login } from './demo/pages/Login';
import { Register } from './demo/pages/Register';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/wholesale" element={<Wholesale />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/standards" element={<Standards />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
