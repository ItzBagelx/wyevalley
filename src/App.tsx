import { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

const ValueProposition = lazy(() => import('./components/ValueProposition'));
const Portfolio = lazy(() => import('./components/Portfolio'));
const ManagedModel = lazy(() => import('./components/ManagedModel'));
const Pricing = lazy(() => import('./components/Pricing'));
const Footer = lazy(() => import('./components/Footer'));

export default function App() {
  return (
    <div className="min-h-screen font-sans">
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={<div className="h-24 bg-theme-bg" />}>
          <ValueProposition />
        </Suspense>
        <Suspense fallback={<div className="h-24 bg-theme-bg" />}>
          <Portfolio />
        </Suspense>
        <Suspense fallback={<div className="h-24 bg-theme-bg" />}>
          <ManagedModel />
        </Suspense>
        <Suspense fallback={<div className="h-24 bg-theme-bg" />}>
          <Pricing />
        </Suspense>
      </main>
      <Suspense fallback={<div className="h-24 bg-theme-bg" />}>
        <Footer />
      </Suspense>
    </div>
  );
}
