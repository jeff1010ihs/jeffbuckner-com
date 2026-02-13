
import React from 'react';
import { Palette, Type, Box, Layers, ArrowRight } from 'lucide-react';

export const StyleGuide: React.FC = () => {
  const colors = [
    { name: 'Navy', hex: '#16243E', class: 'bg-brand-navy', use: 'Primary background, deep UI elements' },
    { name: 'Dark Rust', hex: '#7C2D12', class: 'bg-brand-rust', use: 'Secondary accents, warmth, tradition' },
    { name: 'Deep Red', hex: '#991B1B', class: 'bg-brand-red', use: 'Critical call-outs, active indicators' },
    { name: 'Paper', hex: '#FDFCFB', class: 'bg-[#FDFCFB]', use: 'Main background, high-contrast text' },
    { name: 'Slate 900', hex: '#0F172A', class: 'bg-slate-900', use: 'Structure, primary text' },
    { name: 'Slate 400', hex: '#94A3B8', class: 'bg-slate-400', use: 'Secondary text, borders' },
  ];

  return (
    <section id="style-guide" className="py-32 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div className="max-w-2xl">
            <span className="text-[10px] font-black text-brand-navy uppercase tracking-[0.4em] mb-4 block">Design System v1.0</span>
            <h2 className="text-5xl font-bold tracking-tighter text-slate-900 uppercase">Visual Standards</h2>
            <p className="mt-6 text-slate-700 font-serif italic text-xl leading-relaxed">
              "A balance between the rigid structure of responsibility and the organic warmth of human character."
            </p>
          </div>
          <div className="bg-slate-50 p-6 border-l-4 border-brand-rust">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Design Rationale</p>
            <p className="text-xs text-slate-600 max-w-xs leading-relaxed">
              We use heavyweight sans-serif for authority and lighter serif italics for wisdom.
            </p>
          </div>
        </div>

        {/* Color Palette */}
        <div className="mb-24">
          <div className="flex items-center space-x-3 mb-12 border-b border-slate-100 pb-4">
            <Palette className="w-5 h-5 text-brand-navy" />
            <h3 className="text-xs font-black uppercase tracking-[0.2em]">Color Hierarchy</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {colors.map((color) => (
              <div key={color.name} className="group">
                <div className={`${color.class} aspect-square mb-4 shadow-inner border border-slate-100 group-hover:scale-105 transition-transform duration-500`}></div>
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">{color.name}</h4>
                <p className="text-[10px] text-slate-400 font-mono mb-2 uppercase">{color.hex}</p>
                <p className="text-[10px] text-slate-700 leading-tight pr-4">{color.use}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Typography */}
        <div className="mb-24">
          <div className="flex items-center space-x-3 mb-12 border-b border-slate-100 pb-4">
            <Type className="w-5 h-5 text-brand-navy" />
            <h3 className="text-xs font-black uppercase tracking-[0.2em]">Typography Scales</h3>
          </div>
          <div className="space-y-16">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <span className="text-[9px] font-bold text-slate-300 uppercase tracking-widest mb-4 block">Sans-Serif: Inter</span>
                <h1 className="text-7xl font-bold tracking-tighter text-slate-900 mb-4">BOLD & DIRECT</h1>
                <p className="text-slate-700 text-sm leading-relaxed max-w-sm">
                  Inter is our structural foundation. Used for navigation, UI labels, and primary headlines to convey clarity and modern professionalism.
                </p>
              </div>
              <div className="flex items-center justify-center lg:justify-end">
                <div className="text-right">
                  <span className="text-[9px] font-bold text-slate-300 uppercase tracking-widest mb-4 block">Serif: Crimson Pro</span>
                  <h1 className="text-7xl font-serif italic font-light text-brand-navy">Wisdom & Character</h1>
                  <p className="text-slate-700 text-sm leading-relaxed max-w-sm ml-auto mt-4">
                    Crimson Pro is the soul of the brand. It is used for quotes, taglines, and emphasis to introduce a human, historical perspective.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Components & UI Patterns */}
        <div>
          <div className="flex items-center space-x-3 mb-12 border-b border-slate-100 pb-4">
            <Layers className="w-5 h-5 text-brand-navy" />
            <h3 className="text-xs font-black uppercase tracking-[0.2em]">Component Lab</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-20">
            <div className="space-y-12">
              <div>
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6 block">Button Archetypes</span>
                <div className="flex flex-wrap gap-6 items-center">
                  <button className="bg-brand-navy text-white px-8 py-4 text-[10px] font-bold uppercase tracking-widest flex items-center group relative overflow-hidden">
                    <span className="absolute top-0 left-0 w-full h-[2px] bg-brand-rust opacity-50"></span>
                    Primary CTA
                    <ArrowRight className="ml-2 w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="border border-slate-200 px-8 py-4 text-[10px] font-bold uppercase tracking-widest hover:bg-slate-50 transition-colors">
                    Secondary Link
                  </button>
                  <button className="text-brand-rust text-[10px] font-bold uppercase tracking-widest border-b-2 border-brand-rust hover:border-brand-navy transition-all pb-1">
                    Text Link
                  </button>
                </div>
              </div>
              <div>
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6 block">Iconography Style</span>
                <div className="flex gap-10">
                  <div className="p-4 bg-slate-50 text-brand-navy border border-slate-100">
                    <Box className="w-6 h-6 stroke-[1.5px]" />
                  </div>
                  <div className="p-4 bg-brand-rust/5 text-brand-rust border border-brand-rust/10">
                    <Box className="w-6 h-6 stroke-[1.5px]" />
                  </div>
                  <div className="p-4 bg-brand-navy text-white">
                    <Box className="w-6 h-6 stroke-[1.5px]" />
                  </div>
                </div>
                <p className="text-[10px] text-slate-400 mt-4 uppercase font-bold tracking-widest italic">1.5px Stroke • Standard Lucide Set</p>
              </div>
            </div>
            <div className="bg-[#FDFCFB] p-12 border border-slate-100 shadow-xl relative overflow-hidden">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6 block">Card Pattern</span>
              <div className="mb-4">
                <span className="text-brand-red text-[8px] uppercase font-black tracking-[0.3em]">Conviction 01</span>
                <h4 className="text-2xl font-bold text-slate-900 mt-2">The Architecture of a Man</h4>
              </div>
              <p className="text-sm text-slate-700 font-serif italic mb-6">
                "We do not rise to the level of our goals, we fall to the level of our systems."
              </p>
              <div className="w-full h-[2px] bg-brand-navy/10 relative">
                <div className="absolute top-0 left-0 w-1/4 h-full bg-brand-rust"></div>
              </div>
              <div className="absolute top-0 right-0 p-4">
                <div className="w-8 h-8 border border-slate-200 flex items-center justify-center text-[10px] font-bold text-slate-300">01</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
