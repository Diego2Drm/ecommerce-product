import React from "react";
import style from "./Price.module.css";
import iconCart from "../../assets/Icons/icon-cart.svg";

function AddCart({ addShoes, quantity}) {
  return (
    <>
      <button
        className={
          quantity == 0
            ? `${style.btnAdd} ${style.btnAddDisable}`
            : style.btnAdd
        }
        onClick={addShoes}
      >
        <img src={iconCart} alt="cart" />
        <span>Add to cart</span>
      </button>
    </>
  );
}

export { AddCart };
