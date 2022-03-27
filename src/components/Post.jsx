import { Button, CardActions, Card, CardActionArea, CardContent, CardMedia, makeStyles, Typography} from "@material-ui/core";



const useStyle = makeStyles((theme) => ({
    card:{
        marginBottom:theme.spacing(5)
    },
    media:{
        [theme.breakpoints.down("sm")]:
        {
            height: "200px",
        }
    },
}));

function Post() {
  const classes = useStyle();
  return (
    <Card className={classes.card}>
        <CardActionArea>
            <CardMedia
            component="img"
            height="300"
            className={classes.media}
            image="https://cdn.pixabay.com/photo/2021/07/19/16/04/pizza-6478478__340.jpg"
            title="My Post"
            />
            <CardContent>
                <Typography gutterBottom variant="h5">Homemade Pizza</Typography>
                <Typography variant="body2">
                First, on the dough: Don't get overwhelmed! If it's your first time making pizza at home, 
                just buy the dough. You can usually find pizza dough at the grocery store, or some pizza 
                places will sell you a one-pound ball of dough for a few bucks.
                </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
            <Button size="small" color="primary">Share</Button>
            <Button size="small" color="primary">Learn More</Button>
        </CardActions>
    </Card>
      
    
  );
}

export default Post;
