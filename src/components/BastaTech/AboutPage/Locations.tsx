import React from 'react'
import image1 from '../../../assets/BastaTech/About Page/Locations/loc1.jpg';
import image3 from '../../../assets/BastaTech/About Page/Locations/Serbia.png';
import ReusableButton from '../../reusableComponents/ReusableButton';


const Locations: React.FC = () => {


    const locData = [
        {
            id: 1,
            src: image1,
            name: "Malta",



        },
        {
            id: 2,
            src: image3,
            name: "Mohali",


        },

        {
            id: 3,
            src: image3,
            name: "Serbia",


        },


    ]




    return (


        <div className="min-w-full bg-[#f3f3f3]  ">


            <div className="container mx-auto pt-8 ">


                <div className="2xl:max-w-7xl h-auto  w-full sm:px-6 lg:px-8   gap-4 pb-35 mx-auto">


                    <div className='text-[30px] md:text-[40px] lg:text-[50px] font-extrabold font-Fort TRIAL text-[#000000] mb-10 text-center  '>
                        Basta Solutions <span className='text-[#004FF2]'>Location</span>
                    </div>


                    <div className='font-medium text-[22px] text-[#000000] h-auto text-center p-4'>
                        PKF international is a top ten global network of legally independent member firms providing local expertise.
                    </div>


                    <div className="mb-8 w-full h-auto">
                        <div className="flex flex-col md:flex-row justify-between gap-8 mx-auto">
                            {locData.map((l) => (
                                <div
                                    key={l.id}
                                    className="rounded-[13px] h-auto w-[95%] md:flex-1 flex flex-col items-center justify-center text-center relative max-w-sm mx-auto md:mx-0 group transition-shadow duration-300 md:hover:shadow-lg"
                                >
                                    {/* group here for hover targeting */}
                                    <div className="w-full h-auto  flex items-center justify-center relative group">
                                        {/* Image with dim on desktop hover */}
                                        <div className="relative w-full h-[442px]">
                                            <img
                                                src={l.src}
                                                alt="icon"
                                                className="w-full h-full object-cover rounded-t-[12.55px] rounded-b-none"
                                            />
                                            {/* Overlay gradient on hover */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-t-[12.55px] rounded-b-none opacity-0 md:group-hover:opacity-100 transition-opacity duration-300" />
                                        </div>


                                        {/* Button: visible on mobile, hover on desktop */}
                                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                        opacity-100 md:opacity-0 md:group-hover:opacity-100 
                        transition-opacity duration-300 z-10">
                                            <ReusableButton
                                                label="Read More"
                                                color="bg-blue-600"
                                                textColor="text-white"
                                                fontSize="text-[22px]"
                                                className="w-[209px] h-[56px] font-bold flex items-center justify-center"
                                            />
                                        </div>
                                    </div>

                                    <div className="h-[60px] w-full px-4">
                                        <div className="text-[22px] font-bold text-black text-left">
                                            {l.name}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>



                    </div>




                </div>




            </div>


        </div>


    )
}

export default Locations
