import {FaShoppingCart} from "react-icons/fa"
import { Link } from "react-router-dom"
import "./CartWidget.css";

import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {

    const { cart, getTotalQuantity } = useContext(CartContext)

    const total = getTotalQuantity()


    return (
    <div className="carrito">
        <Link to="/cart">
        <FaShoppingCart color={"white"} size={30} title={"Carrito"}/>
        <div className="bubble-counter">
            <span>{total}</span>
        </div>
        </Link>
    </div>
    )
}

export default CartWidget