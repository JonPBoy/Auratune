import React, { useState } from 'react';
import { Radio, BookOpen, Activity, CheckCircle2, Zap, Waves, Volume2, Music, Mic2, Heart, PenTool, Trees, Apple, Smartphone, Smile } from 'lucide-react';
import { PageLayout } from '../PageLayout';
import { Card } from '../ui/Card';
import { Rating } from '../ui/Rating';
import { cn } from '../../lib/utils';
import { PracticeCard } from '../PracticeCard';
import { InteractiveBreathwork } from '../InteractiveBreathwork';
import { FrequencyGenerator } from '../FrequencyGenerator';

export function FreqTab() {
  const [activeTab, setActiveTab] = useState('learn');
  const [freqLevel, setFreqLevel] = useState(3);
  const [emotion, setEmotion] = useState('');
  const [triggers, setTriggers] = useState('');
  const [gratitude, setGratitude] = useState('');

  const [isSaved, setIsSaved] = useState(false);

  const handleSave = () => {
    const log = { freqLevel, emotion, triggers, date: new Date().toISOString() };
    const existingLogs = JSON.parse(localStorage.getItem('freq_logs') || '[]');
    localStorage.setItem('freq_logs', JSON.stringify([log, ...existingLogs]));
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2000);
  };

  const tabs = [
    { id: 'learn', label: 'Learn', icon: BookOpen },
    { id: 'practice', label: 'Practice', icon: Activity },
    { id: 'log', label: 'Log', icon: CheckCircle2 },
  ];

  return (
    <PageLayout
      title="Frequency Tuner"
      subtitle="Master the Law of Resonance"
      icon={Radio}
      colorClass="text-blue-500"
      tabs={tabs}
      activeSubTab={activeTab}
      setActiveSubTab={setActiveTab}
    >
      {activeTab === 'learn' && (
        <>
          <Card className="border-blue-500/30 bg-gradient-to-br from-blue-900/20 to-cosmic-card relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
              <Radio size={120} />
            </div>
            <h3 className="text-xl font-black mb-4 text-blue-300 flex items-center gap-2 tracking-wide uppercase">
              <Zap size={20} className="text-blue-400" />
              The Law of Resonance
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed relative z-10">
              Everything in the universe is in a state of vibration. The Law of Resonance states that like attracts like. Your personal frequency determines the experiences, people, and opportunities you draw into your life. To change your reality, you must first change your vibration.
            </p>
          </Card>
          
          <Card>
            <h3 className="text-lg font-bold mb-2 text-white flex items-center gap-2">
              <Waves size={18} className="text-blue-500" />
              The Scale of Consciousness
            </h3>
            <p className="text-xs text-slate-400 mb-6 leading-relaxed">A logarithmic scale of human consciousness. Higher frequencies expand your reality, while lower frequencies contract it.</p>
            
            <div className="space-y-2">
              {[
                { level: '700+', label: 'Enlightenment', desc: 'Pure Consciousness', color: 'bg-white text-black' },
                { level: '600', label: 'Peace', desc: 'Bliss, Illumination', color: 'bg-purple-300 text-purple-900' },
                { level: '540', label: 'Joy', desc: 'Serenity, Transfiguration', color: 'bg-blue-300 text-blue-900' },
                { level: '500', label: 'Love', desc: 'Reverence, Revelation', color: 'bg-emerald-300 text-emerald-900' },
                { level: '400', label: 'Reason', desc: 'Understanding, Abstraction', color: 'bg-yellow-300 text-yellow-900' },
                { level: '310', label: 'Willingness', desc: 'Optimism, Intention', color: 'bg-orange-300 text-orange-900' },
                { level: '200', label: 'Courage', desc: 'Empowerment, Affirmation', color: 'bg-red-300 text-red-900' },
                { level: '150', label: 'Anger', desc: 'Hate, Aggression', color: 'bg-red-600 text-white' },
                { level: '100', label: 'Fear', desc: 'Anxiety, Withdrawal', color: 'bg-slate-600 text-white' },
                { level: '20', label: 'Shame', desc: 'Humiliation, Elimination', color: 'bg-slate-800 text-white' },
              ].map(item => (
                <div key={item.level} className="flex items-center gap-4 p-3 rounded-xl bg-black/40 border border-white/5">
                  <div className={cn("w-14 h-8 rounded-md flex items-center justify-center text-[11px] font-black tracking-wider", item.color)}>
                    {item.level}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-200">{item.label}</div>
                    <div className="text-[10px] text-slate-500 uppercase tracking-wider mt-0.5">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </>
      )}

      {activeTab === 'practice' && (
        <>
          <InteractiveBreathwork />

          <Card className="border-blue-500/30 bg-gradient-to-br from-blue-900/20 to-black relative overflow-hidden">
            <h3 className="text-xl font-black mb-4 text-blue-300 flex items-center gap-2 tracking-wide uppercase">
              <Volume2 size={20} className="text-blue-400" />
              Custom Frequency Generator
            </h3>
            <p className="text-slate-400 text-sm mb-6">
              Dial in any specific frequency to meditate with. Pure sine waves are generated directly in your browser.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FrequencyGenerator frequency={396} colorClass="text-red-400" />
              <FrequencyGenerator frequency={417} colorClass="text-orange-400" />
              <FrequencyGenerator frequency={432} colorClass="text-yellow-400" />
              <FrequencyGenerator frequency={528} colorClass="text-emerald-400" />
              <FrequencyGenerator frequency={639} colorClass="text-green-400" />
              <FrequencyGenerator frequency={741} colorClass="text-blue-400" />
              <FrequencyGenerator frequency={852} colorClass="text-indigo-400" />
              <FrequencyGenerator frequency={963} colorClass="text-purple-400" />
            </div>
          </Card>

          <PracticeCard 
            title="DNA Repair Frequency"
            duration={15}
            description="The 528Hz Solfeggio frequency is known as the 'Miracle' tone, used for DNA repair and transformation. It resonates with the core of your biological structure, promoting healing and regeneration at a cellular level."
            icon={<Music size={20} className="text-emerald-400" />}
            frequency={528}
            colorClass="text-emerald-400"
          />

          <PracticeCard 
            title="Cosmic Harmony Frequency"
            duration={15}
            description="The 432Hz frequency is mathematically consistent with the universe, promoting deep relaxation and clarity. This 'Natural' frequency aligns you with the heartbeat of the cosmos, reducing anxiety and enhancing focus."
            icon={<Waves size={20} className="text-blue-400" />}
            frequency={432}
            colorClass="text-blue-400"
          />
          
          <PracticeCard 
            title="Chanting & Mantras"
            duration={10}
            description="Use the power of your own voice to create resonance. The sound 'OM' vibrates at 432Hz, while specific mantras can target different energy centers. Your voice is your most powerful frequency generator."
            icon={<Mic2 size={20} className="text-indigo-400" />}
            frequency={432}
            colorClass="text-indigo-400"
          />

          <PracticeCard 
            title="Heart Coherence"
            duration={5}
            description="Breathe into your heart while feeling appreciation. This aligns your heart and brain waves, creating a state of physiological coherence that radiates a powerful, stable electromagnetic field."
            icon={<Heart size={20} className="text-red-400" />}
            colorClass="text-red-400"
          />

          <PracticeCard 
            title="Gratitude Journaling"
            duration={10}
            description="List 10 things you are grateful for. Gratitude is the ultimate state of receivership, instantly shifting your vibration from lack to abundance and opening the portals for manifestation."
            icon={<PenTool size={20} className="text-yellow-400" />}
            colorClass="text-yellow-400"
          />

          <PracticeCard 
            title="Nature Immersion"
            duration={20}
            description="Spend time in nature to align with the Earth's natural frequency (Schumann Resonance at 7.83Hz). This practice grounds your field and discharges the chaotic frequencies of modern technology."
            icon={<Trees size={20} className="text-emerald-500" />}
            colorClass="text-emerald-500"
          />

          <PracticeCard 
            title="High-Vibe Diet"
            duration={1}
            description="Consume living, organic foods that hold high biophoton energy and light information. Your body is a biological computer; feed it high-quality data to maintain a high-frequency operating system."
            icon={<Apple size={20} className="text-red-500" />}
            colorClass="text-red-500"
          />

          <PracticeCard 
            title="Digital Detox"
            duration={60}
            description="Disconnect from EMFs and social media to allow your field to return to its natural state. Constant digital stimulation creates 'noise' in your aura that masks your true soul frequency."
            icon={<Smartphone size={20} className="text-slate-400" />}
            colorClass="text-slate-400"
          />

          <PracticeCard 
            title="Laughter Therapy"
            duration={5}
            description="Laughter instantly raises your frequency and releases endorphins and oxytocin. It is one of the fastest ways to break through dense emotional states and return to a state of joy."
            icon={<Smile size={20} className="text-yellow-500" />}
            colorClass="text-yellow-500"
          />

          <PracticeCard 
            title="Pineal Gland Activation"
            duration={10}
            description="Focus your attention on the center of your brain while chanting 'M' or 'N'. This stimulates the pineal gland, enhancing your connection to higher frequencies and intuitive insights."
            icon={<Zap size={20} className="text-purple-400" />}
            colorClass="text-purple-400"
          />

          <PracticeCard 
            title="Binaural Beats"
            duration={20}
            description="Listen to slightly different frequencies in each ear to induce specific brainwave states (Theta for meditation, Gamma for high-level processing). This 'trains' your brain to resonate at higher levels."
            icon={<Radio size={20} className="text-blue-500" />}
            colorClass="text-blue-500"
          />

          <PracticeCard 
            title="Sovereign Declaration"
            duration={2}
            description="Speak your truth with conviction. 'I am the master of my frequency. I choose joy. I choose peace. I choose love.' Your words are commands that the universe must follow."
            icon={<Volume2 size={20} className="text-white" />}
            colorClass="text-white"
          />
        </>
      )}

      {activeTab === 'log' && (
        <>
          <Card className="space-y-8">
            <div className="space-y-4">
              <h3 className="font-bold text-white text-sm uppercase tracking-wider">Current Frequency</h3>
              <div className="grid grid-cols-5 gap-2">
                {[1, 2, 3, 4, 5].map((num) => (
                  <button
                    key={num}
                    onClick={() => setFreqLevel(num)}
                    className={cn(
                      "py-3 rounded-lg border transition-all font-bold",
                      freqLevel === num 
                        ? "bg-blue-500 border-blue-400 text-white shadow-[0_0_15px_rgba(59,130,246,0.4)]" 
                        : "bg-white/5 border-white/10 text-slate-400 hover:bg-white/10"
                    )}
                  >
                    {num}
                  </button>
                ))}
              </div>
              <div className="flex justify-between text-[10px] uppercase tracking-widest text-slate-500 font-bold px-1">
                <span>Dense</span>
                <span>Expanded</span>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-bold text-white text-sm uppercase tracking-wider">Resonance Level</h3>
              <div className="grid grid-cols-5 gap-2">
                {[1, 2, 3, 4, 5].map((num) => (
                  <button
                    key={num}
                    className="py-3 rounded-lg border bg-white/5 border-white/10 text-slate-400 hover:bg-white/10 transition-all font-bold"
                  >
                    {num}
                  </button>
                ))}
              </div>
              <div className="flex justify-between text-[10px] uppercase tracking-widest text-slate-500 font-bold px-1">
                <span>Low</span>
                <span>High</span>
              </div>
            </div>
          </Card>
          
          <Card>
            <h3 className="font-bold mb-4 text-white text-sm uppercase tracking-wider">Dominant Emotion</h3>
            <textarea 
              value={emotion}
              onChange={e => setEmotion(e.target.value)}
              placeholder="What is your primary emotional state?"
              className="w-full bg-black/40 border border-white/10 rounded-xl p-4 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 min-h-[100px] resize-none text-sm shadow-inner"
            />
          </Card>
          
          <Card>
            <h3 className="font-bold mb-4 text-white text-sm uppercase tracking-wider">Notes</h3>
            <textarea 
              value={triggers}
              onChange={e => setTriggers(e.target.value)}
              placeholder="Any insights or observations about your frequency today?"
              className="w-full bg-black/40 border border-white/10 rounded-xl p-4 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 min-h-[100px] resize-none text-sm shadow-inner"
            />
          </Card>
          
          <button 
            onClick={handleSave}
            className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-black text-lg hover:from-blue-500 hover:to-cyan-500 transition-all shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] uppercase tracking-widest lg:col-span-2 xl:col-span-3"
          >
            {isSaved ? 'Frequency Locked!' : 'Lock Frequency'}
          </button>
        </>
      )}
    </PageLayout>
  );
}
