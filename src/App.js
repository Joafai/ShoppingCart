import React, { useState } from "react";
import Productos from "./components/productos";
import Navbar from "./components/navbar";
import Cart from "./components/cart";
// import Searchbar from "./components/searchbar";
// import ProductosDesc from "./components/productosDesc";

const App = () => {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);
  const [query, setQuery] = useState("");

  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  };

  return (
    <div>
      <Navbar setShow={setShow} size={cart.length} setQuery={setQuery} />
      {show ? (
        <Productos handleClick={handleClick} query={query} />
      ) : (
        <Cart cart={cart} setCart={setCart} />
      )}
    </div>
  );
};

export default App;
