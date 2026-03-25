import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Play, Square, Activity, Sparkles, Grid3x3, X, Search } from 'lucide-react';
import { cn } from '../lib/utils';

// Base known frequencies
const SOLFEGGIO_FREQUENCIES = [
  { value: 174, name: 'Pain Relief', color: 'text-rose-400', bg: 'bg-rose-500/20' },
  { value: 285, name: 'Healing Tissue', color: 'text-orange-400', bg: 'bg-orange-500/20' },
  { value: 396, name: 'Liberating Fear', color: 'text-red-400', bg: 'bg-red-500/20' },
  { value: 417, name: 'Facilitating Change', color: 'text-amber-400', bg: 'bg-amber-500/20' },
  { value: 528, name: 'DNA Repair', color: 'text-emerald-400', bg: 'bg-emerald-500/20' },
  { value: 639, name: 'Connecting Relationships', color: 'text-green-400', bg: 'bg-green-500/20' },
  { value: 741, name: 'Awakening Intuition', color: 'text-blue-400', bg: 'bg-blue-500/20' },
  { value: 852, name: 'Spiritual Order', color: 'text-indigo-400', bg: 'bg-indigo-500/20' },
  { value: 963, name: 'Divine Consciousness', color: 'text-purple-400', bg: 'bg-purple-500/20' },
];

const BENEFICIAL_FREQUENCIES = [
  { value: 111, name: 'Holy Frequency', color: 'text-white', bg: 'bg-white/20' },
  { value: 432, name: 'Cosmic Harmony', color: 'text-yellow-400', bg: 'bg-yellow-500/20' },
  { value: 444, name: 'Master Key', color: 'text-cyan-400', bg: 'bg-cyan-500/20' },
  { value: 7.83, name: 'Schumann Resonance', color: 'text-emerald-500', bg: 'bg-emerald-500/20' },
  { value: 40, name: 'Gamma Brainwave', color: 'text-fuchsia-400', bg: 'bg-fuchsia-500/20' },
];

const BASE_FREQUENCIES = [...SOLFEGGIO_FREQUENCIES, ...BENEFICIAL_FREQUENCIES];

const COLORS = [
  { text: 'text-rose-400', bg: 'bg-rose-500/20' },
  { text: 'text-orange-400', bg: 'bg-orange-500/20' },
  { text: 'text-amber-400', bg: 'bg-amber-500/20' },
  { text: 'text-yellow-400', bg: 'bg-yellow-500/20' },
  { text: 'text-emerald-400', bg: 'bg-emerald-500/20' },
  { text: 'text-cyan-400', bg: 'bg-cyan-500/20' },
  { text: 'text-blue-400', bg: 'bg-blue-500/20' },
  { text: 'text-indigo-400', bg: 'bg-indigo-500/20' },
  { text: 'text-purple-400', bg: 'bg-purple-500/20' },
  { text: 'text-fuchsia-400', bg: 'bg-fuchsia-500/20' },
  { text: 'text-pink-400', bg: 'bg-pink-500/20' },
];

// Generate 200+ frequencies
const ALL_FREQUENCIES = [...BASE_FREQUENCIES];
let currentFreq = 100;
while (ALL_FREQUENCIES.length < 210) {
  if (!ALL_FREQUENCIES.find(f => f.value === currentFreq)) {
    const colorObj = COLORS[currentFreq % COLORS.length];
    ALL_FREQUENCIES.push({
      value: currentFreq,
      name: `Harmonic Resonance`,
      color: colorObj.text,
      bg: colorObj.bg
    });
  }
  currentFreq += Math.floor(Math.random() * 4) + 2; // Increment by 2-5 Hz
}
ALL_FREQUENCIES.sort((a, b) => a.value - b.value);

function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);

  return debouncedValue;
}

export function FrequencyGenerator({ compact = false }: { compact?: boolean }) {
  const [frequency, setFrequency] = useState(528);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const debouncedSearchQuery = useDebounce(searchQuery, 300);
  const [activeCategory, setActiveCategory] = useState<'solfeggio' | 'beneficial'>('solfeggio');

  const audioCtxRef = useRef<AudioContext | null>(null);
  const oscillatorRef = useRef<OscillatorNode | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);

  useEffect(() => {
    return () => {
      if (audioCtxRef.current) {
        audioCtxRef.current.close();
      }
    };
  }, []);

  useEffect(() => {
    if (isPlaying && oscillatorRef.current && audioCtxRef.current) {
      oscillatorRef.current.frequency.setTargetAtTime(frequency, audioCtxRef.current.currentTime, 0.1);
    }
  }, [frequency, isPlaying]);

  const togglePlay = () => {
    if (isPlaying) {
      // Stop
      if (gainNodeRef.current && audioCtxRef.current) {
        gainNodeRef.current.gain.setTargetAtTime(0, audioCtxRef.current.currentTime, 0.1);
        setTimeout(() => {
          oscillatorRef.current?.stop();
          oscillatorRef.current?.disconnect();
          setIsPlaying(false);
        }, 100);
      }
    } else {
      // Play
      if (!audioCtxRef.current || audioCtxRef.current.state === 'closed') {
        audioCtxRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
      }
      
      const ctx = audioCtxRef.current;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      
      osc.type = 'sine';
      osc.frequency.setValueAtTime(frequency, ctx.currentTime);
      
      gain.gain.setValueAtTime(0, ctx.currentTime);
      gain.gain.setTargetAtTime(0.5, ctx.currentTime, 0.1); // Fade in
      
      osc.connect(gain);
      gain.connect(ctx.destination);
      
      osc.start();
      
      oscillatorRef.current = osc;
      gainNodeRef.current = gain;
      setIsPlaying(true);
    }
  };

  const activeFreq = ALL_FREQUENCIES.find(f => f.value === frequency) || { color: 'text-white', bg: 'bg-white/20', name: 'Custom Frequency' };

  const filteredFrequencies = useMemo(() => {
    if (!debouncedSearchQuery) return ALL_FREQUENCIES;
    const lowerQuery = debouncedSearchQuery.toLowerCase();
    return ALL_FREQUENCIES.filter(f => 
      f.value.toString().includes(lowerQuery) || 
      f.name.toLowerCase().includes(lowerQuery)
    );
  }, [debouncedSearchQuery]);

  if (showAll) {
    return (
      <div className="flex flex-col h-[70vh] bg-black/60 rounded-3xl border border-white/10 p-6 relative overflow-hidden animate-in fade-in zoom-in-95 duration-300">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-black text-white tracking-tight flex items-center gap-3">
            <Grid3x3 className="text-purple-400" />
            ALL FREQUENCIES
          </h3>
          <button 
            onClick={() => setShowAll(false)}
            className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors text-white"
          >
            <X size={24} />
          </button>
        </div>

        <div className="relative mb-6">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
          <input 
            type="text"
            placeholder="Search by Hz or name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-black/50 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 transition-colors"
          />
        </div>

        <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {filteredFrequencies.map((freq) => (
              <button
                key={freq.value}
                onClick={() => {
                  setFrequency(freq.value);
                  setShowAll(false);
                }}
                className={cn(
                  "p-4 rounded-2xl border transition-all text-left flex flex-col gap-1 relative overflow-hidden group",
                  frequency === freq.value 
                    ? cn("bg-white/10 border-white/30 shadow-lg", freq.color)
                    : "bg-black/60 border-white/5 text-slate-300 hover:bg-white/10 hover:border-white/20"
                )}
              >
                <div className={cn("absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500", freq.bg)} />
                <span className={cn("font-black text-xl z-10", freq.color)}>{freq.value} Hz</span>
                <span className="text-[10px] uppercase tracking-widest opacity-90 z-10 font-medium truncate w-full">{freq.name}</span>
              </button>
            ))}
          </div>
          {filteredFrequencies.length === 0 && (
            <div className="text-center text-slate-500 mt-12">
              No frequencies found matching "{searchQuery}"
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className={cn("flex flex-col gap-4", compact ? "mt-2" : "mt-4")}>
      {/* Visualizer & Play Control */}
      <div className={cn(
        "flex flex-col items-center justify-center bg-gradient-to-b from-black/60 to-black/40 rounded-3xl border border-white/10 relative overflow-hidden shadow-2xl",
        compact ? "p-6" : "p-10"
      )}>
        {isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none">
            <div className={cn("rounded-full animate-ping", activeFreq.bg, compact ? "w-40 h-40" : "w-72 h-72")} style={{ animationDuration: `${Math.max(0.5, 1000 / frequency)}s` }} />
            <div className={cn("absolute rounded-full animate-ping delay-150 opacity-50", activeFreq.bg, compact ? "w-56 h-56" : "w-96 h-96")} style={{ animationDuration: `${Math.max(0.8, 1200 / frequency)}s` }} />
          </div>
        )}
        
        <div className={cn(
          "rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(0,0,0,0.5)] transition-colors duration-500 relative z-10 backdrop-blur-md border border-white/10",
          activeFreq.bg, activeFreq.color,
          compact ? "w-20 h-20 mb-4" : "w-32 h-32 mb-8"
        )}>
          <Activity size={compact ? 40 : 64} className={isPlaying ? "animate-pulse" : ""} />
        </div>
        
        <div className={cn("text-center relative z-10", compact ? "mb-6" : "mb-10")}>
          <div className={cn("font-black mb-1 tracking-tighter drop-shadow-lg", activeFreq.color, compact ? "text-4xl" : "text-7xl")}>
            {frequency} <span className={cn("text-white/50", compact ? "text-lg" : "text-3xl")}>Hz</span>
          </div>
          <div className={cn("font-bold uppercase tracking-[0.3em]", activeFreq.color, compact ? "text-[10px]" : "text-lg")}>{activeFreq.name}</div>
        </div>
        
        <button 
          onClick={togglePlay}
          className={cn(
            "rounded-full flex items-center justify-center transition-all shadow-2xl relative z-10 border-4",
            compact ? "w-16 h-16" : "w-24 h-24",
            isPlaying 
              ? "bg-red-500 text-white hover:bg-red-600 hover:scale-105 border-red-400 shadow-[0_0_30px_rgba(239,68,68,0.5)]" 
              : "bg-white text-black hover:bg-slate-200 hover:scale-105 border-white shadow-[0_0_30px_rgba(255,255,255,0.3)]"
          )}
        >
          {isPlaying ? <Square size={compact ? 24 : 36} fill="currentColor" /> : <Play size={compact ? 24 : 36} fill="currentColor" className={compact ? "ml-1" : "ml-2"} />}
        </button>
      </div>

      {/* Preset Frequencies Carousel */}
      <div className={cn("bg-black/20 rounded-3xl border border-white/5", compact ? "p-4" : "p-6")}>
        <div className={cn("flex items-center justify-between", compact ? "mb-4" : "mb-6")}>
          <div className="flex items-center gap-4">
            <h3 className={cn(
              "font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400 tracking-tight drop-shadow-md flex items-center gap-2",
              compact ? "text-sm" : "text-2xl md:text-3xl"
            )}>
              <Sparkles className="text-yellow-400" size={compact ? 16 : 28} />
              DISCOVER
            </h3>
            
            <div className="flex bg-white/5 rounded-full p-1 border border-white/5">
              <button 
                onClick={() => setActiveCategory('solfeggio')}
                className={cn(
                  "px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest transition-all",
                  activeCategory === 'solfeggio' ? "bg-blue-500 text-white" : "text-slate-500 hover:text-slate-300"
                )}
              >
                Solfeggio
              </button>
              <button 
                onClick={() => setActiveCategory('beneficial')}
                className={cn(
                  "px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest transition-all",
                  activeCategory === 'beneficial' ? "bg-blue-500 text-white" : "text-slate-500 hover:text-slate-300"
                )}
              >
                Beneficial
              </button>
            </div>
          </div>

          <button 
            onClick={() => setShowAll(true)}
            className="hidden sm:flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-full font-bold text-[9px] tracking-widest uppercase transition-all"
          >
            <Grid3x3 size={12} />
            View All
          </button>
        </div>
        
        <div className="relative group/carousel">
          <div className="flex overflow-x-auto gap-3 pb-4 pr-4 custom-scrollbar snap-x">
            {(activeCategory === 'solfeggio' ? SOLFEGGIO_FREQUENCIES : BENEFICIAL_FREQUENCIES).map((freq) => (
              <button
                key={freq.value}
                onClick={() => setFrequency(freq.value)}
                className={cn(
                  "flex-shrink-0 rounded-2xl border transition-all text-left flex flex-col gap-1 relative overflow-hidden group snap-start",
                  compact ? "w-32 p-3" : "w-40 p-4",
                  frequency === freq.value 
                    ? cn("bg-white/10 border-white/30 shadow-lg", freq.color)
                    : "bg-black/60 border-white/5 text-slate-300 hover:bg-white/10 hover:border-white/20"
                )}
              >
                <div className={cn("absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500", freq.bg)} />
                <span className={cn("font-black z-10", freq.color, compact ? "text-lg" : "text-2xl")}>{freq.value} Hz</span>
                <span className="text-[8px] uppercase tracking-widest opacity-90 z-10 font-medium truncate w-full">{freq.name}</span>
              </button>
            ))}
          </div>
          
          {/* Gradient Fades for Carousel */}
          <div className="absolute top-0 right-0 bottom-4 w-12 bg-gradient-to-l from-black/40 to-transparent pointer-events-none" />
        </div>

        <button 
          onClick={() => setShowAll(true)}
          className="w-full sm:hidden flex items-center justify-center gap-2 px-5 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-2xl font-bold text-sm tracking-widest uppercase transition-all mt-4"
        >
          <Grid3x3 size={18} />
          Explore 200+ Frequencies
        </button>
      </div>
    </div>
  );
}
