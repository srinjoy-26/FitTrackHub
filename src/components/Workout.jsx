
import WorkoutSingleCard from "./WorkoutSingleCard";
import axios from "axios";
import { useLocation } from 'react-router-dom';
import { useState , useEffect } from "react";

function Workout() {
    const location = useLocation();
    const { name } = location.state || {}; 

    const [exercises, setExercises] = useState([]);

  useEffect(() => {
    const fetchExercises = async () => {
      const options = {
        method: 'GET',
        url: `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${name}`,
        params: {limit: '5'},
        headers: {
          'X-RapidAPI-Key': 'd09cd9ba7amsh74278a5d470d032p171516jsn0e1b5f3b4ae1',
          'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
      };

       try {
        const response = await axios.request(options);
        setExercises(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchExercises();
  }, []);

    return(
    <div className="flex flex-col items-center px-3 py-2 gap-3  bg-black ">
      <h1 className="text-white font-mono font-semibold text-3xl">{`${name} exercises`}</h1>
      <div className="flex flex-wrap gap-4 sm:gap-2">
        {exercises.map((exercise, index) => (
           <WorkoutSingleCard key={index} data={exercise}/>
        ))}
      </div>
    </div>
    )
}

export default Workout