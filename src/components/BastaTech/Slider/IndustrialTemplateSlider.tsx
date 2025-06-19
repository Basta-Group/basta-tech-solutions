import  { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type CardData = {
  iconText: string;
  title: string;
  description: string;
  buttonLabel: string;
};

const cards: CardData[] = [
  {
    iconText: "01",
    title: "National Instant Payments Network",
    description: "Foster a culture of expertise and innovation for adopting new technology capabilities.",
    buttonLabel: "Find your perfect role",
  },
  {
    iconText: "02",
    title: "Payment Service Provider Build",
    description: "Establish and fund teams dedicated to developing scalable technical platforms.",
    buttonLabel: "Find your perfect role",
  },
];

const Card = ({ card }: { card: CardData }) => (
  <div className="flex-1 bg-[#f0f4ff] p-6 rounded-xl mx-2 flex flex-col justify-between">
    <div className="w-[80px] h-[80px] flex items-center justify-center bg-blue-600 text-white text-[30px] font-bold rounded-full mb-4">
      {card.iconText}
    </div>
    <h3 className="text-[18px] font-semibold mb-2 text-[#111]">{card.title}</h3>
    <p className="text-[14px] text-[#333] mb-4">{card.description}</p>
    <button className="bg-[#004FF2] text-white text-sm px-4 py-2 rounded hover:bg-blue-700 transition">
      {card.buttonLabel}
    </button>
  </div>
);

const IndustrialTemplateSlider = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Handle responsive state
  useEffect(() => {
    const checkWidth = () => setIsMobile(window.innerWidth < 768);
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  const settings = {
    dots: true,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  // Group cards into slides (2 per group on desktop)
  const groupedSlides = isMobile
    ? cards.map((card) => [card])
    : [cards]; // since only 2 cards, one group for desktop

  return (
    <div className="w-full max-w-5xl mx-auto mt-8 px-4">
      <Slider {...settings}>
        {groupedSlides.map((group, i) => (
          <div key={i} className="flex flex-col md:flex-row gap-4 justify-center">
            {group.map((card, j) => (
              <Card card={card} key={j} />
            ))}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default IndustrialTemplateSlider;
