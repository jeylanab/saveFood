import React from "react";
import Navbar from "./components/NavBar";
import Hero from "./components/Hero";
import Service from "./components/Service";
import Donate from "./components/Donate";


const App = () => (
  <div>
    <Navbar className='  w-full overflow-hidden'/>
    <Hero />
    <Service />
    <Donate/>

  </div>
);

export default App;