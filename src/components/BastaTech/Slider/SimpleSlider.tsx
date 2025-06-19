import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface SlideData {
  id?: string | number;
  src: string;
}

interface ReusableSliderProps {
  slideData: SlideData[];
  renderItem: (item: SlideData, index: number) => React.ReactNode;
  isMobile: boolean;
}

const SimpleSlider: React.FC<ReusableSliderProps> = ({
  slideData,
  renderItem,
  isMobile,
}) => {
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

  const desktopSettings = {
    ...commonSettings,
    slidesToShow: 4,
    slidesToScroll: 1,
    appendDots: (dots: React.ReactNode) => (
      <div className="mt-6 w-full flex justify-center">
        <ul className="flex justify-center items-center gap-4">{dots}</ul>
      </div>
    ),
  };

  const mobileSettings = {
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

  const settings = isMobile ? mobileSettings : desktopSettings;

  return (
    <>
      <div className="mb-8">
        <Slider {...settings}>
          {slideData.map((item, index) => (
            <div key={item.id || index} className="p-4">
              {renderItem(item, index)}
            </div>
          ))}
        </Slider>
      </div>

      {/* 👇 Inline style injected here correctly */}
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



    </>
  );
};

export default SimpleSlider;
