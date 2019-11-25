import React from "react";
import "./style.scss";
import CoffeeCard from "../coffee-card";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import InputAdornment from "@material-ui/core/InputAdornment";

const Billboard = () => {
  const coffee = [
    {
      imgUrl: "./latte.jpg",
      title: "Latte",
      price: "2.00€"
    },
    {
      imgUrl: "./cappuccino.jpg",
      title: "Cappuccino",
      price: "2.20€"
    },
    {
      imgUrl: "./mocha.jpg",
      title: "Mocha",
      price: "2.50€"
    },
    {
      imgUrl: "./cold-brew.jpg",
      title: "Cold brew",
      price: "3.00€"
    }
  ];

  const inputProps = {
    step: 0.1
  };

  const ConfirmationDialog = () => {
    return (
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add new coffee</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please fill the fields to add new coffee
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label="Image Url"
            type="text"
            fullWidth
          />
          <TextField margin="dense" label="Title" type="text" fullWidth />
          <TextField
            margin="dense"
            label="Price"
            type="number"
            InputProps={{
              endAdornment: <InputAdornment position="end">€</InputAdornment>
            }}
            inputProps={inputProps}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    );
  };

  const initialCards = coffee.map((c, index) => {
    return (
      <CoffeeCard
        imgUrl={c.imgUrl}
        title={c.title}
        price={c.price}
        deleteCard={e => deleteCard(index)}
        key={index}
      />
    );
  });

  const [cards, setCards] = React.useState(initialCards);
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
        <ConfirmationDialog />
      </div>
      <div className="billboard">
        {cards}
        {cards}
      </div>
    </div>
  );
};

export default Billboard;
