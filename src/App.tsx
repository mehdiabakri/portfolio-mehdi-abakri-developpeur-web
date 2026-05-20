import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Projects from './sections/Projects';

function App() {
  return (
    <div className="bg-slate-900 min-h-screen font-sans selection:bg-blue-400/30 selection:text-blue-400 text-slate-100">
      
      <Navbar />
      
      <main>
        <Hero />
        <Projects />
        
        {/* Sections temporaires pour tester le scroll */}
        <section id="about" className="h-screen p-20 bg-slate-800">
          <h2 className="text-3xl font-bold">À Propos</h2>
        </section>

        <section id="contact" className="h-screen p-20 bg-slate-800">
          <h2 className="text-3xl font-bold">Contact</h2>
        </section>
      </main>
      
    </div>
  );
}

export default App;