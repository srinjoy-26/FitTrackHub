import { TfiMenu } from "react-icons/tfi";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react";

const Navbar = () => {
  let [nvstate, setstate] = useState(true);

  let nvitem = ["Home", "About", "Contact", "Exercises"];

  return (
    <>
      <div className="bg-black flex justify-between px-4 items-center py-3 gap-6 sm:justify-around sm:px-0 " id="nv">
        <div id="logo" className="h-16 w-16"></div>

        <div id="items">
          <ul className="flex gap-6">
            {nvitem.map((item, index) => {
              return (
                <li
                  key={index}
                  className="text-md  p-1 cursor-pointer text-white hidden sm:flex hover:text-purple-400"
                >
                  {item}
                </li>
              );
            })}
            <TfiMenu
              className="text-white text-xl cursor-pointer sm:hidden "
              onClick={() => setstate(false)}
            ></TfiMenu>
          </ul>
        </div>
      </div>

      {/* sidebar */}

      <div id="side"
        className={`bg-black py-4 px-4 flex justify-between ${
          nvstate && "hidden"
        } sm:hidden`}
      >
        <div id="items" className="w-full">
          <ul className="flex gap-6 flex-col w-full">
            {nvitem.map((item, index) => {
              return (
                <li
                  key={index}
                  className="text-md  text-white p-1 rounded-sm cursor-pointer w-[50%] hover:text-purple-400"
                >
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
        <RxCross1
          className="text-white text-xl cursor-pointer"
          onClick={() => setstate(true)}
        ></RxCross1>
      </div>
    </>
  );
};

export default Navbar;
