import React from "react";
import usersSvg from '../../src/assets/BastaTech/users-svgrepo-com.svg'
import licenseSvgRepo from '../../src/assets/BastaTech/license-svgrepo-com 1.png'
import gameRules from '../../src/assets/BastaTech/game-rules 1.png'
import fintechImage from '../../src/assets/BastaTech/qrcode 1.png'
import webBomb from '../../src/assets/BastaTech/web-browser-bomb 1.png'
import chatImage from '../../src/assets/BastaTech/chat-conversation-svgrepo-com 1.png'

const ServicesSection: React.FC = () => {
  return (
   
      <>
        <div className="min-w-full">
          <div className="@container bg-[#f3f3f3]">
            <div className="2xl:max-w-7xl h-auto mx-auto w-[95%] sm:px-6 lg:px-8   gap-4 py-4 justify-center">

              <div className="w-full  flex flex-col md:flex-row justify-between  mx-auto" >
                <div className=" w-full md:max-w-1/2  ">

                  <div className="flex flex-col md:flex-row justify-between w-full  ">
                    <div className="w-full  mb-6 md:mb-0  p-4 ">
                      <h2 className="text-[30px] md:text-[40px] lg:text-[50px] font-bold font-TRIAL leading-tight text-black mb-2">
                        Basta Solutions <br />
                        <span className="text-[#004FF2] text-[30px] md:text-[40px] lg:text-[50px] font-bold font-TRIAL leading-tight  mb-2">Services</span>
                      </h2>
                      <div className="text-[22px] font-medium leading-[1.1] mt-4 text-black">
                        PKF International is a top ten global network of legally independent member firms providing local expertise.
                      </div>
                    </div>

                  </div>









                </div>

                <div>
                  {/* Top Cards */}
                  <div className="w-full md:w-full h-auto">
                    <div className="flex flex-col md:flex-row gap-4">
                      {/* Card 1 */}
                      <div className="bg-white rounded-[24px] flex-1 h-[240px] flex flex-col items-center justify-center text-center p-4 shadow-sm">
                        <div className="w-[62px] h-[62px] rounded-[24px] bg-[#f6f6f6] flex items-center justify-center mb-3">
                          <img src={usersSvg} alt="icon" className="w-[32px] h-[32px]" />
                        </div>
                        <div className="text-[22px] font-bold text-black">AI Development & Integration</div>
                      </div>

                      {/* Card 2 */}
                      <div className="bg-white rounded-[24px] flex-1 h-[240px] flex flex-col items-center justify-center text-center p-4 shadow-sm">
                        <div className="w-[62px] h-[62px] rounded-full bg-[#f6f6f6] flex items-center justify-center mb-3">
                          <img src={licenseSvgRepo} alt="icon" className="w-[32px] h-[32px]" />
                        </div>
                        <div className="text-[22px] font-bold text-black">Custom Software Development</div>
                      </div>

                      {/* Card 3 */}
                      <div className="bg-white rounded-[24px] flex-1 h-[240px] flex flex-col items-center justify-center text-center p-4 shadow-sm">
                        <div className="w-[62px] h-[62px] rounded-full bg-[#f6f6f6] flex items-center justify-center mb-3">
                          <img src={gameRules} alt="icon" className="w-[32px] h-[32px]" />
                        </div>
                        <div className="text-[22px] font-bold text-black">iGaming Solutions</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* This is Bottom Cards Section */}
              <div className="w-full   flex flex-col md:flex-row justify-between  mx-auto">

                <div className=" w-full  md:h-[240px] mt-10 md:mt-[15px] mx-auto md:ml-[200px]  h-auto">
                  <div className="  w-full md:w-full h-auto ">
                    <div className="flex flex-col md:flex-row gap-4 md:gap-[45px]">
                      {/* Card 1 */}
                      <div className="bg-white rounded-[24px] flex-1 h-[240px] flex flex-col items-center justify-center text-center p-4 shadow-sm">
                        <div className="w-[62px] h-[62px] rounded-[24px] bg-[#f6f6f6] flex items-center justify-center mb-3">
                          <img src={fintechImage} alt="icon" className="w-[32px] h-[32px]" />
                        </div>
                        <div className="text-[22px] font-bold text-black">FinTech Platforms</div>
                      </div>

                      {/* Card 2 */}
                      <div className="bg-white rounded-[24px] flex-1 h-[240px] flex flex-col items-center justify-center text-center p-4 shadow-sm">
                        <div className="w-[62px] h-[62px] rounded-full bg-[#f6f6f6] flex items-center justify-center mb-3">
                          <img src={webBomb} alt="icon" className="w-[32px] h-[32px]" />
                        </div>
                        <div className="text-[22px] font-bold text-black">Cybersecurity & Blockchain</div>
                      </div>

                      {/* Card 3 */}
                      <div className="bg-white rounded-[24px] flex-1 h-[240px] flex flex-col items-center justify-center text-center p-4 shadow-sm">
                        <div className="w-[62px] h-[62px] rounded-full bg-[#f6f6f6] flex items-center justify-center mb-3">
                          <img src={chatImage} alt="icon" className="w-[32px] h-[32px]" />
                        </div>
                        <div className="text-[22px] font-bold text-black">24/7 Technical Support</div>
                      </div>

                      {/* Button Card*/}
                      <div className="bg-white rounded-[24px] flex-1 h-[240px] flex flex-col items-center justify-center text-center p-4 shadow-sm">
                        <button className="text-white w-full sm:w-[140px] bg-[#004FF2] font-Fort TRIAL text-[18px] sm:text-[22px] font-bold py-3">
                          MORE
                        </button>
                      </div>
                    </div>

                  </div>















                </div>

              </div>
              </div>
              </div>
             
              </div>
            

         
        </>
        );
};

        export default ServicesSection;
