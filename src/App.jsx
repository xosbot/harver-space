import useReveal from "./hooks/useReveal";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import Solution from "./components/Solution";
import Technology from "./components/Technology";
import PowerGrid from "./components/PowerGrid";
import Legal from "./components/Legal";
import Roadmap from "./components/Roadmap";
import Market from "./components/Market";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  useReveal();

  return (
    <>
      <div className="scanline-overlay" />
      <div className="noise-overlay" />
      <Nav />
      <Hero />
      <Problem />
      <Solution />
      <Technology />
      <PowerGrid />
      <Legal />
      <Roadmap />
      <Market />
      <About />
      <Contact />
      <Footer />
    </>
  );
}
