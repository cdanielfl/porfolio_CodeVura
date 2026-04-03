import { Card, Button, Badge } from '../components/UI';
import { MOCK_USERS } from '../data/mock';
import { Download, Filter, Mail, MoreHorizontal, Search, UserPlus } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { resolveDemoLanguage } from '../../../../../utils/demoLanguage';

export const Customers = () => {
  const location = useLocation();
  const lang = resolveDemoLanguage(location.search);
  const text = lang === 'pt'
    ? {
        title: 'Diretorio de clientes',
        subtitle: 'Gerencie cadastros, status e atividade recente.',
        export: 'Exportar',
        addCustomer: 'Adicionar cliente',
        search: 'Buscar clientes...',
        filter: 'Filtrar',
        showing: 'Exibindo',
        customers: 'clientes',
        customer: 'Cliente',
        role: 'Perfil',
        status: 'Status',
        lastActive: 'Ultimo acesso',
        actions: 'Acoes',
      }
    : {
        title: 'Customer Directory',
        subtitle: 'Manage customer records, status, and recent activity.',
        export: 'Export',
        addCustomer: 'Add Customer',
        search: 'Search customers...',
        filter: 'Filter',
        showing: 'Showing',
        customers: 'customers',
        customer: 'Customer',
        role: 'Role',
        status: 'Status',
        lastActive: 'Last Active',
        actions: 'Actions',
      };

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">{text.title}</h1>
          <p className="mt-1 text-slate-500">{text.subtitle}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button variant="outline" className="gap-2">
            <Download size={16} />
            {text.export}
          </Button>
          <Button className="gap-2">
            <UserPlus size={16} />
            {text.addCustomer}
          </Button>
        </div>
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
          <p className="text-xs text-slate-500 sm:text-right">{text.showing} {MOCK_USERS.length} {text.customers}</p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50/50">
                <th className="px-6 py-3 text-[10px] font-bold uppercase tracking-widest text-slate-400">{text.customer}</th>
                <th className="px-6 py-3 text-[10px] font-bold uppercase tracking-widest text-slate-400">{text.role}</th>
                <th className="px-6 py-3 text-[10px] font-bold uppercase tracking-widest text-slate-400">{text.status}</th>
                <th className="px-6 py-3 text-[10px] font-bold uppercase tracking-widest text-slate-400">{text.lastActive}</th>
                <th className="px-6 py-3 text-right text-[10px] font-bold uppercase tracking-widest text-slate-400">{text.actions}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {MOCK_USERS.map((user) => (
                <tr key={user.id} className="group transition-colors hover:bg-slate-50/60">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={user.avatar}
                        alt={user.name}
                        className="h-10 w-10 rounded-full border border-slate-200 object-cover"
                        referrerPolicy="no-referrer"
                      />
                      <div>
                        <p className="text-sm font-semibold text-slate-900">{user.name}</p>
                        <p className="text-xs text-slate-500">{user.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-xs font-medium uppercase tracking-wider text-slate-600">{user.role}</td>
                  <td className="px-6 py-4">
                    <Badge variant={user.status === 'Active' ? 'success' : 'neutral'}>{user.status}</Badge>
                  </td>
                  <td className="px-6 py-4 text-xs text-slate-500">{user.lastActive}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end gap-2">
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Mail size={14} />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreHorizontal size={14} />
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

