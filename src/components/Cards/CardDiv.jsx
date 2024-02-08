import { Grid } from "@mui/material";

import SingleCard from "./SingleCard";

function CardDiv() {
  return (
    <Grid container spacing={2} className="p-6 bg-gradient-to-r from-purple-500 to bg-red-800" >
      <Grid item xs={12} sm={6} md={3} lg={3}>
        <SingleCard />
      </Grid>
      <Grid item xs={12} sm={6} md={3} lg={3}>
        <SingleCard />
      </Grid>
      <Grid item xs={12} sm={6} md={3} lg={3}>
        <SingleCard />
      </Grid>
      <Grid item xs={12} sm={6} md={3} lg={3}>
        <SingleCard />
      </Grid>
    </Grid>
  );
}

export default CardDiv;
