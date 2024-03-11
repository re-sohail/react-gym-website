import React from 'react'
import './About.scss'
import aboutImg from '../../Assets/about.png'

function About() {
    return (
        <div id='about' className='about-container'>
            <img src={aboutImg} />
            <div className="right-side">
                <h1>About us</h1>
                <p>Welcome to our fitness family! At FitGym, we're passionate about fostering a community where health meets happiness. Join us on this exciting journey to a stronger, fitter, and more vibrant you.</p>
                <button>Read More</button>
            </div>
        </div>
    )
}

export default About