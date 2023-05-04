import React from 'react';
import PropTypes from 'prop-types';

// * Components

// * CSS
import './NFT.css';

// * Images

// * Icons

const NFT = (props) => {
   let { nftImage, collectionImage, collection, priceInEth } = props;
   priceInEth = Number(priceInEth);
   const style = {
      backgroundImage: `url(${nftImage})`,
   };

   return (
      <div className="NFT" style={style}>
         <div></div>
         <div className="details">
            <div className="collection">
               <img src={collectionImage} alt={`collection ${collection}`} />
               <div>
                  <p>Collection:</p>
                  <p className="collection-name">{collection}</p>
               </div>
            </div>
            <div className="price">
               <p>Price:</p>
               <p className="price-value">{priceInEth.toFixed(2)} ETH</p>
            </div>
         </div>
      </div>
   );
};

NFT.prototype = {
   nftImage: PropTypes.object.isRequired,
   collectionImage: PropTypes.object.isRequired,
   collection: PropTypes.string.isRequired,
   priceInEth: PropTypes.number.isRequired,
};

export default NFT;
