import { Card, Button, Badge } from '../components/UI';
import { MOCK_USERS } from '../data/mock';
import { Activity, Camera, Mail, MapPin, Phone, Shield } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { resolveDemoLanguage } from '../../../../../utils/demoLanguage';

export const Profile = () => {
  const location = useLocation();
  const lang = resolveDemoLanguage(location.search);
  const text = lang === 'pt'
    ? {
        title: 'Perfil',
        subtitle: 'Gerencie identidade, seguranca e atividade.',
        edit: 'Editar perfil',
        executive: 'Perfil executivo',
        personal: 'Informacoes pessoais',
        security: 'Seguranca e acesso',
        twofa: 'Autenticacao em dois fatores',
        enabled: 'Ativado',
        verification: 'Verificacao de email',
        verified: 'Verificado',
        openSecurity: 'Abrir central de seguranca',
        recent: 'Atividade recente',
        name: 'Nome',
        email: 'Email',
        timezone: 'Fuso horario',
      }
    : {
        title: 'Profile',
        subtitle: 'Manage your identity, security, and activity settings.',
        edit: 'Edit Profile',
        executive: 'Executive Profile',
        personal: 'Personal Information',
        security: 'Security & Access',
        twofa: 'Two-factor authentication',
        enabled: 'Enabled',
        verification: 'Email verification',
        verified: 'Verified',
        openSecurity: 'Open Security Console',
        recent: 'Recent Activity',
        name: 'Name',
        email: 'Email',
        timezone: 'Timezone',
      };

  const user = MOCK_USERS[0];

  return (
    <div className="max-w-5xl space-y-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">{text.title}</h1>
          <p className="mt-1 text-slate-500">{text.subtitle}</p>
        </div>
        <Button className="w-full sm:w-auto">{text.edit}</Button>
      </div>

      <Card>
        <div className="flex flex-col gap-6 md:flex-row md:items-center">
          <div className="relative">
            <img
              src={user.avatar}
              alt={user.name}
              className="h-28 w-28 rounded-full border border-slate-200 object-cover"
              referrerPolicy="no-referrer"
            />
            <button className="absolute bottom-1 right-1 rounded-full bg-slate-900 p-1.5 text-white">
              <Camera size={12} />
            </button>
          </div>
          <div className="flex-1">
            <Badge variant="info">{text.executive}</Badge>
            <h2 className="mt-2 text-2xl font-bold text-slate-900">{user.name}</h2>
            <p className="text-sm text-slate-500">{user.email}</p>
            <div className="mt-3 flex flex-wrap gap-4 text-xs text-slate-500">
              <span className="inline-flex items-center gap-1"><Shield size={12} /> {user.role}</span>
              <span className="inline-flex items-center gap-1"><MapPin size={12} /> San Francisco, CA</span>
              <span className="inline-flex items-center gap-1"><Phone size={12} /> +1 (555) 000-1234</span>
            </div>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card>
          <h3 className="mb-4 text-lg font-semibold text-slate-900">{text.personal}</h3>
          <div className="space-y-3 text-sm">
            <div className="rounded-lg border border-slate-100 bg-slate-50/70 p-3">
              <p className="text-xs uppercase tracking-wider text-slate-500">{text.name}</p>
              <p className="font-medium text-slate-900">{user.name}</p>
            </div>
            <div className="rounded-lg border border-slate-100 bg-slate-50/70 p-3">
              <p className="text-xs uppercase tracking-wider text-slate-500">{text.email}</p>
              <p className="font-medium text-slate-900">{user.email}</p>
            </div>
            <div className="rounded-lg border border-slate-100 bg-slate-50/70 p-3">
              <p className="text-xs uppercase tracking-wider text-slate-500">{text.timezone}</p>
              <p className="font-medium text-slate-900">Pacific Time (PT)</p>
            </div>
          </div>
        </Card>

        <Card>
          <h3 className="mb-4 text-lg font-semibold text-slate-900">{text.security}</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between rounded-lg border border-slate-100 bg-slate-50/70 p-3">
              <div className="inline-flex items-center gap-2 text-sm text-slate-700">
                <Shield size={14} className="text-indigo-600" />
                {text.twofa}
              </div>
              <Badge variant="success">{text.enabled}</Badge>
            </div>
            <div className="flex items-center justify-between rounded-lg border border-slate-100 bg-slate-50/70 p-3">
              <div className="inline-flex items-center gap-2 text-sm text-slate-700">
                <Mail size={14} className="text-indigo-600" />
                {text.verification}
              </div>
              <Badge variant="success">{text.verified}</Badge>
            </div>
            <Button variant="outline" className="mt-2 w-full">{text.openSecurity}</Button>
          </div>
        </Card>
      </div>

      <Card>
        <h3 className="mb-4 text-lg font-semibold text-slate-900">{text.recent}</h3>
        <div className="space-y-3">
          {[
            { action: 'Logged in from new device', time: '2 hours ago' },
            { action: 'Updated profile information', time: 'Yesterday' },
            { action: 'Generated Q1 report', time: '3 days ago' },
          ].map((act) => (
            <div key={act.action} className="flex items-start justify-between rounded-lg border border-slate-100 bg-slate-50/70 p-3">
              <div className="inline-flex items-center gap-2 text-sm text-slate-700">
                <Activity size={14} className="text-indigo-600" />
                {act.action}
              </div>
              <span className="text-xs text-slate-500">{act.time}</span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

