import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell
} from 'recharts';
import { ArrowUpRight, ArrowDownRight, Users, ShoppingCart, Package, TrendingUp, DollarSign, Plus } from 'lucide-react';
import { Card, Button, Badge } from '../components/UI';
import { MOCK_METRICS, SALES_CHART_DATA, MOCK_ORDERS, MOCK_TASKS } from '../data/mock';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';
import { useLocation } from 'react-router-dom';
import { resolveDemoLanguage } from '../../../../../utils/demoLanguage';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 }
};

export const Dashboard = () => {
  const location = useLocation();
  const lang = resolveDemoLanguage(location.search);
  const text = lang === 'pt'
    ? {
        title: 'Comando do negocio',
        subtitle: 'Metricas em tempo real para sua operacao.',
        dailyReport: 'Relatorio diario',
        newOrder: 'Novo pedido',
        salesPerf: 'Desempenho de vendas',
        salesPerfSub: 'Receita diaria da semana atual',
        urgentTasks: 'Tarefas urgentes',
        urgentTasksSub: 'Operacoes que exigem atencao imediata',
        due: 'Vence',
        allOps: 'Todas operacoes',
        pendingOrders: 'Pedidos pendentes',
        pendingOrdersSub: 'Pedidos aguardando execucao',
        order: 'Pedido',
        customer: 'Cliente',
        total: 'Total',
        status: 'Status',
        inventoryHealth: 'Saude do estoque',
        inventoryHealthSub: 'Distribuicao de niveis de estoque',
        stockAvail: 'Disponibilidade de estoque',
        healthy: 'Saudavel',
        low: 'Baixo',
        out: 'Sem estoque',
      }
    : {
        title: 'Business Command',
        subtitle: 'Real-time performance metrics for your enterprise operations.',
        dailyReport: 'Daily Report',
        newOrder: 'New Order',
        salesPerf: 'Sales Performance',
        salesPerfSub: 'Daily revenue generation for the current week',
        urgentTasks: 'Urgent Tasks',
        urgentTasksSub: 'Operations requiring immediate attention',
        due: 'Due',
        allOps: 'All Operations',
        pendingOrders: 'Pending Orders',
        pendingOrdersSub: 'Orders awaiting fulfillment',
        order: 'Order',
        customer: 'Customer',
        total: 'Total',
        status: 'Status',
        inventoryHealth: 'Inventory Health',
        inventoryHealthSub: 'Stock level distribution',
        stockAvail: 'Stock Availability',
        healthy: 'Healthy',
        low: 'Low',
        out: 'Out',
      };
  return (
    <motion.div 
      variants={container}
      initial="hidden"
      animate="show"
      className="space-y-8"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">{text.title}</h1>
          <p className="text-slate-500 mt-1">{text.subtitle}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button variant="outline">{text.dailyReport}</Button>
          <Button className="gap-2">
            <Plus size={16} />
            {text.newOrder}
          </Button>
        </div>
      </div>

      {/* KPI Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {MOCK_METRICS.map((metric, idx) => (
          <motion.div key={idx} variants={item}>
            <Card className="relative overflow-hidden group border-l-4 border-l-indigo-500">
              <div className="flex justify-between items-start mb-4">
                <div className={cn(
                  "p-2 rounded-lg",
                  idx === 0 ? "bg-indigo-50 text-indigo-600" :
                  idx === 1 ? "bg-amber-50 text-amber-600" :
                  idx === 2 ? "bg-emerald-50 text-emerald-600" :
                  "bg-slate-50 text-slate-600"
                )}>
                  {idx === 0 ? <DollarSign size={20} /> :
                   idx === 1 ? <ShoppingCart size={20} /> :
                   idx === 2 ? <Users size={20} /> :
                   <Package size={20} />}
                </div>
                <div className={cn(
                  "flex items-center gap-1 text-xs font-bold",
                  metric.trend === 'up' ? "text-emerald-600" : "text-amber-600"
                )}>
                  {metric.trend === 'up' ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                  {metric.change}%
                </div>
              </div>
              <p className="text-slate-500 text-xs font-medium uppercase tracking-wider">{metric.label}</p>
              <p className="text-2xl font-bold text-slate-900 mt-1">{metric.value}</p>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Main Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <motion.div variants={item} className="lg:col-span-2">
          <Card title={text.salesPerf} subtitle={text.salesPerfSub}>
            <div className="h-[350px] w-full mt-4">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={SALES_CHART_DATA}>
                  <defs>
                    <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#6366f1" stopOpacity={0.1}/>
                      <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis 
                    dataKey="name" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{fontSize: 12, fill: '#94a3b8'}}
                    dy={10}
                  />
                  <YAxis 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{fontSize: 12, fill: '#94a3b8'}}
                    tickFormatter={(value) => `$${value/1000}k`}
                  />
                  <Tooltip 
                    contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)'}}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="sales" 
                    stroke="#6366f1" 
                    strokeWidth={3}
                    fillOpacity={1} 
                    fill="url(#colorSales)" 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </motion.div>

        <motion.div variants={item}>
          <Card title={text.urgentTasks} subtitle={text.urgentTasksSub}>
            <div className="space-y-6 mt-4">
              {MOCK_TASKS.map((task) => (
                <div key={task.id} className="flex items-start gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer group">
                  <div className={cn(
                    "w-2 h-10 rounded-full",
                    task.priority === 'High' ? "bg-red-400" : task.priority === 'Medium' ? "bg-amber-400" : "bg-indigo-400"
                  )} />
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <h4 className="text-sm font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors">{task.title}</h4>
                      <Badge variant={task.status === 'Done' ? 'success' : task.status === 'In Progress' ? 'info' : 'neutral'}>
                        {task.status}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-3 mt-2">
                      <p className="text-[10px] text-slate-500 font-medium uppercase tracking-wider">{text.due} {task.dueDate}</p>
                    </div>
                  </div>
                </div>
              ))}
              <Button variant="outline" className="w-full mt-2">{text.allOps}</Button>
            </div>
          </Card>
        </motion.div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <motion.div variants={item} className="lg:col-span-2">
          <Card title={text.pendingOrders} subtitle={text.pendingOrdersSub} noPadding>
            <div className="overflow-x-auto">
              <table className="min-w-[760px] w-full text-left">
                <thead>
                  <tr className="bg-slate-50/50 border-y border-slate-100">
                    <th className="px-4 py-3 sm:px-6 text-[10px] font-bold text-slate-400 uppercase tracking-widest">{text.order}</th>
                    <th className="px-4 py-3 sm:px-6 text-[10px] font-bold text-slate-400 uppercase tracking-widest">{text.customer}</th>
                    <th className="px-4 py-3 sm:px-6 text-[10px] font-bold text-slate-400 uppercase tracking-widest">{text.total}</th>
                    <th className="px-4 py-3 sm:px-6 text-[10px] font-bold text-slate-400 uppercase tracking-widest">{text.status}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {MOCK_ORDERS.slice(0, 4).map((order) => (
                    <tr key={order.id} className="hover:bg-slate-50/50 transition-colors group">
                      <td className="px-4 py-3 sm:px-6 sm:py-4">
                        <span className="text-sm font-medium text-slate-900">{order.id}</span>
                        <p className="text-[10px] text-slate-500 font-bold uppercase tracking-tighter">{order.date}</p>
                      </td>
                      <td className="px-4 py-3 sm:px-6 sm:py-4 text-sm text-slate-600">{order.customerName}</td>
                      <td className="px-4 py-3 sm:px-6 sm:py-4 text-sm font-semibold text-slate-900">${order.total.toLocaleString()}</td>
                      <td className="px-4 py-3 sm:px-6 sm:py-4">
                        <Badge variant={order.status === 'Delivered' ? 'success' : order.status === 'Shipped' ? 'info' : 'warning'}>
                          {order.status}
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </motion.div>

        <motion.div variants={item}>
          <Card title={text.inventoryHealth} subtitle={text.inventoryHealthSub}>
            <div className="h-[250px] w-full mt-4">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={[
                  { name: text.healthy, value: 85 },
                  { name: text.low, value: 12 },
                  { name: text.out, value: 3 },
                ]}>
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#94a3b8'}} />
                  <Tooltip cursor={{fill: 'transparent'}} contentStyle={{borderRadius: '12px', border: 'none'}} />
                  <Bar dataKey="value" radius={[6, 6, 0, 0]}>
                    {[0, 1, 2].map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={index === 0 ? '#10b981' : index === 1 ? '#f59e0b' : '#ef4444'} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 space-y-3">
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-500">{text.stockAvail}</span>
                <span className="font-bold text-slate-900">85%</span>
              </div>
              <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-500 w-[85%]" />
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  );
};

