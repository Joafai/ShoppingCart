import React from "react";
import "../styles/navbar.css";
import { useState } from "react";
import Sbar from "../components/sbar";

// import list from "../data";

const Navbar = ({ setShow, size, setQuery }) => {
  const [tituloNav, setTituloNav] = useState("Productos");
  const [searchdisplay, setSearchdisplay] = useState(true);

  return (
    <nav>
      <div className="nav_box">
        <span
          className="tituloNav"
          onClick={() => {
            setShow(true);
            setSearchdisplay(true);
            setTituloNav("Productos");
            setQuery("");
          }}
        >
          {tituloNav}
        </span>

        {searchdisplay ? (
          <Sbar searchdisplay={searchdisplay} setQuery={setQuery} />
        ) : (
          <div></div>
        )}

        <div
          className="cart"
          onClick={() => {
            setShow(false);
            setSearchdisplay(false);
            setTituloNav("Volver");
          }}
        >
          <span className="cartlogo">
            <i class="bx bxs-cart-alt"></i>
          </span>
          <span className="cartnum">{size}</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
