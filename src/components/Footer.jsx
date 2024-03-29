import { FaFacebook } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";

const Footer = () => {
  let fooitem = ["Home", "About", "Contact", "Exercises",'Diet'];

  useEffect(()=>{
    Aos.init({duration: 1000})
  },[])

  return (
    <div className="bg-black relative pb-0" id="footer">
      <div
        id="footer"
        className="bg-black flex flex-col  md:flex-row md:justify-around py-8 md:items-center"
      >
        <div className=" p-4 md:py-0" >
          <div className="flex gap-1 items-center" data-aos = "fade-right">
            <div id="logo" className="h-16 w-16"></div>
            <span className="text-white">FitTrackHub</span>
          </div>
          <p className="text-slate-200 font-thin mt-2" data-aos = "fade-left">
            Our goal is to help you get fit!
          </p>
        </div>

        <div className=" p-4 md:py-0" data-aos = "fade-down">
          <ul>
            {fooitem.map((x, index) => {
              return (
                <Link
                  to={`/${x.toLowerCase()}`}
                  key={index}
                >
                  <li className="text-slate-200 text-md mt-2 hover:text-white hover:font-semibold cursor-pointer">
                    {x}{" "}
                  </li>
                </Link>
              );
            })}
          </ul>
        </div>

        <div className=" p-4 md:py-0" data-aos = "fade-left">
          <p className="text-slate-200 mt-2 text-md">Get in Touch</p>
          <div className="text-slate-300 flex gap-2 justify-start cursor-pointer mt-1">
            <FaFacebook className="hover:text-lg hover:text-blue-400"></FaFacebook>
            <FaLinkedin className="hover:text-lg hover:text-blue-400"></FaLinkedin>
            <FaSquareXTwitter className="hover:text-lg hover:text-blue-400"></FaSquareXTwitter>
          </div>

          <div className="mt-6 flex flex-col gap-1 sm:flex-row ">
            <input
              type="text"
              placeholder="Enter your email"
              className="focus:outline-none p-1 rounded-full px-3 placeholder:text-sm"
            />
            <button className="bg-blue-600 rounded-full p-2 text-sm text-white px-3">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="py-1 pb-2">
        <p className="text-center text-slate-300 text-sm px-1 font-light">
          @2024 EnergiZeMe All rights reserved{" "}
        </p>
      </div>
    </div>
  );
};
export default Footer;
