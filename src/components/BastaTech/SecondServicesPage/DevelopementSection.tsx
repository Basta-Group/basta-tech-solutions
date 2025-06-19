import React from 'react'
import InfoCard from './Infocard'
import image1 from "../../../assets/BastaTech/ServicesPage 2/devImage.jpg"

const DevelopementSection: React.FC = () => {
    return (
        <>
            <div
                className=" min-w-full h-auto  "

            >
                <div className="@container h-auto p-4 ">
                    <div className="2xl:max-w-7xl h-auto  mx-auto w-[95%] sm:px-6 lg:px-8 flex justify-between mt-15  flex-col gap-4">











                        <div className='w-full'>
                            <InfoCard
                                imageSrc={image1}
                                title="Software Development"
                                description="Software engineering is at the heart of what we do. 
                                SoftServe’s engineers bring years of strategic planning and technical expertise to deliver results.
                                 We oversee and execute on every phase of development, from ideation through end-user testing.
                                  Trust SoftServe’s engineering team to manage all stages of the development cycle—from brainstorming to post-delivery support.
                                   Our agile approach enables you to deliver solutions quickly and efficiently."
                                listItems={[
                                    "Reduce operational costs and increase productivity through agile processes.",
                                    "Flawless integration of teams and processes to minimize downtime and speed execution.",
                                    "End-to-end project oversight and management, ensuring issues are identified and managed before they become problems."
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

export default DevelopementSection
