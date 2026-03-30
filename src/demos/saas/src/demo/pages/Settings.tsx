import { Card, Button, Badge } from '../components/UI';
import { Bell, Shield, Globe, Zap, CreditCard, Users, Mail, Trash2, ChevronRight } from 'lucide-react';

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
  return (
    <div className="max-w-5xl space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">System Settings</h1>
        <p className="mt-1 text-slate-500">Configure platform preferences and security policies.</p>
      </div>

      <Card>
        <div className="space-y-5">
          <h2 className="text-lg font-semibold text-slate-900">General Configuration</h2>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-slate-500">Platform Name</label>
              <input
                type="text"
                defaultValue="NexusBiz Operations"
                className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-slate-500">Support Email</label>
              <input
                type="email"
                defaultValue="support@nexusbiz.com"
                className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-wider text-slate-500">Description</label>
            <textarea
              rows={4}
              defaultValue="Operational platform for managing orders, inventory, and analytics in one place."
              className="w-full resize-none rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
            />
          </div>
          <div className="flex justify-end">
            <Button>Save Changes</Button>
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
            <Badge variant="error">Danger Zone</Badge>
            <h3 className="mt-3 text-lg font-semibold text-red-700">Delete Workspace</h3>
            <p className="mt-1 text-sm text-red-600/80">This action permanently removes settings, data, and user access.</p>
          </div>
          <Button variant="danger" className="gap-2">
            <Trash2 size={16} />
            Delete Workspace
          </Button>
        </div>
      </Card>
    </div>
  );
};

