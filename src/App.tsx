/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { Home, Sun, Radio, Compass, Activity, BookOpen, Moon, Palette, Waves } from 'lucide-react';
import { HomeTab } from './components/tabs/HomeTab';
import { AuraTab } from './components/tabs/AuraTab';
import { FreqTab } from './components/tabs/FreqTab';
import { SoulTab } from './components/tabs/SoulTab';
import { BioTab } from './components/tabs/BioTab';
import { TrackTab } from './components/tabs/TrackTab';
import { CodexTab } from './components/tabs/CodexTab';
import { LogoGallery } from './components/LogoGallery';
import { cn } from './lib/utils';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [isWarping, setIsWarping] = useState(false);
  const [isLightMode, setIsLightMode] = useState(false);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isLightMode) {
      document.body.classList.add('light-energy');
    } else {
      document.body.classList.remove('light-energy');
    }
  }, [isLightMode]);

  const navItems = [
    { id: 'home', icon: Home, label: 'Home', color: 'text-slate-300', activeColor: 'text-white', activeBg: 'bg-white/10', hoverBg: 'hover:bg-white/5' },
    { id: 'aura', icon: Sun, label: 'Aura', color: 'text-purple-500/50', activeColor: 'text-purple-400', activeBg: 'bg-purple-500/10', hoverBg: 'hover:bg-purple-500/5' },
    { id: 'freq', icon: Radio, label: 'Freq', color: 'text-blue-500/50', activeColor: 'text-blue-400', activeBg: 'bg-blue-500/10', hoverBg: 'hover:bg-blue-500/5' },
    { id: 'soul', icon: Compass, label: 'Soul', color: 'text-yellow-500/50', activeColor: 'text-yellow-400', activeBg: 'bg-yellow-500/10', hoverBg: 'hover:bg-yellow-500/5' },
    { id: 'bio', icon: Waves, label: 'Bio', color: 'text-rose-500/50', activeColor: 'text-rose-400', activeBg: 'bg-rose-500/10', hoverBg: 'hover:bg-rose-500/5' },
    { id: 'track', icon: Activity, label: 'Track', color: 'text-emerald-500/50', activeColor: 'text-emerald-400', activeBg: 'bg-emerald-500/10', hoverBg: 'hover:bg-emerald-500/5' },
    { id: 'codex', icon: BookOpen, label: 'Codex', color: 'text-slate-500/50', activeColor: 'text-slate-300', activeBg: 'bg-slate-500/10', hoverBg: 'hover:bg-slate-500/5' },
    { id: 'logos', icon: Palette, label: 'Logos', color: 'text-pink-500/50', activeColor: 'text-pink-400', activeBg: 'bg-pink-500/10', hoverBg: 'hover:bg-pink-500/5' },
  ];

  const mainRef = useRef<HTMLElement>(null);

  const handleTabChange = (id: string) => {
    if (id !== activeTab) {
      setIsWarping(true);
      setActiveTab(id);
      if (mainRef.current) {
        mainRef.current.scrollTo({ top: 0, behavior: 'smooth' });
      }
      setTimeout(() => setIsWarping(false), 800);
    }
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (bgRef.current) {
        const x = (e.clientX / window.innerWidth) * 100;
        const y = (e.clientY / window.innerHeight) * 100;
        bgRef.current.style.setProperty('--mouse-x', `${x}%`);
        bgRef.current.style.setProperty('--mouse-y', `${y}%`);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    if (bgRef.current) {
      let c1, c2, c3;
      switch (activeTab) {
        case 'aura':
          c1 = 'rgba(168, 85, 247, 0.25)';
          c2 = 'rgba(139, 92, 246, 0.2)';
          c3 = 'rgba(192, 132, 252, 0.15)';
          break;
        case 'freq':
          c1 = 'rgba(59, 130, 246, 0.25)';
          c2 = 'rgba(37, 99, 235, 0.2)';
          c3 = 'rgba(96, 165, 250, 0.15)';
          break;
        case 'soul':
          c1 = 'rgba(234, 179, 8, 0.2)';
          c2 = 'rgba(245, 158, 11, 0.15)';
          c3 = 'rgba(251, 191, 36, 0.1)';
          break;
        case 'bio':
          c1 = 'rgba(244, 63, 94, 0.2)';
          c2 = 'rgba(225, 29, 72, 0.15)';
          c3 = 'rgba(190, 18, 60, 0.1)';
          break;
        case 'track':
          c1 = 'rgba(16, 185, 129, 0.2)';
          c2 = 'rgba(5, 150, 105, 0.15)';
          c3 = 'rgba(52, 211, 153, 0.1)';
          break;
        case 'codex':
          c1 = 'rgba(100, 116, 139, 0.2)';
          c2 = 'rgba(71, 85, 105, 0.15)';
          c3 = 'rgba(148, 163, 184, 0.1)';
          break;
        default:
          c1 = 'rgba(138, 156, 241, 0.2)';
          c2 = 'rgba(236, 72, 153, 0.2)';
          c3 = 'rgba(59, 130, 246, 0.1)';
      }
      bgRef.current.style.setProperty('--nebula-color-1', c1);
      bgRef.current.style.setProperty('--nebula-color-2', c2);
      bgRef.current.style.setProperty('--nebula-color-3', c3);
    }
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-cosmic-bg text-white font-sans selection:bg-purple-500/30 relative overflow-hidden">
      {/* Cosmic background effects */}
      <div className="cosmic-bg" ref={bgRef}>
        <div className="nebula" />
        <div className="stars-layer-1" />
        <div className="stars-layer-2" />
        <div className="stars-layer-3" />
        <div className="cosmic-dust" />
        <div className={cn("tab-warp", isWarping && "active")} />
        <div className="shooting-star" style={{ top: '10%', left: '20%', animationDelay: '0s' }} />
        <div className="shooting-star" style={{ top: '30%', left: '60%', animationDelay: '7s' }} />
        <div className="shooting-star" style={{ top: '50%', left: '10%', animationDelay: '12s' }} />
      </div>

      <main ref={mainRef} className="relative z-10 h-screen overflow-y-auto pb-24 custom-scrollbar">
        {/* Theme Toggle */}
        <div className="absolute top-4 right-4 z-50">
          <button
            onClick={() => setIsLightMode(!isLightMode)}
            className="p-3 rounded-full bg-black/40 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition-all backdrop-blur-sm shadow-xl"
            title={isLightMode ? "Switch to Dark Energy" : "Switch to Light Energy"}
          >
            {isLightMode ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        </div>

        {activeTab === 'home' && <HomeTab onNavigate={handleTabChange} />}
        {activeTab === 'aura' && <AuraTab />}
        {activeTab === 'freq' && <FreqTab />}
        {activeTab === 'soul' && <SoulTab />}
        {activeTab === 'bio' && <BioTab />}
        {activeTab === 'track' && <TrackTab />}
        {activeTab === 'codex' && <CodexTab />}
        {activeTab === 'logos' && <LogoGallery />}
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 w-full bg-[#0b0c10]/80 backdrop-blur-xl border-t border-white/5 z-50 pb-safe">
        <div className="flex justify-around items-center p-2 max-w-lg mx-auto">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleTabChange(item.id)}
                className={cn(
                  "flex flex-col items-center justify-center w-16 h-14 rounded-xl transition-all duration-300",
                  isActive ? cn(item.activeBg, "scale-110") : item.hoverBg
                )}
              >
                <item.icon 
                  size={isActive ? 24 : 20} 
                  className={cn(
                    "mb-1 transition-colors duration-300",
                    isActive ? item.activeColor : item.color
                  )} 
                />
                <span className={cn(
                  "text-[10px] font-medium transition-colors duration-300",
                  isActive ? item.activeColor : "text-slate-500"
                )}>
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
