
import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <header className="relative pt-48 pb-24 overflow-hidden border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl">
          <div className="inline-flex items-center space-x-2 bg-slate-100 px-3 py-1 mb-8">
            <span className="w-1.5 h-1.5 bg-brand-red rounded-full animate-pulse"></span>
            <span className="text-[10px] uppercase tracking-[0.2em] font-black text-slate-500">Forming Men of Conviction</span>
          </div>
          <h1 className="text-6xl md:text-[6rem] font-bold text-slate-900 tracking-tighter leading-[0.9] mb-10">
            Leadership isn't performance.<br />
            <span className="text-brand-navy italic font-serif lowercase">It is character.</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-500 leading-relaxed max-w-2xl mb-12 font-light">
            Intentional formation for men who want to move from passive participation to active ownership. Built for real life, grounded in truth.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <a href="#services" className="bg-brand-navy text-white px-10 py-5 font-bold uppercase tracking-[0.15em] text-xs flex items-center justify-center hover:bg-slate-800 transition-all group shadow-xl shadow-slate-200 relative overflow-hidden">
              <span className="absolute top-0 left-0 w-full h-[2px] bg-brand-rust opacity-50"></span>
              View Services
              <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#philosophy" className="border border-slate-200 bg-white px-10 py-5 font-bold uppercase tracking-[0.15em] text-xs hover:bg-slate-50 transition-all text-slate-600 flex items-center justify-center">
              The Philosophy
            </a>
          </div>
        </div>
      </div>
      
      {/* Subtle Aesthetic Elements */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full opacity-[0.03] pointer-events-none hidden lg:block">
        <div className="grid grid-cols-6 h-full border-l border-slate-900">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="border-r border-slate-900 h-full"></div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 right-12 translate-y-1/2 -z-10 hidden xl:block">
        <span className="text-[20rem] font-serif italic text-slate-50 opacity-[0.5] leading-none pointer-events-none">Formation</span>
      </div>
    </header>
  );
};
