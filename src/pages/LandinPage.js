import React from 'react'
import Banner from '../components/Banner/Banner'
import CommentProfile from '../components/CommentProfile/CommentProfile'
import Header from '../components/Header/Header'
import MidBannerPart1 from '../components/MidBannerPart1/MidBannerPart1'
import Subscribe from '../components/Subscribe/Subscribe'
import img from '../assets/Group 134.png'
import Blog from '../components/Blog/Blog'
import './LandingPage.css'
import Footer from '../components/Footer/Footer'

function LandinPage() {
    return (
        <div className='landingPage'>
            <div className='landingPageTop'>
                <Header/>
                <Banner/>
            </div>
            <div className='landPagingMidSection'>
                <MidBannerPart1/>
            </div>
            <div className='commentZone'>
                <img className='sideImage' src={img} alt=''/>
                <CommentProfile/>
                <Subscribe/>
            </div>
            <div className='blogZone'>
                <Blog/>
            </div>
            <div className='footerZone'>
                <Footer/>
            </div>
        </div>
    )
}

export default LandinPage
