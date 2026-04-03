import * as React from 'react';
import { useParams, useNavigate, useSearchParams, useLocation } from 'react-router-dom';
import {
  ArrowLeft,
  Save,
  Eye,
  Download,
  Plus,
  Trash2,
  ChevronRight,
  User,
  Briefcase,
  GraduationCap,
  Wrench,
  Award,
  Folder,
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Card, CardContent } from '../components/ui/Card';
import { cn } from '../lib/utils';
import { MOCK_RESUMES } from '../data/mockData';
import { Resume, SectionType } from '../types';
import { curate } from '../lib/paths';
import { resolveDemoLanguage } from '../../../../utils/demoLanguage';

export function ResumeBuilder() {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const location = useLocation();
  const lang = resolveDemoLanguage(location.search);

  const text = lang === 'pt'
    ? {
        aiTitle: 'Curriculo gerado por IA',
        untitled: 'Curriculo sem titulo',
        aiAlert: 'IA gerou um rascunho com sucesso com base na conversa.',
        saved: 'Curriculo salvo com sucesso!',
        template: 'Template',
        preview: 'Preview',
        save: 'Salvar',
        export: 'Exportar',
        sections: {
          personal: 'Dados Pessoais',
          experience: 'Experiencia',
          education: 'Formacao',
          skills: 'Habilidades',
          certifications: 'Certificacoes',
          projects: 'Projetos',
        },
        personalInfo: 'Informacoes Pessoais',
        fullName: 'Nome Completo',
        jobTitle: 'Cargo',
        phone: 'Telefone',
        location: 'Localizacao',
        summary: 'Resumo',
        workExperience: 'Experiencia Profissional',
        addRole: 'Adicionar Cargo',
        company: 'Empresa',
        position: 'Posicao',
        startDate: 'Data de Inicio',
        endDate: 'Data de Fim',
        present: 'Atual',
        addDetails: 'Adicionar detalhes de',
        addInfo: 'Comece a adicionar informacoes de',
        addItem: 'Adicionar Item',
      }
    : {
        aiTitle: 'AI Generated Resume',
        untitled: 'Untitled Resume',
        aiAlert: 'AI has successfully drafted your resume based on our conversation!',
        saved: 'Resume saved successfully!',
        template: 'Template',
        preview: 'Preview',
        save: 'Save',
        export: 'Export',
        sections: {
          personal: 'Personal Info',
          experience: 'Experience',
          education: 'Education',
          skills: 'Skills',
          certifications: 'Certifications',
          projects: 'Projects',
        },
        personalInfo: 'Personal Information',
        fullName: 'Full Name',
        jobTitle: 'Job Title',
        phone: 'Phone',
        location: 'Location',
        summary: 'Summary',
        workExperience: 'Work Experience',
        addRole: 'Add Role',
        company: 'Company',
        position: 'Position',
        startDate: 'Start Date',
        endDate: 'End Date',
        present: 'Present',
        addDetails: 'Add',
        addInfo: 'Start adding your',
        addItem: 'Add Item',
      };

  const [activeSection, setActiveSection] = React.useState<SectionType>('personal');
  const [resume] = React.useState<Resume>(() => {
    if (id === 'new') {
      const isAI = searchParams.get('ai') === 'true';
      return {
        ...MOCK_RESUMES[0],
        id: 'new',
        title: isAI ? text.aiTitle : text.untitled,
        templateId: searchParams.get('template') || 'modern',
        updatedAt: new Date().toISOString(),
      };
    }
    return MOCK_RESUMES.find((r) => r.id === id) || MOCK_RESUMES[0];
  });

  const isAI = searchParams.get('ai') === 'true';

  React.useEffect(() => {
    if (!isAI) return;
    const timer = setTimeout(() => {
      alert(text.aiAlert);
    }, 1000);
    return () => clearTimeout(timer);
  }, [isAI, text.aiAlert]);

  const sections = [
    { id: 'personal', label: text.sections.personal, icon: User },
    { id: 'experience', label: text.sections.experience, icon: Briefcase },
    { id: 'education', label: text.sections.education, icon: GraduationCap },
    { id: 'skills', label: text.sections.skills, icon: Wrench },
    { id: 'certifications', label: text.sections.certifications, icon: Award },
    { id: 'projects', label: text.sections.projects, icon: Folder },
  ];

  return (
    <div className="fixed inset-x-0 bottom-0 top-6 z-50 flex flex-col bg-white overflow-hidden">
      <header className="flex h-16 items-center justify-between border-b border-zinc-200 bg-white px-3 sm:px-6">
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" onClick={() => navigate(curate('resumes'))}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div className="h-6 w-px bg-zinc-200" />
          <div>
            <h1 className="text-sm font-bold text-zinc-900">{resume.title}</h1>
            <p className="text-xs text-zinc-500">{text.template}: {resume.templateId}</p>
          </div>
        </div>
        <div className="flex items-center gap-1 sm:gap-2">
          <Button variant="outline" size="sm" onClick={() => navigate(curate(`preview/${resume.id}`))}>
            <Eye className="h-4 w-4 sm:mr-2" />
            <span className="hidden sm:inline">{text.preview}</span>
          </Button>
          <Button size="sm" onClick={() => alert(text.saved)}>
            <Save className="h-4 w-4 sm:mr-2" />
            <span className="hidden sm:inline">{text.save}</span>
          </Button>
          <Button variant="secondary" size="sm">
            <Download className="h-4 w-4 sm:mr-2" />
            <span className="hidden sm:inline">{text.export}</span>
          </Button>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        <aside className="w-64 border-r border-zinc-200 bg-zinc-50/50 p-4 overflow-y-auto hidden md:block">
          <nav className="space-y-1">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id as SectionType)}
                className={cn(
                  'flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                  activeSection === section.id ? 'bg-white text-zinc-900 shadow-sm ring-1 ring-zinc-200' : 'text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900',
                )}
              >
                <div className="flex items-center space-x-3">
                  <section.icon className="h-4 w-4" />
                  <span>{section.label}</span>
                </div>
                <ChevronRight className={cn('h-4 w-4 transition-transform', activeSection === section.id && 'rotate-90')} />
              </button>
            ))}
          </nav>
        </aside>

        <div className="flex-1 overflow-y-auto bg-white p-6 lg:p-10">
          <div className="mb-4 -mx-2 flex gap-2 overflow-x-auto px-2 md:hidden">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id as SectionType)}
                className={cn(
                  'whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-semibold',
                  activeSection === section.id ? 'bg-zinc-900 text-white' : 'bg-zinc-100 text-zinc-600'
                )}
              >
                {section.label}
              </button>
            ))}
          </div>
          <div className="mx-auto max-w-2xl space-y-8">
            {activeSection === 'personal' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-zinc-900">{text.personalInfo}</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Input label={text.fullName} value={resume.personalInfo.fullName} onChange={() => {}} />
                  <Input label={text.jobTitle} value={resume.personalInfo.jobTitle} onChange={() => {}} />
                  <Input label="Email" value={resume.personalInfo.email} onChange={() => {}} />
                  <Input label={text.phone} value={resume.personalInfo.phone} onChange={() => {}} />
                  <Input label={text.location} value={resume.personalInfo.location} onChange={() => {}} />
                  <Input label="Website" value={resume.personalInfo.website} onChange={() => {}} />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold uppercase tracking-wider text-zinc-500">{text.summary}</label>
                  <textarea className="w-full min-h-[120px] rounded-lg border border-zinc-200 p-3 text-sm focus:ring-2 focus:ring-zinc-400 focus:outline-none" value={resume.personalInfo.summary} onChange={() => {}} />
                </div>
              </div>
            )}

            {activeSection === 'experience' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-zinc-900">{text.workExperience}</h2>
                  <Button variant="outline" size="sm">
                    <Plus className="mr-2 h-4 w-4" />
                    {text.addRole}
                  </Button>
                </div>
                {resume.experience.map((exp) => (
                  <Card key={exp.id}>
                    <CardContent className="p-6 space-y-4">
                      <div className="flex items-start justify-between">
                        <div className="grid flex-1 gap-4 sm:grid-cols-2">
                          <Input label={text.company} value={exp.company} onChange={() => {}} />
                          <Input label={text.position} value={exp.position} onChange={() => {}} />
                        </div>
                        <Button variant="ghost" size="icon" className="ml-2 text-zinc-400 hover:text-red-600">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="grid gap-4 sm:grid-cols-2">
                        <Input label={text.startDate} value={exp.startDate} onChange={() => {}} />
                        <Input label={text.endDate} value={exp.endDate} placeholder={text.present} onChange={() => {}} />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}

            {activeSection !== 'personal' && activeSection !== 'experience' && (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <div className="mb-4 rounded-full bg-zinc-100 p-6">
                  <Plus className="h-10 w-10 text-zinc-400" />
                </div>
                <h3 className="text-lg font-bold text-zinc-900">{text.addDetails} {activeSection}</h3>
                <p className="text-sm text-zinc-500 max-w-xs mt-2">
                  {text.addInfo} {activeSection} {lang === 'pt' ? 'para montar um perfil profissional completo.' : 'information to build a comprehensive professional profile.'}
                </p>
                <Button className="mt-6">{text.addItem}</Button>
              </div>
            )}
          </div>
        </div>

        <aside className="hidden xl:block w-[500px] border-l border-zinc-200 bg-zinc-100 p-8 overflow-y-auto">
          <div className="mx-auto w-full aspect-[1/1.414] bg-white shadow-2xl p-10 font-serif">
            <div className="space-y-6">
              <div className="border-b-2 border-zinc-900 pb-6">
                <h1 className="text-3xl font-bold uppercase tracking-tighter text-zinc-900">{resume.personalInfo.fullName}</h1>
                <p className="text-lg text-zinc-600 mt-1">{resume.personalInfo.jobTitle}</p>
                <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-xs text-zinc-500 font-sans italic">
                  <span>{resume.personalInfo.email}</span>
                  <span>{resume.personalInfo.phone}</span>
                  <span>{resume.personalInfo.location}</span>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-900 border-b border-zinc-200 pb-1">{text.summary}</h2>
                <p className="text-sm leading-relaxed text-zinc-700">{resume.personalInfo.summary}</p>
              </div>

              <div className="space-y-4">
                <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-900 border-b border-zinc-200 pb-1">{text.workExperience}</h2>
                {resume.experience.map((exp) => (
                  <div key={exp.id} className="space-y-1">
                    <div className="flex justify-between items-baseline">
                      <h3 className="font-bold text-zinc-900">{exp.position}</h3>
                      <span className="text-xs text-zinc-500">{exp.startDate} - {exp.endDate || text.present}</span>
                    </div>
                    <p className="text-sm text-zinc-600 italic">{exp.company}</p>
                    <p className="text-sm text-zinc-700 mt-2">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
