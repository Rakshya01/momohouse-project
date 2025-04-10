import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { AiFillClockCircle } from "react-icons/ai";

function Contact() {
  return (
    <>
      <div className="pt-20 ">
        <div className="text-center ">
          <h1 className="text-[56px] text-[#0C6967] ">Our Contact</h1>
        </div>
        <div className="text-center mt-5">
          <p className="text-[24px] font-light">GET IN TOUCH</p>
          <p className="text-[31px] font-bold ">
            Our Friendly Team{" "}
            <span className="text-[#D95103]">would love to hear from you</span>
          </p>
        </div>

        <div className="flex p-5 gap-5 justify-center">
          <div className="w-[360px] h-[200px] shadow-2xl shadow-gray-400 rounded-2xl p-8">
            <h1 className="flex text-[16px] gap-3">
              {" "}
              <FaLocationDot size={20} className="text-orange-600" />
              LOCATION
            </h1>
            <p className="italic mt-7 text-[16px] w-[250px]">
              New Baneshwor -41201, Kathmandu, Bagmati, Nepal
            </p>
          </div>

          <div className="w-[360px] h-[200px] shadow-2xl shadow-gray-400 rounded-2xl p-8">
            <h1 className="flex text-[16px] gap-3">
              {" "}
              <FaPhone size={20} className="text-orange-600" />
              PHONE
            </h1>
            <div className="flex gap-10">
              <p className="mt-7 text-[#0C6967] text-[16px]">Mobile:</p>
              <div className="flex flex-col mt-7">
                <p className="italic text-[16px]">(+977) 980 5689789</p>
                <p className="italic text-[16px]">(+977) 9841 275897</p>
              </div>
            </div>
            <div className="flex gap-31 mt-3">
              <p className="text-[#0C6967] text-[16px]">Tel:</p>
              <p className="italic text-[16px]">01-4783972</p>
            </div>
          </div>

          <div className=" w-[360px] shadow-2xl shadow-gray-400 rounded-2xl p-8">
            <h1 className="flex text-[16px] gap-3">
              {" "}
              <AiFillClockCircle size={20} className="text-orange-600" />
              SERVICE TIME
            </h1>
            <div className="text-[16px] flex mt-7 gap-20">
              <p className="text-[#0C6967]">MON-FRI</p>
              <p>8am-8pm</p>
            </div>
            <div className="text-[16px] flex mt-3 gap-26">
              <p className="text-[#0C6967]">SAT-SUN</p>
              <p>Closed</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-10 p-8 ">
          <div>
            <iframe
              className="m-auto"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.4810592043877!2d85.34317037525248!3d27.67152297620314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb190536c1caa7%3A0xf92fcf603dac3960!2sSipalaya%20Info%20Tech%20Pvt.%20Ltd.!5e0!3m2!1sen!2snp!4v1743050687464!5m2!1sen!2snp"
              width={"452"}
              height={"600"}
              allowFullScreen=""
              loading="lazy"
              referrer:Policy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="border-2 border-gray-300 p-6 rounded-lg max-w-md mx-auto">
            <form className="space-y-4">
              {/* First Name & Last Name - side by side */}
              <div className="flex gap-4">
                <div className="flex-1">
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full h-10 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <div className="flex-1">
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full h-10 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
              </div>

              {/* Email - full width */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full h-10 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              {/* Service Dropdown - full width */}
              <div>
                <label
                  htmlFor="service"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  What can we do for you
                </label>
                <select
                  id="service"
                  className="w-full h-10 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </select>
              </div>

              {/* Phone Number - full width */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full h-10 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              {/* Message - full width */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
