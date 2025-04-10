import React from "react";
import chef from "../assets/chef.png";
import video from "../assets/video.mp4";
import chef2 from "../assets/chef2.png";
import plateserve from "../assets/plateserve.png";
import chef3 from "../assets/chef3.png";
import chef4 from "../assets/chef4.png";
import pic1 from "../assets/pic1.png"
import pic2 from "../assets/pic2.png"
import quote from "../assets/Quote.png"
import leftarrow from "../assets/left.png";
import rightarrow from "../assets/right.png";
import momoserve from "../assets/momoserve.png";
import momosteam from "../assets/momosteam.png";
import NavigatetoMenu from "../Components/NavigatetoMenu";
import headchef from "../assets/1chef.png"
import assistantchef from "../assets/2chef.png"
import asschef from "../assets/3chef.png"

function About() {
  return (
    <div>
      <div className="flex p-20 m-10 space-x-70">
        <div className="w-552px mt-15">
          <h1 className="text-[#0C6967] text-[64px] mb-10 ">About Us</h1>
          <p className="text-[20px] text-[#6B788E]">WE PRIDE OURSELF ON</p>
          <h1 className="text-[39px] text-[#101828] font-semibold">
            {" "}
            <span className="text-[#D95103] ">Our authentic momo recipes</span>
            <br /> passed down through
            <br /> generations
          </h1>
        </div>
        <div>
          <img className="w-[456px]" src={chef} />
        </div>
      </div>

      <div className="flex justify-center items-center relative">
        <video className="w-full h-full">
          <source src={video} type="video/mp4" />
        </video>
        <div className="absolute bottom-10  left-30 ">
          <h1 className="text-[#FFFFFF] text-[49px] font-semibold">
            Process behind the making
          </h1>
          <p className="text-[#FFFFFF] text-[25px] font-light">
            See how we make momos that you like from only the best ingredients
          </p>
          <NavigatetoMenu />
        </div>
      </div>

      <div className="flex justify-between p-20 m-10">
        <div className="w-[456px]">
          <h1 className="text-[39px] mb-7 text-[#101828] font-semibold ">
            Our momos are <span className="text-[#D95103]">made with love</span>
          </h1>
          <p className="text-[20px] text-[#6B788E] font-light">
            Lorem ipsum dolor sit amet consectetur. Lectus faucibus lorem ac
            adipiscing. Leo odio tincidunt ipsum magna lacus viverra tincidunt.
            Viverra aliquet sollicitudin eget dapibus. Vestibulum velit viverra
            gravida consectetur sed facilisis ut morbi.
          </p>
        </div>

        <div className="relative">
          <img className="w-[552px] h-[448px]" src={chef2} />
          <img
            className="h-[191px] w-[264px] absolute top-85 right-105"
            src={momoserve}
          />
        </div>
      </div>

      <div className="flex justify-between p-20 m-10">
        <div className="relative">
          <img className="w-[552px] h-[448px]" src={chef3} />
          <img
            className="h-[170px] w-[264px] absolute top-80 left-105"
            src={plateserve}
          />
        </div>

        <div className="w-[456px]">
          <h1 className="text-[39px] mb-7 text-[#101828] font-semibold">
            Taste the difference with{" "}
            <span className="text-[#D95103]">our handcrafted momos</span>
          </h1>
          <p className="text-[20px] text-[#6B788E] font-light">
            Lorem ipsum dolor sit amet consectetur. Lectus faucibus lorem ac
            adipiscing. Leo odio tincidunt ipsum magna lacus viverra tincidunt.
            Viverra aliquet sollicitudin eget dapibus. Vestibulum velit viverra
            gravida consectetur sed facilisis ut morbi.
          </p>
        </div>
      </div>

      <div className="flex justify-between p-20 m-10">
        <div className="w-[459px]">
          <h1 className="text-[39px] mb-7 text-[#101828] font-semibold ">
            Our momos are the perfect <span className="text-[#D95103]">blend of tradition </span> and <span className="text-[#D95103]">innovation</span> 
          </h1>
          <p className="text-[20px] text-[#6B788E] font-light">
            Lorem ipsum dolor sit amet consectetur. Lectus faucibus lorem ac
            adipiscing. Leo odio tincidunt ipsum magna lacus viverra tincidunt.
            Viverra aliquet sollicitudin eget dapibus. Vestibulum velit viverra
            gravida consectetur sed facilisis ut morbi.
          </p>
        </div>

        <div className="relative">
          <img className="w-[552px] h-[448px]" src={chef4} />
          <img
            className="h-[191px] w-[264px] absolute top-85 right-105"
            src={momosteam}
          />
        </div>
      </div>
      <div className="flex justify-end">
        <img className="w-full relative" src={pic1} />
    <div className="w-[576px] absolute left-30 p-5 m-4 mt-30">
      <img className="w-[48px] h-[38px]" src={quote} />
      <p className="text-[#FFFFFF] text-[22px] mt-5  ">Momo is not just about sustenance, it's about bringing people together and creating memories. At our restaurant, we strive to create a warm and inviting atmosphere where our guests can enjoy delicious momo, great company, and unforgettable experiences</p>
      <h1 className="text-[#FFFFFF] text-[39px] font-bold mt-9">Marcus Schleifer</h1>
      <h2 className="text-[#FFFFFF] text-[25px] ">CEO</h2>
      <div className="flex gap-3 mt-15 justify-end ">

      <img src={leftarrow}/>
      <img src={rightarrow} />
      </div>
    </div>
    
        <img className="w-[612px] h-[640px] " src={pic2}/>
      </div>

      <div className="p-20">
        <div className="text-center mb-5">

<h1 className="text-[49px] font-bold">Meet The <span className="text-[#D95103]">Team</span></h1>
<p className="text-[#0C6967] text-[25px] font-semibold" >Our talented team members who delivers only the best results</p>
        </div>
<div className="flex gap-15 justify-center">
  <div className=" relative ">

  <img src={headchef} />
  <h1 className="text-white  absolute top-110 left-5 text-[31px] font-bold">Head Chef</h1>
  </div>
  <div className=" relative ">

  <img src={assistantchef} />
  <h1 className="text-white absolute top-110 left-5 text-[31px] font-bold">Assistant Chef</h1>
  </div>
  <div className=" relative ">

  <img src={asschef} />
  <h1 className="text-white absolute top-110 left-5 text-[31px] font-bold">Assistant Chef</h1>

  </div>
</div>

      </div>



    </div>
  );
}

export default About;
