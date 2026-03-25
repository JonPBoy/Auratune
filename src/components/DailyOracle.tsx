import React, { useState, useEffect } from 'react';
import { Sparkles, Send } from 'lucide-react';
import { Card } from './ui/Card';
import { cn } from '../lib/utils';

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

const ORACLE_ANSWERS = [
  "The stars align in your favor. Proceed with grace.",
  "Patience is required. The universe is still arranging the pieces.",
  "Look inward. The answer you seek is already within you.",
  "A shift in perspective will reveal the hidden path.",
  "Trust the current of your life. Let go of resistance.",
  "Your intuition is speaking clearly. Listen to it.",
  "The energy around this is dense. Cleanse your space and ask again later.",
  "A resounding yes echoes through the cosmos.",
  "Release your attachment to the outcome, and the way will open.",
  "Seek balance first. The answer will follow."
];

export function DailyOracle() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [promptIndex, setPromptIndex] = useState(0);
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [isConsulting, setIsConsulting] = useState(false);

  useEffect(() => {
    // Calculate day index to ensure a new prompt each day that doesn't repeat within 10 days
    const today = new Date();
    // Offset by timezone to ensure it changes at local midnight
    const localDate = new Date(today.getTime() - (today.getTimezoneOffset() * 60000));
    const dayIndex = Math.floor(localDate.getTime() / (1000 * 60 * 60 * 24));
    setPromptIndex(dayIndex % COSMIC_PROMPTS.length);
  }, []);

  const drawCard = () => {
    if (!isFlipped) {
      setIsFlipped(true);
    }
  };

  const askOracle = (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim() || isConsulting) return;
    
    setIsConsulting(true);
    setAnswer('');
    
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * ORACLE_ANSWERS.length);
      setAnswer(ORACLE_ANSWERS[randomIndex]);
      setIsConsulting(false);
    }, 1500);
  };

  return (
    <div className="w-full max-w-3xl mb-12 perspective-1000">
      <div 
        className={cn(
          "relative w-full transition-all duration-700 transform-style-3d",
          isFlipped ? "rotate-y-180" : "cursor-pointer"
        )}
        onClick={!isFlipped ? drawCard : undefined}
        style={{ minHeight: '400px' }}
      >
        {/* Front of Card (Unrevealed) */}
        <Card className="absolute inset-0 backface-hidden flex flex-col items-center justify-center border-purple-500/30 bg-gradient-to-br from-purple-900/40 to-black hover:from-purple-800/50 transition-colors">
          <Sparkles size={48} className="text-purple-400 mb-4 animate-pulse" />
          <h3 className="text-xl font-black text-purple-200 tracking-[0.2em] uppercase text-center px-4">Draw Daily Oracle</h3>
          <p className="text-purple-400/70 text-sm mt-2 text-center px-4">Click to reveal your cosmic message & ask a question</p>
        </Card>

        {/* Back of Card (Revealed) */}
        <Card className="absolute inset-0 backface-hidden rotate-y-180 flex flex-col p-6 md:p-8 border-white/10 bg-black/40 relative overflow-hidden overflow-y-auto custom-scrollbar">
          <div className="absolute top-0 right-0 p-6 opacity-5 pointer-events-none">
            <Sparkles size={120} />
          </div>
          
          <div className="flex-1 flex flex-col relative z-10">
            <div className="mb-8">
              <h3 className="text-xs font-bold text-slate-500 uppercase tracking-[0.3em] mb-4">Today's Cosmic Message</h3>
              <p className="text-slate-200 text-lg md:text-xl leading-relaxed italic font-medium">
                "{COSMIC_PROMPTS[promptIndex]}"
              </p>
            </div>

            <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

            <div className="mt-auto">
              <h3 className="text-xs font-bold text-slate-500 uppercase tracking-[0.3em] mb-4">Seek Cosmic Guidance</h3>
              <form onSubmit={askOracle} className="relative mb-4">
                <input
                  type="text"
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  placeholder="Ask the Oracle a question..."
                  className="w-full bg-black/40 border border-white/10 rounded-xl py-3 pl-4 pr-12 text-white placeholder-slate-600 focus:outline-none focus:border-purple-500 transition-colors"
                  disabled={isConsulting}
                />
                <button 
                  type="submit"
                  disabled={!question.trim() || isConsulting}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-purple-400 hover:text-purple-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <Send size={18} className={cn(isConsulting && "animate-pulse")} />
                </button>
              </form>

              <div className="min-h-[60px] flex items-center justify-center bg-white/5 rounded-xl p-4 border border-white/5">
                {isConsulting ? (
                  <span className="text-purple-400/70 text-sm animate-pulse tracking-widest uppercase">Consulting the cosmos...</span>
                ) : answer ? (
                  <p className="text-purple-200 text-center font-medium animate-in fade-in duration-700">"{answer}"</p>
                ) : (
                  <span className="text-slate-600 text-sm italic">The Oracle awaits your inquiry.</span>
                )}
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
