import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import AllergyAdvice from "./Pages/AllergyAdvice";
import Contact from "./Pages/Contact";
import Menu from "./Pages/Menu";
import Services from "./Pages/Services";
import Navigation from "./Navbar/Navigation";
import Footer from "./Pages/Footer";
import ProductDescription from "./Pages/ProductDescription";
import CartPage from "./Pages/CartPage";
import Payment from "./payment/Payment";
import Success from "./payment/Success";
import Failure from "./payment/Failure";
import Login from "./Auth/Login";
import Profile from "./Auth/Profile";
import ProtectedRoutes from "./Auth/ProtectedRoutes";
function App() {
  return (
    <>
    <Navigation/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/allergyadvice" element={<AllergyAdvice />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/menu" element={<ProtectedRoutes components={<Menu/>}/>} />
        <Route path="/services" element={<Services />} />
        <Route path="/productdescription/:id" element={<ProtectedRoutes components={<ProductDescription/>}/>} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/payment" element={<ProtectedRoutes components={<Payment/>}/>} />
        <Route path="/success" element={<ProtectedRoutes components={<Success/>}/>} />
        <Route path="/failure" element={<ProtectedRoutes components={<Failure/>}/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/profile" element={<ProtectedRoutes components={<Profile/>}/>} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
