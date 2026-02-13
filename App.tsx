import React, { useState } from 'react';
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

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onScheduleConsultation={() => setPage('consultation')} />
      <main className="flex-grow">
        {page === 'home' ? (
          <>
            <Hero onScheduleConsultation={() => setPage('consultation')} />
            <ServicesGrid />
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
