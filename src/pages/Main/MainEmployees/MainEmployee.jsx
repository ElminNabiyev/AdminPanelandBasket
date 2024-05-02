import React, { useContext, useEffect, useState } from "react";
import style from "../CSS/Employee/MainEmployee.module.css";
import { MainContext } from "../../../context/MainProvider";

function MainEmployee() {
  const { veri, inp, setInp, basket, addBasket, sortAz, sortZa } =
    useContext(MainContext);

  return (
    <>
      <div className={style.filter}>
        <input
          onChange={(e) => setInp(e.target.value)}
          className={style.input}
          type="text"
          placeholder="Search..."
        />
        <div>
          <button onClick={() => sortAz("title")} className={style.button}>
            A-Z
          </button>
          <button onClick={() => sortZa("title")} className={style.button}>
            Z-A
          </button>
          <button onClick={() => sortAz("price")} className={style.button}>
            Sort by price(increase)
          </button>
          <button onClick={() => sortZa("price")} className={style.button}>
            Sort by price(decrease)
          </button>
        </div>
      </div>
      <div className={style.all_items}>
        {veri
          .filter((x) =>
            x.title.toLowerCase().includes(inp.toLowerCase().trim())
          )
          .map((x) => (
            <div key={x.id} className={style.card}>
              <img className={style.img} src={x.image} alt="" />
              <h2>{x.title}</h2>
              <p>{x.description}</p>
              <p>{x.price}$</p>
              <button onClick={() => addBasket(x)}>Add to basket</button>
            </div>
          ))}
      </div>
    </>
  );
}

export default MainEmployee;
