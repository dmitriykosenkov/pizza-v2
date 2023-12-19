import React from 'react'
import { NavLink } from 'react-router-dom'
import emptyCart from '../../assets/img/empty-cart.png' 

const EmptyCart = () => {
  return (
   <div className="content">
   <div className="container container--cart">
     <div className="cart cart--empty">
       <h2>Кошик порожній </h2>
       <p>
         Скоріше за все, ви ще не замовляли піцу.<br />
         Для того, щоб замовити піцу, перейдіть на головну сторінку.
       </p>
       <img src={emptyCart} alt="Empty cart" />
       <NavLink to="/" className="button button--black">
         <span>Повернутись на головну</span>
       </NavLink>
     </div>
   </div>
 </div>
  )
}

export default EmptyCart