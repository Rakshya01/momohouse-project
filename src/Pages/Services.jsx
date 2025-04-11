import React from "react";
import video from "../assets/video.mp4";
import chef from "../assets/chef0.png";
import party from "../assets/partyp.png";
import qrcode from "../assets/Vector.png";
import image from "../assets/Image.png";
import cap from "../assets/chefcap.png";
import NavigatetoMenu from "../Components/NavigatetoMenu";

function Services() {
  return (
    <div className="">
      <div className="flex justify-center gap-80 p-10">
        <div className="p-5 ">
          <h1 className="text-[56px] text-[#0C6967]">Our Services</h1>
          <p className="text-[24px] text-[#6B788E] font-light mt-7">
            KNOWING OUR CUSTOMERS NEEDS
          </p>
          <p className="text-[#D95103] text-[31px]">
            We're more than just momos.
          </p>
          <p className="text-[#101828] text-[31px]">
            We're a full-service dining experience.
          </p>
        </div>
        <img src={chef} alt="" />{" "}
      </div>

      <div className="flex justify-center items-center relative">
        <video className="w-full h-full">
          <source src={video} type="video/mp4" />
        </video>
        <div className="absolute bottom-10  left-30 ">
          <h1 className="text-[#FFFFFF] text-[49px] font-semibold">
            Dine With Us{" "}
          </h1>
          <p className="text-[#FFFFFF] text-[25px] font-light">
            Enjoy our momos in the comfort of your own home with our delivery
            services.{" "}
          </p>
          <NavigatetoMenu />
        </div>
      </div>

      <div className="flex p-20 justify-between">
        <div className="w-[456px]">
          <div className="w-[456px]">
            <img src={party} alt="" />
            <h1 className="text-[31px] font-bold mt-5 mb-5">Private Party</h1>
            <p className="text-[16px]  w-[456px]">
              Lorem ipsum dolor sit amet consectetur. Lectus faucibus lorem ac
              adipiscing. Leo odio tincidunt ipsum magna lacus viverra
              tincidunt.
            </p>
          </div>
          <div className="flex mt-10 justify-between shadow-xl shadow-gray-400 rounded-xl">
            <div className="p-2">
              <h1 className="text-[#0C6967] text-[25px] font-bold">
                Scan the OR code
              </h1>
              <p className="text-[14px]">
                You can also check about the service
              </p>
            </div>
            <img src={qrcode} alt="" />
          </div>
        </div>

        <div className="w-[552px] h-[448px] rounded-2xl">
          <img src={image} alt="" />
        </div>
      </div>



      <div className="flex justify-between p-20">
        <div className="w-[552px] h-[448px] rounded-2xl">
          <img src={image} alt="" />
        </div>

        <div className="w-[456px]  ">
          <div >
            <img src={cap} alt="" />
            <h1 className="text-[31px] font-bold mt-5 mb-5">Categring</h1>
            <p  className="text-[16px] w-[456px]">
              Lorem ipsum dolor sit amet consectetur. Lectus faucibus lorem ac
              adipiscing. Leo odio tincidunt ipsum magna lacus viverra
              tincidunt.{" "}
            </p>
          </div>
          <div className="flex mt-10 justify-between shadow-xl shadow-gray-400 rounded-xl">
            <div className="p-2">
              <h1 className="text-[#0C6967] text-[25px] font-bold">
                Scan the OR code
              </h1>
              <p className="text-[14px]">
                You can also check about the service
              </p>
            </div>
            <img src={qrcode} alt="" />
          </div>
        </div>
      </div>

<div className="bg-gray-300 p-5 rounded-2xl text-center w-[1128px] m-auto mb-5">
  <h1 className="text-[31px] font-bold mt-5 mb-5 ">Got any Queries?</h1>
  <p className="text-[16px] mb-5 ">If you have any queries, send us a message. Our Friendly team would love to hear from you</p>
  <button className="bg-green-700 p-3 text-white  rounded-3xl mb-5 mt-5 w-[160px] ">Get In Touch</button>
</div>

    </div>
  );
}

export default Services;
