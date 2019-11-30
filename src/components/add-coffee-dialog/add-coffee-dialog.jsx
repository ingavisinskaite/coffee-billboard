import React from "react";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import InputAdornment from "@material-ui/core/InputAdornment";
import Button from "@material-ui/core/Button";
import { inputValidation } from "../../services/input-validation";

const AddCoffeeDialog = props => {
  const inputProps = {
    min: 0.1,
    step: 0.1
  };

  const [newCoffeeImg, setNewCoffeeImg] = React.useState("");
  const [newCoffeeTitle, setNewCoffeeTitle] = React.useState("");
  const [newCoffeePrice, setNewCoffeePrice] = React.useState(0);
  const [isValid, setIsValid] = React.useState(false);

  const newCoffee = {
    imgUrl: newCoffeeImg,
    title: newCoffeeTitle,
    price: newCoffeePrice
  };

  const setCoffeeImg = url => {
    setNewCoffeeImg(url);
  };

  const setCoffeeTitle = title => {
    setNewCoffeeTitle(title);
  };

  const setCoffeePrice = price => {
    setNewCoffeePrice(price);
  };

  React.useEffect(() => {
    if (inputValidation([newCoffeeImg, newCoffeeTitle, newCoffeePrice])) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [newCoffeeImg, newCoffeeTitle, newCoffeePrice]);

  return (
    <Dialog
      open={props.isOpen}
      onClose={props.handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Add new coffee</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Please fill all the fields to add new coffee
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          label="Image Url"
          type="text"
          name="imgUrl"
          fullWidth
          onChange={e => setCoffeeImg(e.target.value)}
          required
        />
        <TextField
          margin="dense"
          label="Title"
          type="text"
          name="title"
          fullWidth
          onChange={e => setCoffeeTitle(e.target.value)}
          required
        />
        <TextField
          margin="dense"
          label="Price"
          type="number"
          name="price"
          InputProps={{
            endAdornment: <InputAdornment position="end">€</InputAdornment>
          }}
          inputProps={inputProps}
          fullWidth
          onChange={e => setCoffeePrice(Number(e.target.value))}
          required
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={props.handleClose} variant="contained" color="primary">
          Cancel
        </Button>
        <Button
          onClick={e => props.addNewCoffee(newCoffee)}
          variant="contained"
          color="primary"
          disabled={!isValid}
        >
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddCoffeeDialog;
