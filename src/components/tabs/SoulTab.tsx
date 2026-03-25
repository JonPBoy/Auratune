import React, { useState } from 'react';
import { Compass, BookOpen, Activity, PenTool, Sparkles, Key, Eye, Infinity, Flame, History, Moon, Heart, Puzzle, Edit3, Bed, Users, Dna } from 'lucide-react';
import { PageLayout } from '../PageLayout';
import { Card } from '../ui/Card';
import { cn } from '../../lib/utils';
import { PracticeCard } from '../PracticeCard';

export function SoulTab() {
  const [activeTab, setActiveTab] = useState('learn');
  const [title, setTitle] = useState('');
  const [reflection, setReflection] = useState('');
  const [insights, setInsights] = useState('');

  const tabs = [
    { id: 'learn', label: 'Learn', icon: BookOpen },
    { id: 'practice', label: 'Practice', icon: Activity },
    { id: 'journal', label: 'Journal', icon: PenTool },
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
          <Card className="border-yellow-500/30 bg-gradient-to-br from-yellow-900/20 to-cosmic-card relative overflow-hidden">
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
              <div className="p-4 rounded-xl bg-black/40 border border-yellow-500/20">
                <h4 className="font-bold text-sm text-yellow-300 flex items-center gap-2 mb-2">
                  <BookOpen size={14} /> The Akashic Records
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">The cosmic library that contains the history of every soul's journey through time and space.</p>
              </div>
              <div className="p-4 rounded-xl bg-black/40 border border-orange-500/20">
                <h4 className="font-bold text-sm text-orange-300 flex items-center gap-2 mb-2">
                  <PenTool size={14} /> Soul Contracts
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">Agreements made before birth to learn specific lessons and grow through relationships and experiences.</p>
              </div>
              <div className="p-4 rounded-xl bg-black/40 border border-red-500/20">
                <h4 className="font-bold text-sm text-red-300 flex items-center gap-2 mb-2">
                  <Activity size={14} /> Karmic Loops
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">Repeating patterns of behavior or experience that offer opportunities for healing and resolution.</p>
              </div>
            </div>
          </Card>

          <Card>
            <h3 className="text-lg font-bold mb-4 text-white flex items-center gap-2">
              <Eye size={18} className="text-yellow-500" />
              Soul State Indicators
            </h3>
            <ul className="text-slate-300 text-sm space-y-4">
              <li className="flex gap-4 p-3 rounded-lg bg-emerald-900/10 border border-emerald-500/20">
                <span className="text-emerald-400 font-bold uppercase tracking-wider text-xs mt-0.5 w-24 flex-shrink-0">Aligned</span>
                <span className="text-slate-400 text-xs leading-relaxed">Deep sense of peace, frequent synchronicities, clear intuition, time distortion (flow state), effortless manifestation.</span>
              </li>
              <li className="flex gap-4 p-3 rounded-lg bg-orange-900/10 border border-orange-500/20">
                <span className="text-orange-400 font-bold uppercase tracking-wider text-xs mt-0.5 w-24 flex-shrink-0">Misaligned</span>
                <span className="text-slate-400 text-xs leading-relaxed">Feeling lost or numb, disconnected from purpose, repeating painful cycles, chronic boredom, relying on external validation.</span>
              </li>
              <li className="flex gap-4 p-3 rounded-lg bg-purple-900/10 border border-purple-500/20">
                <span className="text-purple-400 font-bold uppercase tracking-wider text-xs mt-0.5 w-24 flex-shrink-0">Awakening</span>
                <span className="text-slate-400 text-xs leading-relaxed">Sudden shifts in perspective, intense desire for truth, dismantling of old beliefs, the "Dark Night of the Soul", ego death.</span>
              </li>
            </ul>
          </Card>
        </>
      )}

      {activeTab === 'practice' && (
        <>
          <PracticeCard 
            title="Past Life Regression"
            duration={45}
            description="Use guided meditation to access memories of previous incarnations and resolve karmic imprints. This practice helps you understand the root causes of current life patterns and phobias, allowing for profound soul-level healing."
            icon={<History size={20} className="text-yellow-400" />}
            colorClass="text-yellow-400"
          />
          
          <PracticeCard 
            title="Shadow Work"
            duration={30}
            description="Identify and integrate the hidden, suppressed parts of your psyche to achieve wholeness. By bringing light to your shadow, you reclaim the power and potential that was previously locked away in your subconscious."
            icon={<Moon size={20} className="text-slate-300" />}
            colorClass="text-slate-300"
          />

          <PracticeCard 
            title="Inner Child Healing"
            duration={20}
            description="Connect with your younger self to heal childhood wounds and reclaim your natural joy. This practice involves nurturing and reparenting the parts of you that felt unseen or unsupported in the past."
            icon={<Heart size={20} className="text-red-400" />}
            colorClass="text-red-400"
          />

          <PracticeCard 
            title="Soul Retrieval"
            duration={60}
            description="A shamanic practice to call back fragments of your soul lost through trauma or shock. This deep journey restores your vital essence and helps you feel more 'present' and complete in your current life."
            icon={<Puzzle size={20} className="text-emerald-400" />}
            colorClass="text-emerald-400"
          />

          <PracticeCard 
            title="Automatic Writing"
            duration={15}
            description="Allow your higher self to speak through your pen without conscious interference. This technique bypasses the ego's filters, providing direct access to soul-level wisdom and guidance for your current path."
            icon={<Edit3 size={20} className="text-blue-400" />}
            colorClass="text-blue-400"
          />

          <PracticeCard 
            title="Dream Journaling"
            duration={10}
            description="Record your dreams to decode messages from your subconscious and the astral realm. Your dreams are a nightly communication from your soul, offering insights and warnings that the waking mind might miss."
            icon={<Bed size={20} className="text-indigo-400" />}
            colorClass="text-indigo-400"
          />

          <PracticeCard 
            title="Ancestral Healing"
            duration={30}
            description="Heal generational patterns and traumas passed down through your genetic lineage. By clearing these imprints, you free yourself and future generations from the weight of the past."
            icon={<Users size={20} className="text-orange-400" />}
            colorClass="text-orange-400"
          />

          <PracticeCard 
            title="Light Language"
            duration={5}
            description="Speak or draw channeled frequencies that bypass the logical mind to activate your DNA. These 'codes' communicate directly with your soul's blueprint, triggering rapid shifts in consciousness."
            icon={<Dna size={20} className="text-purple-400" />}
            colorClass="text-purple-400"
          />

          <PracticeCard 
            title="Akashic Access"
            duration={20}
            description="Visualize entering the Great Library of the Universe to read your own soul's record. Ask specific questions about your purpose, challenges, and the highest potential for your current timeline."
            icon={<BookOpen size={20} className="text-white" />}
            colorClass="text-white"
          />

          <PracticeCard 
            title="Sovereign Soul Decree"
            duration={5}
            description="Speak your soul's truth aloud. 'I am an eternal being of light. I am here for a purpose. I am aligned with my highest destiny.' This practice anchors your soul's frequency into your physical reality."
            icon={<Compass size={20} className="text-yellow-500" />}
            colorClass="text-yellow-500"
          />

          <PracticeCard 
            title="Starseed Activation"
            duration={15}
            description="Connect with your cosmic origins and galactic family. This practice helps you remember your mission on Earth and the unique gifts you've brought from other star systems."
            icon={<Sparkles size={20} className="text-blue-300" />}
            colorClass="text-blue-300"
          />
        </>
      )}

      {activeTab === 'journal' && (
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
              className="w-full bg-black/40 border border-white/10 rounded-xl p-4 text-white placeholder-slate-600 focus:outline-none focus:border-yellow-500 min-h-[100px] resize-none text-sm leading-relaxed shadow-inner"
            />
          </Card>
          
          <button className="w-full py-4 rounded-xl bg-gradient-to-r from-yellow-600 to-orange-600 text-white font-black text-lg hover:from-yellow-500 hover:to-orange-500 transition-all shadow-[0_0_20px_rgba(234,179,8,0.4)] hover:shadow-[0_0_30px_rgba(234,179,8,0.6)] uppercase tracking-widest lg:col-span-2 xl:col-span-3">
            Save Soul Reflection
          </button>
        </>
      )}
    </PageLayout>
  );
}
