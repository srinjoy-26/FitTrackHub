
import { IoChevronBackCircleOutline } from "react-icons/io5";
import Exercisehome from "./Exercisehome";

const Exercisepage = () =>{
  return(
    
    <div id="exercise" className="h-screen bg-gradient-to-t from-red-500 to bg-black"> 
    <div id="buttons" className="flex justify-center gap-5 pt-5 font-mono items-center">
     <IoChevronBackCircleOutline className="text-white text-4xl"></IoChevronBackCircleOutline>
      <button className="bg-red-500 text-white text-md  p-3 rounded-full">
         Strength</button>
      <button className="bg-red-500 text-white text-md  p-3 rounded-full w-[5.5rem]">
       Yoga</button>
    </div>

    <div>
    <Exercisehome/>
    </div>
    
    
  </div>
  
  )
  
}

export default Exercisepage;