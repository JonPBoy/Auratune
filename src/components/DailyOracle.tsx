import React, { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';
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

const ZODIAC_WISDOM: Record<string, string[]> = {
  Aries: [
    "Your fire is burning bright today. Channel it into a new project.",
    "Leadership comes naturally to you now. Guide others with your vision.",
    "Patience is your greatest ally today. Slow down to see the details."
  ],
  Taurus: [
    "Ground yourself in nature. Your stability is your strength.",
    "Abundance is flowing toward you. Open your heart to receive.",
    "Focus on your physical comfort today. Nurture your senses."
  ],
  Gemini: [
    "Your words have power today. Speak your truth with clarity.",
    "Curiosity will lead you to a hidden treasure. Explore the unknown.",
    "Balance your dual nature. Find the harmony between thought and action."
  ],
  Cancer: [
    "Your intuition is heightened. Trust the whispers of your soul.",
    "Nurture your home and heart. Your emotional well-being is priority.",
    "The moon influences your tides. Flow with the changing energy."
  ],
  Leo: [
    "Your light is meant to be seen. Step into the spotlight with confidence.",
    "Generosity will return to you tenfold. Share your warmth today.",
    "Your creative spark is a gift to the world. Express yourself fully."
  ],
  Virgo: [
    "Order brings peace. Organize your thoughts and your space.",
    "Your attention to detail is a superpower. Use it for the highest good.",
    "Service to others is your path to fulfillment today."
  ],
  Libra: [
    "Seek balance in all things. Harmony is your natural state.",
    "Beauty surrounds you. Take a moment to appreciate the aesthetic.",
    "Partnerships are highlighted. Collaborate for greater impact."
  ],
  Scorpio: [
    "Transformation is underway. Embrace the shedding of the old.",
    "Your depth is your power. Dive deep into your subconscious.",
    "Mystery is calling. Trust the secrets being revealed to you."
  ],
  Sagittarius: [
    "Adventure awaits. Expand your horizons and seek new truths.",
    "Optimism is your compass. Follow the light of your highest ideals.",
    "Freedom is your soul's desire. Break free from limiting beliefs."
  ],
  Capricorn: [
    "Your discipline is paying off. Keep climbing toward your goals.",
    "Structure provides the foundation for your success. Build wisely.",
    "Your wisdom is grounded in experience. Trust your inner authority."
  ],
  Aquarius: [
    "Your unique vision is needed. Think outside the box today.",
    "Community is your strength. Connect with like-minded souls.",
    "Innovation is flowing through you. Manifest the future now."
  ],
  Pisces: [
    "Your dreams are messages from the divine. Pay attention to them.",
    "Compassion is your greatest gift. Heal the world with your love.",
    "The boundaries are thinning. Connect with the spiritual realms."
  ]
};

function getZodiacSign(dateStr: string) {
  const date = new Date(dateStr);
  const month = date.getMonth() + 1;
  const day = date.getDate();

  if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return "Aries";
  if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return "Taurus";
  if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) return "Gemini";
  if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) return "Cancer";
  if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return "Leo";
  if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return "Virgo";
  if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) return "Libra";
  if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) return "Scorpio";
  if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) return "Sagittarius";
  if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) return "Capricorn";
  if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return "Aquarius";
  if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) return "Pisces";
  return null;
}

export function DailyOracle() {
  const [cosmicMessage, setCosmicMessage] = useState('');
  const [zodiacSign, setZodiacSign] = useState<string | null>(null);

  useEffect(() => {
    const birthDate = localStorage.getItem('user_birth_date');
    const today = new Date();
    const localDate = new Date(today.getTime() - (today.getTimezoneOffset() * 60000));
    const dayIndex = Math.floor(localDate.getTime() / (1000 * 60 * 60 * 24));

    if (birthDate) {
      const sign = getZodiacSign(birthDate);
      setZodiacSign(sign);
      if (sign && ZODIAC_WISDOM[sign]) {
        const wisdomList = ZODIAC_WISDOM[sign];
        setCosmicMessage(wisdomList[dayIndex % wisdomList.length]);
      } else {
        setCosmicMessage(COSMIC_PROMPTS[dayIndex % COSMIC_PROMPTS.length]);
      }
    } else {
      setCosmicMessage(COSMIC_PROMPTS[dayIndex % COSMIC_PROMPTS.length]);
    }
  }, []);

  return (
    <div className="w-full max-w-3xl mb-12">
      <Card className="flex flex-col p-8 md:p-10 border-white/10 bg-black/40 relative overflow-hidden shadow-[0_0_50px_rgba(168,85,247,0.1)]">
        <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
          <Sparkles size={140} />
        </div>
        
        <div className="relative z-10 flex flex-col items-center text-center">
          <div className="mb-8">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-purple-500/50" />
              <h3 className="text-xs font-black text-purple-400 uppercase tracking-[0.4em]">
                {zodiacSign ? `${zodiacSign} Wisdom` : "Daily Cosmic Message"}
              </h3>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-purple-500/50" />
            </div>
            
            <p className="text-slate-200 text-2xl md:text-3xl leading-relaxed italic font-medium max-w-2xl mx-auto">
              "{cosmicMessage}"
            </p>
          </div>

          {!zodiacSign && (
            <div className="mt-4 p-4 rounded-xl bg-purple-500/5 border border-purple-500/10 max-w-md">
              <p className="text-[10px] text-purple-400/60 uppercase tracking-widest font-bold">
                Input your birthday in the BioRhythm tab for personalized chart wisdom
              </p>
            </div>
          )}
          
          <div className="mt-8 flex items-center gap-2 text-slate-500">
            <Sparkles size={14} className="text-purple-500/50" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em]">The Universe is Tuning Your Frequency</span>
            <Sparkles size={14} className="text-purple-500/50" />
          </div>
        </div>
      </Card>
    </div>
  );
}
