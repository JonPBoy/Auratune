import React from 'react';

export const Logo = ({ className = "w-64 h-auto" }: { className?: string }) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <img 
        src="/logo.png" 
        alt="Auratune Logo" 
        className="w-full h-full object-contain drop-shadow-[0_0_30px_rgba(168,85,247,0.4)]"
      />
    </div>
  );
};
