/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
// import ContactForm from "../ContactForm";
// import GamesSection from "../GamesSection";
import HeroSlider from "../HeroSlider";
import MiddleSection from "../MiddleSection";
import ServicesSection from "../ServicesSection";
import ProjectsSection from "../ProjectsSection";
import ContactForm from "../ContactForm";
import TechStackSection from "../TechStack";
// // import LogoSlider from "../LogoSlider";
// import AboutBastaPlay from "../AboutBastaPlay";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#ffffff] overflow-x-hidden ">
      {/* Hero Section */}
      <HeroSlider />

      {/* MiddleSection */}
      <MiddleSection />

      {/* Services Section */}
      <ServicesSection />


      {/* Services Section */}
      <ProjectsSection />

      {/* Tech Section */}
      <TechStackSection />

      {/* Contact Section */}
       <ContactForm />



      {/* All Games Section */}
      {/* <GamesSection hideFilterBar={true} /> */}

      {/* Contact Form Section */}
      {/* <section id="contact">
       
      </section> */}

      {/* Partners Logo Slider */}
      {/* <LogoSlider /> */}
    </div>
  );
};

export default Home;
