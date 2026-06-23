import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ValueProposition from './components/ValueProposition';
import Portfolio from './components/Portfolio';
import ManagedModel from './components/ManagedModel';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen font-sans">
      <Navbar />
      <main>
        <Hero />
        <ValueProposition />
        <Portfolio />
        <ManagedModel />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}
