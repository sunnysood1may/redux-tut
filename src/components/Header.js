import React from "react";
function Header(props) {
  console.warn("Header",props.data);
  return (
    <div>
      <div className="add-to-cart">
        <span className="cart-count">{props.data.length}</span>
        <img src="https://img.icons8.com/?size=50&id=23175&format=png" />
      </div>
    </div>
  );
}

export default Header;
