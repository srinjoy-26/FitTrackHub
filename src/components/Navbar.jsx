import { TfiMenu } from "react-icons/tfi";

import { useState } from "react";
import { FiLogIn } from "react-icons/fi";
import { FaUser } from "react-icons/fa";
 import { NavLink } from "react-router-dom";
 

const Navbar = () => {
  let [nvstate, setstate] = useState(true);

  let nvitem = ["Home", "About", "Contact", "Exercises"];

  return (
    <>
      <div className="bg-black flex justify-between items-center py-3 px-4 gap-8 sm:justify-around sm:px-0 " id="nv">

        <div id="logo" className="h-14 w-14"></div>
      
      
        <div id="items">
          <ul className="flex gap-6">
            {nvitem.map((item, index) => {
              return (
                <NavLink key={index} to={ item == 'Home' ? '/' :'/' + item.toLowerCase()}>
                  <li className="text-md  p-1 cursor-pointer text-white hidden sm:flex hover:text-purple-400">
                  {item}
                </li></NavLink>
              );
            })}

           

            <TfiMenu
              className="text-white text-xl cursor-pointer sm:hidden "
              onClick={() => setstate(!nvstate)}
            ></TfiMenu>
          </ul>
        </div>
      
      <div id="login-signup" className=" hidden sm:flex gap-3">
        <div id="button" className="flex gap-2 bg-blue-500 p-2 h-10 w-full rounded-md items-center text-white font-thin hover:bg-blue-900 cursor-pointer">
              <FiLogIn/>
              <p >Login</p>
             </div>

             <div id="sign-up" className="flex gap-2 bg-blue-500 h-10 w-full p-2 rounded-md items-center text-white font-thin hover:bg-blue-900 cursor-pointer">
              <FaUser />
              <p>Signup</p>
             </div>
        </div>
      </div>

     
{/* sidebar */}
  
      <div id="side"
        className={`bg-black py-4 px-4 ${
          nvstate && "hidden"
        } sm:hidden`}
      >
        <div id="resitems" className="w-full">
          <ul className="flex gap-6 flex-col w-full">
            {nvitem.map((item, index) => {
              return (
                <NavLink key={index} to={item == 'Home' ? '/' :'/' + item.toLowerCase()}>
                <li
                  
                  className="text-md  text-white p-1 rounded-sm cursor-pointer w-[50%] hover:text-purple-400"
                >
                  {item}
                </li></NavLink>
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
       
      </div>
        
      

     
    </>
  );
};

export default Navbar;
