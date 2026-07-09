import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ValueProposition from './components/ValueProposition';
import Portfolio from './components/Portfolio';
import ManagedModel from './components/ManagedModel';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import MultiStepForm from './components/MultiStepForm';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen font-sans">
      <Navbar openModal={() => setIsModalOpen(true)} />
      <main>
        <Hero openModal={() => setIsModalOpen(true)} />
        <ValueProposition />
        <Portfolio />
        <ManagedModel />
        <Pricing openModal={() => setIsModalOpen(true)} />
      </main>
      <Footer openModal={() => setIsModalOpen(true)} />
      
      <MultiStepForm 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
}
