import useReveal from "./hooks/useReveal";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import PartnerLogos from "./components/PartnerLogos";
import Problem from "./components/Problem";
import Solution from "./components/Solution";
import Technology from "./components/Technology";
import PowerGrid from "./components/PowerGrid";
import Legal from "./components/Legal";
import Roadmap from "./components/Roadmap";
import Market from "./components/Market";
import News from "./components/News";
import About from "./components/About";
import Careers from "./components/Careers";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SocialBar from "./components/SocialBar";

export default function App() {
  useReveal();

  return (
    <>
      <div className="scanline-overlay" />
      <div className="noise-overlay" />
      <Nav />
      <Hero />
      <PartnerLogos />
      <Problem />
      <Solution />
      <Technology />
      <PowerGrid />
      <Legal />
      <Roadmap />
      <Market />
      <News />
      <About />
      <Careers />
      <Contact />
      <SocialBar />
      <Footer />
    </>
  );
}
