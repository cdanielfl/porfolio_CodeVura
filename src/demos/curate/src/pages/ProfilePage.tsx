import * as React from 'react';
import { User, Mail, Phone, MapPin, Globe, Linkedin, Camera } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Card, CardContent, CardHeader } from '../components/ui/Card';

export function ProfilePage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-zinc-900">Profile</h1>
        <p className="text-sm text-zinc-500">Manage your personal information and public profile.</p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {/* Avatar Section */}
        <Card className="md:col-span-1 h-fit">
          <CardContent className="p-6 flex flex-col items-center text-center">
            <div className="relative group mb-4">
              <div className="h-32 w-32 rounded-full bg-zinc-100 border-4 border-white shadow-md overflow-hidden">
                <img src="https://picsum.photos/seed/user/128/128" alt="Avatar" referrerPolicy="no-referrer" />
              </div>
              <button className="absolute inset-0 flex items-center justify-center bg-black/40 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                <Camera className="h-6 w-6" />
              </button>
            </div>
            <h3 className="font-bold text-zinc-900 text-lg">Alex Rivera</h3>
            <p className="text-sm text-zinc-500">Senior Product Designer</p>
            <div className="mt-6 w-full space-y-2">
              <Button variant="outline" className="w-full text-xs">Change Avatar</Button>
              <Button variant="ghost" className="w-full text-xs text-red-600 hover:text-red-700">Remove</Button>
            </div>
          </CardContent>
        </Card>

        {/* Form Section */}
        <div className="md:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <h3 className="font-bold text-zinc-900">Personal Details</h3>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <Input label="First Name" defaultValue="Alex" />
                <Input label="Last Name" defaultValue="Rivera" />
              </div>
              <Input label="Professional Title" defaultValue="Senior Product Designer" />
              <div className="space-y-1.5">
                <label className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Short Bio</label>
                <textarea 
                  className="w-full min-h-[100px] rounded-lg border border-zinc-200 p-3 text-sm focus:ring-2 focus:ring-zinc-400 focus:outline-none"
                  defaultValue="Product Designer with 8+ years of experience building scalable design systems and user-centric interfaces."
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <h3 className="font-bold text-zinc-900">Contact Information</h3>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <Input label="Email" defaultValue="alex.rivera@example.com" icon={Mail} />
                <Input label="Phone" defaultValue="+1 (555) 123-4567" icon={Phone} />
                <Input label="Location" defaultValue="San Francisco, CA" icon={MapPin} />
                <Input label="Website" defaultValue="alexrivera.design" icon={Globe} />
                <Input label="LinkedIn" defaultValue="linkedin.com/in/alexrivera" icon={Linkedin} className="sm:col-span-2" />
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-end space-x-4">
            <Button variant="outline">Cancel</Button>
            <Button>Save Changes</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
