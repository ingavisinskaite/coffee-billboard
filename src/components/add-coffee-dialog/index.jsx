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
        <Button onClick={props.handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={props.handleClose} color="primary">
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddCoffeeDialog;
