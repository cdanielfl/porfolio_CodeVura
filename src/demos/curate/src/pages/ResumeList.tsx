import * as React from 'react';
import { Link } from 'react-router-dom';
import { 
  Plus, 
  Search, 
  Filter, 
  MoreVertical, 
  Copy, 
  Trash2, 
  Download, 
  ExternalLink,
  Clock,
  Sparkles
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card, CardContent } from '../components/ui/Card';
import { Input } from '../components/ui/Input';
import { Badge } from '../components/ui/Badge';
import { MOCK_RESUMES } from '../data/mockData';
import { formatDate } from '../lib/utils';
import { curate } from '../lib/paths';

export function ResumeList() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-zinc-900">My Resumes</h1>
          <p className="text-sm text-zinc-500">Manage and organize all your resume versions.</p>
        </div>
        <div className="flex items-center space-x-3">
          <Link to={curate('ai-onboarding')}>
            <Button variant="outline">
              <Sparkles className="mr-2 h-4 w-4 text-zinc-900" />
              Create with AI
            </Button>
          </Link>
          <Link to={curate('templates')}>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Create New
            </Button>
          </Link>
        </div>
      </div>

      {/* Filters & Search */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />
          <Input placeholder="Search resumes..." className="pl-10" />
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
          <Button variant="outline" size="sm">
            Sort: Recent
          </Button>
        </div>
      </div>

      {/* Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {MOCK_RESUMES.map((resume) => (
          <Card key={resume.id} className="group flex flex-col">
            <div className="aspect-[3/4] overflow-hidden bg-zinc-100 relative">
              <img 
                src={resume.id === '1' ? 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=400&h=600' : `https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?auto=format&fit=crop&q=80&w=400&h=600`} 
                alt={resume.title} 
                className="h-full w-full object-cover transition-transform group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center space-y-2 p-4">
                <Link to={curate(`builder/${resume.id}`)} className="w-full">
                  <Button size="sm" className="w-full bg-white text-zinc-900 hover:bg-zinc-100">Edit Resume</Button>
                </Link>
                <Link to={curate(`preview/${resume.id}`)} className="w-full">
                  <Button size="sm" variant="secondary" className="w-full">Live Preview</Button>
                </Link>
              </div>
            </div>
            <CardContent className="p-4 flex-1 flex flex-col">
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-bold text-zinc-900 truncate">{resume.title}</h3>
                <button className="text-zinc-400 hover:text-zinc-900">
                  <MoreVertical className="h-4 w-4" />
                </button>
              </div>
              <div className="mt-auto space-y-3">
                <div className="flex items-center text-xs text-zinc-500">
                  <Clock className="mr-1 h-3 w-3" />
                  <span>Updated {formatDate(resume.updatedAt)}</span>
                </div>
                <div className="flex items-center justify-between pt-3 border-t border-zinc-100">
                  <Badge variant="outline">{resume.templateId}</Badge>
                  <div className="flex space-x-1">
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-zinc-400 hover:text-zinc-900">
                      <Copy className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-zinc-400 hover:text-red-600">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
        
        <Link to={curate('templates')} className="flex aspect-[3/4] flex-col items-center justify-center rounded-xl border-2 border-dashed border-zinc-200 bg-white hover:border-zinc-300 hover:bg-zinc-50 transition-all">
          <Plus className="mb-2 h-8 w-8 text-zinc-400" />
          <p className="font-bold text-zinc-900 text-sm">Create New</p>
        </Link>
      </div>
    </div>
  );
}
