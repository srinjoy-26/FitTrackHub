import { Link } from "react-router-dom";
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";

export default function Hero() {
  useEffect(()=>{
    Aos.init({duration: 1000})
  },[])
  return (
  <>
    <div className=" flex flex-col justify-around items-center bg-gradient-to-t bg-black py-2 px-4 gap-5   h-screen xl:flex-row xl:px-0 xl:gap-0" >
      {/* left section div image*/}
      <div className="flex flex-col justify-center  gap-8  text-white  xl:w-[42%]" data-aos = "fade-right">
        <h1 className="text-3xl lg:text-5xl tracking-widest inline" id="hero-heading">
        FIT TRACK HUB <span className="">.</span>
        </h1>

        <h2 className="text-xl lg:text-2xl tracking-widest">NO PAIN NO GAIN</h2>

        <p className="text-md">
          Welcome to FitTrackHub , the place where your fitness and muscle-building journey begins.
          Discover a vast library of professionally curated workouts designed to target every muscle group and fitness objective.
        </p>

        <button className="bg-gradient-to-r from-purple-600 to-blue-500 rounded-full lg:w-36 p-2 lg:p-3 text-white tracking-widest hover:shadow-lg  hover:shadow-blue-500 w-full md:w-[50%] md:mx-auto">
         <Link to='/exercises'>LEARN MORE</Link> 
        </button>
      </div>

      {/* right section div image*/}

      <div className="w-full h-[30rem] rounded-3xl shadow-xl shadow-red-400 md:h-[40rem]   xl:w-96" id="hero-img" data-aos = "fade-left">
       
      </div>
      
    </div>
    
    
  </>
  );
}
