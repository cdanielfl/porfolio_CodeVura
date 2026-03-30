import { Search, Bell, Command } from 'lucide-react';
import { MOCK_USERS } from '../data/mock';

export const Topbar = () => {
  const currentUser = MOCK_USERS[0];

  return (
    <header className="sticky top-6 z-40 flex h-20 items-center justify-between border-b border-slate-200 bg-white/90 px-12 backdrop-blur-xl">
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-3">
          <span className="text-2xl font-bold tracking-tight text-slate-900">
            Nexus<span className="text-indigo-600">Biz</span>
          </span>
          <div className="rounded-md bg-slate-900 px-2 py-0.5 text-[8px] font-semibold uppercase tracking-widest text-white">v2.4.0</div>
        </div>

        <div className="h-6 w-px bg-slate-200" />

        <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-widest text-slate-400">
          <Command size={14} />
          <span>Press <kbd className="rounded bg-slate-100 px-1 text-slate-600">⌘K</kbd> to search</span>
        </div>
      </div>

      <div className="flex items-center gap-8">
        <div className="flex items-center gap-6">
          <button className="relative rounded-lg p-2 text-slate-400 transition-colors hover:bg-slate-100 hover:text-indigo-600">
            <Search size={20} />
          </button>
          <button className="relative rounded-lg p-2 text-slate-400 transition-colors hover:bg-slate-100 hover:text-indigo-600">
            <Bell size={20} />
            <span className="absolute right-1 top-1 h-1.5 w-1.5 rounded-full bg-indigo-500" />
          </button>
        </div>

        <div className="h-6 w-px bg-slate-200" />

        <button className="flex items-center gap-4 group">
          <div className="text-right">
            <p className="text-xs font-semibold leading-none text-slate-900">{currentUser.name}</p>
            <p className="mt-1 text-[9px] uppercase tracking-widest text-slate-400">Operator</p>
          </div>
          <div className="relative">
            <img
              src={userAvatar}
              alt={currentUser.name}
              className="h-10 w-10 rounded-full border border-slate-200 object-cover transition-all duration-300 group-hover:ring-2 group-hover:ring-indigo-200"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-1 -right-1 h-3 w-3 rounded-full border-2 border-white bg-emerald-500" />
          </div>
        </button>
      </div>
    </header>
  );
};

const userAvatar = "https://picsum.photos/seed/operator/200/200";
