import React from 'react'
import "./Filters.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faStar} from '@fortawesome/free-solid-svg-icons'
import {faFilter} from '@fortawesome/free-solid-svg-icons'


const Filters = () => {
  return (
    <div>
      <div className="left">
       
       <div className="container1">  
         <h1> Mens's Shoes</h1>
         <select name="Sort by" id="Sort by">
         <option >Sort By</option>
           <option value="Popularity">Popularity</option>
           <option value="Price-Low to High">Price-Low to High</option>
           <option value="Price- High to Low">Price- High to Low</option>
           <option value="Newest First">Newest First</option>
         </select> 
       </div>
     
       <div className="container2">
        <h4 className="filter-icon">Filters<FontAwesomeIcon icon={faFilter} fade style={{color: "#000000",}} /></h4>
         <select className="Categories" name="Categories" id="Categories">
           <option>Categories</option>
           <option value="Icons">Icons</option>
           <option value="Shoes">Shoes</option> 
           <option value="Clothing">Clothing</option> 
           <option value="Kids">Kids</option> 
         </select>
         <div className="range">
           <span>Price</span> <br />100<input type="range" name="" id="" />20000
         </div>
         <div className="discount">
          <select className="discount" name="discount" id="">
           <option >Discount</option>
           <option value="30% or More">30% or More</option>
           <option value="40% or More">40% or More</option>
           <option value="50% or More">50% or More</option>
           <option value="60% or More">60% or More</option>
           <option value="70% or More">70% or More</option>
          </select>
         </div>
         <div className="rating">
             <div className="container2-checkbox">
             <span>Customer Rating</span> <br />
               <input type="checkbox" name=" 4 and above" id=""  />5<FontAwesomeIcon icon={faStar} style={{color: "#ff9500",}} />
               <br />
               <input type="checkbox" name=" 4 and above" id=""  />4<FontAwesomeIcon icon={faStar} style={{color: "#ff9500",}} /> and above
               <br />
               <input type="checkbox" name=" 3 and above" id=""  />3<FontAwesomeIcon icon={faStar} style={{color: "#ff9500",}} /> and above
             </div>   
         </div>
         <div className="size">
           <select name="" id="">
             <option value="">Size</option>
             <option value="S">S</option>
             <option value="M">M</option>
             <option value="L">L</option>
             <option value="XL">XL</option>
             <option value="XXL">XXL</option>
             <option value="XXXL">XXXL</option>
           </select>
         </div>
       </div>
      </div>
     
      
    </div>
  )
}

export default Filters
