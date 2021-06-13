import React from 'react'
import './Blog.css'
import img1 from '../../assets/Group 114.png'
import BlogCard from './BlogCard'
import img2 from '../../assets/eucalyptus-essential-oil-soap-green-background-zero-waste-natural-organic-bathroom-tools_80743-2766.png'
import img3 from '../../assets/containers-with-products-table-with-copy-space_23-2148366089.png'
import img4 from '../../assets/potted-plant-near-cosmetics-bottles-jars_23-2147787938.png'
function Blog() {
    return (
        <div className='blog'>
            <div className='blogHeader'>
                <img src={img1} alt=''/>
                <h1>Read Our Blog</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className='blogCardRows'>
                <BlogCard img={img2}/>
                <BlogCard img={img3}/>
                <BlogCard img={img4}/>
            </div>
        </div>
    )
}

export default Blog
