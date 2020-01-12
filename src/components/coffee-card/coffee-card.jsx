import React from "react";
import "./coffee-card.scss";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import DeleteIcon from "@material-ui/icons/Delete";
import DeleteCoffeeDialog from "../delete-coffee-dialog/delete-coffee-dialog";
import EditIcon from "@material-ui/icons/Edit";
import EditCoffeeDialog from "../edit-coffee-dialog/edit-coffee-dialog";
import { useDispatch } from "react-redux";
import { deleteCoffee, putCoffee } from "../../redux/actions";
import Tooltip from "@material-ui/core/Tooltip";
import LoadingSpinner from "../loading-spinner/loading-spinner";

const CoffeeCard = props => {
  const [openEdit, setOpenEdit] = React.useState(false);
  const [openDelete, setOpenDelete] = React.useState(false);
  const dispatch = useDispatch();

  const handleClickOpenEdit = () => {
    setOpenEdit(true);
  };

  const handleCloseEdit = () => {
    setOpenEdit(false);
  };

  const editCard = (coffee, id) => {
    dispatch(putCoffee(coffee, id));
    handleCloseEdit();
  };

  const handleClickOpenDelete = () => {
    setOpenDelete(true);
  };

  const handleCloseDelete = () => {
    setOpenDelete(false);
  };

  const deleteCard = id => {
    dispatch(deleteCoffee(id));
    handleCloseDelete();
  };

  const formatPrice = price => {
    let formattedPrice = `${price.toFixed(2)}€`;
    return formattedPrice;
  };

  const cardMedia = (
    <CardMedia
      className="coffee-img"
      image={props.url}
      title={props.title}
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.3)) url('${props.url}')`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    />
  );

  return (
    <div>
      {props.isLoading ? (
        <LoadingSpinner />
      ) : (
        <Card className="coffee-card">
          {cardMedia}
          <CardActions>
            <Tooltip title="Delete" aria-label="delete">
              <DeleteIcon
                className="icon delete"
                onClick={handleClickOpenDelete}
              />
            </Tooltip>
            <Tooltip title="Edit" aria-label="edit">
              <EditIcon className="icon edit" onClick={handleClickOpenEdit} />
            </Tooltip>
          </CardActions>
          <CardContent className="container">
            <DeleteCoffeeDialog
              isOpen={openDelete}
              handleClose={handleCloseDelete}
              coffeeTitle={props.title}
              coffeeId={props.id}
              deleteCard={deleteCard}
            />
            <EditCoffeeDialog
              isOpen={openEdit}
              handleClose={handleCloseEdit}
              coffeeTitle={props.title}
              coffeeImg={props.url}
              coffeePrice={props.price}
              editCard={editCard}
              coffeeId={props.id}
            />
            <Typography className="title" color="textSecondary">
              {props.title}
            </Typography>
            <Typography className="price" variant="body2" component="p">
              {formatPrice(props.price)}
            </Typography>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default CoffeeCard;
