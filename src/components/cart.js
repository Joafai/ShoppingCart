import React, { useState, useEffect } from "react";
import "../styles/cart.css";

const Cart = ({ cart, setCart }) => {
  const [price, setPrecio] = useState(0);

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    handlePrice();
  };

  const handlePrice = () => {
    let tot = 0;
    cart.map((item) => (tot += item.price));
    setPrecio(tot);
  };

  useEffect(() => {
    handlePrice();
  });

  return (
    <article>
      {cart.length === 0 ? (
        <div className="mensajeCarro">
          <h3>El carrito se encuentra vacio</h3>
        </div>
      ) : (
        <></>
      )}

      {cart.map((item) => (
        <div className="cart_box" key={item.id}>
          <div className="cart_img">
            <img src={item.image} alt="" />
            <p className="tituloItem">{item.title}</p>
            <p className="profesora">{item.user}</p>
            <div>
              <button
                className="eliminar"
                onClick={() => handleRemove(item.id)}
              >
                Eliminar
              </button>
            </div>
            <span className="precio">${item.price}</span>
          </div>
        </div>
      ))}
      <div className="total">
        <span className="totalEnvio">Total</span>
        <span className="precioTotal">${price}</span>
        <button className="continuar">Continuar</button>
      </div>
    </article>
  );
};

export default Cart;
