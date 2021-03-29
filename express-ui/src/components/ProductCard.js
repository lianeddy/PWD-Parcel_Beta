import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: 250,
    display: "flexWrap"
  },
  media: {
    height: 200,
    objectFit: "cover",
    display: "flex"
  },
});

export const ProductCard = (props) => {
  const classes = useStyles();
  return (
    <Card className={classes.root} style={{height: 350, width: 200}}>
      <CardActionArea>
        <CardMedia 
          className={classes.media}
          image={props.imagePath}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.productName}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Rp. {props.price.toLocaleString()}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to="/product-detail">
        <Button size="small" color="primary">
         Detail
        </Button>
        </Link>
      </CardActions>
      <Card>

      </Card>
    </Card>
  );
}