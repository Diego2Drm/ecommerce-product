import React, { useContext, useState } from "react";
import style from "./Price.module.css";
import minus from "../../assets/Icons/icon-minus.svg";
import plus from "../../assets/Icons/icon-plus.svg";
import { AddCart } from "./AddCart";
import { ShoppingShoesContext } from "../Context/Context";

function Counter() {
  const [quantity, setQuantity] = useState(0);

  const context = useContext(ShoppingShoesContext)

  const minusQuantity = () => {
    if (quantity == 0) {
      setQuantity(0);
    } else {
      setQuantity(quantity - 1);
      // context.setShoesCount(context.shoesCount - 1)
    }
  };

  const plusQuantity = () => {
    setQuantity(quantity + 1);
    
  };

  const addShoes = () => {
    context.setShoesCount(context.shoesCount = quantity)
    setQuantity(0)
  }
  
  return (
    <>
      <div className={style.counter}>
        <img
          src={minus}
          alt="minus"
          onClick={minusQuantity}
          className={quantity == 0 ? style.minusAllowed : style.minus}
        />
        <p className={style.quantityProduct}>{quantity}</p>
        <img src={plus} alt="plus" onClick={plusQuantity} />
      </div>
      <div className={style.add}>
        <AddCart addShoes={addShoes} quantity={quantity}/>
      </div>
    </>
  );
}

export { Counter };
