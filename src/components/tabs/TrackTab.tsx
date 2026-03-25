import React, { useState, useEffect } from 'react';
import { Calendar, Activity, TrendingUp, Award, Check, Zap, Star, ChevronRight } from 'lucide-react';
import { PageLayout } from '../PageLayout';
import { Card } from '../ui/Card';
import { cn } from '../../lib/utils';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { CircularProgress } from '../ui/CircularProgress';

const mockData = [
  { day: 'Mon', aura: 65, freq: 45, soul: 80 },
  { day: 'Tue', aura: 70, freq: 55, soul: 75 },
  { day: 'Wed', aura: 60, freq: 70, soul: 85 },
  { day: 'Thu', aura: 85, freq: 65, soul: 80 },
  { day: 'Fri', aura: 75, freq: 85, soul: 90 },
  { day: 'Sat', aura: 90, freq: 90, soul: 95 },
  { day: 'Sun', aura: 85, freq: 80, soul: 85 },
];

export function TrackTab() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [practices, setPractices] = useState(() => {
    const saved = localStorage.getItem('cosmic_practices');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error("Failed to parse saved practices");
      }
    }
    return {
      aura: false,
      freq: false,
      soul: false
    };
  });

  useEffect(() => {
    localStorage.setItem('cosmic_practices', JSON.stringify(practices));
  }, [practices]);

  const tabs = [
    { id: 'dashboard', label: 'Dashboard', icon: Activity },
    { id: 'trends', label: 'Trends', icon: TrendingUp },
    { id: 'badges', label: 'Milestones', icon: Award },
  ];

  const togglePractice = (key: keyof typeof practices) => {
    setPractices(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <PageLayout
      title="Alignment Tracker"
      subtitle="Monitor your cosmic alignment"
      icon={Activity}
      colorClass="text-emerald-500"
      tabs={tabs}
      activeSubTab={activeTab}
      setActiveSubTab={setActiveTab}
    >
      {activeTab === 'dashboard' && (
        <>
          {/* Main Alignment Score */}
          <Card className="relative overflow-hidden border-emerald-500/30 bg-gradient-to-b from-emerald-900/20 to-cosmic-card flex flex-col items-center py-8 lg:col-span-2 xl:col-span-3">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent pointer-events-none" />
            
            <h3 className="text-emerald-400 font-bold text-xs uppercase tracking-[0.2em] mb-6 z-10">Total Resonance</h3>
            
            <div className="relative z-10 mb-6">
              <div className="text-6xl font-black text-white flex items-baseline">
                83<span className="text-xl text-emerald-400 ml-1">%</span>
              </div>
            </div>

            <div className="w-full px-8 mb-8 z-10">
              <div className="h-2 w-full bg-black/40 rounded-full overflow-hidden border border-white/5">
                <div className="h-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]" style={{ width: '83%' }} />
              </div>
              <div className="flex justify-between mt-2">
                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Resonance Level</span>
                <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-widest">High</span>
              </div>
            </div>

            <div className="w-full grid grid-cols-3 gap-4 px-4 z-10">
              <div className="flex flex-col items-center bg-black/20 rounded-xl p-3 border border-white/5">
                <span className="text-purple-400 text-[10px] font-bold uppercase tracking-wider mb-1">Aura</span>
                <span className="text-lg font-black text-white">85<span className="text-[10px] text-slate-500">%</span></span>
              </div>
              <div className="flex flex-col items-center bg-black/20 rounded-xl p-3 border border-white/5">
                <span className="text-blue-400 text-[10px] font-bold uppercase tracking-wider mb-1">Freq</span>
                <span className="text-lg font-black text-white">72<span className="text-[10px] text-slate-500">%</span></span>
              </div>
              <div className="flex flex-col items-center bg-black/20 rounded-xl p-3 border border-white/5">
                <span className="text-yellow-400 text-[10px] font-bold uppercase tracking-wider mb-1">Soul</span>
                <span className="text-lg font-black text-white">93<span className="text-[10px] text-slate-500">%</span></span>
              </div>
            </div>
          </Card>
          
          {/* Weekly Matrix */}
          <Card className="p-5 lg:col-span-1">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-bold text-slate-200 text-lg">Weekly Matrix</h3>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">12 Day Streak</span>
              </div>
            </div>
            
            <div className="grid grid-cols-7 gap-2">
              {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, i) => {
                const isToday = i === 4;
                const isPast = i < 4;
                const intensity = isPast ? [0.6, 0.8, 0.7, 0.9][i] : isToday ? 0.4 : 0.1;
                
                return (
                  <div key={i} className="flex flex-col items-center gap-2">
                    <div 
                      className={cn(
                        "w-full aspect-square rounded-lg border transition-all duration-500",
                        isPast ? "bg-emerald-500 border-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.3)]" : 
                        isToday ? "bg-emerald-500/30 border-emerald-500/50" : "bg-white/5 border-white/10"
                      )}
                      style={{ opacity: intensity + 0.1 }}
                    />
                    <span className={cn(
                      "text-[10px] font-bold",
                      isToday ? "text-white" : "text-slate-500"
                    )}>{day}</span>
                  </div>
                );
              })}
            </div>
          </Card>
          
          {/* Daily Protocols */}
          <Card className="p-5 lg:col-span-1 xl:col-span-2">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-bold text-slate-200 text-lg">Daily Protocols</h3>
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                {Object.values(practices).filter(Boolean).length} of 3 Complete
              </span>
            </div>
            
            <div className="space-y-4">
              <button 
                onClick={() => togglePractice('aura')}
                className="w-full flex items-center justify-between group"
              >
                <div className="flex items-center gap-4">
                  <div className={cn(
                    "w-6 h-6 rounded-md border flex items-center justify-center transition-all", 
                    practices.aura ? "bg-emerald-500 border-emerald-400" : "bg-white/5 border-white/10"
                  )}>
                    {practices.aura && <Check size={14} className="text-white" strokeWidth={4} />}
                  </div>
                  <div className="text-left">
                    <div className={cn("font-bold text-sm transition-colors", practices.aura ? "text-white" : "text-slate-400")}>Aura Cleansing</div>
                    <div className="text-[10px] text-slate-500 uppercase tracking-wider">5 Min Visualization</div>
                  </div>
                </div>
                <ChevronRight size={16} className="text-slate-600" />
              </button>
              
              <button 
                onClick={() => togglePractice('freq')}
                className="w-full flex items-center justify-between group"
              >
                <div className="flex items-center gap-4">
                  <div className={cn(
                    "w-6 h-6 rounded-md border flex items-center justify-center transition-all", 
                    practices.freq ? "bg-emerald-500 border-emerald-400" : "bg-white/5 border-white/10"
                  )}>
                    {practices.freq && <Check size={14} className="text-white" strokeWidth={4} />}
                  </div>
                  <div className="text-left">
                    <div className={cn("font-bold text-sm transition-colors", practices.freq ? "text-white" : "text-slate-400")}>Frequency Calibration</div>
                    <div className="text-[10px] text-slate-500 uppercase tracking-wider">Breathwork & Gratitude</div>
                  </div>
                </div>
                <ChevronRight size={16} className="text-slate-600" />
              </button>
              
              <button 
                onClick={() => togglePractice('soul')}
                className="w-full flex items-center justify-between group"
              >
                <div className="flex items-center gap-4">
                  <div className={cn(
                    "w-6 h-6 rounded-md border flex items-center justify-center transition-all", 
                    practices.soul ? "bg-emerald-500 border-emerald-400" : "bg-white/5 border-white/10"
                  )}>
                    {practices.soul && <Check size={14} className="text-white" strokeWidth={4} />}
                  </div>
                  <div className="text-left">
                    <div className={cn("font-bold text-sm transition-colors", practices.soul ? "text-white" : "text-slate-400")}>Soul Reflection</div>
                    <div className="text-[10px] text-slate-500 uppercase tracking-wider">Journal Entry</div>
                  </div>
                </div>
                <ChevronRight size={16} className="text-slate-600" />
              </button>
            </div>
          </Card>
        </>
      )}

      {activeTab === 'trends' && (
        <>
          <Card className="p-0 overflow-hidden lg:col-span-2 xl:col-span-3">
            <div className="p-5 border-b border-white/5 bg-black/20">
              <h3 className="font-bold text-white text-lg">Resonance Convergence</h3>
              <p className="text-xs text-slate-400 mt-1">Your tri-identity alignment over the last 7 days.</p>
            </div>
            <div className="h-72 w-full p-4 pt-6 bg-gradient-to-b from-cosmic-card to-black/40">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={mockData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorAura" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.6}/>
                      <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorFreq" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.6}/>
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorSoul" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#eab308" stopOpacity={0.6}/>
                      <stop offset="95%" stopColor="#eab308" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" vertical={false} />
                  <XAxis dataKey="day" stroke="#475569" fontSize={10} tickLine={false} axisLine={false} dy={10} />
                  <YAxis stroke="#475569" fontSize={10} tickLine={false} axisLine={false} dx={-10} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#0f172a', borderColor: '#1e293b', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.8)' }}
                    itemStyle={{ fontSize: '12px', fontWeight: 'bold' }}
                    labelStyle={{ color: '#94a3b8', marginBottom: '6px', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '1px' }}
                  />
                  <Area type="monotone" dataKey="aura" name="Aura" stroke="#8b5cf6" strokeWidth={3} fillOpacity={1} fill="url(#colorAura)" />
                  <Area type="monotone" dataKey="freq" name="Frequency" stroke="#3b82f6" strokeWidth={3} fillOpacity={1} fill="url(#colorFreq)" />
                  <Area type="monotone" dataKey="soul" name="Soul" stroke="#eab308" strokeWidth={3} fillOpacity={1} fill="url(#colorSoul)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <div className="flex justify-center gap-8 p-5 bg-black/40 text-xs font-bold uppercase tracking-wider">
              <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.8)]" /> Aura</div>
              <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]" /> Freq</div>
              <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-yellow-500 shadow-[0_0_10px_rgba(234,179,8,0.8)]" /> Soul</div>
            </div>
          </Card>
        </>
      )}

      {activeTab === 'badges' && (
        <>
          <Card className="bg-gradient-to-br from-slate-800 to-cosmic-card border-slate-700 p-6 lg:col-span-2 xl:col-span-3">
            <h3 className="font-bold mb-6 text-white text-lg">Cosmic Milestones</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-black/40 rounded-2xl p-5 border border-white/5 text-center shadow-inner">
                <div className="text-4xl font-black text-white mb-2">24</div>
                <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Total Logs</div>
              </div>
              <div className="bg-black/40 rounded-2xl p-5 border border-white/5 text-center shadow-inner">
                <div className="text-4xl font-black text-emerald-400 mb-2">3</div>
                <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Badges Earned</div>
              </div>
            </div>
          </Card>
          
          {[
            { name: 'First Light', desc: 'Initiated the journey', earned: true, color: 'text-yellow-400', bg: 'bg-yellow-400/10', border: 'border-yellow-400/30', shadow: 'shadow-[0_0_20px_rgba(250,204,21,0.15)]' },
            { name: 'Resonance', desc: '3 day perfect streak', earned: true, color: 'text-blue-400', bg: 'bg-blue-400/10', border: 'border-blue-400/30', shadow: 'shadow-[0_0_20px_rgba(96,165,250,0.15)]' },
            { name: 'Shield Master', desc: '7 days of Aura care', earned: true, color: 'text-purple-400', bg: 'bg-purple-400/10', border: 'border-purple-400/30', shadow: 'shadow-[0_0_20px_rgba(192,132,252,0.15)]' },
            { name: 'Ascension', desc: '30 day streak', earned: false, color: 'text-slate-600', bg: 'bg-slate-800/50', border: 'border-slate-700', shadow: '' },
            { name: 'Alchemist', desc: 'Transmuted heavy emotion', earned: false, color: 'text-slate-600', bg: 'bg-slate-800/50', border: 'border-slate-700', shadow: '' },
            { name: 'Oracle', desc: '30 Soul reflections', earned: false, color: 'text-slate-600', bg: 'bg-slate-800/50', border: 'border-slate-700', shadow: '' },
          ].map((badge, i) => (
            <Card key={i} className={cn("text-center p-6 flex flex-col items-center justify-center transition-all duration-500", badge.shadow, !badge.earned && "opacity-60 grayscale", badge.earned && "hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(255,255,255,0.05)]")}>
              <div className={cn("w-16 h-16 rounded-full flex items-center justify-center mb-4 border-2", badge.bg, badge.border, badge.color)}>
                <Award size={32} strokeWidth={1.5} />
              </div>
              <h4 className="font-bold text-sm mb-2 text-white">{badge.name}</h4>
              <p className="text-[10px] text-slate-400 leading-relaxed">{badge.desc}</p>
            </Card>
          ))}
        </>
      )}
    </PageLayout>
  );
}
