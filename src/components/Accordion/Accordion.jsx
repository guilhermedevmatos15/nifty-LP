import React, { useState } from 'react';
import PropTypes from 'prop-types';

// * Components

// * CSS
import './Accordion.css';

// * Images

// * Icons
import { IoMdArrowDropdown } from 'react-icons/io';
import { IoMdArrowDropup } from 'react-icons/io';

const Accordion = (props) => {
   const { title, paragraph } = props;

   const [open, setOpen] = useState(false);

   function handleClick(e) {
      setOpen(!open);
   }

   return (
      <div
         className="Accordion"
         onClick={(e) => {
            handleClick(e);
         }}
      >
         <div className="title-section">
            <h3 className="title">{title}</h3>
            {open ? (
               <IoMdArrowDropup className="icon icon-up" />
            ) : (
               <IoMdArrowDropdown className="icon icon-down" />
            )}
         </div>
         {open && (
            <div className="paragraph-section">
               <p className="paragraph">{paragraph}</p>
            </div>
         )}
      </div>
   );
};

Accordion.propTypes = {
   title: PropTypes.string.isRequired,
   paragraph: PropTypes.string.isRequired,
};

export default Accordion;
