import React from 'react'
import TopSection from '../../components/BastaTech/IndustriesTemplatePage/TopSection'
import ClientSolutionSection from '../../components/BastaTech/IndustriesTemplatePage/ClientSolutionSection'
import CapabilitySection from '../../components/BastaTech/IndustriesTemplatePage/CapabilitySection'
import ContactForm from '../../components/ContactForm'
import MiddleSection from '../../components/BastaTech/IndustriesTemplatePage/MiddleSection'

const IndustriesTemplatePage: React.FC = () => {
  return (
    <>
     <div className="min-h-screen bg-[#ffffff] overflow-x-hidden ">


        <TopSection />

        <MiddleSection />

        <ClientSolutionSection />

        <CapabilitySection />

        <ContactForm  color={"#f6f6f6"}/>

        
     </div>
    
    
    </>
  )
}

export default IndustriesTemplatePage
