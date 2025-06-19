import React from 'react'
import TopSection from '../../components/BastaTech/SecondCareerPage/TopSection'
import ContactForm from '../../components/ContactForm'
import LeadershipSection from '../../components/BastaTech/AboutPage/LeadershipSection'
import MiddleSection from '../../components/BastaTech/SecondCareerPage/MiddleSection'
import CreateCareerSection from '../../components/BastaTech/SecondCareerPage/CreateCareerSection'
import BlogSection from '../../components/BastaTech/SecondCareerPage/BlogSection'
import SingleCardSection from '../../components/BastaTech/SecondCareerPage/SingleCardSection'
import JobFindingSection from '../../components/BastaTech/SecondCareerPage/JobFindingSection'

const SecondCareerPage: React.FC = () => {
  return (
   <div className="min-h-screen bg-[#ffffff] overflow-x-hidden ">

    <TopSection />

    <JobFindingSection />

    <MiddleSection />

    <SingleCardSection />

    <CreateCareerSection />

    <BlogSection />

    <LeadershipSection />






    <ContactForm />



   </div>
  )
}

export default SecondCareerPage
