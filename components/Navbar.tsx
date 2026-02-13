import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import { PrimaryButton } from './Button';

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
    { name: 'AI Site Chat', href: '#advisor', icon: true },
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
                className="text-xs font-bold text-slate-700 hover:text-brand-navy transition-colors uppercase tracking-widest flex items-center"
              >
                {link.icon && <Sparkles className="w-3.5 h-3.5 mr-1.5 flex-shrink-0" />}
                {link.name}
              </button>
            ) : (
              <a key={link.name} href={link.href} className="text-xs font-bold text-slate-700 hover:text-brand-navy transition-colors uppercase tracking-widest flex items-center">
                {link.icon && <Sparkles className="w-3.5 h-3.5 mr-1.5 flex-shrink-0" />}
                {link.name}
              </a>
            )
          ))}
          <PrimaryButton
            size="compact"
            href={onScheduleConsultation ? undefined : '#consultation'}
            onClick={onScheduleConsultation}
          >
            Consultation
          </PrimaryButton>
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
                  className="text-2xl font-bold tracking-tighter text-left flex items-center"
                >
                  {link.icon && <Sparkles className="w-6 h-6 mr-2 flex-shrink-0" />}
                  {link.name}
                </button>
              ) : (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setMobileMenuOpen(false)} 
                  className="text-2xl font-bold tracking-tighter flex items-center"
                >
                  {link.icon && <Sparkles className="w-6 h-6 mr-2 flex-shrink-0" />}
                  {link.name}
                </a>
              )
            ))}
          </div>
          <PrimaryButton size="lg" onClick={goToConsultation} className="mt-auto">
            Schedule Consultation
          </PrimaryButton>
        </div>
      )}
    </nav>
  );
};
