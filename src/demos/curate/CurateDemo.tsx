import { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { routes } from '../../routes';
import { resolveDemoLanguage, syncDemoLanguage } from '../../utils/demoLanguage';
import DemoFeatureGuide from '../../components/DemoFeatureGuide';
import CurateApp from './src/App';
import './src/index.css';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default function CurateDemo() {
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
    <div className="curate-demo demo-mobile-root min-h-screen bg-zinc-50">
      <div className="fixed top-0 left-0 z-[100] flex w-full items-center justify-between bg-zinc-900 px-4 py-1 text-center text-xs font-bold text-white">
        <span>{lang === 'pt' ? 'DEMO: PLATAFORMA DE CURRICULOS' : 'DEMO: RESUME SAAS PLATFORM'}</span>
        <button onClick={handleBack} className="inline-flex items-center gap-1 underline hover:no-underline">
          <ArrowLeft className="h-3.5 w-3.5" />
          {lang === 'pt' ? 'Voltar' : 'Back'}
        </button>
      </div>

      <ScrollToTop />
      <div className="pt-6">
        <CurateApp />
      </div>

      <DemoFeatureGuide
        content={{
          pt: {
            label: 'Guia da Demo',
            title: 'Funcionalidades da Demo Curate',
            items: [
              'Clique em "Sign In" ou "Get Started" para entrar no sistema.',
              'No dashboard, acesse "Templates" ou "Create with AI" para iniciar.',
              'Use o builder para editar e depois abra o "Preview" do currículo.',
              'Teste também "Profile" e "Settings" para ver o produto completo.',
            ],
          },
          en: {
            label: 'Demo Guide',
            title: 'Curate Demo Features',
            items: [
              'Click "Sign In" or "Get Started" to access the system.',
              'From the dashboard, open "Templates" or "Create with AI" to begin.',
              'Use the builder to edit content and then open the resume preview.',
              'Also test "Profile" and "Settings" for full product coverage.',
            ],
          },
        }}
      />
    </div>
  );
}
