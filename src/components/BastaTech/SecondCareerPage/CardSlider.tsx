import Slider from "react-slick";
import { useEffect, useState, useRef } from "react";


type CardData = {
  iconText: string;
  title: string;
  description: string;
  buttonLabel: string;
};

const cards: CardData[] = [
  {
    iconText: "01",
    title: "Grow Your Engineering Career",
    description: "Foster a culture of expertise and innovation for adopting new technology capabilities.",
    buttonLabel: "Find your perfect role ",
  },
  {
    iconText: "02",
    title: "Grow Your Engineering Career",
    description: "Establish and fund teams dedicated to developing scalable technical platforms.",
    buttonLabel: "Find your perfect role ",
  },
  {
    iconText: "03",
    title: "Grow Your Engineering Career",
    description: "Foster a culture of expertise and innovation for adopting new technology capabilities.",
    buttonLabel: "Find your perfect role ",
  },
  {
    iconText: "04",
    title: "Grow Your Engineering Career",
    description: "Establish and fund teams dedicated to developing scalable technical platforms.",
    buttonLabel: "Find your perfect role ",
  },
];

const CardSlider = () => {

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


  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 2, // default for large screens
    slidesToScroll: 1,
    afterChange: (index: number) => setCurrentSlide(index),
    responsive: [
      {
        breakpoint: 1024, // screen < 1024px
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // screen < 768px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };


  const handlePrev = () => sliderRef.current?.slickPrev();
  const handleNext = () => sliderRef.current?.slickNext();






  return (
    <div className="w-full mt-[15px]">
      <Slider ref={sliderRef} {...settings}>
        {cards.map((card, idx) => (
          <div key={idx} className="px-4">
            <div className="rounded-[14px]  h-full flex flex-col">
              <div className="w-[120px] h-[120px] flex items-center justify-center bg-blue-500 text-white text-[50px] font-bold rounded-full mb-[55px]">
                {card.iconText}
              </div>
              <h3 className="text-[22px] font-bold text-[black] mb-2">{card.title}</h3>
              <p className="text-[#000000] mb-4 text-[17px]">{card.description}</p>

            </div>
          </div>
        ))}
      </Slider>


      {/* Arrows + Dots */}
      <div className="flex  gap-4 mt-4">
        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          disabled={currentSlide === 0}
          className="w-[31px] h-[29px] flex items-center justify-center  disabled:opacity-30"
        >
          <span className="text-[24px] text-[#000000]">←</span>
        </button>

        {/* Dots */}
        <div className="flex gap-2">
          {cards.map((_, i) => (
            <button
              key={i}
              onClick={() => sliderRef.current?.slickGoTo(i)}
              className={`w-[22px] h-[22px] flex items-center justify-center rounded-full transition-all duration-200 ${currentSlide === i
                  ? "border-[1px] border-[#2563eb]"
                  : ""
                }`}
            >
              <div
                className={`rounded-full transition-all duration-200 ${currentSlide === i
                    ? "w-[4px] h-[4px] bg-[#2563eb]"
                    : "w-[10px] h-[10px] bg-[#4b4b4b]"
                  }`}
              />
            </button>
          ))}
        </div>


        {/* Right Arrow */}
        <button
          onClick={handleNext}
          disabled={currentSlide === cards.length - 1}
          className="w-[31px] h-[29px] flex items-center justify-center  disabled:opacity-30"
        >
          <span className="text-[24px] text-[#000000]">→</span>
        </button>
      </div>


    </div>
  );
};

export default CardSlider;
