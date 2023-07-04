import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import {faHeart} from '@fortawesome/free-solid-svg-icons'
import {faBasketShopping} from '@fortawesome/free-solid-svg-icons'
import './Navbar.css'
import Products from "../Main files/Products"

const Navbar = () => {
  return (
    <div>
  <div className='header'>
    <div className='nike-logo'>
      <img src="https://st3.depositphotos.com/1050070/13243/i/450/depositphotos_132435338-stock-photo-logo-of-the-brand-nike.jpg" alt="" />
    </div>

    <div className='search-bar'>
    <input type="search" name="" id="" placeholder='Just Do It' />
    <button className='search-button'>
    <FontAwesomeIcon className='search-icon' icon={faMagnifyingGlass} beat style={{color: "#1e2024",}} />
    </button>
    </div>
    

    <div className='products'>
    <select className='product-listing' name="New Featured" id="">
       <option value="New Arrivals">New Arrivals</option>
       <option value="Latest Shoes">Latest Shoes</option>
       <option value="Air Force 1">Air Force 1</option>
       <option value="Air Jordan 1">Air Jordan 1</option>
       <option value="Air Max">Air Max</option>
       <option value="Dunk">Dunk</option>
    </select>
    </div>

    <div className='categories'>
    <select name="" id="">
       <option value="Men">Men</option>
       <option value="Women">Women</option>
       <option value="Boys">Boys</option>
       <option value="Girls">Girls</option>
    </select>
    </div>
    
    <div className='wishlist'>
    <button>
    <FontAwesomeIcon icon={faHeart} /></button>
    
    </div>

    <div className='basket'>
    <button>
    <FontAwesomeIcon icon={faBasketShopping} />
    </button>
    
    </div>

  </div>

  <div className='video'>
    <a href="/"></a>
  </div>

  
</div>
  )
}

export default Navbar
