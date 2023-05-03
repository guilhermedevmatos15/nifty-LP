import React from 'react';
import PropTypes from 'prop-types';

// * Components

// * CSS
import './Links.css';

// * Images

// * Icons


const Links = props => {

   const { directionLinks, idsForLinks } = props;

   return (
      <nav className='Links'>
         <ul className={ directionLinks === 'row' ? 'row' : 'column' } >
            <li><a href={`#${idsForLinks[0]}`}>Home</a></li>
            <li><a href={`#${idsForLinks[1]}`}>Download</a></li>
            <li><a href={`#${idsForLinks[2]}`}>NFT's</a></li>
            <li><a href={`#${idsForLinks[3]}`}>Rank</a></li>
            <li><a href={`#${idsForLinks[4]}`}>Newsletter</a></li>
            <li><a href={`#${idsForLinks[5]}`}>FAQ</a></li>
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