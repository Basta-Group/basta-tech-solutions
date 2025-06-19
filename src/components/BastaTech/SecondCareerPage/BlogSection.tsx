import React from 'react';
import topImage from "../../../assets/BastaTech/CareersPage/Group 1321315379.png"

const BlogSection: React.FC = () => {
  return (
    <>

            <div className="min-w-full bg-[#f6f6f6]  ">
                <div className="container mx-auto py-8 h-auto  ">
                   <div className="2xl:max-w-7xl mx-auto w-[95%] h-auto sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between mt-15 gap-4">

                        {/* Images Section */}
                        <div className="w-auto h-auto">
                            <div className="w-full h-full">
                                <img src={topImage} alt="report Image" className="w-full h-full object-cover" />
                            </div>
                        </div>

                        {/* Text Section */}
                        <div className="w-full md:w-[885px] h-auto">
                            <div className="h-auto w-full">
                                <div className="w-full h-auto p-2 flex flex-col items-center md:items-start text-center md:text-left">

                                    <div className="text-xl font-bold font-Fort TRIAL text-[#000000] mb-2 w-full md:w-auto">
                                        Blog
                                    </div>

                                    <div className="text-[22px] font-medium font-Fort TRIAL text-[#000000] mb-2 w-full md:w-auto mt-2">
                                        Career Tips, Life At Basta Solution
                                    </div>

                                    <div className="text-[#000000]  text-[32px] font-extrabold underline">
                                       Empathy: An Essential Skill for the Modern Engineer
                                    </div>

                                    <div className="text-[#000000]  text-[32px] font-bold underline">
                                       
                                    </div>

                                     <div className="text-[#000000]  text-[32px] font-bold underline">
                                      

                                    </div>


                                   

                                    

                                    <button className="text-white bg-[#004FF2] font-Fort TRIAL text-[22px] font-bold py-3 px-6 mt-6 md:mt-4 w-full sm:w-auto md:w-[224px] mx-auto md:mx-0">
                                        Read More
                                    </button>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </>
  )
}

export default BlogSection
