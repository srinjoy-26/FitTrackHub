import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
} from "@mui/material";
import { red } from "@mui/material/colors";


function SingleCard({item}) {
  return (
    <Card sx={{ maxWidth: 300, backgroundColor:'black', padding:'10px'}} className="mx-auto bg-red-500" id="card" >
      <CardMedia image={item.src} sx={{ height: 150 }} />
      <CardContent sx={{ color: "white" }}>
        <h2>{item.name}</h2>
        <p style={{ color: "gray" }}>
          {item.description}
        </p>
      </CardContent>
      <CardActions>
        <Grid container justifyContent="center">
          <Button size="small" variant="contained" color="primary">
            Know more
          </Button>
        </Grid>
      </CardActions>
    </Card>
  );
}

export default SingleCard;
