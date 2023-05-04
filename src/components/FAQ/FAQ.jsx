import React from 'react';

// * Components
import Accordion from '../Accordion/Accordion';

// * CSS
import './FAQ.css';

// * Images

// * Icons

const FAQ = (props) => {
   return (
      <div className="FAQ">
         <Accordion
            title="What is a non-fungible token (NFT)?"
            paragraph="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga reprehenderit aspernatur impedit illo asperiores, facere porro dolorum reiciendis atque praesentium?"
         />
         <Accordion
            title="How do i bui an NFT?"
            paragraph="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga reprehenderit aspernatur impedit illo asperiores, facere porro dolorum reiciendis atque praesentium?"
         />
         <Accordion
            title="What is Nifty Marketplace?"
            paragraph="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga reprehenderit aspernatur impedit illo asperiores, facere porro dolorum reiciendis atque praesentium?"
         />
         <Accordion
            title="How do i sell an NFT?"
            paragraph="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga reprehenderit aspernatur impedit illo asperiores, facere porro dolorum reiciendis atque praesentium?"
         />
      </div>
   );
};

export default FAQ;
