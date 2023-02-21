import React from "react";
import CartWidget from "./cartWidget";

//creo componente

class NavBar extends React.Component{
    render (){
        return <div className="container">
            <nav className="nav">
                <div className="nav__brand">
                    <a className="nav__link" href="#">Brodi Ropa de Fiesta</a>
                </div>
                <ul className="nav__list">
                <li> 
                    <a className="nav__link" href="#">Remeras Estampadas</a>
                </li>
                <li> 
                    <a className="nav__link" href="#">Bermudas</a>
                </li> 
                <li> 
                    <a className="nav__link" href="#">Carrito</a>
                    <CartWidget />
                </li>
                </ul>
            </nav>
        </div>;
    }
}
//exporto el componente
export default NavBar;