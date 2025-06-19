import imageSrc from "../../../assets/BastaTech/IndustriesTemplatePage/Vector.png"



type GradientCardProps = {
  title: string;
  
  colorStart: string;
  colorEnd: string;
};

const GradientCard = ({ title, colorStart, colorEnd }: GradientCardProps) => {


  return (
    <div
      className=" p-4 shadow-md h-[394px] flex flex-col justify-end"
      style={{
        background: `linear-gradient(135deg, ${colorStart}, ${colorEnd})`,
      }}
    >
      <div className="text-white text-left md:text-[40px] text-[24px] font-bold mb-2">{title}</div>
      <img
        src={imageSrc}
        alt={title}
        className="w-[31px] h-[29px] object-contain"
      />
    </div>
  );
};

export default GradientCard;
