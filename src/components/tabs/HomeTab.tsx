import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, Variants } from 'motion/react';
import { Sparkles, ArrowRight, Zap, Waves, Infinity as InfinityIcon, RefreshCw } from 'lucide-react';
import { Card } from '../ui/Card';
import { DailyOracle } from '../DailyOracle';
import { Logo } from '../Logo';
import { cn } from '../../lib/utils';

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

const INTENTION_IDEAS = [
  "Remove all stress and tension",
  "Draw closer to the Divine",
  "Release all fears and anxieties",
  "Embrace unconditional love and joy",
  "Manifest abundance and prosperity",
  "Heal my mind, body, and spirit",
  "Cultivate deep inner peace",
  "Awaken my highest potential",
  "Radiate positive energy to others",
  "Align with my soul's true purpose"
];

const FloatingParticles = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-purple-400/20 rounded-full"
          initial={{ 
            x: Math.random() * 100 + "%", 
            y: Math.random() * 100 + "%",
            opacity: 0 
          }}
          animate={{ 
            y: [null, "-20%"],
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0]
          }}
          transition={{ 
            duration: 5 + Math.random() * 5, 
            repeat: Infinity, 
            ease: "linear",
            delay: Math.random() * 5
          }}
        />
      ))}
    </div>
  );
};

const CelebrationPop = () => {
  return (
    <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-20">
      {[...Array(20)].map((_, i) => {
        const angle = (i / 20) * Math.PI * 2;
        const distance = 40 + Math.random() * 40;
        return (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{
              backgroundColor: ['#fde047', '#a855f7', '#3b82f6', '#ec4899'][Math.floor(Math.random() * 4)]
            }}
            initial={{ opacity: 1, scale: 1, x: 0, y: 0 }}
            animate={{ 
              opacity: 0, 
              scale: 0, 
              x: Math.cos(angle) * distance, 
              y: Math.sin(angle) * distance 
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
        );
      })}
    </div>
  );
};

const SmokeAndGoldDust = () => {
  return (
    <motion.div
      className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center overflow-visible"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0 }}
      exit={{ opacity: 1 }}
    >
      {/* Smoke */}
      <motion.div 
        className="absolute w-[150%] h-[200%] bg-gradient-to-t from-transparent via-slate-400/20 to-transparent blur-2xl rounded-[100%]"
        initial={{ y: 20, scale: 0.8 }}
        exit={{ y: -60, scale: 1.5, opacity: [0, 1, 0] }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />
      {/* Gold Dust */}
      {[...Array(25)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 bg-yellow-300 rounded-full shadow-[0_0_8px_#fde047]"
          style={{
            left: `${10 + Math.random() * 80}%`,
            top: `${10 + Math.random() * 80}%`,
          }}
          initial={{ opacity: 0, y: 0, scale: 0 }}
          exit={{ 
            opacity: [0, 1, 0], 
            y: -40 - Math.random() * 60,
            x: (Math.random() - 0.5) * 60,
            scale: [0, 1.5, 0]
          }}
          transition={{ duration: 1 + Math.random() * 0.5, ease: "easeOut" }}
        />
      ))}
    </motion.div>
  );
};

function IntentionCarousel({ onSelect }: { onSelect: (idea: string) => void }) {
  const [index, setIndex] = useState(0);
  const [poppingIndex, setPoppingIndex] = useState<number | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 3) % INTENTION_IDEAS.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [isHovered]);

  const handleSelect = (idea: string, idx: number) => {
    setPoppingIndex(idx);
    onSelect(idea);
    setTimeout(() => setPoppingIndex(null), 1000);
  };

  const currentIdeas = [
    INTENTION_IDEAS[index],
    INTENTION_IDEAS[(index + 1) % INTENTION_IDEAS.length],
    INTENTION_IDEAS[(index + 2) % INTENTION_IDEAS.length]
  ];

  return (
    <div 
      className="w-full relative h-56 mb-8 flex items-center justify-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence>
        <motion.div key={index} className="absolute flex flex-col items-center justify-center w-full max-w-md z-10 h-full">
          <motion.div
            initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -30, filter: 'blur(12px)' }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="flex flex-col gap-4 w-full items-center relative z-10"
          >
            {currentIdeas.map((idea, i) => {
              const actualIdx = index + i;
              const isPopping = poppingIndex === actualIdx;
              return (
                <div key={actualIdx} className="relative w-full flex justify-center">
                  <motion.button
                    onClick={() => handleSelect(idea, actualIdx)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={cn(
                      "px-6 py-3 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-slate-300 hover:bg-purple-500/20 hover:text-purple-200 hover:border-purple-500/50 transition-colors cursor-pointer w-full max-w-[320px] truncate shadow-lg relative z-10",
                      isPopping ? "ring-2 ring-yellow-400 bg-yellow-500/20 text-yellow-200 border-yellow-400" : ""
                    )}
                  >
                    {idea}
                  </motion.button>
                  {isPopping && <CelebrationPop />}
                </div>
              );
            })}
          </motion.div>
          <SmokeAndGoldDust />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export function HomeTab({ onNavigate }: { onNavigate: (tab: string) => void }) {
  const [step, setStep] = useState(0);
  const [intention, setIntention] = useState('');

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: 'blur(0px)',
      transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } 
    },
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[85vh] p-6 md:p-12 max-w-6xl mx-auto text-center relative z-10">
      <FloatingParticles />
      <AnimatePresence mode="wait">
        {step === 0 && (
          <motion.div
            key="step0"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, scale: 0.95, filter: 'blur(10px)', transition: { duration: 0.5 } }}
            className="w-full flex flex-col items-center max-w-2xl relative"
          >
            <motion.div variants={itemVariants} className="relative mb-12 w-full flex justify-center">
              <div className="w-64 h-64 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 blur-[100px] opacity-30 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse" />
              <Logo className="w-64 md:w-96 h-auto relative z-10 hover:scale-105 transition-transform duration-700" />
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <span className="text-[10px] font-black tracking-[0.5em] uppercase text-purple-500/60 mb-4 block">Initiation Sequence</span>
              <h1 className="text-[25px] md:text-[34px] font-black tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/40 leading-tight">
                Welcome, Seeker
              </h1>
            </motion.div>

            <motion.p variants={itemVariants} className="text-slate-400 mb-10 text-base md:text-lg font-medium leading-relaxed max-w-lg">
              You have entered the tuning of your own consciousness. <br className="hidden md:block" /> Your energetic journey begins here.
            </motion.p>

            <motion.div variants={itemVariants} className="w-full max-w-md space-y-6">
              <div className="relative">
                <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-1 h-12 bg-gradient-to-b from-transparent via-purple-500/50 to-transparent rounded-full" />
                <IntentionCarousel onSelect={setIntention} />
              </div>
              
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl blur opacity-10 group-focus-within:opacity-30 transition duration-500" />
                <input
                  type="text"
                  value={intention}
                  onChange={(e) => setIntention(e.target.value)}
                  placeholder="What is your daily intention?"
                  className="relative w-full bg-black/40 border border-white/5 rounded-2xl px-6 py-5 text-white placeholder-slate-600 focus:outline-none focus:border-purple-500/30 text-lg transition-all shadow-2xl text-center"
                />
              </div>
              
              <button 
                onClick={() => setStep(2)}
                disabled={!intention.trim()}
                className="w-full py-5 rounded-2xl bg-white text-black font-black text-xl flex items-center justify-center gap-3 hover:bg-slate-200 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_30px_rgba(255,255,255,0.1)] disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100 group overflow-hidden relative"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Set Intention
                  <ArrowRight size={24} strokeWidth={3} className="group-hover:translate-x-1 transition-transform" />
                </span>
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-purple-100 to-blue-100 opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={false}
                />
              </button>
            </motion.div>
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
            <Logo className="w-full max-w-[600px] mb-12" />

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
                  <InfinityIcon size={32} />
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
