import React, { useState } from "react";
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

import { addDoc, collection, updateDoc, doc } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { Card , Input , Button , Box} from "@mui/joy";

const FormCheckout = ({ cart, getTotalPrice, setOrderId, clearCart }) => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    let total = getTotalPrice();
    let order = {
      buyer: userData,
      items: cart,
      total,
    };
    let orderCollection = collection(db, "orders");
    addDoc(orderCollection, order)
      .then((res) => {
        setOrderId(res.id);
        clearCart();
      })
      .catch((err) => console.log(err));

    cart.map((product) => {
      let refDoc = doc(db, "products", product.id);
      updateDoc(refDoc, { stock: product.stock - product.quantity });
      return product
    });
  };

  return (
    <div>
      <Card 
      variant="outlined"
      orientation="horizontal"
      alignItems="center"
      sx={{
        margin:90,
        marginTop:10,
        marginBottom:23.7,
        padding:10,
        width: 'auto',
        gap: 10,
        '&:hover': { boxShadow: 'lg', borderColor: 'neutral.outlinedHoverBorder' },
      }}>
        
      <form onSubmit={handleSubmit}>
        <Box mt={4}
        ml={29}
        justifyContent="space-between">

        
        
        <Input
          size="lg"
          color="primary"
          type="text"
          placeholder="Nombre"
          value={userData.name}
          onChange={(e) => setUserData({ ...userData, name: e.target.value })}
        />
        

        
        <Input
          size="lg"
          color="primary"
          type="text"
          placeholder="Email"
          value={userData.email}
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
        />

        
        <Input
          size="lg"
          color="primary"
          type="text"
          placeholder="Telefono"
          value={userData.phone}
          onChange={(e) => setUserData({ ...userData, phone: e.target.value })}
        />
        </Box>
        <Box 
        ml={40}
        mt={10}>

        <Button
        type="submit"
        variant="soft" 
        endDecorator={<KeyboardArrowRight />} color="success">
        Checkout
        </Button>
        </Box>
        
      </form>
      
      </Card>
    </div>
  );
};

export default FormCheckout;
