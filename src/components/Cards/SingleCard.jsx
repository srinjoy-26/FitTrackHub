import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
} from "@mui/material";
import { red } from "@mui/material/colors";


function SingleCard() {
  return (
    <Card sx={{ maxWidth: 300, backgroundColor:'black', padding:'10px'}} className="mx-auto bg-red-500" id="card" >
      <CardMedia image="/src/assets/exercise.jpg" sx={{ height: 100 }} />
      <CardContent sx={{ color: "white" }}>
        <h2>Exercise name</h2>
        <p style={{ color: "gray" }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta
          minus molestiae vel beatae natus eveniet.
        </p>
      </CardContent>
      <CardActions>
        <Grid container justifyContent="center">
          <Button size="small" variant="contained" color="success">
            Know more
          </Button>
        </Grid>
      </CardActions>
    </Card>
  );
}

export default SingleCard;
