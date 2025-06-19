import React from 'react'
import InfoCard from './Infocard'
import image1 from "../../../assets/BastaTech/ServicesPage 2/bussinessAnalyst.png"


const BussinessAnalysis: React.FC = () => {
  return (
    <>
            <div
                className=" min-w-full h-auto bg-[#ffffff] "

            >
                <div className="@container h-auto p-4 ">
                    <div className="2xl:max-w-7xl h-auto  mx-auto w-[95%] sm:px-6 lg:px-8 flex justify-between mt-15  flex-col gap-4">











                        <div className='w-full'>
                            <InfoCard
                                imageSrc={image1}
                                title="Bussiness Analysis"
                                description="Time-to-market for successful products are getting shorter, while customer expectations are increasing. Business analysts (BAs) ensure that stakeholder needs, business context, and solution value are captured quickly and comprehensively for end product delivery. SoftServe works closely with clients to establish product foundations, ideate and define the best solution to address needs, frame solution vision and scope, define roadmap and backlog, and drive implementation for the highest quality product—with on-time delivery."
                                listItems={[
                                    "Clear vision, goals, expectations and success criteria achieved through stakeholder alignment.",
                                    "Business case, roadmap and scope are based on market data, user research and feasible alternatives ensuring integration of business, market and user requirements.",
                                    "Cost-effective solutions and accelerated time-to-market through less rework, clear scope, and effective processes."
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

export default BussinessAnalysis
