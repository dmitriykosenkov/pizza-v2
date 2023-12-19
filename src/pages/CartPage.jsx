import React from "react";
import { useSelector } from "react-redux";
import CartWithGoods from "../components/CartWithGoods/CartWithGoods";
import EmptyCart from "../components/EmptyCart/EmptyCart";

const CartPage = () => {
   const { numberOfItems } = useSelector((state) => state.cart);
   return (
      <>
         {numberOfItems !== 0 ? (
            <CartWithGoods />
         ) : (
            <EmptyCart />
         )}
      </>
   );
};

export default CartPage;
