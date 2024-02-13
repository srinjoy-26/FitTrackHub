import React from "react";
import LegWorkoutData from "./LegWorkoutData"
import squats from "../assets/squats.gif"

function LegWorkoutSingleCard(props) {
    const {name, description , src} = props.exercise
  return (
    <div className="w-[300px] bg-slate-700 bg-opacity-80 rounded-md overflow-hidden">

      <div className="relative">
        <img src= {src} alt="Workout Gif"/>
      </div>

      <div className="p-4">
        <p className="text-white font-bold text-lg leading-6">
          {name}
        </p>
        <p className="mt-2 text-white">
        {description}
        </p>
      </div>
    </div>
  );
}

export default LegWorkoutSingleCard
