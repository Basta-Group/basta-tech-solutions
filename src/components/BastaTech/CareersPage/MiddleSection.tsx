import React from 'react';

import FilterMenu from './FilterMenu';
import { Search } from "lucide-react";

import ArrowSlider from '../Slider/ArrowSlider';

const MiddleSection: React.FC = () => {
   
    const jobCards = [
        // Sample data (add as many as needed)
        {
            category: "Software Development",
            buttons: [{ label: "Remote/Office", color: "#18185F" }],
            jobTitle: "Middle/Senior Elixir Software Engineer",
            location: "Sliema, Malta"
        },
        {
            category: "Software Development",
            buttons: [{ label: "Remote/Office", color: "#18185F" }, {label: "Relocation", color: "#009DFF"}],
            jobTitle: "Middle/Senior Elixir Software Engineer",
            location: "Sliema, Malta"
        },
        {
            category: "Software Development",
            buttons: [{ label: "Relocation", color: "#009DFF" }],
            jobTitle: "Middle/Senior Elixir Software Engineer",
            location: "Sliema, Malta"
        },
        {
            category: "Software Development",
            buttons: [{ label: "Relocation", color: "#009DFF" }],
            jobTitle: "Middle/Senior Elixir Software Engineer",
            location: "Sliema, Malta"
        },
        {
            category: "Software Development",
            buttons: [{ label: "Freelance", color: "#009DFF" }],
            jobTitle: "Middle/Senior Elixir Software Engineer",
            location: "Sliema, Malta"
        },
        {
            category: "Software Development",
            buttons: [{ label: "Relocation", color: "#FF3366" }],
            jobTitle: "Middle/Senior Elixir Software Engineer",
            location: "Sliema, Malta"
        }
    ];

    

   
    return (
        <div className="min-w-full">
            <div className="container mx-auto pt-8">
                <div className="2xl:max-w-7xl w-[95%] mx-auto py-4 gap-4">
                    <div className="flex flex-col md:flex-row justify-between">
                        {/* LEFT FILTERS */}
                        <section className='h-auto md:w-[33%]'>
                            <FilterMenu title="Location" options={["MALTA", "India", "Serbia"]} />
                            <FilterMenu title="Directions" options={["Frontend", "Backend", "Fullstack"]} />
                            <FilterMenu title="Tech Levels" options={["Junior", "Mid", "Senior"]} />
                            <FilterMenu title="Work Type" options={["Remote/Office", "Office", "Relocation", "Freelance"]} />
                        </section>

                        {/* RIGHT SECTION */}
                        <section className='h-auto md:w-[62%] '>
                            <div className="w-full bg-[#F6F6F6] py-4 flex items-center gap-2 mb-5 px-4">
                                <Search className="text-[#000000] w-[39px] h-[39px]" />
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="w-full outline-none bg-transparent md:text-[30px] text-xl text-[#000000] placeholder-gray-400"
                                />
                            </div>

                             <div className="w-full bg-[#ffffff]  flex flex-row md:justify-end  px-4">
                               <div className='text-[#000000] font-extrabold text-[30px] '>{jobCards.length} Jobs</div>
                            </div>

                            {/* Slider */}
                            <div className="relative">
                                <ArrowSlider
                                    data={jobCards}

                                   
                                />



                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MiddleSection;
