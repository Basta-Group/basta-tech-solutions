import React from 'react'
import logo from "../../../assets/BastaTech/About Page/NewsSection/web-design 1.png"

const NewsSection: React.FC = () => {






  const newsData = [
    {
      id: 1,
      logo: logo,
      type: "Announcement",
      title: "Basta Group’s 2025 Chairman’s Letter to Investors",
      nDate: "Apr 11, 2025",



    },

    {
      id: 2,
      logo: logo,
      type: "Announcement",
      title: "2025 Retriement Summit",
      nDate: "Apr 11, 2025",



    },

    {
      id: 3,
      logo: logo,
      type: "Announcement",
      title: "Basta Group’s 2025 Chairman’s Letter to Investors",
      nDate: "Apr 11, 2025",



    },

    {
      id: 4,
      logo: logo,
      type: "Statement",
      title: "Dismissal of Tennessee Attorney General lawsuit against Basta Group",
      nDate: "Apr 11, 2025",



    },

  ]






  return (


    <div className="min-w-full bg-[#ffffff]  ">


      <div className="container mx-auto pt-8 ">


        <div className="2xl:max-w-7xl h-auto  w-[95%] sm:px-6 lg:px-8   gap-4 pb-35 mx-auto">

          <div className='text-[30px] md:text-[40px] lg:text-[50px] xl:text-[72px] font-extrabold font-Fort TRIAL text-[#000000] md:mb-8 mb-4 md:text-left text-center  '>
            News Room
          </div>


          <div className="mb-8 grid grid-cols-1 md:grid-cols-3 md:gap-16 gap-14  md:px-0 py-4">
            {newsData.map((d, index) => (
              <div key={index} className=" h-auto">
                <div className="overflow-hidden w-full md:h-[169px] h-auto border-b-[1px] border-black">
                  {/* Logo and type section */}
                  <div className="md:w-[152px] h-[16px] flex flex-row text-center items-center gap-[7px]">
                    <img src={d.logo} alt="" />
                    <div className="font-bold text-[14px] text-[#000000]">{d.type}</div>
                  </div>

                  {/* Title */}
                  <div className="text-[24px] text-[#000000] font-bold mt-2  ">{d.title}</div>

                  {/* Date */}
                  <div className="text-[10px] text-[#000000] font-[400] mt-2">{d.nDate}</div>

                 
                </div>
              </div>
            ))}
          </div>




        </div>

      </div>

    </div>
  )
}

export default NewsSection
