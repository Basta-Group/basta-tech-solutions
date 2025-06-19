import React from 'react'
import bgImage from "../../../assets/BastaTech/HeroBackgroundImage.jpg";
import rightImage from "../../../assets/BastaTech/ServicesPage/stock-photo-view-office-building-wall-sky-background 1.png"
import ReusableButton from '../../reusableComponents/ReusableButton';

const TopSection: React.FC = () => {
  return (
    <>
       <div
        className=" min-w-full  "
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="@container ">
          <div className="2xl:max-w-7xl   mx-auto w-[95%] sm:px-6 lg:px-8 flex md:flex-row justify-between mt-15 md:gap-32 flex-col gap-4">

            {/* Text Section */}
            <div className=" md:w-auto   md:h-[564px] place-content-center w-full md:max-w-1/2 text-center md:text-left">
              <div className=" md:w-[745px]  h-auto w-full  place-content-center">

                <div className="text-xl font-bold font-Fort TRIAL text-[#000000] mb-2">
                  Basta Tech Solution
                </div>

                <div className="text-[36px] sm:text-[42px] md:text-[66px] font-extrabold leading-tight mt-4 text-[#000000]">
                  AI-Native 
                </div>

                <div className="text-[36px] sm:text-[42px] md:text-[66px] font-extrabold leading-tight  text-[#000000]">
                  Engineering
                </div>

                <p className='text-[18px] md:text-[20px] text-[#000000] mt-2 mb-8 font-medium md:h-[87px]'>The next evolution of engineering is here: building and scaling Al-native, 
                  agentic ways of working across the software development life cycle to enable high-performance teams.
                  </p>


                   <ReusableButton
                      label="LEARN MORE"
                      color="bg-[#004FF2]"
                      textColor="text-white"
                      fontSize="text-[22px]"
                      className="text-white md:w-[284px] w-full bg-[#004FF2] font-Fort TRIAL text-[22px] font-bold py-3"
                    />


                   
                   
                  

               
              </div>

              

            </div>


              <div className="md:w-auto h-auto  w-full">
              {/* Image */}

              <img
                src={rightImage}
                alt="stackview"
                className="md:h-[100%]  w-full md:w-auto object-contain "
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
