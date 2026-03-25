import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Compass, BookOpen, Activity, PenTool, Sparkles, Key, Eye, Infinity, Flame, History, Moon, Heart, Puzzle, Edit3, Bed, Users, Dna, FileX, UserPlus, FileText, Map, CheckCircle2, Star, Trophy, ChevronDown, ChevronUp, Gem } from 'lucide-react';
import { PageLayout } from '../PageLayout';
import { Card } from '../ui/Card';
import { cn } from '../../lib/utils';
import { PracticeCard } from '../PracticeCard';

interface JournalEntry {
  id: string;
  date: string;
  title: string;
  reflection: string;
  notes: string;
}

export function SoulTab() {
  const [activeTab, setActiveTab] = useState('learn');
  const [title, setTitle] = useState('');
  const [reflection, setReflection] = useState('');
  const [insights, setInsights] = useState('');
  const [entries, setEntries] = useState<JournalEntry[]>([]);
  const [showHistory, setShowHistory] = useState(false);
  const [expandedConcept, setExpandedConcept] = useState<string | null>(null);
  const [selectedSoulState, setSelectedSoulState] = useState<string | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem('soul_journal_entries');
    if (saved) {
      try {
        setEntries(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to parse journal entries', e);
      }
    }
  }, []);

  const handleSave = () => {
    if (!reflection.trim() && !title.trim()) return;
    
    const newEntry: JournalEntry = {
      id: Date.now().toString(),
      date: new Date().toISOString(),
      title: title.trim() || 'Untitled Reflection',
      reflection,
      notes: insights
    };
    
    const updated = [newEntry, ...entries];
    setEntries(updated);
    localStorage.setItem('soul_journal_entries', JSON.stringify(updated));
    
    setTitle('');
    setReflection('');
    setInsights('');
    setShowHistory(true);
  };

  const tabs = [
    { id: 'learn', label: 'Learn', icon: BookOpen },
    { id: 'practice', label: 'Practice', icon: Activity },
    { id: 'journal', label: 'Journal', icon: PenTool },
    { id: 'journey', label: 'Journey', icon: Map },
  ];

  const milestones = [
    { id: 'initiation', label: 'Soul Initiation', icon: Sparkles, threshold: 1, desc: 'Your first step into the eternal essence.' },
    { id: 'reflection', label: 'Deep Reflector', icon: Moon, threshold: 3, desc: 'Three moments of profound soul introspection.' },
    { id: 'integration', label: 'Wisdom Integration', icon: Key, threshold: 7, desc: 'Seven days of aligning with your higher self.' },
    { id: 'mastery', label: 'Soul Mastery', icon: Trophy, threshold: 21, desc: 'A complete cycle of spiritual evolution.' },
  ];

  const achievedMilestones = milestones.filter(m => entries.length >= m.threshold);

  const soulStates = [
    {
      id: 'aligned',
      label: 'Aligned',
      icon: Sparkles,
      color: 'text-emerald-400',
      bgColor: 'bg-emerald-500/10',
      borderColor: 'border-emerald-500/20',
      desc: 'Deep sense of peace, frequent synchronicities, clear intuition, time distortion (flow state), effortless manifestation.',
      symptoms: ['High energy', 'Clarity', 'Synchronicity', 'Joy'],
      practices: ['Light Language', 'Higher Self Integration']
    },
    {
      id: 'misaligned',
      label: 'Misaligned',
      icon: Flame,
      color: 'text-orange-400',
      bgColor: 'bg-orange-500/10',
      borderColor: 'border-orange-500/20',
      desc: 'Feeling lost or numb, disconnected from purpose, repeating painful cycles, chronic boredom, relying on external validation.',
      symptoms: ['Fatigue', 'Confusion', 'Repetitive patterns', 'Numbness'],
      practices: ['Shadow Work', 'Soul Retrieval', 'Soul Contract Revocation']
    },
    {
      id: 'awakening',
      label: 'Awakening',
      icon: Eye,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/20',
      desc: 'Sudden shifts in perspective, intense desire for truth, dismantling of old beliefs, the "Dark Night of the Soul", ego death.',
      symptoms: ['Intense emotions', 'Vivid dreams', 'Isolation', 'Search for meaning'],
      practices: ['Automatic Writing', 'Past Life Regression', 'Akashic Access']
    },
    {
      id: 'integration',
      label: 'Integration',
      icon: Puzzle,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/20',
      desc: 'Processing new insights, grounding spiritual experiences into physical reality, stabilizing the new frequency.',
      symptoms: ['Need for rest', 'Quiet reflection', 'Subtle shifts', 'Grounding'],
      practices: ['Inner Child Healing', 'Ancestral Healing', 'Dream Journaling']
    }
  ];

  return (
    <PageLayout
      title="Soul Passport"
      subtitle="Align with your higher purpose"
      icon={Compass}
      colorClass="text-yellow-500"
      tabs={tabs}
      activeSubTab={activeTab}
      setActiveSubTab={setActiveTab}
    >
      {activeTab === 'learn' && (
        <>
          <Card className="lg:col-span-2 xl:col-span-3 border-yellow-500/30 bg-gradient-to-br from-yellow-900/20 to-cosmic-card relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
              <Infinity size={120} />
            </div>
            <h3 className="text-xl font-black mb-4 text-yellow-300 flex items-center gap-2 tracking-wide uppercase">
              <Sparkles size={20} className="text-yellow-400" />
              The Eternal Essence
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed relative z-10">
              Your soul is the eternal part of you that exists beyond time and space. It carries the wisdom of your past lives and the blueprint for your current incarnation. Aligning with your soul means living in harmony with your true purpose and the divine plan.
            </p>
          </Card>
          
          <Card>
            <h3 className="text-lg font-bold mb-6 text-white flex items-center gap-2">
              <Key size={18} className="text-yellow-500" />
              Core Soul Concepts
            </h3>
            <div className="space-y-4">
              {[
                {
                  id: 'akashic',
                  title: 'The Akashic Records',
                  icon: BookOpen,
                  color: 'border-yellow-500/20',
                  textColor: 'text-yellow-300',
                  short: "The cosmic library that contains the history of every soul's journey through time and space.",
                  details: [
                    {
                      label: 'The Cosmic Library',
                      text: 'Imagine a vast, non-physical database that records every thought, word, and action of every soul across all lifetimes. It is the "Book of Life" mentioned in many sacred traditions.'
                    },
                    {
                      label: 'Accessing the Records',
                      text: 'Access is granted through a specific vibrational shift, often achieved via the "Pathway Prayer," deep meditation, or through a trained Akashic practitioner. It requires a state of high neutrality and sacred intent.'
                    },
                    {
                      label: 'Healing Through Knowledge',
                      text: 'By accessing your records, you can uncover the root causes of current phobias, health issues, or relationship blocks that originated in other timelines, allowing for immediate energetic clearing.'
                    }
                  ]
                },
                {
                  id: 'contracts',
                  title: 'Soul Contracts',
                  icon: PenTool,
                  color: 'border-orange-500/20',
                  textColor: 'text-orange-300',
                  short: 'Agreements made before birth to learn specific lessons and grow through relationships and experiences.',
                  details: [
                    {
                      label: 'What They Are',
                      text: 'Soul contracts are pre-incarnation agreements made between souls to help each other learn, grow, and balance karma. They are not punishments, but rather divine lesson plans designed to accelerate your spiritual evolution.'
                    },
                    {
                      label: 'How They Manifest',
                      text: 'They often manifest as intense, unavoidable relationships or recurring life themes. This can include challenging family dynamics, profound romantic connections, or unexpected mentors.'
                    },
                    {
                      label: 'How to Identify Them',
                      text: 'Look for inexplicable familiarity, relationships that trigger deep wounds, or dynamics that feel "fated" and out of your logical control.'
                    }
                  ]
                },
                {
                  id: 'karma',
                  title: 'Karmic Loops',
                  icon: Activity,
                  color: 'border-red-500/20',
                  textColor: 'text-red-300',
                  short: 'Repeating patterns of behavior or experience that offer opportunities for healing and resolution.',
                  details: [
                    {
                      label: 'The Wheel of Samsara',
                      text: 'Karmic loops are repetitive cycles of experience that occur when a soul has not yet fully integrated the lesson a particular challenge was designed to teach.'
                    },
                    {
                      label: 'Identifying the Pattern',
                      text: 'These loops often manifest as "the same person with a different face" or recurring financial, health, or emotional crises that seem to happen regardless of your external circumstances.'
                    },
                    {
                      label: 'Breaking the Cycle',
                      text: 'The loop breaks the moment you achieve a "higher perspective." This involves radical forgiveness, taking full responsibility for your vibration, and choosing a response not driven by the old egoic program.'
                    }
                  ]
                }
              ].map((concept) => (
                <div 
                  key={concept.id} 
                  className={cn(
                    "p-4 rounded-xl bg-black/40 border transition-all cursor-pointer hover:bg-black/60",
                    concept.color,
                    expandedConcept === concept.id && "border-white/20 bg-black/80"
                  )}
                  onClick={() => setExpandedConcept(expandedConcept === concept.id ? null : concept.id)}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className={cn("font-bold text-sm flex items-center gap-2", concept.textColor)}>
                      <concept.icon size={14} /> {concept.title}
                    </h4>
                    {expandedConcept === concept.id ? <ChevronUp size={14} className="text-slate-500" /> : <ChevronDown size={14} className="text-slate-500" />}
                  </div>
                  
                  <AnimatePresence mode="wait">
                    {expandedConcept === concept.id ? (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="space-y-4 pt-2">
                          {concept.details.map((detail, idx) => (
                            <div key={idx} className="space-y-1">
                              <h5 className={cn("text-[10px] font-black uppercase tracking-widest", concept.textColor)}>{detail.label}</h5>
                              <p className="text-xs text-slate-400 leading-relaxed">{detail.text}</p>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    ) : (
                      <p className="text-xs text-slate-400 leading-relaxed">{concept.short}</p>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </Card>

          <Card className="lg:col-span-1 xl:col-span-1 border-yellow-500/20">
            <h3 className="text-lg font-bold mb-6 text-white flex items-center gap-2">
              <Eye size={18} className="text-yellow-500" />
              Soul State Analysis
            </h3>
            
            <div className="grid grid-cols-2 gap-3 mb-6">
              {soulStates.map((state) => (
                <button
                  key={state.id}
                  onClick={() => setSelectedSoulState(selectedSoulState === state.id ? null : state.id)}
                  className={cn(
                    "p-3 rounded-xl border transition-all flex flex-col items-center gap-2 text-center group",
                    selectedSoulState === state.id 
                      ? cn(state.bgColor, state.borderColor, "scale-105 shadow-lg") 
                      : "bg-black/40 border-white/5 hover:bg-black/60"
                  )}
                >
                  <state.icon size={20} className={cn("transition-transform group-hover:scale-110", selectedSoulState === state.id ? state.color : "text-slate-500")} />
                  <span className={cn("text-[10px] font-black uppercase tracking-widest", selectedSoulState === state.id ? state.color : "text-slate-400")}>
                    {state.label}
                  </span>
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              {selectedSoulState ? (
                <motion.div
                  key={selectedSoulState}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-4"
                >
                  {soulStates.filter(s => s.id === selectedSoulState).map(state => (
                    <div key={state.id} className="space-y-4">
                      <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                        <h4 className={cn("text-xs font-bold uppercase tracking-widest mb-2", state.color)}>Current Resonance</h4>
                        <p className="text-xs text-slate-400 leading-relaxed">{state.desc}</p>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-500">Key Symptoms</h4>
                          <div className="flex flex-wrap gap-1">
                            {state.symptoms.map(s => (
                              <span key={s} className="text-[8px] bg-white/5 px-2 py-0.5 rounded text-slate-400 border border-white/5">{s}</span>
                            ))}
                          </div>
                        </div>
                        <div className="space-y-2">
                          <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-500">Recommended</h4>
                          <div className="flex flex-wrap gap-1">
                            {state.practices.map(p => (
                              <span key={p} className="text-[8px] bg-yellow-500/10 px-2 py-0.5 rounded text-yellow-500 border border-yellow-500/20">{p}</span>
                            ))}
                          </div>
                        </div>
                      </div>

                      <button 
                        onClick={() => setActiveTab('practice')}
                        className="w-full py-2 rounded-lg bg-yellow-500 text-black text-[10px] font-black uppercase tracking-widest hover:bg-yellow-400 transition-colors"
                      >
                        Go to Practices
                      </button>
                    </div>
                  ))}
                </motion.div>
              ) : (
                <div className="text-center py-8 px-4 border border-dashed border-white/10 rounded-xl">
                  <p className="text-xs text-slate-500 italic">Select a state above to analyze your soul's current vibrational alignment and receive recommended practices.</p>
                </div>
              )}
            </AnimatePresence>
          </Card>
        </>
      )}

      {activeTab === 'practice' && (
        <>
          <PracticeCard 
            title="Past Life Regression"
            duration={45}
            description="Use guided meditation to access deep memories of previous incarnations and resolve karmic imprints. This profound practice helps you understand the root causes of current life patterns, unexplained phobias, and intense soulmate connections, allowing for profound soul-level healing and integration of past wisdom."
            icon={<History size={20} className="text-yellow-400" />}
            colorClass="text-yellow-400"
          />
          
          <PracticeCard 
            title="Shadow Work"
            duration={30}
            description="Identify, accept, and integrate the hidden, suppressed, or 'unacceptable' parts of your psyche to achieve true wholeness. By bringing the light of conscious awareness to your shadow, you reclaim the immense power, creativity, and potential that was previously locked away in your subconscious mind."
            icon={<Moon size={20} className="text-slate-300" />}
            colorClass="text-slate-300"
          />

          <PracticeCard 
            title="Inner Child Healing"
            duration={20}
            description="Connect with your younger self to heal deep-seated childhood wounds and reclaim your natural state of joy and innocence. This practice involves actively nurturing, reparenting, and validating the parts of you that felt unseen, unheard, or unsupported in the past, creating a foundation of profound self-love."
            icon={<Heart size={20} className="text-red-400" />}
            colorClass="text-red-400"
          />

          <PracticeCard 
            title="Soul Retrieval"
            duration={60}
            description="A profound shamanic journey designed to call back fractured soul fragments that may have split away during moments of severe trauma, shock, or deep heartbreak as a survival mechanism. By entering a deep theta state, you will travel to the non-ordinary reality to locate these missing pieces of your vital essence. This practice restores your vital power, clears chronic numbness, and brings a sense of profound completeness to your current life experience.

            Guided Meditation Start: 'Find a comfortable position and close your eyes. Breathe deeply into your heart space, feeling a golden cord anchoring you to the core of the Earth. Visualize a lush, ancient forest appearing before you. This is the gateway to your inner landscape. As you step onto the soft moss, state your intention clearly: I am here to reclaim my wholeness. I call back all parts of my soul that are ready to return home...'"
            icon={<Gem size={20} className="text-emerald-400" />}
            colorClass="text-emerald-400"
          />

          <PracticeCard 
            title="Automatic Writing"
            duration={15}
            description="Enter a light trance state and allow your higher self or spirit guides to speak through your pen without conscious interference. This technique bypasses the ego's analytical filters, providing direct, unfiltered access to soul-level wisdom, profound insights, and specific guidance for your current life path."
            icon={<Edit3 size={20} className="text-blue-400" />}
            colorClass="text-blue-400"
          />

          <PracticeCard 
            title="Dream Journaling"
            duration={10}
            description="Keep a journal by your bed and record your dreams immediately upon waking to decode messages from your subconscious and the astral realm. Your dreams are a nightly communication from your soul, offering symbolic insights, premonitions, and warnings that the waking, logical mind might easily miss."
            icon={<Bed size={20} className="text-indigo-400" />}
            colorClass="text-indigo-400"
          />

          <PracticeCard 
            title="Ancestral Healing"
            duration={30}
            description="Heal generational patterns, limiting beliefs, and traumas passed down through your genetic lineage. By consciously acknowledging and clearing these inherited imprints, you free yourself and future generations from the heavy weight of the past, breaking cycles of suffering in your family line."
            icon={<Users size={20} className="text-orange-400" />}
            colorClass="text-orange-400"
          />

          <PracticeCard 
            title="Light Language"
            duration={5}
            description="Speak, sing, or draw channeled frequencies of sound and light that completely bypass the logical mind to activate your dormant DNA. These multidimensional 'codes' communicate directly with your soul's original blueprint, triggering rapid shifts in consciousness and spontaneous energetic healing."
            icon={<Dna size={20} className="text-purple-400" />}
            colorClass="text-purple-400"
          />

          <PracticeCard 
            title="Akashic Access"
            duration={20}
            description="Visualize entering the Great Library of the Universe to read your own soul's eternal record. Ask your guides specific questions about your life purpose, current challenges, karmic contracts, and the highest potential timeline available to you right now. Trust the first impressions you receive."
            icon={<BookOpen size={20} className="text-white" />}
            colorClass="text-white"
          />

          <PracticeCard 
            title="Sovereign Soul Decree"
            duration={5}
            description="Stand firmly and speak your soul's ultimate truth aloud with unwavering authority. 'I am an eternal being of light. I am here for a divine purpose. I am fully aligned with my highest destiny.' This practice anchors your soul's high frequency directly into your physical reality and cellular structure."
            icon={<Compass size={20} className="text-yellow-500" />}
            colorClass="text-yellow-500"
          />

          <PracticeCard 
            title="Starseed Activation"
            duration={15}
            description="Meditate to connect with your cosmic origins and galactic family (Pleiadian, Sirian, Arcturian, etc.). This practice helps you remember your specific mission on Earth, awakens dormant spiritual technologies within your lightbody, and activates the unique gifts you've brought from other star systems."
            icon={<Sparkles size={20} className="text-blue-300" />}
            colorClass="text-blue-300"
          />

          <PracticeCard 
            title="Soul Contract Revocation"
            duration={10}
            description="Identify recurring negative patterns or toxic relationships. Visualize the energetic 'contract' binding you to this experience. Read a formal revocation decree aloud, stating your sovereign right to cancel all agreements made across all timelines and dimensions that no longer serve your highest good. Visualize the contract burning in a violet flame."
            icon={<FileX size={20} className="text-red-500" />}
            colorClass="text-red-500"
          />

          <PracticeCard 
            title="Higher Self Integration"
            duration={20}
            description="Visualize your Higher Self—the fully realized, 5D version of you—standing before you as a being of immense light. Step forward and merge your physical body with this luminous body. Feel their wisdom, confidence, and peace becoming your own. Practice operating from this unified state throughout your day."
            icon={<UserPlus size={20} className="text-cyan-300" />}
            colorClass="text-cyan-300"
          />
        </>
      )}

      {activeTab === 'journal' && (
        <>
          <div className="col-span-1 lg:col-span-2 xl:col-span-3 flex gap-4 mb-2">
            <button 
              onClick={() => setShowHistory(false)}
              className={cn("px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider transition-colors", !showHistory ? "bg-yellow-500 text-black" : "bg-white/10 text-slate-400 hover:bg-white/20")}
            >
              New Entry
            </button>
            <button 
              onClick={() => setShowHistory(true)}
              className={cn("px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider transition-colors flex items-center gap-2", showHistory ? "bg-yellow-500 text-black" : "bg-white/10 text-slate-400 hover:bg-white/20")}
            >
              <History size={16} /> History ({entries.length})
            </button>
          </div>

          {!showHistory ? (
            <>
              <Card className="bg-gradient-to-br from-yellow-900/40 to-orange-900/20 border-yellow-500/30 relative overflow-hidden lg:col-span-2 xl:col-span-3">
                <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
                  <Flame size={80} />
                </div>
                <h3 className="text-yellow-400 font-bold mb-3 text-[10px] uppercase tracking-widest flex items-center gap-2">
                  <Sparkles size={12} /> Daily Soul Prompt
                </h3>
                <p className="text-lg font-medium text-white leading-snug relative z-10">What is your soul trying to communicate to you through your current challenges?</p>
              </Card>
              
              <Card className="lg:col-span-2 xl:col-span-3">
                <h3 className="font-bold mb-4 text-white text-sm uppercase tracking-wider">Entry Title</h3>
                <input 
                  type="text"
                  value={title}
                  onChange={e => setTitle(e.target.value)}
                  placeholder="Give your reflection a title..."
                  className="w-full bg-black/40 border border-white/10 rounded-xl p-4 text-white placeholder-slate-600 focus:outline-none focus:border-yellow-500 text-sm shadow-inner"
                />
              </Card>

              <Card className="lg:col-span-1 xl:col-span-2">
                <h3 className="font-bold mb-4 text-white text-sm uppercase tracking-wider">Your Reflection</h3>
                <textarea 
                  value={reflection}
                  onChange={e => setReflection(e.target.value)}
                  placeholder="Write freely. Your soul is listening..."
                  className="w-full bg-black/40 border border-white/10 rounded-xl p-4 text-white placeholder-slate-600 focus:outline-none focus:border-yellow-500 min-h-[200px] resize-none text-sm leading-relaxed shadow-inner"
                />
              </Card>

              <Card className="lg:col-span-1 xl:col-span-1">
                <h3 className="font-bold mb-4 text-white text-sm uppercase tracking-wider">Notes</h3>
                <textarea 
                  value={insights}
                  onChange={e => setInsights(e.target.value)}
                  placeholder="Any additional insights or observations?"
                  className="w-full bg-black/40 border border-white/10 rounded-xl p-4 text-white placeholder-slate-600 focus:outline-none focus:border-yellow-500 min-h-[200px] resize-none text-sm leading-relaxed shadow-inner"
                />
              </Card>
              
              <button 
                onClick={handleSave}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-yellow-600 to-orange-600 text-white font-black text-lg hover:from-yellow-500 hover:to-orange-500 transition-all shadow-[0_0_20px_rgba(234,179,8,0.4)] hover:shadow-[0_0_30px_rgba(234,179,8,0.6)] uppercase tracking-widest lg:col-span-2 xl:col-span-3"
              >
                Save Soul Reflection
              </button>
            </>
          ) : (
            <div className="col-span-1 lg:col-span-2 xl:col-span-3 flex flex-col gap-4">
              {entries.length === 0 ? (
                <Card className="text-center py-12">
                  <BookOpen size={48} className="mx-auto text-slate-600 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">No Entries Yet</h3>
                  <p className="text-slate-400">Your soul journey awaits. Start writing to build your history.</p>
                </Card>
              ) : (
                entries.map(entry => (
                  <Card key={entry.id} className="border-white/5 bg-black/40 hover:bg-black/60 transition-colors">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-lg font-bold text-yellow-400">{entry.title}</h3>
                      <span className="text-xs text-slate-500 font-mono bg-white/5 px-2 py-1 rounded">
                        {new Date(entry.date).toLocaleDateString(undefined, { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' })}
                      </span>
                    </div>
                    <div className="space-y-4">
                      {entry.reflection && (
                        <div>
                          <h4 className="text-[10px] uppercase tracking-widest text-slate-500 mb-1">Reflection</h4>
                          <p className="text-sm text-slate-300 leading-relaxed whitespace-pre-wrap">{entry.reflection}</p>
                        </div>
                      )}
                      {entry.notes && (
                        <div className="pt-4 border-t border-white/5">
                          <h4 className="text-[10px] uppercase tracking-widest text-slate-500 mb-1">Notes</h4>
                          <p className="text-sm text-slate-400 leading-relaxed whitespace-pre-wrap">{entry.notes}</p>
                        </div>
                      )}
                    </div>
                  </Card>
                ))
              )}
            </div>
          )}
        </>
      )}
      {activeTab === 'journey' && (
        <div className="col-span-1 lg:col-span-2 xl:col-span-3 space-y-6">
          <Card className="bg-gradient-to-br from-indigo-900/40 to-purple-900/20 border-indigo-500/30">
            <h3 className="text-xl font-black mb-2 text-white flex items-center gap-2">
              <Map size={24} className="text-indigo-400" />
              Soul Journey Map
            </h3>
            <p className="text-slate-400 text-sm">A visual timeline of your spiritual evolution and milestones achieved.</p>
          </Card>

          <div className="relative pl-8 space-y-8 before:content-[''] before:absolute before:left-[15px] before:top-2 before:bottom-2 before:w-0.5 before:bg-gradient-to-b before:from-yellow-500 before:via-indigo-500 before:to-purple-500 before:opacity-30">
            {/* Milestones in Timeline */}
            {milestones.map((milestone, idx) => {
              const isAchieved = entries.length >= milestone.threshold;
              return (
                <div key={milestone.id} className={cn("relative transition-all duration-700", !isAchieved && "opacity-40 grayscale")}>
                  <div className={cn(
                    "absolute -left-[31px] top-0 w-8 h-8 rounded-full border-2 flex items-center justify-center z-10 transition-all",
                    isAchieved ? "bg-indigo-600 border-indigo-400 shadow-[0_0_15px_rgba(99,102,241,0.5)]" : "bg-slate-900 border-slate-700"
                  )}>
                    <milestone.icon size={16} className={isAchieved ? "text-white" : "text-slate-500"} />
                  </div>
                  <Card className={cn("ml-4 border-white/5 bg-black/40", isAchieved && "border-indigo-500/20 shadow-[0_4px_20px_rgba(99,102,241,0.05)]")}>
                    <div className="flex justify-between items-start mb-2">
                      <h4 className={cn("font-bold text-lg", isAchieved ? "text-indigo-300" : "text-slate-500")}>{milestone.label}</h4>
                      {isAchieved && <CheckCircle2 size={16} className="text-emerald-400" />}
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">{milestone.desc}</p>
                    {isAchieved && (
                      <div className="mt-3 flex items-center gap-2">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded">Unlocked</span>
                      </div>
                    )}
                  </Card>
                </div>
              );
            })}

            {/* Journal Entries in Timeline */}
            {entries.length > 0 && (
              <div className="pt-4">
                <h3 className="text-xs font-bold text-slate-500 uppercase tracking-[0.2em] mb-6 ml-4">Journal Landmarks</h3>
                <div className="space-y-6">
                  {entries.slice(0, 5).map((entry, idx) => (
                    <div key={entry.id} className="relative">
                      <div className="absolute -left-[27px] top-2 w-6 h-6 rounded-full border border-yellow-500/30 bg-yellow-900/20 flex items-center justify-center z-10">
                        <div className="w-2 h-2 rounded-full bg-yellow-500 shadow-[0_0_8px_rgba(234,179,8,0.8)]" />
                      </div>
                      <Card className="ml-4 border-white/5 bg-black/20 hover:bg-black/40 transition-colors">
                        <div className="flex justify-between items-center mb-1">
                          <h4 className="font-bold text-sm text-yellow-200">{entry.title}</h4>
                          <span className="text-[10px] text-slate-500 font-mono">
                            {new Date(entry.date).toLocaleDateString()}
                          </span>
                        </div>
                        <p className="text-xs text-slate-400 line-clamp-1 italic">"{entry.reflection}"</p>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {entries.length === 0 && (
            <Card className="text-center py-12 border-dashed border-white/10">
              <Star size={40} className="mx-auto text-slate-700 mb-4" />
              <h3 className="text-lg font-bold text-slate-400">Your Journey is Just Beginning</h3>
              <p className="text-sm text-slate-500 mt-2">Start your first journal entry to begin mapping your soul's evolution.</p>
              <button 
                onClick={() => setActiveTab('journal')}
                className="mt-6 px-6 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 text-xs font-bold uppercase tracking-widest hover:bg-yellow-500/20 transition-all"
              >
                Create First Entry
              </button>
            </Card>
          )}
        </div>
      )}
    </PageLayout>
  );
}
