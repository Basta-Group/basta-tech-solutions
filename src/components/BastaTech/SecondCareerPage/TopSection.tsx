import React from 'react';
import bgImage from '../../../assets/BastaTech/HeroBackgroundImage.jpg';
import image1 from "../../../assets/BastaTech/CareersPage/Image2.jpg"

const TopSection: React.FC = () => {
    return (
        <>
            <div
                className="min-w-full mt-0 bg-cover bg-center md:pt-4"
                style={{ backgroundImage: `url(${bgImage})` }}
            >
                <div className="@container">
                    <div className="2xl:max-w-7xl   mx-auto w-[95%] sm:px-6 lg:px-8 flex md:flex-row justify-between md:mt-0 mt-15 md:gap-32 flex-col gap-4">

                        {/* Text Section */}
                        <div className=" md:w-[43%]   h-auto place-content-center w-full ">

                            <div className='mb-25'>
                                <div className="  w-full  flex items-center pt-4 justify-center ">
                                    <div className="flex flex-col  px-4  justify-center">
                                        <div className="text-xl font-bold font-Fort TRIAL text-[#000000] mb-2  md:mt-25">
                                            Basta Tech Solution
                                        </div>

                                        <div className="2xl:text-[66px]  md:text-[50px] font-bold font-Fort TRIAL text-[#000000] mt-5 ">
                                            The Home Of
                                            Modern Engineer
                                        </div>

                                        <div className="text-[20px] font-medium font-Fort TRIAL text-[#000000] mt-5  ">
                                            Find your perfect IT job at SoftServe
                                            Grow your tech career with us - work remotely from your home or in our offices all over the world
                                        </div>

                                        <button className="text-white  md:w-[224px] bg-[#004FF2] font-Fort TRIAL text-[22px] font-bold py-3 mt-5 ">
                                            Learn More
                                        </button>


                                    </div>
                                </div>
                            </div>


                        </div>





                        <div className="md:w-[55%] h-auto  w-full">
                            {/* Image */}

                            <img src={image1} alt="" className='w-full h-full object-contain' />



                        </div>


                    </div>
                    <div>

                    </div>

                </div>







            </div>


        </>
    )
}

export default TopSection

