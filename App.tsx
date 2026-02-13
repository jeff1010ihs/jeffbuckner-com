import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesGrid } from './components/ServicesGrid';
import { Philosophy } from './components/Philosophy';
import { GeminiAdvisor } from './components/GeminiAdvisor';
import { StyleGuide } from './components/StyleGuide';
import { Footer } from './components/Footer';
import { ConsultationPage } from './components/ConsultationPage';

const App: React.FC = () => {
  const [page, setPage] = useState<'home' | 'consultation'>('home');
  const [scrollToHash, setScrollToHash] = useState<string | null>(null);

  useEffect(() => {
    if (page !== 'home' || !scrollToHash) return;
    const id = scrollToHash.replace(/^#/, '');
    const el = document.getElementById(id);
    if (el) {
      const t = setTimeout(() => {
        el.scrollIntoView({ behavior: 'smooth' });
        setScrollToHash(null);
      }, 100);
      return () => clearTimeout(t);
    }
    setScrollToHash(null);
  }, [page, scrollToHash]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar
        currentPage={page}
        onScheduleConsultation={() => setPage('consultation')}
        onGoToHome={() => setPage('home')}
        onNavigateToSection={(hash) => {
          setPage('home');
          setScrollToHash(hash);
        }}
      />
      <main className="flex-grow">
        {page === 'home' ? (
          <>
            <Hero onScheduleConsultation={() => setPage('consultation')} />
            <ServicesGrid onScheduleConsultation={() => setPage('consultation')} />
            <Philosophy />
            <GeminiAdvisor />
            <StyleGuide />
          </>
        ) : (
          <ConsultationPage onBack={() => setPage('home')} />
        )}
      </main>
      <Footer />
    </div>
  );
};

export default App;
