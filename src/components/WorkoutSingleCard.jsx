
function WorkoutSingleCard({data}) {
    
  return (
    <div className=" w-[21.5rem]  rounded-md overflow-hidden bg-transparent mx-auto sm:w-[18rem] border-2 border-blue-600">

      <div className="">
        <img src= {data.gifUrl} alt="Workout Gif"/>
      </div>

      <div className="p-4 text-center">
        <p className="text-white font-bold text-lg leading-6">
          {data.name} ({data.target})
        </p>

        <div className="text-left">
        {data.instructions.map((x , index) => (
          <li className="text-white mt-2 font-light" key={index}>{x}</li>
        ))}
        </div>

      </div>
    </div>
  );
}

export default WorkoutSingleCard
