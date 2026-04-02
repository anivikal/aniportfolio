import Preloader from "../components/Preloader";
import CustomCursor from "../components/CustomCursor";
import AuroraBackground from "../components/AuroraBackground"; // Changed this line
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export default function Portfolio() {
  return (
    <div className="bg-[#030303] text-white min-h-screen font-sans selection:bg-cyan-500/30 scroll-smooth relative">
      <Preloader />
      <CustomCursor />
      <AuroraBackground /> {/* Changed this line */}
      <Navbar />

      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}