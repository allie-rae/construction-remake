import React from 'react';
import './about.css';

const About = (props) => {
    return(
        <div ref={props.aboutRef} className="about-me-outer">
            <div className="about-img"></div>
            <div className="about-txt">
                <h2>Jon Robinson</h2>
                <h3>Based in Tacoma, WA</h3>
                Thanks for taking the time to check out our website! I love the Pacific Northwest and have spent my life developing roots here. Our work brings us in contact with all kinds of people and all kinds of interesting projects. At Jon the Builder, we love improving our neighbors’ lives by building with skill, precision, and integrity. Collectively, we have years of experience in the interior and exterior carpentry business and we pride ourselves on a job well done. If you have any questions about how we can help you, don’t hesitate to give us a call.
                <a href="mailto:jon@jonthebuilderllc.com"><button className="contact-btn">Contact</button></a>
                </div>
        </div>
    )
}

export default About;