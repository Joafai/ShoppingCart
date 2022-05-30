import React from "react";
import "../styles/productoDesc.css";

const ProductoDesc = ({ item, setDisplay }) => {
  const { titulo, profe, precio, img, descripcion } = item;
  return (
    <div className="cardsP">
      <div className="image_box">
        <img src={img} alt="" />
        <div className="descripcionHolder">
          <p className="descripcion">{descripcion}</p>
        </div>
      </div>
      <div className="details">
        <p onClick={() => setDisplay(true)}>{titulo}</p>
        <p>{profe}</p>
        <p>${precio} </p>
      </div>
    </div>
  );
};

export default ProductoDesc;
