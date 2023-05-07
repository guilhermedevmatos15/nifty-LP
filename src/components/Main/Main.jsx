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

import illustration from '../../assets/img/undraw_internet_on_the_go_re_vben.svg';

// * Icons
import { FaGooglePlay } from 'react-icons/fa';
import { AiFillApple } from 'react-icons/ai';

const Main = (props) => {
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
            {/* <NFT
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
            /> */}
            <img src={illustration} alt="" />
         </div>
      </main>
   );
};

export default Main;
