import React from 'react'
import TopSection from '../../components/BastaTech/ContactPage/TopSection'
import Locations from '../../components/BastaTech/AboutPage/Locations'
import AskUsAnything from '../../components/BastaTech/ContactPage/AskUsAnything'

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#ffffff] overflow-x-hidden ">

        <TopSection />

        <AskUsAnything />

        <Locations />



    </div>
  )
}

export default ContactPage
