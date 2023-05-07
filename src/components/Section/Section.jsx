import React from 'react';

// * Components

// * CSS
import './Section.css';

// * Images

// * Icons

const Section = (props) => {
   const { id, noMargin } = props;

   return (
      <section className={`Section ${noMargin ? 'noMargin' : ''}`} id={`section-${id}`}>
         {props.children}
      </section>
   );
};

export default Section;
