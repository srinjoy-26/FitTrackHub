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
    <Card sx={{ maxWidth: 300, backgroundColor:'black', padding:'10px', borderRadius: '5px'}} className="mx-auto bg-red-500" id="card" >
      <CardMedia image={item.src} sx={{ height: 170 }} />
      <CardContent sx={{ color: "white" }}>
        <h2 className="text-lg font-semibold">{item.name}</h2>
        <p className="text-slate-300">
          {item.description}
        </p>
      </CardContent>
      <CardActions>
        <Grid container justifyContent="center">
          <Button size="small" variant="contained" sx={{borderRadius: '20px'}}>
            Know more
          </Button>
        </Grid>
      </CardActions>
    </Card>
  );
}

export default SingleCard;
