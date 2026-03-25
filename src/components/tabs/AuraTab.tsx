import React, { useState } from 'react';
import { Sun, BookOpen, Activity, CheckCircle2, Shield, Zap, Sparkles, Star, Waves, Wind, Mountain, Gem, Bell, SunMedium, Flame, Camera } from 'lucide-react';
import { PageLayout } from '../PageLayout';
import { Card } from '../ui/Card';
import { Rating } from '../ui/Rating';
import { cn } from '../../lib/utils';
import { PracticeCard } from '../PracticeCard';
import { AuraScanner } from '../AuraScanner';

export function AuraTab() {
  const [activeTab, setActiveTab] = useState('learn');
  const [strength, setStrength] = useState(3);
  const [clarity, setClarity] = useState(3);
  const [protection, setProtection] = useState(3);
  const [notes, setNotes] = useState('');

  const [isSaved, setIsSaved] = useState(false);

  const handleSave = () => {
    const log = { strength, clarity, protection, notes, date: new Date().toISOString() };
    const existingLogs = JSON.parse(localStorage.getItem('aura_logs') || '[]');
    localStorage.setItem('aura_logs', JSON.stringify([log, ...existingLogs]));
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2000);
  };

  const tabs = [
    { id: 'learn', label: 'Learn', icon: BookOpen },
    { id: 'practice', label: 'Practice', icon: Activity },
    { id: 'scanner', label: 'Scanner', icon: Camera },
    { id: 'checkin', label: 'Check-In', icon: CheckCircle2 },
  ];

  return (
    <PageLayout
      title="Aura Architect"
      subtitle="Build and protect your energetic boundary"
      icon={Sun}
      colorClass="text-purple-500"
      tabs={tabs}
      activeSubTab={activeTab}
      setActiveSubTab={setActiveTab}
    >
      {activeTab === 'learn' && (
        <>
          <Card className="border-purple-500/30 bg-gradient-to-br from-purple-900/20 to-cosmic-card relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
              <Shield size={120} />
            </div>
            <h3 className="text-xl font-black mb-4 text-purple-300 flex items-center gap-2 tracking-wide uppercase">
              <Sparkles size={20} className="text-purple-400" />
              The Luminous Field
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed relative z-10">
              Your aura is a multi-layered electromagnetic field that surrounds your physical body. It acts as your energetic skin, filtering information and protecting your vital essence. A healthy aura is vibrant, clear, and resilient.
            </p>
          </Card>
          
          <Card>
            <h3 className="text-lg font-bold mb-4 text-white">The Seven Layers</h3>
            <div className="space-y-3">
              {[
                { name: 'Etheric Body', desc: 'Physical health and survival instincts.', color: 'border-red-500/50' },
                { name: 'Emotional Body', desc: 'Feelings, desires, and emotional processing.', color: 'border-orange-500/50' },
                { name: 'Mental Body', desc: 'Thoughts, beliefs, and cognitive patterns.', color: 'border-yellow-500/50' },
                { name: 'Astral Body', desc: 'Bridge between physical and spiritual realms.', color: 'border-emerald-500/50' },
                { name: 'Etheric Template', desc: 'The blueprint for your physical existence.', color: 'border-blue-500/50' },
                { name: 'Celestial Body', desc: 'Spiritual ecstasy and unconditional love.', color: 'border-indigo-500/50' },
                { name: 'Ketheric Template', desc: 'Connection to Source and divine will.', color: 'border-purple-500/50' },
              ].map((layer, i) => (
                <div key={i} className={cn("pl-4 border-l-2 py-1", layer.color)}>
                  <h4 className="font-bold text-sm text-slate-200">{layer.name}</h4>
                  <p className="text-xs text-slate-400">{layer.desc}</p>
                </div>
              ))}
            </div>
          </Card>

          <Card>
            <h3 className="text-lg font-bold mb-3 text-white">Diagnostic Indicators</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-3 rounded-xl bg-emerald-900/10 border border-emerald-500/20">
                <h4 className="text-emerald-400 font-bold text-xs uppercase mb-1">Radiant State</h4>
                <ul className="text-[10px] text-slate-400 space-y-1">
                  <li>• High energy levels</li>
                  <li>• Strong boundaries</li>
                  <li>• Emotional stability</li>
                  <li>• Clear intuition</li>
                </ul>
              </div>
              <div className="p-3 rounded-xl bg-red-900/10 border border-red-500/20">
                <h4 className="text-red-400 font-bold text-xs uppercase mb-1">Depleted State</h4>
                <ul className="text-[10px] text-slate-400 space-y-1">
                  <li>• Chronic fatigue</li>
                  <li>• Feeling "drained"</li>
                  <li>• Mood swings</li>
                  <li>• Easily influenced</li>
                </ul>
              </div>
            </div>
          </Card>
        </>
      )}

      {activeTab === 'practice' && (
        <>
          <PracticeCard 
            title="Golden Sphere Visualization"
            duration={5}
            description="Visualize a sphere of golden light surrounding you. It allows love in and keeps density out. Command it to filter all incoming energy, keeping only that which serves your highest good."
            icon={<Star size={20} className="text-yellow-400" />}
            colorClass="text-yellow-400"
          />
          
          <PracticeCard 
            title="Salt Water Cleansing"
            duration={20}
            description="A warm bath with sea salt or Himalayan salt to draw out energetic toxins and heavy debris. The salt acts as a natural magnet for stagnant energy, while the water recalibrates your emotional body."
            icon={<Waves size={20} className="text-blue-400" />}
            colorClass="text-blue-400"
          />

          <PracticeCard 
            title="Smudging Ritual"
            duration={10}
            description="Use sage, palo santo, or incense to clear stagnant energy from your field and space. Move the smoke around your entire body, focusing on the areas above your head and below your feet."
            icon={<Wind size={20} className="text-slate-300" />}
            colorClass="text-slate-300"
          />

          <PracticeCard 
            title="Grounding (Earthing)"
            duration={15}
            description="Walk barefoot on the earth or visualize roots growing from your feet into the core of the planet. This discharges excess static and anchors your field to the stabilizing frequency of Gaia."
            icon={<Mountain size={20} className="text-emerald-400" />}
            colorClass="text-emerald-400"
          />

          <PracticeCard 
            title="Crystal Shielding"
            duration={1}
            description="Carry or wear protective stones like Black Tourmaline, Selenite, or Labradorite. These stones act as secondary filters, absorbing or transmuting lower frequencies before they reach your aura."
            icon={<Gem size={20} className="text-purple-400" />}
            colorClass="text-purple-400"
          />

          <PracticeCard 
            title="Sound Bathing"
            duration={15}
            description="Expose your field to 417Hz (clearing negativity) or 741Hz (detoxifying the aura). The sound waves vibrate through your layers, shaking loose any energetic 'barnacles' or attachments."
            icon={<Bell size={20} className="text-indigo-400" />}
            colorClass="text-indigo-400"
            frequency={417}
          />

          <PracticeCard 
            title="Sunlight Charging"
            duration={10}
            description="Spend 10 minutes in direct sunlight to recharge your etheric body and boost vitality. The sun's full-spectrum light provides essential nourishment for your energetic layers."
            icon={<SunMedium size={20} className="text-orange-400" />}
            colorClass="text-orange-400"
          />

          <PracticeCard 
            title="Breath of Fire"
            duration={3}
            description="Rapid, rhythmic nasal breathing to clear the nadis and strengthen the radiant body. This practice generates internal heat that burns through energetic blockages and expands your field."
            icon={<Flame size={20} className="text-red-400" />}
            colorClass="text-red-400"
          />

          <PracticeCard 
            title="Violet Flame Invocation"
            duration={7}
            description="Visualize a vibrant violet flame consuming all lower frequencies and transmuting them into pure light. This is the ultimate tool for rapid energetic alchemy and karmic clearing."
            icon={<Zap size={20} className="text-purple-500" />}
            colorClass="text-purple-500"
          />

          <PracticeCard 
            title="Aura Sealing"
            duration={2}
            description="Before sleep, visualize a silver thread sewing up any tears or leaks in your aura. This prevents energy loss during the dream state and protects you from external astral influences."
            icon={<Shield size={20} className="text-slate-400" />}
            colorClass="text-slate-400"
          />

          <PracticeCard 
            title="Pranic Shower"
            duration={5}
            description="Visualize a waterfall of pure white light washing over you, carrying away all debris. Feel it penetrating every layer of your aura, leaving you refreshed and luminous."
            icon={<Sparkles size={20} className="text-blue-300" />}
            colorClass="text-blue-300"
          />
        </>
      )}

      {activeTab === 'scanner' && (
        <AuraScanner />
      )}

      {activeTab === 'checkin' && (
        <>
          <Card className="space-y-8">
            <div className="space-y-4">
              <h3 className="font-bold text-white text-sm uppercase tracking-wider">Overall Aura Strength</h3>
              <div className="grid grid-cols-5 gap-2">
                {[1, 2, 3, 4, 5].map((num) => (
                  <button
                    key={num}
                    onClick={() => setStrength(num)}
                    className={cn(
                      "py-3 rounded-lg border transition-all font-bold",
                      strength === num 
                        ? "bg-purple-500 border-purple-400 text-white shadow-[0_0_15px_rgba(168,85,247,0.4)]" 
                        : "bg-white/5 border-white/10 text-slate-400 hover:bg-white/10"
                    )}
                  >
                    {num}
                  </button>
                ))}
              </div>
              <div className="flex justify-between text-[10px] uppercase tracking-widest text-slate-500 font-bold px-1">
                <span>Depleted</span>
                <span>Radiant</span>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-bold text-white text-sm uppercase tracking-wider">Clarity</h3>
              <div className="grid grid-cols-5 gap-2">
                {[1, 2, 3, 4, 5].map((num) => (
                  <button
                    key={num}
                    onClick={() => setClarity(num)}
                    className={cn(
                      "py-3 rounded-lg border transition-all font-bold",
                      clarity === num 
                        ? "bg-purple-500 border-purple-400 text-white shadow-[0_0_15px_rgba(168,85,247,0.4)]" 
                        : "bg-white/5 border-white/10 text-slate-400 hover:bg-white/10"
                    )}
                  >
                    {num}
                  </button>
                ))}
              </div>
              <div className="flex justify-between text-[10px] uppercase tracking-widest text-slate-500 font-bold px-1">
                <span>Foggy</span>
                <span>Crystal Clear</span>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-bold text-white text-sm uppercase tracking-wider">Protection Level</h3>
              <div className="grid grid-cols-5 gap-2">
                {[1, 2, 3, 4, 5].map((num) => (
                  <button
                    key={num}
                    onClick={() => setProtection(num)}
                    className={cn(
                      "py-3 rounded-lg border transition-all font-bold",
                      protection === num 
                        ? "bg-purple-500 border-purple-400 text-white shadow-[0_0_15px_rgba(168,85,247,0.4)]" 
                        : "bg-white/5 border-white/10 text-slate-400 hover:bg-white/10"
                    )}
                  >
                    {num}
                  </button>
                ))}
              </div>
              <div className="flex justify-between text-[10px] uppercase tracking-widest text-slate-500 font-bold px-1">
                <span>Porous</span>
                <span>Sealed</span>
              </div>
            </div>
          </Card>
          
          <Card>
            <h3 className="font-bold mb-4 text-white text-sm uppercase tracking-wider">Current Emotional State</h3>
            <textarea 
              placeholder="How are you feeling right now?"
              className="w-full bg-black/40 border border-white/10 rounded-xl p-4 text-white placeholder-slate-600 focus:outline-none focus:border-purple-500 min-h-[100px] resize-none text-sm shadow-inner"
            />
          </Card>
          
          <Card>
            <h3 className="font-bold mb-4 text-white text-sm uppercase tracking-wider">Notes (Optional)</h3>
            <textarea 
              value={notes}
              onChange={e => setNotes(e.target.value)}
              placeholder="Any observations about your energetic environment or interactions today?"
              className="w-full bg-black/40 border border-white/10 rounded-xl p-4 text-white placeholder-slate-600 focus:outline-none focus:border-purple-500 min-h-[100px] resize-none text-sm shadow-inner"
            />
          </Card>
          
          <button 
            onClick={handleSave}
            className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-black text-lg hover:from-purple-500 hover:to-indigo-500 transition-all shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] uppercase tracking-widest lg:col-span-2 xl:col-span-3"
          >
            {isSaved ? 'Aura Recorded!' : 'Record Aura Check-In'}
          </button>
        </>
      )}
    </PageLayout>
  );
}
