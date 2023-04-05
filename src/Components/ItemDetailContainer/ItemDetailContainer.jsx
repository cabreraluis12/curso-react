import { useParams } from "react-router-dom";
import styles from "./ItemDetailContainer.css";
import ItemCount from "../ItemCount/ItemCount";
import { useContext , useEffect, useState} from "react";
import { CartContext } from "../../context/CartContext";
import { getDoc, collection, doc } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { Card , AspectRatio , Typography , Chip , Box , Divider} from "@mui/joy";
import ItemDetail from "../ItemDetail/ItemDetail";




const ItemDetailContainer = () => {
  const { id } = useParams();

  const { agregarAlCarrito } = useContext( CartContext)

  const [productSelected , setProductSelected] = useState({});

  useEffect(() => {
    const itemCollection = collection(db, "products");
    const ref = doc(itemCollection, id);
    getDoc(ref).then((res) => {
      setProductSelected({
        ...res.data(),
        id: res.id,
      });
    });
  }, [id]);

  const onAdd = (cantidad)=>{

    let producto = {
    ...productSelected,
    cantidad: cantidad
    }
    agregarAlCarrito(producto)
  }

  return (
    <div>
    <ItemDetail productSelected={productSelected} onAdd={onAdd}/>
    </div>
  );
};

export default ItemDetailContainer;