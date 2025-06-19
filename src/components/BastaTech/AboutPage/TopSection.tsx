import React from 'react'
import bgImage from "../../../assets/BastaTech/HeroBackgroundImage.jpg";
import rightImage from "../../../assets/BastaTech/About Page/6722901b20dd12fa61315877df91f3945774e0ad.jpg";
import ReusableButton from '../../reusableComponents/ReusableButton';

const TopSection: React.FC = () => {
  return (
    <>
      <div
        className=" min-w-full mt-0 bg-cover bg-center  py-8 "
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="@container ">

          <div className="2xl:max-w-7xl mx-auto w-[95%] sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between gap-4 md:gap-4 items-center py-14">

            {/* Text Section */}
            <div className="w-full md:w-[45%] h-auto  md:h-[515px] py-2">
              <div className="ml-4">
                <div className="text-xl font-bold text-[#000000] mb-2  md:text-left">
                  Basta Tech Solution
                </div>
                <div className="text-[36px] sm:text-[42px] md:text-[45px] font-extrabold leading-tight mt-4 text-[#000000]  md:text-left">
                  About
                </div>
                <div className="text-[18px] sm:text-xl font-medium text-[#000000] mt-3 mb-6">
                  <p>
                    We can help you reimagine your business through a digital lens.
                    Our software engineering heritage combined with our strategic business and innovation consulting, design thinking, and physical-digital capabilities provide real business value to our customers through human-centric innovation.



                  </p>
                  <p className="text-[18px] sm:text-xl font-medium text-[#000000] mt-3 mb-2">
                    Basta Finance is one of the world’s leading providers of investment, advisory and risk management
                    solutions. We are a fiduciary to our clients. We’re investing for the future on behalf of our clients, inspiring our employees, and supporting our local communities. Watch the video to learn more.
                  </p>



                </div>
                <div className="flex flex-col md:flex-row gap-4  mb-5">
                   <ReusableButton
                      label="CONTACT US"
                      color="bg-[#004FF2]"
                      textColor="text-white"
                      fontSize="text-[22px]"
                      className="text-white md:w-[284px] w-full bg-[#004FF2] font-Fort TRIAL text-[22px] font-bold py-3"
                    />
                 
                </div>
              </div>
            </div>

            {/* Image Section */}
            <div className="w-full md:w-[52%] md:h-[564px] h-auto">
              {/* Add image here */}
              <img src={rightImage} alt="..." className='w-full h-full object-cover' />


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
