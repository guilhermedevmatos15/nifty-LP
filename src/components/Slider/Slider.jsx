import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

// * Components
import NFT from '../NFT/NFT';

// * CSS
import './Slider.css';

// * Images
import mutantApeYachtLogo from '../../assets/img/NFT/mutantApeYacht/mutantApeYachtLogo.png';
import mutantApeYacht01 from '../../assets/img/NFT/mutantApeYacht/mutantApeYacht01.jpg';
import mutantApeYacht02 from '../../assets/img/NFT/mutantApeYacht/mutantApeYacht02.jpg';
import mutantApeYacht03 from '../../assets/img/NFT/mutantApeYacht/mutantApeYacht03.jpg';
import mutantApeYacht04 from '../../assets/img/NFT/mutantApeYacht/mutantApeYacht04.jpg';

import doodlesLogo from '../../assets/img/NFT/doodle/doodleLogo.jpg';
import doodles01 from '../../assets/img/NFT/doodle/doodle01.jpg';
import doodles02 from '../../assets/img/NFT/doodle/doodle02.jpg';

import cloneXLogo from '../../assets/img/NFT/cloneX/cloneXLogo.jpg';
import cloneX01 from '../../assets/img/NFT/cloneX/cloneX01.jpg';
import cloneX02 from '../../assets/img/NFT/cloneX/cloneX02.jpg';
import cloneX03 from '../../assets/img/NFT/cloneX/cloneX03.jpg';
import cloneX04 from '../../assets/img/NFT/cloneX/cloneX04.jpg';

import beanLogo from '../../assets/img/NFT/bean/beanLogo.jpg';
import bean01 from '../../assets/img/NFT/bean/bean01.jpg';
import bean02 from '../../assets/img/NFT/bean/bean02.jpg';

import nakamigosLogo from '../../assets/img/NFT/nakamigos/nakamigosLogo.jpg';
import nakamigos01 from '../../assets/img/NFT/nakamigos/nakamigos01.jpg';
import nakamigos02 from '../../assets/img/NFT/nakamigos/nakamigos02.jpg';

import boredApeYachtLogo from '../../assets/img/NFT/boredApeYacht/BoredApeYachtClubLogo.png';
import boredApeYacht01 from '../../assets/img/NFT/boredApeYacht/BoredApeYacht02.jpg';
import boredApeYacht02 from '../../assets/img/NFT/boredApeYacht/BoredApeYachtClub03.jpg';

// * Icons

const Slider = (props) => {
   const carousel = useRef();
   const [width, setWidth] = useState(0);

   useEffect(() => {
      setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
   }, []);

   return (
      <div className="Slider">
         <motion.div
            className="carousel"
            whileTap={{ cursor: 'grabbing' }}
            ref={carousel}
         >
            <motion.div
               className="inner"
               drag="x"
               dragConstraints={{ right: 0, left: -width }}
               initial={{ x: 100 }}
               animate={{ x: 0 }}
               transition={{ duration: 1.2 }}
            >

               <NFT nftImage={mutantApeYacht01} collectionImage={mutantApeYachtLogo} collection='Mutant Ape Yacht' priceInEth={11.39} />
               <NFT nftImage={mutantApeYacht02} collectionImage={mutantApeYachtLogo} collection='Mutant Ape Yacht' priceInEth={9.11} />
               <NFT nftImage={mutantApeYacht03} collectionImage={mutantApeYachtLogo} collection='Mutant Ape Yacht' priceInEth={13.55} />
               <NFT nftImage={mutantApeYacht04} collectionImage={mutantApeYachtLogo} collection='Mutant Ape Yacht' priceInEth={12.67} />
               <NFT nftImage={doodles01} collectionImage={doodlesLogo} collection='Doodle' priceInEth={2.815} />
               <NFT nftImage={doodles02} collectionImage={doodlesLogo} collection='Doodle' priceInEth={4.17} />
               <NFT nftImage={cloneX01} collectionImage={cloneXLogo} collection='CloneX' priceInEth={3.31} />
               <NFT nftImage={cloneX02} collectionImage={cloneXLogo} collection='CloneX' priceInEth={3.32} />
               <NFT nftImage={cloneX03} collectionImage={cloneXLogo} collection='CloneX' priceInEth={3.35} />
               <NFT nftImage={cloneX04} collectionImage={cloneXLogo} collection='CloneX' priceInEth={3.33} />
               <NFT nftImage={bean01} collectionImage={beanLogo} collection='Bean' priceInEth={1.41} />
               <NFT nftImage={bean02} collectionImage={beanLogo} collection='Bean' priceInEth={1.31} />
               <NFT nftImage={nakamigos01} collectionImage={nakamigosLogo} collection='Nakamigos' priceInEth={0.24} />
               <NFT nftImage={nakamigos02} collectionImage={nakamigosLogo} collection='Nakamigos' priceInEth={0.35} />
               <NFT nftImage={boredApeYacht01} collectionImage={boredApeYachtLogo} collection='Bored Ape Yacht' priceInEth={50.5} />
               <NFT nftImage={boredApeYacht02} collectionImage={boredApeYachtLogo} collection='Bored Ape Yacht' priceInEth={50.75} />

            </motion.div>
         </motion.div>
      </div>
   );
};

export default Slider;
