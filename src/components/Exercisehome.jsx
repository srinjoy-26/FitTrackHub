
import { Link } from "react-router-dom";

const Exercisehome = () =>{
  return(
    <div id="exercise" className="py-4 bg-gradient-to-t from-red-500 to bg-black"> 
    {/* <div id="buttons" className="flex justify-center gap-5 pt-5 font-mono items-center">
     
      
      <button className="bg-red-500 text-white text-md  p-3 rounded-full w-[5.5rem]">
       Yoga</button>
    </div> */}

    <div className="text-center w-[80%] h-[50vh] mx-auto border-2 border-blue-500 mt-5 rounded-lg p-8 flex flex-col justify-center gap-5 items-center">
      <h1 className="text-white text-4xl font-mono">Try the one which fits your needs</h1>
      
      <p className="text-lg text-white font-thin">Just gather the courage to begin,and you're already there</p>

      <button className="bg-black text-white text-md  p-3 rounded-full w-[8rem] hover:bg-red-500">
        <Link to="/exercises">Learn More</Link> </button>
    </div>
    
    
    
  </div>
  
  )
}

export default Exercisehome