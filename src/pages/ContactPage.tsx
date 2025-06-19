import React from "react";

const ContactPage: React.FC = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    gameType: "Integration",
    message: "",
  });
  const [responseMessage, setResponseMessage] = React.useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3001/send-email", {
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

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#1b2369] to-[#1d2b8b] flex items-center justify-center p-3 pt-20 ">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Side */}
        <div className="text-white">
          <h2 className="text-2xl md:text-5xl font-extrabold leading-tight">
            CONTACT <br /> INFORMATION'S !
          </h2>
          <p className="text-gray-300 text-sm mt-6">OFFICE EMAIL:</p>
          <p className="text-xl font-semibold mt-1">
            <a href="mailto:info@bastaplay.com">info@bastaplay.com</a>
          </p>
        </div>

        {/* Right Side (Form) */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full px-5 py-3 rounded-2xl bg-gradient-to-r from-[#2563eb]/40 to-[#3b82f6]/40 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/20 backdrop-blur-sm text-sm"
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="w-full px-5 py-3 rounded-2xl bg-gradient-to-r from-[#2563eb]/40 to-[#3b82f6]/40 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/20 backdrop-blur-sm text-sm"
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              className="w-full px-5 py-3 rounded-2xl bg-gradient-to-r from-[#2563eb]/40 to-[#3b82f6]/40 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/20 backdrop-blur-sm text-sm"
              onChange={handleChange}
              required
            />
            <select
              name="gameType"
              className="w-full px-5 py-3 rounded-2xl bg-gradient-to-r from-[#2563eb]/40 to-[#3b82f6]/40 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/20 backdrop-blur-sm text-sm"
              onChange={handleChange}
              required
            >
              <option value="Integration">Integration</option>
              <option value="General_Inquiry">General Inquiry</option>
              <option value="Others">Others</option>
              <option value="Technical_Support">Technical Support</option>
              <option value="Feedback">Feedback</option>
              <option value="Partnership">Partnership</option>
            </select>
          </div>
          <textarea
            name="message"
            placeholder="Your Message Here"
            className="w-full px-5 py-3 rounded-2xl bg-gradient-to-r from-[#2563eb]/40 to-[#3b82f6]/40 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/20 backdrop-blur-sm text-sm h-40 resize-none"
            onChange={handleChange}
            required
          ></textarea>
          <button
            type="submit"
            title="Send Message"
            className="w-full py-3 bg-[#5d84f8] text-white font-semibold rounded-full hover:bg-[#4a73e5] transition"
          >
            SEND MESSAGE ➔
          </button>
          {responseMessage && (
            <p
              className={`mt-4 ${
                responseMessage.includes("successfully")
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
  );
};

export default ContactPage;
