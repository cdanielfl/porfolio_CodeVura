import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";

export const MainLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-blue-500/30">
      <Navbar />
      <main className="pt-16">
        <Outlet />
      </main>
      <footer className="bg-zinc-950 border-t border-white/5 py-12 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold tracking-tighter">APEX<span className="text-blue-500">AUTO</span></h3>
            <p className="text-sm text-gray-400 max-w-xs">
              Premium automotive care for the modern driver. Fast, reliable, and professional services in the heart of the USA.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Diagnostics</li>
              <li>Engine Repair</li>
              <li>Brake Service</li>
              <li>Oil Changes</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>About Us</li>
              <li>Careers</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>123 Mechanic Way</li>
              <li>Detroit, MI 48201</li>
              <li>(555) 123-4567</li>
              <li>support@apexauto.com</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/5 text-center text-xs text-gray-500">
          © 2024 Apex Auto Services. All rights reserved.
        </div>
      </footer>
    </div>
  );
};
