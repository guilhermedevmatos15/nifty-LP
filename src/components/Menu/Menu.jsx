import React from 'react';

// * Components
import Links from '../Links/Links';

// * CSS
import './Menu.css';

// * Images

// * Icons
import { HiOutlineXMark } from 'react-icons/hi2';

const Menu = (props) => {
   const { openMenu, setOpenMenu } = props;

   function closeMenu(e) {
      setOpenMenu(false);
   }

   return (
      <div className={`Menu ${openMenu ? '' : 'disable'}`}>
         <HiOutlineXMark
            className="iconX"
            onClick={(e) => {
               closeMenu(e);
            }}
         />
         <Links direction="column" closeMenu={closeMenu} />
      </div>
   );
};

export default Menu;
