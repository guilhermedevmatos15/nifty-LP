import React from 'react';

// * Components

// * CSS
import './NewsletterSubs.css';

// * Images
import people01 from '../../assets/img/pexels-aaron-jacob-pilatoe-4655426_Easy-Resize.com.jpg';
import people02 from '../../assets/img/pexels-min-an-698532_Easy-Resize.com.jpg';
import people03 from '../../assets/img/pexels-nyara-aquino-8159074_Easy-Resize.com.jpg';
import people04 from '../../assets/img/pexels-rodrigo-souza-2531553_Easy-Resize.com.jpg';
import people05 from '../../assets/img/pexels-đỗ-ngọc-tú-quyên-1520760_Easy-Resize.com.jpg';

// * Icons

const NewsletterSubs = (props) => {
   return (
      <div className="NewsletterSubs">
         <h2>
            Subscribe to <br />
            Our Newsletter
         </h2>
         <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Accusantium, culpa.
         </p>
         <div className="input-field">
            <input
               type="email"
               name="input-email-newsletter"
               id="input-email-newsletter"
               placeholder="Type your email"
            />
            <button type="button" className="b-subscribe">
               Subscribe
            </button>
         </div>

         <img src={people01} alt="prople" className="image-animate" id='image-01' />
         <img src={people02} alt="prople" className="image-animate" id='image-02' />
         <img src={people03} alt="prople" className="image-animate" id='image-03' />
         <img src={people04} alt="prople" className="image-animate" id='image-04' />
         <img src={people05} alt="prople" className="image-animate" id='image-05' />
      </div>
   );
};

export default NewsletterSubs;
