import "./Navbar.css"
import CartWidget from "../CartWidget/CartWidget";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const Navbar = ()=>{
    return(
        <div className="container-navbar">
            <Logo />

            <ul className="container-list">

                <Link to="/" style={{color: "white",paddingLeft: 13, textDecoration: 'none'}}>Todos Los Productos</Link>
                <Link to="/category/procesadores" style={{color:"white",  paddingLeft: 13, textDecoration: 'none'}}>Procesadores</Link>
                <Link to="/category/motherboard" style={{color:"white", paddingLeft: 13, textDecoration: 'none'}}>Motherboard</Link>
                <Link to="/category/memorias-ram"style={{color:"white", paddingLeft: 13, textDecoration: 'none'}}>Memorias Ram</Link>
            </ul>

            <CartWidget />
        </div>
    );
};

export default Navbar;