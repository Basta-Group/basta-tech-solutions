import React from 'react'
import TopSection from '../../components/BastaTech/SecondServicesPage/TopSection'
import DevelopementSection from '../../components/BastaTech/SecondServicesPage/DevelopementSection'
import SoftwareTesting from '../../components/BastaTech/SecondServicesPage/SoftwareTesting'
import Awards from '../../components/BastaTech/SecondServicesPage/Awards'
import ArchitectureSection from '../../components/BastaTech/SecondServicesPage/ArchitectureSection'
import BussinessAnalysis from '../../components/BastaTech/SecondServicesPage/BussinessAnalysis'
import TechnicalCommunication from '../../components/BastaTech/SecondServicesPage/TechCommunicat'
import ContactForm from '../../components/ContactForm'

const SecondServicesPage: React.FC = () => {
  return (
    <>
     <div className="min-h-screen bg-[#ffffff] overflow-x-hidden ">

       <TopSection />

       <DevelopementSection />

       <SoftwareTesting />

       <Awards />

       <ArchitectureSection />

       <BussinessAnalysis />
       
       <TechnicalCommunication />

       <ContactForm />




     </div>
    
    </>
  )
}

export default SecondServicesPage
