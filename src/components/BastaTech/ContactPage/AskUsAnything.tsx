import React, { useState } from "react";
import ReusableButton from "../../reusableComponents/ReusableButton";

import downArrow from '../../../assets/BastaTech/arrow-right 1.png'
import CareerDropdown from "../../CareerDropdown";

const AskUsAnything: React.FC = () => {






  const [formData, setFormData] = useState({
    reasonOfInquiry: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    position: "",
    location: "",
    city: "",
    comments: "",
  });

  const [responseMessage, setResponseMessage] = useState("");


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    
    try {
      const response = await fetch("http://localhost:3001/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      setResponseMessage(
        result.success
          ? "Email sent successfully!"
          : "Failed to send email: " + result.message
      );
    } catch (error) {
      console.error("Error sending email:", error);
      setResponseMessage("An error occurred while sending the email.");
    }
  };

  // ✅ Improved handleChange to also accept name-value for custom inputs
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // ✅ For dropdowns & custom components
  const handleCustomChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };


  return (
    <div className="min-w-full bg-[#ffffff]">
      <div className="container mx-auto mt-10 md:mt-10 mb-15">
        <div className="max-w-5xl w-[95%] sm:px-6 lg:px-8 gap-8 py-4 mx-auto">
          <h2 className="text-[30px] md:text-[40px] lg:text-[50px] font-extrabold text-center mb-10 text-black">
            Ask Us <span className="text-[#004FF2]">Anything</span>
          </h2>

          <form className="space-y-8 w-full px-4 md:px-0" onSubmit={handleSubmit}>
            {/* Reason for Inquiry - Full Width */}
            <div className="relative w-full">
              <CareerDropdown
                options={["Career", "Support", "Partnership"]}
                arrowIcon={downArrow}
                placeholder=""
                onChange={(value) => handleCustomChange("reasonOfInquiry", value)}
              />

              <label className="text-[18px] font-bold block text-black mt-2">
                Select the Reason for Your Inquiry*
              </label>
            </div>

            {/* First & Last Name */}
            <div className="flex flex-col md:flex-row justify-between md:gap-20 gap-4">
              <div className="w-full">
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full border-0 border-b font-medium border-gray-400 focus:border-blue-500 bg-transparent  text-[#000000] text-[30px] placeholder:text-gray-500 focus:outline-none"
                  required
                />
                <label className="text-[18px] font-bold block text-black">First Name*</label>
              </div>
              <div className="w-full">
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full border-0 border-b font-medium border-gray-400 focus:border-blue-500 bg-transparent  text-[#000000] text-[30px] placeholder:text-gray-500 focus:outline-none"
                  required
                />
                <label className="text-[18px] font-bold block text-black">Last Name*</label>
              </div>
            </div>

            {/* Email & Phone */}
            <div className="flex flex-col md:flex-row md:gap-20 justify-between gap-4">
              <div className="w-full">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full  border-0 border-b font-medium border-gray-400 focus:border-blue-500 bg-transparent text-[#000000] text-[30px]  focus:outline-none"
                  required
                />
                <label className="text-[18px] font-bold block text-black">Email*</label>
              </div>
              <div className="w-full">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border-0 border-b font-medium border-gray-400 focus:border-blue-500 bg-transparent  text-[#000000] text-[30px] placeholder:text-gray-500 focus:outline-none"
                  required
                />
                <label className="text-[18px] font-bold block text-black">Phone*</label>
              </div>
            </div>


            {/* Company & Position */}
            <div className="flex flex-col md:flex-row md:gap-20 gap-4 justify-between">
              {/* Company */}
              <div className="w-full">
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full border-0 border-b font-medium border-gray-400 focus:border-blue-500 bg-transparent py-2 text-[#000000] text-[30px] placeholder:text-gray-500 focus:outline-none"
                  required
                />
                <label className="text-[18px] font-bold block text-black mt-2">Company*</label>
              </div>

              {/* Position */}
              <div className="w-full">
                <CareerDropdown
                  options={["Manager", "Developer", "Designer"]}
                  arrowIcon={downArrow}
                  placeholder=""
                  onChange={(value) => handleCustomChange("position", value)}
                />
                <label className="text-[18px] font-bold block text-black mt-2">Position*</label>
              </div>
            </div>

            {/* Location & City */}
            <div className="flex flex-col md:flex-row md:gap-20 gap-4 justify-between">
              {/* Location */}
              <div className="w-full">
                <CareerDropdown
                  options={["India", "Malta"]}
                  arrowIcon={downArrow}
                  placeholder=""
                  onChange={(value) => handleCustomChange("location", value)}
                />
                <label className="text-[18px] font-bold block text-black mt-2">Location*</label>
              </div>

              {/* City */}
              <div className="w-full">

                 <CareerDropdown
                  options={["India", "Malta"]}
                  arrowIcon={downArrow}
                  placeholder=""
                  onChange={(value) => handleCustomChange("city", value)}
                />
                
                <label className="text-[18px] font-bold block text-black mt-2">City*</label>
              </div>
            </div>







            {/* Comments - Full Width Textarea with no resize icon */}
            <div className="w-full">
              <textarea
                name="comments"
                value={formData.comments}
                onChange={handleChange}
                rows={1}
                className="w-full border-0 border-b font-medium border-gray-400 focus:border-blue-500 bg-transparent  text-[#000000] text-[30px] placeholder:text-gray-500 focus:outline-none resize-none"
                required
              ></textarea>
              <label className="text-[18px] font-bold block text-black">Your inquiry or comments*</label>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center md:justify-start mt-10">
              <ReusableButton
                label="CONTACT US"
                color="bg-[#004FF2]"
                textColor="text-white"
                fontSize="text-[22px]"
                className="text-white w-full md:w-[215px] bg-[#004FF2] font-bold py-3"
              />
            </div>

            {/* Response Message */}
            {responseMessage && (
              <p className={`mt-4 ${responseMessage.includes("successfully") ? "text-green-500" : "text-red-500"}`}>
                {responseMessage}
              </p>
            )}
          </form>

        </div>
      </div>
    </div>
  );
};

export default AskUsAnything;
