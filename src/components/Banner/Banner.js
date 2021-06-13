import React from 'react'
import './Banner.css'
import logo from '../../assets/Group 228.png'
import flower from '../../assets/Group 195.png'
function Banner() {
    return (
        <div className='banner'>
            <div className='bannerLeft'>
                    <div className='bannerLeftPart1'>
                        <h2>Healthy life with</h2>
                        <h1>Nature Organic</h1>
                    </div>
                    <div className='bannerLeftPart2'>
                        <p>Vegetables are the edible parts of a plant that is used in cooking or can be eaten now.</p>
                    </div>
                    <div className='bannerLeftPart3'>
                        <button>Explore Now</button>
                    </div>
            </div>
            <div className='bannerRight'>
                <div className='bannerLogoContainer'>
                    <img className='bannerLogo' src={logo} alt=''/>
                </div>
                    <img className='bannerFlower' src={flower} alt=''/>
            </div>
        </div>
    )
}

export default Banner
