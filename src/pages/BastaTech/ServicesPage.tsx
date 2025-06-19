import React from 'react'
import TopSection from '../../components/BastaTech/ServicesPage/TopSection';
import MiddleSection from '../../components/BastaTech/ServicesPage/MiddleSection';
import ContactForm from '../../components/ContactForm';
import ReportSection from '../../components/BastaTech/ServicesPage/ReportSection';
import BlogSection from '../../components/BastaTech/ServicesPage/BlogSection';
import FocusSection from '../../components/BastaTech/ServicesPage/FocusSection';
import TransformingSection from '../../components/BastaTech/ServicesPage/TransformingSection';

const ServicesPage: React.FC = () => {
  return (
    
    <div className="min-h-screen bg-[#ffffff] overflow-x-hidden ">

        <TopSection />

        <MiddleSection />

        <ReportSection />

        <FocusSection />

        <TransformingSection />

        <BlogSection />




        <ContactForm color={"#f6f6f6"} />


       
     

    </div>

  );
}

export default ServicesPage
