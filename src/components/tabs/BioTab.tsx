import React, { useState, useEffect } from 'react';
import { Waves, Calendar, Activity, Brain, Heart, Info, Save, Sparkles } from 'lucide-react';
import { PageLayout } from '../PageLayout';
import { Card } from '../ui/Card';
import { cn } from '../../lib/utils';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, ReferenceLine } from 'recharts';

interface BiorhythmData {
  date: string;
  dayName: string;
  physical: number;
  emotional: number;
  intellectual: number;
}

export function BioTab() {
  const [activeTab, setActiveTab] = useState('chart');
  const [birthDate, setBirthDate] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [chartData, setChartData] = useState<BiorhythmData[]>([]);
  const [forecastDays, setForecastDays] = useState<7 | 30>(7);

  useEffect(() => {
    const saved = localStorage.getItem('user_birth_date');
    if (saved) {
      setBirthDate(saved);
      generateChartData(saved, forecastDays);
    } else {
      setIsEditing(true);
    }
  }, []);

  useEffect(() => {
    if (birthDate && !isEditing) {
      generateChartData(birthDate, forecastDays);
    }
  }, [forecastDays]);

  const handleSave = () => {
    if (birthDate) {
      localStorage.setItem('user_birth_date', birthDate);
      setIsEditing(false);
      setActiveTab('chart');
      generateChartData(birthDate, forecastDays);
    }
  };

  const getDaysSinceBirth = (birthDateStr: string, targetDate: Date) => {
    const birth = new Date(birthDateStr);
    const birthTime = Date.UTC(birth.getFullYear(), birth.getMonth(), birth.getDate());
    const targetTime = Date.UTC(targetDate.getFullYear(), targetDate.getMonth(), targetDate.getDate());
    return Math.floor((targetTime - birthTime) / (1000 * 60 * 60 * 24));
  };

  const generateChartData = (bDate: string, days: number) => {
    const data: BiorhythmData[] = [];
    const today = new Date();
    
    const totalPoints = days === 7 ? 8 : 31;
    for (let i = 0; i < totalPoints; i++) {
      const targetDate = new Date(today);
      targetDate.setDate(today.getDate() + i);
      
      const t = getDaysSinceBirth(bDate, targetDate);
      
      data.push({
        date: targetDate.toISOString().split('T')[0],
        dayName: i === 0 ? 'Today' : (days === 7 ? targetDate.toLocaleDateString('en-US', { weekday: 'short' }) : targetDate.getDate().toString()),
        physical: Math.round(Math.sin((2 * Math.PI * t) / 23) * 100),
        emotional: Math.round(Math.sin((2 * Math.PI * t) / 28) * 100),
        intellectual: Math.round(Math.sin((2 * Math.PI * t) / 33) * 100),
      });
    }
    setChartData(data);
  };

  const tabs = [
    { id: 'chart', label: 'Biorhythms', icon: Waves },
    { id: 'feedback', label: 'Biofeedback', icon: Activity },
    { id: 'settings', label: 'Profile', icon: Calendar },
  ];

  const todayData = chartData.length > 0 ? chartData[0] : null;

  const getFeedback = (value: number, type: 'physical' | 'emotional' | 'intellectual') => {
    if (type === 'physical') {
      if (value > 50) return "Peak physical vitality. Your body is primed for exertion, healing, and high-energy activities. Push your limits.";
      if (value > 0) return "Positive physical phase. You have steady energy and resilience. Good time for consistent effort.";
      if (value > -50) return "Recharging phase. Your body is conserving energy. Focus on maintenance, stretching, and light activity.";
      return "Critical low. Your physical reserves are depleted. Prioritize deep rest, hydration, and recovery.";
    }
    if (type === 'emotional') {
      if (value > 50) return "Peak emotional resonance. High empathy, creativity, and connection. Excellent time for relationships and artistic expression.";
      if (value > 0) return "Positive emotional phase. You feel stable, optimistic, and cooperative. Good for teamwork and socializing.";
      if (value > -50) return "Reflective phase. You may feel more withdrawn or sensitive. Focus on self-care, journaling, and inner work.";
      return "Critical low. Emotional vulnerability is high. Avoid major relationship decisions. Practice extreme self-compassion.";
    }
    if (type === 'intellectual') {
      if (value > 50) return "Peak cognitive clarity. Your mind is sharp, logical, and absorbs information rapidly. Tackle complex problems now.";
      if (value > 0) return "Positive intellectual phase. Good focus and memory retention. Ideal for studying, planning, and organizing.";
      if (value > -50) return "Consolidation phase. Your mind is processing rather than acquiring. Review existing knowledge instead of learning new things.";
      return "Critical low. Cognitive fatigue. You may experience brain fog or poor judgment. Avoid critical decisions and rest your mind.";
    }
    return "";
  };

  const getPracticeSuggestion = (value: number, type: 'physical' | 'emotional' | 'intellectual') => {
    if (type === 'physical') {
      if (value > 50) return { name: "Breath of Fire", tab: "Aura", desc: "Use high-energy breathing to match your peak physical state." };
      if (value > 0) return { name: "Sunlight Charging", tab: "Aura", desc: "Harness the sun's prana to maintain your positive momentum." };
      if (value > -50) return { name: "Grounding (Earthing)", tab: "Aura", desc: "Stabilize your field as your body enters its recharging phase." };
      return { name: "Salt Water Cleansing", tab: "Aura", desc: "Prioritize deep energetic recovery during this critical low." };
    }
    if (type === 'emotional') {
      if (value > 50) return { name: "Sound Bathing", tab: "Aura", desc: "Amplify your high resonance with 741Hz frequencies." };
      if (value > 0) return { name: "Smudging Ritual", tab: "Aura", desc: "Keep your emotional field clear and cooperative." };
      if (value > -50) return { name: "Aura Combing", tab: "Aura", desc: "Gently untangle sensitive energetic knots during reflection." };
      return { name: "Violet Flame Invocation", tab: "Aura", desc: "Transmute heavy emotional density into pure light." };
    }
    if (type === 'intellectual') {
      if (value > 50) return { name: "Pineal Gland Meditation", tab: "Aura", desc: "Stimulate your third eye while your cognitive clarity is at its peak." };
      if (value > 0) return { name: "Golden Sphere Visualization", tab: "Aura", desc: "Filter incoming information to maintain your sharp focus." };
      if (value > -50) return { name: "Aura Sealing", tab: "Aura", desc: "Protect your mental energy while your mind processes information." };
      return { name: "Energy Cord Cutting", tab: "Aura", desc: "Reclaim mental energy from draining intellectual attachments." };
    }
    return null;
  };

  return (
    <PageLayout
      title="Biorhythms"
      subtitle="Your personal energy cycles"
      icon={Waves}
      colorClass="text-rose-500"
      tabs={tabs}
      activeSubTab={activeTab}
      setActiveSubTab={setActiveTab}
    >
      {isEditing || activeTab === 'settings' ? (
        <Card className="lg:col-span-2 xl:col-span-3">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Calendar className="text-rose-400" /> Birth Information
          </h3>
          <p className="text-slate-400 text-sm mb-6">
            Enter your date of birth to calculate your personal biorhythm cycles. This data is stored locally on your device.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="date"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
              className="bg-black/40 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-rose-500 flex-1"
            />
            <button
              onClick={handleSave}
              disabled={!birthDate}
              className="px-8 py-4 rounded-xl bg-rose-600 text-white font-bold hover:bg-rose-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              <Save size={20} /> Save Profile
            </button>
          </div>
        </Card>
      ) : (
        <>
          {activeTab === 'chart' && chartData.length > 0 && (
            <div className="col-span-1 lg:col-span-2 xl:col-span-3 grid grid-cols-1 lg:grid-cols-4 gap-6">
              <Card className="p-0 overflow-hidden lg:col-span-3">
                <div className="p-5 border-b border-white/5 bg-black/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h3 className="font-bold text-white text-lg">{forecastDays}-Day Forecast</h3>
                    <p className="text-xs text-slate-400 mt-1">Your physical, emotional, and intellectual cycles.</p>
                  </div>
                  <div className="flex bg-black/40 rounded-lg p-1 border border-white/10 w-fit">
                    <button 
                      onClick={() => setForecastDays(7)}
                      className={cn("px-4 py-1.5 text-xs font-bold rounded-md transition-colors", forecastDays === 7 ? "bg-rose-500 text-white" : "text-slate-400 hover:text-white")}
                    >
                      7 Days
                    </button>
                    <button 
                      onClick={() => setForecastDays(30)}
                      className={cn("px-4 py-1.5 text-xs font-bold rounded-md transition-colors", forecastDays === 30 ? "bg-rose-500 text-white" : "text-slate-400 hover:text-white")}
                    >
                      30 Days
                    </button>
                  </div>
                </div>
                <div className="h-80 w-full p-4 pt-6 bg-gradient-to-b from-cosmic-card to-black/40">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                      <defs>
                        <linearGradient id="colorPhys" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#ef4444" stopOpacity={0.4}/>
                          <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
                        </linearGradient>
                        <linearGradient id="colorEmo" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.4}/>
                          <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                        </linearGradient>
                        <linearGradient id="colorInt" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#eab308" stopOpacity={0.4}/>
                          <stop offset="95%" stopColor="#eab308" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" vertical={false} />
                      <XAxis dataKey="dayName" stroke="#475569" fontSize={10} tickLine={false} axisLine={false} dy={10} />
                      <YAxis stroke="#475569" fontSize={10} tickLine={false} axisLine={false} dx={-10} domain={[-100, 100]} />
                      <ReferenceLine y={0} stroke="#ffffff20" />
                      <Tooltip 
                        contentStyle={{ backgroundColor: '#0f172a', borderColor: '#1e293b', borderRadius: '12px' }}
                        itemStyle={{ fontSize: '12px', fontWeight: 'bold' }}
                        labelStyle={{ color: '#94a3b8', marginBottom: '6px', fontSize: '10px', textTransform: 'uppercase' }}
                      />
                      <Area type="monotone" dataKey="physical" name="Physical" stroke="#ef4444" strokeWidth={3} fillOpacity={1} fill="url(#colorPhys)" />
                      <Area type="monotone" dataKey="emotional" name="Emotional" stroke="#3b82f6" strokeWidth={3} fillOpacity={1} fill="url(#colorEmo)" />
                      <Area type="monotone" dataKey="intellectual" name="Intellectual" stroke="#eab308" strokeWidth={3} fillOpacity={1} fill="url(#colorInt)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
                <div className="flex justify-center gap-8 p-5 bg-black/40 text-xs font-bold uppercase tracking-wider">
                  <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.8)]" /> Physical</div>
                  <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]" /> Emotional</div>
                  <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-yellow-500 shadow-[0_0_10px_rgba(234,179,8,0.8)]" /> Intellectual</div>
                </div>
              </Card>

              {todayData && (
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 gap-6 lg:col-span-1">
                  <Card className="bg-black/40 border-red-500/20">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-red-400 font-bold flex items-center gap-2"><Activity size={18} /> Physical</h4>
                      <span className={cn("text-xl font-black", todayData.physical > 0 ? "text-emerald-400" : "text-rose-400")}>
                        {todayData.physical > 0 ? '+' : ''}{todayData.physical}%
                      </span>
                    </div>
                    <p className="text-sm text-slate-400">Energy, strength, endurance, and physical well-being.</p>
                  </Card>
                  <Card className="bg-black/40 border-blue-500/20">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-blue-400 font-bold flex items-center gap-2"><Heart size={18} /> Emotional</h4>
                      <span className={cn("text-xl font-black", todayData.emotional > 0 ? "text-emerald-400" : "text-rose-400")}>
                        {todayData.emotional > 0 ? '+' : ''}{todayData.emotional}%
                      </span>
                    </div>
                    <p className="text-sm text-slate-400">Mood, sensitivity, creativity, and emotional awareness.</p>
                  </Card>
                  <Card className="bg-black/40 border-yellow-500/20">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-yellow-400 font-bold flex items-center gap-2"><Brain size={18} /> Intellectual</h4>
                      <span className={cn("text-xl font-black", todayData.intellectual > 0 ? "text-emerald-400" : "text-rose-400")}>
                        {todayData.intellectual > 0 ? '+' : ''}{todayData.intellectual}%
                      </span>
                    </div>
                    <p className="text-sm text-slate-400">Logic, analytical thinking, memory, and communication.</p>
                  </Card>
                </div>
              )}
            </div>
          )}

          {activeTab === 'feedback' && todayData && (
            <div className="lg:col-span-2 xl:col-span-3 space-y-8">
              <Card className="border-rose-500/30 bg-gradient-to-br from-rose-900/20 to-cosmic-card relative overflow-hidden p-8">
                <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
                  <Activity size={160} />
                </div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-black mb-2 text-rose-400 flex items-center gap-3 tracking-wide uppercase">
                    <Sparkles size={28} className="text-rose-500 animate-pulse" />
                    Today's Biofeedback
                  </h3>
                  <p className="text-slate-300 text-base leading-relaxed max-w-2xl">
                    Your biological clock is a sophisticated symphony of cycles. Based on your current resonance, here is your personalized energetic blueprint for today.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 relative z-10">
                  {[
                    { 
                      type: 'physical', 
                      label: 'Physical', 
                      icon: Activity, 
                      color: 'text-red-400', 
                      barColor: 'bg-red-500',
                      glowColor: 'shadow-[0_0_15px_rgba(239,68,68,0.4)]',
                      value: todayData.physical 
                    },
                    { 
                      type: 'emotional', 
                      label: 'Emotional', 
                      icon: Heart, 
                      color: 'text-blue-400', 
                      barColor: 'bg-blue-500',
                      glowColor: 'shadow-[0_0_15px_rgba(59,130,246,0.4)]',
                      value: todayData.emotional 
                    },
                    { 
                      type: 'intellectual', 
                      label: 'Intellectual', 
                      icon: Brain, 
                      color: 'text-yellow-400', 
                      barColor: 'bg-yellow-500',
                      glowColor: 'shadow-[0_0_15px_rgba(234,179,8,0.4)]',
                      value: todayData.intellectual 
                    }
                  ].map((state) => (
                    <div key={state.type} className="flex flex-col h-full">
                      <div className="p-6 rounded-2xl bg-black/60 border border-white/10 backdrop-blur-md flex-1 flex flex-col">
                        <div className="flex items-center justify-between mb-6">
                          <div className={cn("p-2 rounded-lg bg-white/5 border border-white/10", state.color)}>
                            <state.icon size={20} />
                          </div>
                          <span className={cn("text-2xl font-black tracking-tighter", state.value > 0 ? "text-emerald-400" : "text-rose-400")}>
                            {state.value > 0 ? '+' : ''}{state.value}%
                          </span>
                        </div>
                        
                        <h4 className={cn("font-black text-xs uppercase tracking-[0.2em] mb-4", state.color)}>{state.label} Resonance</h4>
                        
                        {/* Progress Bar */}
                        <div className="h-2 w-full bg-white/5 rounded-full mb-6 overflow-hidden border border-white/5">
                          <div 
                            className={cn("h-full rounded-full transition-all duration-1000", state.barColor, state.glowColor)}
                            style={{ width: `${(state.value + 100) / 2}%` }}
                          />
                        </div>

                        <p className="text-sm text-slate-300 leading-relaxed mb-6 flex-1">
                          {getFeedback(state.value, state.type as any)}
                        </p>

                        {getPracticeSuggestion(state.value, state.type as any) && (
                          <div className="mt-auto pt-4 border-t border-white/5">
                            <div className={cn("flex items-center gap-2 text-[10px] font-black uppercase tracking-widest mb-2", state.color)}>
                              <Sparkles size={12} /> Recommended Practice
                            </div>
                            <div className="p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors cursor-pointer group">
                              <p className="text-xs text-slate-200 font-bold group-hover:text-white transition-colors">
                                {getPracticeSuggestion(state.value, state.type as any)?.name}
                              </p>
                              <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                                {getPracticeSuggestion(state.value, state.type as any)?.desc}
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
              
              <Card>
                <h3 className="text-lg font-bold mb-4 text-white flex items-center gap-2">
                  <Waves size={18} className="text-rose-400" />
                  Understanding Biorhythms
                </h3>
                <div className="space-y-4 text-sm text-slate-400 leading-relaxed">
                  <p>
                    Biorhythms are an attempt to predict various aspects of a person's life through simple mathematical cycles. The theory states that our lives are affected by rhythmic biological cycles that affect our ability in various domains.
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li><strong className="text-red-400">Physical (23 days):</strong> Coordination, strength, well-being.</li>
                    <li><strong className="text-blue-400">Emotional (28 days):</strong> Creativity, sensitivity, mood, perception.</li>
                    <li><strong className="text-yellow-400">Intellectual (33 days):</strong> Alertness, analytical functioning, logical analysis.</li>
                  </ul>
                  <p>
                    When a cycle is above the 0 line, you are in a "high" phase. When it is below, you are in a "recharging" phase. Days where the line crosses 0 are considered "critical days" where you might be more prone to instability in that area.
                  </p>
                </div>
              </Card>
            </div>
          )}
        </>
      )}
    </PageLayout>
  );
}
