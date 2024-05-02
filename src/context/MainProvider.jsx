import React, { createContext, useEffect, useState } from "react";
export const MainContext = createContext();

function MainProvider({ children }) {
  const [basket, setBasket] = useState([]);
  const [veri, setData] = useState([]);
  const [inp, setInp] = useState("");

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

  function addBasket(data) {
    const element=basket.find(x=>x.id===data.id)
    !element?setBasket([...basket, data]):null;
  }
  return (
    <MainContext.Provider value={{ basket,setBasket, addBasket,veri,inp,setInp,sortAz,sortZa }}>
      {children}
    </MainContext.Provider>
  );
}

export default MainProvider;
