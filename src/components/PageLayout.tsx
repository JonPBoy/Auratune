import React from 'react';
import { cn } from '../lib/utils';
import { LucideIcon } from 'lucide-react';

interface Tab {
  id: string;
  label: string;
  icon?: LucideIcon;
}

interface PageLayoutProps {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  colorClass: string;
  tabs?: Tab[];
  activeSubTab?: string;
  setActiveSubTab?: (id: string) => void;
  children: React.ReactNode;
}

export function PageLayout({
  title,
  subtitle,
  icon: Icon,
  colorClass,
  tabs,
  activeSubTab,
  setActiveSubTab,
  children
}: PageLayoutProps) {
  return (
    <div className="p-4 md:p-8 lg:p-12 max-w-6xl mx-auto relative z-10 pb-24">
      <header className="flex flex-col md:flex-row md:items-center gap-6 mb-12 mt-4">
        <div className="relative group self-start md:self-center">
          {/* Animated background glow */}
          <div className={cn(
            "absolute -inset-2 opacity-20 blur-2xl rounded-full transition-all duration-1000 group-hover:opacity-40 animate-pulse",
            colorClass.replace('text-', 'bg-')
          )} />
          
          <div className={cn(
            "w-16 h-16 md:w-20 md:h-20 rounded-3xl flex items-center justify-center transition-all duration-500 border relative z-10 bg-black/40 backdrop-blur-sm shadow-xl",
            colorClass.replace('text-', 'border-').replace('500', '500/30'),
          )}>
            <Icon size={36} className={colorClass} />
          </div>
        </div>
        <div>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-2">{title}</h1>
          <p className="text-base md:text-xl text-slate-400 font-medium tracking-wide max-w-2xl">{subtitle}</p>
        </div>
      </header>

      {tabs && tabs.length > 0 && (
        <div className="flex bg-cosmic-card p-1.5 rounded-2xl mb-10 border border-cosmic-border max-w-2xl">
          {tabs.map(tab => {
            const isActive = activeSubTab === tab.id;
            
            // Derive theme colors from colorClass
            const getThemeStyles = () => {
              if (colorClass.includes('purple')) return { active: 'bg-purple-500/20 text-purple-400', hover: 'hover:bg-purple-500/10 hover:text-purple-300' };
              if (colorClass.includes('blue')) return { active: 'bg-blue-500/20 text-blue-400', hover: 'hover:bg-blue-500/10 hover:text-blue-300' };
              if (colorClass.includes('yellow')) return { active: 'bg-yellow-500/20 text-yellow-400', hover: 'hover:bg-yellow-500/10 hover:text-yellow-300' };
              if (colorClass.includes('rose')) return { active: 'bg-rose-500/20 text-rose-400', hover: 'hover:bg-rose-500/10 hover:text-rose-300' };
              if (colorClass.includes('emerald')) return { active: 'bg-emerald-500/20 text-emerald-400', hover: 'hover:bg-emerald-500/10 hover:text-emerald-300' };
              if (colorClass.includes('pink')) return { active: 'bg-pink-500/20 text-pink-400', hover: 'hover:bg-pink-500/10 hover:text-pink-300' };
              return { active: 'bg-white/10 text-white', hover: 'hover:bg-white/5 hover:text-slate-200' };
            };

            const theme = getThemeStyles();

            return (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveSubTab?.(tab.id);
                  document.querySelector('main')?.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={cn(
                  "flex-1 flex items-center justify-center gap-2 py-3 text-sm md:text-base font-bold rounded-xl transition-all",
                  isActive ? cn(theme.active, "shadow-lg") : cn("text-slate-400", theme.hover)
                )}
              >
                {tab.icon && <tab.icon size={18} />}
                {tab.label}
              </button>
            );
          })}
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {children}
      </div>
    </div>
  );
}
