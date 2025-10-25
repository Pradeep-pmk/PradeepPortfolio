import React from 'react'
import './Service.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import Services_Data from '../../assets/services_data'

const Service = () => {
  return (
    <div id="services" className='services'>
        <div className="services-title">
            <h1>Skills</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="services-container">
            {Services_Data.map((service,index)=>{
                return  <img key={index} src={service.skill_img} alt="" />
            })}
        </div>
    </div>
  )
}

export default Service