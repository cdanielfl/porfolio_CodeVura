import { useEffect, useState, type ReactNode } from 'react';
import { ChevronDown, ChevronUp, Info } from 'lucide-react';
import { useTranslation } from 'react-i18next';

type GuideContent = {
  label: string;
  title: string;
  items: string[];
};

type DemoFeatureGuideProps = {
  content: {
    pt: GuideContent;
    en: GuideContent;
  };
  icon?: ReactNode;
};

export default function DemoFeatureGuide({ content, icon }: DemoFeatureGuideProps) {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(() => {
    if (typeof window === 'undefined') return true;
    return window.innerWidth >= 768;
  });
  const getCurrentLanguage = (): 'pt' | 'en' => (i18n.resolvedLanguage?.startsWith('en') ? 'en' : 'pt');
  const [language, setLanguage] = useState<'pt' | 'en'>(() => {
    if (typeof window === 'undefined') return 'pt';
    return getCurrentLanguage();
  });

  useEffect(() => {
    setLanguage(getCurrentLanguage());
  }, [i18n.resolvedLanguage]);

  const current = content[language];

  return (
    <aside className="fixed bottom-4 right-3 z-40 w-[min(320px,calc(100vw-1.5rem))] rounded-2xl border border-white/15 bg-slate-950/88 p-3 text-slate-100 shadow-2xl backdrop-blur-xl md:bottom-4 md:right-4 md:w-[340px] md:p-4">
      <div className="mb-2.5 flex justify-end gap-2 md:mb-3">
        <button
          type="button"
          onClick={() => setLanguage('pt')}
          className={`rounded-md px-2 py-1 text-[10px] font-bold uppercase tracking-widest transition-colors ${
            language === 'pt' ? 'bg-violet-500/30 text-white' : 'bg-white/5 text-slate-300 hover:bg-white/10'
          }`}
        >
          PT
        </button>
        <button
          type="button"
          onClick={() => setLanguage('en')}
          className={`rounded-md px-2 py-1 text-[10px] font-bold uppercase tracking-widest transition-colors ${
            language === 'en' ? 'bg-violet-500/30 text-white' : 'bg-white/5 text-slate-300 hover:bg-white/10'
          }`}
        >
          EN
        </button>
      </div>

      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex w-full items-center justify-between gap-2.5 text-left md:gap-3"
      >
        <div className="flex items-start gap-2.5 md:gap-3">
          <div className="mt-0.5 text-violet-300">{icon ?? <Info className="h-4 w-4" />}</div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">{current.label}</p>
            <p className="text-xs font-semibold text-white md:text-sm">{current.title}</p>
          </div>
        </div>
        <span className="text-slate-300">{isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}</span>
      </button>

      {isOpen && (
        <ul className="mt-2.5 max-h-[38vh] space-y-2 overflow-y-auto pl-1 pr-1 text-xs leading-relaxed text-slate-200 md:mt-3 md:max-h-[48vh]">
          {current.items.map((item) => (
            <li key={item} className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-300" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
    </aside>
  );
}
