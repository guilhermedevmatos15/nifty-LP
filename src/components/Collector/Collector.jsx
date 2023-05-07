import React from 'react';

// * Components

// * CSS
import './Collector.css';

// * Images

// * Icons

const Collector = (props) => {
   const { image, username, priceUsd, position } = props;

   function getRandomIntInclusive(min = 0, max = 0) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
   }

   function renderPorcentage() {
      const number = getRandomIntInclusive(-20, 20);
      const result = { value: number, signal: '', className: '' };

      if (number < 0) {
         result.className = 'negative';
         result.signal = '-';
         result.value = Math.abs(number);
      } else if (number === 0) {
         result.className = 'zero';
         result.signal = '';
      } else {
         result.className = 'positive';
         result.signal = '+';
      }

      return result;
   }

   const result = renderPorcentage();

   return (
      <div className="Collector">
         <div className='info'>
            <p className="position">{position}</p>
            <img src={image} alt={username + ' image'} />
            <div>
               <h3 className="username">{username}</h3>
               <p className="username--lower">
                  @{String(username).toLowerCase()}
               </p>
            </div>
         </div>
         <div>
            <h3>${(priceUsd.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }))}</h3>
            <p className={`percentage ${result.className}`}>
               {`${result.signal} ${result.value}`}%
            </p>
         </div>
      </div>
   );
};

export default Collector;
