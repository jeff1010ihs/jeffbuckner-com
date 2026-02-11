
import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesGrid } from './components/ServicesGrid';
import { Philosophy } from './components/Philosophy';
import { GeminiAdvisor } from './components/GeminiAdvisor';
import { StyleGuide } from './components/StyleGuide';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <ServicesGrid />
        <Philosophy />
        <GeminiAdvisor />
        <StyleGuide />
      </main>
      <Footer />
    </div>
  );
};

export default App;
