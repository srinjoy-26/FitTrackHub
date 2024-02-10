import { TfiMenu } from "react-icons/tfi";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react";
import { FiLogIn } from "react-icons/fi";
import { FaUser } from "react-icons/fa";
import { BrowserRouter as Router , Routes , Route , Link } from "react-router-dom";
import Exercises from "./Cards/Exercises";
import Home from "../Pages/Home";

const Navbar = () => {
  let [nvstate, setstate] = useState(true);

  let nvitem = ["Home", "About", "Contact", "Exercises"];

  return (
    <>

     <Router>
      
      <div className="bg-black flex justify-between px-4 items-center py-3 gap-6 sm:justify-around sm:px-0 " id="nv">

        <div id="logo" className="h-16 w-16"></div>
      
      
        <div id="items">
          <ul className="flex gap-6">
            {nvitem.map((item, index) => {
              return (
                <Link key={index} to={'/' + item.toLowerCase()}><li
                  
                  className="text-md  p-1 cursor-pointer text-white hidden sm:flex hover:text-purple-400"
                >
                  {item}
                </li></Link>
              );
            })}

           

            <TfiMenu
              className="text-white text-xl cursor-pointer sm:hidden "
              onClick={() => setstate(false)}
            ></TfiMenu>
          </ul>
        </div>
      
      <div id="login-signup" className=" hidden sm:flex gap-3">
        <div id="button" className="flex gap-2 bg-blue-500 p-2 rounded-md items-center text-white font-thin hover:bg-blue-900 cursor-pointer">
              <FiLogIn/>
              <p >Login</p>
             </div>

             <div id="sign-up" className="flex gap-2 bg-blue-500 p-2 rounded-md items-center text-white font-thin hover:bg-blue-900 cursor-pointer">
              <FaUser />
              <p>Signup</p>
             </div>
        </div>
      </div>

      <Routes>
                  
              <Route path = "/exercises" element = {<Exercises/>}/> 
      </Routes>

    </Router>



  
      {/* sidebar */}
   <Router>
      <div id="side"
        className={`bg-black py-4 px-4 flex justify-between ${
          nvstate && "hidden"
        } sm:hidden`}
      >
        <div id="items" className="w-full">
          <ul className="flex gap-6 flex-col w-full">
            {nvitem.map((item, index) => {
              return (
                <Link key={index} to={ '/' + item.toLowerCase()}>
                <li
                  
                  className="text-md  text-white p-1 rounded-sm cursor-pointer w-[50%] hover:text-purple-400"
                >
                  {item}
                </li></Link>
              );
            })}
          </ul>

          <div id="login-signup" className="flex flex-col gap-2 mt-4">
        <div id="button" className="flex gap-2 bg-blue-500 p-2 rounded-md items-center text-white font-thin justify-center  hover:bg-blue-900">
              <FiLogIn/>
              <p >Login</p>
             </div>

             <div id="sign-up" className="flex gap-2 bg-blue-500 p-2 rounded-md items-center text-white font-thin justify-center  hover:bg-blue-900">
              <FaUser />
              <p>Signup</p>
             </div>
        </div>
        </div>
        <RxCross1
          className="text-white text-xl cursor-pointer"
          onClick={() => setstate(true)}
        ></RxCross1>
      </div>
        
      <Routes>
      
              <Route path = "/exercises" element = {<Exercises/>}/> 
      </Routes>

      </Router>
    </>
  );
};

export default Navbar;
