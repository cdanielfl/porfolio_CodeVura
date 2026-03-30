import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Car, Menu, X, User, LogOut, Phone } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { cn } from "../lib/utils";
import { motion, AnimatePresence } from "motion/react";
import { mech } from "../lib/paths";

export const Navbar: React.FC = () => {
  const { user, logout, isAuthenticated } = useAuth();
  const [isOpen, setIsOpen] = React.useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const isDashboard =
    location.pathname.startsWith(mech("dashboard")) || location.pathname.startsWith(mech("admin"));

  const navLinks = [
    { name: "Home", path: mech(), sectionId: "hero" },
    { name: "Services", path: mech("services"), sectionId: "services" },
    { name: "About", path: mech("about"), sectionId: "about" },
    { name: "Contact", path: mech("contact"), sectionId: "services" },
  ];

  const handleNavClick = (e: React.MouseEvent, path: string, sectionId?: string) => {
    // Se estiver na Home ou em uma rota que renderiza a Home
    const isHomePath =
      location.pathname === mech() ||
      [mech("services"), mech("about"), mech("contact")].includes(location.pathname);

    if (sectionId && isHomePath) {
      e.preventDefault();
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        // Se for mobile, fecha o menu
        setIsOpen(false);
        // Atualiza a URL sem recarregar
        window.history.pushState({}, "", path);
      }
    }
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
                onClick={(e) => handleNavClick(e, link.path, link.sectionId)}
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
              <span>Call Mechanic</span>
            </a>
            
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <Link
                  to={user?.role === "admin" ? mech("admin") : mech("dashboard")}
                  className="flex items-center space-x-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-full transition-all"
                >
                  <User className="w-4 h-4" />
                  <span>Dashboard</span>
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
                Sign In
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
                Sign In
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
                  onClick={(e) => handleNavClick(e, link.path, link.sectionId)}
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
                <span>Call Mechanic Now</span>
              </a>

              <div className="pt-4 border-t border-white/10">
                {isAuthenticated ? (
                  <>
                    <Link
                      to={user?.role === "admin" ? mech("admin") : mech("dashboard")}
                      onClick={() => setIsOpen(false)}
                      className="block px-3 py-4 text-base font-medium text-white bg-blue-600 rounded-lg text-center"
                    >
                      Dashboard
                    </Link>
                    <button
                      onClick={() => {
                        handleLogout();
                        setIsOpen(false);
                      }}
                      className="w-full mt-2 px-3 py-4 text-base font-medium text-gray-400 hover:text-white text-center"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <Link
                    to={mech("login")}
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-4 text-base font-medium text-white bg-white/10 rounded-lg text-center"
                  >
                    Sign In
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
