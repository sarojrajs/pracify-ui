import React from 'react'
import './BlogCard.css'
function BlogCard({img}) {
    return (
        <div className='blogCard'>
            <img src={img} alt=''/>
            <div className='blogCardContainer'>
                <h3>Blog Post 1</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod.</p>
                <p>Read More</p>
            <span></span>
            </div>
        </div>
    )
}

export default BlogCard 
