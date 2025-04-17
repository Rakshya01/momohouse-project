import { NavLink } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import momologo from "../assets/momo.png";
import { TiShoppingCart } from "react-icons/ti";
import { useContext } from "react";
import { CartContext } from "../Context/CartProvider";
import { useAuth0 } from "@auth0/auth0-react";

function Navigation() {
  const { user, logout, isAuthenticated, isLoading } = useAuth0();
console.log(isAuthenticated);

  const {state}=useContext(CartContext);
  let totalItem = state.items.reduce((acc,product)=>{
    return acc+product.qty;
  },0)
  return (
    <div className=" flex  text-[17px]    justify-around  p-4 border-b-1 border-gray-500">
      <div className="flex   gap-x-2  justify-center  items-center ">
        <img src={momologo} alt="" />
        <NavLink to="/" className="text-green-700 text-[22px]  font-bold  ">
          momos
        </NavLink>
      </div>
      <div className=" w-[500] space-x-3.5 flex">
        <NavLink to="/about">About US</NavLink>
        <NavLink to="/menu">Our Menu</NavLink>
        <NavLink to="/services">Our Services</NavLink>
        <NavLink to="/allergyAdvice">AllergyAdvice</NavLink>
        
        <NavLink className=" relative " to="/cart">
        
          <span className=" absolute left-4 -top-2 text-xs flex justify-center items-center bg-red-600 rounded-full h-5 w-5  text-center font-bold text-white ">{totalItem}</span>
        <TiShoppingCart   size={30}/>
        
        </NavLink>

{
  isAuthenticated? (<button onClick={()=>{
    logout();
  }} className="mb-2">Logout</button>):(

    <NavLink to="/login">Login</NavLink>
  )
}

          

      </div>

      <div className="flex      justify-center  items-center   gap-x-3">
        <NavLink
          target="_blank"
          to="https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2F"
        >
          <FaFacebookF />
        </NavLink>
        <NavLink
          target="_blank"
          to="https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2F"
        >
          <FaTiktok />
        </NavLink>
        <NavLink
          target="_blank"
          to="https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2F"
        >
          <FiInstagram />
        </NavLink>
        <NavLink
          className="bg-orange-700 py-1.5 px-3 rounded-3xl  text-white  "
          to="/contact"
        >
          Contact US
        </NavLink>

        <NavLink to="/profile">
        <img className="h-7 rounded-full" src={user?.picture} alt=""/>
        </NavLink>
      </div>
    </div>
  );
}

export default Navigation;