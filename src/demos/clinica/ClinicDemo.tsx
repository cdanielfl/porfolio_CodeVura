import { useEffect, useState, type FormEvent, type ReactNode } from 'react';
import { Link, NavLink, Outlet, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import {
  Activity,
  ArrowLeft,
  ArrowRight,
  Calendar,
  CheckCircle2,
  Clock,
  Heart,
  Mail,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  Users,
  X,
} from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { routes } from '../../routes';
import i18n from '../../i18n';
import DemoFeatureGuide from '../../components/DemoFeatureGuide';

type Specialty = {
  title: string;
  description: string;
  icon: ReactNode;
};

const specialties: Specialty[] = [
  { title: 'Cardiology', description: 'Complete follow-up for cardiovascular health.', icon: <Heart className="h-7 w-7" /> },
  { title: 'General Medicine', description: 'Preventive care and integrated diagnosis.', icon: <Activity className="h-7 w-7" /> },
  { title: 'Pediatrics', description: 'Specialized care for children and teens.', icon: <Users className="h-7 w-7" /> },
  { title: 'Gynecology', description: "Supportive care and follow-up for women's health.", icon: <ShieldCheck className="h-7 w-7" /> },
];

const clinicData = {
  phone: '(11) 5566-7788',
  address: 'Health Ave, 789 - Sao Paulo',
  email: 'contato@vitalityclinica.com',
  hours: ['Mon - Fri: 7am to 8pm', 'Saturday: 8am to 2pm', 'Sunday: Closed'],
};

const navItems = [
  { label: 'Home', to: '/demo/clinica' },
  { label: 'Specialties', to: '/demo/clinica/specialties' },
  { label: 'Team', to: '/demo/clinica/team' },
  { label: 'Appointments', to: '/demo/clinica/appointments' },
  { label: 'Contact', to: '/demo/clinica/contact' },
];

function ClinicLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  const handleBack = () => {
    const lang = i18n.resolvedLanguage?.startsWith('en') ? 'en' : 'pt';
    navigate(routes[lang].portfolio);
  };

  return (
    <div className="clinic-demo demo-mobile-root min-h-screen bg-white font-sans text-slate-800">
      <div className="fixed top-0 left-0 z-[100] flex w-full items-center justify-between bg-cyan-600 px-4 py-1 text-xs font-bold text-white">
        <span>DEMO: MEDICAL CLINIC WEBSITE</span>
        <button onClick={handleBack} className="inline-flex items-center gap-1 underline hover:no-underline">
          <ArrowLeft className="h-3.5 w-3.5" />
          Back
        </button>
      </div>

      <nav
        className={`fixed left-0 right-0 top-6 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/95 py-3 shadow-md' : 'bg-white/90 py-3 backdrop-blur-md'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link to="/demo/clinica" className="flex items-center gap-2">
            <div className="rounded-full bg-cyan-600 p-2">
              <Heart className="h-6 w-6 text-white" fill="white" />
            </div>
            <span className="text-2xl font-bold tracking-tight text-slate-900">
              Vitality<span className="text-cyan-600">Clinic</span>
            </span>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `font-semibold transition-colors ${isActive ? 'text-cyan-600' : 'text-slate-600 hover:text-cyan-600'}`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/demo/clinica/appointments"
              className="rounded-full bg-cyan-600 px-6 py-3 font-bold text-white shadow-lg transition-all hover:bg-cyan-700"
            >
              Book Appointment
            </Link>
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-slate-600 md:hidden">
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      <div className="fixed left-0 right-0 top-[5.5rem] z-40 hidden border-b border-slate-100 bg-slate-50 py-2 lg:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 text-sm text-slate-600 sm:px-6 lg:px-8">
          <div className="flex gap-6">
            <span className="inline-flex items-center gap-2">
              <Phone className="h-4 w-4 text-cyan-600" />
              {clinicData.phone}
            </span>
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-cyan-600" />
              {clinicData.address}
            </span>
          </div>
          <span className="inline-flex items-center gap-2">
            <Clock className="h-4 w-4 text-cyan-600" />
            {clinicData.hours[0]}
          </span>
        </div>
      </div>

      <div className="hidden h-10 lg:block" />

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 z-[60] flex flex-col gap-6 bg-white p-8 pt-24"
          >
            <button onClick={() => setIsMenuOpen(false)} className="absolute top-12 right-8">
              <X className="h-8 w-8" />
            </button>
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} className="text-2xl font-bold text-slate-800">
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
            title: 'Funcionalidades da Demo de Clínica',
            items: [
              'Comece pela Home para ver a proposta e os CTAs principais.',
              'Use "Specialties" e "Team" para validar autoridade e confiança.',
              'Clique em "Book Appointment" para testar o fluxo de agendamento.',
              'Finalize em "Contact" para conferir a rota de conversão rápida.',
            ],
          },
          en: {
            label: 'Demo Guide',
            title: 'Clinic Demo Features',
            items: [
              'Start on Home to review the value proposition and main CTAs.',
              'Use "Specialties" and "Team" to validate authority and trust.',
              'Click "Book Appointment" to test the scheduling flow.',
              'Finish on "Contact" to check the fast conversion path.',
            ],
          },
        }}
      />

      <footer className="bg-slate-900 py-20 text-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          <div>
            <div className="mb-6 flex items-center gap-2">
              <div className="rounded-full bg-cyan-600 p-2">
                <Heart className="h-6 w-6 text-white" fill="white" />
              </div>
              <span className="text-2xl font-bold tracking-tight">
                Vitality<span className="text-cyan-500">Clinic</span>
              </span>
            </div>
            <p className="max-w-sm text-slate-400">
              Human-centered care with a specialized team and a structure planned for comfort and safety.
            </p>
          </div>
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-widest text-cyan-400">Contact</p>
            <div className="space-y-3 text-slate-300">
              <p className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4 text-cyan-400" />
                {clinicData.address}
              </p>
              <p className="inline-flex items-center gap-2">
                <Phone className="h-4 w-4 text-cyan-400" />
                {clinicData.phone}
              </p>
              <p className="inline-flex items-center gap-2">
                <Mail className="h-4 w-4 text-cyan-400" />
                {clinicData.email}
              </p>
            </div>
          </div>
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-widest text-cyan-400">Opening Hours</p>
            <ul className="space-y-2 text-slate-300">
              {clinicData.hours.map((hour) => (
                <li key={hour}>{hour}</li>
              ))}
            </ul>
            <p className="mt-8 text-sm text-slate-500">© {new Date().getFullYear()} Vitality Clinic Medica.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ClinicHomePage() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-cyan-50 via-white to-blue-50 pb-20 pt-40 lg:pb-32 lg:pt-64">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-16 lg:flex-row">
          <motion.div initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} className="lg:w-1/2">
            <span className="mb-6 inline-block rounded-full bg-cyan-100 px-4 py-1.5 text-sm font-bold text-cyan-700">
              HUMAN-CENTERED CARE
            </span>
            <h1 className="mb-7 text-5xl font-extrabold leading-tight text-slate-900 lg:text-7xl">
              Your health in <span className="text-cyan-600">good hands</span> every day.
            </h1>
            <p className="mb-10 text-xl leading-relaxed text-slate-600">
              High-quality medical care with a specialized team and clear processes for a safe experience.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                to="/demo/clinica/appointments"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-600 px-10 py-5 text-lg font-bold text-white shadow-xl transition-all hover:bg-cyan-700"
              >
                Book Appointment <Calendar className="h-5 w-5" />
              </Link>
              <Link
                to="/demo/clinica/specialties"
                className="rounded-full border-2 border-slate-200 bg-white px-10 py-5 text-center text-lg font-bold text-slate-900 transition-all hover:border-cyan-600 hover:text-cyan-600"
              >
                See Specialties
              </Link>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.86 }} animate={{ opacity: 1, scale: 1 }} className="relative lg:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=900"
              alt="Smiling doctor"
              className="relative z-10 rounded-[3rem] shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-10 -left-10 z-20 flex items-center gap-4 rounded-3xl border border-slate-100 bg-white p-6 shadow-xl">
              <div className="rounded-full bg-green-100 p-3 text-green-600">
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <div>
                <p className="font-bold text-slate-900">Specialized team</p>
                <p className="text-sm text-slate-500">Care with continuous follow-up</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ClinicSpecialtiesPage() {
  return (
    <section className="pb-24 pt-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mb-14 text-center">
          <h1 className="mb-4 text-5xl font-bold text-slate-900">Our Specialties</h1>
          <p className="mx-auto max-w-2xl text-slate-600">
            Care areas with a dedicated team for each stage of the patient journey.
          </p>
        </header>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {specialties.map((item) => (
            <article key={item.title} className="rounded-[2rem] border border-slate-100 bg-white p-8 shadow-sm transition-all hover:shadow-xl">
              <div className="mb-6 inline-flex rounded-2xl bg-cyan-50 p-4 text-cyan-600">{item.icon}</div>
              <h2 className="mb-3 text-2xl font-bold text-slate-900">{item.title}</h2>
              <p className="leading-relaxed text-slate-600">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ClinicTeamPage() {
  const team = [
    { name: 'Dra. Helena Martins', role: 'Cardiology', photo: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=500' },
    { name: 'Dr. Caio Ferreira', role: 'General Medicine', photo: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=500' },
    { name: 'Dra. Amanda Lopes', role: 'Pediatrics', photo: 'https://images.unsplash.com/photo-1651008376811-b90baee60c1f?auto=format&fit=crop&q=80&w=500' },
  ];

  return (
    <section className="bg-slate-50 pb-24 pt-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mb-12 text-center">
          <h1 className="mb-4 text-5xl font-bold text-slate-900">Medical Team</h1>
          <p className="mx-auto max-w-2xl text-slate-600">
            Experienced professionals committed to careful, evidence-based care.
          </p>
        </header>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {team.map((member) => (
            <article key={member.name} className="overflow-hidden rounded-3xl bg-white shadow-md">
              <img src={member.photo} alt={member.name} className="h-72 w-full object-cover" referrerPolicy="no-referrer" />
              <div className="p-6">
                <h2 className="text-2xl font-bold text-slate-900">{member.name}</h2>
                <p className="mt-1 text-cyan-700">{member.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ClinicAppointmentPage() {
  const [sent, setSent] = useState(false);

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <section className="pb-24 pt-36">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
        <div className="rounded-3xl bg-cyan-600 p-10 text-white">
          <h1 className="mb-5 text-4xl font-bold">Appointment Scheduling</h1>
          <p className="mb-8 text-cyan-100">
            Fill out the details below and our team will get back to confirm your schedule and initial guidance.
          </p>
          <div className="space-y-4 text-sm">
            <p className="inline-flex items-center gap-2">
              <Phone className="h-4 w-4" />
              {clinicData.phone}
            </p>
            <p className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              {clinicData.address}
            </p>
            <p className="inline-flex items-center gap-2">
              <Clock className="h-4 w-4" />
              {clinicData.hours[0]}
            </p>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg">
          {!sent ? (
            <form className="space-y-4" onSubmit={submit}>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <input required placeholder="Full name" className="rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-cyan-600" />
                <input required placeholder="Phone" className="rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-cyan-600" />
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <select required className="rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-cyan-600">
                  <option value="">Specialty</option>
                  {specialties.map((item) => (
                    <option key={item.title}>{item.title}</option>
                  ))}
                </select>
                <input required type="date" className="rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-cyan-600" />
              </div>
              <textarea
                rows={5}
                placeholder="Notes (optional)"
                className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-cyan-600"
              />
              <button className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-600 px-5 py-4 font-bold text-white transition-colors hover:bg-cyan-700">
                Request appointment
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          ) : (
            <div className="py-12 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <h2 className="mb-2 text-3xl font-bold text-slate-900">Request received</h2>
              <p className="mx-auto max-w-md text-slate-600">
                Thank you. Our team will contact you to confirm your appointment.
              </p>
              <button onClick={() => setSent(false)} className="mt-6 rounded-lg border border-slate-200 px-5 py-3 text-sm font-bold text-slate-700 hover:bg-slate-50">
                Create a new appointment
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function ClinicContactPage() {
  return (
    <section className="bg-slate-50 pb-24 pt-36">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div>
            <h1 className="mb-6 text-5xl font-bold text-slate-900">Contact</h1>
            <div className="space-y-4 text-slate-700">
              <p className="inline-flex items-start gap-2">
                <MapPin className="mt-0.5 h-5 w-5 text-cyan-600" />
                {clinicData.address}
              </p>
              <p className="inline-flex items-center gap-2">
                <Phone className="h-5 w-5 text-cyan-600" />
                {clinicData.phone}
              </p>
              <p className="inline-flex items-center gap-2">
                <Mail className="h-5 w-5 text-cyan-600" />
                {clinicData.email}
              </p>
            </div>
          </div>
          <form className="space-y-4 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm" onSubmit={(event) => event.preventDefault()}>
            <input required placeholder="Name" className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-cyan-600" />
            <input required type="email" placeholder="Email" className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-cyan-600" />
            <textarea required rows={5} placeholder="Message" className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-cyan-600" />
            <button className="w-full rounded-xl bg-cyan-600 px-5 py-4 font-bold text-white transition-colors hover:bg-cyan-700">
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function ClinicNotFoundPage() {
  return (
    <section className="flex min-h-[60vh] items-center justify-center px-4 pt-32 text-center">
      <div>
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-cyan-700">Page not found</p>
        <h1 className="mb-4 text-4xl font-bold text-slate-900">Route unavailable in this demo</h1>
        <Link to="/demo/clinica" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-cyan-700">
          Back to home
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}

export default function ClinicDemo() {
  return (
    <Routes>
      <Route path="/" element={<ClinicLayout />}>
        <Route index element={<ClinicHomePage />} />
        <Route path="specialties" element={<ClinicSpecialtiesPage />} />
        <Route path="especialidades" element={<ClinicSpecialtiesPage />} />
        <Route path="team" element={<ClinicTeamPage />} />
        <Route path="equipe" element={<ClinicTeamPage />} />
        <Route path="appointments" element={<ClinicAppointmentPage />} />
        <Route path="agendamento" element={<ClinicAppointmentPage />} />
        <Route path="contact" element={<ClinicContactPage />} />
        <Route path="contato" element={<ClinicContactPage />} />
        <Route path="*" element={<ClinicNotFoundPage />} />
      </Route>
    </Routes>
  );
}
