import React, { useEffect } from 'react';
import { ArrowLeft, Shield, Target, Phone, Mail, MapPin } from 'lucide-react';

interface ConsultationPageProps {
  onBack: () => void;
}

export const ConsultationPage: React.FC<ConsultationPageProps> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    // Dynamically load the Calendly script
    const script = document.createElement('script');
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="pt-32 pb-24 bg-[#FDFCFB] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <button 
          onClick={onBack}
          className="group flex items-center space-x-2 text-slate-400 hover:text-brand-navy transition-colors mb-12"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-[10px] sm:text-[14px] font-black uppercase tracking-widest">BACK TO HOME</span>
        </button>

        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24">
          {/* Content Side */}
          <div>
            <div className="inline-flex items-center space-x-2 bg-slate-100 px-3 py-1 mb-8">
              <span className="w-1.5 h-1.5 bg-brand-rust rounded-full"></span>
              <span className="text-[10px] sm:text-[14px] uppercase tracking-[0.2em] font-black text-slate-500">CONSULTATION</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-normal text-brand-rust tracking-tighter leading-tight uppercase mb-8">
              Schedule Free 30-minute Call
            </h1>
            
            <p className="text-xl text-slate-500 leading-relaxed font-light mb-12">
              Please select a convenient date and time from the calendar below. Alternatively, you are welcome to contact me directly via phone or chat.<br />
              You will receive a meeting invitation immediately after scheduling.
            </p>

            {/* Contact Info Box */}
            <div className="bg-brand-navy p-8 text-white mb-12 border-l-4 border-brand-rust shadow-xl">
              <div className="mb-6 border-b border-white/10 pb-4">
                <h3 className="text-xl font-bold uppercase tracking-tight">Jeff Buckner</h3>
                <div className="flex items-center text-slate-400 text-xs mt-1">
                  <MapPin size={12} className="mr-2" />
                  <span>San Diego, California</span>
                </div>
              </div>
              <div className="space-y-4">
                <a href="tel:9493070336" className="flex items-center text-sm font-medium hover:text-brand-rust transition-colors group">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mr-3 group-hover:bg-brand-rust/20 transition-colors">
                    <Phone size={14} />
                  </div>
                  (949) 307-0336
                </a>
                <a href="mailto:jeff@jeffbuckner.com" className="flex items-center text-sm font-medium hover:text-brand-rust transition-colors group">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mr-3 group-hover:bg-brand-rust/20 transition-colors">
                    <Mail size={14} />
                  </div>
                  jeff@jeffbuckner.com
                </a>
              </div>
              <div className="mt-8 pt-6 border-t border-white/10">
                <span className="text-xs md:text-sm font-serif italic text-white/40 leading-relaxed block">
                  Christian Life Coaching and Leadership Development for Men
                </span>
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-white shadow-sm text-brand-navy border border-slate-100 mt-1">
                  <Shield size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 uppercase text-xs tracking-wider mb-2">Strict Confidentiality</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    All discussions and correspondence are treated with care and always kept strictly confidential.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-white shadow-sm text-brand-navy border border-slate-100 mt-1">
                  <Target size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 uppercase text-xs tracking-wider mb-2">NEXT STEPS</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    Upon scheduling, you will receive a confidentiality agreement and a brief questionnaire. This process ensures our time is used effectively, allowing me to be fully prepared to address your specific goals during the call.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Calendly Side */}
          <div className="bg-white shadow-2xl border-t-4 border-brand-rust overflow-hidden min-h-[700px]">
            <div className="p-6 border-b border-slate-100">
              <h3 className="text-lg font-bold text-brand-navy uppercase tracking-widest">Select Date & Time</h3>
            </div>
            <div 
              className="calendly-inline-widget" 
              data-url="https://calendly.com/jeff-878/introductory-call?hide_gdpr_banner=1" 
              style={{ minWidth: '320px', height: '700px' }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};