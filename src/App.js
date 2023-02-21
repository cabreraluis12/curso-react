import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";

import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";




function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer greeting={"Bienvenido a la Tienda de Hardware"}/>
      <Footer />
    </div>
  );
}

export default App;
