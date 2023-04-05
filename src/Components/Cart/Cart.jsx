import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import Swal from "sweetalert2";

import { useState } from 'react';
import { Link } from 'react-router-dom';
import FormCheckout from '../FormCheckout/FormCheckout';
import "./Cart.css";
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import Table from '@mui/joy/Table';
import {Card , Box , Typography , Divider , Button } from '@mui/joy';
import ArrowForward from '@mui/icons-material/ArrowForward';




const Cart = () => {
  const { cart, clearCart, getTotalPrice, deleteProductById } =
    useContext(CartContext);

  const [showForm, setShowForm] = useState(false);
  const [orderId, setOrderId] = useState(null)

  const clear = () => {
    Swal.fire({
      title: "Seguro que quieres vaciar el carrito?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Si, vaciar",
      denyButtonText: `No, no vaciar`,
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
        Swal.fire("Carrito vaciado exitosamente", "", "success");
      } else if (result.isDenied) {
        Swal.fire("El carrito queda como estaba", "", "info");
      }
    });
  };

  if(orderId){
    return (
      <div>
        <Box>
      
      <Card
        
        variant="outlined"
        sx={{ margin: "60px",
          width: 1000, 
          maxWidth: '100%', 
          gap: 1.5 }}
      >
        <Typography sx={{fontSize:"4rem", color:"green"}}>
        Gracias por su compra
        </Typography>
        <Divider />
        <Box >
          <Typography level="h1">
            Comprobante Numero : {orderId}
          </Typography>
          <Link to="/">
          <Button
            size="sm"
            variant="soft"
            color="neutral"
            endDecorator={<ArrowForward />}
            
          >
            Volver a la Tienda
          </Button>
          </Link>
        </Box>
      </Card>
    </Box>
      </div>
    )
  }

  return (
    <div>
      {!showForm ? (
        <div className="cart-container">
          <div className="container-items">
            {cart.map((item) => {
              return (
                
                <div key={item.id} className="cart-item">
                  <Table aria-label="basic table">
            <thead>
            <tr>
              <th style={{ width: '40%' }}>Producto</th>
              <th>Unidad</th>
              <th>Precio</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{item.titulo}</td>
              <td>{item.cantidad}</td>
              <td>${item.precio}.-</td>
          
              </tr>
        
              </tbody>
              </Table>
                  
                    <Button
                      
                      variant="soft" color='danger'
                      onClick={() => deleteProductById(item.id)}
                    >
                      <DeleteForeverRoundedIcon/>
                    </Button>
                  
                </div>
              );
            })}
          </div>
          
          <Box mt={50}>
      
      <Card
        
        variant="outlined"
        sx={{ 

          width: 1000,
          maxWidth: '100%', 
          gap: 1.5,
          }}
      >
        <Typography sx={{fontSize:"2rem"}}>
          Precio Total : $ {getTotalPrice()}
        </Typography>
        <Divider />
        <Box >
          <Button variant="soft" onClick={()=>setShowForm(true)}  color="success">Checkout</Button>
                <Button onClick={clear}  variant="soft" color='danger' >
                  Vaciar carrito
                </Button>
        </Box>
      </Card>
    </Box>
            
        </div>
      ) : (
        <FormCheckout cart={cart} getTotalPrice={getTotalPrice} setOrderId={setOrderId} clearCart={clearCart} />
      )} 
    <div>
    
  );
    </div>
    </div>

  );
};

export default Cart