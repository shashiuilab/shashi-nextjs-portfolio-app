import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

const educationDetails = props => {
    return (
        <section className="resume-section" id="education">
                <div className="resume-section-content">
                    <h2 className="mb-5">Education</h2>
                    <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">Bachelor of Technology(B-tech)</h3>
                            <div className="subheading mb-3">Jawaharlal Nehru Technological University, Hyderabad, India</div>
                            <p>Aggregate: 76%</p>
                        </div>
                        <div className="flex-shrink-0"><span className="text-primary">May 2006 - July 2010</span></div>
                    </div>
                    <Link to={'/skills'} as={'/skills'} href={'/skills'}>
                        <a className="nav-link js-scroll-trigger next-page-link">View Skills</a>
                    </Link>
                    <Link to={'/interests'} as={'/interests'} href={'/interests'}>
                        <a className="nav-link js-scroll-trigger next-page-link">View Interests</a>
                    </Link>
                </div>
            </section>
    );
};

educationDetails.propTypes = {
    
};

export default educationDetails;