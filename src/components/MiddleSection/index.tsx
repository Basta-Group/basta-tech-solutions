import React from "react";
import leftImage from '../../assets/BastaTech/MiddleSectionLeftImage.png';
import rightImage from '../../assets/BastaTech/MiddleSectionRightImage.jpg';
import internationalSvgRepo from '../../assets/BastaTech/international-svgrepo-com.svg';
import ReusableButton from "../reusableComponents/ReusableButton";



const MiddleSection: React.FC = () => {




  return (
    <>

      <div className="min-w-full  md:mt-0 ">
        <div className="@container">
          <div className="2xl:max-w-7xl h-auto mx-auto w-[95%] sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between md:mt-15 mt-0 gap-4 mb-15">

            {/* Images Section */}
            <div className="w-full md:w-[43%] h-auto ">
              <div className="w-full md:w-full h-auto">

                <div className="relative w-full h-[300px] md:h-[444px] overflow-hidden">
                  {/* ✅ Left image – takes ~75% width */}
                  <div className="absolute top-0 left-0 w-[78%] h-full z-10">
                    <img src={leftImage} alt="Left" className="w-full h-full object-contain" />
                  </div>

                  {/* 🚀 Right image – overlaps, starts from center-right */}
                  <div className="absolute bottom-0 right-0 w-1/2 h-1/2 md:w-[52%] md:h-2/3 z-20">
                    <img src={rightImage} alt="Right" className="w-full h-full object-contain" />
                  </div>
                </div>




              </div>
            </div>

            {/* Text Section */}
            <div className="w-full md:w-[49%] h-auto">
              <div className=" p-4">
                <div className="flex flex-col justify-center ">
                  <div className="text-[32px] sm:text-[40px] md:text-[50px] 2xl:text-[65px] font-bold font-Fort TRIAL text-black mb-2">
                    About Basta <span className="text-[#004FF2]">Solutions</span>
                  </div>

                  <div className="text-[18px] sm:text-[20px] md:text-[22px] 2xl:text-[22px] font-medium font-Fort TRIAL text-black mt-3 mb-6">
                    Basta Finance is one of the world’s leading providers of investment, advisory and risk management solutions. We are a fiduciary to our clients. We’re investing for the future on behalf of our clients, inspiring our employees, and supporting our local communities. Watch the video to learn more.
                  </div>
                  <div className="flex flex-col md:flex-row md:gap-[50px] gap-4">
                    {/* Block 1 */}
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 flex-shrink-0">
                        <img src={internationalSvgRepo} alt="International" />
                      </div>
                      <div className="flex flex-col leading-none text-[18px] sm:text-[22px] md:text-[26px] font-Fort TRIAL font-medium text-[#000000]">
                        <span>International</span>
                        <span>Standard</span>
                      </div>
                    </div>
                    {/* Block 2 */}
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 flex-shrink-0">
                        <img src={internationalSvgRepo} alt="Licensed" className="w-full h-full bg-[#004FF2]" />
                      </div>
                      <div className="flex flex-col leading-none text-[18px] sm:text-[22px] md:text-[26px] font-Fort TRIAL font-medium text-[#000000]">
                        <span>Licensed</span>
                        <span>Professionals</span>
                      </div>
                    </div>





                  </div>


                  <div className="mt-8 md:mt-[45px]">
                     <ReusableButton
                      label="Contact Us"
                      color="#004FF2"
                      textColor="text-[#000000]"
                      fontSize="text-[22px]"
                      className="text-white w-full sm:w-[224px] bg-[#004FF2] font-Fort TRIAL text-[22px] sm:text-[22px] font-bold py-3"
                    />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>

  );
};

export default MiddleSection;
