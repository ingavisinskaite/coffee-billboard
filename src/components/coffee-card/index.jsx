import React from "react";
import "./style.scss";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles({
  card: {
    minWidth: 275
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

const CoffeeCard = props => {
  const classes = useStyles();

  return (
    <Card className={`${classes.card} coffee-card`}>
      <CardMedia
        className={`${classes.media} coffee-img`}
        image={props.imgUrl}
        title={props.title}
      />
      <CardActions>
        <DeleteIcon className="delete" />
      </CardActions>
      <CardContent>
        <Typography className={classes.pos} color="textSecondary">
          {props.title}
        </Typography>
        <Typography variant="body2" component="p">
          {props.price}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CoffeeCard;
