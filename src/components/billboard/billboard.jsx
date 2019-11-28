import React from "react";
import "./billboard.scss";
import CoffeeCard from "../coffee-card/coffee-card";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import { connect } from "react-redux";
import { postCoffee } from "../../redux/actions";
import AddCoffeeDialog from "../add-coffee-dialog/add-coffee-dialog";
import { useDispatch } from "react-redux";
import Tooltip from "@material-ui/core/Tooltip";
import Grid from "@material-ui/core/Grid";

const mapStateToProps = state => {
  const coffee = state.coffee;
  return { coffee };
};

const Billboard = props => {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const addNewCoffee = newCoffee => {
    dispatch(postCoffee(newCoffee));
    handleClose();
  };

  const deleteCard = index => {
    console.log("deleted");
  };

  return (
    <div className="billboard">
      <Grid container>
        {props.coffee.coffeeList.map((c, index) => {
          return (
            <Grid item md={3} sm={4} xs={6} key={index}>
              <CoffeeCard
                imgUrl={c.imgUrl}
                title={c.title}
                price={c.price}
                id={c.id}
                deleteCard={e => deleteCard(index)}
              />
            </Grid>
          );
        })}
      </Grid>
      <Tooltip title="Add new coffee" aria-label="add">
        <Fab
          color="primary"
          aria-label="add"
          className="add"
          onClick={handleClickOpen}
        >
          <AddIcon />
        </Fab>
      </Tooltip>
      <AddCoffeeDialog
        isOpen={open}
        handleClose={handleClose}
        addNewCoffee={addNewCoffee}
      />
    </div>
  );
};

export default connect(
  mapStateToProps,
  { postCoffee }
)(Billboard);
