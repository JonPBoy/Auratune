import React, { useState } from 'react';
import { Radio, BookOpen, Activity, CheckCircle2, Zap, Waves, Volume2, Music, Mic2, Heart, PenTool, Trees, Apple, Smartphone, Smile, Wind } from 'lucide-react';
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

  const solfeggioFrequencies = [
    { freq: '174 Hz', label: 'Foundation', desc: 'Relieves pain and stress, providing a sense of security.', color: 'text-slate-400' },
    { freq: '285 Hz', label: 'Quantum Cognition', desc: 'Heals tissue and organs, restructuring the energetic field.', color: 'text-blue-400' },
    { freq: '396 Hz', label: 'Liberation', desc: 'Liberates guilt and fear, turning grief into joy.', color: 'text-red-400' },
    { freq: '417 Hz', label: 'Facilitating Change', desc: 'Clears traumatic experiences and facilitates change.', color: 'text-orange-400' },
    { freq: '528 Hz', label: 'Transformation', desc: 'DNA repair, miracles, and unconditional love.', color: 'text-emerald-400' },
    { freq: '639 Hz', label: 'Connecting', desc: 'Enhances relationships and communication.', color: 'text-green-400' },
    { freq: '741 Hz', label: 'Awakening Intuition', desc: 'Cleanses cells from toxins and electromagnetic radiation.', color: 'text-cyan-400' },
    { freq: '852 Hz', label: 'Spiritual Order', desc: 'Awakens intuition and returns to spiritual order.', color: 'text-indigo-400' },
    { freq: '963 Hz', label: 'Divine Consciousness', desc: 'Connects to the light and the spirit.', color: 'text-purple-400' },
  ];

  const brainwaves = [
    { type: 'Delta', range: '0.5 - 4 Hz', state: 'Deep Sleep', desc: 'Healing, regeneration, and unconscious mind access.' },
    { type: 'Theta', range: '4 - 8 Hz', state: 'Meditation', desc: 'Creativity, intuition, and memory processing.' },
    { type: 'Alpha', range: '8 - 13 Hz', state: 'Relaxation', desc: 'Calmness, focus, and bridge to the subconscious.' },
    { type: 'Beta', range: '13 - 32 Hz', state: 'Active Mind', desc: 'Alertness, logical thinking, and problem solving.' },
    { type: 'Gamma', range: '32 - 100 Hz', state: 'Peak State', desc: 'Higher cognitive function and information processing.' },
  ];

  const consciousnessLevels = [
    { 
      level: 700, 
      label: 'Enlightenment', 
      desc: 'Pure Consciousness', 
      emotion: 'Ineffable', 
      process: 'Pure Awareness', 
      viewOfLife: 'Self', 
      color: 'bg-white', 
      text: 'text-black', 
      glow: 'rgba(255,255,255,0.8)', 
      border: 'border-white', 
      speed: 0.4 
    },
    { 
      level: 600, 
      label: 'Peace', 
      desc: 'Bliss, Illumination', 
      emotion: 'Bliss', 
      process: 'Illumination', 
      viewOfLife: 'Perfect', 
      color: 'bg-purple-300', 
      text: 'text-purple-950', 
      glow: 'rgba(216,180,254,0.6)', 
      border: 'border-purple-300', 
      speed: 0.6 
    },
    { 
      level: 540, 
      label: 'Joy', 
      desc: 'Serenity, Transfiguration', 
      emotion: 'Serenity', 
      process: 'Transfiguration', 
      viewOfLife: 'Complete', 
      color: 'bg-blue-300', 
      text: 'text-blue-950', 
      glow: 'rgba(147,197,253,0.6)', 
      border: 'border-blue-300', 
      speed: 0.8 
    },
    { 
      level: 500, 
      label: 'Love', 
      desc: 'Reverence, Revelation', 
      emotion: 'Reverence', 
      process: 'Revelation', 
      viewOfLife: 'Benign', 
      color: 'bg-emerald-300', 
      text: 'text-emerald-950', 
      glow: 'rgba(110,231,183,0.6)', 
      border: 'border-emerald-300', 
      speed: 1.0 
    },
    { 
      level: 400, 
      label: 'Reason', 
      desc: 'Understanding, Abstraction', 
      emotion: 'Understanding', 
      process: 'Abstraction', 
      viewOfLife: 'Meaningful', 
      color: 'bg-yellow-300', 
      text: 'text-yellow-950', 
      glow: 'rgba(253,224,71,0.6)', 
      border: 'border-yellow-300', 
      speed: 1.5 
    },
    { 
      level: 310, 
      label: 'Willingness', 
      desc: 'Optimism, Intention', 
      emotion: 'Optimism', 
      process: 'Intention', 
      viewOfLife: 'Hopeful', 
      color: 'bg-orange-300', 
      text: 'text-orange-950', 
      glow: 'rgba(253,186,116,0.6)', 
      border: 'border-orange-300', 
      speed: 2.0 
    },
    { 
      level: 200, 
      label: 'Courage', 
      desc: 'Empowerment, Affirmation', 
      emotion: 'Affirmation', 
      process: 'Empowerment', 
      viewOfLife: 'Feasible', 
      color: 'bg-red-300', 
      text: 'text-red-950', 
      glow: 'rgba(252,165,165,0.6)', 
      border: 'border-red-300', 
      speed: 2.5 
    },
    { 
      level: 150, 
      label: 'Anger', 
      desc: 'Hate, Aggression', 
      emotion: 'Hate', 
      process: 'Aggression', 
      viewOfLife: 'Antagonistic', 
      color: 'bg-red-600', 
      text: 'text-white', 
      glow: 'rgba(220,38,38,0.4)', 
      border: 'border-red-600', 
      speed: 3.0 
    },
    { 
      level: 100, 
      label: 'Fear', 
      desc: 'Anxiety, Withdrawal', 
      emotion: 'Anxiety', 
      process: 'Withdrawal', 
      viewOfLife: 'Frightening', 
      color: 'bg-slate-600', 
      text: 'text-white', 
      glow: 'rgba(71,85,105,0.3)', 
      border: 'border-slate-600', 
      speed: 4.0 
    },
    { 
      level: 20, 
      label: 'Shame', 
      desc: 'Humiliation, Elimination', 
      emotion: 'Humiliation', 
      process: 'Elimination', 
      viewOfLife: 'Miserable', 
      color: 'bg-slate-800', 
      text: 'text-slate-400', 
      glow: 'rgba(30,41,59,0.2)', 
      border: 'border-slate-800', 
      speed: 5.0 
    },
  ];

  const [selectedLevel, setSelectedLevel] = useState(consciousnessLevels[3]);

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
        <div className="space-y-6 lg:col-span-2 xl:col-span-3 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          <Card className="border-blue-500/30 bg-gradient-to-br from-blue-900/20 to-cosmic-card relative overflow-hidden lg:col-span-2 xl:col-span-2">
            <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
              <Radio size={180} />
            </div>
            <h3 className="text-2xl font-black mb-6 text-blue-300 flex items-center gap-3 tracking-wide uppercase">
              <Zap size={24} className="text-blue-400" />
              The Law of Resonance
            </h3>
            <div className="space-y-4 text-slate-300 text-base leading-relaxed relative z-10">
              <p>
                Everything in the universe is in a state of vibration. From the smallest subatomic particle to the largest galaxy, nothing is truly solid; it is all energy vibrating at specific frequencies.
              </p>
              <p>
                The **Law of Resonance** states that like attracts like. Your personal frequency—the sum of your thoughts, emotions, and physical state—determines the experiences, people, and opportunities you draw into your life.
              </p>
              <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20 mt-4">
                <h4 className="font-bold text-blue-400 mb-2 uppercase tracking-widest text-xs">Entrainment</h4>
                <p className="text-sm text-slate-400">
                  When two vibrating objects are placed near each other, the stronger vibration will eventually pull the weaker one into its rhythm. This is why being in high-vibe environments or listening to specific frequencies can "tune" your own energetic field.
                </p>
              </div>
            </div>
          </Card>

          <Card className="lg:col-span-1 xl:col-span-1 border-blue-500/20 bg-black/40 overflow-hidden group p-0 flex flex-col">
            <div className="p-5 border-b border-white/5 bg-white/5">
              <h3 className="text-xl font-black text-white flex items-center gap-2 tracking-tight">
                <Waves size={20} className="text-blue-500" />
                Ascension Pillar
              </h3>
              <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold mt-1">Vibrational State Mapping</p>
            </div>

            <div className="p-5 flex-1 flex flex-col">
              {/* Resonance Orb Visualizer */}
              <div className="relative h-40 flex items-center justify-center bg-black/40 rounded-2xl border border-white/5 overflow-hidden mb-6">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent" />
                
                {/* The Orb */}
                <div 
                  className={cn(
                    "w-20 h-20 rounded-full border-4 transition-all duration-1000 relative z-10 flex flex-col items-center justify-center text-center p-2",
                    selectedLevel.color,
                    selectedLevel.border
                  )}
                  style={{ 
                    boxShadow: `0 0 60px ${selectedLevel.glow}`,
                    animation: `pulse ${selectedLevel.speed}s ease-in-out infinite`
                  }}
                >
                  <span className={cn("text-[10px] font-black uppercase tracking-tighter leading-none", selectedLevel.text)}>
                    {selectedLevel.label}
                  </span>
                  <span className={cn("text-[8px] font-bold mt-1 opacity-60", selectedLevel.text)}>
                    {selectedLevel.level}
                  </span>
                </div>

                {/* Orbiting Particles */}
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(3)].map((_, i) => (
                    <div 
                      key={i}
                      className={cn("absolute top-1/2 left-1/2 w-28 h-28 border border-white/5 rounded-full -translate-x-1/2 -translate-y-1/2")}
                      style={{ 
                        animation: `spin ${3 + i}s linear infinite`,
                        opacity: 0.1 + (i * 0.1)
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Detailed Level Analysis */}
              <div className="grid grid-cols-2 gap-2 mb-6">
                <div className="p-2 rounded-lg bg-white/5 border border-white/5">
                  <div className="text-[8px] text-slate-500 uppercase font-bold tracking-widest mb-1">Emotion</div>
                  <div className="text-xs text-white font-bold">{selectedLevel.emotion}</div>
                </div>
                <div className="p-2 rounded-lg bg-white/5 border border-white/5">
                  <div className="text-[8px] text-slate-500 uppercase font-bold tracking-widest mb-1">Process</div>
                  <div className="text-xs text-white font-bold">{selectedLevel.process}</div>
                </div>
                <div className="p-2 rounded-lg bg-white/5 border border-white/5">
                  <div className="text-[8px] text-slate-500 uppercase font-bold tracking-widest mb-1">View of Life</div>
                  <div className="text-xs text-white font-bold">{selectedLevel.viewOfLife}</div>
                </div>
                <div className="p-2 rounded-lg bg-white/5 border border-white/5">
                  <div className="text-[8px] text-slate-500 uppercase font-bold tracking-widest mb-1">Resonance</div>
                  <div className="text-xs text-white font-bold">{selectedLevel.level} Hz</div>
                </div>
              </div>

              {/* Interactive Tuning Scale */}
              <div className="relative h-[280px] flex gap-4 overflow-y-auto pr-2 custom-scrollbar">
                <div className="absolute left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-white via-blue-500 to-slate-900 rounded-full opacity-20" />
                
                <div className="flex flex-col gap-2 w-full relative z-10">
                  {consciousnessLevels.map((item) => (
                    <button 
                      key={item.level} 
                      onClick={() => setSelectedLevel(item)}
                      className={cn(
                        "flex items-center gap-4 group/level text-left w-full p-2 rounded-lg transition-all",
                        selectedLevel.level === item.level ? "bg-white/10 border border-white/10" : "hover:bg-white/5"
                      )}
                    >
                      <div className="relative flex items-center justify-center">
                        <div className={cn(
                          "w-7 h-7 rounded-full flex items-center justify-center text-[8px] font-black transition-all duration-300 border-2 z-20",
                          selectedLevel.level === item.level ? cn(item.color, item.text, item.border) : "bg-black/40 border-white/10 text-slate-500",
                          selectedLevel.level === item.level && "scale-110"
                        )}>
                          {item.level}
                        </div>
                      </div>

                      <div className="flex-1">
                        <h4 className={cn(
                          "text-[10px] font-black uppercase tracking-wider transition-colors",
                          selectedLevel.level === item.level ? "text-white" : "text-slate-600 group-hover/level:text-slate-400"
                        )}>
                          {item.label}
                        </h4>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <style dangerouslySetInnerHTML={{ __html: `
              @keyframes pulse {
                0%, 100% { transform: scale(1); opacity: 1; }
                50% { transform: scale(1.05); opacity: 0.8; }
              }
              @keyframes spin {
                from { transform: translate(-50%, -50%) rotate(0deg); }
                to { transform: translate(-50%, -50%) rotate(360deg); }
              }
              .custom-scrollbar::-webkit-scrollbar {
                width: 2px;
              }
              .custom-scrollbar::-webkit-scrollbar-track {
                background: rgba(255, 255, 255, 0.05);
              }
              .custom-scrollbar::-webkit-scrollbar-thumb {
                background: rgba(59, 130, 246, 0.3);
                border-radius: 10px;
              }
            `}} />
          </Card>

          <Card className="lg:col-span-2 xl:col-span-2 border-purple-500/20">
            <h3 className="text-xl font-black mb-6 text-purple-300 flex items-center gap-3 tracking-wide uppercase">
              <Music size={22} className="text-purple-400" />
              Solfeggio Frequencies
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {solfeggioFrequencies.map((f, i) => (
                <div key={i} className="p-4 rounded-xl bg-black/40 border border-white/5 hover:border-purple-500/30 transition-all">
                  <div className={cn("text-lg font-black mb-1", f.color)}>{f.freq}</div>
                  <div className="text-xs font-bold text-white mb-1 uppercase tracking-wider">{f.label}</div>
                  <p className="text-[10px] text-slate-400 leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </Card>

          <Card className="lg:col-span-1 xl:col-span-1 border-emerald-500/20">
            <h3 className="text-xl font-black mb-6 text-emerald-300 flex items-center gap-3 tracking-wide uppercase">
              <Activity size={22} className="text-emerald-400" />
              Brainwave States
            </h3>
            <div className="space-y-4">
              {brainwaves.map((b, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 flex-shrink-0 border border-emerald-500/20">
                    <span className="text-[10px] font-black">{b.type[0]}</span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-sm font-bold text-white">{b.type}</span>
                      <span className="text-[9px] text-slate-500 font-mono">{b.range}</span>
                    </div>
                    <div className="text-[10px] text-emerald-400 font-bold uppercase tracking-widest mb-1">{b.state}</div>
                    <p className="text-[10px] text-slate-400 leading-tight">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="lg:col-span-1 xl:col-span-1 border-blue-500/20 bg-blue-900/5">
            <h3 className="text-xl font-black mb-4 text-blue-300 flex items-center gap-3 tracking-wide uppercase">
              <Heart size={22} className="text-blue-400" />
              Schumann Resonance
            </h3>
            <div className="space-y-4">
              <div className="text-4xl font-black text-white">7.83 <span className="text-lg text-blue-400">Hz</span></div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Known as the "Earth's Heartbeat," this is the fundamental frequency of the Earth's electromagnetic field. 
              </p>
              <p className="text-xs text-slate-400 leading-relaxed">
                Human brainwaves are naturally tuned to this frequency. Modern technology (Wi-Fi, 5G) creates "noise" that can disconnect us from this natural rhythm, leading to stress and fatigue.
              </p>
              <div className="pt-4 border-t border-white/5">
                <div className="text-[10px] font-bold text-blue-400 uppercase tracking-widest mb-2">Benefits of Alignment</div>
                <ul className="text-[10px] text-slate-500 space-y-1">
                  <li>• Enhanced immune function</li>
                  <li>• Improved sleep quality</li>
                  <li>• Emotional stability</li>
                  <li>• Increased stress resilience</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      )}

      {activeTab === 'practice' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div id="breathwork-section" className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-4 px-1">
                <Wind className="text-blue-400" size={20} />
                <h3 className="text-lg font-black text-white uppercase tracking-[0.2em]">Guided Breathwork</h3>
              </div>
              <InteractiveBreathwork compact />
            </div>

            <div className="lg:col-span-1 flex flex-col">
              <div className="flex items-center gap-3 mb-4 px-1">
                <Volume2 className="text-blue-400" size={20} />
                <h3 className="text-lg font-black text-white uppercase tracking-[0.2em]">Frequency Tuner</h3>
              </div>
              <Card className="border-blue-500/30 bg-gradient-to-br from-blue-900/20 to-black relative overflow-hidden p-4 flex-1 flex flex-col">
                <p className="text-slate-400 text-[10px] mb-4 leading-relaxed">
                  Dial in any specific frequency to meditate with. Pure sine waves are generated directly in your browser.
                </p>
                <div className="flex-1 flex flex-col justify-center">
                  <FrequencyGenerator compact />
                </div>
              </Card>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <PracticeCard 
              compact
              title="DNA Repair Frequency"
              duration={15}
              description="The 528Hz Solfeggio frequency is known as the 'Miracle' tone, used for DNA repair and profound transformation. It resonates with the core of your biological structure, promoting healing, regeneration, and increased energy at a cellular level. Listen with headphones and visualize your cells vibrating with golden light, repairing and returning to their perfect original blueprint."
              icon={<Music size={16} className="text-emerald-400" />}
              frequency={528}
              colorClass="text-emerald-400"
            />

            <PracticeCard 
              compact
              title="Cosmic Harmony Frequency"
              duration={15}
              description="The 432Hz frequency is mathematically consistent with the patterns of the universe, promoting deep relaxation, mental clarity, and emotional stability. This 'Natural' frequency aligns you with the heartbeat of the cosmos (the Schumann Resonance), reducing anxiety, enhancing focus, and opening the heart chakra to unconditional love."
              icon={<Waves size={16} className="text-blue-400" />}
              frequency={432}
              colorClass="text-blue-400"
            />
            
            <PracticeCard 
              compact
              title="Chanting & Mantras"
              duration={10}
              description="Use the power of your own voice to create internal resonance. The primordial sound 'OM' vibrates naturally at 432Hz, while specific Sanskrit mantras can target different energy centers (chakras). Your voice is your most powerful frequency generator. Chanting stimulates the vagus nerve, immediately calming the nervous system and raising your vibration."
              icon={<Mic2 size={16} className="text-indigo-400" />}
              frequency={432}
              colorClass="text-indigo-400"
            />

            <div className="relative group">
              <PracticeCard 
                compact
                title="Heart Coherence"
                duration={5}
                description="Place your hand over your heart. Breathe slowly and deeply into your heart center while actively feeling a sense of deep appreciation, care, or compassion. This aligns your heart and brain waves, creating a state of physiological coherence that radiates a powerful, stable electromagnetic field up to 3 feet outside your body, positively affecting everyone around you."
                icon={<Heart size={16} className="text-red-400" />}
                colorClass="text-red-400"
              />
              <button 
                onClick={() => document.getElementById('breathwork-section')?.scrollIntoView({ behavior: 'smooth' })}
                className="absolute bottom-4 right-4 px-3 py-1.5 bg-red-500/20 hover:bg-red-500/40 border border-red-500/30 rounded-lg text-[10px] font-black uppercase tracking-widest text-red-400 transition-all z-10"
              >
                Open Guide
              </button>
            </div>

            <PracticeCard 
              compact
              title="Gratitude Journaling"
              duration={10}
              description="List 10 specific things you are deeply grateful for today. Feel the emotion of gratitude in your body as you write each one. Gratitude is the ultimate state of receivership; it instantly shifts your vibration from lack and fear to abundance and joy, opening the energetic portals for manifestation and synchronicity."
              icon={<PenTool size={16} className="text-yellow-400" />}
              colorClass="text-yellow-400"
            />

            <PracticeCard 
              compact
              title="Nature Immersion"
              duration={20}
              description="Spend intentional time in nature to align with the Earth's natural frequency (the Schumann Resonance at 7.83Hz). Walk among trees, sit by flowing water, or simply observe the sky. This practice grounds your electromagnetic field, discharges the chaotic, artificial frequencies of modern technology, and restores your natural biological rhythms."
              icon={<Trees size={16} className="text-emerald-500" />}
              colorClass="text-emerald-500"
            />

            <PracticeCard 
              compact
              title="High-Vibe Diet"
              duration={1}
              description="Consume living, organic, plant-based foods that hold high biophoton energy (light information). Your physical body is a biological computer; feed it high-quality, high-frequency data to maintain a pristine operating system. Avoid heavily processed foods, which carry dense, low-vibrational energy that can drag down your overall frequency."
              icon={<Apple size={16} className="text-red-500" />}
              colorClass="text-red-500"
            />

            <PracticeCard 
              compact
              title="Digital Detox"
              duration={60}
              description="Intentionally disconnect from all screens, Wi-Fi, and EMFs to allow your auric field to return to its natural, unbothered state. Constant digital stimulation and artificial blue light create 'noise' and static in your aura that masks your true soul frequency. Use this hour for reading, meditating, or simply being."
              icon={<Smartphone size={16} className="text-slate-400" />}
              colorClass="text-slate-400"
            />

            <PracticeCard 
              compact
              title="Laughter Therapy"
              duration={5}
              description="Engage in genuine belly laughter. Laughter instantly raises your frequency, releases endorphins, and floods your system with oxytocin. It is one of the fastest, most effective ways to break through dense emotional states, release trapped trauma, and return your body to a state of expansive joy and lightness."
              icon={<Smile size={16} className="text-yellow-500" />}
              colorClass="text-yellow-500"
            />

            <PracticeCard 
              compact
              title="Pineal Gland Activation"
              duration={10}
              description="Focus your attention entirely on the center of your brain (the pineal gland) while chanting the sound 'M' or 'N' with your lips closed. Feel the vibration buzzing in the center of your head. This physical vibration stimulates the decalcification of the pineal gland, enhancing your connection to higher frequencies, intuition, and mystical states."
              icon={<Zap size={16} className="text-purple-400" />}
              colorClass="text-purple-400"
            />

            <PracticeCard 
              compact
              title="Binaural Beats"
              duration={20}
              description="Listen to slightly different frequencies in each ear (requires headphones) to induce specific brainwave states through a process called brainwave entrainment. Use Theta waves (4-8Hz) for deep meditation and intuition, or Gamma waves (40Hz+) for high-level cognitive processing and peak awareness. This 'trains' your brain to resonate at higher levels."
              icon={<Radio size={16} className="text-blue-500" />}
              colorClass="text-blue-500"
            />

            <PracticeCard 
              compact
              title="Sovereign Declaration"
              duration={2}
              description="Stand tall, take a deep breath, and speak your truth with absolute conviction. Say aloud: 'I am the master of my frequency. I choose joy. I choose peace. I choose love. I release all that is not mine.' Your spoken words are acoustic commands that the universe must follow, instantly restructuring the energy around you."
              icon={<Volume2 size={16} className="text-white" />}
              colorClass="text-white"
            />

            <PracticeCard 
              compact
              title="Solfeggio Frequencies"
              duration={30}
              description="Listen to the ancient Solfeggio scale (e.g., 396Hz for liberating guilt and fear, 528Hz for transformation and miracles, 852Hz for returning to spiritual order). These specific tones are believed to impart profound spiritual blessings and healing properties, resonating deeply within the cellular structure."
              icon={<Music size={16} className="text-purple-400" />}
              colorClass="text-purple-400"
            />

            <PracticeCard 
              compact
              title="Tuning Fork Therapy"
              duration={15}
              description="Use physical or digital tuning forks calibrated to specific frequencies (like 136.1Hz for the heart chakra or 432Hz for universal harmony). Place the vibrating fork near your ears or directly on your body (acupressure points) to physically transmit the healing vibration into your bones and tissues, clearing blockages instantly."
              icon={<Activity size={16} className="text-cyan-400" />}
              colorClass="text-cyan-400"
            />
          </div>
        </div>
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
