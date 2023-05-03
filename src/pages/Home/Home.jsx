import React from 'react';

// * Components
import Section from '../../components/Section/Section';
import Header from '../../components/Header/Header';
import Main from '../../components/Main/Main';
import Slider from '../../components/Slider/Slider';

// * CSS
import './Home.css';

// * Images

// * Icons

const Home = props => {
   return (
      <section className="Home">
         <Header />
         <Section id='main' >
            <Main />
         </Section>
         <Section id='slider' >
            {/* the others elements type: <h2> <p> e aquela seção filtro */}
            <Slider />
         </Section>
      </section>
   );
};

export default Home;
