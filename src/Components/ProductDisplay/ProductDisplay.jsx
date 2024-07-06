import React from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import all_product from '../Assets/all_product'


const ProductDisplay = (props) => {
    const {product} = props;
  return (
    <div className='productdisplay'>
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src= {product.image} alt=""/>
          <img src= {product.image} alt=""/>
          <img src= {product.image} alt=""/>
          <img src= {product.image} alt=""/>
        </div>
        <div className="productdisplay-img">
            <img className='productdisplay-main-img' src= {all_product.image} alt="" />
        </div>
      </div>

      <div className="productdisplay-right">
         <h1>{product.name}</h1>
         <div className="productdisplay-right-star">
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_dull_icon} alt="" />
            <p>{122}</p>
         </div>
         <div className="productdisplay-right-price-old">${product.old_price}</div>
         <div className="productdisplay-right-price-new">${product.new_price}</div>
      </div>
     
    </div>
  )
}

export default ProductDisplay