import React from 'react';
import PropTypes from 'prop-types';

// * Components

// * CSS
import './Links.css';

// * Images

// * Icons


const Links = props => {

   const { directionLinks } = props;

   return (
      <nav className='Links'>
         <ul className={ directionLinks === 'row' ? 'row' : 'column' } >
            <li><a href={`#section-main`}>Home</a></li>
            <li><a href={`#section-artwork`}>NFT's</a></li>
            <li><a href={`#section-rank`}>Rank</a></li>
            <li><a href={`#section-newsletter`}>Newsletter</a></li>
            <li><a href={`#section-faq`}>FAQ</a></li>
         </ul>
      </nav>
   );
}

Links.prototype = {
   directionLinks: PropTypes.string.isRequired,
}

Links.defaultProps = {
   directionLinks: 'row',
}

export default Links;