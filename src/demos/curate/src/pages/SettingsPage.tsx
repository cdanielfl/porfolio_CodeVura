import * as React from 'react';
import { Bell, Shield, CreditCard, Laptop, Globe, Trash2 } from 'lucide-react';
import { cn } from '../lib/utils';
import { Button } from '../components/ui/Button';
import { Card, CardContent, CardHeader } from '../components/ui/Card';

export function SettingsPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-zinc-900">Settings</h1>
        <p className="text-sm text-zinc-500">Manage your account preferences and security.</p>
      </div>

      <div className="space-y-6">
        {/* Notifications */}
        <Card>
          <CardHeader className="flex flex-row items-center space-x-4">
            <div className="rounded-lg bg-blue-50 p-2 text-blue-600">
              <Bell className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-bold text-zinc-900">Notifications</h3>
              <p className="text-xs text-zinc-500">Control how you receive alerts and updates.</p>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { label: 'Email Notifications', description: 'Receive updates about your resume views via email.', enabled: true },
              { label: 'Product Updates', description: 'Stay informed about new templates and features.', enabled: false },
              { label: 'Security Alerts', description: 'Get notified about important account security events.', enabled: true },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center justify-between py-2">
                <div>
                  <p className="text-sm font-medium text-zinc-900">{item.label}</p>
                  <p className="text-xs text-zinc-500">{item.description}</p>
                </div>
                <div className={cn(
                  'h-6 w-11 rounded-full p-1 transition-colors cursor-pointer',
                  item.enabled ? 'bg-zinc-900' : 'bg-zinc-200'
                )}>
                  <div className={cn(
                    'h-4 w-4 rounded-full bg-white transition-transform',
                    item.enabled ? 'translate-x-5' : 'translate-x-0'
                  )} />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Security */}
        <Card>
          <CardHeader className="flex flex-row items-center space-x-4">
            <div className="rounded-lg bg-emerald-50 p-2 text-emerald-600">
              <Shield className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-bold text-zinc-900">Security</h3>
              <p className="text-xs text-zinc-500">Manage your password and account security.</p>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between py-2">
              <div>
                <p className="text-sm font-medium text-zinc-900">Password</p>
                <p className="text-xs text-zinc-500">Last changed 3 months ago.</p>
              </div>
              <Button variant="outline" size="sm">Change Password</Button>
            </div>
            <div className="flex items-center justify-between py-2 border-t border-zinc-100 pt-4">
              <div>
                <p className="text-sm font-medium text-zinc-900">Two-Factor Authentication</p>
                <p className="text-xs text-zinc-500">Add an extra layer of security to your account.</p>
              </div>
              <Button variant="outline" size="sm">Enable 2FA</Button>
            </div>
          </CardContent>
        </Card>

        {/* Danger Zone */}
        <Card className="border-red-100 bg-red-50/30">
          <CardHeader className="flex flex-row items-center space-x-4">
            <div className="rounded-lg bg-red-100 p-2 text-red-600">
              <Trash2 className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-bold text-red-900">Danger Zone</h3>
              <p className="text-xs text-red-600/70">Irreversible account actions.</p>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between py-2">
              <div>
                <p className="text-sm font-medium text-red-900">Delete Account</p>
                <p className="text-xs text-red-600/70">Permanently delete your account and all your resumes.</p>
              </div>
              <Button variant="danger" size="sm">Delete Account</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

