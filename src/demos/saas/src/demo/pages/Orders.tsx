import { Card, Button, Badge } from '../components/UI';
import { MOCK_ORDERS } from '../data/mock';
import { ShoppingCart, Search, Filter, Download, Eye, MoreHorizontal } from 'lucide-react';
import { motion } from 'motion/react';
import { useLocation } from 'react-router-dom';
import { resolveDemoLanguage } from '../../../../../utils/demoLanguage';
import { cn } from '../lib/utils';

export const Orders = () => {
  const location = useLocation();
  const lang = resolveDemoLanguage(location.search);
  const text = lang === 'pt'
    ? {
        title: 'Gestao de pedidos',
        subtitle: 'Acompanhe e processe pedidos em tempo real.',
        exportOrders: 'Exportar pedidos',
        createManual: 'Criar pedido manual',
        search: 'Buscar pedido ou cliente...',
        filters: 'Filtros',
        showing: 'Exibindo',
        orders: 'pedidos',
        orderId: 'ID do pedido',
        customer: 'Cliente',
        items: 'Itens',
        total: 'Total',
        status: 'Status',
        payment: 'Pagamento',
        actions: 'Acoes',
      }
    : {
        title: 'Order Management',
        subtitle: 'Track and process customer orders in real-time.',
        exportOrders: 'Export Orders',
        createManual: 'Create Manual Order',
        search: 'Search order ID or customer...',
        filters: 'Filters',
        showing: 'Showing',
        orders: 'orders',
        orderId: 'Order ID',
        customer: 'Customer',
        items: 'Items',
        total: 'Total',
        status: 'Status',
        payment: 'Payment',
        actions: 'Actions',
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
            <Download size={16} />
            {text.exportOrders}
          </Button>
          <Button className="gap-2">
            <ShoppingCart size={16} />
            {text.createManual}
          </Button>
        </div>
      </div>

      <Card noPadding>
        <div className="p-4 border-b border-slate-100 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between bg-slate-50/30">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <div className="relative w-full sm:w-auto">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
              <input 
                type="text" 
                placeholder={text.search}
                className="w-full sm:w-64 pl-9 pr-4 py-1.5 bg-white border border-slate-200 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
              />
            </div>
            <Button variant="outline" size="sm" className="gap-2">
              <Filter size={14} />
              {text.filters}
            </Button>
          </div>
          <p className="text-xs text-slate-500 font-medium sm:text-right">{text.showing} {MOCK_ORDERS.length} {text.orders}</p>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-[760px] w-full text-left">
            <thead>
              <tr className="border-b border-slate-100">
                <th className="px-4 py-3 sm:px-6 sm:py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">{text.orderId}</th>
                <th className="px-4 py-3 sm:px-6 sm:py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">{text.customer}</th>
                <th className="px-4 py-3 sm:px-6 sm:py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">{text.items}</th>
                <th className="px-4 py-3 sm:px-6 sm:py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">{text.total}</th>
                <th className="px-4 py-3 sm:px-6 sm:py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">{text.status}</th>
                <th className="px-4 py-3 sm:px-6 sm:py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">{text.payment}</th>
                <th className="px-4 py-3 sm:px-6 sm:py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest text-right">{text.actions}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {MOCK_ORDERS.map((order) => (
                <tr key={order.id} className="hover:bg-slate-50/50 transition-colors group">
                  <td className="px-4 py-3 sm:px-6 sm:py-4">
                    <span className="text-sm font-bold text-slate-900">{order.id}</span>
                    <p className="text-[10px] text-slate-500 font-medium">{order.date}</p>
                  </td>
                  <td className="px-4 py-3 sm:px-6 sm:py-4 text-sm text-slate-600 font-medium">{order.customerName}</td>
                  <td className="px-4 py-3 sm:px-6 sm:py-4 text-sm text-slate-500">{order.items} {lang === 'pt' ? 'itens' : 'items'}</td>
                  <td className="px-4 py-3 sm:px-6 sm:py-4 text-sm font-bold text-slate-900">${order.total.toFixed(2)}</td>
                  <td className="px-4 py-3 sm:px-6 sm:py-4">
                    <Badge variant={
                      order.status === 'Delivered' ? 'success' : 
                      order.status === 'Shipped' ? 'info' : 
                      order.status === 'Pending' ? 'warning' : 'error'
                    }>
                      {order.status}
                    </Badge>
                  </td>
                  <td className="px-4 py-3 sm:px-6 sm:py-4">
                    <div className="flex items-center gap-2">
                      <div className={cn("w-1.5 h-1.5 rounded-full", order.paymentStatus === 'Paid' ? 'bg-emerald-500' : 'bg-amber-500')} />
                      <span className="text-xs font-medium text-slate-600">{order.paymentStatus}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 sm:px-6 sm:py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Eye size={16} />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreHorizontal size={16} />
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

