import React from "react";
import cart from "../../assets/shopping-bag.svg";
import { CardWrapper } from "./Cart.styled";
import { useSelector } from "react-redux";

function Cart() {
  const cartItems = useSelector((state) => state.products.cart);
  const totalQuantity = cartItems.reduce((total, item) => total + item.chosenAmount, 0);

  return (
    <CardWrapper>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        <div className="icon-cart">
          <img src={cart} alt="" />
          <div className="quantity">{totalQuantity}</div>
        </div>
      </button>
    </CardWrapper>
  );
}

export default Cart;
