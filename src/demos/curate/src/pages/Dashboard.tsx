import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Plus, FileText, TrendingUp, Eye, Clock, Sparkles } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card, CardContent } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { MOCK_RESUMES } from '../data/mockData';
import { cn, formatDate } from '../lib/utils';
import { curate } from '../lib/paths';
import { resolveDemoLanguage } from '../../../../utils/demoLanguage';

export function Dashboard() {
  const location = useLocation();
  const lang = resolveDemoLanguage(location.search);

  const text = lang === 'pt'
    ? {
        title: 'Bem-vindo de volta, Alex',
        subtitle: 'Veja o que esta acontecendo com seus curriculos.',
        ai: 'Criar com IA',
        create: 'Criar Novo',
        stats: ['Total de Curriculos', 'Visualizacoes', 'Candidaturas'],
        recent: 'Curriculos Recentes',
        viewAll: 'Ver todos',
        edit: 'Editar',
        preview: 'Preview',
        updated: 'Atualizado',
        active: 'Ativo',
        createResume: 'Criar Novo Curriculo',
        startTemplate: 'Comecar com um template',
      }
    : {
        title: 'Welcome back, Alex',
        subtitle: "Here's what's happening with your resumes.",
        ai: 'Create with AI',
        create: 'Create New',
        stats: ['Total Resumes', 'Profile Views', 'Applications'],
        recent: 'Recent Resumes',
        viewAll: 'View all',
        edit: 'Edit',
        preview: 'Preview',
        updated: 'Updated',
        active: 'Active',
        createResume: 'Create New Resume',
        startTemplate: 'Start from a template',
      };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-zinc-900">{text.title}</h1>
          <p className="text-sm text-zinc-500">{text.subtitle}</p>
        </div>
        <div className="flex items-center space-x-3">
          <Link to={curate('ai-onboarding')}>
            <Button variant="outline" className="border-zinc-200 hover:bg-zinc-50">
              <Sparkles className="mr-2 h-4 w-4 text-zinc-900" />
              {text.ai}
            </Button>
          </Link>
          <Link to={curate('templates')}>
            <Button shadow-sm>
              <Plus className="mr-2 h-4 w-4" />
              {text.create}
            </Button>
          </Link>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {[
          { label: text.stats[0], value: '3', icon: FileText, color: 'bg-blue-50 text-blue-600' },
          { label: text.stats[1], value: '124', icon: Eye, color: 'bg-emerald-50 text-emerald-600' },
          { label: text.stats[2], value: '12', icon: TrendingUp, color: 'bg-purple-50 text-purple-600' },
        ].map((stat, idx) => (
          <Card key={idx}>
            <CardContent className="flex items-center p-6">
              <div className={cn('mr-4 rounded-lg p-3', stat.color)}>
                <stat.icon className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm font-medium text-zinc-500">{stat.label}</p>
                <p className="text-2xl font-bold text-zinc-900">{stat.value}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-bold text-zinc-900">{text.recent}</h2>
          <Link to={curate('resumes')} className="text-sm font-medium text-zinc-500 hover:text-zinc-900">
            {text.viewAll}
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {MOCK_RESUMES.map((resume) => (
            <Card key={resume.id} className="group hover:border-zinc-300 transition-all">
              <div className="aspect-[3/4] overflow-hidden bg-zinc-100 relative">
                <img
                  src={resume.id === '1' ? 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=400&h=600' : `https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?auto=format&fit=crop&q=80&w=400&h=600`}
                  alt={resume.title}
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-2">
                  <Link to={curate(`builder/${resume.id}`)}>
                    <Button size="sm" className="bg-white text-zinc-900 hover:bg-zinc-100">{text.edit}</Button>
                  </Link>
                  <Link to={curate(`preview/${resume.id}`)}>
                    <Button size="sm" variant="secondary">{text.preview}</Button>
                  </Link>
                </div>
              </div>
              <CardContent className="p-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-bold text-zinc-900 truncate max-w-[180px]">{resume.title}</h3>
                    <div className="mt-1 flex items-center text-xs text-zinc-500">
                      <Clock className="mr-1 h-3 w-3" />
                      <span>{text.updated} {formatDate(resume.updatedAt)}</span>
                    </div>
                  </div>
                  <Badge variant="success">{text.active}</Badge>
                </div>
              </CardContent>
            </Card>
          ))}

          <Link to={curate('templates')} className="group flex aspect-[3/4] flex-col items-center justify-center rounded-xl border-2 border-dashed border-zinc-200 bg-white hover:border-zinc-300 hover:bg-zinc-50 transition-all">
            <div className="mb-4 rounded-full bg-zinc-100 p-4 group-hover:bg-zinc-200 transition-colors">
              <Plus className="h-8 w-8 text-zinc-400 group-hover:text-zinc-600" />
            </div>
            <p className="font-bold text-zinc-900">{text.createResume}</p>
            <p className="text-sm text-zinc-500">{text.startTemplate}</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
