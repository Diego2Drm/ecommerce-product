import React from "react";
import style from "./Price.module.css"
import iconCart from "../../assets/Icons/icon-cart.svg"

function AddCart() {
  return (
    <>
      <button className={style.btnAdd} >
        <img src={iconCart} alt="cart" />
        <span>Add to cart</span>
      </button>
    </>
  );
}

export { AddCart };
