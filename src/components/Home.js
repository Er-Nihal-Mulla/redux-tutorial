import React from "react";

function Homoe() {
  return (
    <div>
      <div className="add-to-cart">
        <img src="http://www.downloadclipart.net/medium/6598-shopping-cart-clip-art.png" />
      </div>
      <h1>Home Compenent</h1>
      <div className="cart-wrapper">
        <div className="img-wrapper item">
          <img src="https://www.pngfind.com/pngs/m/567-5672610_iphone-4s-16go-2-large-apple-iphone-4s.png" />
        </div>
        <div className="text-wrapper item">
          <span>I-Phone</span>
          <span>Price: $ 1000.00</span>
        </div>
        <div className="btn-wrapper item">
          <button>Add to cart</button>
        </div>
      </div>
    </div>
  );
}
export default Homoe;
