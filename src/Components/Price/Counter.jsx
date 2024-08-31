import React, { useState } from "react";
import style from "./Price.module.css";
import minus from "../../assets/Icons/icon-minus.svg";
import plus from "../../assets/Icons/icon-plus.svg";

function Counter() {
  const [quantity, setQuantity] = useState(0);

  const minusQuantity = () => {
    if(quantity == 0){
      setQuantity(0)
    } else{
      setQuantity(quantity - 1);
    }
  };
  
  const plusQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <>
      <img src={minus} alt="minus" 
      onClick={minusQuantity} 
      className={quantity == 0 ? style.minusAllowed : style.minus}
      />
      <p className={style.quantityProduct}>
        {quantity}
      </p>
      <img src={plus} alt="plus" 
      onClick={plusQuantity} />
    </>
  );
}

export { Counter };
