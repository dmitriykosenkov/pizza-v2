import React from "react";
import { NavLink } from "react-router-dom";
import pizzaLogo from "../../assets/img/pizza-logo.svg";
import CartButton from "../Button/CartButton";
import Search from "../Search/Search";

const Header = React.memo(() => {
   
   console.log('header rendered');
   return (
      <div className="header">
         <div className="container">
            <NavLink to="/" className="header__logo">
               <img width="38" src={pizzaLogo} alt="Pizza logo" />
               <div>
                  <h1>React Pizza</h1>
                  <p>найсмачніша піца у всесвіті</p>
               </div>
            </NavLink>
            <Search />
            <div className="header__cart">
               <NavLink to="/cart">
                  <CartButton />
               </NavLink>
            </div>
         </div>
      </div>
   );
});

export default Header;
