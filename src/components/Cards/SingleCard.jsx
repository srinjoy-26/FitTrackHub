import { Button, Card, CardActions, CardContent, CardMedia, Grid } from "@mui/material";
import { useState } from "react";

import { Link } from "react-router-dom";

function SingleCard({ item }) {
     let[value , setValue] = useState(item)
  return (
    <Card sx={{ maxWidth: 300, backgroundColor: 'black', padding: '10px', borderRadius: '5px' }} className="mx-auto bg-red-500" id="card" >
      <CardMedia image={value.src} sx={{ height: 170 }} />
      <CardContent sx={{ color: "white" }}>
        <h2 className="text-lg font-semibold">{value.name}</h2>
        <p className="text-slate-300">
          {value.description}
        </p>
      </CardContent>
      <CardActions>
        <Grid container justifyContent="center">
          <Button size="small" variant="contained" sx={{ borderRadius: '20px' }}>
            <Link to="/workout" state= {{ name: value.name }}>Know more</Link>
            
          </Button>
        </Grid>
      </CardActions>
    </Card>
  );
}

export default SingleCard;
