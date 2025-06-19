import React, { useState } from "react";
import contactIcon from "../../assets/BastaTech/tech Section/phone-calling-svgrepo-com 1.png"
import mailLogo from "../../assets/BastaTech/tech Section/Mask group.png"


interface ContactFormProps {
  color?: string; // optional prop
}

const ContactForm: React.FC<ContactFormProps> = ({ color = "#ffffff" }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [responseMessage, setResponseMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3001/send-message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (result.success) {
        setResponseMessage("Email sent successfully!");
      } else {
        setResponseMessage("Failed to send email: " + result.message);
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setResponseMessage("An error occurred while sending the email.");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section
      className="py-10"
      id="contact"
      style={{ backgroundColor: color }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className=" backdrop-blur-sm rounded-2xl p-2 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* Left side content */}
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#000000]">
                GET IN TOUCH
              </h2>
              <p className="text-base md:text-lg mb-6 opacity-90 text-[#000000]">
                We help our partners accelerate business development and successfully compete in the global iGaming market.
                We offer a profitable and transparent 'system of cooperation with no overpayments:

              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="text-orange-500 mr-2"><img src={contactIcon} alt="" className="" /></span>
                  <div className="text-[#000000] text-[19.15px] font-normal">9582450099</div>
                </li>
                <li className="flex items-center">
                  <span className="text-orange-500 mr-2">
                    <img src={mailLogo} alt="" className="" />
                  </span>
                  <div className="text-[#000000] text-[19.15px] font-normal underline">
                    info@bastafunds.io
                  </div>
                </li>

              </ul>

            </div>

            {/* Right side form */}
            <div className="rounded-2xl  md:w-[510px] w-full">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex md:flex-row justify-between flex-col md:gap-0 gap-4 ">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className=" font-bold w-full px-5 py-3 rounded-[30px] bg-[#ffffff]  text-[#000000] placeholder-[#000000]/70  focus:outline-none focus:ring-2 focus:ring-white/20 backdrop-blur-sm text-sm"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    className=" font-bold w-full px-5 py-3 rounded-[30px] bg-[#ffffff] text-[#000000] placeholder-[#000000]/70 focus:outline-none focus:ring-2 focus:ring-white/20 backdrop-blur-sm text-sm"
                    required
                  />
                </div>
                <div>

                </div>
                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message Here"
                    rows={4}
                    className=" font-bold w-full px-5 py-3 rounded-[30px] bg-[#ffffff]  text-[#000000] placeholder-[#000000]/70 focus:outline-none focus:ring-2 focus:ring-white/20 backdrop-blur-sm resize-none text-sm"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#004FF2] text-white py-3 px-5  hover:from-[#3b82f6] hover:to-[#2563eb] transition-all duration-300 font-bold text-[16px] flex items-center justify-center space-x-2"
                >
                  <span>CONTACT US</span>
                  <span className="text-[23px]">→</span>
                </button>
                {responseMessage && (
                  <p
                    className={`mt-4 ${responseMessage.includes("successfully")
                        ? "text-green-500"
                        : "text-red-500"
                      }`}
                  >
                    {responseMessage}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
