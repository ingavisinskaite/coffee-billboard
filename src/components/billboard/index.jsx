import React from "react";
import "./style.scss";
import CoffeeCard from "../coffee-card";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { addCoffee } from "../../redux/actions";
import AddCoffeeDialog from "../add-coffee-dialog";

const mapStateToProps = state => {
  const coffeeList = state.coffee;
  return { coffeeList };
};

const Billboard = props => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const deleteCard = index => {
    console.log("deleted");
  };

  return (
    <div>
      <div className="billboard">
        {props.coffeeList.map((c, index) => {
          return (
            <CoffeeCard
              imgUrl={c.imgUrl}
              title={c.title}
              price={c.price}
              deleteCard={e => deleteCard(index)}
              key={index}
            />
          );
        })}
      </div>
      <div>
        <Button
          variant="contained"
          color="primary"
          aria-label="add"
          size="small"
          className="add"
          onClick={handleClickOpen}
        >
          <AddIcon />
        </Button>
        <AddCoffeeDialog isOpen={open} handleClose={handleClose} />
      </div>
    </div>
  );
};

export default connect(
  mapStateToProps,
  { addCoffee }
)(Billboard);
