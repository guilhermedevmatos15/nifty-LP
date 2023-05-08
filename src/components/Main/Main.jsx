import React from 'react';

// * Components
import NFT from '../NFT/NFT';

// * CSS
import './Main.css';

// * Images
import boredApeYachtLogo from '../../assets/img/NFT/boredApeYacht/BoredApeYachtClubLogo.png';
import boredApeYacht01 from '../../assets/img/NFT/boredApeYacht/BoredApeYacht02.jpg';
import boredApeYacht02 from '../../assets/img/NFT/boredApeYacht/BoredApeYachtClub03.jpg';

import AzukiLogo from '../../assets/img/NFT/azuki/azukiLogo.jpg';
import AzukiNft from '../../assets/img/NFT/azuki/azuki01.jpg';

import doodlesLogo from '../../assets/img/NFT/doodle/doodleLogo.jpg';
import doodles01 from '../../assets/img/NFT/doodle/doodle01.jpg';

import cloneXLogo from '../../assets/img/NFT/cloneX/cloneXLogo.jpg';
import cloneX01 from '../../assets/img/NFT/cloneX/cloneX01.jpg';
import cloneX02 from '../../assets/img/NFT/cloneX/cloneX02.jpg';

// import illustration from '../../assets/img/undraw_internet_on_the_go_re_vben.svg';

// * Icons
import { FaGooglePlay } from 'react-icons/fa';
import { AiFillApple } from 'react-icons/ai';

const Main = (props) => {
   const NFTs = [
      <NFT
         nftImage={boredApeYacht01}
         collectionImage={boredApeYachtLogo}
         collection="Bored Ape Yacht"
         priceInEth={51.2469}
      />,
      <NFT
         nftImage={AzukiNft}
         collectionImage={AzukiLogo}
         collection="Azuki"
         priceInEth={16.355}
      />,
      <NFT
         nftImage={boredApeYacht02}
         collectionImage={boredApeYachtLogo}
         collection="Bored Ape Yacht"
         priceInEth={51.2469}
      />,
      <NFT
         nftImage={doodles01}
         collectionImage={doodlesLogo}
         collection="Doodle"
         priceInEth={2.815}
      />,
      <NFT
         nftImage={cloneX01}
         collectionImage={cloneXLogo}
         collection="CloneX"
         priceInEth={3.31}
      />,
      <NFT
         nftImage={cloneX02}
         collectionImage={cloneXLogo}
         collection="CloneX"
         priceInEth={3.32}
      />,
   ];

   function renderRandomNft() {
      function getRandomIntInclusive(min = 0, max = 0) {
         min = Math.ceil(min);
         max = Math.floor(max);
         return Math.floor(Math.random() * (max - min + 1)) + min;
      }

      // raffle the nft generated
      const randomNumber = getRandomIntInclusive(0, NFTs.length - 1);

      return NFTs[randomNumber];
   }

   return (
      <main className="Main">
         <div className="content">
            <h1>
               Explore the <br /> boundless <br /> world of <span>NFT's</span>
            </h1>
            <div className="buttons-mobiles-apps">
               <div className="button-mobile-app google-play">
                  <FaGooglePlay className="icon google-play" />
                  <div>
                     <p>get in on</p>
                     <h3>Google Play</h3>
                  </div>
               </div>
               <div className="button-mobile-app apple-store">
                  <AiFillApple className="icon apple-store" />
                  <div>
                     <p>download on the</p>
                     <h3>Apple Store</h3>
                  </div>
               </div>
            </div>
         </div>
         <div className="image">
            {renderRandomNft()}

            {/* <img src={illustration} alt="illustration main" /> */}
         </div>
      </main>
   );
};

export default Main;
