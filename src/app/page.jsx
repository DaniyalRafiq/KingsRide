import Hero from "./components/Hero";
import { About } from './components/About';
import { WhyChooseUs } from "./components/WhyChooseUs.jsx";
import { ServicesSection } from "./components/ServicesSection.jsx";
import { AdvancedFeatures } from "./components/AdvancedFeatures.jsx";
import { ForDrivers } from "./components/ForDrivers.jsx";
import { ForPassengers } from "./components/ForPassengers.jsx";
import { Works } from "./components/Works.jsx";
import { Testimonials } from "./components/Testimonials.jsx";
import { DownloadApp } from './components/DownloadApp';
import Faq from './components/Faq.jsx';
import Loader from "./components/Loader"


export default function Home() {
  return (
    <div className="main-wrapepr">
      <Hero />
      <About />
      <ServicesSection />
      <WhyChooseUs />
      <AdvancedFeatures />
      <ForDrivers />
      {/* <ForPassengers /> */}
      <Works />
      <Testimonials />
      <DownloadApp />
      <Faq />
    </div>
  );
}

