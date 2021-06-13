import React from 'react'
import './Footer.css'
import img from '../../assets/Group 225.png'
import Icon from './Icon'
import { FaFacebookF,FaLinkedinIn,FaTwitter,FaInstagram } from "react-icons/fa";
function Footer() {
    return (
        <div className='footer'>
            <div className='footerLeft'>
                <img src={img} alt=''/>
                <div className='footerLeftPara'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
                </div>
                <span></span>
                <h4>© Copyright 2020 Nature</h4>
            </div>
            <div className='footerCenter'>
                <h3>Information</h3>
                <span></span>
                <div className='footerCenterColumns'>
                    <div className='column1'>
                        <p>About Us</p>
                        <p>Products</p>
                        <p>Contact Us</p>
                        <p>Terms of Service</p>
                    </div>
                    <div className='column2'>
                    <p>About Us</p>
                        <p>Products</p>
                    </div>
                </div>
            </div>
            <div className='footerRight'>
                <h3>Follow Us</h3>
                <span></span>
                <div className='footerRightSocialIcons'>
                    <Icon Img={<FaFacebookF className='socialIcon'/>}/>
                    <Icon Img={<FaLinkedinIn className='socialIcon'/>}/>
                    <Icon Img={<FaTwitter className='socialIcon'/>}/>
                    <Icon Img={<FaInstagram className='socialIcon'/>}/>
                </div>
            </div>
        </div>
    )
}

export default Footer
