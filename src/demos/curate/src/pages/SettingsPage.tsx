import * as React from 'react';
import { Bell, Shield, Trash2 } from 'lucide-react';
import { cn } from '../lib/utils';
import { Button } from '../components/ui/Button';
import { Card, CardContent, CardHeader } from '../components/ui/Card';
import { useLocation } from 'react-router-dom';
import { resolveDemoLanguage } from '../../../../utils/demoLanguage';

export function SettingsPage() {
  const location = useLocation();
  const lang = resolveDemoLanguage(location.search);
  const text = lang === 'pt'
    ? {
        title: 'Configuracoes',
        subtitle: 'Gerencie preferencias da conta e seguranca.',
        notifications: 'Notificacoes',
        notifDesc: 'Controle como voce recebe alertas e atualizacoes.',
        security: 'Seguranca',
        secDesc: 'Gerencie senha e seguranca da conta.',
        danger: 'Zona de Risco',
        dangerDesc: 'Acoes irreversiveis da conta.',
        emailNotif: 'Notificacoes por Email',
        emailNotifDesc: 'Receba atualizacoes sobre visualizacoes por email.',
        productUpd: 'Atualizacoes do Produto',
        productUpdDesc: 'Fique por dentro de novos templates e recursos.',
        secAlerts: 'Alertas de Seguranca',
        secAlertsDesc: 'Receba alertas de eventos importantes de seguranca.',
        password: 'Senha',
        passwordDesc: 'Alterada ha 3 meses.',
        changePassword: 'Alterar Senha',
        twoFactor: 'Autenticacao em Dois Fatores',
        twoFactorDesc: 'Adicione uma camada extra de seguranca.',
        enable2fa: 'Ativar 2FA',
        deleteAccount: 'Excluir Conta',
        deleteDesc: 'Exclui permanentemente sua conta e curriculos.',
      }
    : {
        title: 'Settings',
        subtitle: 'Manage your account preferences and security.',
        notifications: 'Notifications',
        notifDesc: 'Control how you receive alerts and updates.',
        security: 'Security',
        secDesc: 'Manage your password and account security.',
        danger: 'Danger Zone',
        dangerDesc: 'Irreversible account actions.',
        emailNotif: 'Email Notifications',
        emailNotifDesc: 'Receive updates about your resume views via email.',
        productUpd: 'Product Updates',
        productUpdDesc: 'Stay informed about new templates and features.',
        secAlerts: 'Security Alerts',
        secAlertsDesc: 'Get notified about important account security events.',
        password: 'Password',
        passwordDesc: 'Last changed 3 months ago.',
        changePassword: 'Change Password',
        twoFactor: 'Two-Factor Authentication',
        twoFactorDesc: 'Add an extra layer of security to your account.',
        enable2fa: 'Enable 2FA',
        deleteAccount: 'Delete Account',
        deleteDesc: 'Permanently delete your account and all your resumes.',
      };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-zinc-900">{text.title}</h1>
        <p className="text-sm text-zinc-500">{text.subtitle}</p>
      </div>

      <div className="space-y-6">
        <Card>
          <CardHeader className="flex flex-row items-center space-x-4">
            <div className="rounded-lg bg-blue-50 p-2 text-blue-600">
              <Bell className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-bold text-zinc-900">{text.notifications}</h3>
              <p className="text-xs text-zinc-500">{text.notifDesc}</p>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { label: text.emailNotif, description: text.emailNotifDesc, enabled: true },
              { label: text.productUpd, description: text.productUpdDesc, enabled: false },
              { label: text.secAlerts, description: text.secAlertsDesc, enabled: true },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center justify-between py-2">
                <div>
                  <p className="text-sm font-medium text-zinc-900">{item.label}</p>
                  <p className="text-xs text-zinc-500">{item.description}</p>
                </div>
                <div className={cn('h-6 w-11 rounded-full p-1 transition-colors cursor-pointer', item.enabled ? 'bg-zinc-900' : 'bg-zinc-200')}>
                  <div className={cn('h-4 w-4 rounded-full bg-white transition-transform', item.enabled ? 'translate-x-5' : 'translate-x-0')} />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center space-x-4">
            <div className="rounded-lg bg-emerald-50 p-2 text-emerald-600">
              <Shield className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-bold text-zinc-900">{text.security}</h3>
              <p className="text-xs text-zinc-500">{text.secDesc}</p>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between py-2">
              <div>
                <p className="text-sm font-medium text-zinc-900">{text.password}</p>
                <p className="text-xs text-zinc-500">{text.passwordDesc}</p>
              </div>
              <Button variant="outline" size="sm">{text.changePassword}</Button>
            </div>
            <div className="flex items-center justify-between py-2 border-t border-zinc-100 pt-4">
              <div>
                <p className="text-sm font-medium text-zinc-900">{text.twoFactor}</p>
                <p className="text-xs text-zinc-500">{text.twoFactorDesc}</p>
              </div>
              <Button variant="outline" size="sm">{text.enable2fa}</Button>
            </div>
          </CardContent>
        </Card>

        <Card className="border-red-100 bg-red-50/30">
          <CardHeader className="flex flex-row items-center space-x-4">
            <div className="rounded-lg bg-red-100 p-2 text-red-600">
              <Trash2 className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-bold text-red-900">{text.danger}</h3>
              <p className="text-xs text-red-600/70">{text.dangerDesc}</p>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between py-2">
              <div>
                <p className="text-sm font-medium text-red-900">{text.deleteAccount}</p>
                <p className="text-xs text-red-600/70">{text.deleteDesc}</p>
              </div>
              <Button variant="danger" size="sm">{text.deleteAccount}</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
