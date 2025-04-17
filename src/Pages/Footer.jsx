import React from "react";
import momo from "../assets/momo.png";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaYoutubeSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <>
      <div>
        <div className="flex justify-between p-7 ml-10 mr-10 ">
          <div>
            <div className="flex gap-2  ">
              
               <img
                className="w-[40px] mt-2 h-[34px]"
                src={momo}
                alt="momologo"
              />
             <NavLink to="/">
              <h1 className="text-[31px] font-bold text-[#0C6967]">momos</h1>
              </NavLink>
            </div>
            <p className="w-[392px] text-[16px] text-[#6B788E]">
              Lorem ipsum dolor sit amet consectetur. Elit sem tempor egestas
              molestie. Volutpat quis egestas porttitor turpis sit in. Lorem
              nunc nullam morbi urna amet suspendisse nullam ac vivamus.
            </p>
          </div>

          <div>
            <h1 className="text-[#0C6967] text-[25px] font-bold">momos</h1>
            <div className="">
              <NavLink to="/about">
                
                <p className="text-[#252D43] text-[16px]">About Us</p>
                </NavLink>

                <NavLink to="/menu">

              <p className="text-[#252D43] text-[16px]">Our Menu</p>
                </NavLink>
                <NavLink to="/services">

              <p className="text-[#252D43] text-[16px]">Our Services</p>
                </NavLink>
                <NavLink to="/contact">

              <p className="text-[#252D43] text-[16px]">Contact Us</p>
                </NavLink>
            </div>
          </div>

          <div>
            <h1 className="text-[#0C6967] text-[25px] font-bold">Legals</h1>
            <div>
              <p className="text-[#252D43] text-[16px]">Terms & Conditions</p>
              <p className="text-[#252D43] text-[16px]">Privacy Policy</p>
              <p className="text-[#252D43] text-[16px]">Support</p>
            </div>
          </div>

          <div className="flex flex-col items-center  ">
            <h1 className="text-[#0C6967] text-[25px] font-bold">Follow Us</h1>
            <div className="text-[#A6AEBB] flex flex-wrap justify-center w-[168px] gap-6">
             <NavLink to="https://www.facebook.com/"> 

              <FaFacebook size={25} />
              </NavLink> 

              <NavLink to="https://np.linkedin.com/">

              <FaLinkedin size={25} />
              </NavLink>
              <NavLink to="https://www.twitter.com/">

              <AiFillTwitterCircle size={25} />
              </NavLink>
              <NavLink to="https://www.youtube.com/">

              <FaYoutubeSquare size={25} />
              </NavLink>
              <NavLink to="https://www.instagram.com/">

              <FaInstagramSquare size={25} />
              </NavLink>
              <NavLink to="https://www.tiktok.com/en/">

              <AiFillTikTok size={25} />
              </NavLink>
            </div>
          </div>
        </div>
        <div className="p-2 ">
          <hr className="border-t-2 border-gray-300 my-3 w-[90%] ml-15 "/>
          <p className="text-[#6B788E] text-[16px] flex justify-center">
            Copyright ©️2023 Everest Momo Pvt Ltd. All Rights Reserved.
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
