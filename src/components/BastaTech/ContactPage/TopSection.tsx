import React from 'react';
import bgImage from '../../../assets/BastaTech/HeroBackgroundImage.jpg';
import rightImage from '../../../assets/BastaTech/ContactPage/ContactPage image.png'

import CallIcon from "../../../assets/BastaTech/ContactPage/phone-calling-svgrepo-com 1.png";
import locIcon from "../../../assets/BastaTech/ContactPage/image 1.png"
import mailIcon from "../../../assets/BastaTech/ContactPage/Mask group.png"
import ReusableButton from '../../reusableComponents/ReusableButton';


const TopSection: React.FC = () => {
  return (
    <>
      <div
        className="min-w-full mt-0 bg-cover bg-center md:pt-4 "
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="@container  py-4">
          <div className="2xl:max-w-7xl   mx-auto w-[95%] sm:px-6 lg:px-8 flex md:flex-row justify-between mt-15 md:gap-32 flex-col gap-4">

            {/* Text Section */}
            <div className="w-full md:w-[43%] h-auto">
              <div className="">
                <div className="flex flex-col  px-4 gap-[25px]">
                  <div className="text-xl font-bold font-Fort TRIAL text-[#000000] mb-2">
                    Basta Tech Solution
                  </div>

                  <div className="text-[36px] sm:text-[42px] md:text-[66px] font-extrabold leading-tight mt-4 text-[#000000]">
                    Contact Us
                  </div>

                  <div className="text-lg sm:text-xl font-medium font-Fort TRIAL text-[#004FF2] mt-3 mb-6">

                    GLOBAL HEADQUARTERS

                  </div>

                  {/* Location Section */}
                  <div className="w-full md:w-auto md:h-[191px] h-auto">
                    <div className="flex">
                      <div className="w-full md:w-[389px] flex flex-col gap-6">

                        {/* Email */}
                        <div className="flex  gap-3 w-full">
                          <img src={mailIcon} alt="Mail Icon" className="w-[24px] h-[20px] object-contain" />
                          <div className="text-[14px] md:text-[19.15px] text-black">
                            <span className="font-medium">EMAIL:</span>
                            <a href="mailto:INFO@BASTA-GROUP.COM" className="ml-1 underline">
                              INFO@BASTA-GROUP.COM
                            </a>
                          </div>
                        </div>

                        {/* Location */}
                        <div className="flex items-center gap-3 w-full">
                          <img src={locIcon} alt="Location Icon" className="w-[24px] h-[24px] object-contain" />
                          <div className="text-[14px] md:text-[19.15px] text-black">
                            <span className="font-medium">HQ:</span> SLIEMA, MALTA
                          </div>
                        </div>

                        {/* Phone */}
                        <div className="flex items-center gap-3 w-full flex-wrap">
                          <img src={CallIcon} alt="Phone Icon" className="w-[24px] h-[24px] object-contain" />
                          <div className="text-[14px] md:text-[19.15px] text-black font-medium">PHONE:</div>
                          <p className="text-[16px] md:text-[19.15px] text-black">+356 xxx xxxx</p>
                        </div>

                      </div>
                    </div>
                  </div>


                  <div className="flex flex-col md:flex-row md:gap-4 mt-6 sm:w-[75%] h-auto gap-4 sm:mb-[100px] ">
                    <button className="text-white md:w-[284px] bg-[#004FF2] font-Fort TRIAL text-[22px] font-bold py-3">
                      Other Locations
                    </button>

                  </div>
                </div>
              </div>

            </div>





            <div className="md:w-[55%] h-auto  w-full">
              {/* Image */}

              <img
                src={rightImage}
                alt="stackview"
                className="md:h-[95%] h-full  w-full  object-fill "
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

export default TopSection
