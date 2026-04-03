import { Card, Button, Badge } from '../components/UI';
import { MOCK_PRODUCTS } from '../data/mock';
import { Package, Plus, Search, Filter, MoreVertical, Edit3, Trash2 } from 'lucide-react';
import { motion } from 'motion/react';
import { useLocation } from 'react-router-dom';
import { resolveDemoLanguage } from '../../../../../utils/demoLanguage';
import { cn } from '../lib/utils';

export const Inventory = () => {
  const location = useLocation();
  const lang = resolveDemoLanguage(location.search);
  const text = lang === 'pt'
    ? {
        title: 'Estoque e catalogo',
        subtitle: 'Gerencie produtos, servicos e niveis de estoque.',
        categories: 'Categorias',
        addItem: 'Adicionar produto / servico',
        totalItems: 'Total de itens',
        lowStock: 'Estoque baixo',
        outOfStock: 'Sem estoque',
        services: 'Servicos',
        search: 'Buscar no estoque...',
        filter: 'Filtrar',
        item: 'Item',
        category: 'Categoria',
        price: 'Preco',
        stock: 'Estoque',
        status: 'Status',
        actions: 'Acoes',
      }
    : {
        title: 'Inventory & Catalog',
        subtitle: 'Manage your products, services, and stock levels.',
        categories: 'Categories',
        addItem: 'Add Product / Service',
        totalItems: 'Total Items',
        lowStock: 'Low Stock',
        outOfStock: 'Out of Stock',
        services: 'Services',
        search: 'Search inventory...',
        filter: 'Filter',
        item: 'Item',
        category: 'Category',
        price: 'Price',
        stock: 'Stock',
        status: 'Status',
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
            <Package size={16} />
            {text.categories}
          </Button>
          <Button className="gap-2">
            <Plus size={16} />
            {text.addItem}
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: text.totalItems, value: '142', sub: lang === 'pt' ? 'Em 12 categorias' : 'Across 12 categories' },
          { label: text.lowStock, value: '8', sub: lang === 'pt' ? 'Requer atencao' : 'Requires attention', color: 'text-amber-600' },
          { label: text.outOfStock, value: '3', sub: lang === 'pt' ? 'Repor imediatamente' : 'Restock immediately', color: 'text-red-600' },
          { label: text.services, value: '15', sub: lang === 'pt' ? 'Ofertas ativas' : 'Active offerings' },
        ].map((stat, i) => (
          <Card key={i}>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{stat.label}</p>
            <p className={cn("text-2xl font-bold mt-1", stat.color || "text-slate-900")}>{stat.value}</p>
            <p className="text-[10px] text-slate-500 mt-1">{stat.sub}</p>
          </Card>
        ))}
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
              {text.filter}
            </Button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-[760px] w-full text-left">
            <thead>
              <tr className="border-b border-slate-100">
                <th className="px-4 py-3 sm:px-6 sm:py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">{text.item}</th>
                <th className="px-4 py-3 sm:px-6 sm:py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">{text.category}</th>
                <th className="px-4 py-3 sm:px-6 sm:py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">{text.price}</th>
                <th className="px-4 py-3 sm:px-6 sm:py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">{text.stock}</th>
                <th className="px-4 py-3 sm:px-6 sm:py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">{text.status}</th>
                <th className="px-4 py-3 sm:px-6 sm:py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest text-right">{text.actions}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {MOCK_PRODUCTS.map((product) => (
                <tr key={product.id} className="hover:bg-slate-50/50 transition-colors group">
                  <td className="px-4 py-3 sm:px-6 sm:py-4">
                    <div className="flex items-center gap-3">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-10 h-10 rounded-lg object-cover border border-slate-100"
                        referrerPolicy="no-referrer"
                      />
                      <div>
                        <p className="text-sm font-semibold text-slate-900">{product.name}</p>
                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter">{product.id}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 sm:px-6 sm:py-4">
                    <Badge variant={product.category === 'Service' ? 'info' : 'neutral'}>
                      {product.category}
                    </Badge>
                  </td>
                  <td className="px-4 py-3 sm:px-6 sm:py-4 text-sm font-bold text-slate-900">${product.price.toFixed(2)}</td>
                  <td className="px-4 py-3 sm:px-6 sm:py-4 text-sm text-slate-600">
                    {product.category === 'Service' ? '—' : `${product.stock} ${lang === 'pt' ? 'unidades' : 'units'}`}
                  </td>
                  <td className="px-4 py-3 sm:px-6 sm:py-4">
                    <Badge variant={
                      product.status === 'In Stock' || product.status === 'Active' ? 'success' : 
                      product.status === 'Low Stock' ? 'warning' : 'error'
                    }>
                      {product.status}
                    </Badge>
                  </td>
                  <td className="px-4 py-3 sm:px-6 sm:py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Edit3 size={16} />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-red-500 hover:bg-red-50">
                        <Trash2 size={16} />
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

