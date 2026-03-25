import React from 'react';
import { cn } from '../../lib/utils';
import { motion } from 'motion/react';

interface CircularProgressProps {
  value: number;
  max?: number;
  colorClass: string;
  size?: number;
  strokeWidth?: number;
  label?: string;
}

export function CircularProgress({ 
  value, 
  max = 100, 
  colorClass, 
  size = 100, 
  strokeWidth = 8, 
  label 
}: CircularProgressProps) {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (value / max) * circumference;

  return (
    <div className="relative flex flex-col items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="transform -rotate-90 drop-shadow-lg">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          className="stroke-slate-800/50"
          strokeWidth={strokeWidth}
          fill="transparent"
        />
        <motion.circle
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          cx={size / 2}
          cy={size / 2}
          r={radius}
          className={cn("transition-all duration-1000 ease-out", colorClass)}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeLinecap="round"
          fill="transparent"
        />
      </svg>
      <div className="absolute flex flex-col items-center justify-center text-center">
        <span className="text-2xl font-black text-white tracking-tighter">{value}<span className="text-xs text-slate-500 font-medium">%</span></span>
        {label && <span className="text-[9px] uppercase tracking-widest text-slate-400 mt-0.5 font-bold">{label}</span>}
      </div>
    </div>
  );
}
