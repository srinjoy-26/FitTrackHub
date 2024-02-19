
import WorkoutSingleCard from "./WorkoutSingleCard";
import axios from "axios";
import { useLocation } from 'react-router-dom';
import { useState , useEffect } from "react";
import { IoChevronBackCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import Loader from './Loader';

function Workout() {
    const location = useLocation();
    const { name } = location.state || {}; 

    const [exercises, setExercises] = useState([]);
    const apiKey = import.meta.env.VITE_API_KEY;
    

  useEffect(() => {
    const fetchExercises = async () => {
      const options = {
        method: 'GET',
        url: `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${name}`,
        params: {limit: '5'},
        headers: {
          'X-RapidAPI-Key': '',
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
      <div className="flex gap-2 justify-start w-[90%] px-1 items-center">
      <Link to="/exercises"><IoChevronBackCircleOutline className="text-white text-3xl"></IoChevronBackCircleOutline></Link>
      <h1 className="text-white font-mono font-semibold text-2xl sm:text-3xl">{`${name} exercises`}</h1>
      </div>
      {
      exercises == '' ? <Loader/> :
      <div className="flex flex-wrap gap-4 sm:gap-2">
        {exercises.map((exercise, index) => (
           <WorkoutSingleCard key={index} data={exercise}/>
        ))}
      </div>
      }
    </div>
    )
}

export default Workout