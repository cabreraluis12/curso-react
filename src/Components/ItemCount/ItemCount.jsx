import { useState } from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

const ItemCount = ({ stock, initial=1, onAdd }) => {
  const [contador, setContador] = useState(initial);

  const sumar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };

  return (
    <div>

      <h2>{contador}</h2>

      <Button 
        variant="contained" 
        size="large"
        onClick={sumar}>
          Agragar<AddIcon/>
        </Button>
      
      <Button 
      variant="contained" 
      size="large"
      color="error"
      onClick={restar}
      >Quitar<DeleteIcon/></Button>

      <Button 
      variant="contained" 
      size="large"
      color="success"
      onClick={ ()=> onAdd(contador) }
      >Agregar al carrito <ShoppingBasketIcon/>
        </Button>
    </div>
  );
};

export default ItemCount;
