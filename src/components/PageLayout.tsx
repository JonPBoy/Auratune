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
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveSubTab?.(tab.id);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={cn(
                "flex-1 flex items-center justify-center gap-2 py-3 text-sm md:text-base font-bold rounded-xl transition-all",
                activeSubTab === tab.id 
                  ? "bg-white/10 text-white shadow-lg" 
                  : "text-slate-400 hover:text-slate-200 hover:bg-white/5"
              )}
            >
              {tab.icon && <tab.icon size={18} />}
              {tab.label}
            </button>
          ))}
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {children}
      </div>
    </div>
  );
}
