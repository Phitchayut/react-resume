import React from 'react'
import './Portfolio.css'


const Portfolio = ({img,link}) => {
    return (
        <div className='p'>
            <div className="p-brower">
                <div className="p-circle"></div>
                <div className="p-circle"></div>
                <div className="p-circle"></div>
            </div>
            <a href={link} target="_blank" rel="noreferror">
                <img src={img} className="p-img" />  
            </a>
        </div>
    )
}

export default Portfolio
