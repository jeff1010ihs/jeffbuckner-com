
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  currentPage?: 'home' | 'consultation';
  onScheduleConsultation?: () => void;
  onGoToHome?: () => void;
  onNavigateToSection?: (hash: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage = 'home', onScheduleConsultation, onGoToHome, onNavigateToSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isConsultation = currentPage === 'consultation';

  const goToConsultation = () => {
    setMobileMenuOpen(false);
    onScheduleConsultation?.();
  };

  const goToSection = (hash: string) => {
    setMobileMenuOpen(false);
    if (isConsultation && onNavigateToSection) {
      onNavigateToSection(hash);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Philosophy', href: '#philosophy' },
    { name: 'Formation Guide', href: '#advisor' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
        {isConsultation && onGoToHome ? (
          <button type="button" onClick={onGoToHome} className="flex items-center group">
            <img src="/Jeff_Buckner-Logo.png" alt="Leadership & Formation" className="w-[220px] h-auto object-contain" />
          </button>
        ) : (
          <a href="#" className="flex items-center group">
            <img src="/Jeff_Buckner-Logo.png" alt="Leadership & Formation" className="w-[220px] h-auto object-contain" />
          </a>
        )}
        
        <div className="hidden md:flex space-x-10 items-center">
          {navLinks.map((link) => (
            isConsultation && onNavigateToSection ? (
              <button
                key={link.name}
                type="button"
                onClick={() => onNavigateToSection(link.href)}
                className="text-xs font-bold text-slate-700 hover:text-brand-navy transition-colors uppercase tracking-widest"
              >
                {link.name}
              </button>
            ) : (
              <a key={link.name} href={link.href} className="text-xs font-bold text-slate-700 hover:text-brand-navy transition-colors uppercase tracking-widest">
                {link.name}
              </a>
            )
          ))}
          {onScheduleConsultation ? (
            <button type="button" onClick={onScheduleConsultation} className="bg-brand-navy text-white px-6 py-2.5 text-xs font-bold hover:bg-brand-rust transition-all uppercase tracking-widest border border-brand-navy">
              Consultation
            </button>
          ) : (
            <a href="#consultation" className="bg-brand-navy text-white px-6 py-2.5 text-xs font-bold hover:bg-brand-rust transition-all uppercase tracking-widest border border-brand-navy inline-block">
              Consultation
            </a>
          )}
        </div>

        <button className="md:hidden text-slate-900" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col p-8 space-y-8 md:hidden">
          <div className="flex justify-end">
            <button onClick={() => setMobileMenuOpen(false)}><X size={32} /></button>
          </div>
          <div className="flex flex-col space-y-5">
            {navLinks.map((link) => (
              isConsultation && onNavigateToSection ? (
                <button
                  key={link.name}
                  type="button"
                  onClick={() => goToSection(link.href)}
                  className="text-2xl font-bold tracking-tighter text-left"
                >
                  {link.name}
                </button>
              ) : (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setMobileMenuOpen(false)} 
                  className="text-2xl font-bold tracking-tighter"
                >
                  {link.name}
                </a>
              )
            ))}
          </div>
          <button type="button" onClick={goToConsultation} className="bg-brand-navy text-white p-5 font-bold text-base uppercase tracking-widest mt-auto hover:bg-brand-rust transition-all">
            Schedule Consultation
          </button>
        </div>
      )}
    </nav>
  );
};
