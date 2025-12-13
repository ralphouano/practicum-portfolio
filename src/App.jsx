import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PersonalProfile from './components/PersonalProfile';
import Preparation from './components/Preparation';
import Gallery from './components/Gallery';
import WeeklyJourney from './components/WeeklyJourney';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background text-text-primary selection:bg-primary selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <PersonalProfile />
        <Preparation />
        <Gallery />
        <WeeklyJourney />
      </main>
      <Footer />
    </div>
  );
}

export default App;
