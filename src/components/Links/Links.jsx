import React from 'react';
import PropTypes from 'prop-types';

// * Components

// * CSS
import './Links.css';

// * Images

// * Icons

const Links = props => {
   const { direction, closeMenu } = props;

   return (
      <nav className='Links'>
         <ul className={ direction === 'row' ? 'row' : 'column' } >
            {direction === 'row' ? (<><li><a href={`#section-main`}>Home</a></li>
            <li><a href={`#section-artwork`} >NFT's</a></li>
            <li><a href={`#section-rank`} >Rank</a></li>
            <li><a href={`#section-newsletter`} >Newsletter</a></li>
            <li><a href={`#section-faq`} >FAQ</a></li></>) : ''}

            {direction === 'column' ? (<><li><a href={`#section-main`} onClick={e => {closeMenu(e)}}>Home</a></li>
            <li><a href={`#section-artwork`} onClick={e => {closeMenu(e)}} >NFT's</a></li>
            <li><a href={`#section-rank`} onClick={e => {closeMenu(e)}} >Rank</a></li>
            <li><a href={`#section-newsletter`} onClick={e => {closeMenu(e)}} >Newsletter</a></li>
            <li><a href={`#section-faq`} onClick={e => {closeMenu(e)}} >FAQ</a></li></>) : ''}
         </ul>
      </nav>
   );
}

Links.prototype = {
   direction: PropTypes.string.isRequired,
}

Links.defaultProps = {
   direction: 'row',
}

export default Links;