import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className=" flex flex-col justify-around items-center bg-gradient-to-t bg-black py-2 px-4 gap-5 h-screen md:flex-row md:px-0 md:gap-1">
      {/* left section div image*/}
      <div className="flex flex-col justify-center  gap-4  text-white">
        <h1 className="text-3xl lg:text-5xl tracking-widest inline">
        FIT TRACK HUB <span className="">.</span>
        </h1>

        <h2 className="text-xl lg:text-2xl tracking-widest">NO PAIN NO GAIN</h2>

        <p className="text-md">
          Welcome to FitTrackHub , the place where your fitness and muscle-building journey begins.
        </p>

        <button className="bg-gradient-to-r from-green-400 to-blue-500 rounded-full lg:w-36 p-2 lg:p-3 text-white tracking-widest hover:shadow-lg  hover:shadow-blue-500 w-full">
         <Link to='/exercises'>LEARN MORE</Link> 
        </button>
      </div>

      {/* right section div image*/}

      <div className="w-full h-[30rem] rounded-3xl shadow-xl shadow-red-400 sm:w-96" id="hero-img">
       
      </div>
    </div>
  );
}
