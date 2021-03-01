import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

const interests = props => {
    return (
        <section className="resume-section" id="interests">
            <div className="resume-section-content">
                <h2 className="mb-5">Interests</h2>
                <p>Apart from being a Full Stack Developer, I practise photography. Watch Web series of all kinds(For photography). Write Blogs. Read novels/ books/ news papers. Listen Music.</p>
                <p>If interested in some not so great work with my lens, follow on <a className="social-icon" href="https://instagram.com/truelyshashiphotography/" target="_blank"><i className="fab fa-instagram"></i></a></p>
                <Link to={'/education'} as={'/education'} href={'/education'}>
                    <a className="nav-link js-scroll-trigger next-page-link">View Education</a>
                </Link>
                <Link to={'/about'} as={'/about'} href={'/about'}>
                    <a className="nav-link js-scroll-trigger next-page-link">View About</a>
                </Link>
            </div>
        </section>
    );
};

interests.propTypes = {
    
};

export default interests;