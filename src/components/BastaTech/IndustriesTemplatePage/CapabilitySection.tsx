import React from 'react'
import GradientCard from './GradientCard';





const CapabilitySection: React.FC = () => {


    const cardData = [
  { title: "Card Issuing & Acquiring", colorStart: "#009DFF", colorEnd: "#004FF2" },
  { title: "Digital Currencies", colorStart: "#004FF2", colorEnd: "#18185F" },
  { title: "Open Bankings & Embedded Finance", colorStart: "#18185F", colorEnd: "#0C0C30" },
  { title: "Fraud Detection", colorStart: "#009DFF", colorEnd: "#004FF2" },
  { title: "Cross Border Payments", colorStart: "#004FF2", colorEnd: "#18185F" },
  { title: "Customer Personalization & Loyalty", colorStart: "#18185F", colorEnd: "#0C0C30" },
  { title: "Instant & Real Time Payment", colorStart: "#009DFF", colorEnd: "#004FF2" },
  { title: "Regulatory", colorStart: "#004FF2", colorEnd: "#18185F" },
  
  

];


    return (
        <>

            <div className="min-w-full">
                <div className="container mx-auto pt-8 pb-4 ">
                    <div className="2xl:max-w-7xl h-auto  w-[95%] sm:px-6 lg:px-8   gap-4 py-4 mx-auto">



                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {cardData.map((card, idx) => (
                                <GradientCard
                                    key={idx}
                                    title={card.title}
                                    colorStart={card.colorStart}
                                    colorEnd={card.colorEnd}
                                />
                            ))}
                        </div>

                    </div>

                </div>

            </div>

        </>
    )
}

export default CapabilitySection
