import React from 'react';
import InfoCard from './Infocard'
import image1 from "../../../assets/BastaTech/ServicesPage 2/testingImage.jpg"

const SoftwareTesting: React.FC = () => {
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
                                title="Software Testing"
                                description="Software testing and quality management is based on a simple premise: define the ideal quality and ensure the final product functions and performs to that ideal—as efficiently as possible. SoftServe foresees possible issues and production gaps causing delays, errors, and change requests. Our experts then define and optimize a reliable, predictable, and efficient testing process using best practices and proprietary accelerators to support development of qualitative software."
                                listItems={[
                                    "Proactive quality risk prediction, identification, and prevention.",
                                    "Test solution, framework and tool development and deployment.",
                                    "Cost reduction and productivity improvement by leveraging test automation."
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

export default SoftwareTesting

