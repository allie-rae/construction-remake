import React from 'react';
import './contact.css';

const Contact = (props) => {
    return(
        <div ref={props.contactRef}>
            <h2 id="contact" className="gallery-header">Contact</h2>
            <div className="contact-section">
                <div className="white-wrapper-contact">
                    If you are interested in my services, please <a href="mailto:jonrobinson90@live.com">email me.</a>
                </div>
            </div>
        </div>
    )
}

export default Contact;