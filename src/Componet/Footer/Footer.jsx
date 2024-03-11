import React from 'react'
import "./Footer.scss"
import logo from '../../Assets/logo.png'

function Footer() {
    return (
        <div id='Footer' className='footer-container'>
            <div className="left-part">
                <img src={logo} />
                <p>At FitGym, we're passionate about fostering a community where health meets happiness. Join us on this exciting journey to a stronger, fitter, and more vibrant you.</p>
            </div>
            <div className="center-part">
                <h1>Feature</h1>
                <div className="feature-list">
                    {
                        ['Weight Lifting', 'Specific Muscle', 'Flex Your Muscle', 'Cardio Exercise'].map((feature, index) => {
                            return (
                                <ul key={index}>
                                    <li>{feature}</li>
                                </ul>
                            )
                        })
                    }

                </div>
            </div>
            <div className="right-part">
                <h1>Contact us</h1>
                <div className="contact-info">
                    {
                        ['+923116379423', 'business.yasrabtv@gmail.com'].map((contact, index)=>{
                            return(
                                <p key={index}>{contact}</p>
                            )
                        })
                    }
                    
                </div>
            </div>
        </div>
    )
}

export default Footer