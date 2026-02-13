import React from 'react';
import { PrimaryButton, SecondaryButton } from './Button';

interface HeroProps {
  onScheduleConsultation?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onScheduleConsultation }) => {
  return (
    <header className="relative pt-20 pb-16 md:pt-24 md:pb-24 overflow-hidden border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-6xl">
          <div className="inline-flex items-center space-x-2 bg-slate-100 px-3 py-1 mb-6">
            <span className="w-1.5 h-1.5 bg-brand-red rounded-full animate-pulse"></span>
            <span className="text-[10px] sm:text-[14px] uppercase tracking-[0.2em] font-black text-slate-700">Christian Life Coaching and Leadership Development for Men</span>
          </div>
          <h1 className="text-[2.5rem] md:text-[4rem] font-bold text-slate-900 tracking-tighter leading-[1.15] mb-6">
            Stand firm.<br />
            Be courageous.<br />
            <span className="text-brand-rust italic font-serif">Live for His glory.</span>
          </h1>

          <div className="mb-6 border-l-2 border-brand-rust/30 pl-8 max-w-4xl">
            <p className="text-lg md:text-xl text-brand-navy/70 font-serif italic leading-relaxed mb-3">
              "Be watchful, stand firm in the faith, act like men, be strong."
            </p>
            <p className="text-[10px] font-black text-slate-700 uppercase tracking-[0.3em]">
              — 1 CORINTHIANS 16:13 (ESV)
            </p>
          </div>

          <p className="text-lg md:text-xl text-slate-700 leading-relaxed max-w-[59rem] mb-8 font-light">
            Experience the joy, peace, and purpose of a life set apart for God. I coach and lead men to embrace the path of sanctification, moving from a mindset of duty into a vibrant, personal relationship with Jesus Christ. From the sanctity of your family to the challenges of your work and your role in the community, we will align every area of your life with the heart of Jesus and obedience to biblical truth.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <PrimaryButton
              href={onScheduleConsultation ? undefined : '#services'}
              onClick={onScheduleConsultation}
              accentLine
            >
              Schedule Consultation
            </PrimaryButton>
            <SecondaryButton href="#philosophy">
              Scholarship Info
            </SecondaryButton>
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
