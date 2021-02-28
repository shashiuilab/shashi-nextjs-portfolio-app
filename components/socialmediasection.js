import React from 'react';
import PropTypes from 'prop-types';

const socailMediaSection = props => {
    const { iconimages } = props;
    console.log(iconimages, 142434)
    return (
        <div className="social-icons">
            {iconimages.map(svgicon => <a className="social-icon" href="#">{svgicon.svgLink}</a>)}
        </div>
    );
};

socailMediaSection.propTypes = {
    
};

export default socailMediaSection;