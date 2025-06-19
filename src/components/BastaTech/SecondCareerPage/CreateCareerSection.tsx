import React from 'react'
import image from "../../../assets/BastaTech/CareersPage/image4.png"
import CardSlider from './CardSlider'

const CreateCareerSection: React.FC = () => {
  return (
    <>
      <div className="min-w-full bg-[#ffffff]">
        <div className="@container py-8">
          <div className="2xl:max-w-7xl h-auto  mx-auto  w-[95%] sm:px-6 lg:px-8   gap-8 py-4 flex flex-col md:flex-row justify-between">


            {/* Images Section */}
            <div className="w-full md:w-[46%] h-auto  ">

              <img src={image} alt="" className='w-full h-[513px] object-contain' />



            </div>


            <div className="md:h-auto  w-full md:w-[49%] md:mt-0   md:py-0 ">

              <div className='text-[#000000] text-[55px] font-extrabold'>
                Create
              </div>
              <div>
                <div className='text-[#000000] text-[55px] font-extrabold'>Your
                  <span className='text-[#004FF2] text-[55px] font-extrabold'>  Career</span>
                </div>
              </div>

              <div>
                <CardSlider />
              </div>


            </div>




          </div>


        </div>

      </div>



    </>
  )
}

export default CreateCareerSection
