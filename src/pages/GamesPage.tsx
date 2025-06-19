import React from "react";
import PopularGamesSection from "../components/MiddleSection";
import GamesSection from "../components/GamesSection";
import ContactForm from "../components/ContactForm";

const GamesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0B0B13] pt-16">
      {/* Popular Games Slider Section with custom title */}
      <PopularGamesSection title="NEW GAMES" />

      {/* All Games Section */}
      <section className="md:py-16 bg-[#181a29]">
        <GamesSection />
      </section>

      {/* Contact Form Section */}
      <section id="contact">
        <ContactForm />
      </section>
    </div>
  );
};

export default GamesPage;
