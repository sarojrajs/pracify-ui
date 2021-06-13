import React from 'react'
import './CommentProfile.css'
import img1 from '../../assets/Group 86.png'
import img2 from '../../assets/woman-in-brown-jacket-and-black-shirt-3484683.png'
function CommentProfile() {
    return (
        <div className='commentProfile'>
            <img src={img1} alt=''/>
            <img className='profilePic' src={img2} alt=''/>
            <h1>Jane Done</h1>
            {/* <div className='profileStars'>
                <img src=''
            </div> */}
            <div className='comment'>
            <p>Thank you for all the amazing produce and products you deliver each week…
            you make my life so easy an bring goodness into our family eating.  I’ve been roasting a lot of brussel sprouts and</p>
            </div>
           
            <div className='dots'>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>

        </div>
    )
}

export default CommentProfile
