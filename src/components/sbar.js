import React from "react";
import "../styles/navbar.css";

const Sbar = ({ setQuery }) => {
  return (
    <div>
      {/* <button className="buttonlogo">
        <i id="searchlogo" class="bx bx-search-alt-2"></i>
      </button> */}
      <input
        className="searchBar"
        placeholder="Buscar"
        onChange={(event) => setQuery(event.target.value.toLowerCase())}
      />
    </div>
  );
};

export default Sbar;
