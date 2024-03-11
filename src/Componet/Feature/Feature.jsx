import React from 'react'
import './Feature.scss'
import data from '../../data.json'


function Feature() {
    return (
        <div id='feature' className='feature-container'>
            <h1>Features</h1>
            <div className="features">
                {
                    data.map((item, index) => {
                        return (
                            <div key={index} className="feature">
                                <img src={item.img} />
                                <h2>{item.title}</h2>
                                <p>{item.descreaption}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Feature