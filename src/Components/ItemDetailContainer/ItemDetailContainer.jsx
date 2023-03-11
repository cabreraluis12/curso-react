import { useParams } from "react-router-dom";
import styles from "./ItemDetailContainer.css";
import { products } from "../../ProductsMock";
import ItemCount from "../ItemCount/ItemCount";
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

const ItemDetailContainer = () => {
  const { id } = useParams();

  const productSelected = products.find((element) => element.id === Number(id));

  const onAdd = (cantidad)=>{
    console.log(`se agrego al carrito ${cantidad} productos `)
  }

  return (
    <div className="detailsContainer">
    <Grid
  container
  direction="row"
  justifyContent="space-around"
  alignItems="center"
>
      <Grid item xs={6}>
      <img src={productSelected.img} alt="" />
      </Grid>
      <Grid className="detailsProduct" item xs={6}>
      <h1 className="titulo">{productSelected.titulo}</h1>
      <h4>{productSelected.descripcion}</h4>
      <h3>${productSelected.precio}</h3>
      <ItemCount stock={productSelected.stock} onAdd={onAdd} />
      </Grid>
      
    </Grid>
    </div>
  );
};

export default ItemDetailContainer;