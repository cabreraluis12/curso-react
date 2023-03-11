import {FaShoppingCart} from "react-icons/fa"
import { Link } from "react-router-dom"
import styles from "./CartWidget.css"

const CartWidget = () => {
    return (
    <div className="carrito">
        <Link to="/cart">
        <FaShoppingCart color={"white"} size={30} title={"Carrito"}/>
        </Link>
    </div>
    )
}

export default CartWidget