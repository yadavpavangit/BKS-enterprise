import React from "react";
import Banner from "../components/Banner";
import { FaLocationDot } from "react-icons/fa6";
import { IoCallSharp } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";

function Contact() {
  return (
    <section className="min-h-dvh">
      <Banner title={"Contact"} />

      <div className="w-full bg-gradient-to-b from-gray-100 to-white py-20">
        {/* Heading */}
        <div className="flex flex-col items-center justify-center gap-4 max-w-4xl mx-auto px-6 text-center">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">
            Our Info
          </span>

          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 leading-tight">
            Contact with our support <br className="hidden md:block" />
            during emergency!
          </h2>

          <p className="text-gray-500 text-sm md:text-base max-w-xl">
            We are here to help you 24/7. Reach out to us anytime for support,
            inquiries, or assistance.
          </p>
        </div>

        {/* Cards */}
        <div className="w-full mt-16 px-6 md:px-10 flex justify-center">
          <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* CARD */}
            {[
              {
                icon: <FaLocationDot size={26} />,
                title: "Office Address",
                desc: ["343 ShoppyKart,", "#4148 Honey street, NY - 62617"],
              },
              {
                icon: <IoCallSharp size={26} />,
                title: "Office Phone",
                desc: ["+1 (21) 234 557 4567", "+1 (21) 234 557 4568"],
              },
              {
                icon: <IoMdMail size={26} />,
                title: "Office Mail",
                desc: ["support@mail.com", "contact@mail.com"],
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-300 flex items-start gap-4 border border-transparent hover:border-red-100"
              >
                {/* Icon */}
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-red-100 text-accent group-hover:bg-accent group-hover:text-white transition duration-300">
                  {item.icon}
                </div>

                {/* Content */}
                <div className="flex flex-col gap-2">
                  <h2 className="text-lg font-bold text-gray-800">
                    {item.title}
                  </h2>

                  {item.desc.map((text, i) => (
                    <p
                      key={i}
                      className="text-gray-500 text-sm hover:text-accent cursor-pointer transition"
                    >
                      {text}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full py-16 px-6 md:px-10 flex justify-center">
        <form className="w-full max-w-4xl rounded-2xl shadow-lg space-y-6">
          <h2 className="text-3xl font-bold text-center text-gray-100">
            Get In Touch
          </h2>

          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent transition"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent transition"
            />
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="tel"
              placeholder="Your Phone"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent transition"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent transition"
            />
          </div>

          {/* Message */}
          <textarea
            placeholder="Your Message"
            rows={5}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent transition resize-none"
          />

          {/* Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-red-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-red-700 active:scale-95 transition duration-200 shadow-md"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>

      <div className="w-full py-16 px-6 md:px-10 flex justify-center">
        <div className="w-full max-w-8xl h-[400px] md:h-[450px] rounded-xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.839245329654!2d72.66021317350634!3d22.99293811743695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e87cd4de20e5d%3A0xe49f9705b92f6fa8!2sMetro%20Mall%2C%20Vastral%2C%20Ahmedabad%2C%20Gujarat%20382418!5e0!3m2!1sen!2sin!4v1774853252998!5m2!1sen!2sin"
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default Contact;
