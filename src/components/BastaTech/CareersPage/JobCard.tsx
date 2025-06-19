import React from "react";
import locIcon from "../../../assets/BastaTech/CareersPage/locIcon.png";

type JobCardProps = {
    category: string;
    buttons: { label: string; color: string }[];
    jobTitle: string;
    location: string;
};

const JobCard: React.FC<JobCardProps> = ({ category, buttons, jobTitle, location }) => {
    return (
        <div className="w-full max-w-4xl mx-auto p-4 shadow-md mb-6 bg-[#f6f6f6]">
            {/* Top Section: Category + Buttons */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-4">
                <div className="text-black font-medium text-[24px] px-4 py-2 rounded-full">
                    {category}
                </div>

                {/* Buttons with Dynamic Colors */}
                <div className="flex flex-wrap gap-2">
                    {buttons.map((btn, index) => (
                        <button
                            key={index}
                            className={`px-4 py-1 text-[16px] font-bold rounded-md text-white`}
                            style={{ backgroundColor: btn.color }}
                        >
                            {btn.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Job Title */}
            <div className="font-extrabold text-[30px] text-[#000000] mb-2 px-4 py-2">
                {jobTitle}
            </div>

            {/* Location */}
            <div className="flex items-center gap-2 px-4 py-2">
                <img src={locIcon} alt="location icon" className="w-[24px] h-[24px] object-contain" />
                <span className="text-black text-[16px] font-medium">{location}</span>
            </div>
        </div>
    );
};

export default JobCard;
