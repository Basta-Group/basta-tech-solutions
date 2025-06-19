
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React, { useEffect, useState } from "react";
import Slider from "react-slick";

import usersSvg from '../../../assets/BastaTech/users-svgrepo-com.svg'
import licenseSvgRepo from '../../../assets/BastaTech/license-svgrepo-com 1.png'
import gameRules from '../../../assets/BastaTech/game-rules 1.png'
import fintechImage from '../../../assets/BastaTech/qrcode 1.png'
import webBomb from '../../../assets/BastaTech/web-browser-bomb 1.png'
import chatImage from '../../../assets/BastaTech/chat-conversation-svgrepo-com 1.png'
import SimpleSlider from "../Slider/SimpleSlider";

const TechnologiesSection: React.FC = () => {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);


  const commonSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    customPaging: () => (
      <div className="custom-dot w-2 h-2 bg-gray-400 rounded-full" />
    ),
  };

  const sliderSettings = {
    ...commonSettings,
    slidesToShow: 4,
    slidesToScroll: 1,
    appendDots: (dots: React.ReactNode) => (
      <div className="mt-6 w-full flex justify-center">
        <ul className="flex justify-center items-center gap-4">{dots}</ul>
      </div>
    ),
  };

  const mobileSliderSettings = {
    ...commonSettings,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: true,
    draggable: true,
    appendDots: (dots: React.ReactNode) => (
      <div className="relative w-full mt-4">
        <ul className="flex justify-center items-center absolute left-1/2 -translate-x-1/2 bottom-[-20px] sm:static sm:translate-x-0">
          {dots}
        </ul>
      </div>
    ),
  };



  const slideData = [
    {
      id: 1,
      src: usersSvg,
      name: "AI Development & Integration",



    },
    {
      id: 2,
      src: licenseSvgRepo,
      name: "Custom Software Development",


    },

    {
      id: 3,
      src: gameRules,
      name: "iGaming Solutions",


    },

    {
      id: 4,
      src: fintechImage,
      name: "FinTech Platforms",


    },
    {
      id: 5,
      src: webBomb,
      name: "Cybersecurity & Blockchain",




    },
    {
      id: 6,
      src: chatImage,
      name: "24/7 Technical Support",

    },










  ]




  return (
    <div className="min-w-full bg-[#f3f3f3]  ">


      <div className="container mx-auto pt-8 ">


        <div className="2xl:max-w-7xl h-auto  w-full sm:px-6 lg:px-8   gap-4 pb-15 mx-auto">

          <div className='text-[30px] md:text-[40px] lg:text-[50px] font-extrabold font-Fort TRIAL text-[#004FF2] mb-4 text-center   '>
            Technologies
          </div>

          <div className="mb-8 w-full md:w-full">
            <Slider {...(isMobile ? mobileSliderSettings : sliderSettings)}>
              {slideData.map((d, index) => (
                <div key={index} className="p-2">
                  {/* Card 3 */}
                  <div className="bg-white rounded-[24px] flex-1 h-[240px] flex flex-col items-center justify-center text-center p-4 shadow-sm">
                    <div className="w-[62px] h-[62px] rounded-full bg-[#f6f6f6] flex items-center justify-center mb-3">
                      <img src={d.src} alt="icon" className="w-[32px] h-[32px]" />
                    </div>
                    <div className="text-[22px] font-bold text-black">{d.name}</div>
                  </div>
                </div>
              ))}
            </Slider>

            <style>
              {`
    .slick-dots {
      display: flex !important;
      justify-content: center;
      align-items: center; /* Ensure vertical alignment */
      gap: 10px;
      margin-top: 20px;
      position: static;
    }

    .slick-dots li {
      margin: 0;
      display: flex;
      align-items: center; /* Ensure each dot is centered */
      justify-content: center;
      width: 22px; /* Reserve enough space */
      height: 22px;
    }

    .slick-dots li button {
      padding: 0;
    }

    .slick-dots li button:before {
      display: none;
    }

    .custom-dot {
      width: 10px;
      height: 10px;
      background-color: #4b4b4b;
      border-radius: 50%;
    }

    .slick-dots li.slick-active .custom-dot {
      position: relative;
      width: 20px;
      height: 20px;
      background-color: transparent;
      border: 1px solid #2563eb;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .slick-dots li.slick-active .custom-dot::before {
      content: '';
      width: 4px;
      height: 4px;
      background-color: #2563eb;
      border-radius: 50%;
      display: block;
    }
  `}
            </style>
          </div>







        </div>


      </div>

    </div>
  )
}

export default TechnologiesSection
