import React from "react";
import chef from "../assets/chef0.png";
import brush from "../assets/BRUSHES.png";
import background from "../assets/background.png";
import background1 from "../assets/background1.png";
import scan from "../assets/Scan.png"

function AllergyAdvice() {
  return (
    <>
      {/* Top Section */}
      <div className="flex justify-between items-start px-10 py-16 flex-wrap">
        <div className="max-w-xl">
          <h1 className="text-[56px] text-[#0C6967] font-bold">
            Allergy Advices
          </h1>
          <p className="text-[24px] font-light mt-5">AT OUR RESTAURANT</p>
          <p className="font-bold text-[31px] mt-5">
            We use only the freshest and highest quality ingredients in all our
            dishes,{" "}
            <span className="text-[#D95103]">
              and offer transparency in our ingredient labeling.
            </span>
          </p>
        </div>
        <img
          src={chef}
          alt="Chef"
          className="w-[400px] max-w-full mt-10 md:mt-0"
        />
      </div>

      {/* Ingredient Heading */}
      <div className="flex justify-center items-center gap-6 mt-10">
        <img className="w-[201px] h-[5px]" src={brush} alt="brush line" />
        <h1 className="text-[40px] font-bold">
          <span className="text-[#D95103]">Ingredient's</span> Used
        </h1>
        <img className="w-[201px] h-[5px]" src={brush} alt="brush line" />
      </div>

      {/* Ingredient Boxes */}
      <div className="relative w-full flex flex-col items-center px-6 py-20 gap-16">
        {/* Background and Dough Card */}
        <div className="relative w-fit">
          <img
            src={background}
            alt="background"
            className="w-[521px] h-[490px] object-contain mr-90"
          />
          <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-[700px] bg-white border-4 border-green-700 rounded-2xl p-8 shadow-lg">
            <p className="text-[25px] font-bold mb-4">For the Dough</p>
            <ul className="list-[circle] list-inside text-[20px] space-y-2 text-black">
              <li>120 gms refined flour</li>
              <li>1/4 tsp baking powder</li>
              <li>1/2 tsp salt water (for kneading)</li>
            </ul>
          </div>

          {/* Chicken Filling Card */}
          <div className="w-[700px] bg-white border-4 border-green-700 rounded-2xl p-8 shadow-lg transform translate-x-1/7 -translate-y-30">
            <p className="text-[25px] font-bold mb-4">
              For the Chicken Filling:
            </p>
            <ul className="list-[circle] list-inside text-[20px] space-y-2 text-black">
              <li>1 cup chicken (minced)</li>
              <li>1/2 cup onions, finely chopped</li>
              <li>1/4 tsp black pepper powder</li>
              <li>1 tbsp oil</li>
              <li>1/2 tsp garlic paste</li>
              <li>1/2 tsp soya sauce</li>
              <li>Salt</li>
              <li>1/4 tsp vinegar</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img className="-m-100 mb-10 w-500 " src={background1} />

          <div className="-mt-115 -ml-40 w-[700px] transform -translate-x-1/2 bg-white border-4 border-green-700 rounded-2xl p-8 shadow-lg transform translate-x-1/7 -translate-y-30">
            <p className="text-[25px] font-bold mb-4">
              For the Vegetarian Filling:
            </p>
            <ul className="list-[circle] list-inside text-[20px] space-y-2 text-black">
              <li>1 cup cabbage and carrots, grated</li>
              <li>2 tbsp onions, finely chopped</li>
              <li>1/2 tsp garlic, finely chopped</li>
              <li>1 tbsp oil</li>
              <li>1/4 tsp soya sauce</li>
              <li>to taste salt</li>
              <li>to taste peper</li>
              <li>1 tbsp cornflour</li>
            </ul>
          </div>
        </div>

        <div className=" -ml-40 w-[700px] transform -translate-x-1/2 bg-white border-4 border-green-700 rounded-2xl p-8 shadow-lg transform translate-x-1/7 -translate-y-30">
          <p className="text-[25px] font-bold mb-4">For Chilli Sauce:</p>
          <ul className="list-[circle] list-inside text-[20px] space-y-2 text-black">
            <li>25 gram garlic, peeled</li>
            <li>6 gms whole red chillies</li>
            <li>3 tbsp vinegar</li>
            <li>3 tbsp vinegar</li>
            <li>1 tbsp oil</li>
            <li>to taste salt</li>
            <li>to taste peper</li>
            <li>to taste sugar</li>
          </ul>
        </div>

        <div className="p-30 -mt-30">
          <div className="flex justify-center items-center gap-4">
            <img className="w-[200px] h-[5px]" src={brush} />
            <h1 className="text-[40px] font-bold"><span className="text-[#D95103]">Allergy </span>Advice</h1>
            <img className="w-[200px] h-[5px]"  src={brush} />
          </div>
          <div className="mt-10">
            <p className="w-[1128px] text-[16px] ">
              Lorem ipsum dolor sit amet consectetur. Feugiat lectus sit est
              blandit in gravida. Nisl facilisis luctus sit porttitor placerat
              purus tincidunt. Cursus nascetur a mauris odio quis sociis pretium
              nisl. In viverra diam dis montes orci congue vulputate magna
              ullamcorper. Semper tellus ipsum felis maecenas ultrices turpis
              amet euismod malesuada. Amet sed neque vitae malesuada quis sed
              urna.<br/><br/>
               Feugiat orci feugiat cursus risus tincidunt. Aliquet nam
              iaculis bibendum tortor varius sit. Volutpat nunc nisl quisque
              elit. Ac est ultricies risus et sed. Donec auctor tristique quam
              morbi pellentesque et. Scelerisque dui id arcu laoreet iaculis
              nunc et nulla sed. Aliquet nullam vulputate quis ut mi placerat
              auctor. Ipsum massa suspendisse netus mollis interdum. Augue leo
              eget ut vitae maecenas ac.<br/><br/>
               Metus massa nunc tristique donec
              dignissim aenean congue justo et. Parturient elit adipiscing non
              vitae mattis. Congue senectus urna cursus nisi nisl nisl tincidunt
              rhoncus. Congue sit etiam vestibulum elit aenean leo enim
              volutpat. Aliquet vitae condimentum bibendum ullamcorper vel
              cursus libero netus bibendum. Lorem id ut proin tincidunt. Nibh
              nunc amet odio est et. Sem dui nunc morbi leo quisque viverra
              ultrices. Mattis at tempus ultricies ut feugiat nunc dignissim.
              Urna turpis purus turpis elit risus.<br/><br/>
               Sed elit ornare senectus
              dignissim diam dolor sed dictum. Faucibus mauris senectus odio
              blandit diam nunc. Urna volutpat ut potenti ut mus orci neque sem.
              Mattis amet at amet faucibus nisl morbi aenean ac. Justo turpis
              bibendum donec lacinia. Enim integer ornare nibh urna enim tortor
              arcu sit lacinia. Dapibus praesent vitae dolor cursus fringilla
              hac facilisis pellentesque. Elementum lacus varius et neque amet
              aliquam donec sed. Ultrices euismod commodo id vehicula commodo.
              Amet lorem eros nulla mauris. Sit arcu enim sit nunc mi sed
              aenean. Ornare enim vitae volutpat est dui tortor. Viverra
              habitant et consequat vitae elit aliquet iaculis in tristique.<br/><br/>
              
              Quam ipsum viverra ac laoreet platea in praesent. Mattis molestie
              arcu nulla convallis interdum proin dui ut porta. Amet potenti
              praesent pulvinar scelerisque vitae habitant eget. Senectus hac id
              aliquam ipsum urna. Est ut amet nec sollicitudin nunc viverra nec
              ipsum suspendisse. Etiam risus ultricies dictum nisl. Bibendum
              ultrices elementum feugiat erat suspendisse mi fermentum magna
              suspendisse. Nisi mattis consequat nec donec eu amet nulla a. At
              blandit vulputate morbi tortor amet. Hac nec gravida tempor ac.
              Senectus nunc libero scelerisque quisque. Risus condimentum mattis
              massa integer.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center -mt-10 mb-9">

      <div className="p-5 bg-gray-300 rounded-2xl w-[1128px]  flex justify-center items-center flex-col">
        <h1 className="text-[#0C6967] text-[31px] font-bold">Scan the QR code</h1>
        <p className="text-[20px] mt-5 mb-10">You can also check the allergy advices using your phone as well</p>
        <img className="w-[176px] h-[176px]" src={scan}/>
        <p className="text-[#D95103] text-[31px] font-bold mt-5 mb-10">SCAN ME!</p>
      </div>
      </div>
    </>
  );
}

export default AllergyAdvice;
