import React from 'react'
import './MidBannerPart1.css'
import img from '../../assets/Group 114.png'
import img1 from '../../assets/Group 205.png'
import img2 from '../../assets/Group 207.png'
import img3 from '../../assets/Group 64.png'
import Slider from 'infinite-react-carousel';
import img4 from '../../assets/Group 39.png'
import img5 from '../../assets/Group 55.png'
function MidBannerPart1() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true
      }
    return (
        <div className='midBannerPart1'>
            <div className='midBannerPart1Top'>
                <img src={img} alt=''/>
                <h2>Welcome to Nature</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className='midBannerImageCardRow'>
                <img src={img2} alt=''/>
                <img src={img1} alt=''/>
                <img src={img2} alt=''/>
                <img src={img2} alt=''/>
            </div>
            <div className='midBannerTop2'>
                <h2>Proudly presented by</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <Slider dots={true} slidesPer={1} autoplay={true} className='slider' arrows={false} slidesToShow={5} autoplayScroll={1} centerPadding={100} centerMode >
                <div>
                <img src={img4} alt=''/>
                </div>
                <div>
                <img src={img3} alt=''/>
                </div>
                <div>
                    <img src={img5} alt=''/>
                </div>
                <div>
                <img src={img3} alt=''/>
                </div>
                <div>
                <img src={img4} alt=''/>
                </div>
                <div>
                <img src={img3} alt=''/>
                </div>
            </Slider>
           
        
        </div>
    )
}

export default MidBannerPart1
