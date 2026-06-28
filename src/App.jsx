import About from './components/About.jsx';
import BestPractices from './components/BestPractices.jsx';
import CaseStudies from './components/CaseStudies.jsx';
import Contact from './components/Contact.jsx';
import DataEngineering from './components/DataEngineering.jsx';
import Hero from './components/Hero.jsx';
import Navbar from './components/Navbar.jsx';
import SqlTechniqueSection from './components/SqlTechniqueSection.jsx';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <main>
        <Hero />
        <About />
        <SqlTechniqueSection />
        <CaseStudies />
        <DataEngineering />
        <BestPractices />
        <Contact />
      </main>
    </div>
  );
}

export default App;
