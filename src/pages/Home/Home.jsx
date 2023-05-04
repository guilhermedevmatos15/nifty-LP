import React from 'react';

// * Components
import Section from '../../components/Section/Section';
import Header from '../../components/Header/Header';
import Main from '../../components/Main/Main';
import Slider from '../../components/Slider/Slider';
import Collectors from '../../components/Collectors/Collectors';
import FAQ from '../../components/FAQ/FAQ';

// * CSS
import './Home.css';

// * Images
import LogoImage from '../../assets/img/logos/nifty-high-resolution-logo-color-on-transparent-background.png';

import people01 from '../../assets/img/pexels-aaron-jacob-pilatoe-4655426_Easy-Resize.com.jpg';
import people02 from '../../assets/img/pexels-min-an-698532_Easy-Resize.com.jpg';
import people03 from '../../assets/img/pexels-nyara-aquino-8159074_Easy-Resize.com.jpg';
import people04 from '../../assets/img/pexels-rodrigo-souza-2531553_Easy-Resize.com.jpg';
import people05 from '../../assets/img/pexels-đỗ-ngọc-tú-quyên-1520760_Easy-Resize.com.jpg';

// * Icons

const Home = (props) => {
   return (
      <div className="Home">
         <Header />
         <Section id="main">
            <Main />
         </Section>
         <Section id="artwork">
            <p>Trending</p>
            <h2>Popular Artwork</h2>
            <Slider />
         </Section>
         <Section id="rank">
            <p>This Week</p>
            <h2>Top Collectors</h2>
            <Collectors />
         </Section>
         <Section id="newsletter">
            <h2>Subscribe to <br />Our Newsletter</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium, culpa.</p>
            <div className='input-field'>
               <input type="email" name='input-email-newsletter' id='input-email-newsletter' placeholder='Type your email' />
               <button type='button' className='b-Subscribe'>Subscribe</button>
            </div>

            <img src={people01} alt="prople" className='image-animate' />
            <img src={people02} alt="prople" className='image-animate' />
            <img src={people03} alt="prople" className='image-animate' />
            <img src={people04} alt="prople" className='image-animate' />
            <img src={people05} alt="prople" className='image-animate' />
         </Section>
         <Section id="faq">
            <h2>FAQ</h2>
            <FAQ />
         </Section>

         <footer>
            <img src={LogoImage} alt="logo nefty" />
            <p>
               Discover the limitless possibilities of NFTs, <br />
               joing the NFT Comunity and collect unique <br />
               digital assets.
            </p>
            <p className="developer">
               Aplication made by:{' '}
               <a href="https://github.com/guilhermedevmatos15" target="_blank" rel="noreferrer">
                  &copy;Guilherme Ferreira
               </a>
            </p>
         </footer>
      </div>
   );
};

export default Home;
