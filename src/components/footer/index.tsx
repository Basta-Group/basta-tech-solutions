import React from "react";
import bastaLogo from "../../assets/BastaTech/Navbar/NavbarLogo.png";
import { Link } from "react-router-dom";
// import footerImg1 from "../../assets/footer-img-1.png";
import telegramImg from "../../assets/BastaTech/Footer/Telegram.png";
import linkedinImg from "../../assets/BastaTech/Footer/linkedin.png";

import CallIcon from "../../assets/BastaTech/Footer/phone-calling-svgrepo-com 1.png";
import locIcon from "../../assets/BastaTech/Footer/image 1.png"
import mailIcon from "../../assets/BastaTech/Footer/Mask group.png"

const Footer: React.FC = () => {
  return (
    <>
      <div className="min-w-full">
        <div className="@container bg-[#18185F] ">
          <div className="2xl:max-w-7xl   h-auto mx-auto w-[100%]    gap-4 py-4">

            <div className="w-full flex flex-col md:flex-row justify-between gap-4 p-4">
              {/* Logo */}
              <div className="w-full md:w-[25%]  flex justify-start ">
                <img
                  src={bastaLogo}
                  alt="BastaPlay Logo"
                  title="Home"
                  className="h-8"
                />


              </div>


              {/* Navigation */}
          <div className="w-full md:w-[50%] md:mr-[50px] ">
            <nav className="flex flex-col md:flex-row md:w-[901px] md:gap-[25px]  gap-2 mt-4 md:mt-0">
              <Link to="/" className="text-white hover:text-blue-400 font-medium text-[20px]">
                Home
              </Link>
              <Link to="/about" className="text-white hover:text-blue-400  font-medium text-[20px] whitespace-nowrap">
                About Us
              </Link>
              <Link to="/" className="text-white hover:text-blue-400  font-medium text-[20px]">
                Funds
              </Link>
              <Link to="/" className="text-white hover:text-blue-400 font-medium text-[20px] whitespace-nowrap">
                Investor Relations
              </Link>
              <a href="#" className="text-white hover:text-blue-400 font-medium text-[20px]">
                Insights
              </a>
              <Link to="/contact" className="text-white hover:text-blue-400 font-medium text-[20px]">
                Contact
              </Link>
            </nav>
          </div>

          {/* Terms & Policies */}
          <div className="w-full md:w-[20%] mt-4 md:mt-0">
            <p className="text-white ">Legal & Compliance</p>
            <p className="text-white">Privacy Policy</p>
            <p className="text-white">Terms of Use</p>
            <p className="text-white whitespace-nowrap">Licensing & Compliance</p>
          </div>

          {/* Social Media */}
          <div className="w-full md:w-[20%] mt-4 md:mt-0">
            <div className="text-white whitespace-nowrap">Social Media Links</div>
            <div className="flex flex-row justify-start md:justify-between w-[120px] mt-2 ">
              <img src={telegramImg} alt="Telegram" className="w-[55px] h-[55px] rounded-full" />
              <img src={linkedinImg} alt="LinkedIn" className="w[55px] h-[55px]" />
            </div>
          </div>

          
      
        
            </div>


            <div className="flex ">
             <div className="md:w-[389px] h-[99px]  flex flex-col gap-[15px] ">

              <div className="flex flex-row w-[140px] h-[24px] gap-[6px]">
                    <img src={CallIcon} alt="Contact Icon" className="w-[24px] h-[24px]"/>
                    <p className="text-[19.15px]  text-[#ffffff]">9582450099</p>
              </div>

                <div className="flex flex-row w-[140px] h-[24px] gap-[6px]">
                    <img src={locIcon} alt="location Icon" />
                    <p className="underline text-[19.15px]  text-[#ffffff]">Malta,India,Serbia</p>
              </div>

               <div className="flex flex-row w-[140px] h-[24px] gap-[6px]">
                    <img src={mailIcon} alt="" className="w-[24px] h-[24px] "  />
                    <p className="underline text-[19.15px]  text-[#ffffff]" >info@bastafunds.io</p>
              </div>

             </div>
             </div>




          



          </div>

        </div>






      </div>
    </>
  );
};

export default Footer;
