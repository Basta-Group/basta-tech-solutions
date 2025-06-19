import React, { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface ReusableSliderProps<T> {
  data: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  slidesToShow?: number;
}

function ArrowSlider<T>({ data, renderItem, slidesToShow = 1 }: ReusableSliderProps<T>) {
  const sliderRef = useRef<any>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handlePrev = () => sliderRef.current?.slickPrev();
  const handleNext = () => sliderRef.current?.slickNext();

  const settings = {
    dots: false,
    arrows: false,
    infinite: true, // Make sure autoplay never stops
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow,
    slidesToScroll: 1,
    afterChange: (index: number) => setCurrentSlide(index),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full">
      <Slider ref={sliderRef} {...settings}>
        {data.map((item, idx) => (
          <div key={idx} className="px-4">
            {renderItem(item, idx)}
          </div>
        ))}
      </Slider>

      {/* Arrows + Dots */}
      <div className="flex gap-4 mt-4 items-center">
        <button
          onClick={handlePrev}
          className="w-[31px] h-[29px] flex items-center justify-center disabled:opacity-30"
        >
          <span className="text-[24px] text-white">←</span>
        </button>

        <div className="flex gap-2">
          {data.map((_, i) => (
            <button
              key={i}
              onClick={() => sliderRef.current?.slickGoTo(i)}
              className={`w-[22px] h-[22px] flex items-center justify-center rounded-full transition-all duration-200 ${
                currentSlide === i ? "border-[1px] border-[#2563eb]" : ""
              }`}
            >
              <div
                className={`rounded-full transition-all duration-200 ${
                  currentSlide === i
                    ? "w-[4px] h-[4px] bg-[#2563eb]"
                    : "w-[10px] h-[10px] bg-white"
                }`}
              />
            </button>
          ))}
        </div>

        <button
          onClick={handleNext}
          className="w-[31px] h-[29px] flex items-center justify-center disabled:opacity-30"
        >
          <span className="text-[24px] text-white">→</span>
        </button>
      </div>
    </div>
  );
}

export default ArrowSlider;
