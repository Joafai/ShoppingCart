import React, { useState } from "react";
import list from "../data";
import Cards from "./card";
import "../styles/productos.css";
// import ProductoDesc from "./productoDesc";

const Productos = ({ handleClick, query }) => {
  // const [display, setDisplay] = useState(true);

  return (
    <section>
      {list
        .filter((val) => {
          if (query === "") {
            return val;
          } else if (
            val.product_name.toLowerCase().includes(query.toLowerCase())
          ) {
            return val;
          }
        })
        .map((item) => {
          return (
            <div>
              {/* {display ? ( */}
              <Cards
                key={item.id}
                item={item}
                handleClick={handleClick}
                // setDisplay={setDisplay}
              />
              {/* ) : (
                <ProductoDesc key={item.id} setDisplay={setDisplay} />
              )} */}
            </div>
          );
        })}
    </section>
  );
};

export default Productos;
