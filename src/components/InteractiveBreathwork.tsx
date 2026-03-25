import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Wind, Play, Square } from 'lucide-react';
import { Card } from './ui/Card';
import { cn } from '../lib/utils';

export function InteractiveBreathwork() {
  const [isActive, setIsActive] = useState(false);
  const [phase, setPhase] = useState<'inhale' | 'hold' | 'exhale' | 'idle'>('idle');
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isActive) {
      if (timeLeft > 0) {
        timer = setTimeout(() => setTimeLeft(prev => prev - 1), 1000);
      } else {
        // Switch phases
        if (phase === 'idle' || phase === 'exhale') {
          setPhase('inhale');
          setTimeLeft(4);
        } else if (phase === 'inhale') {
          setPhase('hold');
          setTimeLeft(4);
        } else if (phase === 'hold') {
          setPhase('exhale');
          setTimeLeft(4);
        }
      }
    } else {
      setPhase('idle');
      setTimeLeft(0);
    }
    return () => clearTimeout(timer);
  }, [isActive, phase, timeLeft]);

  const toggleBreathwork = () => {
    setIsActive(!isActive);
  };

  return (
    <Card className="flex flex-col items-center justify-center p-8 border-blue-500/30 bg-gradient-to-br from-blue-900/20 to-black relative overflow-hidden">
      <div className="absolute top-4 left-4 flex items-center gap-2 text-blue-400">
        <Wind size={20} />
        <span className="font-bold text-sm tracking-widest uppercase">Heart Coherence</span>
      </div>

      <div className="relative w-64 h-64 flex items-center justify-center mt-8 mb-8">
        {/* Background glow */}
        <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-3xl" />
        
        {/* Animated Circle */}
        <motion.div
          className="absolute rounded-full border-2 border-blue-400/50 bg-blue-500/10 backdrop-blur-sm flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.3)]"
          animate={{
            width: phase === 'inhale' ? 240 : phase === 'hold' ? 240 : phase === 'exhale' ? 100 : 100,
            height: phase === 'inhale' ? 240 : phase === 'hold' ? 240 : phase === 'exhale' ? 100 : 100,
            opacity: phase === 'idle' ? 0.5 : 1
          }}
          transition={{
            duration: phase === 'idle' ? 0.5 : 4,
            ease: "easeInOut"
          }}
        >
          <div className="text-center">
            <div className="text-blue-300 font-bold text-xl uppercase tracking-widest mb-1">
              {phase === 'idle' ? 'Ready' : phase}
            </div>
            {phase !== 'idle' && (
              <div className="text-blue-400 font-mono text-3xl">{timeLeft}</div>
            )}
          </div>
        </motion.div>
      </div>

      <button
        onClick={toggleBreathwork}
        className={cn(
          "px-8 py-3 rounded-full font-bold uppercase tracking-widest flex items-center gap-2 transition-all",
          isActive 
            ? "bg-red-500/20 text-red-400 hover:bg-red-500/30 border border-red-500/50" 
            : "bg-blue-500 text-white hover:bg-blue-600 shadow-[0_0_20px_rgba(59,130,246,0.4)]"
        )}
      >
        {isActive ? (
          <>
            <Square size={18} fill="currentColor" /> Stop
          </>
        ) : (
          <>
            <Play size={18} fill="currentColor" /> Start Breathing
          </>
        )}
      </button>
    </Card>
  );
}
