
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#FDFCFB] py-20 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-6 h-6 bg-brand-navy rounded-sm flex items-center justify-center">
                <span className="text-white font-serif italic text-sm">L</span>
              </div>
              <span className="text-sm font-bold tracking-tight uppercase">
                Leadership <span className="text-slate-400 font-light">& Formation</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm max-w-sm font-light leading-relaxed">
              Forming men of conviction through character-driven leadership development and spiritual maturity.
            </p>
          </div>
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-900 mb-6">Navigation</h4>
            <ul className="space-y-4">
              <li><a href="#services" className="text-xs font-bold text-slate-400 hover:text-slate-900 uppercase tracking-widest transition-colors">Services</a></li>
              <li><a href="#philosophy" className="text-xs font-bold text-slate-400 hover:text-slate-900 uppercase tracking-widest transition-colors">Philosophy</a></li>
              <li><a href="#advisor" className="text-xs font-bold text-slate-400 hover:text-slate-900 uppercase tracking-widest transition-colors">AI Advisor</a></li>
              <li><a href="#style-guide" className="text-xs font-bold text-slate-400 hover:text-slate-900 uppercase tracking-widest transition-colors">Brand Standards</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-900 mb-6">Legal</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-xs font-bold text-slate-400 hover:text-slate-900 uppercase tracking-widest transition-colors">Privacy</a></li>
              <li><a href="#" className="text-xs font-bold text-slate-400 hover:text-slate-900 uppercase tracking-widest transition-colors">Terms</a></li>
              <li><a href="#" className="text-xs font-bold text-slate-400 hover:text-slate-900 uppercase tracking-widest transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="text-slate-400 text-[9px] uppercase font-bold tracking-[0.4em]">
            Scripture References ESV • © {new Date().getFullYear()} Leadership & Formation
          </div>
          <div className="flex space-x-8">
            <span className="text-[9px] font-black text-slate-300 uppercase tracking-[0.3em]">Integrity</span>
            <span className="text-[9px] font-black text-slate-300 uppercase tracking-[0.3em]">Conviction</span>
            <span className="text-[9px] font-black text-slate-300 uppercase tracking-[0.3em]">Maturity</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
