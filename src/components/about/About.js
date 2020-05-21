import React from 'react';
import './about.css';

const About = (props) => {
    return(
        <div ref={props.aboutRef} className="about-me-outer">
            <div className="about-img"></div>
            <div className="about-txt">
                <h2>Jon Robinson</h2>
                <h3>Tacoma, WA</h3>
                This is a bunch of about text. I haven't decided what I'm going to put here yet, but it will probably be short and sweet.
                <a href="mailto:jonrobinson90@live.com"><h3>Contact</h3></a>
                </div>
        </div>
    )
}

export default About;