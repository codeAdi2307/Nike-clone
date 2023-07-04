import React from "react";
import "./products.css"

function Products(props) {
    return (
<div className="mainproducts">
 <div className="rightdata">
    <div className="details">
      <img src={props.img} alt="" />
      <p>{props.name}</p>
      <p>{props.price}</p>
      <button >Add To Cart</button>
    </div>
  </div>
</div>
    );
  }

export default Products