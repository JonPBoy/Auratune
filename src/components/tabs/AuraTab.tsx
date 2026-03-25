import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sun, BookOpen, Activity, CheckCircle2, Shield, Zap, Sparkles, Star, Waves, Wind, Mountain, Gem, Bell, SunMedium, Flame, Camera, Scissors, ChevronDown, ChevronUp, Clock, Trash2, Eye, Dna } from 'lucide-react';
import { PageLayout } from '../PageLayout';
import { Card } from '../ui/Card';
import { Rating } from '../ui/Rating';
import { cn } from '../../lib/utils';
import { PracticeCard } from '../PracticeCard';
import { AuraScanner } from '../AuraScanner';

export function AuraTab() {
  const [activeTab, setActiveTab] = useState('learn');
  const [activePracticeSubTab, setActivePracticeSubTab] = useState('hygiene');
  const [strength, setStrength] = useState(3);
  const [clarity, setClarity] = useState(3);
  const [protection, setProtection] = useState(3);
  const [notes, setNotes] = useState('');

  const [showStrengthInfo, setShowStrengthInfo] = useState(false);
  const [showClarityInfo, setShowClarityInfo] = useState(false);
  const [showProtectionInfo, setShowProtectionInfo] = useState(false);

  const [isSaved, setIsSaved] = useState(false);
  const [history, setHistory] = useState<any[]>([]);

  useEffect(() => {
    const savedLogs = JSON.parse(localStorage.getItem('aura_logs') || '[]');
    setHistory(savedLogs);
  }, []);

  const handleSave = () => {
    const log = { strength, clarity, protection, notes, date: new Date().toISOString() };
    const existingLogs = JSON.parse(localStorage.getItem('aura_logs') || '[]');
    const newLogs = [log, ...existingLogs];
    localStorage.setItem('aura_logs', JSON.stringify(newLogs));
    setHistory(newLogs);
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2000);
  };

  const clearHistory = () => {
    if (window.confirm('Are you sure you want to clear your aura check-in history?')) {
      localStorage.removeItem('aura_logs');
      setHistory([]);
    }
  };

  const tabs = [
    { id: 'learn', label: 'Learn', icon: BookOpen },
    { id: 'practice', label: 'Practice', icon: Activity },
    { id: 'scanner', label: 'Scanner', icon: Camera },
    { id: 'checkin', label: 'Check-In', icon: CheckCircle2 },
  ];

  const getLevelColor = (num: number, isSelected: boolean) => {
    if (!isSelected) return "bg-white/5 border-white/10 text-slate-400 hover:bg-white/10";
    
    switch (num) {
      case 1: return "bg-red-500 border-red-400 text-white shadow-[0_0_20px_rgba(239,68,68,0.6)] scale-110 z-10 border-2";
      case 2: return "bg-orange-500 border-orange-400 text-white shadow-[0_0_20px_rgba(249,115,22,0.6)] scale-110 z-10 border-2";
      case 3: return "bg-yellow-500 border-yellow-400 text-white shadow-[0_0_20px_rgba(234,179,8,0.6)] scale-110 z-10 border-2";
      case 4: return "bg-emerald-500 border-emerald-400 text-white shadow-[0_0_20px_rgba(16,185,129,0.6)] scale-110 z-10 border-2";
      case 5: return "bg-purple-500 border-purple-400 text-white shadow-[0_0_20px_rgba(168,85,247,0.6)] scale-110 z-10 border-2";
      default: return "bg-purple-500 border-purple-400 text-white shadow-[0_0_20px_rgba(168,85,247,0.6)] scale-110 z-10 border-2";
    }
  };

  const practiceSubTabs = [
    { id: 'hygiene', label: 'Energetic Hygiene', icon: Sparkles, color: 'emerald' },
    { id: 'protection', label: 'Protection', icon: Shield, color: 'blue' },
    { id: 'attunement', label: 'Attunement', icon: Zap, color: 'purple' },
  ];

  const getPracticeSubTabStyle = (id: string, isActive: boolean) => {
    if (isActive) {
      switch (id) {
        case 'hygiene': return "bg-emerald-500 text-white shadow-[0_0_20px_rgba(16,185,129,0.4)]";
        case 'protection': return "bg-blue-500 text-white shadow-[0_0_20px_rgba(59,130,246,0.4)]";
        case 'attunement': return "bg-purple-500 text-white shadow-[0_0_20px_rgba(168,85,247,0.4)]";
        default: return "bg-purple-500 text-white";
      }
    }
    switch (id) {
      case 'hygiene': return "text-slate-500 hover:text-emerald-400 hover:bg-emerald-500/10";
      case 'protection': return "text-slate-500 hover:text-blue-400 hover:bg-blue-500/10";
      case 'attunement': return "text-slate-500 hover:text-purple-400 hover:bg-purple-500/10";
      default: return "text-slate-500 hover:text-white hover:bg-white/5";
    }
  };

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
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6 lg:col-span-2 xl:col-span-3"
        >
          <Card className="border-purple-500/30 bg-gradient-to-br from-purple-900/20 to-cosmic-card relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
              <Shield size={120} />
            </div>
            <h3 className="text-2xl font-black mb-6 text-purple-300 flex items-center gap-2 tracking-wide uppercase">
              <Sparkles size={24} className="text-purple-400" />
              The Luminous Field
            </h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative z-10">
              <div className="space-y-4">
                <p className="text-slate-300 text-base leading-relaxed">
                  Your aura, or **Luminous Field**, is a complex, multi-layered electromagnetic field that surrounds and interpenetrates your physical body. It acts as your energetic skin, a sophisticated filter that manages the flow of information between your inner self and the external universe.
                </p>
                <p className="text-slate-400 text-sm leading-relaxed">
                  This field is not static; it is a dynamic, breathing entity that pulses with light and color. It reflects your physical health, emotional state, mental clarity, and spiritual evolution. A healthy, vibrant aura is your primary defense against environmental stress, emotional contagion, and energetic depletion.
                </p>
                <div className="p-4 rounded-xl bg-purple-500/10 border border-purple-500/20">
                  <p className="text-xs text-purple-300 italic">
                    "The aura is the mirror of the soul. It reveals the truth of our being before a single word is spoken."
                  </p>
                </div>
              </div>

              <div className="flex justify-center items-center py-8">
                <div className="relative w-full h-48 flex items-center justify-center bg-purple-900/10 rounded-3xl border border-purple-500/20 overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-500/20 via-transparent to-transparent animate-pulse" />
                  <div className="relative z-10 text-center p-6">
                    <Shield size={48} className="text-purple-400 mx-auto mb-4 opacity-50" />
                    <p className="text-purple-300 font-bold tracking-widest uppercase text-sm">Energetic Field Protection</p>
                    <p className="text-slate-500 text-xs mt-2">Your luminous boundary is active and shielding.</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
          
          <Card className="border-slate-800 bg-black/40">
            <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-t from-red-500 via-emerald-500 to-purple-500 blur-[2px]" />
              The Seven Layers of Being
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { 
                  name: '1. The Etheric Body', 
                  title: 'The Physical Blueprint',
                  desc: 'The closest layer to the physical body, extending about 1-2 inches out. It is the energetic blueprint for your physical form, reflecting your immediate vitality, survival instincts, and the health of your organs and systems.', 
                  color: 'border-red-500/50',
                  icon: '🔴'
                },
                { 
                  name: '2. The Emotional Body', 
                  title: 'The Sea of Feeling',
                  desc: 'Associated with your feelings, desires, and emotional processing. This layer is fluid and constantly changing color and density based on your current mood and emotional maturity.', 
                  color: 'border-orange-500/50',
                  icon: '🟠'
                },
                { 
                  name: '3. The Mental Body', 
                  title: 'The Sphere of Thought',
                  desc: 'Contains your thoughts, beliefs, and cognitive patterns. A clear mental body allows for rational decision-making and focused intention, while a congested one leads to confusion and obsessive thinking.', 
                  color: 'border-yellow-500/50',
                  icon: '🟡'
                },
                { 
                  name: '4. The Astral Body', 
                  title: 'The Bridge of Love',
                  desc: 'The bridge between the lower physical/mental realms and the higher spiritual realms. It is the seat of unconditional love and governs our connections and relationships with others.', 
                  color: 'border-emerald-500/50',
                  icon: '🟢'
                },
                { 
                  name: '5. The Etheric Template', 
                  title: 'The Divine Blueprint',
                  desc: 'The template for the physical body on a spiritual level. It represents the "negative space" of the physical form and is where the divine will manifests into the blueprint of your existence.', 
                  color: 'border-blue-500/50',
                  icon: '🔵'
                },
                { 
                  name: '6. The Celestial Body', 
                  title: 'The Light of Ecstasy',
                  desc: 'The layer of spiritual ecstasy and unconditional love for the divine. It is where we experience the "oneness" of the universe and connect with higher spiritual guidance through meditation and prayer.', 
                  color: 'border-indigo-500/50',
                  icon: '🟣'
                },
                { 
                  name: '7. The Ketheric Template', 
                  title: 'The Golden Egg',
                  desc: 'The outermost layer that protects and contains all the others. It connects you to Source and Divine Will, acting as a resilient golden shield that holds the integrity of your entire luminous field.', 
                  color: 'border-purple-500/50',
                  icon: '✨'
                },
              ].map((layer, i) => (
                <div key={i} className={cn("p-5 rounded-2xl border-l-4 bg-white/5 hover:bg-white/10 transition-all", layer.color)}>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xl">{layer.icon}</span>
                    <div>
                      <h4 className="font-bold text-base text-slate-100">{layer.name}</h4>
                      <p className="text-xs font-medium text-purple-400 uppercase tracking-wider">{layer.title}</p>
                    </div>
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed">{layer.desc}</p>
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
        </motion.div>
      )}

      {activeTab === 'practice' && (
        <div className="space-y-6 lg:col-span-2 xl:col-span-3">
          <div className="flex flex-wrap gap-2 mb-6 bg-black/40 p-1 rounded-2xl border border-white/5">
            {practiceSubTabs.map((subTab) => (
              <button
                key={subTab.id}
                onClick={() => setActivePracticeSubTab(subTab.id)}
                className={cn(
                  "flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all duration-300",
                  getPracticeSubTabStyle(subTab.id, activePracticeSubTab === subTab.id)
                )}
              >
                <subTab.icon size={14} />
                {subTab.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-1 gap-6">
            <AnimatePresence mode="wait">
              {activePracticeSubTab === 'hygiene' && (
                <motion.div
                  key="hygiene"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-1 gap-6"
                >
                  <PracticeCard 
                    title="Grounding (Earthing)"
                    duration={15}
                    description="Walk barefoot on the earth—grass, dirt, or sand—or sit quietly and visualize thick, luminous roots growing from the soles of your feet deep into the crystalline core of the planet. This vital practice discharges excess static, anxiety, and electromagnetic buildup, anchoring your field to the stabilizing, nurturing frequency of Gaia."
                    icon={<Mountain size={20} className="text-emerald-400" />}
                    colorClass="text-emerald-400"
                  />
                  <PracticeCard 
                    title="Salt Water Cleansing"
                    duration={20}
                    description="Immerse yourself in a warm bath infused with sea salt, Epsom salt, or Himalayan salt. The salt acts as a natural energetic magnet, drawing out toxins, heavy debris, and stagnant emotional residue from your auric field. As you soak, visualize the water absorbing any darkness or heaviness, leaving your energetic body recalibrated, light, and deeply cleansed."
                    icon={<Waves size={20} className="text-blue-400" />}
                    colorClass="text-blue-400"
                  />
                  <PracticeCard 
                    title="Smudging Ritual"
                    duration={10}
                    description="Use sacred smoke from sage, palo santo, sweetgrass, or high-quality incense to clear stagnant energy from your field and your physical space. Move the smoke intentionally around your entire body, paying special attention to the areas above your head (crown chakra), the back of your neck, and below your feet. Set a firm intention that the smoke dissolves all lower frequencies."
                    icon={<Wind size={20} className="text-slate-300" />}
                    colorClass="text-slate-300"
                  />
                  <PracticeCard 
                    title="Pranic Shower"
                    duration={5}
                    description="Stand or sit and visualize a magnificent waterfall of pure, sparkling white light washing over you from the cosmos. Feel it carrying away all debris, stress, and other people's energy. See it penetrating every single layer of your aura, flushing out stagnation and leaving you feeling completely refreshed, luminous, and sovereign."
                    icon={<Sparkles size={20} className="text-blue-300" />}
                    colorClass="text-blue-300"
                  />
                  <PracticeCard 
                    title="Aura Combing"
                    duration={3}
                    description="Using your hands as energetic combs, sweep through the space a few inches away from your physical body, starting from the crown of your head down to your feet. Visualize your fingers untangling any energetic knots and flicking away stagnant energy into a violet flame for transmutation."
                    icon={<Wind size={20} className="text-teal-400" />}
                    colorClass="text-teal-400"
                  />
                </motion.div>
              )}

              {activePracticeSubTab === 'protection' && (
                <motion.div
                  key="protection"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-1 gap-6"
                >
                  <PracticeCard 
                    title="Crystal Shielding"
                    duration={5}
                    description="Hold or wear protective stones like Black Tourmaline, Selenite, Obsidian, or Labradorite. Program the crystal by holding it to your heart and setting the intention that it acts as a secondary filter for your aura. These stones absorb, deflect, or transmute lower frequencies and psychic debris before they can penetrate your personal energy field."
                    icon={<Gem size={20} className="text-purple-400" />}
                    colorClass="text-purple-400"
                  />
                  <PracticeCard 
                    title="Golden Sphere Visualization"
                    duration={5}
                    description="Visualize a brilliant sphere of golden light surrounding your entire physical body, extending about an arm's length in every direction. See this light as a semi-permeable membrane. It allows love, joy, and high-frequency energy in, but acts as an impenetrable shield against density, stress, and negativity. Command it to filter all incoming energy, keeping only that which serves your highest good."
                    icon={<Star size={20} className="text-yellow-400" />}
                    colorClass="text-yellow-400"
                  />
                  <PracticeCard 
                    title="Aura Sealing"
                    duration={5}
                    description="Before sleep, or after a draining interaction, visualize a silver or golden thread sewing up any tears, holes, or leaks in your aura. Imagine zipping up your energy field from your feet to the top of your head. This prevents energy loss during the dream state and protects you from external astral influences or psychic vampirism."
                    icon={<Shield size={20} className="text-slate-400" />}
                    colorClass="text-slate-400"
                  />
                </motion.div>
              )}

              {activePracticeSubTab === 'attunement' && (
                <motion.div
                  key="attunement"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-1 gap-6"
                >
                  <PracticeCard 
                    title="Sound Bathing"
                    duration={15}
                    description="Expose your auric field to specific healing frequencies, such as 417Hz (clearing negativity and facilitating change) or 741Hz (detoxifying the aura and awakening intuition). Allow the sound waves to vibrate through your energetic layers, shaking loose any energetic 'barnacles', attachments, or discordant vibrations that have accumulated throughout the day."
                    icon={<Bell size={20} className="text-indigo-400" />}
                    colorClass="text-indigo-400"
                    frequency={417}
                  />
                  <PracticeCard 
                    title="Sunlight Charging"
                    duration={10}
                    description="Spend 10 to 15 minutes in direct, gentle sunlight (preferably morning or late afternoon) to recharge your etheric body and boost your overall vitality. The sun's full-spectrum light provides essential prana (life force) nourishment for your energetic layers, expanding your aura and increasing its natural radiance and magnetic pull."
                    icon={<SunMedium size={20} className="text-orange-400" />}
                    colorClass="text-orange-400"
                  />
                  <PracticeCard 
                    title="Breath of Fire"
                    duration={3}
                    description="Engage in rapid, rhythmic nasal breathing (focusing on the xhale while pumping the navel) to clear the nadis (energy channels) and strengthen the radiant body. This powerful Kundalini practice generates internal heat that burns through energetic blockages, oxygenates the blood, and rapidly expands your electromagnetic field."
                    icon={<Flame size={20} className="text-red-400" />}
                    colorClass="text-red-400"
                  />
                  <PracticeCard 
                    title="Violet Flame Invocation"
                    duration={7}
                    description="Visualize a vibrant, roaring violet flame consuming all lower frequencies, past traumas, and karmic density within and around you. See this spiritual fire transmuting heavy energy into pure, sparkling light. This is considered the ultimate tool for rapid energetic alchemy, forgiveness, and deep karmic clearing."
                    icon={<Zap size={20} className="text-purple-500" />}
                    colorClass="text-purple-500"
                  />
                  <PracticeCard 
                    title="Energy Cord Cutting"
                    duration={10}
                    description="Identify any unhealthy energetic attachments or draining relationships. Visualize these connections as physical cords extending from your chakras. Using a visualized sword of light or a large pair of golden scissors, firmly cut these cords, reclaiming your energy and sending the other person's energy back to them with love."
                    icon={<Scissors size={20} className="text-rose-400" />}
                    colorClass="text-rose-400"
                  />
                  <PracticeCard 
                    title="Pineal Gland Meditation"
                    duration={20}
                    description="A deep guided meditation focusing on the pineal gland. Use the 'M' sound to vibrate the center of your head, stimulating the third eye and awakening higher states of consciousness, inner vision, and profound intuition."
                    icon={<Eye size={20} className="text-purple-500" />}
                    colorClass="text-purple-500"
                  />
                  <PracticeCard 
                    title="Light Language"
                    duration={5}
                    description="Speak, sing, or draw channeled frequencies of sound and light that completely bypass the logical mind to activate your dormant DNA. These multidimensional 'codes' communicate directly with your soul's original blueprint, triggering rapid shifts in consciousness and spontaneous energetic healing."
                    icon={<Dna size={20} className="text-purple-400" />}
                    colorClass="text-purple-400"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      )}

      {activeTab === 'scanner' && (
        <AuraScanner />
      )}

      {activeTab === 'checkin' && (
        <>
          <Card className="space-y-8">
            <div className="space-y-4">
              <button 
                onClick={() => setShowStrengthInfo(!showStrengthInfo)}
                className="flex items-center justify-between w-full text-left"
              >
                <h3 className="font-bold text-white text-lg uppercase tracking-wider">Overall Aura Strength</h3>
                {showStrengthInfo ? <ChevronUp size={20} className="text-slate-400" /> : <ChevronDown size={20} className="text-slate-400" />}
              </button>
              {showStrengthInfo && (
                <div className="p-3 bg-black/30 rounded-lg border border-white/5 text-sm text-slate-300">
                  <p><strong>Overall Aura Strength</strong> indicates the vitality and reach of your energetic field. A strong aura (Radiant) acts as a powerful buffer against external energies, while a weak aura (Depleted) leaves you feeling drained and susceptible to the moods of others.</p>
                </div>
              )}
              <div className="grid grid-cols-5 gap-2">
                {[1, 2, 3, 4, 5].map((num) => (
                  <motion.button
                    key={num}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setStrength(num)}
                    className={cn(
                      "py-3 rounded-lg border transition-all font-bold",
                      getLevelColor(num, strength === num)
                    )}
                  >
                    {num}
                  </motion.button>
                ))}
              </div>
              <div className="flex justify-between text-[10px] uppercase tracking-widest text-slate-500 font-bold px-1">
                <span>Depleted</span>
                <span>Radiant</span>
              </div>
            </div>

            <div className="space-y-4">
              <button 
                onClick={() => setShowClarityInfo(!showClarityInfo)}
                className="flex items-center justify-between w-full text-left"
              >
                <h3 className="font-bold text-white text-lg uppercase tracking-wider">Clarity</h3>
                {showClarityInfo ? <ChevronUp size={20} className="text-slate-400" /> : <ChevronDown size={20} className="text-slate-400" />}
              </button>
              {showClarityInfo && (
                <div className="p-3 bg-black/30 rounded-lg border border-white/5 text-sm text-slate-300">
                  <p><strong>Clarity</strong> measures how clear and unclouded your energy is. High clarity (Crystal Clear) means you have sharp intuition and mental focus. Low clarity (Foggy) suggests energetic stagnation, confusion, or absorbing too much external "noise."</p>
                </div>
              )}
              <div className="grid grid-cols-5 gap-2">
                {[1, 2, 3, 4, 5].map((num) => (
                  <motion.button
                    key={num}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setClarity(num)}
                    className={cn(
                      "py-3 rounded-lg border transition-all font-bold",
                      getLevelColor(num, clarity === num)
                    )}
                  >
                    {num}
                  </motion.button>
                ))}
              </div>
              <div className="flex justify-between text-[10px] uppercase tracking-widest text-slate-500 font-bold px-1">
                <span>Foggy</span>
                <span>Crystal Clear</span>
              </div>
            </div>

            <div className="space-y-4">
              <button 
                onClick={() => setShowProtectionInfo(!showProtectionInfo)}
                className="flex items-center justify-between w-full text-left"
              >
                <h3 className="font-bold text-white text-lg uppercase tracking-wider">Protection Level</h3>
                {showProtectionInfo ? <ChevronUp size={20} className="text-slate-400" /> : <ChevronDown size={20} className="text-slate-400" />}
              </button>
              {showProtectionInfo && (
                <div className="p-3 bg-black/30 rounded-lg border border-white/5 text-sm text-slate-300">
                  <p><strong>Protection Level</strong> reflects the integrity of your auric boundaries. A sealed aura prevents energy leaks and blocks unwanted psychic attachments. A porous aura means your boundaries are weak, making you prone to taking on others' emotions or feeling overwhelmed in crowds.</p>
                </div>
              )}
              <div className="grid grid-cols-5 gap-2">
                {[1, 2, 3, 4, 5].map((num) => (
                  <motion.button
                    key={num}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setProtection(num)}
                    className={cn(
                      "py-3 rounded-lg border transition-all font-bold",
                      getLevelColor(num, protection === num)
                    )}
                  >
                    {num}
                  </motion.button>
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

          {history.length > 0 && (
            <Card className="lg:col-span-2 xl:col-span-3">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-white text-lg flex items-center gap-2">
                  <Clock size={20} className="text-purple-400" />
                  Aura History
                </h3>
                <button 
                  onClick={clearHistory}
                  className="text-slate-500 hover:text-red-400 transition-colors"
                  title="Clear History"
                >
                  <Trash2 size={18} />
                </button>
              </div>
              
              <div className="space-y-4">
                {history.map((log, index) => (
                  <div key={index} className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                        {new Date(log.date).toLocaleDateString()} at {new Date(log.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-2">
                      <div className="flex flex-col items-center p-2 rounded-lg bg-white/5 border border-white/5">
                        <span className="text-[8px] text-slate-500 uppercase font-bold mb-1">Strength</span>
                        <div className={cn("w-full h-1 rounded-full mb-1", getLevelColor(log.strength, true).split(' ')[0])} />
                        <span className="text-xs font-black text-white">{log.strength}</span>
                      </div>
                      <div className="flex flex-col items-center p-2 rounded-lg bg-white/5 border border-white/5">
                        <span className="text-[8px] text-slate-500 uppercase font-bold mb-1">Clarity</span>
                        <div className={cn("w-full h-1 rounded-full mb-1", getLevelColor(log.clarity, true).split(' ')[0])} />
                        <span className="text-xs font-black text-white">{log.clarity}</span>
                      </div>
                      <div className="flex flex-col items-center p-2 rounded-lg bg-white/5 border border-white/5">
                        <span className="text-[8px] text-slate-500 uppercase font-bold mb-1">Protection</span>
                        <div className={cn("w-full h-1 rounded-full mb-1", getLevelColor(log.protection, true).split(' ')[0])} />
                        <span className="text-xs font-black text-white">{log.protection}</span>
                      </div>
                    </div>
                    
                    {log.notes && (
                      <p className="text-xs text-slate-400 italic leading-relaxed border-t border-white/5 pt-2">
                        "{log.notes}"
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </Card>
          )}
        </>
      )}
    </PageLayout>
  );
}
