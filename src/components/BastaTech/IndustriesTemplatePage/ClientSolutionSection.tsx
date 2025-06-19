import React from 'react'
import CardSlider from '../SecondCareerPage/CardSlider'

const ClientSolutionSection: React.FC = () => {
    return (
        <>

            <div
                className=" min-w-full  bg-cover bg-center pt-4 bg-[#f6f6f6]">
                <div className="@container h-auto  ">
                    <div className="2xl:max-w-7xl h-auto  w-full sm:px-6 lg:px-8   gap-4 pb-4 mx-auto">


                        <div className='text-[30px] md:text-[40px] lg:text-[50px] font-extrabold font-Fort TRIAL text-[#000000]  text-center  '>
                            Our Client <span className='text-[#004FF2]'>Solutions</span>
                        </div>


                        <div className='justify-center flex  py-5'>
                            <div className=" h-auto md:w-[43%] w-full ">

                               <CardSlider />
                            </div>
                        </div>


                        {/* Bottom Section */}
                        <div className='justify-center flex mt-8'>
                            <div className="h-auto w-[95%] md:w-[calc(85%)] ">

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center  ">
                                    {/* Job ID */}
                                    <div className='border-t-[1px] border-[#CFCFCF] py-2 '>
                                        <div className='text-[20px] 2xl-text-[113px]  md:text-[70px] text-[#004FF2] font-bold text-xl text-center md:text-left'>100+</div>

                                        <div className='text-[16px] text-[#000000] font-medium'>Cross-industry clients in the last five years</div>
                                    </div>

                                    {/* Dropdown 1 */}
                                    <div className='border-t-[1px] border-[#CFCFCF] py-2 '>
                                        <div className='text-[20px] 2xl-text-[113px]  md:text-[70px] text-[#009DFF] font-bold text-xl text-center md:text-left'>1,000+</div>

                                        <div className='text-[16px] text-[#000000] font-medium'>Professionals</div>
                                    </div>

                                    {/* Dropdown 2 */}
                                    <div className='border-t-[1px] border-[#CFCFCF] py-2 '>
                                        <div className='text-[20px] 2xl-text-[113px]  md:text-[70px] text-[#004FF2] font-bold text-xl text-center md:text-left'>100+</div>

                                        <div className='text-[16px] text-[#000000] font-medium'>Programs</div>
                                    </div>

                                    
                                </div>
                            </div>
                        </div>















                    </div>


                    <div>

                    </div>

                </div>







            </div>

        </>
    )
}

export default ClientSolutionSection
