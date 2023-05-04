import React from 'react';

// * Components
import NFT from '../NFT/NFT';

// * CSS
import './Main.css';

// * Images
import BoredLogo from '../../assets/img/NFT/boredApeYacht/BoredApeYachtClubLogo.png';
import AzukiLogo from '../../assets/img/NFT/azuki/azukiLogo.jpg';
import BoredNft from '../../assets/img/NFT/boredApeYacht/BoredApeYachtClub01.jpg';
import AzukiNft from '../../assets/img/NFT/azuki/azuki01.jpg';

// * Icons
import { FaGooglePlay } from 'react-icons/fa';
import { AiFillApple } from 'react-icons/ai';

const Main = (props) => {
   return (
      <main className="Main">
         <div className="content">
            <h1>
               Explore the <br /> boundless <br /> world of NFT's
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
         <div className="nfts-examples">
            <div className="nft-example">
               <NFT
                  nftImage={BoredNft}
                  collectionImage={BoredLogo}
                  collection="Bored Ape Yacht"
                  priceInEth={51.2469}
               />
               <NFT
                  nftImage={AzukiNft}
                  collectionImage={AzukiLogo}
                  collection="Azuki"
                  priceInEth={16.355}
               />
            </div>
         </div>
      </main>
   );
};

export default Main;
