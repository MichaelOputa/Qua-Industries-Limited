import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import VisionMission from './components/VisionMission';
import CoreValues from './components/CoreValues';
import Team from './components/Team';
import Subsidiaries from './components/Subsidiaries';
import FounderNote from './components/FounderNote';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <VisionMission />
      <CoreValues />
      <Team />
      <Subsidiaries />
      <FounderNote />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
