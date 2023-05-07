import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

// * Components
import NFT from '../NFT/NFT';

// * CSS
import './Slider.css';

// * Images

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
            >

               {props.children}

            </motion.div>
         </motion.div>
      </div>
   );
};

export default Slider;
