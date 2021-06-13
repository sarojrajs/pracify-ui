import React from 'react'
import './Subscribe.css'
function Subscribe() {
    return (
        <div className='subscribe'>
            <div className='subscribeContainer'>
                <h1>Subscribe to Our Newsletter</h1>
                <div className='subscribePara'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className='subscribeForm'>
                    <input type='text' placeholder='Enter your email address'/>
                    <button>Subscribe</button>
                </div>
            </div>
        </div>
    )
}

export default Subscribe
