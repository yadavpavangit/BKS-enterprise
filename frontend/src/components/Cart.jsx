import React from "react";
import { useSelector } from "react-redux";

function Cart() {
  const cartItem = useSelector((state) => state.card.products);
  console.log(cartItem);
  return <div></div>;
}

export default Cart;
