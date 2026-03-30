import { Card, Button, Badge } from '../components/UI';
import { MOCK_ORDERS } from '../data/mock';
import { ShoppingCart, Search, Filter, Download, Eye, MoreHorizontal } from 'lucide-react';
import { motion } from 'motion/react';

export const Orders = () => {
  return (
    <div className="space-y-8">
      <div className="flex items-end justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Order Management</h1>
          <p className="text-slate-500 mt-1">Track and process customer orders in real-time.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2">
            <Download size={16} />
            Export Orders
          </Button>
          <Button className="gap-2">
            <ShoppingCart size={16} />
            Create Manual Order
          </Button>
        </div>
      </div>

      <Card noPadding>
        <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/30">
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
              <input 
                type="text" 
                placeholder="Search order ID or customer..." 
                className="pl-9 pr-4 py-1.5 bg-white border border-slate-200 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500/20 w-64"
              />
            </div>
            <Button variant="outline" size="sm" className="gap-2">
              <Filter size={14} />
              Filters
            </Button>
          </div>
          <p className="text-xs text-slate-500 font-medium">Showing {MOCK_ORDERS.length} orders</p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-slate-100">
                <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Order ID</th>
                <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Customer</th>
                <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Items</th>
                <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Total</th>
                <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Status</th>
                <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Payment</th>
                <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {MOCK_ORDERS.map((order) => (
                <tr key={order.id} className="hover:bg-slate-50/50 transition-colors group">
                  <td className="px-6 py-4">
                    <span className="text-sm font-bold text-slate-900">{order.id}</span>
                    <p className="text-[10px] text-slate-500 font-medium">{order.date}</p>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600 font-medium">{order.customerName}</td>
                  <td className="px-6 py-4 text-sm text-slate-500">{order.items} items</td>
                  <td className="px-6 py-4 text-sm font-bold text-slate-900">${order.total.toFixed(2)}</td>
                  <td className="px-6 py-4">
                    <Badge variant={
                      order.status === 'Delivered' ? 'success' : 
                      order.status === 'Shipped' ? 'info' : 
                      order.status === 'Pending' ? 'warning' : 'error'
                    }>
                      {order.status}
                    </Badge>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className={cn("w-1.5 h-1.5 rounded-full", order.paymentStatus === 'Paid' ? 'bg-emerald-500' : 'bg-amber-500')} />
                      <span className="text-xs font-medium text-slate-600">{order.paymentStatus}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
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

import { cn } from '../lib/utils';
