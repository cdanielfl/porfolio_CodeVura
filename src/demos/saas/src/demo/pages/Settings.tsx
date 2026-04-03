import { Card, Button, Badge } from '../components/UI';
import { Bell, Shield, Globe, Zap, CreditCard, Users, Mail, Trash2, ChevronRight } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { resolveDemoLanguage } from '../../../../../utils/demoLanguage';

const SETTING_SECTIONS = [
  { icon: Bell, title: 'Notifications', desc: 'Control alerts, summaries, and operational updates.' },
  { icon: Shield, title: 'Security', desc: 'Manage passwords, 2FA, and active sessions.' },
  { icon: Globe, title: 'Localization', desc: 'Set language, timezone, and number format.' },
  { icon: Zap, title: 'Integrations', desc: 'Connect external tools and API pipelines.' },
  { icon: CreditCard, title: 'Billing', desc: 'Review plan usage and payment settings.' },
  { icon: Users, title: 'Team Access', desc: 'Invite and manage team permissions.' },
  { icon: Mail, title: 'Email Templates', desc: 'Customize automated customer messages.' },
];

export const Settings = () => {
  const location = useLocation();
  const lang = resolveDemoLanguage(location.search);
  const text = lang === 'pt'
    ? {
        title: 'Configuracoes do sistema',
        subtitle: 'Defina preferencias da plataforma e politicas de seguranca.',
        general: 'Configuracao geral',
        platform: 'Nome da plataforma',
        support: 'Email de suporte',
        description: 'Descricao',
        descValue: 'Plataforma operacional para gerenciar pedidos, estoque e analise em um so lugar.',
        save: 'Salvar alteracoes',
        danger: 'Zona de risco',
        deleteTitle: 'Excluir workspace',
        deleteDesc: 'Essa acao remove permanentemente configuracoes, dados e acessos.',
        deleteBtn: 'Excluir workspace',
      }
    : {
        title: 'System Settings',
        subtitle: 'Configure platform preferences and security policies.',
        general: 'General Configuration',
        platform: 'Platform Name',
        support: 'Support Email',
        description: 'Description',
        descValue: 'Operational platform for managing orders, inventory, and analytics in one place.',
        save: 'Save Changes',
        danger: 'Danger Zone',
        deleteTitle: 'Delete Workspace',
        deleteDesc: 'This action permanently removes settings, data, and user access.',
        deleteBtn: 'Delete Workspace',
      };

  return (
    <div className="max-w-5xl space-y-8">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">{text.title}</h1>
        <p className="mt-1 text-slate-500">{text.subtitle}</p>
      </div>

      <Card>
        <div className="space-y-5">
          <h2 className="text-lg font-semibold text-slate-900">{text.general}</h2>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-slate-500">{text.platform}</label>
              <input
                type="text"
                defaultValue="NexusBiz Operations"
                className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-slate-500">{text.support}</label>
              <input
                type="email"
                defaultValue="support@nexusbiz.com"
                className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-wider text-slate-500">{text.description}</label>
            <textarea
              rows={4}
              defaultValue={text.descValue}
              className="w-full resize-none rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
            />
          </div>
          <div className="flex justify-end">
            <Button>{text.save}</Button>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {SETTING_SECTIONS.map((section) => (
          <Card key={section.title} className="cursor-pointer transition-colors hover:border-indigo-200">
            <div className="flex items-start justify-between gap-4">
              <div className="flex gap-4">
                <div className="rounded-lg bg-indigo-50 p-3 text-indigo-600">
                  <section.icon size={18} />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-900">{section.title}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-slate-500">{section.desc}</p>
                </div>
              </div>
              <ChevronRight size={16} className="mt-1 text-slate-300" />
            </div>
          </Card>
        ))}
      </div>

      <Card className="border-red-200 bg-red-50/50">
        <div className="flex flex-col items-start justify-between gap-5 md:flex-row md:items-center">
          <div>
            <Badge variant="error">{text.danger}</Badge>
            <h3 className="mt-3 text-lg font-semibold text-red-700">{text.deleteTitle}</h3>
            <p className="mt-1 text-sm text-red-600/80">{text.deleteDesc}</p>
          </div>
          <Button variant="danger" className="gap-2">
            <Trash2 size={16} />
            {text.deleteBtn}
          </Button>
        </div>
      </Card>
    </div>
  );
};


