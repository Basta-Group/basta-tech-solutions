import Slider from "react-slick";

type CardData = {
  iconText: string;
  title: string;
  description: string;
  buttonLabel: string;
};

const cards: CardData[] = [
  {
    iconText: "01",
    title: "National Instant payments Network",
    description: "Foster a culture of expertise and innovation for adopting new technology capabilities.",
    buttonLabel: "Find your perfect role ",
  },
  {
    iconText: "02",
    title: "Payment Service Provider Build",
    description: "Establish and fund teams dedicated to developing scalable technical platforms.",
    buttonLabel: "Find your perfect role ",
  },
];

const CardSlider = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    appendDots: (dots: React.ReactNode) => (
      <div className="mt-[45px] bg-amber-800">
        <ul> {dots} </ul>
      </div>
    ),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full mt-[15px]">
      <Slider {...settings}>
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
    </div>
  );
};

export default CardSlider;
