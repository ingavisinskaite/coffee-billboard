import React from "react";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import InputAdornment from "@material-ui/core/InputAdornment";
import Button from "@material-ui/core/Button";
import { isCoffeeFormValid } from "../../services/coffee-form-validation";

const EditCoffeeDialog = props => {
  const inputProps = {
    step: 0.1
  };

  const [url, seturl] = React.useState(props.coffeeImg);
  const [title, setTitle] = React.useState(props.coffeeTitle);
  const [price, setPrice] = React.useState(props.coffeePrice);
  const [isValid, setIsValid] = React.useState(false);

  const editedCoffee = {
    url,
    title,
    price
  };

  React.useEffect(() => {
    if (isCoffeeFormValid([url, title, price])) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [url, title, price]);

  return (
    <Dialog
      open={props.isOpen}
      onClose={props.handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Edit coffee</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Image Url"
          type="text"
          fullWidth
          value={url}
          onChange={e => seturl(e.target.value)}
        />
        <TextField
          margin="dense"
          label="Title"
          type="text"
          fullWidth
          value={title}
          onChange={e => setTitle(e.target.value)}
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
          value={price}
          onChange={e => setPrice(Number(e.target.value))}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={props.handleClose} color="primary" variant="contained">
          Cancel
        </Button>
        <Button
          onClick={e => props.editCard(editedCoffee, props.coffeeId)}
          color="primary"
          variant="contained"
          disabled={!isValid}
        >
          Edit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditCoffeeDialog;
