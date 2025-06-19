import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import JobCard from "../CareersPage/JobCard";

interface Job {
  category: string;
  buttons: { label: string; color: string }[];
  jobTitle: string;
  location: string;
}

interface ResponsiveJobSliderProps {
  data: Job[];
}

const ArrowSlider: React.FC<ResponsiveJobSliderProps> = ({ data }) => {
  const [chunkedData, setChunkedData] = useState<Job[][]>([]);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const sliderRef = useRef<any>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Detect screen width
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Chunk data based on screen size
  useEffect(() => {
    const chunkSize = isMobile ? 1 : 4;
    const chunks = Array.from(
      { length: Math.ceil(data.length / chunkSize) },
      (_, i) => data.slice(i * chunkSize, i * chunkSize + chunkSize)
    );
    setChunkedData(chunks);
  }, [data, isMobile]);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay:true,
    autoplaySpeed:3000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (index: number) => setCurrentSlide(index),
  };

  const handlePrev = () => sliderRef.current?.slickPrev();
  const handleNext = () => sliderRef.current?.slickNext();

  return (
    <div className="w-full">
      <Slider ref={sliderRef} {...settings}>
        {chunkedData.map((group, idx) => (
          <div key={idx}>
            <div className={`flex ${isMobile ? "flex-col" : "flex-col gap-4"}`}>
              {group.map((job, i) => (
                <JobCard
                  key={i}
                  category={job.category}
                  buttons={job.buttons}
                  jobTitle={job.jobTitle}
                  location={job.location}
                />
              ))}
            </div>
          </div>
        ))}
      </Slider>

      {/* Arrows + Dots */}
      <div className="flex items-center justify-center gap-4 mt-4">
        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          disabled={currentSlide === 0}
          className="w-[31px] h-[29px] flex items-center justify-center border disabled:opacity-30"
        >
          <span className="text-[24px] text-[#000000]">←</span>
        </button>

        {/* Dots */}
        <div className="flex gap-2">
          {chunkedData.map((_, i) => (
            <button
              key={i}
              onClick={() => sliderRef.current?.slickGoTo(i)}
              className={`flex items-center justify-center transition-all duration-200 ${
                currentSlide === i
                  ? "w-[22px] h-[22px] border-[1px] border-[#2563eb] rounded-full"
                  : "w-[10px] h-[10px] bg-[#4b4b4b] rounded-full"
              }`}
            >
              {currentSlide === i && (
                <div className="w-[4px] h-[4px] bg-[#2563eb] rounded-full" />
              )}
            </button>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          disabled={currentSlide === chunkedData.length - 1}
          className="w-[31px] h-[29px] flex items-center justify-center border disabled:opacity-30"
        >
          <span className="text-[24px] text-[#000000]">→</span>
        </button>
      </div>
    </div>
  );
};

export default ArrowSlider;
