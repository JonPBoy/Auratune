import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Wind, Play, Square, Info, ChevronRight, ChevronLeft, Heart, Zap, Moon, Shield } from 'lucide-react';
import { Card } from './ui/Card';
import { cn } from '../lib/utils';

type BreathingPhase = 'inhale' | 'hold' | 'exhale' | 'holdEmpty' | 'idle';

interface BreathingPractice {
  id: string;
  name: string;
  description: string;
  inhale: number;
  hold?: number;
  exhale: number;
  holdEmpty?: number;
  color: string;
  icon: React.ReactNode;
}

const practices: BreathingPractice[] = [
  {
    id: 'coherent',
    name: 'Heart Coherence',
    description: 'Balance the nervous system and align heart-brain rhythms. Ideal for emotional stability.',
    inhale: 6,
    exhale: 6,
    color: 'text-blue-400',
    icon: <Heart size={16} />
  },
  {
    id: 'box',
    name: 'Box Breathing',
    description: 'Used by elite performers to maintain calm and focus under pressure. Equal parts inhale, hold, exhale, hold.',
    inhale: 4,
    hold: 4,
    exhale: 4,
    holdEmpty: 4,
    color: 'text-emerald-400',
    icon: <Shield size={16} />
  },
  {
    id: '478',
    name: '4-7-8 Technique',
    description: 'A natural tranquilizer for the nervous system. Powerful for reducing anxiety and aiding sleep.',
    inhale: 4,
    hold: 7,
    exhale: 8,
    color: 'text-purple-400',
    icon: <Moon size={16} />
  },
  {
    id: 'power',
    name: 'Power Breath',
    description: 'Rapid rhythmic breathing to oxygenate the blood and increase alertness and energy.',
    inhale: 2,
    exhale: 2,
    color: 'text-orange-400',
    icon: <Zap size={16} />
  }
];

export function InteractiveBreathwork({ compact = false }: { compact?: boolean }) {
  const [isActive, setIsActive] = useState(false);
  const [selectedPracticeIndex, setSelectedPracticeIndex] = useState(0);
  const [phase, setPhase] = useState<BreathingPhase>('idle');
  const [timeLeft, setTimeLeft] = useState(0);
  const [showInfo, setShowInfo] = useState(false);
  const [coherence, setCoherence] = useState(0);

  const selectedPractice = practices[selectedPracticeIndex];

  useEffect(() => {
    if (isActive) {
      const interval = setInterval(() => {
        setCoherence(prev => Math.min(100, prev + (Math.random() * 2)));
      }, 2000);
      return () => clearInterval(interval);
    } else {
      setCoherence(0);
    }
  }, [isActive]);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isActive) {
      if (timeLeft > 0) {
        timer = setTimeout(() => setTimeLeft(prev => prev - 1), 1000);
      } else {
        // Switch phases
        if (phase === 'idle' || phase === 'holdEmpty') {
          setPhase('inhale');
          setTimeLeft(selectedPractice.inhale);
        } else if (phase === 'inhale') {
          if (selectedPractice.hold) {
            setPhase('hold');
            setTimeLeft(selectedPractice.hold);
          } else {
            setPhase('exhale');
            setTimeLeft(selectedPractice.exhale);
          }
        } else if (phase === 'hold') {
          setPhase('exhale');
          setTimeLeft(selectedPractice.exhale);
        } else if (phase === 'exhale') {
          if (selectedPractice.holdEmpty) {
            setPhase('holdEmpty');
            setTimeLeft(selectedPractice.holdEmpty);
          } else {
            setPhase('inhale');
            setTimeLeft(selectedPractice.inhale);
          }
        }
      }
    } else {
      setPhase('idle');
      setTimeLeft(0);
    }
    return () => clearTimeout(timer);
  }, [isActive, phase, timeLeft, selectedPractice]);

  const toggleBreathwork = () => {
    setIsActive(!isActive);
  };

  const nextPractice = () => {
    if (isActive) setIsActive(false);
    setSelectedPracticeIndex((prev) => (prev + 1) % practices.length);
  };

  const prevPractice = () => {
    if (isActive) setIsActive(false);
    setSelectedPracticeIndex((prev) => (prev - 1 + practices.length) % practices.length);
  };

  const phaseDuration = useMemo(() => {
    if (phase === 'inhale') return selectedPractice.inhale;
    if (phase === 'hold') return selectedPractice.hold || 0;
    if (phase === 'exhale') return selectedPractice.exhale;
    if (phase === 'holdEmpty') return selectedPractice.holdEmpty || 0;
    return 0;
  }, [phase, selectedPractice]);

  return (
    <Card className={cn(
      "flex flex-col items-center justify-center border-blue-500/30 bg-gradient-to-br from-blue-900/20 to-black relative overflow-hidden transition-all duration-500",
      compact ? "p-4" : "p-8",
      isActive && "border-blue-400/60 shadow-[0_0_40px_rgba(59,130,246,0.15)]"
    )}>
      {/* Header with selector */}
      <div className="w-full flex items-center justify-between mb-6 relative z-20">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2 text-blue-400">
            <Wind size={compact ? 16 : 20} />
            <span className={cn(
              "font-black tracking-[0.2em] uppercase",
              compact ? "text-[10px]" : "text-xs"
            )}>Breathwork Mastery</span>
          </div>
          <p className="text-[9px] text-slate-500 uppercase tracking-widest font-bold leading-tight max-w-[250px]">
            {selectedPractice.description}
          </p>
        </div>
        
        <div className="flex items-center gap-3">
          <button 
            onClick={() => setShowInfo(!showInfo)}
            className={cn(
              "p-1.5 rounded-full transition-colors",
              showInfo ? "bg-blue-500 text-white" : "text-slate-500 hover:text-blue-400 hover:bg-blue-500/10"
            )}
          >
            <Info size={16} />
          </button>
        </div>
      </div>

      {/* Practice Selector Controls */}
      {!isActive && (
        <div className="w-full flex items-center justify-between mb-4 bg-white/5 rounded-xl p-2 border border-white/5">
          <button onClick={prevPractice} className="p-2 text-slate-500 hover:text-white transition-colors">
            <ChevronLeft size={20} />
          </button>
          
          <div className="text-center">
            <div className={cn("flex items-center justify-center gap-2 font-black uppercase tracking-widest text-xs", selectedPractice.color)}>
              {selectedPractice.icon}
              {selectedPractice.name}
            </div>
          </div>

          <button onClick={nextPractice} className="p-2 text-slate-500 hover:text-white transition-colors">
            <ChevronRight size={20} />
          </button>
        </div>
      )}

      {/* Info Overlay */}
      <AnimatePresence>
        {showInfo && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute inset-x-4 top-16 bottom-20 bg-black/90 backdrop-blur-md z-30 rounded-2xl p-6 border border-blue-500/30 flex flex-col justify-center text-center"
          >
            <div className={cn("mb-4 flex justify-center", selectedPractice.color)}>
              {React.cloneElement(selectedPractice.icon as React.ReactElement<any>, { size: 32 })}
            </div>
            <h4 className={cn("text-lg font-black uppercase tracking-widest mb-2", selectedPractice.color)}>
              {selectedPractice.name}
            </h4>
            <p className="text-sm text-slate-300 leading-relaxed mb-6">
              {selectedPractice.description}
            </p>
            <div className="grid grid-cols-2 gap-4 text-[10px] uppercase tracking-widest font-bold">
              <div className="p-2 bg-white/5 rounded-lg border border-white/5">
                <div className="text-slate-500 mb-1">Inhale</div>
                <div className="text-white">{selectedPractice.inhale}s</div>
              </div>
              <div className="p-2 bg-white/5 rounded-lg border border-white/5">
                <div className="text-slate-500 mb-1">Exhale</div>
                <div className="text-white">{selectedPractice.exhale}s</div>
              </div>
              {selectedPractice.hold && (
                <div className="p-2 bg-white/5 rounded-lg border border-white/5">
                  <div className="text-slate-500 mb-1">Hold (Full)</div>
                  <div className="text-white">{selectedPractice.hold}s</div>
                </div>
              )}
              {selectedPractice.holdEmpty && (
                <div className="p-2 bg-white/5 rounded-lg border border-white/5">
                  <div className="text-slate-500 mb-1">Hold (Empty)</div>
                  <div className="text-white">{selectedPractice.holdEmpty}s</div>
                </div>
              )}
            </div>
            <button 
              onClick={() => setShowInfo(false)}
              className="mt-8 text-xs font-black uppercase tracking-widest text-blue-400 hover:text-blue-300"
            >
              Close Details
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <div className={cn(
        "relative flex items-center justify-center",
        compact ? "w-48 h-48 mt-2 mb-6" : "w-72 h-72 mt-4 mb-8"
      )}>
        {/* Background glow */}
        <div className={cn(
          "absolute inset-0 rounded-full blur-3xl transition-colors duration-1000",
          isActive ? (phase === 'inhale' ? "bg-blue-500/20" : phase === 'exhale' ? "bg-indigo-500/20" : "bg-purple-500/10") : "bg-blue-500/10"
        )} />
        
        {/* Progress Ring */}
        {isActive && (
          <svg className="absolute inset-0 w-full h-full -rotate-90">
            <circle
              cx="50%"
              cy="50%"
              r="48%"
              className="fill-none stroke-white/5 stroke-[2]"
            />
            <motion.circle
              cx="50%"
              cy="50%"
              r="48%"
              className={cn("fill-none stroke-[4] transition-colors duration-500", 
                phase === 'inhale' ? "stroke-blue-400" : 
                phase === 'exhale' ? "stroke-indigo-400" : 
                "stroke-purple-400"
              )}
              strokeDasharray="100 100"
              initial={{ strokeDashoffset: 100 }}
              animate={{ strokeDashoffset: isActive ? 0 : 100 }}
              transition={{ duration: phaseDuration, ease: "linear" }}
              key={phase}
            />
          </svg>
        )}

        {/* Animated Circle */}
        <motion.div
          className={cn(
            "absolute rounded-full border-2 backdrop-blur-sm flex items-center justify-center transition-colors duration-1000",
            isActive ? "border-white/20 bg-white/5" : "border-blue-400/30 bg-blue-500/5"
          )}
          animate={{
            scale: phase === 'inhale' ? 1.2 : phase === 'exhale' ? 0.8 : phase === 'idle' ? 1 : 1.1,
            width: compact ? 120 : 180,
            height: compact ? 120 : 180,
            boxShadow: isActive ? `0 0 40px ${phase === 'inhale' ? 'rgba(59,130,246,0.2)' : 'rgba(129,140,248,0.2)'}` : 'none'
          }}
          transition={{
            duration: phaseDuration || 1,
            ease: "easeInOut"
          }}
        >
          <div className="text-center relative z-10">
            <AnimatePresence mode="wait">
              <motion.div 
                key={phase}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.2 }}
                className={cn(
                  "font-black uppercase tracking-[0.3em] mb-1",
                  compact ? "text-[10px]" : "text-sm",
                  phase === 'inhale' ? "text-blue-300" : phase === 'exhale' ? "text-indigo-300" : "text-purple-300"
                )}
              >
                {phase === 'idle' ? 'Ready' : phase === 'holdEmpty' ? 'Hold' : phase}
              </motion.div>
            </AnimatePresence>
            
            {phase !== 'idle' && (
              <div className={cn(
                "text-white font-mono font-light",
                compact ? "text-2xl" : "text-4xl"
              )}>{timeLeft}</div>
            )}
            
            {phase === 'idle' && (
              <div className={cn("flex justify-center mt-2", selectedPractice.color)}>
                {selectedPractice.icon}
              </div>
            )}
          </div>
        </motion.div>

        {/* Coherence Indicator */}
        {isActive && (
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-full text-center">
            <div className="text-[8px] font-black text-blue-400 uppercase tracking-widest mb-1">Coherence Resonance</div>
            <div className="flex items-center justify-center gap-1">
              {[...Array(10)].map((_, i) => (
                <div 
                  key={i} 
                  className={cn(
                    "w-1 h-3 rounded-full transition-all duration-500",
                    i < Math.floor(coherence / 10) ? "bg-blue-400 shadow-[0_0_8px_rgba(59,130,246,0.6)]" : "bg-white/5"
                  )}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="w-full flex flex-col gap-4">
        <button
          onClick={toggleBreathwork}
          className={cn(
            "w-full rounded-2xl font-black uppercase tracking-[0.2em] flex items-center justify-center gap-3 transition-all duration-300 group",
            compact ? "py-3 text-[10px]" : "py-4 text-sm",
            isActive 
              ? "bg-red-500/10 text-red-400 hover:bg-red-500/20 border border-red-500/30" 
              : "bg-blue-600 text-white hover:bg-blue-500 shadow-[0_10px_20px_-10px_rgba(37,99,235,0.5)]"
          )}
        >
          {isActive ? (
            <>
              <Square size={compact ? 14 : 18} fill="currentColor" className="animate-pulse" /> Stop Practice
            </>
          ) : (
            <>
              <Play size={compact ? 14 : 18} fill="currentColor" className="group-hover:scale-110 transition-transform" /> Begin {selectedPractice.name}
            </>
          )}
        </button>
        
        {!isActive && (
          <p className="text-center text-[9px] text-slate-500 uppercase tracking-widest font-bold">
            Select a technique above to begin
          </p>
        )}
      </div>
    </Card>
  );
}
