import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



import React, { useEffect, useState } from "react";
import Slider from "react-slick";


import image1 from '../../../assets/BastaTech/About Page/LeadershipImages/1.png'
import linkedInLogo from '../../../assets/BastaTech/About Page/LeadershipImages/LinkedInLogo.png';
import image2 from '../../../assets/BastaTech/About Page/LeadershipImages/2.png';
import image3 from '../../../assets/BastaTech/About Page/LeadershipImages/3.png';
import image4 from '../../../assets/BastaTech/About Page/LeadershipImages/4.png';



const LeadershipSection: React.FC = () => {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);


  const slideData = [
    {
      id: 1,
      src: image1,
      name: "John Smith",
      post: "CEO, Bionic Group",
      logo: linkedInLogo,
      link: "linkedin.com/in/johnsmith"


    },
    {
      id: 2,
      src: image2,
      name: "Laura Bennett",
      post: "CEO, Bionic Group",

      logo: linkedInLogo,
      link: "linkedin.com/in/laurabennett"

    },

    {
      id: 3,
      src: image3,
      name: "Alex Brooks",
      post: "CEO, Bionic Group",
      logo: linkedInLogo,
      link: "linkedin.com/in/alexbrooks"

    },

    {
      id: 4,
      src: image4,
      name: "James Carlton",
      post: "CEO, Bionic Group",
      logo: linkedInLogo,
      link: "linkedin.com/in/jamescarlton"

    },
    {
      id: 5,
      src: image1,
      name: "John Smith",
      post: "CEO, Bionic Group",
      logo: linkedInLogo,
      link: "linkedin.com/in/johnsmith"


    },
    {
      id: 6,
      src: image2,
      name: "Laura Bennett",
      post: "CEO, Bionic Group",

      logo: linkedInLogo,
      link: "linkedin.com/in/laurabennett"

    },

    {
      id: 7,
      src: image3,
      name: "Alex Brooks",
      post: "CEO, Bionic Group",
      logo: linkedInLogo,
      link: "linkedin.com/in/alexbrooks"

    },

    {
      id: 8,
      src: image4,
      name: "James Carlton",
      post: "CEO, Bionic Group",
      logo: linkedInLogo,
      link: "linkedin.com/in/jamescarlton"

    },








  ]

  const sliderSettings = {
    dots: false,
    infinite: true, // change this
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    pauseOnFocus: false,
    appendDots: (dots: React.ReactNode) => (
      <div className="mt-6">
        <ul className="flex justify-center items-center gap-2">{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <div className="w-3 h-3 bg-black rounded-full cursor-pointer" />
    ),
  };



  const mobileSliderSettings = {
    ...sliderSettings,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    swipe: true,
    draggable: true,
    infinite: true,
    autoplay: true,
  };






  return (
    <>
      <div className="min-w-full">
        <div className="container mx-auto pt-8  ">
          <div className="2xl:max-w-7xl h-auto  w-full sm:px-6 lg:px-8   gap-4 py-4 mx-auto">

            <div className='text-[30px] md:text-[40px] lg:text-[50px] font-extrabold font-Fort TRIAL text-[#000000] mb-10 text-center md:text-left  '>
              Leadership <span className='text-[#004FF2]'>Team</span>
            </div>

            <div className="mb-8 w-full md:w-full">
              <Slider {...(isMobile ? mobileSliderSettings : sliderSettings)}>
                {slideData.map((d, index) => (
                  <div key={index} className="p-2">
                    <div className="bg-[#f3f3f3] rounded-[12px] overflow-hidden">
                      <img src={d.src} alt="" className="w-full h-full object-cover" />
                      <div className="ml-4">
                        <div className="w-[383px] mt-4">
                          <div className="text-[20px] font-bold text-[#000000]">
                            {d.name}
                          </div>
                          <div className="text-[18px] font-medium text-[#000000]">
                            {d.post}
                          </div>

                        </div>
                        <div className="w-[27px] h-[28px] mt-2 mb-2 flex flex-row justify-between gap-2">

                          <img src={linkedInLogo} alt="icon" className=" w-full h-full object-cover" />

                          <div className="text-[#000000] text-[15px] underline place-content-center">{d.link}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>





















          </div>



        </div>

      </div>



    </>
  )
}

export default LeadershipSection
