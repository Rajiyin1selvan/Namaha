import React, { useContext } from 'react'
import './Display.css'
import { ShopContext } from '../../Context/ShopContext';
const Display = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext);
  return (
    <div className='display'>
        <div className="display-left">
            <div className="display-img-list">
                <img src={product.image} alt="" />
            </div>
            <div className="display-img">
            <img className='display-main-img' src={product.image} alt="" />
            </div>
        </div>
        <div className="display-right">
            <h1>{product.name}</h1>
            <div className="display-right-price-old">
                {product.old_price}
            </div>
            <div className="display-right-price-new">
                {product.new_price}
            </div>
            <div className="display-right-description">
                {product.description}
            </div>
            <div className="display-right-size">
                <h1>Select your Date</h1>
                <div className="display-right-size">
                    <input type="date" id="dateInput" ></input>
                </div>

            </div>
            <button onClick={()=>{addToCart(product.id)}}>Book</button>
        </div>
      
    </div>
  )
}

export default Display
