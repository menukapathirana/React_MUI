import {
  makeStyles,
  Container,
  Typography,
  ImageList,
  ImageListItem,
  Link,
  Divider,
} from "@material-ui/core";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import { fontSize } from "@mui/system";

const useStyle = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
    position: "sticky",
    top:0,
  },
  title: {
    fontSize: 16,
    fontWeight: 500,
    color: "#555",
  },
  link:{
    marginRight:theme.spacing(2),
    color:"#555",
    fontSize:16,
  }
}));

function Rightbar() {
  const classes = useStyle();
  return (
    <Container className={classes.container}>
      <Typography className={classes.title} gutterBottom>
        Online Friends
      </Typography>
      <AvatarGroup max={6} style={{marginBottom:20}}>
        <Avatar
          alt="Remy Sharp"
          src="https://mui.com/static/images/avatar/1.jpg"
        />
        <Avatar
          alt="Travis Howard"
          src="https://mui.com/static/images/avatar/2.jpg"
        />
        <Avatar
          alt="Cindy Baker"
          src="https://mui.com/static/images/avatar/3.jpg"
        />
        <Avatar
          alt="Agnes Walker"
          src="https://mui.com/static/images/avatar/4.jpg"
        />
        <Avatar
          alt="Trevor Henderson"
          src="https://mui.com/static/images/avatar/5.jpg"
        />
        <Avatar
          alt="Trevor Henderson"
          src="https://mui.com/static/images/avatar/6.jpg"
        />
        <Avatar
          alt="Trevor Henderson"
          src="https://mui.com/static/images/avatar/7.jpg"
        />
        <Avatar
          alt="Trevor Henderson"
          src="https://mui.com/static/images/avatar/8.jpg"
        />
      </AvatarGroup>
      <Typography className={classes.title} gutterBottom>
        Gallery
      </Typography>
      <ImageList cols={3} rowHeight={160} 
      style={{marginBottom:20}}
      className={classes.imageList}>
        <ImageListItem>
          <img
            src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
            alt=""
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d"
            alt=""
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c"
            alt=""
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://cdn.pixabay.com/photo/2016/01/22/02/13/meat-1155132__340.jpg"
            alt=""
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://cdn.pixabay.com/photo/2014/04/22/02/56/pizza-329523__340.jpg"
            alt=""
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://cdn.pixabay.com/photo/2016/09/15/19/24/salad-1672505__340.jpg"
            alt=""
          />
        </ImageListItem>
      </ImageList>

      <Typography className={classes.title} gutterBottom>
        Categories
      </Typography>
      <Link href="#" className={classes.link} variant="body2">Dairy</Link>
      <Link href="#" className={classes.link} variant="body2">Vegetables</Link>
      <Link href="#" className={classes.link} variant="body2">Grains</Link>
      <Divider flexItem style={{marginBottom:5}}/>
      <Link href="#" className={classes.link} variant="body2">Protein Foods</Link>
      <Link href="#" className={classes.link} variant="body2">Added Sugars</Link>
      <Link href="#" className={classes.link} variant="body2">Beverages</Link>
    </Container>
  );
}

export default Rightbar;
