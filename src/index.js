import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './test/reportWebVitals';

// ? Components
import App from './App';

// ? CSS
import './index.css';

// ? Libs
import initSmoothScroll from './libs/smoothScroll';

document.addEventListener('DOMContentLoaded', function() {
  setTimeout(() => {
    initSmoothScroll(115, 1400);
  }, 200);
});



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();