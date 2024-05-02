import React, { useContext, useEffect, useState } from "react";
import { MainContext } from "../../context/MainProvider";
import style from "../Main/CSS/Employee/MainEmployee.module.css";

function BasketPage() {
  const { basket, addBasket,setBasket } = useContext(MainContext);

function removeBasket(data) {
    setBasket(basket.filter(x=>x.id!==data.id))
}
  return (
    <>
      <div className={style.all_items}>
        {basket.map((x) => (
          <div key={x.id} className={style.card}>
            <img className={style.img} src={x.image} alt="" />
            <h2>{x.title}</h2>
            <p>{x.description}</p>
            <p>{x.price}$</p>
            <button onClick={() => removeBasket(x)}>Remove from basket</button>
          </div>
        ))}
      </div>
    </>
  );
}

export default BasketPage;
