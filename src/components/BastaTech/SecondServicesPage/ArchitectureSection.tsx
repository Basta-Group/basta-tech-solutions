import React from 'react'
import InfoCard from './Infocard'
import image1 from "../../../assets/BastaTech/HeroBackgroundImage.jpg"


const ArchitectureSection: React.FC = () => {
  return (
    <>
            <div
                className=" min-w-full h-auto bg-[#F6F6F6] "

            >
                <div className="@container h-auto p-4 ">
                    <div className="2xl:max-w-7xl h-auto  mx-auto w-[95%] sm:px-6 lg:px-8 flex justify-between mt-15  flex-col gap-4">











                        <div className='w-full'>
                            <InfoCard
                                imageSrc={image1}
                                title="Solution Architecture"
                                description="Solutions architecture (SA) is foundational for all software development and design activities. SA balances system quality attributes, business goals, and technical requirements to develop an elegant, customized solution. SoftServe’s architects support the full development cycle from early ideation, through to design and ongoing architecture support during the implementation."
                                listItems={[
                                    "Analyzing complex software systems for architectural risks, technical debt, and modernization capabilities.",
                                    "Continuous communication between business and technical stakeholders to ensure changes and adjustments are captured and implemented .",
                                    "Smooth and efficient architecture governance process for the project implementation ."
                                ]}
                            />
                        </div>


                       






                    </div>
                    <div>

                    </div>

                </div>







            </div>


        </>
  )
}

export default ArchitectureSection
