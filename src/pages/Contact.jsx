import React from "react";
import Banner from "../components/Banner";
import { FaLocationDot } from "react-icons/fa6";
import { IoCallSharp } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";

function Contact() {
  return (
    <section className="min-h-dvh">
      <Banner title={"Contact"} />

      <div className="w-full bg-white/20 py-10">
        <div className="flex flex-col items-center justify-center gap-4 max-w-[80rem] w-full mx-auto px-6 md:px-10">
          <span className="text-md font-bold text-primary">Our info</span>
          <h2 className="text-4xl font-bold my-2 text-center">
            Contact with our support during emergency!
          </h2>
        </div>

        <div className="w-full py-10 px-6 md:px-10 flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-10 place-items-center">
            <div className="flex items-center gap-2">
              <FaLocationDot size={80} className="text-primary" />
              <div className="flex flex-col gap-3 max-w-80 w-full">
                <h2 className="text-3xl font-bold font-poppins">
                  Office Address:
                </h2>
                <p className="text-xl text-muted font-poppins">
                  Lorem ipsum, 343 ShoppyKart, #4148 Honey street, NY - 62617.
                </p>
              </div>
            </div>

            {/* PHONE */}
            <div className="flex items-center gap-2">
              <IoCallSharp size={80} className="text-primary" />
              <div className="flex flex-col gap-3 max-w-80 w-full">
                <h2 className="text-3xl font-bold font-poppins">
                  Office Phone:
                </h2>
                <div>
                  <p className="text-xl text-muted font-poppins mb-0.5 hover:text-primary transition-colors duration-150 ease-in cursor-pointer">
                    +1(21) 234 557 4567
                  </p>
                  <p className="text-xl text-muted font-poppins hover:text-primary transition-colors duration-150 ease-in cursor-pointer">
                    +1(21) 234 557 4568
                  </p>
                </div>
              </div>
            </div>

            {/* EMAIL */}
            <div className="flex items-center gap-2">
              <IoMdMail size={80} className="text-primary" />
              <div className="flex flex-col gap-3 max-w-80 w-full">
                <h2 className="text-3xl font-bold font-poppins">
                  Office Mail:
                </h2>
                <div>
                  <p className="text-xl text-muted font-poppins mb-0.5 hover:text-primary transition-colors duration-150 ease-in cursor-pointer">
                    support@mail.com
                  </p>
                  <p className="text-xl text-muted font-poppins hover:text-primary transition-colors duration-150 ease-in cursor-pointer">
                    contact@mail.com
                  </p>
                </div>
              </div>
            </div>
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
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
            />
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="tel"
              placeholder="Your Phone"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
            />
          </div>

          {/* Message */}
          <textarea
            placeholder="Your Message"
            rows={5}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500 transition resize-none"
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
