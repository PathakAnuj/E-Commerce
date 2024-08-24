import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
const Navbar = () => {

    const [menu,setMenu] = useState("shop");

  return (
    <div className='navbar'>
    <div className="nav-logo">
        <div class="hub">
            <span contenteditable="true">Shop</span>
            <span contenteditable="true">Hub</span>
        </div>
    </div>
        <ul className="nav-menu">
            <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration: 'none'}} to='/'>Shop</Link>  {menu==="shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("men")}}><Link style={{textDecoration: 'none'}} to='/mens'>Men</Link> {menu==="men"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("women")}}><Link style={{textDecoration: 'none'}} to='/women'>Women</Link>  {menu==="women"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("kid")}}><Link style={{textDecoration: 'none'}} to='/kid'>Kids</Link>  {menu==="kid"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("custom")}}><Link style={{textDecoration: 'none'}} to='/custom'>Custom Suite</Link>  {menu==="custom"?<hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
           <Link style={{textDecoration: 'none'}} to={'/login'}><button>Login</button></Link> 
            <Link style={{textDecoration: 'none'}} to={'/cart'}><img src={cart_icon} alt="" /></Link> 
            <div className="nav-cart-counter">0</div>
        </div>
    </div>
  )
}

export default Navbar