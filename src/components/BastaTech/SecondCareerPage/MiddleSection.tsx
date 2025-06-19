import React from 'react'
import image from '../../../assets/BastaTech/CareersPage/Image3.png'

const MiddleSection: React.FC = () => {
    return (
        <>
            <div
                className="min-w-full mt-0 bg-cover bg-center md:pt-4"

            >
               <div className="@container h-auto p-4 ">
                    <div className="2xl:max-w-7xl h-auto  mx-auto w-[95%] sm:px-6 lg:px-8 flex justify-between mt-15  flex-col gap-4">

                      <div className='w-full'>

                        <img src={image} alt="" className='w-full h-full' />
                      </div>

                    </div>

                    </div>






            </div>


        </>
    )
}

export default MiddleSection
