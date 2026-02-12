
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { SERVICES } from '../constants';

export const ServicesGrid: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-20 md:flex justify-between items-end">
          <div className="max-w-xl">
            <span className="text-[10px] font-black text-brand-navy uppercase tracking-[0.3em] mb-4 block">Offering</span>
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 mb-4 uppercase">Professional Services</h2>
            <p className="text-slate-500 text-lg font-light leading-relaxed">Integrated development for individuals, churches, and secular organizations that value well-being and moral clarity.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12">
          {SERVICES.map((service, idx) => (
            <div key={service.id} className="group flex flex-col h-full">
              <div className="mb-8 flex items-center justify-between border-b border-slate-100 pb-4">
                <div className="p-4 bg-slate-50 text-slate-400 group-hover:text-brand-navy group-hover:bg-blue-50/50 transition-all duration-300">
                  {service.icon}
                </div>
                <span className="text-[10px] font-black text-slate-200 tracking-[0.3em] uppercase group-hover:text-brand-rust transition-colors">0{service.id}</span>
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-brand-navy transition-colors duration-300">{service.title}</h3>
              <p className="text-[10px] font-bold text-brand-rust uppercase tracking-[0.2em] mb-5 italic font-serif">
                {service.tagline}
              </p>
              <p className="text-slate-500 leading-relaxed mb-8 text-sm font-light flex-grow">
                {service.description}
              </p>

              <div className="mt-auto bg-slate-50 p-6 border-l-2 border-brand-navy/20 group-hover:border-brand-rust transition-colors">
                <p className="text-xs text-slate-700 leading-normal mb-3 font-serif italic">
                  "{service.scripture}"
                </p>
                <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">
                  — {service.reference}
                </p>
              </div>
            </div>
          ))}

          {/* Featured CTA Block */}
          <div className="lg:col-span-2 bg-brand-navy p-16 flex flex-col md:flex-row items-center justify-between group overflow-hidden relative border-t-4 border-brand-rust">
            <div className="max-w-md mb-8 md:mb-0 text-center md:text-left relative z-10">
              <h3 className="text-3xl font-bold text-white mb-4 uppercase tracking-tight">Ready to begin your formation?</h3>
              <p className="text-slate-400 text-sm font-light leading-relaxed">
                Every significant change starts with a single conversation. Whether you're looking for personal coaching or organizational consulting, let's connect.
              </p>
            </div>
            <button className="bg-white text-brand-navy px-10 py-5 font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-brand-rust hover:text-white transition-all flex items-center relative z-10 shadow-2xl">
              Book Consultation
              <ArrowRight className="ml-3 w-4 h-4" />
            </button>
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-white/5 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-700"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
