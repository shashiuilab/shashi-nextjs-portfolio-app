import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

const about = props => {
    return (
        <section className="resume-section" id="about">
            <div className="resume-section-content">
                <div className="profile_pic_style"><img src={'../profile_pic.jpg'} alt={'Profile Pic'} /></div>
                <h2 className="mb-1">
                    Shashidhar Reddy
                </h2>
                <h3 className="mb-1">
                    Full Stack Developer
                </h3>
                <br />
                <div className="social-icons">
                <a className="social-icon" href="mailTo:shashidhar.loksan@gmail.com"><i className="fas fa-envelope"></i></a>
                <a className="social-icon" target="_blank" href="https://www.linkedin.com/in/shashidhar-lokasani-870bb35a/"><i className="fab fa-linkedin-in"></i></a>
                <a className="social-icon" target="_blank" href="https://github.com/shashiuilab?tab=repositories"><i className="fab fa-github"></i></a>
                </div>
                <br />
                <div className="subheading mb-2">
                    <a href="mailTo:shashidhar.loksan@gmail.com">shashidhar.loksan@gmail.com</a>
                </div>
                <p className="lead mb-5">
                JavaScript full stack developer focusing mainly with experience in developing Web/Mobile
applications and enjoys developing APIs. 10+ Years of Experience of working in different industries banking and financial services, Healthcare,
e-commerce, manufacturing etc.,. Experience in development of web applications with experience in all latest JavaScript frameworks.
As a self-motivated applications developer, always look forward to learning, practice and use best industry
practice and techniques to solve problems and Lead the teams towards achieving project goals.
                </p>
                {/* <div className="social-icons">
                <a className="social-icon" href="mailTo:shashidhar.loksan@gmail.com"><i className="fas fa-envelope"></i></a>
                <a className="social-icon" target="_blank" href="https://www.linkedin.com/in/shashidhar-lokasani-870bb35a/"><i className="fab fa-linkedin-in"></i></a>
                <a className="social-icon" target="_blank" href="https://github.com/shashiuilab?tab=repositories"><i className="fab fa-github"></i></a>
                </div> */}
            <Link to={'/experience'} as={'/experience'} href={'/experience'}>
                <a className="nav-link js-scroll-trigger next-page-link">View Experience</a>
            </Link>
            </div>
        </section>
    );
};

about.propTypes = {
    
};

export default about;