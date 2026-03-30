import { Card, Button, Badge } from '../components/UI';
import { Download, Eye, FileText, Filter, Search, Share2 } from 'lucide-react';

const REPORTS = [
  { id: 'REP-001', title: 'Q1 Financial Performance', type: 'Financial', date: '2024-03-25', status: 'Generated', size: '2.4 MB' },
  { id: 'REP-002', title: 'Customer Churn Analysis', type: 'Analytics', date: '2024-03-20', status: 'Generated', size: '1.8 MB' },
  { id: 'REP-003', title: 'Infrastructure Audit 2024', type: 'Technical', date: '2024-03-15', status: 'Archived', size: '4.2 MB' },
  { id: 'REP-004', title: 'Marketing ROI Dashboard', type: 'Marketing', date: '2024-03-10', status: 'Generated', size: '0.9 MB' },
  { id: 'REP-005', title: 'User Behavior Insights', type: 'Analytics', date: '2024-03-05', status: 'Generated', size: '3.1 MB' },
];

export const Reports = () => {
  return (
    <div className="space-y-8">
      <div className="flex items-end justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">Reports Center</h1>
          <p className="mt-1 text-slate-500">Generate and manage operational reports for your team.</p>
        </div>
        <Button className="gap-2">
          <FileText size={16} />
          Generate Report
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <Card>
          <p className="text-xs uppercase tracking-wider text-slate-500">Total Reports</p>
          <p className="mt-2 text-3xl font-bold text-slate-900">842</p>
          <p className="mt-1 text-xs text-emerald-600">+12 this week</p>
        </Card>
        <Card>
          <p className="text-xs uppercase tracking-wider text-slate-500">Storage Used</p>
          <p className="mt-2 text-3xl font-bold text-slate-900">12.4 GB</p>
          <p className="mt-1 text-xs text-slate-500">of 50 GB available</p>
        </Card>
        <Card>
          <p className="text-xs uppercase tracking-wider text-slate-500">Scheduled Exports</p>
          <p className="mt-2 text-3xl font-bold text-slate-900">4</p>
          <p className="mt-1 text-xs text-slate-500">next run in 2 days</p>
        </Card>
      </div>

      <Card noPadding>
        <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50/40 p-4">
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
              <input
                type="text"
                placeholder="Search reports..."
                className="w-72 rounded-lg border border-slate-200 bg-white py-2 pl-9 pr-4 text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
              />
            </div>
            <Button variant="outline" size="sm" className="gap-2">
              <Filter size={14} />
              Filter
            </Button>
          </div>
          <p className="text-xs text-slate-500">Showing {REPORTS.length} reports</p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50/50">
                <th className="px-6 py-3 text-[10px] font-bold uppercase tracking-widest text-slate-400">Report</th>
                <th className="px-6 py-3 text-[10px] font-bold uppercase tracking-widest text-slate-400">Type</th>
                <th className="px-6 py-3 text-[10px] font-bold uppercase tracking-widest text-slate-400">Date</th>
                <th className="px-6 py-3 text-[10px] font-bold uppercase tracking-widest text-slate-400">Size</th>
                <th className="px-6 py-3 text-[10px] font-bold uppercase tracking-widest text-slate-400">Status</th>
                <th className="px-6 py-3 text-right text-[10px] font-bold uppercase tracking-widest text-slate-400">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {REPORTS.map((report) => (
                <tr key={report.id} className="group transition-colors hover:bg-slate-50/60">
                  <td className="px-6 py-4">
                    <p className="text-sm font-semibold text-slate-900">{report.title}</p>
                    <p className="text-xs text-slate-500">{report.id}</p>
                  </td>
                  <td className="px-6 py-4 text-xs text-slate-600">{report.type}</td>
                  <td className="px-6 py-4 text-xs text-slate-500">{report.date}</td>
                  <td className="px-6 py-4 text-xs text-slate-500">{report.size}</td>
                  <td className="px-6 py-4">
                    <Badge variant={report.status === 'Archived' ? 'neutral' : 'success'}>{report.status}</Badge>
                  </td>
                  <td className="px-6 py-4">
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

