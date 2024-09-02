import React from "react";
import style from "./ModalCart.module.css"

function ModalCart({openModal}){
    return(
        <section className={ openModal ? style.containerCart : style.close}>
            <h3 className={style.title}>Cart</h3>
            <span className={style.line}></span>
            <p className={style.cartEmpty}>
              Your cart is empty.
            </p>
        </section>
    );
};

export { ModalCart };