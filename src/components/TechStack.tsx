import React from "react";
import leftImage from '../../src/assets/BastaTech/tech Section/TechSectionLeftImage.png';
import rightImage from '../../src/assets/BastaTech/tech Section/RightImage.png';
import frontend2 from '../../src/assets/BastaTech/tech Section/React-icon.svg 2.png'
import frontend1 from '../../src/assets/BastaTech/React-icon.svg 1.png';
import frontend3 from '../../src/assets/BastaTech/tech Section/g3013.png';
import frontend4 from '../../src/assets/BastaTech/tech Section/g3054.png';
import Backend1 from '../../src/assets/BastaTech/tech Section/backend1.png'
import Backend2 from '../../src/assets/BastaTech/tech Section/backend2.png'
import Backend3 from '../../src/assets/BastaTech/tech Section/backend3.png'
import mac1 from '../../src/assets/BastaTech/tech Section/machine1.png'
import mac2 from '../../src/assets/BastaTech/tech Section/machine2.png'
import mac3 from '../../src/assets/BastaTech/tech Section/machine3.png'
import dev1 from '../../src/assets/BastaTech/tech Section/dev1.png'
import dev2 from '../../src/assets/BastaTech/tech Section/dev2.png'
import dev3 from '../../src/assets/BastaTech/tech Section/dev3.png'




const TechStackSection: React.FC = () => {




  return (
    <>
      <div className="min-w-full bg-[#f3f3f3]">
        <div className="@container">
          <div className="2xl:max-w-7xl h-auto  mx-auto  w-[95%] sm:px-6 lg:px-8   gap-8 py-4 flex flex-col md:flex-row justify-between">


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


            <div className="md:h-auto  w-full md:w-[49%] md:mt-0   h-full md:py-0 ">
              {/* Text */}
              <div className="flex flex-col justify-center  ">
                <div className=" md:w-auto h-[80px] w-full  ">
                  <div className="text-[32px] sm:text-[40px] md:text-[50px] font-bold font-Fort TRIAL text-black mb-2 capitalize">
                    Tech Stack
                  </div>
                </div>

                <div className="w-full h-auto flex flex-col gap-4 ">
                  {[
                    { label: 'Frontend', icons: [frontend1, frontend2, frontend3, frontend4] },
                    { label: 'Backend', icons: [Backend1, Backend2, Backend3] },
                    { label: 'AI/ML', icons: [mac1, mac2, mac3] },
                    { label: 'Devops', icons: [dev1, dev2, dev3] },
                  ].map((row, idx) => (
                    <div key={idx} className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
                      {/* Label */}
                      <div className="w-[145px] text-[30px] font-bold text-black">
                        {row.label}
                      </div>

                      {/* Icons row */}
                      <div className="flex gap-[25px] flex-wrap">
                        {row.icons.map((icon, index) => (
                          <img
                            key={index}
                            src={icon}
                            alt=""
                            className="w-[55px] h-[89px] object-contain"
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

              </div>



            </div>




          </div>


        </div>

      </div>



    </>
  );
};

export default TechStackSection;

