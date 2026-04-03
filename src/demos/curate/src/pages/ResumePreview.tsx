import * as React from 'react';
import { useLocation, useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Download, Share2, Printer, Check } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { MOCK_RESUMES } from '../data/mockData';
import { resolveDemoLanguage } from '../../../../utils/demoLanguage';

export function ResumePreview() {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const lang = resolveDemoLanguage(location.search);
  const resume = MOCK_RESUMES.find((r) => r.id === id) || MOCK_RESUMES[0];

  const text = lang === 'pt'
    ? {
        preview: 'Preview',
        share: 'Compartilhar',
        print: 'Imprimir',
        download: 'Baixar PDF',
        summary: 'Resumo Profissional',
        experience: 'Experiencia Profissional',
        education: 'Formacao',
        inWord: 'em',
        expertise: 'Competencias',
        present: 'Atual',
      }
    : {
        preview: 'Preview',
        share: 'Share',
        print: 'Print',
        download: 'Download PDF',
        summary: 'Professional Summary',
        experience: 'Work Experience',
        education: 'Education',
        inWord: 'in',
        expertise: 'Expertise',
        present: 'Present',
      };

  return (
    <div className="min-h-screen bg-zinc-100 flex flex-col">
      <header className="sticky top-6 z-50 flex h-16 items-center justify-between border-b border-zinc-200 bg-white px-4 sm:px-6 lg:px-8 shadow-sm">
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div className="h-6 w-px bg-zinc-200" />
          <h1 className="text-sm font-bold text-zinc-900">{resume.title} - {text.preview}</h1>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm">
            <Share2 className="mr-2 h-4 w-4" />
            {text.share}
          </Button>
          <Button variant="outline" size="sm">
            <Printer className="mr-2 h-4 w-4" />
            {text.print}
          </Button>
          <Button size="sm">
            <Download className="mr-2 h-4 w-4" />
            {text.download}
          </Button>
        </div>
      </header>

      <main className="flex-1 p-4 sm:p-8 lg:p-12 overflow-y-auto flex justify-center">
        <div className="w-full max-w-[850px] bg-white shadow-2xl p-12 sm:p-20 font-serif min-h-[1100px]">
          <div className="space-y-10">
            <div className="text-center space-y-4 border-b-4 border-zinc-900 pb-10">
              <h1 className="text-5xl font-bold uppercase tracking-tighter text-zinc-900">{resume.personalInfo.fullName}</h1>
              <p className="text-2xl text-zinc-600 font-medium">{resume.personalInfo.jobTitle}</p>
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-zinc-500 font-sans">
                <span>{resume.personalInfo.email}</span>
                <span>{resume.personalInfo.phone}</span>
                <span>{resume.personalInfo.location}</span>
                <span>{resume.personalInfo.website}</span>
              </div>
            </div>

            <section className="space-y-4">
              <h2 className="text-lg font-bold uppercase tracking-widest text-zinc-900 border-b-2 border-zinc-100 pb-2">{text.summary}</h2>
              <p className="text-base leading-relaxed text-zinc-700">{resume.personalInfo.summary}</p>
            </section>

            <section className="space-y-6">
              <h2 className="text-lg font-bold uppercase tracking-widest text-zinc-900 border-b-2 border-zinc-100 pb-2">{text.experience}</h2>
              {resume.experience.map((exp) => (
                <div key={exp.id} className="space-y-2">
                  <div className="flex justify-between items-baseline">
                    <h3 className="text-xl font-bold text-zinc-900">{exp.position}</h3>
                    <span className="text-sm font-medium text-zinc-500">{exp.startDate} - {exp.endDate || text.present}</span>
                  </div>
                  <p className="text-lg text-zinc-600 italic">{exp.company} - {exp.location}</p>
                  <p className="text-base text-zinc-700 leading-relaxed mt-3">{exp.description}</p>
                </div>
              ))}
            </section>

            <section className="space-y-6">
              <h2 className="text-lg font-bold uppercase tracking-widest text-zinc-900 border-b-2 border-zinc-100 pb-2">{text.education}</h2>
              {resume.education.map((edu) => (
                <div key={edu.id} className="space-y-1">
                  <div className="flex justify-between items-baseline">
                    <h3 className="text-xl font-bold text-zinc-900">{edu.school}</h3>
                    <span className="text-sm font-medium text-zinc-500">{edu.startDate} - {edu.endDate}</span>
                  </div>
                  <p className="text-lg text-zinc-600 italic">{edu.degree} {text.inWord} {edu.field}</p>
                </div>
              ))}
            </section>

            <section className="space-y-4">
              <h2 className="text-lg font-bold uppercase tracking-widest text-zinc-900 border-b-2 border-zinc-100 pb-2">{text.expertise}</h2>
              <div className="flex flex-wrap gap-3">
                {resume.skills.map((skill) => (
                  <div key={skill.id} className="flex items-center bg-zinc-50 px-3 py-1.5 rounded border border-zinc-200 text-sm font-medium text-zinc-800">
                    <Check className="mr-2 h-3 w-3 text-emerald-600" />
                    {skill.name}
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
