import React from 'react'
import TopSection from '../../components/BastaTech/CareersPage/TopSection'
import MiddleSection from '../../components/BastaTech/CareersPage/MiddleSection'
import ContactForm from '../../components/ContactForm'

const CareersPage: React.FC = () => {
  return (
   <div className="min-h-screen bg-[#ffffff] overflow-x-hidden ">

       <TopSection />


       <MiddleSection />

       <ContactForm color={"#f6f6f6"} />



    </div>
  )
}

export default CareersPage
