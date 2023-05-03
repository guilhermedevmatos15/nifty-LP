import React from 'react';

// * Components
import Logo from '../Logo/Logo';
import Links from '../Links/Links';

// * CSS
import './Header.css';

// * Images

// * Icons


const Header = props => {
   return (
      <header className='Header'>
         <Logo width={150} />
         <Links directionLinks='row' />
      </header>
   );
}

export default Header;