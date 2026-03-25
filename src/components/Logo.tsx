import React from 'react';

export const Logo = ({ className = "w-64 h-auto" }: { className?: string }) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <svg viewBox="0 0 500 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-[0_0_30px_rgba(168,85,247,0.4)]">
        <defs>
          <linearGradient id="auraGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00f2ff" />
            <stop offset="30%" stopColor="#7000ff" />
            <stop offset="60%" stopColor="#ff00d4" />
            <stop offset="100%" stopColor="#ff9100" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Stylized "A" Wave - Bold and Fluid */}
        <path 
          d="M30 130C60 180 90 20 130 80C170 140 210 180 250 110" 
          stroke="url(#auraGradient)" 
          strokeWidth="22" 
          strokeLinecap="round" 
          fill="none"
          filter="url(#glow)"
        />
        <path 
          d="M110 115C130 115 150 135 180 135" 
          stroke="url(#auraGradient)" 
          strokeWidth="14" 
          strokeLinecap="round" 
          fill="none"
        />

        {/* Stylized "u" Wave */}
        <path 
          d="M280 100C300 60 330 60 350 100C370 140 400 140 420 100" 
          stroke="url(#auraGradient)" 
          strokeWidth="16" 
          strokeLinecap="round" 
          fill="none"
          filter="url(#glow)"
        />

        {/* "ratune" Text - Bold Sans-Serif */}
        <text x="260" y="135" fill="white" fontSize="72" fontWeight="900" fontFamily="Inter, system-ui, sans-serif" letterSpacing="-5">
          ratune
        </text>

        {/* Tagline */}
        <text x="265" y="180" fill="white" fontSize="22" fontWeight="700" fontFamily="Inter, system-ui, sans-serif" letterSpacing="1.5" opacity="0.9">
          Listen to your Energy
        </text>

        {/* Decorative Bubbles - Vibrant Colors */}
        <circle cx="80" cy="50" r="7" fill="#00f2ff" opacity="0.8" />
        <circle cx="60" cy="90" r="5" fill="#7000ff" opacity="0.6" />
        <circle cx="180" cy="30" r="9" fill="#ff00d4" opacity="0.7" />
        <circle cx="210" cy="170" r="7" fill="#00f2ff" opacity="0.5" />
        <circle cx="340" cy="40" r="10" fill="#7000ff" opacity="0.6" />
        <circle cx="380" cy="160" r="6" fill="#ff00d4" opacity="0.7" />
        <circle cx="120" cy="190" r="8" fill="#00f2ff" opacity="0.6" />
        <circle cx="290" cy="20" r="5" fill="#7000ff" opacity="0.5" />
        <circle cx="450" cy="70" r="12" fill="#ff9100" opacity="0.5" />
        <circle cx="410" cy="190" r="7" fill="#ff9100" opacity="0.6" />
      </svg>
    </div>
  );
};
