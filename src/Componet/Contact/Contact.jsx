import React from 'react'
import './Contact.scss'

function Contact() {
  return (
    <div id='contact' className='contact-container'>
        <h1>Contact us</h1>
        <form action="">
            <input type="text" placeholder='Enter Your Name' required/>
            <input type="email" placeholder='Enter Your Email' required/>
            <textarea placeholder='Enter Your Message...'></textarea>
            <input type="submit" value="Send" />
        </form>
    </div>
  )
}

export default Contact