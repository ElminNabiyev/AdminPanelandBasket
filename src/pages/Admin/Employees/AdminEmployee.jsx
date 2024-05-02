import React, { useEffect, useState } from "react";
import "../CSS/AdminProducts.css";
import style from "../CSS/MainEmployee.module.css";

function AdminEmployee() {
  const [veri, setData] = useState([]);
  const [inp, setInp] = useState("")

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setData(data));
  },[]);
  function sortAz(category) {
    setData([...veri].sort((a,b) => (a[category] > b[category]) ? 1 : ((b[category] > a[category]) ? -1 : 0)))
  }
  function sortZa(category) {
    setData([...veri].sort((a,b) => (a[category] < b[category]) ? 1 : ((b[category] < a[category]) ? -1 : 0)))
  }
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
          <button onClick={()=>sortAz("title")} className={style.button}>A-Z</button>
          <button onClick={()=>sortZa("title")} className={style.button}>Z-A</button>
          <button onClick={()=>sortAz("price")} className={style.button}>Sort by price(increase)</button>
          <button onClick={()=>sortZa("price")} className={style.button}>Sort by price(decrease)</button>
        </div>
      </div>
    <table>
      <thead>
        <th>ID</th>
        <th>IMAGE</th>
        <th>NAME</th>
        <th>PRICE</th>
      </thead>
      {veri
        .filter((x) => x.title.toLowerCase().includes(inp.toLowerCase().trim()))
        .map((x) => (
          <tbody>
            <td>{x.id}</td>
            <td>
              <img className="admin" src={x.image} alt="" />
            </td>
            <td>{x.title}</td>
            <td>{x.price}$</td>
          </tbody>
        ))}
    </table>
        </>
  );
}

export default AdminEmployee;
