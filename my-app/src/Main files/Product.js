import React from "react";
import "../Main files/Product.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'
import {faHeart} from '@fortawesome/free-solid-svg-icons'
import {faScaleBalanced} from '@fortawesome/free-solid-svg-icons'
function Product(){
  const Images=["https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-45a98dff-ee55-4c43-be36-6e128a417bdd/killshot-2-leather-shoe-DqWZ4j.png",
  "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0869a27a-c36b-497e-9c16-c50db2d1e1a3/air-max-97-shoes-EBZrb8.png"]
 

  const[orignalImg,changeImg]= React.useState(0)
  const[quantity,setQuantity]= React.useState(1)

  return (
    <div className="product">
    <div className='left'>
      <div className='notmain'>
       <img src= {Images[0]} alt="" onClick={e=>changeImg(0)} />
       <img src={Images[1]} alt="" onClick={e=>changeImg(1)} />
      </div>

      <div className='main'>
        <img src={Images[orignalImg]} alt="" />
      </div>
    </div>
    <div className="right">
      <h1>Nike Air Max</h1>
      <span>$200</span>
      <p>Nothing as fly, nothing as comfortable, nothing as proven.The Nike Air Max 90 stays true to its OG running roots with the iconic Waffle sole, stitched overlays and classic TPU details.Classic colours celebrate your fresh look while Max Air cushioning adds comfort to the journey.</p>

  <div className="basket">
    <div className="quantity">
      <button onClick={()=>setQuantity(quantity+1)}>+</button>
      {quantity}
      <button onClick={()=>setQuantity((quantity === 1 ? 1 : quantity-1 ))}>-</button>
    </div>
    <button className="addtocart">
     <FontAwesomeIcon icon={faCartShopping} />Add to Cart
    </button>
   <div className="extra">
    <button className="wishlist">
     <FontAwesomeIcon icon={faHeart} /> Add to Wishlist
    </button>
    <button className="balance">
     <FontAwesomeIcon icon={faScaleBalanced} /> Add to compare
    </button>
   </div>
  </div> 
    
 </div>
</div>
    );
  }
  export default Product  