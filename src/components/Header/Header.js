import React from 'react'
import './Header.css'
import img from '../../assets/Group 220.png'
function Header() {
    return (
        <div className='header'>
            <div className='headerLeft'>
                <img src={img} alt=''/>
                <h1>organic</h1>
            </div>
            <div className='headerRight'>
                <a className='active'>Home</a>
                <a>Products</a>
                <a>Blog</a>
                <a>About Us</a>
                <button>Contact</button>
            </div>
        </div>
    )
}

export default Header
