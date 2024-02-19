import { TfiMenu } from "react-icons/tfi";

import { useState , useEffect} from "react";
import { FiLogIn } from "react-icons/fi";
import { FaUser } from "react-icons/fa";
 import { NavLink , useNavigate } from "react-router-dom";
 import { TbFaceId } from "react-icons/tb";
 import { account } from '../lib/appwrite';
 

const Navbar = () => {
  let [nvstate, setstate] = useState(true);
  let [name , setName] = useState('')

  let nvitem = ["Home", "About", "Contact", "Exercises"];
  let Navigate = useNavigate()
  
  useEffect(()=>{
    isLogin();
  }, [])

  const isLogin = async() =>{
    try{
      var x = await account.get('current')
      setName(x.name)
    }catch(e){
      Navigate('/')
    }
  }

  const Logout = async() => {
    try{
      var x = await account.deleteSession('current')
      Navigate('/')
    }catch(e){
      console.log(e)
    }
  }


  return (
    <>
      <div className="bg-black flex justify-between items-center py-3 px-4 gap-8 sm:justify-around sm:px-0 " id="nv">

        <div id="logo" className="h-14 w-14"></div>
      
      
        <div id="items">
          <ul className="flex gap-6">
            {nvitem.map((item, index) => {
              return (
                <NavLink key={index} to={`/${item.toLowerCase()}`}>
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
      
      <div id="login-signup" className=" hidden sm:flex gap-3 items-center">
        <div id="button" className="flex gap-2 bg-blue-500 p-2 h-10 w-[40%] rounded-md items-center text-white font-thin hover:bg-blue-900 cursor-pointer" onClick={Logout}>
              <FiLogIn/>
              <p >Logout</p>
             </div>
              
              <TbFaceId className="text-white text-4xl"/>
              {name ? <p className="text-white text-md">Hi {name}</p> : <p className="text-white text-md">Loading.....</p>}
             {/* <div id="sign-up" className="flex gap-2 bg-blue-500 h-10 w-full p-2 rounded-md items-center text-white font-thin hover:bg-blue-900 cursor-pointer">
              <FaUser />
              <p>Signup</p>
             </div> */}
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
                <NavLink key={index} to={`/${item.toLowerCase()}`}>
                <li
                  
                  className="text-md  text-white p-1 rounded-sm cursor-pointer w-[50%] hover:text-purple-400"
                >
                  {item}
                </li></NavLink>
              );
            })}
          </ul>

          <div id="login-signup" className="flex flex-col gap-3 mt-4">
        <div id="button" className="flex gap-2 bg-blue-500 p-2 rounded-md items-center text-white font-thin justify-center  hover:bg-blue-900 cursor-pointer" onClick={Logout}>
              <FiLogIn/>
              <p >Logout</p>
             </div>
          

          <div className="flex gap-2 items-center">
          <TbFaceId className="text-white text-4xl"/>
              {name ? <p className="text-white text-md">Hi {name}</p> : <p className="text-white text-md">Loading.....</p>}
          </div>
             
             

             {/* <div id="sign-up" className="flex gap-2 bg-blue-500 p-2 rounded-md items-center text-white font-thin justify-center  hover:bg-blue-900">
              <FaUser />
              <p>Signup</p>
             </div> */}
        </div>

        </div>
       
      </div>
        
      

     
    </>
  );
};

export default Navbar;