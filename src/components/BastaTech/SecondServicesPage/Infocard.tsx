import React from "react";

type InfoCardProps = {
  imageSrc: string;
  title: string;
  description: string;
  listItems?: string[];
};

const InfoCard: React.FC<InfoCardProps> = ({ imageSrc, title, description, listItems = [] }) => {
  return (
    <div className="w-[95%] md:w-full mx-auto rounded-xl overflow-hidden">
      {/* Image with bottom-aligned overlay text */}
      <div className="relative w-full  h-[504px]">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-[#004FF2]/70 mix-blend-multiply z-10" />

        {/* ✅ Gradient + Title */}
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent text-white p-4 z-20">
          <h2 className="md:text-[72px] text-lg font-semibold">{title}</h2>
        </div>
      </div>

      {/* Description */}
      <div className="p-4 text-gray-800">
        <p className="mb-4 md:text-[24px] text-sm text-[#000000]" >{description}</p>


        <div className="text-[50px] font-extrabold text-[#004FF2]">Benefits</div>

        {/* List Items Box */}
        {listItems.length > 0 && (
          <div className="w-full p-4 rounded-lg border-[3px] border-[#004FF2]">
            <ul className=" list-inside md:text-[24px] text-sm text-black space-y-4">
              {listItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default InfoCard;
