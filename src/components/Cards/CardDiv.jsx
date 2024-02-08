import { Grid } from "@mui/material";
import * as React from "react";
import SingleCard from "./SingleCard";

function CardDiv() {
  return (
    <Grid container spacing={2} margin={3}>
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
