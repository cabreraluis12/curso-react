import "./Navbar.css"
import CartWidget from "../CartWidget/CartWidget";
import Logo from "../Logo/Logo";

const Navbar = ()=>{
    return(
        <div className="container-navbar">
            <Logo />

            <ul className="container-list">
                <li><a href="">Inicio</a></li>
                <li><a href="">Todos Los Productos</a></li>
                <li><a href="">Ofertas</a></li>
                <li><a href="">¿Quienes Somos?</a></li>
                <li><a href="">Contacto</a></li>
            </ul>

            <CartWidget />
        </div>
    );
};

export default Navbar;