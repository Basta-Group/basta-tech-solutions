import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";

import SimpleSlider from "./BastaTech/Slider/SimpleSlider";

import game1 from "../../src/assets/BastaTech/Games/GameImage1.png";
import BastaPlayLogo from "../../src/assets/BastaTech/Games/playLogo.png";
import game2 from "../../src/assets/BastaTech/Games/GameSecondImage.png";
import game3 from "../../src/assets/BastaTech/Games/monsterGameImage.png";
import game4 from "../../src/assets/BastaTech/Games/olympusGloryImage.png";

const ProjectsSection: React.FC = () => {
  
  const isMobile = window.innerWidth <= 640; // or use a responsive hook like useMediaQuery

 


  const slideData = [
    { src:  game1  },
    { src:  game2  },
    { src:  game3  },
    { src:  game4  },
    { src:  game1  },
    { src:  game2  },
    { src:  game3  },
    { src:  game4  },

   
  ];


  return (
    <>
      <div className="min-w-full">
        <div className="container mx-auto ">
          <div className="2xl:max-w-7xl w-[95%] sm:px-6 lg:px-8 gap-4 py-4 mx-auto">
            <div className="text-[45px] md:text-[50px] font-extrabold font-Fort TRIAL text-[#000000] mb-10 text-center">
              Projects <span className="text-[#004FF2]">&</span> Solutions
            </div>

            <div className="mb-8">

            </div>
          </div> 
          <SimpleSlider
            slideData={slideData}
            isMobile={isMobile}
            renderItem={(d, index) => (
              <div className="bg-[#F3F3F3] rounded-[13px] overflow-hidden">
                <img src={d.src} alt="" className="w-full h-full object-cover" />
                <div className="ml-4">
                  <div className="w-[383px] mt-4">
                    <div className="text-[20px] font-extrabold text-[#000000]">
                      Mystic Mystic Forest
                    </div>
                  </div>
                  <div className="w-[84.76px] h-[25px] mt-2 mb-2">
                    <img
                      src={BastaPlayLogo}
                      alt="icon"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            )}
          />
        </div>
      </div>

       


    </>
  );
};

export default ProjectsSection;
