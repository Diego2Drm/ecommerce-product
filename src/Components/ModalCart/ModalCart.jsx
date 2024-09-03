import React, { useContext } from "react";
import style from "./ModalCart.module.css";
import { ShoppingShoesContext } from "../Context/Context";
import iconDelete from "../../assets/Icons/icon-delete.svg";

function ModalCart({ openModal }) {
  const context = useContext(ShoppingShoesContext);

  const deleteProduct = () => {
    context.setShoesCount((context.shoesCount = 0));
  };

  if (context.shoesCount == 0) {
    return (
      <section className={openModal ? style.containerCart : style.close}>
        <h3 className={style.title}>Cart</h3>
        <span className={style.line}></span>
        <p className={style.cartEmpty}>Your cart is empty.</p>
      </section>
    );
  } else {
    return (
      <section className={openModal ? style.containerCart : style.close}>
        <h3 className={style.title}>Cart</h3>
        <span className={style.line}></span>
        <article className={style.article}>
          <img
            className={style.product}
            src="https://i.ibb.co/jbnsxFZ/image-product-1-thumbnail.jpg"
            alt=""
          />
          <div>
            <p>Fall Limited Edition Sneakers</p>
            <p>
              <span>$125.00 x</span>
              <span>{context.shoesCount}</span>
              <span>${context.shoesCount * 125}.00</span>
            </p>
          </div>
          <div className={style.delete}>
            <img
              className={style.iconDelete}
              src={iconDelete}
              alt="Delete"
              onClick={deleteProduct}
            />
          </div>
        </article>
        <button className={style.checkout}>Checkout</button>
      </section>
    );
  }
}

export { ModalCart };
