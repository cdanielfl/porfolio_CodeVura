import * as React from 'react';
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
import { 
  ArrowLeft, 
  Save, 
  Eye, 
  Download, 
  Plus, 
  Trash2, 
  ChevronRight, 
  ChevronDown,
  User,
  Briefcase,
  GraduationCap,
  Wrench,
  Award,
  Folder
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Card, CardContent } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { cn } from '../lib/utils';
import { MOCK_RESUMES, TEMPLATES } from '../data/mockData';
import { Resume, SectionType } from '../types';
import { curate } from '../lib/paths';

export function ResumeBuilder() {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = React.useState<SectionType>('personal');
  const [resume, setResume] = React.useState<Resume>(() => {
    if (id === 'new') {
      const isAI = searchParams.get('ai') === 'true';
      return {
        ...MOCK_RESUMES[0],
        id: 'new',
        title: isAI ? 'AI Generated Resume' : 'Untitled Resume',
        templateId: searchParams.get('template') || 'modern',
        updatedAt: new Date().toISOString()
      };
    }
    return MOCK_RESUMES.find(r => r.id === id) || MOCK_RESUMES[0];
  });

  const isAI = searchParams.get('ai') === 'true';

  React.useEffect(() => {
    if (isAI) {
      // Mock AI generation delay
      const timer = setTimeout(() => {
        alert("✨ AI has successfully drafted your resume based on our conversation!");
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isAI]);

  const sections = [
    { id: 'personal', label: 'Personal Info', icon: User },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'skills', label: 'Skills', icon: Wrench },
    { id: 'certifications', label: 'Certifications', icon: Award },
    { id: 'projects', label: 'Projects', icon: Folder },
  ];

  const handleSave = () => {
    // Mock save
    alert('Resume saved successfully!');
  };

  return (
    <div className="fixed inset-x-0 bottom-0 top-6 z-50 flex flex-col bg-white overflow-hidden">
      {/* Builder Header */}
      <header className="flex h-16 items-center justify-between border-b border-zinc-200 bg-white px-4 sm:px-6">
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" onClick={() => navigate(curate('resumes'))}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div className="h-6 w-px bg-zinc-200" />
          <div>
            <h1 className="text-sm font-bold text-zinc-900">{resume.title}</h1>
            <p className="text-xs text-zinc-500">Template: {resume.templateId}</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm" onClick={() => navigate(curate(`preview/${resume.id}`))}>
            <Eye className="mr-2 h-4 w-4" />
            Preview
          </Button>
          <Button size="sm" onClick={handleSave}>
            <Save className="mr-2 h-4 w-4" />
            Save
          </Button>
          <Button variant="secondary" size="sm">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar Navigation */}
        <aside className="w-64 border-r border-zinc-200 bg-zinc-50/50 p-4 overflow-y-auto hidden md:block">
          <nav className="space-y-1">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id as SectionType)}
                className={cn(
                  'flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                  activeSection === section.id
                    ? 'bg-white text-zinc-900 shadow-sm ring-1 ring-zinc-200'
                    : 'text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900'
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

        {/* Editor Pane */}
        <div className="flex-1 overflow-y-auto bg-white p-6 lg:p-10">
          <div className="mx-auto max-w-2xl space-y-8">
            {activeSection === 'personal' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-zinc-900">Personal Information</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Input label="Full Name" value={resume.personalInfo.fullName} onChange={() => {}} />
                  <Input label="Job Title" value={resume.personalInfo.jobTitle} onChange={() => {}} />
                  <Input label="Email" value={resume.personalInfo.email} onChange={() => {}} />
                  <Input label="Phone" value={resume.personalInfo.phone} onChange={() => {}} />
                  <Input label="Location" value={resume.personalInfo.location} onChange={() => {}} />
                  <Input label="Website" value={resume.personalInfo.website} onChange={() => {}} />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Summary</label>
                  <textarea 
                    className="w-full min-h-[120px] rounded-lg border border-zinc-200 p-3 text-sm focus:ring-2 focus:ring-zinc-400 focus:outline-none"
                    value={resume.personalInfo.summary}
                    onChange={() => {}}
                  />
                </div>
              </div>
            )}

            {activeSection === 'experience' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-zinc-900">Work Experience</h2>
                  <Button variant="outline" size="sm">
                    <Plus className="mr-2 h-4 w-4" />
                    Add Role
                  </Button>
                </div>
                {resume.experience.map((exp) => (
                  <Card key={exp.id}>
                    <CardContent className="p-6 space-y-4">
                      <div className="flex items-start justify-between">
                        <div className="grid flex-1 gap-4 sm:grid-cols-2">
                          <Input label="Company" value={exp.company} onChange={() => {}} />
                          <Input label="Position" value={exp.position} onChange={() => {}} />
                        </div>
                        <Button variant="ghost" size="icon" className="ml-2 text-zinc-400 hover:text-red-600">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="grid gap-4 sm:grid-cols-2">
                        <Input label="Start Date" value={exp.startDate} onChange={() => {}} />
                        <Input label="End Date" value={exp.endDate} placeholder="Present" onChange={() => {}} />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
            
            {/* Other sections would follow same pattern */}
            {activeSection !== 'personal' && activeSection !== 'experience' && (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <div className="mb-4 rounded-full bg-zinc-100 p-6">
                  <Plus className="h-10 w-10 text-zinc-400" />
                </div>
                <h3 className="text-lg font-bold text-zinc-900">Add {activeSection} details</h3>
                <p className="text-sm text-zinc-500 max-w-xs mt-2">
                  Start adding your {activeSection} information to build a comprehensive professional profile.
                </p>
                <Button className="mt-6">Add Item</Button>
              </div>
            )}
          </div>
        </div>

        {/* Preview Pane */}
        <aside className="hidden xl:block w-[500px] border-l border-zinc-200 bg-zinc-100 p-8 overflow-y-auto">
          <div className="mx-auto w-full aspect-[1/1.414] bg-white shadow-2xl p-10 font-serif">
            {/* Mini Resume Preview */}
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
                <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-900 border-b border-zinc-200 pb-1">Summary</h2>
                <p className="text-sm leading-relaxed text-zinc-700">{resume.personalInfo.summary}</p>
              </div>

              <div className="space-y-4">
                <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-900 border-b border-zinc-200 pb-1">Experience</h2>
                {resume.experience.map(exp => (
                  <div key={exp.id} className="space-y-1">
                    <div className="flex justify-between items-baseline">
                      <h3 className="font-bold text-zinc-900">{exp.position}</h3>
                      <span className="text-xs text-zinc-500">{exp.startDate} — {exp.endDate || 'Present'}</span>
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
