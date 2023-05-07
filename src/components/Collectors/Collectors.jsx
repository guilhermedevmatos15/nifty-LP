import React from 'react';

// * Components
import Collector from '../Collector/Collector';

// * CSS
import './Collectors.css';

// * Images
import people01 from '../../assets/img/pexels-aaron-jacob-pilatoe-4655426_Easy-Resize.com.jpg';
import people02 from '../../assets/img/pexels-min-an-698532_Easy-Resize.com.jpg';
import people03 from '../../assets/img/pexels-nyara-aquino-8159074_Easy-Resize.com.jpg';
import people04 from '../../assets/img/pexels-rodrigo-souza-2531553_Easy-Resize.com.jpg';
import people05 from '../../assets/img/pexels-đỗ-ngọc-tú-quyên-1520760_Easy-Resize.com.jpg';

// * Icons

const Collectors = (props) => {
   return (
      <div className="Collectors">
         <Collector
            image={people01}
            username="NoobMaster69"
            priceUsd={32322.22}
            position={1}
         />
         <Collector
            image={people02}
            username="GreenKoala518"
            priceUsd={30123.33}
            position={2}
         />
         <Collector
            image={people03}
            username="Charllena"
            priceUsd={29947.472}
            position={3}
         />
         <Collector
            image={people04}
            username="FuryFly"
            priceUsd={28292.822}
            position={4}
         />
         <Collector
            image={people05}
            username="Hitto06"
            priceUsd={27935.604}
            position={5}
         />
      </div>
   );
};

export default Collectors;
