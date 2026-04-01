import { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Vision from './components/Vision';
import Events from './components/Events';
import Mentors from './components/Mentors';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import LoadingScreen from './components/LoadingScreen';
import TeamPage from './pages/TeamPage';

function HomePage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isLoading]);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {!isLoading && (
        <>
          <Navbar />
          <Sidebar />
          <main>
            <Hero />
            <About />
            <Vision />
            <Events />
            <Mentors />
          </main>
          <Footer />
        </>
      )}
    </>
  );
}

export default function App() {
  return (
    <Router>
      <div className="bg-black text-white min-h-screen selection:bg-primary/30 selection:text-white">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/team" element={<TeamPage />} />
        </Routes>
      </div>
    </Router>
  );
}
