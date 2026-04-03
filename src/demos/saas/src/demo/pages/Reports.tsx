import { Card, Button, Badge } from '../components/UI';
import { Download, Eye, FileText, Filter, Search, Share2 } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { resolveDemoLanguage } from '../../../../../utils/demoLanguage';

const REPORTS = [
  { id: 'REP-001', title: 'Q1 Financial Performance', type: 'Financial', date: '2024-03-25', status: 'Generated', size: '2.4 MB' },
  { id: 'REP-002', title: 'Customer Churn Analysis', type: 'Analytics', date: '2024-03-20', status: 'Generated', size: '1.8 MB' },
  { id: 'REP-003', title: 'Infrastructure Audit 2024', type: 'Technical', date: '2024-03-15', status: 'Archived', size: '4.2 MB' },
  { id: 'REP-004', title: 'Marketing ROI Dashboard', type: 'Marketing', date: '2024-03-10', status: 'Generated', size: '0.9 MB' },
  { id: 'REP-005', title: 'User Behavior Insights', type: 'Analytics', date: '2024-03-05', status: 'Generated', size: '3.1 MB' },
];

export const Reports = () => {
  const location = useLocation();
  const lang = resolveDemoLanguage(location.search);
  const text = lang === 'pt'
    ? {
        title: 'Central de relatorios',
        subtitle: 'Gere e gerencie relatorios operacionais.',
        generate: 'Gerar relatorio',
        totalReports: 'Total de relatorios',
        storage: 'Armazenamento usado',
        scheduled: 'Exportacoes agendadas',
        search: 'Buscar relatorios...',
        filter: 'Filtrar',
        showing: 'Exibindo',
        reports: 'relatorios',
        report: 'Relatorio',
        type: 'Tipo',
        date: 'Data',
        size: 'Tamanho',
        status: 'Status',
        actions: 'Acoes',
      }
    : {
        title: 'Reports Center',
        subtitle: 'Generate and manage operational reports for your team.',
        generate: 'Generate Report',
        totalReports: 'Total Reports',
        storage: 'Storage Used',
        scheduled: 'Scheduled Exports',
        search: 'Search reports...',
        filter: 'Filter',
        showing: 'Showing',
        reports: 'reports',
        report: 'Report',
        type: 'Type',
        date: 'Date',
        size: 'Size',
        status: 'Status',
        actions: 'Actions',
      };

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">{text.title}</h1>
          <p className="mt-1 text-slate-500">{text.subtitle}</p>
        </div>
        <Button className="w-full sm:w-auto gap-2">
          <FileText size={16} />
          {text.generate}
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <Card>
          <p className="text-xs uppercase tracking-wider text-slate-500">{text.totalReports}</p>
          <p className="mt-2 text-2xl sm:text-3xl font-bold text-slate-900">842</p>
          <p className="mt-1 text-xs text-emerald-600">+12 this week</p>
        </Card>
        <Card>
          <p className="text-xs uppercase tracking-wider text-slate-500">{text.storage}</p>
          <p className="mt-2 text-2xl sm:text-3xl font-bold text-slate-900">12.4 GB</p>
          <p className="mt-1 text-xs text-slate-500">of 50 GB available</p>
        </Card>
        <Card>
          <p className="text-xs uppercase tracking-wider text-slate-500">{text.scheduled}</p>
          <p className="mt-2 text-2xl sm:text-3xl font-bold text-slate-900">4</p>
          <p className="mt-1 text-xs text-slate-500">next run in 2 days</p>
        </Card>
      </div>

      <Card noPadding>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between border-b border-slate-100 bg-slate-50/40 p-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <div className="relative w-full sm:w-auto">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
              <input
                type="text"
                placeholder={text.search}
                className="w-full sm:w-72 rounded-lg border border-slate-200 bg-white py-2 pl-9 pr-4 text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
              />
            </div>
            <Button variant="outline" size="sm" className="gap-2">
              <Filter size={14} />
              {text.filter}
            </Button>
          </div>
          <p className="text-xs text-slate-500 sm:text-right">{text.showing} {REPORTS.length} {text.reports}</p>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-[760px] w-full text-left">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50/50">
                <th className="px-4 py-3 sm:px-6 text-[10px] font-bold uppercase tracking-widest text-slate-400">{text.report}</th>
                <th className="px-4 py-3 sm:px-6 text-[10px] font-bold uppercase tracking-widest text-slate-400">{text.type}</th>
                <th className="px-4 py-3 sm:px-6 text-[10px] font-bold uppercase tracking-widest text-slate-400">{text.date}</th>
                <th className="px-4 py-3 sm:px-6 text-[10px] font-bold uppercase tracking-widest text-slate-400">{text.size}</th>
                <th className="px-4 py-3 sm:px-6 text-[10px] font-bold uppercase tracking-widest text-slate-400">{text.status}</th>
                <th className="px-4 py-3 sm:px-6 text-right text-[10px] font-bold uppercase tracking-widest text-slate-400">{text.actions}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {REPORTS.map((report) => (
                <tr key={report.id} className="group transition-colors hover:bg-slate-50/60">
                  <td className="px-4 py-3 sm:px-6 sm:py-4">
                    <p className="text-sm font-semibold text-slate-900">{report.title}</p>
                    <p className="text-xs text-slate-500">{report.id}</p>
                  </td>
                  <td className="px-4 py-3 sm:px-6 sm:py-4 text-xs text-slate-600">{report.type}</td>
                  <td className="px-4 py-3 sm:px-6 sm:py-4 text-xs text-slate-500">{report.date}</td>
                  <td className="px-4 py-3 sm:px-6 sm:py-4 text-xs text-slate-500">{report.size}</td>
                  <td className="px-4 py-3 sm:px-6 sm:py-4">
                    <Badge variant={report.status === 'Archived' ? 'neutral' : 'success'}>{report.status}</Badge>
                  </td>
                  <td className="px-4 py-3 sm:px-6 sm:py-4">
                    <div className="flex items-center justify-end gap-2">
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Eye size={14} />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Download size={14} />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Share2 size={14} />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};


