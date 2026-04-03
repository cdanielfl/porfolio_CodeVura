import * as React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeft, Check, Info } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card, CardContent } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { TEMPLATES } from '../data/mockData';
import { curate } from '../lib/paths';
import { resolveDemoLanguage } from '../../../../utils/demoLanguage';

export function TemplateSelection() {
  const navigate = useNavigate();
  const location = useLocation();
  const lang = resolveDemoLanguage(location.search);
  const [selected, setSelected] = React.useState<string | null>(null);

  const text = lang === 'pt'
    ? {
        title: 'Escolha um Template',
        subtitle: 'Selecione um design para comecar sua identidade profissional.',
        continue: 'Continuar para o Editor',
        popular: 'Popular',
        unsure: 'Nao sabe qual escolher?',
        tip: 'Sem problemas. Voce pode trocar o template depois no editor sem perder seu conteudo.',
      }
    : {
        title: 'Choose a Template',
        subtitle: 'Select a design to start building your professional identity.',
        continue: 'Continue to Builder',
        popular: 'Popular',
        unsure: 'Not sure which one to pick?',
        tip: "Don't worry, you can always change your template later in the builder without losing any of your content.",
      };

  const handleContinue = () => {
    if (selected) navigate(curate(`builder/new?template=${selected}`));
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-zinc-900">{text.title}</h1>
            <p className="text-sm text-zinc-500">{text.subtitle}</p>
          </div>
        </div>
        <Button disabled={!selected} onClick={handleContinue}>
          {text.continue}
        </Button>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {TEMPLATES.map((template) => (
          <div key={template.id} className="group relative cursor-pointer" onClick={() => setSelected(template.id)}>
            <div
              className={`aspect-[3/4] overflow-hidden rounded-xl border-2 transition-all ${
                selected === template.id ? 'border-zinc-900 ring-4 ring-zinc-900/5' : 'border-zinc-200 group-hover:border-zinc-300'
              }`}
            >
              <img src={template.thumbnail} alt={template.name} className="h-full w-full object-cover" referrerPolicy="no-referrer" />
              {selected === template.id && (
                <div className="absolute top-4 right-4 h-8 w-8 rounded-full bg-zinc-900 flex items-center justify-center text-white shadow-lg">
                  <Check className="h-5 w-5" />
                </div>
              )}
            </div>
            <div className="mt-4">
              <div className="flex items-center justify-between mb-1">
                <h3 className="font-bold text-zinc-900">{template.name}</h3>
                {template.id === 'modern' && <Badge variant="success">{text.popular}</Badge>}
              </div>
              <p className="text-sm text-zinc-500">{template.description}</p>
            </div>
          </div>
        ))}
      </div>

      <Card className="bg-zinc-900 text-white border-none">
        <CardContent className="flex items-center p-8">
          <div className="mr-6 rounded-full bg-zinc-800 p-4">
            <Info className="h-8 w-8 text-zinc-400" />
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">{text.unsure}</h3>
            <p className="text-zinc-400 max-w-2xl">{text.tip}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
