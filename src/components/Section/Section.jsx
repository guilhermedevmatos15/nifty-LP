import React from 'react';

// * Components

// * CSS
import './Section.css';

// * Images

// * Icons

const Section = (props) => {
   const { id } = props;

   return (
      <section className="Section" id={`section-${id}`}>
         {props.children}
      </section>
   );
};

export default Section;
