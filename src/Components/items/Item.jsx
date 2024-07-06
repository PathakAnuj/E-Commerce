import React from 'react'
import './Item.css'
<<<<<<< HEAD
=======
import { Link } from 'react-router-dom'
>>>>>>> bd38917 (making responsive to homepage)

const Item = (props) => {
  return (
    <div className='item'>
<<<<<<< HEAD
      <img src={props.image} alt="" />
=======
      <Link to={`/product/${props.id}`}><img src={props.image} alt="" height={'100%'}/></Link>
>>>>>>> bd38917 (making responsive to homepage)
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="item-price-new">
        Rs.{props.new_price}
        </div>
        <div className="item-price-old">
        Rs.{props.old_price}
        </div>
      </div>
    </div>
  )
}

export default Item