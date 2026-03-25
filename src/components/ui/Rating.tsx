import React from 'react';
import { cn } from '../../lib/utils';

interface RatingProps {
  value: number;
  onChange: (value: number) => void;
  colorClass: string;
}

export function Rating({ value, onChange, colorClass }: RatingProps) {
  return (
    <div className="flex justify-between gap-2">
      {[1, 2, 3, 4, 5].map((num) => (
        <button
          key={num}
          onClick={() => onChange(num)}
          className={cn(
            "flex-1 py-3 rounded-xl font-bold text-lg transition-all border",
            value === num 
              ? cn(colorClass.replace('text-', 'bg-'), "text-white border-transparent shadow-lg") 
              : "bg-cosmic-bg border-cosmic-border text-slate-400 hover:border-slate-600"
          )}
        >
          {num}
        </button>
      ))}
    </div>
  );
}
