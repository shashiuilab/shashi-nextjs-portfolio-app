import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

const skillDetails = props => {
    return (
        <section className="resume-section" id="skills">
                <div className="resume-section-content">
                    <h2 className="mb-5">Skills</h2>
                    <div className="subheading mb-3">Technical Skills</div>
                    <ul className="fa-ul mb-0">
                        <li>
                            <span className="fa-li"><i className="fas fa-check"></i></span>
                            HTML5, CSS3, JavaScript, ES6, ReactJS, React Native, Redux, NEXT JS, Webpack, AngularJS,
RequireJS, NodeJS, ExpressJS, Grunt, Jasmine, Bootstrap, JQuery, CSS (SASS & LESS), AJAX, JSP, MySQL,
PostGreSql, XML, C#, ASP.net.
                        </li>
                        <li>
                            <span className="fa-li"><i className="fas fa-check"></i></span>
                            MongoDB, MySQL, PostgreSQL, SQL Server, MS Access, Oracle
                        </li>
                        <li>
                            <span className="fa-li"><i className="fas fa-check"></i></span>
                            Bitbucket, GitLab, GitHub, CVS, SVN
                        </li>
                        <li>
                            <span className="fa-li"><i className="fas fa-check"></i></span>
                            Jest, Enzyme, React Testing Library, Mocha, Chai, Cypress, Nightwatch.JS
                        </li>
                    </ul>
                    <br />
                    <div className="subheading mb-3">Key Skills</div>
                    <ul>
                        <li>Experience of working through multiple life cycles of web portal/app development beginning from
                        conceptualization/storyboard to deployment on live environment</li>
                        <li>Experience of working in Agile environment and with large teams in multiple locations</li>
                        <li>Excellent knowledge of design patterns like structural and behavioural patterns</li>
                        <li>Experience in working with Next js framework</li>
                        <li>Experience of above 4 years working with React JS with Redux, Webpack</li>
                        <li>Experience of above 2 years working with AngularJS & VueJS</li>
                        <li>Excellent knowledge of MV* frameworks with experience in Knockout Js and Backbone Js</li>
                        <li>Experience of 4 years working with NodeJS and Express JS for building apis and react server-side rendering</li>
                        <li>Experience of building SPA with MEAN stack technologies using routing and generating Rest API using Node</li>
                        <li>Excellent command over front-end skills, HTML5, CSS3 (LESS/SASS), JavaScript, Bootstrap and other css styling libraries.</li>
                        <li>Experience of working with Atom, Sublime, Intellij/ Webstorm and Eclipse IDE</li>
                        <li>Accustomed to pressure of tight deadlines</li>
                        <li>Building Customer relationships by ensuring on time delivery and open communication</li>
                        <li>Building consensus across cross functional groups and various stakeholders</li>
                        <li>Conducting trainings, status meetings and customer reviews</li>
                        <li>Excellent problem solving and organization skills</li>
                        <li>Enjoy working in groups and helping others</li>
                    </ul>

                    <ul className="list-inline dev-icons">
                        <li className="list-inline-item" title="HTML5"><i className="fab fa-html5"></i></li>
                        <li className="list-inline-item" title="CSS3"><i className="fab fa-css3-alt"></i></li>
                        <li className="list-inline-item" title="ES6/Javascript"><i className="fab fa-js-square"></i></li>
                        <li className="list-inline-item" title="Node JS"><i className="fab fa-node-js"></i></li>
                        <li className="list-inline-item" title="React JS"><i className="fab fa-react"></i></li>
                        <li className="list-inline-item" title="">Redux</li>
                        <li className="list-inline-item" title="Vue JS"><i className="fab fa-vuejs"></i></li>
                        <li className="list-inline-item" title="Angular JS"><i className="fab fa-angular"></i></li>
                        <li className="list-inline-item" title="SASS"><i className="fab fa-sass"></i></li>
                        <li className="list-inline-item" title="LESS"><i className="fab fa-less"></i></li>
                        <li className="list-inline-item" title="GULP"><i className="fab fa-gulp"></i></li>
                        <li className="list-inline-item" title="GRUNT"><i className="fab fa-grunt"></i></li>
                        <li className="list-inline-item" title="NPM"><i className="fab fa-npm"></i></li>
                        <li className="list-inline-item" title="MONGO DB/ MySQL"><i className="fas fa-database"></i></li>
                        <li className="list-inline-item">etc.,.</li>
                    </ul>
                    <ul className="fa-ul mb-0">
                        <li>
                            <span className="fa-li"><i className="fas fa-check"></i></span>
                            Excellent Comminication Skills
                        </li>
                        <li>
                            <span className="fa-li"><i className="fas fa-check"></i></span>
                            Experience in working as an individual player and as a Team lead/ member.
                        </li>
                        <li>
                            <span className="fa-li"><i className="fas fa-check"></i></span>
                            Understanding of Agile Methodologies and ways of working.
                        </li>
                        <li>
                            <span className="fa-li"><i className="fas fa-check"></i></span>
                            Contributions to the Architectural designs and desicion making.
                        </li>
                    </ul>
                    <Link to={'/experience'} as={'/experience'} href={'/experience'}>
                        <a className="nav-link js-scroll-trigger next-page-link">View Experience</a>
                    </Link>
                    <Link to={'/education'} as={'/education'} href={'/education'}>
                        <a className="nav-link js-scroll-trigger next-page-link">View Education</a>
                    </Link>
                </div>
            </section>
    );
};

skillDetails.propTypes = {
    
};

export default skillDetails;