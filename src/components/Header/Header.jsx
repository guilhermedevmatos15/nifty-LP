import React, { useState } from 'react';

// * Components
import Logo from '../Logo/Logo';
import Links from '../Links/Links';

// * CSS
import './Header.css';

// * Images

// * Icons
import { BiMenu } from 'react-icons/bi';

const Header = (props) => {
   const { handleClickIconBar } = props;

   return (
      <header className="Header">
         <Logo width={150} />
         <Links direction='row' />
         <BiMenu
            className="iconBar"
            onClick={(e) => {
               handleClickIconBar(e);
            }}
         />
      </header>
   );
};

export default Header;
