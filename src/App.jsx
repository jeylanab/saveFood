import React from "react";
import Navbar from "./components/NavBar";
import Hero from "./components/Hero";
import Whatdo from "./components/Whatdo";


const App = () => (
  <div>
    <Navbar className='  w-full overflow-hidden'/>
    <Hero />
    <Whatdo/>

  </div>
);

export default App;