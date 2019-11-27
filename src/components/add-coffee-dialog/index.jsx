import React from "react";
import "./style.scss";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import InputAdornment from "@material-ui/core/InputAdornment";
import Button from "@material-ui/core/Button";

const AddCoffeeDialog = props => {
  const inputProps = {
    step: 0.1
  };

  const [newCoffeeImg, setNewCoffeeImg] = React.useState("");
  const [newCoffeeTitle, setNewCoffeeTitle] = React.useState("");
  const [newCoffeePrice, setNewCoffeePrice] = React.useState(0);

  const newCoffee = {
    imgUrl: newCoffeeImg,
    title: newCoffeeTitle,
    price: newCoffeePrice
  }

  return (
    <Dialog
      open={props.isOpen}
      onClose={props.handleClose}
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
          onChange={e => setNewCoffeeImg(e.target.value)}
        />
        <TextField
          margin="dense"
          label="Title"
          type="text"
          fullWidth
          onChange={e => setNewCoffeeTitle(e.target.value)}
        />
        <TextField
          margin="dense"
          label="Price"
          type="number"
          InputProps={{
            endAdornment: <InputAdornment position="end">€</InputAdornment>
          }}
          inputProps={inputProps}
          fullWidth
          onChange={e => setNewCoffeePrice(Number(e.target.value))}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={props.handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={e => props.addNewCoffee(newCoffee)} color="primary">
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddCoffeeDialog;
