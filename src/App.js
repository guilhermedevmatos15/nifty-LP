import React, { useState } from "react";

// * Components
import Home from "./pages/Home/Home";

function App() {

   const [pageRender, setPageRender] = useState('home');

   function render() {
      return pageRender === 'home' ? <Home /> : '';
   }

   return (
      <>
         {render()}
      </>
   );
}

export default App;
