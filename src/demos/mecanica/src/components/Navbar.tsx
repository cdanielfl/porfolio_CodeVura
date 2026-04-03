import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Car, Menu, X, User, LogOut, Phone } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { motion, AnimatePresence } from "motion/react";
import { mech } from "../lib/paths";
import { resolveDemoLanguage } from "../../../../utils/demoLanguage";

export const Navbar: React.FC = () => {
  const { user, logout, isAuthenticated } = useAuth();
  const [isOpen, setIsOpen] = React.useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const lang = resolveDemoLanguage(location.search);
  const text = lang === "pt"
    ? {
        home: "Inicio",
        services: "Servicos",
        about: "Sobre",
        contact: "Contato",
        callMechanic: "Ligar para oficina",
        callNow: "Ligar agora",
        dashboard: "Painel",
        signIn: "Entrar",
        logout: "Sair",
      }
    : {
        home: "Home",
        services: "Services",
        about: "About",
        contact: "Contact",
        callMechanic: "Call Mechanic",
        callNow: "Call Mechanic Now",
        dashboard: "Dashboard",
        signIn: "Sign In",
        logout: "Logout",
      };

  const isDashboard =
    location.pathname.startsWith(mech("dashboard")) || location.pathname.startsWith(mech("admin"));

  const navLinks = [
    { name: text.home, path: mech() },
    { name: text.services, path: mech("services") },
    { name: text.about, path: mech("about") },
    { name: text.contact, path: mech("contact") },
  ];

  const handleNavClick = () => {
    setIsOpen(false);
  };

  const handleLogout = () => {
    logout();
    navigate(mech());
  };

  return (
    <nav className="fixed top-6 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 md:h-16">
          <Link to={mech()} className="flex items-center space-x-2 group">
            <Car className="w-6 h-6 md:w-8 md:h-8 text-blue-500 group-hover:scale-110 transition-transform" />
            <span className="text-lg md:text-xl font-bold tracking-tighter text-white">APEX<span className="text-blue-500">AUTO</span></span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={handleNavClick}
                className="text-sm font-medium text-gray-300 hover:text-blue-500 transition-colors"
              >
                {link.name}
              </Link>
            ))}
            
            <a
              href="tel:5551234567"
              className="flex items-center space-x-2 text-sm font-bold text-red-500 bg-red-500/10 hover:bg-red-500/20 px-4 py-2 rounded-full transition-all border border-red-500/20"
            >
              <Phone className="w-4 h-4" />
              <span>{text.callMechanic}</span>
            </a>
            
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <Link
                  to={user?.role === "admin" ? mech("admin") : mech("dashboard")}
                  className="flex items-center space-x-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-full transition-all"
                >
                  <User className="w-4 h-4" />
                  <span>{text.dashboard}</span>
                </Link>
                <button
                  onClick={handleLogout}
                  className="p-2 text-gray-400 hover:text-white transition-colors"
                >
                  <LogOut className="w-5 h-5" />
                </button>
              </div>
            ) : (
              <Link
                to={mech("login")}
                className="text-sm font-medium text-white bg-white/10 hover:bg-white/20 px-6 py-2 rounded-full transition-all border border-white/10"
              >
                {text.signIn}
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            {!isAuthenticated && !isDashboard && (
              <Link
                to={mech("login")}
                className="px-3 py-1.5 bg-white text-black rounded-full text-xs font-bold"
              >
                {text.signIn}
              </Link>
            )}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-400 hover:text-white"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black border-b border-white/10 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={handleNavClick}
                  className="block px-3 py-4 text-base font-medium text-gray-300 hover:text-blue-500 hover:bg-white/5 rounded-lg"
                >
                  {link.name}
                </Link>
              ))}

              <a
                href="tel:5551234567"
                className="flex items-center justify-center space-x-3 px-3 py-4 text-base font-bold text-red-500 bg-red-500/10 rounded-lg border border-red-500/20 mb-4"
              >
                <Phone className="w-5 h-5" />
                <span>{text.callNow}</span>
              </a>

              <div className="pt-4 border-t border-white/10">
                {isAuthenticated ? (
                  <>
                    <Link
                      to={user?.role === "admin" ? mech("admin") : mech("dashboard")}
                      onClick={() => setIsOpen(false)}
                      className="block px-3 py-4 text-base font-medium text-white bg-blue-600 rounded-lg text-center"
                    >
                      {text.dashboard}
                    </Link>
                    <button
                      onClick={() => {
                        handleLogout();
                        setIsOpen(false);
                      }}
                      className="w-full mt-2 px-3 py-4 text-base font-medium text-gray-400 hover:text-white text-center"
                    >
                      {text.logout}
                    </button>
                  </>
                ) : (
                  <Link
                    to={mech("login")}
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-4 text-base font-medium text-white bg-white/10 rounded-lg text-center"
                  >
                    {text.signIn}
                  </Link>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
