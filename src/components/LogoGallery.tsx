import React from 'react';
import { Card } from './ui/Card';

const Logo1 = () => (
  <svg viewBox="0 0 100 100" className="w-16 h-16" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="50" cy="40" r="25" className="text-purple-500/30" fill="currentColor" />
    <circle cx="50" cy="40" r="15" className="text-purple-400/50" fill="currentColor" />
    <path d="M40 20v30a10 10 0 0 0 20 0V20M50 60v30" className="text-white" />
  </svg>
);

const Logo2 = () => (
  <svg viewBox="0 0 100 100" className="w-16 h-16" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="50" cy="50" r="15" className="text-yellow-400" fill="currentColor" />
    <path d="M50 15v10M50 75v10M15 50h10M75 50h10M25 25l7 7M68 68l7 7M25 75l7-7M68 32l7-7" className="text-orange-500" />
    <path d="M35 10v20M65 10v20M10 35h20M10 65h20M80 35h10M80 65h10M35 70v20M65 70v20" className="text-yellow-600" strokeWidth="2" />
  </svg>
);

const Logo3 = () => (
  <svg viewBox="0 0 100 100" className="w-16 h-16" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M50 20L20 80h60L50 20z" className="text-white" />
    <path d="M35 50h30" className="text-white" />
    <path d="M50 20L80 50l10-10" className="text-purple-400" strokeWidth="3" />
    <path d="M50 20L90 60" className="text-blue-400" strokeWidth="3" />
    <path d="M50 20L95 70" className="text-pink-400" strokeWidth="3" />
  </svg>
);

const Logo4 = () => (
  <svg viewBox="0 0 100 100" className="w-16 h-16" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M50 80c-15-20-25-35-25-50a25 25 0 0 1 50 0c0 15-10 30-25 50z" className="text-emerald-500/20" fill="currentColor" />
    <path d="M50 80V30M40 70V40M30 55v-5M60 70V40M70 55v-5" className="text-emerald-400" />
  </svg>
);

const Logo5 = () => (
  <svg viewBox="0 0 100 100" className="w-16 h-16" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 50c15-20 35-30 40-30s25 10 40 30c-15 20-35 30-40 30s-25-10-40-30z" className="text-slate-300" />
    <circle cx="50" cy="50" r="20" className="text-blue-500/20" fill="currentColor" />
    <path d="M35 50h5l5-15 10 30 5-15h5" className="text-blue-400" strokeWidth="3" />
  </svg>
);

const Logo6 = () => (
  <svg viewBox="0 0 100 100" className="w-16 h-16" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="35" cy="50" r="25" className="text-pink-500" />
    <circle cx="65" cy="50" r="25" className="text-indigo-500" />
    <path d="M50 40l5 10 10 5-10 5-5 10-5-10-10-5 10-5z" className="text-yellow-400" fill="currentColor" strokeWidth="1" />
  </svg>
);

const Logo7 = () => (
  <svg viewBox="0 0 100 100" className="w-16 h-16" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M30 80L50 20l20 60" className="text-purple-400" />
    <path d="M20 40h60M50 40v40" className="text-cyan-400" />
    <circle cx="50" cy="50" r="40" className="text-white/20" strokeWidth="2" strokeDasharray="4 4" />
  </svg>
);

const Logo8 = () => (
  <svg viewBox="0 0 100 100" className="w-16 h-16" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="50" cy="50" r="15" className="text-fuchsia-500" fill="currentColor" />
    <ellipse cx="50" cy="50" rx="40" ry="15" className="text-fuchsia-400/50" transform="rotate(30 50 50)" />
    <ellipse cx="50" cy="50" rx="40" ry="15" className="text-blue-400/50" transform="rotate(-30 50 50)" />
    <ellipse cx="50" cy="50" rx="40" ry="15" className="text-purple-400/50" transform="rotate(90 50 50)" />
  </svg>
);

const Logo9 = () => (
  <svg viewBox="0 0 100 100" className="w-16 h-16" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M50 10v20M50 70v20M10 50h20M70 50h20M22 22l14 14M64 64l14 14M22 78l14-14M64 36l14-14" className="text-emerald-400" />
    <circle cx="50" cy="50" r="10" className="text-emerald-300" fill="currentColor" />
    <circle cx="50" cy="50" r="30" className="text-emerald-500/30" strokeWidth="2" />
  </svg>
);

const Logo10 = () => (
  <svg viewBox="0 0 100 100" className="w-16 h-16" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
    <defs>
      <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#a855f7" />
        <stop offset="100%" stopColor="#3b82f6" />
      </linearGradient>
    </defs>
    <path d="M50 15L20 85h15l5-15h20l5 15h15L50 15z" fill="url(#grad)" stroke="none" />
    <path d="M40 70v10M50 70v15M60 70v10M45 60v10M55 60v10M50 50v10" className="text-black" strokeWidth="3" />
  </svg>
);

const Logo11 = () => (
  <svg viewBox="0 0 100 100" className="w-16 h-16" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="50" cy="50" r="12" className="text-fuchsia-500" fill="currentColor" />
    <ellipse cx="50" cy="50" rx="40" ry="15" className="text-fuchsia-400/60" transform="rotate(30 50 50)" />
    <ellipse cx="50" cy="50" rx="40" ry="15" className="text-blue-400/60" transform="rotate(-30 50 50)" />
    <ellipse cx="50" cy="50" rx="40" ry="15" className="text-purple-400/60" transform="rotate(90 50 50)" />
    <path d="M40 20v25a10 10 0 0 0 20 0V20M50 55v25" className="text-white" />
  </svg>
);

const Logo12 = () => (
  <svg viewBox="0 0 100 100" className="w-16 h-16" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="50" cy="60" rx="40" ry="15" className="text-fuchsia-400/60" transform="rotate(15 50 60)" />
    <ellipse cx="50" cy="60" rx="40" ry="15" className="text-blue-400/60" transform="rotate(-15 50 60)" />
    <path d="M50 15L25 80h15l3-10h14l3 10h15L50 15z" className="text-white" fill="currentColor" stroke="none" />
    <path d="M42 65v10M50 60v15M58 65v10" className="text-black" strokeWidth="3" />
  </svg>
);

const Logo13 = () => (
  <svg viewBox="0 0 100 100" className="w-16 h-16" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="50" cy="50" rx="35" ry="15" className="text-purple-400/50" transform="rotate(45 50 50)" />
    <path d="M50 15L30 80M50 15L70 80" className="text-white" />
    <path d="M35 55v-5M42 60v-15M50 65v-25M58 60v-15M65 55v-5" className="text-fuchsia-400" strokeWidth="2" />
  </svg>
);

const Logo14 = () => (
  <svg viewBox="0 0 100 100" className="w-16 h-16" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="50" cy="40" rx="40" ry="12" className="text-blue-400/60" transform="rotate(-20 50 40)" />
    <path d="M35 15v5l5 5v5l-5 5v5a15 15 0 0 0 30 0v-5l-5-5v-5l5-5v-5" className="text-white" />
    <path d="M50 55v30" className="text-white" />
    <circle cx="50" cy="40" r="8" className="text-fuchsia-500" fill="currentColor" />
  </svg>
);

const Logo15 = () => (
  <svg viewBox="0 0 100 100" className="w-16 h-16" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="50" cy="50" rx="40" ry="15" className="text-fuchsia-400/50" transform="rotate(90 50 50)" />
    <ellipse cx="50" cy="50" rx="40" ry="15" className="text-purple-400/50" transform="rotate(0 50 50)" />
    <path d="M50 20v60M40 35v45M30 55v25M60 35v45M70 55v25M40 55h20" className="text-white" strokeWidth="4" />
  </svg>
);

const Logo16 = () => (
  <svg viewBox="0 0 100 100" className="w-16 h-16" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M35 20v30a15 15 0 0 0 30 0V20M50 65v20" className="text-white" />
    <ellipse cx="35" cy="35" rx="20" ry="8" className="text-fuchsia-400/70" transform="rotate(30 35 35)" />
    <ellipse cx="65" cy="35" rx="20" ry="8" className="text-blue-400/70" transform="rotate(-30 65 35)" />
    <circle cx="50" cy="50" r="6" className="text-purple-400" fill="currentColor" />
  </svg>
);

const Logo17 = () => (
  <svg viewBox="0 0 100 100" className="w-16 h-16" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="50" cy="50" rx="45" ry="15" className="text-fuchsia-400/50" transform="rotate(30 50 50)" />
    <ellipse cx="50" cy="50" rx="45" ry="15" className="text-blue-400/50" transform="rotate(-30 50 50)" />
    <ellipse cx="50" cy="50" rx="45" ry="15" className="text-purple-400/50" transform="rotate(90 50 50)" />
    <path d="M50 15L25 85h10l5-15h20l5 15h10L50 15z" className="text-white" fill="currentColor" stroke="none" />
    <path d="M45 45v15a5 5 0 0 0 10 0V45M50 65v10" className="text-black" strokeWidth="2" />
  </svg>
);

const Logo18 = () => (
  <svg viewBox="0 0 100 100" className="w-16 h-16" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="50" cy="50" rx="35" ry="15" className="text-fuchsia-400/60" transform="rotate(0 50 50)" />
    <path d="M45 20v10a5 5 0 0 0 10 0V20M50 35v15" className="text-white" />
    <path d="M25 60v10a5 5 0 0 0 10 0V60M30 75v10" className="text-blue-400" />
    <path d="M65 60v10a5 5 0 0 0 10 0V60M70 75v10" className="text-purple-400" />
    <path d="M35 65h30" className="text-white/50" strokeWidth="2" strokeDasharray="4 4" />
  </svg>
);

const Logo19 = () => (
  <svg viewBox="0 0 100 100" className="w-16 h-16" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="50" cy="60" rx="30" ry="10" className="text-fuchsia-400/80" />
    <path d="M35 20v30a5 5 0 0 0 10 0V20M40 55v30" className="text-white" transform="rotate(-20 40 50)" />
    <path d="M55 20v30a5 5 0 0 0 10 0V20M60 55v30" className="text-white" transform="rotate(20 60 50)" />
  </svg>
);

const Logo20 = () => (
  <svg viewBox="0 0 100 100" className="w-16 h-16" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="50" cy="45" r="15" className="text-fuchsia-500" fill="currentColor" />
    <ellipse cx="50" cy="45" rx="40" ry="12" className="text-fuchsia-400/60" transform="rotate(30 50 45)" />
    <ellipse cx="50" cy="45" rx="40" ry="12" className="text-blue-400/60" transform="rotate(-30 50 45)" />
    <ellipse cx="50" cy="45" rx="40" ry="12" className="text-purple-400/60" transform="rotate(90 50 45)" />
    <path d="M50 10L20 75h15l4-10h22l4 10h15L50 10z" className="text-white" fill="currentColor" stroke="none" />
    <path d="M44 40v12a6 6 0 0 0 12 0V40M50 58v12" className="text-black" strokeWidth="3" />
    <path d="M35 85v10M45 85v15M55 85v15M65 85v10" className="text-fuchsia-400" strokeWidth="3" />
  </svg>
);

const Logo21 = () => (
  <svg viewBox="0 0 100 100" className="w-16 h-16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M50 10L20 80h60L50 10z" className="text-white/20" fill="currentColor" />
    <path d="M50 10L20 80M50 10L80 80M20 80h60M50 10v70M20 80L80 35M80 80L20 35M35 45h30" className="text-purple-400" />
    <circle cx="50" cy="45" r="5" className="text-white" fill="currentColor" />
  </svg>
);

const Logo22 = () => (
  <svg viewBox="0 0 100 100" className="w-16 h-16" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 80c10-60 50-60 60 0" className="text-blue-400" />
    <path d="M25 70c10-40 40-40 50 0" className="text-purple-400" />
    <path d="M30 60c10-20 30-20 40 0" className="text-fuchsia-400" />
    <path d="M50 15v65" className="text-white" strokeDasharray="4 4" />
    <circle cx="50" cy="15" r="4" className="text-white" fill="currentColor" />
  </svg>
);

const Logo23 = () => (
  <svg viewBox="0 0 100 100" className="w-16 h-16" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M50 10L30 30v40l20 20 20-20V30L50 10z" className="text-cyan-400/20" fill="currentColor" />
    <path d="M50 10L30 30M50 10L70 30M30 30v40M70 30v40M30 70l20 20M70 70l20-20" className="text-cyan-400" />
    <path d="M40 45h20M35 55h30M45 35h10" className="text-white" />
  </svg>
);

const Logo24 = () => (
  <svg viewBox="0 0 100 100" className="w-16 h-16" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="50" cy="50" r="10" className="text-white" fill="currentColor" />
    <circle cx="50" cy="50" r="20" className="text-purple-500/40" />
    <circle cx="50" cy="50" r="30" className="text-blue-500/30" />
    <circle cx="50" cy="50" r="40" className="text-fuchsia-500/20" />
    <path d="M35 80L50 20l15 60" className="text-white" strokeWidth="6" />
  </svg>
);

const Logo25 = () => (
  <svg viewBox="0 0 100 100" className="w-16 h-16" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M35 85c0-20 30-40 30-60M65 85c0-20-30-40-30-60" className="text-emerald-400" />
    <path d="M35 70h30M35 50h30M35 30h30" className="text-white/30" strokeWidth="2" />
    <circle cx="50" cy="15" r="6" className="text-yellow-400" fill="currentColor" />
  </svg>
);

const Logo26 = () => (
  <svg viewBox="0 0 100 100" className="w-16 h-16" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M50 15L20 85h60L50 15z" className="text-white" />
    <path d="M50 35L35 55l15 20 15-20-15-20z" className="text-yellow-400" fill="currentColor" />
    <path d="M35 55h30" className="text-black/50" strokeWidth="2" />
  </svg>
);

const Logo27 = () => (
  <svg viewBox="0 0 100 100" className="w-16 h-16" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M50 5L10 25v40l40 30 40-30V25L50 5z" className="text-blue-500/10" fill="currentColor" />
    <path d="M50 5L10 25v40l40 30 40-30V25L50 5z" className="text-blue-400" />
    <path d="M35 70L50 25l15 45M40 55h20" className="text-white" strokeWidth="5" />
  </svg>
);

const Logo28 = () => (
  <svg viewBox="0 0 100 100" className="w-16 h-16" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
    <rect x="25" y="20" width="50" height="70" rx="5" className="text-purple-900/40" fill="currentColor" />
    <path d="M35 85L50 25l15 60" className="text-white" />
    <path d="M25 20h50M25 90h50" className="text-purple-400" />
    <circle cx="50" cy="25" r="10" className="text-yellow-400/50" fill="currentColor" />
  </svg>
);

const Logo29 = () => (
  <svg viewBox="0 0 100 100" className="w-16 h-16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="50" cy="50" r="15" className="text-emerald-400/40" fill="currentColor" />
    <circle cx="50" cy="35" r="15" className="text-emerald-400/40" />
    <circle cx="50" cy="65" r="15" className="text-emerald-400/40" />
    <circle cx="37" cy="42" r="15" className="text-emerald-400/40" />
    <circle cx="63" cy="42" r="15" className="text-emerald-400/40" />
    <circle cx="37" cy="58" r="15" className="text-emerald-400/40" />
    <circle cx="63" cy="58" r="15" className="text-emerald-400/40" />
    <path d="M35 80L50 20l15 60" className="text-white" strokeWidth="6" />
  </svg>
);

const Logo30 = () => (
  <svg viewBox="0 0 100 100" className="w-16 h-16" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M30 20l20 20 20-20" className="text-slate-400" />
    <path d="M30 80l20-20 20 20" className="text-slate-400" />
    <path d="M50 10v80" className="text-blue-400" />
    <path d="M35 50h30" className="text-white" />
    <path d="M40 40l10 10 10-10" className="text-white" />
  </svg>
);

const Logo31 = () => (
  <svg viewBox="0 0 100 100" className="w-16 h-16" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M50 85c-20-10-30-30-30-50 0-10 10-20 30-30 20 10 30 20 30 30 0 20-10 40-30 50z" className="text-orange-500/20" fill="currentColor" />
    <path d="M40 80L50 20l10 60" className="text-orange-400" />
    <path d="M45 50c5-10 15-10 20 0" className="text-yellow-400" />
    <path d="M35 50c-5-10-15-10-20 0" className="text-yellow-400" />
  </svg>
);

const Logo32 = () => (
  <svg viewBox="0 0 100 100" className="w-16 h-16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="50" cy="50" rx="45" ry="10" className="text-blue-400" transform="rotate(45 50 50)" />
    <ellipse cx="50" cy="50" rx="45" ry="10" className="text-purple-400" transform="rotate(-45 50 50)" />
    <ellipse cx="50" cy="50" rx="45" ry="10" className="text-fuchsia-400" transform="rotate(90 50 50)" />
    <path d="M40 80L50 20l10 60" className="text-white" strokeWidth="6" />
    <circle cx="50" cy="50" r="4" className="text-white" fill="currentColor" />
  </svg>
);

const Logo33 = () => (
  <svg viewBox="0 0 100 100" className="w-16 h-16" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 90L50 10l40 80" className="text-slate-500" />
    <path d="M30 90L50 50l20 40" className="text-slate-400" />
    <circle cx="50" cy="35" r="15" className="text-yellow-400/30" fill="currentColor" />
    <path d="M40 65h20" className="text-white" strokeWidth="6" />
    <path d="M50 10v25" className="text-yellow-400" />
  </svg>
);

const Logo34 = () => (
  <svg viewBox="0 0 100 100" className="w-16 h-16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 80l40-20 40 20M10 60l40-20 40 20M10 40l40-20 40 20" className="text-blue-500/30" />
    <path d="M50 10v80M10 50h80" className="text-blue-500/20" />
    <path d="M35 85L50 20l15 65" className="text-white" strokeWidth="6" />
    <path d="M42 60h16" className="text-white" strokeWidth="4" />
  </svg>
);

const Logo35 = () => (
  <svg viewBox="0 0 100 100" className="w-16 h-16" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M30 60a10 10 0 1 0 0 20 10 10 0 1 0 0-20zM70 60a10 10 0 1 1 0 20 10 10 0 1 1 0-20z" className="text-purple-400/40" />
    <path d="M30 70c20-20 20-20 40 0s20 20 40 0" className="text-purple-400" />
    <path d="M35 85L50 20l15 65" className="text-white" strokeWidth="6" />
    <path d="M42 60h16" className="text-white" strokeWidth="4" />
  </svg>
);

const logos = [
  { component: Logo1, name: "The Tuning Fork", desc: "Merging acoustic resonance with the energetic aura field." },
  { component: Logo2, name: "Sonic Sun", desc: "Radiant energy represented by soundwaves forming a solar burst." },
  { component: Logo3, name: "Prismatic A", desc: "The letter A acting as a prism, refracting light into higher frequencies." },
  { component: Logo4, name: "Frequency Lotus", desc: "A symbol of spiritual growth built from equalizer bars." },
  { component: Logo5, name: "The Inner Eye", desc: "Perceiving the unseen frequencies of the universe." },
  { component: Logo6, name: "Vesica Piscis Spark", desc: "Sacred geometry representing the intersection of physical and energetic realms." },
  { component: Logo7, name: "Auratune Helix", desc: "An abstract 'A' and 'T' intertwined in a cosmic orbit." },
  { component: Logo8, name: "Orbital Resonance", desc: "A glowing soul core surrounded by multi-dimensional frequency rings." },
  { component: Logo9, name: "Equalizer Mandala", desc: "Finding center and balance through harmonic frequencies." },
  { component: Logo10, name: "The Waveform A", desc: "A bold, modern 'A' constructed with negative-space soundwaves." },
  { component: Logo11, name: "Orbital Fork", desc: "The foundational tuning fork enveloped by fuchsia, blue, and purple orbital rings." },
  { component: Logo12, name: "Waveform Orbit", desc: "The bold Waveform 'A' anchored by dual intersecting cosmic orbits." },
  { component: Logo13, name: "The Resonant A", desc: "An 'A' constructed with a tuning fork peak and a fuchsia waveform crossbar." },
  { component: Logo14, name: "Forked Waveform", desc: "A tuning fork where the prongs themselves ripple as energetic soundwaves." },
  { component: Logo15, name: "Orbital Equalizer A", desc: "Vertical equalizer bars forming an 'A', bound by perpendicular orbital rings." },
  { component: Logo16, name: "Cosmic Fork", desc: "A tuning fork piercing through intersecting fuchsia and blue energetic orbits." },
  { component: Logo17, name: "Waveform Orbit Core", desc: "The Waveform 'A' containing a tuning fork, surrounded by tri-color resonance rings." },
  { component: Logo18, name: "The Tri-Resonance", desc: "Three distinct tuning forks forming an 'A', united by a central orbital ring." },
  { component: Logo19, name: "Sonic Orbit A", desc: "An 'A' where the legs are tuning forks and the crossbar is a fuchsia orbit." },
  { component: Logo20, name: "Auratune Masterpiece", desc: "The ultimate fusion: A bold 'A' with a tuning fork core, fuchsia equalizer base, and tri-color orbits." },
  { component: Logo21, name: "Metatron's A", desc: "An 'A' shape built from the sacred geometric lines of Metatron's Cube." },
  { component: Logo22, name: "Harmonic Wave", desc: "A single continuous wave that forms an 'A', representing fluid energy." },
  { component: Logo23, name: "Crystal Frequency", desc: "An 'A' shaped like a crystal point with internal frequency resonance lines." },
  { component: Logo24, name: "Aura Pulse", desc: "A central 'A' with expanding circular pulse waves of pure energy." },
  { component: Logo25, name: "Sacred Helix", desc: "A double helix forming the legs of the 'A', representing biological resonance." },
  { component: Logo26, name: "Geometric Soul", desc: "A diamond soul core nested within a triangular 'A' structure." },
  { component: Logo27, name: "Frequency Shield", desc: "An 'A' protected by a hexagonal shield of vibrational frequency lines." },
  { component: Logo28, name: "Luminous Portal", desc: "An 'A' acting as a glowing doorway into higher dimensional frequencies." },
  { component: Logo29, name: "Vibrational Seed", desc: "The Seed of Life forming the crossbar of a powerful 'A' architecture." },
  { component: Logo30, name: "Architect's Compass", desc: "A compass and square forming an 'A' with a central frequency wave." },
  { component: Logo31, name: "Ethereal Flame", desc: "An 'A' made of stylized, flowing energy flames of spiritual transformation." },
  { component: Logo32, name: "Quantum Orbit", desc: "Multiple overlapping orbits forming a complex, high-dimensional 'A' shape." },
  { component: Logo33, name: "Zenith Peak", desc: "A mountain-like 'A' with a solar frequency burst at its highest peak." },
  { component: Logo34, name: "Resonance Grid", desc: "An 'A' emerging from a 3D perspective grid of pure vibrational light." },
  { component: Logo35, name: "Infinite Aura", desc: "An infinity symbol integrated into the 'A' structure, representing eternal energy." },
];

export function LogoGallery() {
  return (
    <div className="p-6 md:p-12 max-w-6xl mx-auto relative z-10 pb-32">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-blue-400 to-purple-400 uppercase">
          Aura Architect Brand
        </h1>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          35 distinct visual identities exploring the intersection of energy, frequency, and spiritual alignment.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {logos.map((logo, index) => (
          <Card key={index} className="flex flex-col items-center text-center p-6 hover:scale-[1.02] transition-transform border-white/10 bg-black/40">
            <div className="w-28 h-28 rounded-2xl bg-white/5 flex items-center justify-center mb-6 shadow-inner border border-white/5">
              <logo.component />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">{logo.name}</h3>
            <p className="text-slate-400 text-xs leading-relaxed">{logo.desc}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
