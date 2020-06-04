import React from 'react';
import './about.css';

const About = (props) => {
    return(
        <div ref={props.aboutRef} className="about-me-outer">
            <div className="about-img"></div>
            <div className="about-txt">
                <h2>Jon Robinson</h2>
                <h3>Based in Tacoma, WA</h3>
                I have years of experience updating, remodeling, and improving homes. I love helping people turn their dream home into reality.
                <a href="mailto:jonrobinson90@live.com"><h3>Contact</h3></a>
                </div>
        </div>
    )
}

export default About;