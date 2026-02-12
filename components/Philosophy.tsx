
import React from 'react';

export const Philosophy: React.FC = () => {
  return (
    <section id="philosophy" className="py-24 bg-[#FDFCFB]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-[10px] font-black text-brand-navy uppercase tracking-[0.3em] mb-4 block">The Mission</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-8 uppercase leading-tight">
              Moving Men from <br />
              <span className="text-brand-rust italic font-serif lowercase">Participation to ownership.</span>
            </h2>
            <div className="space-y-6 text-slate-600 leading-relaxed text-lg font-light">
              <p>
                In a world focused on efficiency and output, we prioritize the internal landscape of the leader. We believe that professional success without personal integrity is a house built on sand.
              </p>
              <p>
                Our philosophy is simple: we help men develop the disciplined inner lives necessary for faithful obedience in all areas of life—home, work, and community.
              </p>
              <div className="pt-6 border-t border-slate-100 flex items-center space-x-6">
                <div>
                  <h4 className="text-3xl font-bold text-slate-900">10+</h4>
                  <p className="text-[10px] uppercase font-bold tracking-widest text-slate-400">Years of Formation</p>
                </div>
                <div className="w-px h-10 bg-slate-100"></div>
                <div>
                  <h4 className="text-3xl font-bold text-slate-900">500+</h4>
                  <p className="text-[10px] uppercase font-bold tracking-widest text-slate-400">Leaders Advised</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] bg-slate-100 relative group overflow-hidden">
              <img 
                src="/Jeff%20Buckner%20w%20hat.jpg" 
                alt="Jeff Buckner" 
                className="w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-brand-navy/10 mix-blend-multiply"></div>
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-brand-rust p-8 hidden lg:flex flex-col justify-center shadow-2xl">
                <span className="text-white text-5xl font-serif italic">"</span>
                <p className="text-white text-lg font-serif italic leading-tight">Character is what you are in the dark.</p>
                <p className="text-white/40 text-[10px] uppercase font-black tracking-widest mt-4">Pillar of Integrity</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
