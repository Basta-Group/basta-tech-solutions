import React, { useState } from 'react';
import arrow from "../../../assets/BastaTech/ServicesPage/arrow-right 1.png";

const data = [
    {
        title: "Governance of business value & Basta Tech Solution",
        content: "Track Basta Tech Solution from AI-driven software development, prioritization of use cases and required tools with our ROI Impact Analysis and figure out the flow of value with our Value Stream Mapping."
    },
    {
        title: "Organizational Change Management",
        content: "Change management focuses on aligning the AI-native transformation with the people, structure, and culture in your organization."
    },
    {
        title: "AI Adoptional Measurement",
        content: "Leverage our AI/Run ecosystem of tools and methods to enhance development workflows."
    },


    {
        title: "AI Education",
        content: "AI Education"
    },

    {
        title: "AI Software DevelopmentProces (Engx.AI)",
        content: "Leverage our AI/Run ecosystem of tools and methods to enhance development workflows."
    },



    // Add more entries as needed
];

const TransformingSection: React.FC = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);

    return (
        <div className="min-w-full bg-[#f6f6f6] ">
            <div className="container mx-auto pt-8 pb-10 ">
                <div className="2xl:max-w-7xl h-auto w-full sm:px-6 lg:px-8 gap-4  mx-auto">

                    {/* Heading Section */}
                    <div className='w-full py-4'>
                        <div className='text-[30px] md:text-[40px] lg:text-[50px] xl:text-[72px] font-extrabold font-Fort TRIAL text-[#000000] md:mb-8 mb-4 text-center'>
                            Transforming To AI-Native <span className='text-[#004FF2]'>Engineering Organization</span>
                            <div className='text-[22px] font-medium text-[#000000] mt-4'>
                                EPAM Al/RUN™ is an overarching GenAl-powered methodology that integrates Al into the core of engineering processes, accelerating the SDLC and revolutionizing the delivery of digital products.


                                <div className='text-[22px] font-medium text-[#000000] text-center mb-8'></div>
                                <div className="mt-4">
                                    Al/RUN offers a 360-degree approach, combining the best Al and engineering
                                    practices to deliver optimal outcomes at the organization, team and individual levels. It focuses on governance, performance tracking, automation and upskilling through Al education while offering an ecosystem of tools and best practices to improve efficiency and innovation in software projects and achieve faster time-to-market at reduced costs. Having this ecosystem enables our clients to choose the best tools for any given task, and quickly customize agents and workflows on top of the existing foundation.
                                </div>
                            </div>
                        </div>
                    </div>

                    

                </div>
                
            </div>

            <div className="container mx-auto pt-8 pb-10  px-8">
                {/* Left-Right Section */}
                    <div className='w-full h-auto'>
                        <div className='flex md:flex-row flex-col justify-between gap-4'>

                            {/* Left Options */}
                            <div className="w-full md:max-w-[50%] h-auto">
                                {data.map((item, index) => (
                                    <div
                                        key={index}
                                        className={`w-full h-auto flex items-center justify-between border-b-[1px] p-4 cursor-pointer transition-all duration-300 ${selectedIndex === index ? "border-b-[#004FF2]" : "border-b-black"
                                            }`}
                                        onClick={() => setSelectedIndex(index)}
                                    >
                                        <div className="flex items-center w-full">
                                            {/* Title: 87% */}
                                            <div
                                                className={`w-[87%] text-[24px] md:text-[40px] font-extrabold transition-colors duration-300 ${selectedIndex === index ? "text-[#004FF2]" : "text-black"}`}

                                            >
                                                {item.title}
                                            </div>

                                            {/* Arrow: 13% */}
                                            <div className="w-[13%] flex justify-center">
                                                <img
                                                    src={arrow}
                                                    alt="arrow"
                                                    className="w-[32px] h-[32px] object-contain"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>


                            {/* Right Content */}
                            <div className='w-full md:max-w-[40%] h-auto text-[#000000] text-[24px] md:text-[40px] font-extrabold text-center md:text-left'>
                                {data[selectedIndex].title}
                                <div className='text-[22px] font-medium mt-4'>
                                    {data[selectedIndex].content}
                                </div>
                            </div>

                        </div>
                    </div>
            </div>
        </div>
    );
};

export default TransformingSection;
