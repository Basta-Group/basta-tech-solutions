import React from 'react';
import bgImage from "../../../assets/BastaTech/IndustriesTemplatePage/middleSectionbgImage.png";
import ArrowSlider from './ArrowSlider';
import ReusableButton from '../../reusableComponents/ReusableButton';


const cardData = [
  {
    iconText: "CASE STUDY 1",
    beforeSpan: "ImageNPay: Making Digital Payments",

    span: "Interactive",
    afterSpan:"And Carbon Neutral",
    
    
    title: "with the world around us. Our employees are empowered to create a global network of impact, powered by local connections.",
    buttonLabel: "Find your perfect role",
  },
 
  {
    iconText: "CASE STUDY 2",
    beforeSpan: "ImageNPay: Making Digital Payments",

    span: "Interactive",
    afterSpan:"And Carbon Neutral",
    
    
    title: "with the world around us. Our employees are empowered to create a global network of impact, powered by local connections.",
    buttonLabel: "Find your perfect role",
  },
  {
    iconText: "CASE STUDY 3",
    beforeSpan: "ImageNPay: Making Digital Payments",

    span: "Interactive",
    afterSpan:"And Carbon Neutral",
    
    
    title: "with the world around us. Our employees are empowered to create a global network of impact, powered by local connections.",
    buttonLabel: "Find your perfect role",
  },
  
  // ...more cards
];


const MiddleSection: React.FC = () => {
  return (
    <div
      className="min-w-full mt-0 bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${bgImage})`,
      }}
    >
      <div className="@container mx-auto h-auto py-10 ">
        <div className="2xl:max-w-7xl h-auto  mx-auto w-[95%] sm:px-6 flex md:flex-row justify-between mt-15 md:gap-32 flex-col gap-6  py-4">

          <ArrowSlider

            data={cardData}
            renderItem={(card, idx) => (
              <div className="flex flex-col gap-4 md:w-[80%]  w-full bg-none  rounded-lg">
                <div className="text-xl font-bold font-Fort TRIAL text-white">
                 {card.iconText}
                </div>

                <div className="text-white md:text-[50px] 2xl:text-[72px] text-[32px] font-bold leading-tight">
                  {card.beforeSpan} <span className='text-[#004FF2]'>{card.span}</span> {card.afterSpan}
                 
                </div>

                <div className="text-[white] md:text-[22px] text-[22px] font-medium leading-tight mt-4">
                 {card.title}
                </div>

                <ReusableButton
                  label="READ MORE"
                  color="bg-[#004FF2]"
                  textColor="text-white"
                  fontSize="text-[22px]"
                  className="text-white w-full md:w-[284px] font-Fort TRIAL text-[22px] font-bold py-3"
                />
              </div>
            )}



          />


        </div>
      </div>
    </div>
  );
};

export default MiddleSection;
