import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, ArrowRight, Zap, Waves, Infinity, RefreshCw } from 'lucide-react';
import { Card } from '../ui/Card';
import { DailyOracle } from '../DailyOracle';

const COSMIC_PROMPTS = [
  "Your aura is a reflection of your inner peace. How can you nurture that peace today?",
  "The frequency of gratitude is the highest vibration. What are three things you are grateful for right now?",
  "Your soul's journey is unique. Trust the timing of your evolution.",
  "Energy flows where intention goes. Focus your energy on your highest aspirations.",
  "You are a co-creator of your reality. What masterpiece will you begin today?",
  "The universe speaks in frequencies. Listen closely to the subtle shifts in your energy.",
  "Your presence is a gift to the cosmos. Radiate your light without hesitation.",
  "Every breath is an opportunity to recalibrate your alignment.",
  "The Akashic Records hold the wisdom of your past. Use it to build a brighter future.",
  "You are a sovereign being of light. Reclaim your power and stand in your truth."
];

export function HomeTab({ onNavigate }: { onNavigate: (tab: string) => void }) {
  const [step, setStep] = useState(0);
  const [intention, setIntention] = useState('');

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] p-6 md:p-12 max-w-6xl mx-auto text-center relative z-10">
      <AnimatePresence mode="wait">
        {step === 0 && (
          <motion.div
            key="step0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="w-full flex flex-col items-center max-w-2xl"
          >
            <div className="relative mb-12">
              <div className="w-40 h-40 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 blur-3xl opacity-60 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse" />
              <div className="w-28 h-28 rounded-full bg-black border border-white/10 flex items-center justify-center relative z-10 shadow-[0_0_50px_rgba(168,85,247,0.4)]">
                <Sparkles size={48} className="text-purple-400" />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400">
              Welcome, Seeker
            </h1>
            <p className="text-slate-400 mb-12 text-lg md:text-xl font-medium leading-relaxed">
              You have entered the tuning of your own consciousness. Your energetic journey begins here.
            </p>
            
            <button 
              onClick={() => setStep(1)}
              className="w-full max-w-sm py-5 rounded-2xl bg-white text-black font-black text-xl flex items-center justify-center gap-3 hover:bg-slate-200 transition-all hover:scale-[1.05] shadow-[0_0_30px_rgba(255,255,255,0.3)]"
            >
              Initiate Sequence
              <ArrowRight size={24} strokeWidth={3} />
            </button>
          </motion.div>
        )}

        {step === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="w-full flex flex-col items-center max-w-2xl"
          >
            <div className="w-20 h-20 rounded-full bg-purple-500/20 flex items-center justify-center mb-8 border border-purple-500/30">
              <Sparkles size={32} className="text-purple-400" />
            </div>
            <h2 className="text-4xl font-bold mb-4 text-white">Set Your Intention</h2>
            <p className="text-slate-400 mb-10 text-lg leading-relaxed">
              Energy flows where intention goes. What frequency do you wish to anchor into your reality today?
            </p>
            
            <div className="w-full relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
              <textarea
                value={intention}
                onChange={(e) => setIntention(e.target.value)}
                placeholder="I command my energy to..."
                className="relative w-full bg-black/80 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-white placeholder-slate-600 focus:outline-none focus:border-purple-500 min-h-[180px] mb-10 resize-none text-xl shadow-inner"
              />
            </div>
            
            <button 
              onClick={() => setStep(2)}
              disabled={!intention.trim()}
              className="w-full max-w-sm py-5 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold text-xl flex items-center justify-center gap-2 hover:from-purple-500 hover:to-blue-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(147,51,234,0.4)]"
            >
              Anchor Intention
            </button>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="w-full flex flex-col items-center"
          >
            <h2 className="text-sm font-bold tracking-[0.4em] uppercase text-slate-500 mb-4">Welcome to</h2>
            <h1 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-yellow-400 mb-12 text-center leading-tight drop-shadow-[0_0_20px_rgba(255,255,255,0.15)]">
              AURATUNE
            </h1>

            <DailyOracle />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
              <Card hoverable onClick={() => onNavigate('aura')} className="flex flex-col items-center text-center gap-5 p-8 border-purple-500/30 bg-gradient-to-b from-purple-900/20 to-transparent group">
                <div className="w-20 h-20 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 border border-purple-500/50 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_20px_rgba(168,85,247,0.3)]">
                  <Zap size={32} />
                </div>
                <div className="flex-1">
                  <h3 className="font-black text-2xl text-purple-100 tracking-wide mb-2">Aura</h3>
                  <p className="text-xs text-purple-300/70 font-medium uppercase tracking-widest">Your Energetic Shield</p>
                </div>
                <ArrowRight size={24} className="text-purple-500/50 group-hover:text-purple-400 group-hover:translate-x-1 transition-all" />
              </Card>
              
              <Card hoverable onClick={() => onNavigate('freq')} className="flex flex-col items-center text-center gap-5 p-8 border-blue-500/30 bg-gradient-to-b from-blue-900/20 to-transparent group">
                <div className="w-20 h-20 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 border border-blue-500/50 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                  <Waves size={32} />
                </div>
                <div className="flex-1">
                  <h3 className="font-black text-2xl text-blue-100 tracking-wide mb-2">Frequency</h3>
                  <p className="text-xs text-blue-300/70 font-medium uppercase tracking-widest">Your Emotional Vibration</p>
                </div>
                <ArrowRight size={24} className="text-blue-500/50 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
              </Card>
              
              <Card hoverable onClick={() => onNavigate('soul')} className="flex flex-col items-center text-center gap-5 p-8 border-yellow-500/30 bg-gradient-to-b from-yellow-900/20 to-transparent group">
                <div className="w-20 h-20 rounded-full bg-yellow-500/20 flex items-center justify-center text-yellow-400 border border-yellow-500/50 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_20px_rgba(234,179,8,0.3)]">
                  <Infinity size={32} />
                </div>
                <div className="flex-1">
                  <h3 className="font-black text-2xl text-yellow-100 tracking-wide mb-2">Soul</h3>
                  <p className="text-xs text-yellow-300/70 font-medium uppercase tracking-widest">Your Eternal Essence</p>
                </div>
                <ArrowRight size={24} className="text-yellow-500/50 group-hover:text-yellow-400 group-hover:translate-x-1 transition-all" />
              </Card>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
