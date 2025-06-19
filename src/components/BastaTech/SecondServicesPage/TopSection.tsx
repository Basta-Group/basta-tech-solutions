import React from 'react'
import bgImage from "../../../assets/BastaTech/HeroBackgroundImage.jpg";
import rightImage from "../../../assets/BastaTech/ServicesPage 2/topImage.jpg"

const TopSection: React.FC = () => {
  return (
    <>
       <div
        className=" min-w-full h-auto  "
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="@container h-auto p-4 ">
          <div className="2xl:max-w-7xl h-auto  mx-auto w-[95%] sm:px-6 lg:px-8 flex md:flex-row justify-between mt-15  flex-col gap-4">

            {/* Text Section */}
            <div className=" md:w-auto     w-full md:max-w-[43%]  md:text-left ">
              <div className=" md:w-auto w-full h-auto   ">

                <div className="text-xl font-bold font-Fort TRIAL text-[#000000] mb-2">
                  Basta Tech Solution
                </div>

                <div className="text-[36px] sm:text-[42px] md:text-[66px] font-extrabold leading-tight mt-4 text-[#000000]">
                 Engineering
                </div>

                <div className="text-[36px] sm:text-[42px] md:text-[66px] font-extrabold leading-tight  text-[#000000]">
                  Services
                </div>

                <p className='text-[15px] text-[#000000] mt-2 mb-8 font-medium h-auto'>
                  SoftServe's expertise is rooted in technology-from digital product innovation,
                   to total business transformation. Our engineering services provide the fundamental building blocks to
                    make technology work across the enterprise. SoftServe's software development and quality management
                     experts orchestrate all the intricacies of software implementation, configuration, and testing.
                      Business analyst and solution architecture teams use proven methodology to align stakeholders and 
                      internal teams on product requirements. Dedicated and operational teams provide the tactical services 
                      needed for rapid deployment and ongoing support. Streamline and optimize your technology infrastructure through
                       an agile approach to deliver solutions quickly and efficiently.
                  </p>


                   
                   
                  

               
              </div>

              

            </div>


              <div className="md:max-w-[50%] h-[564px]  w-full">
              {/* Image */}

              <img
                src={rightImage}
                alt="stackview"
                className="h-full w-full md:w-auto  "
              />

            </div>







           

          </div>
          <div>

          </div>

        </div>







      </div>


    </>
  )
}

export default TopSection
