import React from 'react';
import PropTypes from 'prop-types';

// * Components

// * CSS
import './Logo.css';

// * Images
import logoImage from '../../assets/img/logos/nifty-high-resolution-logo-color-on-transparent-background.png';

// * Icons

const Logo = (props) => {
   const { width } = props;

   return (
      <>
         <img src={logoImage} alt="logo nefty" width={width} />
      </>
   );
};

Logo.prototype = {
   width: PropTypes.number.isRequired,
};

Logo.defaultProps = {
   width: 100,
};

export default Logo;
