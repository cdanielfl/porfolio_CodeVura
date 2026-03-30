import { useEffect, useMemo, useState, type FormEvent } from 'react';
import { Link, NavLink, Outlet, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  CalendarClock,
  CheckCircle2,
  Clock,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Menu as MenuIcon,
  Phone,
  Utensils,
  X,
} from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { routes } from '../../routes';
import DemoFeatureGuide from '../../components/DemoFeatureGuide';

type MenuItem = {
  name: string;
  price: string;
  description: string;
  category: 'starters' | 'mains' | 'desserts';
};

const menuItems: MenuItem[] = [
  {
    name: 'Bruschetta Italiana',
    price: 'R$ 32',
    description: 'Toasted Italian bread, fresh tomatoes, basil, and extra virgin olive oil.',
    category: 'starters',
  },
  {
    name: 'Carpaccio de File',
    price: 'R$ 48',
    description: 'Thin slices of filet mignon, arugula, capers, and parmesan flakes.',
    category: 'starters',
  },
  {
    name: 'Risoto de Cogumelos',
    price: 'R$ 64',
    description: 'Arborio rice, fresh mushroom mix, and white truffle oil.',
    category: 'mains',
  },
  {
    name: 'Salmao Grelhado',
    price: 'R$ 78',
    description: 'Salmon fillet, parsley root puree, and butter-sauteed vegetables.',
    category: 'mains',
  },
  {
    name: 'File ao Poivre',
    price: 'R$ 85',
    description: 'Filet mignon medallion with pepper sauce and rustic potatoes.',
    category: 'mains',
  },
  {
    name: 'Tiramisu Classico',
    price: 'R$ 28',
    description: 'Ladyfingers soaked in coffee, mascarpone cream, and cocoa.',
    category: 'desserts',
  },
  {
    name: 'Petit Gateau',
    price: 'R$ 26',
    description: 'Warm chocolate cake with handcrafted vanilla ice cream.',
    category: 'desserts',
  },
];

const locationData = {
  address: 'Gastronomy St, 456 - Jardins, Sao Paulo - SP',
  phone: '(11) 3344-5566',
  email: 'reservas@bistrogourmet.com',
  hours: ['Tue to Thu: 6pm - 11pm', 'Fri and Sat: 12pm - 12am', 'Sunday: 12pm - 5pm'],
};

const navItems = [
  { label: 'Home', to: '/demo/restaurante' },
  { label: 'Menu', to: '/demo/restaurante/menu' },
  { label: 'Reservations', to: '/demo/restaurante/reservations' },
  { label: 'About', to: '/demo/restaurante/about' },
  { label: 'Contact', to: '/demo/restaurante/contact' },
];

function RestaurantLayout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 16);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  const handleBack = () => {
    const lang = document.documentElement.lang.startsWith('en') ? 'en' : 'pt';
    navigate(routes[lang].portfolio);
  };

  return (
    <div className="min-h-screen bg-[#faf7f2] font-serif text-[#2d2a26]">
      <div className="fixed left-0 top-0 z-[100] flex w-full items-center justify-between bg-amber-800 px-4 py-1 text-center text-xs font-bold text-white">
        <span>DEMO: RESTAURANT WEBSITE</span>
        <button onClick={handleBack} className="inline-flex items-center gap-1 underline hover:no-underline">
          <ArrowLeft className="h-3.5 w-3.5" />
          Back
        </button>
      </div>

      <nav
        className={`fixed left-0 right-0 z-50 top-6 transition-all duration-500 ${
          isScrolled ? 'bg-white/95 py-3 shadow-sm' : 'bg-transparent py-6'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link to="/demo/restaurante" className="flex items-center gap-2">
            <Utensils className="h-8 w-8 text-amber-700" />
            <span className="text-2xl font-bold uppercase tracking-widest text-amber-900">
              BISTRO<span className="font-light">GOURMET</span>
            </span>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `text-sm font-bold uppercase tracking-widest transition-colors ${
                    isActive ? 'text-amber-700' : 'text-[#3b332d] hover:text-amber-700'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/demo/restaurante/reservations"
              className="rounded-full bg-amber-800 px-8 py-3 text-xs font-bold uppercase tracking-widest text-white shadow-lg transition-all hover:bg-amber-900 active:scale-95"
            >
              Book Table
            </Link>
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-amber-900 md:hidden">
            {isMenuOpen ? <X /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[60] flex flex-col items-center justify-center gap-8 bg-white p-8"
          >
            <button onClick={() => setIsMenuOpen(false)} className="absolute right-8 top-12">
              <X className="h-8 w-8" />
            </button>
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className="text-3xl font-bold uppercase tracking-widest"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <Outlet />

      <DemoFeatureGuide
        content={{
          pt: {
            label: 'Guia da Demo',
            title: 'Funcionalidades da Demo de Restaurante',
            items: [
              'Comece na Home para sentir o posicionamento visual e a copy comercial.',
              'Clique em "Menu" e teste os filtros por categoria dos pratos.',
              'Vá em "Reservations" e envie uma solicitação de reserva.',
              'Use "About" e "Contact" para validar o funil completo do negócio local.',
            ],
          },
          en: {
            label: 'Demo Guide',
            title: 'Restaurant Demo Features',
            items: [
              'Start on Home to experience the brand positioning and commercial copy.',
              'Click "Menu" and test category filters for dishes.',
              'Open "Reservations" and submit a booking request.',
              'Use "About" and "Contact" to validate the full local-business funnel.',
            ],
          },
        }}
      />

      <footer className="bg-[#1a1816] py-14 text-sm text-slate-400">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          <div>
            <p className="mb-4 text-lg font-bold text-white">Bistro Gourmet</p>
            <p className="max-w-sm leading-relaxed">
              Signature cuisine with seasonal ingredients, attentive service, and a complete dining experience.
            </p>
          </div>
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-widest text-amber-400">Contact</p>
            <div className="space-y-2">
              <p className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                {locationData.address}
              </p>
              <p className="inline-flex items-center gap-2">
                <Phone className="h-4 w-4" />
                {locationData.phone}
              </p>
              <p className="inline-flex items-center gap-2">
                <Mail className="h-4 w-4" />
                {locationData.email}
              </p>
            </div>
          </div>
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-widest text-amber-400">Follow Us</p>
            <div className="mb-6 flex gap-5">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-amber-400">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-amber-400">
                <Facebook className="h-6 w-6" />
              </a>
            </div>
            <p>© {new Date().getFullYear()} Bistro Gourmet. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function RestaurantHomePage() {
  return (
    <>
      <section className="relative flex min-h-[88vh] items-center justify-center overflow-hidden pt-28 text-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=1920"
            alt="Restaurant"
            className="h-full w-full object-cover brightness-[0.4]"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-4xl px-4">
          <motion.div initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}>
            <span className="mb-6 block font-bold uppercase tracking-[0.3em] text-amber-400">Flavor and elegance</span>
            <h1 className="mb-6 text-5xl font-bold leading-tight text-white lg:text-7xl">
              A complete dining experience for every moment.
            </h1>
            <p className="mx-auto mb-10 max-w-2xl text-lg text-slate-200">
              Contemporary cuisine with fresh ingredients, a curated wine list, and attentive service in a memorable setting.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                to="/demo/restaurante/menu"
                className="rounded-full bg-amber-700 px-10 py-4 font-bold uppercase tracking-widest text-white transition-all hover:bg-amber-800"
              >
                View Menu
              </Link>
              <Link
                to="/demo/restaurante/reservations"
                className="rounded-full border-2 border-white px-10 py-4 font-bold uppercase tracking-widest text-white transition-all hover:bg-white hover:text-amber-900"
              >
                Make Reservation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-3 text-4xl font-bold text-amber-900">House Highlights</h2>
            <p className="text-slate-600">A few experiences that make every visit special.</p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                title: 'Signature kitchen',
                description: 'Exclusive recipes with refined technique and contemporary identity.',
              },
              {
                title: 'Seasonal menu',
                description: 'Frequent updates based on fresh seasonal ingredients.',
              },
              {
                title: 'Premium ambience',
                description: 'A space designed for gatherings, celebrations, and memorable experiences.',
              },
            ].map((item) => (
              <article key={item.title} className="rounded-2xl border border-amber-100 bg-white p-8 shadow-sm">
                <h3 className="mb-3 text-2xl font-bold text-amber-900">{item.title}</h3>
                <p className="leading-relaxed text-slate-600">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function RestaurantMenuPage() {
  const [activeCategory, setActiveCategory] = useState<'starters' | 'mains' | 'desserts'>('starters');
  const filtered = useMemo(() => menuItems.filter((item) => item.category === activeCategory), [activeCategory]);

  return (
    <section className="bg-white pb-24 pt-36">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h1 className="mb-3 text-5xl font-bold text-amber-900">Curated Menu</h1>
          <p className="text-slate-600">Crafted dishes for a sophisticated dining experience.</p>
        </div>

        <div className="mb-12 flex justify-center gap-3">
          {(['starters', 'mains', 'desserts'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-7 py-3 text-xs font-bold uppercase tracking-widest transition-all ${
                activeCategory === cat ? 'bg-amber-800 text-white shadow-lg' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {filtered.map((item) => (
            <article key={item.name} className="rounded-2xl border border-slate-200 bg-[#fffdf9] p-8">
              <div className="mb-3 flex items-center justify-between gap-4">
                <h2 className="text-2xl font-bold text-[#3a2f26]">{item.name}</h2>
                <span className="text-xl font-bold text-amber-800">{item.price}</span>
              </div>
              <p className="leading-relaxed text-slate-600">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function RestaurantReservationsPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section className="pb-24 pt-36">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:px-8">
        <div className="rounded-3xl bg-amber-800 p-10 text-white">
          <p className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-100">
            <CalendarClock className="h-4 w-4" />
            Reservations
          </p>
          <h1 className="mb-5 text-4xl font-bold">Secure your table in advance</h1>
          <p className="mb-8 leading-relaxed text-amber-100">
            Share your details and our team will quickly confirm your reservation.
          </p>
          <div className="space-y-4 text-sm">
            <p className="inline-flex items-start gap-2">
              <Clock className="mt-0.5 h-4 w-4" />
              {locationData.hours[0]}
            </p>
            <p className="inline-flex items-start gap-2">
              <Clock className="mt-0.5 h-4 w-4" />
              {locationData.hours[1]}
            </p>
            <p className="inline-flex items-start gap-2">
              <Clock className="mt-0.5 h-4 w-4" />
              {locationData.hours[2]}
            </p>
          </div>
        </div>

        <div className="rounded-3xl border border-white/40 bg-white p-8 shadow-xl">
          {!isSubmitted ? (
            <form className="space-y-5" onSubmit={onSubmit}>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <input required placeholder="Full name" className="rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-amber-600" />
                <input required placeholder="Phone" className="rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-amber-600" />
              </div>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
                <input required type="date" className="rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-amber-600" />
                <input required type="time" className="rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-amber-600" />
                <select required className="rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-amber-600">
                  <option value="">Guests</option>
                  <option>2 guests</option>
                  <option>4 guests</option>
                  <option>6 guests</option>
                  <option>8+ guests</option>
                </select>
              </div>
              <textarea
                rows={4}
                placeholder="Notes (optional)"
                className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-amber-600"
              />
              <button className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-amber-800 px-5 py-4 font-bold uppercase tracking-widest text-white transition-all hover:bg-amber-900">
                Confirm reservation request
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          ) : (
            <div className="py-10 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <h2 className="mb-2 text-3xl font-bold text-slate-900">Reservation received</h2>
              <p className="mx-auto max-w-md text-slate-600">
                We received your request. Our team will contact you shortly for confirmation.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="mt-6 rounded-lg border border-slate-200 px-5 py-3 text-sm font-bold text-slate-700 transition-colors hover:bg-slate-50"
              >
                Create new request
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function RestaurantAboutPage() {
  return (
    <section className="pb-24 pt-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1550966842-2849a2830a28?auto=format&fit=crop&q=80&w=1000"
              alt="Chef"
              className="rounded-3xl shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </div>
          <div>
            <h1 className="mb-6 text-5xl font-bold text-amber-900">Our story</h1>
            <p className="mb-6 text-lg leading-relaxed text-slate-600">
              Bistro Gourmet was born from the combination of classic technique and a contemporary interpretation of international cuisine.
            </p>
            <p className="mb-8 text-lg leading-relaxed text-slate-600">
              Our proposal is to offer a complete experience: elegant ambience, attentive service, and dishes crafted with selected ingredients from local producers.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="rounded-xl bg-white p-5 shadow-sm">
                <p className="text-3xl font-bold text-amber-700">15+</p>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Years in operation</p>
              </div>
              <div className="rounded-xl bg-white p-5 shadow-sm">
                <p className="text-3xl font-bold text-amber-700">Core team</p>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Chef + dedicated brigade</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function RestaurantContactPage() {
  return (
    <section className="bg-[#2d2a26] pb-24 pt-36 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <h1 className="mb-6 text-4xl font-bold text-amber-400">Contact and location</h1>
            <div className="space-y-6">
              <p className="inline-flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 text-amber-300" />
                {locationData.address}
              </p>
              <p className="inline-flex items-center gap-3">
                <Phone className="h-5 w-5 text-amber-300" />
                {locationData.phone}
              </p>
              <p className="inline-flex items-center gap-3">
                <Mail className="h-5 w-5 text-amber-300" />
                {locationData.email}
              </p>
            </div>
          </div>
          <form
            className="space-y-4 rounded-2xl border border-white/10 bg-white/5 p-8"
            onSubmit={(event) => event.preventDefault()}
          >
            <h2 className="mb-2 text-2xl font-bold">Talk to our team</h2>
            <input
              type="text"
              placeholder="Name"
              className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 outline-none placeholder:text-slate-300 focus:border-amber-300"
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 outline-none placeholder:text-slate-300 focus:border-amber-300"
              required
            />
            <textarea
              rows={5}
              placeholder="Message"
              className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 outline-none placeholder:text-slate-300 focus:border-amber-300"
              required
            />
            <button className="w-full rounded-xl bg-amber-700 px-5 py-4 font-bold uppercase tracking-widest text-white transition-colors hover:bg-amber-800">
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function RestaurantNotFoundPage() {
  return (
    <section className="flex min-h-[60vh] items-center justify-center px-4 pt-32 text-center">
      <div>
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-amber-700">Page not found</p>
        <h1 className="mb-4 text-4xl font-bold text-amber-900">Route unavailable in this demo</h1>
        <Link to="/demo/restaurante" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-amber-800">
          Back to home
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}

export default function RestaurantDemo() {
  return (
    <Routes>
      <Route path="/" element={<RestaurantLayout />}>
        <Route index element={<RestaurantHomePage />} />
        <Route path="menu" element={<RestaurantMenuPage />} />
        <Route path="cardapio" element={<RestaurantMenuPage />} />
        <Route path="reservations" element={<RestaurantReservationsPage />} />
        <Route path="reservas" element={<RestaurantReservationsPage />} />
        <Route path="about" element={<RestaurantAboutPage />} />
        <Route path="sobre" element={<RestaurantAboutPage />} />
        <Route path="contact" element={<RestaurantContactPage />} />
        <Route path="contato" element={<RestaurantContactPage />} />
        <Route path="*" element={<RestaurantNotFoundPage />} />
      </Route>
    </Routes>
  );
}
