import React from "react";
import style from "./Price.module.css";
import { Counter } from "./Counter";
import { AddCart } from "./AddCart";

function Price() {
  return (
    <section className={style.container}>
      <div className={style.price}>
        <p className={style.priceDiscount}>
          $125.00
          <span className={style.discount}>50%</span>
        </p>

        <p className={style.priceOriginal}>$250</p>
      </div>
      <div className={style.counter}>
        <Counter />
      </div>
      <div className={style.add} >
        <AddCart />
      </div>
    </section>
  );
}

export { Price };
