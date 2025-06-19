import React from 'react'
import ReusableButton from '../../reusableComponents/ReusableButton'

const MiddleSection: React.FC = () => {
  return (
    <>

      <div className="min-w-full">
        <div className="container mx-auto pt-8 pb-8  ">
          <div className="2xl:max-w-7xl h-auto  w-[95%] sm:px-6 lg:px-8   gap-4 py-4 mx-auto">

            <div className='text-[30px] md:text-[40px] lg:text-[50px] font-extrabold font-Fort TRIAL text-[#000000] mb-10 text-center '>
              AI Has Changed  <span className='text-[#004FF2]'>Everything</span>
            </div>


            <div className='text-[18px] md:text-[22px] font-medium font-Fort TRIAL text-[#000000] mb-10 text-center'>
              How is your engineering organization changing to embrace it and unleash innovation?
              In today's rapidly changing software product development landscape, there's more to improving product quality, speeding up time to market, and enhancing productivity, scalability and innovation than technology alone. Your business outcomes depend not only on your GenAl tools, agents and infrastructure, but also your processes and how your teams operate within this Al-infused ecosystem.
              When you orchestrate these components for every part of the SDLC, you can radically optimize development and deliver superior products that align with dynamic market requirements while exceeding customer expectations.
              This requires a comprehensive methodology, like Al/RUN™, that enables you to grow your GenAl capabilities, integrate them into your ways of working and empower your teams with knowledge building.
              From our award-winning education programs and cutting-edge methodologies to our deep-rooted expertise in Engineering Excellence (EngX), we take an integrated approach that combines industry-proven tools, semi-autonomous Al agents, tailored processes, leading platforms and skilled experts to help you create, run and support revolutionary software.
            </div>


             <div className="flex flex-col md:flex-row gap-4 mt-6 justify-center ">
                  <ReusableButton
                      label="CONTACT US"
                      color="bg-[#004FF2]"
                      textColor="text-white"
                      fontSize="text-[22px]"
                      className="text-white md:w-[284px] w-full bg-[#004FF2] font-Fort TRIAL text-[22px] font-bold py-3"
                    />
                </div>






          </div>
        </div>
      </div>




    </>
  )
}

export default MiddleSection
