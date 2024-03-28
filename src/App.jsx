import React from "react";
import Navbar from "./components/NavBar";
import Hero from "./components/Hero";
import Service from "./components/Service";


const App = () => (
  <div>
    <Navbar className='  w-full overflow-hidden'/>
    <Hero />
    <Service/>

  </div>
);

export default App;