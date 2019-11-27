import React from "react";
import "./billboard.scss";
import CoffeeCard from "../coffee-card/coffee-card";
import AddIcon from "@material-ui/icons/Add";
import Fab from '@material-ui/core/Fab';
import { connect } from "react-redux";
import { addCoffee } from "../../redux/actions";
import AddCoffeeDialog from "../add-coffee-dialog/add-coffee-dialog";
import { useDispatch } from 'react-redux';


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

  const addNewCoffee = (newCoffee) => {
    dispatch(addCoffee(newCoffee));
    handleClose();
  }

  const deleteCard = index => {
    console.log("deleted");
  };

  return (
    <div>
      <div className="billboard">
        {props.coffee.coffeeList.map((c, index) => {
          return (
            <CoffeeCard
              imgUrl={c.imgUrl}
              title={c.title}
              price={c.price}
              id={c.id}
              deleteCard={e => deleteCard(index)}
              key={index}
            />
          );
        })}
       <Fab
          color="primary"
          aria-label="add"
          className="add"
          onClick={handleClickOpen}
        >
          <AddIcon />
        </Fab>
        <AddCoffeeDialog isOpen={open} handleClose={handleClose} addNewCoffee={addNewCoffee}/>
      </div>
    </div>
  );
};

export default connect(
  mapStateToProps,
  { addCoffee }
)(Billboard);
