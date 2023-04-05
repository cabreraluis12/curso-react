import { useState } from "react";
import { Button } from "@mui/material";

import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Box , Chip} from "@mui/joy";

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

      <h2>Cantidad:</h2>
    <Box ml={20}
      mt={-6}>
      <Button 
        variant="contained" 
        size="lg"
        onClick={sumar}>
          +
        </Button>

      <Chip 
      size="lg"
      variant="outlined"
      sx={{fontSize:'30px'}}>
        {contador}
      </Chip>

      <Button 
      variant="contained" 
      size="lg"
      color="error"
      onClick={restar}
      
      >-</Button>

      </Box>

      <Box mt={3}>

      <Button 
      
      variant="contained" 
      size="large"
      color="success"
      onClick={ ()=> onAdd(contador) }
      
      >Agregar al carrito <ShoppingBasketIcon/>
        </Button>
      </Box>
    </div>
  );
};

export default ItemCount;
