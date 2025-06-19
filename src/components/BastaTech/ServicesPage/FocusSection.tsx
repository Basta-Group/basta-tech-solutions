import React from 'react';
import logo1 from "../../../assets/BastaTech/ServicesPage/Focus/1.png";
import logo2 from "../../../assets/BastaTech/ServicesPage/Focus/2.png";
import logo3 from "../../../assets/BastaTech/ServicesPage/Focus/3.png";

const FocusSection: React.FC = () => {


  const cardData = [
    {
      id: 1,
      logo: logo1,
      lcolor:"#009DFF",

      title: "Center of Exellence",
      description: "Foster a culture of expertise and innovation for adopting new technology capabilities.",



    },
    {
      id: 2,
      logo: logo2,
      lcolor:"#004FF2",
      

      title: "Platform engineering",
      description: "Establish and fund teams dedicated to developing scalable technical platforms.",



    },
    {
      id: 3,
      logo: logo3,
      lcolor:"#18185F",

      title: "enablement",
      description: "Align resources to form teams with consultative capacity, enhancing organizational agility.",



    },



  ]
  return (
    <div className="min-w-full bg-[#ffffff]  ">


      <div className="container mx-auto pt-8 ">


        <div className="2xl:max-w-7xl h-auto  w-full sm:px-6 lg:px-8   gap-4 pb-10 mx-auto ">

          <div className='text-[30px] md:text-[40px] lg:text-[50px]  font-extrabold font-Fort TRIAL text-[#000000] md:mb-8 mb-4 md:text-left text-center  '>
            Our Core Focus Areas
          </div>


          <p className='md:text-[22px] text-[18px] text-[#000000] font-medium mb-4 text-center md:text-left'>
            By combining insights from cutting-edge research, market trends and real-world application,
            we help our clients establish the essential foundations for successful Al change management and adoption, including:
          </p>


          <div className="w-[90%] mx-auto h-auto flex flex-col md:flex-row justify-between gap-4">
            {cardData.map((d, index) => (
              <div key={index} className=" w-full md:w-1/3 h-[286px] rounded-lg overflow-hidden flex flex-col gap-2 ">

                {/* Logo with text overlay on top */}
                <div className="relative w-[120px] h-[120px] mb-[35px]">
                  <img
                    src={d.logo}
                    alt=""
                    className="w-full h-full object-contain"
                  />
                  
                </div>

                {/* Title and Description */}
                <div className="text-[#000000] text-[17px] font-bold">{d.title}</div>
                <div className="text-[#000000] text-[17px] font-medium">{d.description}</div>
              </div>
            ))}
          </div>










        </div>

      </div>

    </div>
  )
}

export default FocusSection

