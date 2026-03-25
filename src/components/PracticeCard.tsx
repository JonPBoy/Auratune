import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, RotateCcw, Clock, Volume2, ChevronDown, ChevronUp } from 'lucide-react';
import { Card } from './ui/Card';
import { cn } from '../lib/utils';
import { cosmicAudio } from '../lib/audio';

interface PracticeCardProps {
  title: string;
  duration: number; // in minutes
  description: string;
  icon: React.ReactNode;
  frequency?: number; // optional frequency to play
  colorClass?: string;
  compact?: boolean;
}

export function PracticeCard({ title, duration, description, icon, frequency, colorClass = "text-blue-400", compact = false }: PracticeCardProps) {
  const [timeLeft, setTimeLeft] = useState(duration * 60);
  const [isActive, setIsActive] = useState(false);
  const [isPlayingFreq, setIsPlayingFreq] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isActive && timeLeft > 0) {
      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsActive(false);
      cosmicAudio.playChime(432); // Chime at 432Hz when finished
      if (timerRef.current) clearInterval(timerRef.current);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isActive, timeLeft]);

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setIsActive(false);
    setTimeLeft(duration * 60);
  };

  const toggleFrequency = () => {
    if (isPlayingFreq) {
      cosmicAudio.stop();
      setIsPlayingFreq(false);
    } else if (frequency) {
      cosmicAudio.playFrequency(frequency);
      setIsPlayingFreq(true);
      // Stop other frequencies if they were playing (simple local state management)
      // In a real app, we'd use a global state or event emitter
    }
  };

  useEffect(() => {
    // Cleanup audio on unmount
    return () => {
      if (isPlayingFreq) {
        cosmicAudio.stop();
      }
    };
  }, [isPlayingFreq]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const progress = (timeLeft / (duration * 60)) * 100;

  return (
    <Card className={cn(
      "border-white/10 bg-black/40 relative overflow-hidden group",
      compact ? "p-3" : "p-5"
    )}>
      {/* Progress Bar at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/5">
        <div 
          className={cn(
            "h-full transition-all duration-1000 ease-linear",
            isActive ? "bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.4)]" : "bg-slate-700"
          )}
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="flex justify-between items-start mb-4">
        <div className="flex items-start gap-4 w-full">
          <div className={cn(
            "rounded-xl flex items-center justify-center transition-all duration-500 border relative overflow-hidden shrink-0",
            compact ? "w-8 h-8" : "w-12 h-12",
            isActive 
              ? "bg-emerald-500/10 border-emerald-500/30 shadow-[0_0_15px_rgba(16,185,129,0.2)]" 
              : "bg-white/5 border-white/10"
          )}>
            {/* Subtle background glow for the icon */}
            <div className={cn(
              "absolute inset-0 opacity-20 blur-xl",
              colorClass.replace('text-', 'bg-')
            )} />
            <div className="relative z-10">
              {icon}
            </div>
          </div>
          <div className="flex-1 pr-2">
            <h4 className={cn(
              "font-bold text-white tracking-wide uppercase",
              compact ? "text-xs" : "text-base md:text-lg"
            )}>{title}</h4>
            <div className={cn(
              "flex items-center gap-2 mt-1",
              compact ? "mb-1" : "mb-3"
            )}>
              <div className="relative group/tooltip">
                <button 
                  onClick={resetTimer}
                  className={cn(
                    "flex items-center gap-1 font-bold text-slate-400 hover:text-white transition-colors uppercase tracking-widest",
                    compact ? "text-[9px]" : "text-xs"
                  )}
                >
                  <Clock size={compact ? 10 : 12} />
                  {duration} mins
                </button>
                <div className="absolute top-full left-0 mt-2 px-2 py-1 bg-black/90 border border-white/10 rounded text-[10px] text-white whitespace-nowrap opacity-0 group-hover/tooltip:opacity-100 transition-opacity pointer-events-none z-50 shadow-xl">
                  Reset timer to original duration
                </div>
              </div>
            </div>
            
            <div className="relative">
              <p className={cn(
                "text-slate-200 leading-relaxed font-normal",
                compact ? "text-[11px]" : "text-base md:text-lg",
                !isExpanded && "line-clamp-3"
              )}>
                {description}
              </p>
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className={cn(
                  "flex items-center gap-1 text-blue-400 mt-2 font-bold uppercase tracking-wider hover:text-blue-300 transition-colors",
                  compact ? "text-[10px]" : "text-sm"
                )}
              >
                {isExpanded ? (
                  <><ChevronUp size={compact ? 12 : 16} /> Less</>
                ) : (
                  <><ChevronDown size={compact ? 12 : 16} /> More</>
                )}
              </button>
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-1.5 shrink-0 ml-2">
          {frequency && (
            <div className="relative group/tooltip">
              <button 
                onClick={toggleFrequency}
                className={cn(
                  "rounded-full transition-all duration-300 flex items-center justify-center",
                  compact ? "w-8 h-8" : "p-3",
                  isPlayingFreq ? "bg-blue-500 text-white shadow-[0_0_15px_rgba(59,130,246,0.5)]" : "bg-white/5 text-slate-400 hover:text-white hover:bg-white/10"
                )}
              >
                <Volume2 size={compact ? 14 : 16} />
              </button>
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-black/90 border border-white/10 rounded text-[10px] text-white whitespace-nowrap opacity-0 group-hover/tooltip:opacity-100 transition-opacity pointer-events-none z-50 shadow-xl">
                {isPlayingFreq ? "Stop Frequency" : "Play Frequency"}
              </div>
            </div>
          )}
          <div className="relative group/tooltip">
            <button 
              onClick={toggleTimer}
              className={cn(
                "rounded-full transition-all duration-300 flex items-center justify-center",
                compact ? "w-8 h-8" : "p-3",
                isActive ? "bg-emerald-500 text-white shadow-[0_0_15px_rgba(16,185,129,0.5)]" : "bg-white/5 text-slate-400 hover:text-white hover:bg-white/10"
              )}
            >
              {isActive ? <Pause size={compact ? 14 : 16} /> : <Play size={compact ? 14 : 16} />}
            </button>
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-black/90 border border-white/10 rounded text-[10px] text-white whitespace-nowrap opacity-0 group-hover/tooltip:opacity-100 transition-opacity pointer-events-none z-50 shadow-xl">
              {isActive ? "Pause Timer" : "Start Timer"}
            </div>
          </div>
        </div>
      </div>

      {frequency && (
        <div className="relative group/tooltip mt-1">
          <button 
            onClick={toggleFrequency}
            className={cn(
              "w-full mb-2 rounded-xl font-black uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2 border",
              compact ? "py-2 text-[10px]" : "py-3 text-xs",
              isPlayingFreq 
                ? "bg-blue-500/20 border-blue-500/50 text-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.2)]" 
                : "bg-white/5 border-white/10 text-slate-400 hover:bg-white/10 hover:border-white/20"
            )}
          >
            {isPlayingFreq ? (
              <>
                <div className={cn("flex gap-0.5 items-end", compact ? "h-3" : "h-4")}>
                  <div className="w-0.5 bg-blue-400 animate-[bounce_1s_infinite]" style={{ animationDelay: '0ms' }} />
                  <div className="w-0.5 bg-blue-400 animate-[bounce_1s_infinite]" style={{ animationDelay: '200ms' }} />
                  <div className="w-0.5 bg-blue-400 animate-[bounce_1s_infinite]" style={{ animationDelay: '400ms' }} />
                </div>
                Stop {frequency}Hz
              </>
            ) : (
              <>
                <Volume2 size={compact ? 14 : 16} />
                Play {frequency}Hz
              </>
            )}
          </button>
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-6 px-2 py-1 bg-black/90 border border-white/10 rounded text-[10px] text-white whitespace-nowrap opacity-0 group-hover/tooltip:opacity-100 transition-opacity pointer-events-none z-50 shadow-xl">
            {isPlayingFreq ? "Stop playing the cosmic frequency" : "Play the cosmic frequency associated with this practice"}
          </div>
        </div>
      )}

      {isActive || timeLeft < duration * 60 ? (
        <div className={cn(
          "flex items-center justify-between bg-black/40 rounded-lg border border-white/5 mt-1",
          compact ? "px-3 py-2" : "px-4 py-3"
        )}>
          <span className={cn("font-mono text-emerald-400", compact ? "text-xs" : "text-sm")}>{formatTime(timeLeft)}</span>
          <div className="relative group/tooltip">
            <button onClick={resetTimer} className="text-slate-500 hover:text-white transition-colors">
              <RotateCcw size={compact ? 12 : 14} />
            </button>
            <div className="absolute bottom-full right-0 mb-2 px-2 py-1 bg-black/90 border border-white/10 rounded text-[10px] text-white whitespace-nowrap opacity-0 group-hover/tooltip:opacity-100 transition-opacity pointer-events-none z-50 shadow-xl">
              Reset Timer
            </div>
          </div>
        </div>
      ) : null}
    </Card>
  );
}
