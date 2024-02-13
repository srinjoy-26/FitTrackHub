import React from "react";
import LegWorkoutSingleCard from "./LegWorkoutSingleCard";
import legExercise from "./LegWorkoutData"

function LegWorkout(props) {
    return(
        <div className="bg-black "> 
            <div className="text-white font-bold">
                <h1 className="font-lg mx-auto">Legs Workout</h1>
            </div>

            <div className="flex flex-wrap justify-center gap-4 ">
                
            {
                legExercise.map((exercise)=>{
                    console.log(exercise)
                    return(
                    <LegWorkoutSingleCard 
                    exercise={exercise}
                    />)
                })
            }
            </div>
        </div>
    )
}

export default LegWorkout