import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

const experienceDetails = props => {
    return (
        <section className="resume-section" id="experience">
                <div className="resume-section-content">
                    <h2 className="mb-5">Experience</h2>
                    <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">Senior Javascript Full stack Developer</h3>
                            <h4>Client: Boots Pharmacy</h4>
                            <div className="subheading mb-3">Employer: Cognizant Worldwide</div>
                            Working closely with Solution architects, Business analysts, Scrum masters to ensure delivery
● Leading a front-end team at offshore ensuring timely delivery and explaining requirements
● BDD building test cases using Jest with minimum threshold test coverage of 80%
● Building of highly reactive and dynamic SPAs using edge JavaScript technologies such as ReactJS, Redux, NodeJS,
ExpressJS, and MongoDB.
● Building apps using HTML5, CSS3, Bootstrap, SASS, Webpack, Jade, jQuery, JavaScript and almost all the ES6
features.
● Performing bug fixes and code reviews.
● Developing of Reusable components that are fast and responsive.
● Providing technology recommendations to clients and other core teams in picking the right JS framework or
library.
● Designing UI workflows for various clients.
● Making a development strategy to kick off the development.
● Building RFPs to gain new clients.
                        </div>
                        <div className="flex-shrink-0"><span className="text-primary">June 2019 – Present</span></div>
                    </div>
                    <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">JavaScript Full stack Developer</h3>
                            <h4>Client: Barclays Plc</h4>
                            <div className="subheading mb-3">Employer: Cognizant Worldwide</div>
                            Working closely with Solution designer, Team Lead, Offshore delivery manager for building react applications
● Leading a front-end team at offshore ensuring timely delivery and explaining requirements
● BDD building test cases using Jest, enzyme
● Building of highly reactive and dynamic SPAs using edge JavaScript technologies such as ReactJS, Redux, NodeJS,
ExpressJS
● Building apps using HTML5, CSS3, Bootstrap, SASS, Webpack, Jade, jQuery, JavaScript and almost all the ES6
features.
● Performing bug fixes and code reviews.
● Providing technology recommendations to clients and other core teams in picking the right JS framework or
library.
                        </div>
                        <div className="flex-shrink-0"><span className="text-primary">December 2015 - June 2019</span></div>
                    </div>
                    <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">Front end Web Developer</h3>
                            <h4>Client: AMEX</h4>
                            <div className="subheading mb-3">Employer: Cognizant Worldwide</div>
                        
                        Working closely with Solution designer, Team Lead, Offshore delivery manager for building react applications
● Leading a front-end team at offshore ensuring timely delivery and explaining requirements
● BDD building test cases using Jest, enzyme
● Building of highly reactive and dynamic SPAs using edge JavaScript technologies such as jQuery, Angular 1.x,
Vanilla JavaScript
● Building apps using HTML5, CSS3, Bootstrap, SASS, Webpack, Jade, jQuery, JavaScript
● Performing bug fixes and code reviews.
● Providing technology recommendations to clients and other core teams in picking the right JS framework or
library.
</div>
                        <div className="flex-shrink-0"><span className="text-primary">June 2012 - December 2015</span></div>
                    </div>
                    <div className="d-flex flex-column flex-md-row justify-content-between">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">Front End Developer</h3>
                            <h4>Client: MERCK</h4>
                            <div className="subheading mb-3">Employer: HCL Technologies</div>
                            Development of web applications using HTML5, CSS3, JavaScript, jQuery, Bootstrap and Adobe Photoshop.
● Debugging of various applications and providing fixes for defects raised by the testing team.
● Updating the defect status on QC
                        </div>
                        <div className="flex-shrink-0"><span className="text-primary">September 2010 - May 2012</span></div>
                    </div>
                <Link to={'/about'} as={'/about'} href={'/about'}>
                    <a className="nav-link js-scroll-trigger next-page-link">View About</a>
                </Link>
                <Link to={'/skills'} as={'/skills'} href={'/skills'}>
                    <a className="nav-link js-scroll-trigger next-page-link">View Skills</a>
                </Link>
                </div>
            </section>
    );
};


experienceDetails.propTypes = {
    
};

export default experienceDetails;