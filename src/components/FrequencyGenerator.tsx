import React, { useState, useEffect, useRef } from 'react';
import { Play, Square, Activity } from 'lucide-react';
import { cn } from '../lib/utils';

interface FrequencyGeneratorProps {
  frequency: number;
  colorClass: string;
}

export function FrequencyGenerator({ frequency, colorClass }: FrequencyGeneratorProps) {
  const [isPlaying, setIsPlaying] = useState(false);
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

  return (
    <div className="mt-4 flex items-center justify-between bg-black/40 rounded-xl p-3 border border-white/5">
      <div className="flex items-center gap-3">
        <div className={cn("w-10 h-10 rounded-full flex items-center justify-center bg-white/5", colorClass)}>
          <Activity size={20} className={isPlaying ? "animate-pulse" : ""} />
        </div>
        <div>
          <div className="text-sm font-bold text-white">{frequency} Hz</div>
          <div className="text-[10px] text-slate-400 uppercase tracking-wider">Pure Sine Wave</div>
        </div>
      </div>
      
      <button 
        onClick={togglePlay}
        className={cn(
          "w-10 h-10 rounded-full flex items-center justify-center transition-all",
          isPlaying 
            ? "bg-red-500/20 text-red-400 hover:bg-red-500/30" 
            : "bg-white/10 text-white hover:bg-white/20"
        )}
      >
        {isPlaying ? <Square size={16} fill="currentColor" /> : <Play size={16} fill="currentColor" className="ml-1" />}
      </button>
    </div>
  );
}
