
import { BrowserRouter , Routes , Route } from "react-router-dom";
import Cart from "./Components/Cart/Cart";
import Contacto from "./Components/Conctacto/Contacto";
import Footer from "./Components/Footer/Footer";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import Navbar from "./Components/Navbar/Navbar";
import CartContexProvider from "./context/CartContext";





function App() {
  return (
    

    <BrowserRouter>
        <CartContexProvider>
      <Navbar/>

      <Routes>
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="/cart" element={ <Cart/> }/>
        <Route path="/contacto" element={ <Contacto/> } />
        <Route path="/itemDetail/:id" element={ <ItemDetailContainer/> }/>
        <Route path="/category/:categoryName" element={<ItemListContainer/>}/>
        
      </Routes>
        </CartContexProvider>
      <Footer/> 
    </BrowserRouter>
    
  );
}

export default App;
