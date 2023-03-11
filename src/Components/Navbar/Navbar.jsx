import "./Navbar.css"
import CartWidget from "../CartWidget/CartWidget";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";

const Navbar = ()=>{
    return(
        <div className="container-navbar">
            <Logo />

            <ul className="container-list">
                <Link to="/">Todos Los Productos</Link>
                <Link to="/category/procesadores">Procesadores</Link>
                <Link to="/category/motherboard">Motherboard</Link>
                <Link to="/category/memorias-ram">Memorias Ram</Link>
            </ul>

            <CartWidget />
        </div>
    );
};

export default Navbar;