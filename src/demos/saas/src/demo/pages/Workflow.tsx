import { Card, Button, Badge } from '../components/UI';
import { MOCK_TASKS } from '../data/mock';
import { Plus, Search, MoreVertical, Calendar, User } from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';
import { useLocation } from 'react-router-dom';
import { resolveDemoLanguage } from '../../../../../utils/demoLanguage';

export const Workflow = () => {
  const location = useLocation();
  const lang = resolveDemoLanguage(location.search);
  const text = lang === 'pt'
    ? {
        todo: 'A Fazer',
        inProgress: 'Em andamento',
        completed: 'Concluido',
        title: 'Fluxo de projetos',
        subtitle: 'Acompanhe e gerencie iniciativas estrategicas.',
        search: 'Buscar tarefas...',
        newTask: 'Nova tarefa',
        noTasks: 'Nenhuma tarefa nesta etapa',
      }
    : {
        todo: 'To Do',
        inProgress: 'In Progress',
        completed: 'Completed',
        title: 'Project Workflow',
        subtitle: 'Track and manage strategic initiatives across teams.',
        search: 'Search tasks...',
        newTask: 'New Task',
        noTasks: 'No tasks in this stage',
      };

  const columns = [
    { id: 'Todo', label: text.todo, color: 'bg-slate-100' },
    { id: 'In Progress', label: text.inProgress, color: 'bg-indigo-100' },
    { id: 'Done', label: text.completed, color: 'bg-emerald-100' },
  ];

  return (
    <div className="space-y-8 h-full flex flex-col">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">{text.title}</h1>
          <p className="text-slate-500 mt-1">{text.subtitle}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <div className="relative w-full sm:w-auto">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            <input 
              type="text" 
              placeholder={text.search}
              className="w-full sm:w-auto pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
            />
          </div>
          <Button className="w-full sm:w-auto gap-2">
            <Plus size={16} />
            {text.newTask}
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 flex-1">
        {columns.map((col) => (
          <div key={col.id} className="flex flex-col gap-4">
            <div className="flex items-center justify-between px-2">
              <div className="flex items-center gap-2">
                <div className={cn("w-2 h-2 rounded-full", col.id === 'Todo' ? 'bg-slate-400' : col.id === 'In Progress' ? 'bg-indigo-500' : 'bg-emerald-500')} />
                <h3 className="font-bold text-slate-900 text-sm uppercase tracking-wider">{col.label}</h3>
                <span className="text-xs text-slate-400 font-bold bg-slate-100 px-2 py-0.5 rounded-full">
                  {MOCK_TASKS.filter(t => t.status === col.id).length}
                </span>
              </div>
              <button className="p-1 text-slate-400 hover:text-slate-600 transition-colors">
                <Plus size={16} />
              </button>
            </div>

            <div className={cn("flex-1 rounded-2xl p-2 space-y-4 min-h-[320px] sm:min-h-[420px] lg:min-h-[500px]", col.color + "/30")}>
              {MOCK_TASKS.filter(t => t.status === col.id).map((task) => (
                <motion.div 
                  key={task.id}
                  layoutId={task.id}
                  className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow cursor-grab active:cursor-grabbing group"
                >
                  <div className="flex justify-between items-start mb-3">
                    <Badge variant={task.priority === 'High' ? 'error' : task.priority === 'Medium' ? 'warning' : 'info'}>
                      {task.priority}
                    </Badge>
                    <button className="text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity">
                      <MoreVertical size={16} />
                    </button>
                  </div>
                  <h4 className="text-sm font-semibold text-slate-900 leading-tight mb-4">{task.title}</h4>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                    <div className="flex items-center gap-2 text-slate-500">
                      <Calendar size={12} />
                      <span className="text-[10px] font-bold uppercase tracking-wider">{task.dueDate}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                        <User size={12} />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
              {MOCK_TASKS.filter(t => t.status === col.id).length === 0 && (
                <div className="h-32 border-2 border-dashed border-slate-200 rounded-xl flex items-center justify-center text-slate-400 text-xs italic">
                  {text.noTasks}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


