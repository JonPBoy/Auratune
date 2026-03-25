import React, { useState } from 'react';
import { BookOpen, Shield, Sun, Sparkles, Lock, Hexagon, Zap, Layers, Radio, Compass, Eye, Flame, Infinity } from 'lucide-react';
import { PageLayout } from '../PageLayout';
import { Card } from '../ui/Card';
import { cn } from '../../lib/utils';

export function CodexTab() {
  const [activeTab, setActiveTab] = useState('book');

  const tabs = [
    { id: 'book', label: '', icon: BookOpen },
    { id: 'shield', label: '', icon: Shield },
    { id: 'sun', label: '', icon: Sun },
    { id: 'sparkles', label: '', icon: Sparkles },
    { id: 'lock', label: '', icon: Lock },
  ];

  return (
    <PageLayout
      title="Sacred Library"
      subtitle="Access the universal blueprints"
      icon={BookOpen}
      colorClass="text-slate-300"
      tabs={tabs}
      activeSubTab={activeTab}
      setActiveSubTab={setActiveTab}
    >
      {activeTab === 'book' && (
        <>
          <Card className="border-slate-500/30 bg-gradient-to-br from-slate-800/40 to-cosmic-card relative overflow-hidden lg:col-span-2 xl:col-span-3">
            <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
              <BookOpen size={240} />
            </div>
            <h3 className="text-3xl font-black mb-6 flex items-center gap-4 text-white tracking-wide uppercase">
              The Tri-Identity System
            </h3>
            <p className="text-slate-300 text-lg leading-relaxed mb-8 relative z-10">
              Auratune is built on the fundamental understanding that you are a multi-dimensional being operating a biological vehicle. To achieve true alignment and manifest your desired reality, you must master three core aspects of your identity:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 text-base relative z-10">
              <li className="flex flex-col gap-6 p-6 rounded-xl bg-black/40 border border-purple-500/20 hover:border-purple-500/40 transition-colors">
                <div className="w-16 h-16 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 font-bold flex-shrink-0 shadow-[0_0_20px_rgba(168,85,247,0.3)]">
                  <Shield size={36} />
                </div>
                <div>
                  <strong className="text-purple-300 block mb-2 text-xl tracking-wide uppercase">Aura (The Shield)</strong>
                  <span className="text-slate-400 leading-relaxed text-sm">Your energetic boundary and filter. It determines what external energies are allowed to influence your internal state. A strong aura repels density and attracts light. It is your first line of defense against psychic intrusion and environmental stress.</span>
                </div>
              </li>
              <li className="flex flex-col gap-6 p-6 rounded-xl bg-black/40 border border-blue-500/20 hover:border-blue-500/40 transition-colors">
                <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold flex-shrink-0 shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                  <Radio size={36} />
                </div>
                <div>
                  <strong className="text-blue-300 block mb-2 text-xl tracking-wide uppercase">Frequency (The Magnet)</strong>
                  <span className="text-slate-400 leading-relaxed text-sm">Your emotional vibration and point of attraction. The universe does not hear your words; it feels your frequency. You attract experiences that match your dominant emotional state. It is your creative engine, constantly broadcasting your reality into existence.</span>
                </div>
              </li>
              <li className="flex flex-col gap-6 p-6 rounded-xl bg-black/40 border border-yellow-500/20 hover:border-yellow-500/40 transition-colors">
                <div className="w-16 h-16 rounded-full bg-yellow-500/20 flex items-center justify-center text-yellow-400 font-bold flex-shrink-0 shadow-[0_0_20px_rgba(234,179,8,0.3)]">
                  <Compass size={36} />
                </div>
                <div>
                  <strong className="text-yellow-300 block mb-2 text-xl tracking-wide uppercase">Soul (The Compass)</strong>
                  <span className="text-slate-400 leading-relaxed text-sm">Your eternal essence and guiding truth. It holds the blueprint of your destiny. When the Aura is clear and the Frequency is high, the Soul's voice can finally be heard clearly. It is your true north, guiding you toward your highest evolution.</span>
                </div>
              </li>
            </ul>
          </Card>
        </>
      )}

      {activeTab === 'shield' && (
        <>
          <Card className="border-slate-500/30 relative overflow-hidden lg:col-span-2 xl:col-span-3">
            <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
              <Shield size={300} />
            </div>
            <h3 className="text-3xl font-black mb-8 flex items-center gap-4 text-white tracking-wide uppercase">
              Protection Protocols
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative z-10">
              <div className="relative pl-8 border-l-4 border-purple-500/30">
                <div className="absolute -left-[11px] top-0 w-5 h-5 rounded-full bg-cosmic-bg border-2 border-purple-500" />
                <h4 className="font-bold text-purple-400 mb-4 text-lg tracking-widest uppercase">The Mirror Shield</h4>
                <p className="text-base text-slate-400 leading-relaxed">Visualize a sphere of reflective, mirrored light surrounding your physical body, extending 3 feet in all directions. Command that all projected negative energy be immediately reflected back to its source with consciousness, not malice. Use this in highly toxic environments or when feeling targeted by external negativity.</p>
              </div>
              <div className="relative pl-8 border-l-4 border-blue-500/30">
                <div className="absolute -left-[11px] top-0 w-5 h-5 rounded-full bg-cosmic-bg border-2 border-blue-500" />
                <h4 className="font-bold text-blue-400 mb-4 text-lg tracking-widest uppercase">Frequency Override</h4>
                <p className="text-base text-slate-400 leading-relaxed">When entering dense environments (hospitals, crowded transit, toxic workplaces), consciously set your frequency slightly higher than the room. Do not match lower vibrations to build rapport. Be the thermostat, not the thermometer. Radiate your own light so powerfully that lower frequencies cannot penetrate your field.</p>
              </div>
              <div className="relative pl-8 border-l-4 border-yellow-500/30">
                <div className="absolute -left-[11px] top-0 w-5 h-5 rounded-full bg-cosmic-bg border-2 border-yellow-500" />
                <h4 className="font-bold text-yellow-400 mb-4 text-lg tracking-widest uppercase">The Sovereign Covenant</h4>
                <p className="text-base text-slate-400 leading-relaxed">A daily declaration to be spoken aloud with conviction: "I am a sovereign being of light. I revoke, cancel, and release all contracts, vows, and agreements made in this lifetime or any other that no longer serve my highest evolution. I command my energy back to me now, purified and restored."</p>
              </div>
            </div>
          </Card>
        </>
      )}

      {activeTab === 'sun' && (
        <>
          <Card className="border-slate-500/30 lg:col-span-2 xl:col-span-3">
            <h3 className="text-3xl font-black mb-8 flex items-center gap-4 text-white tracking-wide uppercase">
              The Daily Architecture
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-8 rounded-xl bg-black/30 border border-white/5 relative overflow-hidden">
                <h4 className="font-bold text-white mb-4 flex items-center gap-4 tracking-widest uppercase text-lg">
                  <span className="text-purple-400 font-black">01.</span> Morning: Calibration
                </h4>
                <ul className="text-base text-slate-400 leading-relaxed mt-4 space-y-3">
                  <li>• Before checking your phone, set your daily intention.</li>
                  <li>• Perform a 5-minute Aura Cleansing visualization.</li>
                  <li>• Drink 16oz of programmed water (speak gratitude into it).</li>
                  <li>• Ground your energy by connecting to the Earth's core.</li>
                </ul>
              </div>
              <div className="p-8 rounded-xl bg-black/30 border border-white/5 relative overflow-hidden">
                <h4 className="font-bold text-white mb-4 flex items-center gap-4 tracking-widest uppercase text-lg">
                  <span className="text-blue-400 font-black">02.</span> Mid-Day: Correction
                </h4>
                <ul className="text-base text-slate-400 leading-relaxed mt-4 space-y-3">
                  <li>• Check your Frequency on the Hawkins Scale.</li>
                  <li>• If it has dropped below Neutrality, perform 4-7-8 Breathwork.</li>
                  <li>• Do not make major decisions from a contracted state.</li>
                  <li>• Take a 5-minute "silence break" to reset your mental field.</li>
                </ul>
              </div>
              <div className="p-8 rounded-xl bg-black/30 border border-white/5 relative overflow-hidden">
                <h4 className="font-bold text-white mb-4 flex items-center gap-4 tracking-widest uppercase text-lg">
                  <span className="text-yellow-400 font-black">03.</span> Evening: Integration
                </h4>
                <ul className="text-base text-slate-400 leading-relaxed mt-4 space-y-3">
                  <li>• Complete a Soul Journal entry to process the day's lessons.</li>
                  <li>• Perform Aura Sealing before sleep to prevent astral leaks.</li>
                  <li>• Express gratitude for 3 specific things to lock in frequency.</li>
                  <li>• Review your wins and lessons to prepare for tomorrow's growth.</li>
                </ul>
              </div>
            </div>
          </Card>
        </>
      )}

      {activeTab === 'sparkles' && (
        <>
          <Card className="border-slate-500/30 relative overflow-hidden lg:col-span-2 xl:col-span-3">
            <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
              <Infinity size={300} />
            </div>
            <h3 className="text-4xl font-black mb-4 flex items-center gap-4 text-white tracking-wide uppercase">
              The Hermetic Principles
            </h3>
            <p className="text-slate-400 text-lg mb-10 leading-relaxed relative z-10">The seven universal laws that govern Auratune. Master these ancient truths, and you master the fabric of reality itself. These principles are the keys to the universe, revealing the hidden mechanics of creation.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 relative z-10">
              {[
                { 
                  title: 'I. Mentalism', 
                  desc: '"The All is Mind; the Universe is Mental."', 
                  elaborate: 'Everything that exists in the physical world began as a thought in the mind of the Creator, and subsequently, in your own mind. Your reality is a mental construct. By mastering your thoughts, you master the very substance of your existence.',
                  icon: '🧠' 
                },
                { 
                  title: 'II. Correspondence', 
                  desc: '"As above, so below; as within, so without."', 
                  elaborate: 'There is a perfect harmony and agreement between the different planes of existence. Your external life is a mirror reflecting your internal state. If you wish to change your world, you must first change the inner landscape of your soul.',
                  icon: '🪞' 
                },
                { 
                  title: 'III. Vibration', 
                  desc: '"Nothing rests; everything moves; everything vibrates."', 
                  elaborate: 'The difference between the various manifestations of matter, energy, and spirit is primarily a difference in vibration. By consciously shifting your emotional and mental frequency, you can move from a state of density to one of pure light.',
                  icon: '〰️' 
                },
                { 
                  title: 'IV. Polarity', 
                  desc: '"Everything is dual; everything has poles."', 
                  elaborate: 'Opposites are merely two extremes of the same thing. Hot and cold are temperature; love and hate are emotion. You can slide along the scale of polarity, transmuting fear into courage by focusing on the higher pole of the same energy.',
                  icon: '☯️' 
                },
                { 
                  title: 'V. Rhythm', 
                  desc: '"Everything flows, out and in; all things rise and fall."', 
                  elaborate: 'The universe moves in cycles, like the tides or the seasons. Mastery lies not in trying to stop the pendulum, but in learning to ride it. Use the upward swing to build momentum and the downward swing to integrate and rest.',
                  icon: '🌊' 
                },
                { 
                  title: 'VI. Cause & Effect', 
                  desc: '"Every Cause has its Effect; every Effect has its Cause."', 
                  elaborate: 'Nothing happens by chance. Every action you take is a cause that will inevitably produce an effect. To become a master of your destiny, you must stop being the effect of external causes and start being the conscious cause of your own effects.',
                  icon: '🔗' 
                },
                { 
                  title: 'VII. Gender', 
                  desc: '"Gender is in everything; everything has its Masculine and Feminine Principles."', 
                  elaborate: 'Creation requires the union of the active, logical Masculine and the receptive, intuitive Feminine. Balance these forces within yourself—action with reflection, logic with intuition—to achieve true creative power.',
                  icon: '⚖️' 
                },
              ].map((law, i) => (
                <div key={i} className="p-6 rounded-xl bg-black/40 border border-white/5 flex flex-col gap-4 items-start hover:bg-black/60 transition-all">
                  <div className="text-4xl opacity-90">{law.icon}</div>
                  <div>
                    <h4 className="font-bold text-slate-200 text-xl mb-2 tracking-widest uppercase">{law.title}</h4>
                    <p className="text-base text-slate-400 leading-relaxed italic mb-2">"{law.desc.split('"')[1]}"</p>
                    <p className="text-sm text-slate-500 leading-relaxed">{law.elaborate}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </>
      )}

      {activeTab === 'lock' && (
        <>
          <Card className="text-center py-24 border-slate-700 bg-gradient-to-b from-cosmic-card to-black/80 relative overflow-hidden lg:col-span-2 xl:col-span-3">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20" />
            <div className="relative inline-block mb-10">
              <div className="absolute inset-0 bg-slate-500/20 blur-3xl rounded-full" />
              <Lock className="relative text-slate-400" size={128} strokeWidth={1.5} />
            </div>
            <h3 className="text-5xl font-black mb-6 text-white tracking-widest uppercase">Mastery Programs</h3>
            <p className="text-slate-400 text-lg mb-16 max-w-[400px] mx-auto leading-relaxed">Unlock advanced esoteric protocols by maintaining a consistent daily alignment streak. The path to mastery is paved with discipline.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left w-full relative z-10">
              <div className="p-8 rounded-xl bg-black/60 border border-white/5 opacity-60 flex items-center justify-between relative overflow-hidden">
                <div className="absolute top-0 left-0 w-2 h-full bg-slate-800" />
                <div>
                  <span className="font-bold text-slate-300 block mb-2 tracking-widest uppercase text-base">Level 1: The Neophyte</span>
                  <span className="text-xs text-slate-600 uppercase tracking-widest font-bold">Requires 7 Day Streak</span>
                </div>
                <div className="w-16 h-16 rounded-full bg-slate-900 flex items-center justify-center border border-slate-800">
                  <Lock size={32} className="text-slate-700" />
                </div>
              </div>
              <div className="p-8 rounded-xl bg-black/60 border border-white/5 opacity-60 flex items-center justify-between relative overflow-hidden">
                <div className="absolute top-0 left-0 w-2 h-full bg-slate-800" />
                <div>
                  <span className="font-bold text-slate-300 block mb-2 tracking-widest uppercase text-base">Level 2: The Architect</span>
                  <span className="text-xs text-slate-600 uppercase tracking-widest font-bold">Requires 14 Day Streak</span>
                </div>
                <div className="w-16 h-16 rounded-full bg-slate-900 flex items-center justify-center border border-slate-800">
                  <Lock size={32} className="text-slate-700" />
                </div>
              </div>
              <div className="p-8 rounded-xl bg-black/60 border border-white/5 opacity-60 flex items-center justify-between relative overflow-hidden">
                <div className="absolute top-0 left-0 w-2 h-full bg-slate-800" />
                <div>
                  <span className="font-bold text-slate-300 block mb-2 tracking-widest uppercase text-base">Level 3: The Master</span>
                  <span className="text-xs text-slate-600 uppercase tracking-widest font-bold">Requires 30 Day Streak</span>
                </div>
                <div className="w-16 h-16 rounded-full bg-slate-900 flex items-center justify-center border border-slate-800">
                  <Lock size={32} className="text-slate-700" />
                </div>
              </div>
            </div>
          </Card>
        </>
      )}
    </PageLayout>
  );
}
