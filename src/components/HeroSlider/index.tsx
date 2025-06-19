import React from "react";
import bgImage from "../../assets/BastaTech/HeroBackgroundImage.jpg";
import buildingImage from '../../assets/BastaTech/Stackbuilding.png'
import ReusableButton from "../reusableComponents/ReusableButton";

const HeroSection: React.FC = () => {




  return (
    <>
      <div
        className=" min-w-full mt-0 bg-cover bg-center md:py-4 "
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="@container 2xl:py-16">
          <div className="2xl:max-w-7xl h-auto  mx-auto w-[95%] sm:px-6 lg:px-8 flex md:flex-row justify-between mt-15 md:gap-32 flex-col gap-6">

            {/* Text Section */}
            <div className=" md:w-[43%]   h-auto place-content-center w-full md:max-w-1/2">
              <div className=" md:h-[363px] h-auto w-full  flex items-center pt-4">
                <div className="flex flex-col  px-4  justify-center">
                  <div className="text-xl font-bold font-Fort TRIAL text-[#000000] mb-2  md:mt-25">
                    Basta Tech Solution
                  </div>

                  <div className=" font-Fort text-[36px] sm:text-[42px] md:text-[51px] 2xl:text-[65px] font-extrabold leading-tight mt-4 text-[#000000]">
                    Building Smart Tech For A Smarter World
                  </div>

                  <div className="text-lg sm:text-xl font-medium font-Fort TRIAL text-[#000000] mt-3 mb-6">
                    IT and AI solutions for iGaming, FinTech, Blockchain
                  </div>

                  <div className="flex flex-col md:flex-row md:gap-4 mt-6 w-full h-auto gap-4 sm:mb-[100px] mx-auto ">
                    <ReusableButton
                      label="Request a Quote"
                      color="bg-[#004FF2]"
                      textColor="text-white"
                      fontSize="text-[22px]"
                      className="text-white md:w-[284px] w-full bg-[#004FF2] font-Fort TRIAL text-[22px] font-bold py-3"
                    />
                    <ReusableButton
                      label="Contact Us"
                      color=""
                      textColor="text-[#000000]"
                      fontSize="text-[22px]"
                      className="text-black md:w-[215px] w-full border-2 border-[#004FF2] uppercase font-bold text-[22px] py-3"
                    />
                  </div>
                </div>
              </div>

            </div>





            <div className="md:w-[49%]  h-auto w-full">
              {/* Image */}

              <img
                src={buildingImage}
                alt="stackview"
                className="h-full  w-full md:w-auto object-contain "
              />

            </div>


          </div>
          <div>

          </div>

        </div>







      </div>


    </>
  );
};

export default HeroSection;
