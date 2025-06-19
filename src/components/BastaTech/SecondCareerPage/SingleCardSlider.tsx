import Slider from "react-slick";

type CardData = {
  topTitle: string;
  midTitle: string;
  description: string;
};

const cards: CardData[] = [
  {
    topTitle: "WHO WE ARE",
    midTitle: "We Embody These Principles By Sharing Our Creative Talents And Innovations",
    description: "with the world around us. Our employees are empowered to create a global network of impact, powered by local connections.",
  },
  {
    topTitle: "WHO WE ARE",
    midTitle: "We Embody These Principles By Sharing Our Creative Talents And Innovations",
    description: "with the world around us. Our employees are empowered to create a global network of impact, powered by local connections.",
  },
  {
    topTitle: "WHO WE ARE",
    midTitle: "We Embody These Principles By Sharing Our Creative Talents And Innovations",
    description: "with the world around us. Our employees are empowered to create a global network of impact, powered by local connections.",
  },
];

// // Custom Arrow components
// const PrevArrow = ({ onClick }: any) => (
//   <button onClick={onClick} className="text-blue-600 text-xl mr-2">
//     <FaChevronLeft />
//   </button>
// );

// const NextArrow = ({ onClick }: any) => (
//   <button onClick={onClick} className="text-blue-600 text-xl ml-2">
//     <FaChevronRight />
//   </button>
// );

const CustomDotSlider = () => {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    
    appendDots: (dots: any) => (
      <div className="flex items-center justify-center mt-6 gap-2">
        {dots}
      </div>
    ),
    customPaging: (i: number) => (
      <div className="w-[10px] h-[10px] rounded-full bg-gray-300"></div>
    ),
  };

  return (
    <div className="w-full flex  px-4 mt-8">
      <div className="max-w-xl w-full relative">
        <Slider {...settings}>
          {cards.map((card, index) => (
            <div key={index}>
              <div className=" rounded-xl  p-8 ">
                <h4 className="text-[#000000] text-xl font-bold uppercase mb-10">
                  {card.topTitle}
                </h4>
                <h2 className="text-[35px] font-extrabold text-black mb-4">{card.midTitle}</h2>
                <p className="text-gray-700 text-[22px]">{card.description}</p>
              </div>
            </div>
          ))}
        </Slider>

        {/* Dot override styling */}
        <style  >{`
          .slick-dots li {
            margin: 0 4px;
          }
          .slick-dots li button:before {
            display: none;
          }
          .slick-dots li.slick-active div {
            background-color: black !important;
            width: 14px;
            height: 14px;
          }
        `}</style>
      </div>
    </div>
  );
};

export default CustomDotSlider;
