import { Card, Button, Badge } from '../components/UI';
import { MOCK_TRANSACTIONS } from '../data/mock';
import { TrendingUp, DollarSign, ArrowUpRight, Calendar, Filter, Download } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { useLocation } from 'react-router-dom';
import { resolveDemoLanguage } from '../../../../../utils/demoLanguage';

const REVENUE_DATA = [
  { day: 'Mon', amount: 4500 },
  { day: 'Tue', amount: 5200 },
  { day: 'Wed', amount: 4800 },
  { day: 'Thu', amount: 6100 },
  { day: 'Fri', amount: 5900 },
  { day: 'Sat', amount: 3200 },
  { day: 'Sun', amount: 2800 },
];

export const Sales = () => {
  const location = useLocation();
  const lang = resolveDemoLanguage(location.search);
  const text = lang === 'pt'
    ? {
        title: 'Vendas e receita',
        subtitle: 'Acompanhe pagamentos, faturas e desempenho financeiro.',
        last30: 'Ultimos 30 dias',
        export: 'Exportar razao',
        revenue: 'Fluxo de receita',
        revenueSub: 'Volume diario de transacoes da semana',
        totalBalance: 'Saldo total',
        quickStats: 'Resumo rapido',
        avgOrder: 'Ticket medio',
        refundRate: 'Taxa de reembolso',
        failed: 'Pagamentos falhos',
        transactions: 'Transacoes recentes',
        showing: 'Exibindo 5 de 842 transacoes',
        filter: 'Filtrar',
      }
    : {
        title: 'Sales & Revenue',
        subtitle: 'Track payments, invoices, and financial performance.',
        last30: 'Last 30 Days',
        export: 'Export Ledger',
        revenue: 'Revenue Stream',
        revenueSub: 'Daily transaction volume for the current week',
        totalBalance: 'Total Balance',
        quickStats: 'Quick Stats',
        avgOrder: 'Avg. Order Value',
        refundRate: 'Refund Rate',
        failed: 'Failed Payments',
        transactions: 'Recent Transactions',
        showing: 'Showing 5 of 842 transactions',
        filter: 'Filter',
      };

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">{text.title}</h1>
          <p className="text-slate-500 mt-1">{text.subtitle}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button variant="outline" className="gap-2">
            <Calendar size={16} />
            {text.last30}
          </Button>
          <Button className="gap-2">
            <Download size={16} />
            {text.export}
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2" title={text.revenue} subtitle={text.revenueSub}>
          <div className="h-[300px] w-full mt-6">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={REVENUE_DATA}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#94a3b8'}} />
                <YAxis axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#94a3b8'}} tickFormatter={(v) => `$${v}`} />
                <Tooltip cursor={{fill: '#f8fafc'}} contentStyle={{borderRadius: '12px', border: 'none'}} />
                <Bar dataKey="amount" radius={[4, 4, 0, 0]}>
                  {REVENUE_DATA.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={index === 3 ? '#6366f1' : '#cbd5e1'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <div className="space-y-6">
          <Card className="bg-slate-900 text-white border-none">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{text.totalBalance}</p>
            <h2 className="text-2xl sm:text-3xl font-bold mt-2">$428,500.00</h2>
            <div className="flex items-center gap-2 mt-4 text-emerald-400 text-sm font-bold">
              <ArrowUpRight size={16} />
              <span>+14.2%</span>
              <span className="text-slate-500 font-normal">vs last month</span>
            </div>
            <div className="mt-8 pt-6 border-t border-white/10 flex justify-between">
              <div>
                <p className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">Available</p>
                <p className="text-lg font-bold">$382,000</p>
              </div>
              <div className="text-right">
                <p className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">Pending</p>
                <p className="text-lg font-bold">$46,500</p>
              </div>
            </div>
          </Card>

          <Card>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-bold text-slate-900">{text.quickStats}</h3>
              <TrendingUp size={16} className="text-slate-400" />
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-xs text-slate-500">{text.avgOrder}</span>
                <span className="text-sm font-bold">$1,240</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs text-slate-500">{text.refundRate}</span>
                <span className="text-sm font-bold text-emerald-600">0.4%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs text-slate-500">{text.failed}</span>
                <span className="text-sm font-bold text-red-600">12</span>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <Card title={text.transactions} noPadding>
        <div className="p-4 border-b border-slate-100 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="gap-2">
              <Filter size={14} />
              {text.filter}
            </Button>
          </div>
          <p className="text-xs text-slate-500 sm:text-right">{text.showing}</p>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-[760px] w-full text-left">
            <thead>
              <tr className="bg-slate-50/50 border-b border-slate-100">
                <th className="px-4 py-3 sm:px-6 text-[10px] font-bold text-slate-400 uppercase tracking-widest">ID</th>
                <th className="px-4 py-3 sm:px-6 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Customer</th>
                <th className="px-4 py-3 sm:px-6 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Amount</th>
                <th className="px-4 py-3 sm:px-6 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Type</th>
                <th className="px-4 py-3 sm:px-6 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Status</th>
                <th className="px-4 py-3 sm:px-6 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {MOCK_TRANSACTIONS.map((tx) => (
                <tr key={tx.id} className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-4 py-3 sm:px-6 sm:py-4 text-sm font-medium text-slate-900">{tx.id}</td>
                  <td className="px-4 py-3 sm:px-6 sm:py-4 text-sm text-slate-600">{tx.customer}</td>
                  <td className="px-4 py-3 sm:px-6 sm:py-4 text-sm font-bold text-slate-900">${tx.amount.toLocaleString()}</td>
                  <td className="px-4 py-3 sm:px-6 sm:py-4 text-xs text-slate-500 uppercase font-bold tracking-wider">{tx.type}</td>
                  <td className="px-4 py-3 sm:px-6 sm:py-4">
                    <Badge variant={tx.status === 'Completed' ? 'success' : tx.status === 'Processing' ? 'info' : 'error'}>
                      {tx.status}
                    </Badge>
                  </td>
                  <td className="px-4 py-3 sm:px-6 sm:py-4 text-sm text-slate-500">{tx.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

