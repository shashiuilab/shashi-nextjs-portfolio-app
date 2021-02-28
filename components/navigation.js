import React, { useState } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

const navigation = ({ linkItems }) => {
    const [toggleDropdownMenu, setToggleDropdownMenu] = useState(false);
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
                <a className="navbar-brand js-scroll-trigger" href="#page-top">
                    <span className="d-block d-lg-none">Shashidhar Reddy</span>
                    <span className="d-none d-lg-block"><img className="img-fluid img-profile rounded-circle mx-auto mb-2" src="http://localhost:3000/profile_pic.jpg" alt="" /></span>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={() => { setToggleDropdownMenu(!toggleDropdownMenu)}}><span className="navbar-toggler-icon"></span></button>
                <div className={toggleDropdownMenu ? "collapse navbar-collapse show" : "collapse navbar-collapse"}>
                    <ul className="navbar-nav">
                        { linkItems && 
                        linkItems.map(item => 
                            (<li className="nav-item" key={item._id}>
                                <Link to={item.link} as={item.link} href={item.link}>
                                    <a className="nav-link js-scroll-trigger">{item.name}</a>
                                </Link>
                            </li>)
                         )}
                    </ul>
                </div>
            </nav>
    );
};


navigation.propTypes = {
    linkItems: PropTypes.array.isRequired
};

export default navigation;