import useReveal from "./hooks/useReveal";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import PartnerLogos from "./components/PartnerLogos";
import Problem from "./components/Problem";
import Solution from "./components/Solution";
import Technology from "./components/Technology";
import MissionGallery from "./components/MissionGallery";
import PowerGrid from "./components/PowerGrid";
import Legal from "./components/Legal";
import Roadmap from "./components/Roadmap";
import Market from "./components/Market";
import MissionStatus from "./components/MissionStatus";
import InvestorSection from "./components/InvestorSection";
import News from "./components/News";
import About from "./components/About";
import Careers from "./components/Careers";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SocialBar from "./components/SocialBar";
import Newsletter from "./components/Newsletter";

export default function App() {
  useReveal();

  return (
    <>
      <Nav />
      <Hero />
      <PartnerLogos />
      <Problem />
      <Solution />
      <Technology />
      <MissionGallery />
      <PowerGrid />
      <Legal />
      <Roadmap />
      <MissionStatus />
      <Market />
      <InvestorSection />
      <News />
      <About />
      <Careers />
      <Contact />
      <SocialBar />
      <Newsletter />
      <Footer />
    </>
  );
}
