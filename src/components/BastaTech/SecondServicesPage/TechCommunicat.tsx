import React from 'react'
import InfoCard from './Infocard'
import image1 from "../../../assets/BastaTech/ServicesPage 2/technicalCommunication.jpg"

const TechnicalCommunication: React.FC = () => {
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
                                title="Technical Communication"
                                description="Technical Communication helps customers to adopt, use, and love your product. We provide accurate user and technical documentation as well as comprehensive learning solutions—including text, video, online platforms, and more to reach users where and when they need product information.Technical Communication bridges technology and users by showing first steps, hinting on terms or flows, assisting with deeper knowledge about the product, helping administrators to install and maintain the product, building trust between product and users who speak other languages, helping other developers integrate with the product API."
                                listItems={[
                                    "Eliminate lost revenue by the properly delivered, fact-checked message to users in any geographic market",
                                    "Simplify integration of tech content for development, administration, configuration, and maintenance documentation—along with developer-friendly SDKs and API portals",
                                    "Seamless user onboarding and reduced user support"
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

export default TechnicalCommunication
