import React from 'react';

// * Components
import Logo from '../../components/Logo/Logo';

// * CSS
import './Footer.css';

// * Images

// * Icons

const Footer = (props) => {
   return (
      <footer>
         <Logo />
         <p>
            Discover the limitless possibilities of NFTs, <br />
            joing the NFT Comunity and collect unique <br />
            digital assets.
         </p>
         <p className="developer">
            Aplication made by:{' '}
            <a
               href="https://github.com/guilhermedevmatos15"
               target="_blank"
               rel="noreferrer"
            >
               &copy;Guilherme Ferreira
            </a>
         </p>
      </footer>
   );
};

export default Footer;
