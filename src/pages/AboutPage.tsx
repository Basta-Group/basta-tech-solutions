import React from "react";
import TopSection from "../components/BastaTech/AboutPage/TopSection";
import LeadershipSection from "../components/BastaTech/AboutPage/LeadershipSection";
import TechnologiesSection from "../components/BastaTech/AboutPage/TechnologiesSection";
import Locations from "../components/BastaTech/AboutPage/Locations";
import NewsSection from "../components/BastaTech/AboutPage/NewsSection";


const AboutPage: React.FC = () => {
  return (

     <div className="min-h-screen bg-[#ffffff] overflow-x-hidden ">

        <TopSection />

        <LeadershipSection />


        <TechnologiesSection />


        <NewsSection />

        <Locations />
     

    </div>
   
  );
};

export default AboutPage;
