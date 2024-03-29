import { Grid } from "@mui/material";

import SingleCard from "./SingleCard";
 import exercise from "../../Exercise";

function Exercises() {
  
  return (
    <>
    
     <Grid container spacing={2} className="p-6  bg-black" >
     {exercise.map((x , index) => {
      return(
    <Grid key={index} item xs={12} sm={6} md={3} lg={3}>
    <SingleCard item = {x} />
    </Grid>
      )
    })}
      
    </Grid>
    </>
  );
}

export default Exercises;
