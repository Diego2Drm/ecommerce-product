import React from "react";
import style from "./Description.module.css"
import { Price } from "../Price/Price";

function Description() {
  return (
    <section className={style.container}>
      <span className={style.subtitle}>Sneaker Company</span>
      <h1 className={style.title}>Fall Limited Edition Sneakers</h1>
      <p className={style.info}>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      <Price />
    </section>
  );
}

export { Description };
