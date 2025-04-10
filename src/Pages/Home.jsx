import { NavLink } from "react-router-dom";
import circle from "../assets/circle.png";
import momoplate from "../assets/momoplate.png";
import OneBg from "../assets/OneBg.jpg";
import NavigatetoMenu from "../Components/NavigatetoMenu";
import { useEffect, useState } from "react";
import man from "../assets/man.png";
import Loading from "../Components/Loading";
import video from "../assets/video.mp4";
import cap from "../assets/cap.png";
import yes from "../assets/yes.png";
import party from "../assets/party.png";
import arrowleft from "../assets/arrow1.png";
import arrowright from "../assets/arrow2.png";
import girl from "../assets/girl.png";
import { FaLocationDot, FaTiktok } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { GoClockFill } from "react-icons/go";
import { FaFacebook, FaInstagram } from "react-icons/fa";

function Home() {
  const [recipes, setRecipes] = useState([]);
  const [filterProduct, setfilterProduct] = useState([]);

  const getProduct = async () => {
    let response = await fetch("https://dummyjson.com/recipes");
    response = await response.json();
    console.log(response);
    setRecipes(response.recipes);

    const filterItems = response.recipes.filter((item) => {
      return item.cuisine == "Italian";
    });

    setfilterProduct(filterItems);
  };

  const filterRecipes = (country) => {
    const filterItems = recipes.filter((item) => {
      return item.cuisine == country;
    });

    setfilterProduct(filterItems);
  };
  useEffect(() => {
    getProduct();
  }, []);
  return (
    <div>
      <div className="flex justify-end  ">
        <div className=" mr-48  mt-10  pt-7 ">
          <div>
            <p className="font-Roboto">RESTAURANT</p>
            <h1 className="text-[61px]   flex ">
              The
              <span
                style={{ backgroundImage: `url(${OneBg}) ` }}
                className="h-20 text-white  bg-no-repeat w-48 flex  justify-center items-center"
              >
                #One
              </span>
            </h1>
            <h1 className="text-[61px] ">
              Momo <span className="text-[#D95103]">Restaurant</span>
            </h1>
            <p className="text-[20px] font-medium   ">
              More than
              <span className="text-[#D95103]  text-[20px] ">
                20+ Varieties
              </span>
              of momo available for you
            </p>
          </div>
          <div className="mt-5    ">
            <NavigatetoMenu />
          </div>
        </div>
        <div className="   overflow-hidden  w-96  relative   flex justify-end ">
          <img
            className="h-52 top-14 left-8 absolute  "
            src={momoplate}
            alt="Momoplate"
          />
          <img className="h-96  -mt-4   " src={circle} alt="circle" />
        </div>
      </div>

      <div className="flex p-10 justify-around mt-15  ">
        <div>
          <img className="h-90" src={man} alt="man" />
        </div>
        <div className="mt-20 mb-10">
          <h1 className="text-[39px] font-bold">
            Why Customers <span className="text-[#D95103]">Love Us</span>
          </h1>
          <p className="text-[#6B788E] mt-2 text-[20px]">
            Lorem ipsum dolor sit amet consectetur. Sed diam dolor
            <br /> vivamus nibh fermentum vulputate tortor. Egestas facilisi
            luctus
            <br /> turpis arcu dignissim. Amet neque enim etiam purus id. Tortor
            <br /> sit orci blandit cursus turpis.
          </p>
          <div className="mt-5">
            <NavigatetoMenu />
          </div>
        </div>
      </div>
      <div className="mt-20">
        <div className=" text-center ">
          <h1 className="text-[39px] ">
            Our <span className="text-[#D95103]">Most Popular</span> Recipes
          </h1>
          <p className="text-[20px] text-[#6B788E]">
            Browse through a varieties of recipes with fresh ingredients
            selected only from the best places
          </p>
        </div>
        <div className="text-center space-x-2 p-2 mt-5 ">
          <button
            onClick={() => {
              filterRecipes("Italian");
            }}
            className="border-1 hover:bg-gray-200 rounded-2xl p-1 w-24"
          >
            Italian
          </button>
          <button
            onClick={() => {
              filterRecipes("Korean");
            }}
            className="border-1 hover:bg-gray-200  rounded-2xl p-1 w-24"
          >
            Korean
          </button>
          <button
            onClick={() => {
              filterRecipes("Indian");
            }}
            className="border-1 hover:bg-gray-200  rounded-2xl p-1 w-24"
          >
            Indian
          </button>
        </div>

        <div className="">
          <div>
            {filterProduct.length > 0 ? (
              <div className="flex flex-wrap justify-center gap-5 p-5 px-14">
                {filterProduct.map((item) => {
                  return (
                    <div
                      key={item.id}
                      className="shadow-2xl  shadow-gray-800   rounded-2xl   w-52  h-52  flex  justify-center flex-col  items-center"
                    >
                      <img
                        className="h-32 rounded-2xl"
                        src={item.image}
                        alt=""
                      />
                      <NavLink to={`/productdescription/${item.id}`}>
                     
                                         <div className="flex flex-col justify-center items-center">
                                         <p className="text-orange-500">Rs.{item.caloriesPerServing}</p>
                                         <p>{item.name}</p>
                                         <p className="text-orange-800">{item.rating}</p>
                                         </div>
                                         </NavLink>
                    </div>
                  );
                })}
              </div>
            ) : (
              <Loading />
            )}
          </div>
        </div>
        <div className="flex justify-center">
          <NavigatetoMenu />
        </div>
      </div>

      {/* <div>We Offer People The Service They Want</div> */}

      <div className="mt-15">
        <div className="text-center p-7 bg-[#F7F9FC]">
          <h1 className="text-[39px] font-bold">
            <span className="text-[#D95103]">We Offer People</span> The Service
            They Want
          </h1>
        </div>
        <div className="flex justify-center items-center relative h-[70vh]">
          <video size={600} className="w-full h-full object-cover">
            <source src={video} type="video/mp4" />
          </video>

          <div className="absolute  flex flex-col items-center justify-center  text-white">
            <h1 className="text-[49px] font-bold ">
              Process behind the making
            </h1>
            <p className="text-[25px]">
              See how only chefs cooks only the best momos
            </p>
            <NavigatetoMenu />
          </div>
        </div>

        <div className=" p-10  flex justify-between mt-5 mb-5 ">
          <div className="w-[360px] flex flex-col items-center justify-center ml-15">
            <img src={yes} alt="quality food" />
            <h1 className="text-[31px] text-[#101828] mt-3 font-semibold ">
              Quality Food
            </h1>
            <p className="text-[16px] text-[#252D43] mt-3 text-center">
              Only the best food with top quality products and ingredients
            </p>
          </div>
          <div className="w-[360px] flex flex-col items-center justify-center">
            <img src={party} alt="private party" />
            <h1 className="text-[31px] text-[#101828] mt-3 font-semibold ">
              Private Party{" "}
            </h1>
            <p className="text-[16px] text-[#252D43] mt-3 text-center">
              Get the best food for all your private parties and gatherings
            </p>
          </div>

          <div className="w-[360px] flex flex-col items-center justify-center mr-15">
            <img src={cap} alt="categring" />
            <h1 className="text-[31px] text-[#101828] mt-3 font-semibold ">
              Categring
            </h1>
            <p className="text-[16px] text-[#252D43] mt-3 text-center">
              Get the best food for any occasions and gatherings
            </p>
          </div>
        </div>
      </div>

      {/* <div>200+ Happy Customers</div> */}

      <div className="bg-[#FAFBFB] p-15  flex justify-between items-center gap-10">
        <div className=" w-[576px] h-[420px] mt-20 ml-15 ">
          <h1 className="text-[39px] font-bold">
            200+ <span className="text-[#D95103]">Happy Customers</span>
          </h1>
          <p className="mt-2 text-[#0C6967] text-[25px] font-semibold">
            What our Customers say about us
          </p>

          <p className="text-[#252D43] text-[24px] italic mt-5 ">
            “Only the best momo you can find in the market. Different Varieties
            of momo to choose from. Will be visiting again soon”
          </p>
          <h2 className="text-[#101828] text-[31px] mt-5 font-bold">
            Livia Dias
          </h2>
          <div className="flex flex-end mt-5">
            <img src={arrowleft} alt="left" />
            <img src={arrowright} alt="right" />
          </div>
        </div>
        <img className="h-[576px] w-[456px]" src={girl} alt="kti" />
        <div></div>
      </div>

      {/* <div>Get In Touch</div> */}
      <div className="border-2 p-10 ">
        <div className="text-center ">
          <h1 className="text-[39px] font-bold">
            Get <span className="text-[#D95103]">In Touch</span>
          </h1>
          <h2 className="text-[#0C6967] text-[25px] font-semibold">
            Our Friendly team would love to hear from you
          </h2>
        </div>

        <div className=" flex justify-between p-5 shadow-2xl bg-[#FFFFFF] rounded-2xl">
          <div className="border-2 rounded-2xl  w-[461px] bg-[#0C6967] text-white p-6 rounded-2xl">
            <div className="w-[397px] mb-4">
              <div className="flex gap-2 ">
                <FaLocationDot size={20} className="mt-1" />
                <p className="text-[20px] mb-3 ">Our Address</p>
              </div>

              <p className="italic text-[20px] font-thin ">
                New Baneshwor, Kathmandu, Bagmati,
                <br /> Nepal
              </p>
            </div>
            <div>
              <div className="flex gap-2">
                <FaPhone size={20} className="mt-1 " />
                <p className="text-[20px] mb-3 ">Our Contacts</p>
              </div>

              <div className="flex justify-between">
                <div className="text-[20px]">
                  <p>Mobile</p>
                  <p className="italic font-thin">980 5689789</p>
                  <p className="italic font-thin ">9841 275897</p>
                </div>
                <div className="mr-30 text-[20px]">
                  <p>Landline</p>
                  <p className="italic font-thin">01-4783972</p>
                </div>
              </div>
            </div>

            <div className="mt-5">
              <div className="flex gap-2">
                <GoClockFill size={20} className="mt-1" />
                <p className="text-[20px] mb-3 ">Our Service Time</p>
              </div>

              <div className="flex justify-between">
                <div>
                  <p className="text-[20px]">MON-FRI</p>
                  <p className="text-[20px] italic font-thin">10 am- 8 pm</p>
                </div>
                <div className="mr-30">
                  <p className="text-[20px]">SAT-SUN</p>
                  <p className="text-[20px] italic font-thin">Closed</p>
                </div>
              </div>
            </div>

            <div className="mt-20">
              <p className="text-[20px] ">Get in touch in social media</p>
              <div className="flex gap-3 mt-3 mb-20">
                <FaFacebook size={20} />
                <FaInstagram size={20} />
                <FaTiktok size={20} />
              </div>
            </div>
          </div>
          {/* form */}
          <div className="border-2 border-gray-300 p-6 rounded-lg max-w-md mx-auto">
  <form className="space-y-4">
    {/* First Name & Last Name - side by side */}
    <div className="flex gap-4">
      <div className="flex-1">
        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
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
        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
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
      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
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
      <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
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
      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
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
      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
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


      <iframe
        className="m-auto"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.4810592043877!2d85.34317037525248!3d27.67152297620314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb190536c1caa7%3A0xf92fcf603dac3960!2sSipalaya%20Info%20Tech%20Pvt.%20Ltd.!5e0!3m2!1sen!2snp!4v1743050687464!5m2!1sen!2snp"
        width={"1500"}
        height={"450"}
        allowFullScreen=""
        loading="lazy"
        referrer:Policy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default Home;
