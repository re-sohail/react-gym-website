import React from 'react'
import './Offer.scss'

function Offer() {
  return (
    <div id='offer' className='offer-container'>
        <h1>A Big <span>offer</span> for this summer</h1>
        <p>on <span>Annual</span> Membership, starting from <span>$12.99</span> per Month</p>
        <button>Join now</button>
    </div>
  )
}

export default Offer