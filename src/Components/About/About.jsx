import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import about_profile from '../../assets/myphoto1.jpg'

const About = () => {
  return (
    <div id="about" className='about'>
        <div className="about-title">
            <h1>About Me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={about_profile} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I am passionate about creating clean, efficient, and visually appealing web experiences. I enjoy solving complex problems through code and continuously learning new technologies to stay updated with the latest trends in web development. My goal is to build applications that not only function smoothly but also provide a seamless user experience.</p>
                    <p>I’m a dedicated Full Stack Web Developer with a strong focus on creating efficient, modern, and user-centered applications. I enjoy transforming ideas into functional, visually appealing products that enhance the user experience. I’m constantly exploring new frameworks and tools to improve performance and scalability while maintaining clean, maintainable code. My goal is to contribute to projects that combine creativity with technology to deliver real-world impact.</p>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>01+</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>05+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>3+</h1>
                <p>HAPPY CLIENTS</p>
            </div>
        </div>
    </div>
  )
}

export default About