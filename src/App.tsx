import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { VisionMission } from './components/VisionMission';
import { CoreValues } from './components/CoreValues';
import { Team } from './components/Team';
import { Subsidiaries } from './components/Subsidiaries';
import { Footer } from './components/Footer';

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
      <Footer />
    </div>
  );
}

export default App;
