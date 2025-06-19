import React from 'react'
import bgImage from "../../../assets/BastaTech/HeroBackgroundImage.jpg";
import rightImage from "../../../assets/BastaTech/IndustriesTemplatePage/TopSectionImage.jpg"




const TopSection: React.FC = () => {
    return (
        <>
            <div
                className=" min-w-full mt-0 bg-cover bg-center md:pt-4"
                style={{ backgroundImage: `url(${bgImage})` }}
            >
                <div className="@container h-auto ">
                    <div className="2xl:max-w-7xl  h-auto  mx-auto w-[95%] sm:px-6 lg:px-8 flex md:flex-row justify-between mt-15 md:gap-32 flex-col gap-4 py-2">

                        {/* Text Section */}
                        <div className="md:w-[43%]  h-auto place-content-center w-full  text-center md:text-left">
                            <div className=" h-auto w-full  place-content-center">

                                <div className="p-4">
                                    <div className="flex flex-col  px-4 gap-[25px]">
                                        <div className="text-xl font-bold font-Fort TRIAL text-[#000000] mb-2">
                                            Basta Tech Solution
                                        </div>

                                        <div className="text-[36px] sm:text-[42px] md:text-[55px] font-extrabold leading-tight mt-4 text-[#000000]">
                                            Open Bankings
                                            & Payments
                                        </div>


                                        <p className='text-[20px] text-[#000000] mt-2 mb-8 font-medium '>
                                            Driving true experience transformation for organizations, from defining your strategy to designing your solutions to executing your vision.
                                        </p>

                                        <div className="flex flex-col md:flex-row gap-4  ">
                                            <button className="text-white bg-[#004FF2] text-[22px] font-bold  py-[16px] px-[35px]">
                                                Contact Us
                                            </button>
                                        </div>





                                    </div>

                                </div>








                            </div>



                        </div>


                        <div className="md:w-[49%] h-auto  w-full">
                            {/* Image */}

                            <img
                                src={rightImage}
                                alt="stackview"
                                className="md:h-[100%]  w-full  object-contain "
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

export default TopSection;
