import React from "react";

const Cards = ({ item, handleClick }) => {
  const { product_name, user, price, image, description } = item;
  return (
    <div className="cards">
      <div className="image_box">
        <img src={image} alt="" />
        <div className="descripcionHolder">
          <p className="descripcion">{description}</p>
        </div>
      </div>
      <div className="details">
        <p>{product_name}</p>
        <p>{user}</p>
        <p>${price} </p>
        <button onClick={() => handleClick(item)}>Agregar al carrito</button>
      </div>
    </div>
  );
};

export default Cards;

// id, title, autor, price, img
