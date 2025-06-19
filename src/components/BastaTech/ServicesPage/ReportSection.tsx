import React from 'react';
import leftImage from "../../../assets//BastaTech/ServicesPage/New folder/Group 1321315379.png"
import ReusableButton from '../../reusableComponents/ReusableButton';

const ReportSection: React.FC = () => {
    return (
        <>

            <div className="min-w-full bg-[#f3f3f3] ">
                <div className="container mx-auto py-8 h-auto ">
                    <div className="2xl:max-w-7xl mx-auto w-[95%] h-auto sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between mt-15 gap-4">

                        {/* Images Section */}
                        <div className="w-auto h-auto">
                            <div className="w-full h-full">
                                <img src={leftImage} alt="report Image" className="w-full h-full object-cover" />
                            </div>
                        </div>

                        {/* Text Section */}
                        <div className="w-full md:w-[846px] h-auto">
                            <div className="h-auto w-full">
                                <div className="w-full h-auto p-2 flex flex-col items-center md:items-start  md:text-left">

                                    <div className="text-xl font-bold font-Fort TRIAL text-[#000000] mb-2 w-full md:w-auto">
                                        REPORT
                                    </div>

                                    <div className="text-[#000000] md:text-[50px] text-[32px] font-bold w-full">
                                        From Hype to Impact: How Enterprises Can Unlock Real <div className='text-[#004FF2]'>Business Value <span className="text-[#000000] font-bold">with AI</span></div>
                                    </div>



                                    <ReusableButton
                                        label="read the report"
                                        color="bg-[#004FF2]"
                                        textColor="text-white"
                                        fontSize="text-[22px]"
                                        className="text-white md:w-[284px] w-full bg-[#004FF2] font-Fort TRIAL text-[22px] font-bold py-3"
                                    />

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default ReportSection
