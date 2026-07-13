import { useState, lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ValueProposition from './components/ValueProposition';
import Portfolio from './components/Portfolio';
import ManagedModel from './components/ManagedModel';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

const MultiStepForm = lazy(() => import('./components/MultiStepForm'));

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);

  const openModal = () => {
    setHasOpened(true);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen font-sans">
      <Navbar openModal={openModal} />
      <main>
        <Hero openModal={openModal} />
        <ValueProposition />
        <Portfolio />
        <ManagedModel />
        <Pricing openModal={openModal} />
      </main>
      <Footer openModal={openModal} />
      
      {hasOpened && (
        <Suspense fallback={null}>
          <MultiStepForm 
            isOpen={isModalOpen} 
            onClose={() => setIsModalOpen(false)} 
          />
        </Suspense>
      )}
    </div>
  );
}
