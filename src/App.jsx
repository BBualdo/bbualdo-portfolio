import React from 'react';

import About from './components/About';
import Banner from './components/Banner';
import Contact from './components/Contact';
import Header from './components/Header';
import Nav from './components/Nav';
import Services from './components/Services';
import Work from './components/Work';

const App = () => (
    <div className="bg-site bg-no-repeat bg-cover overflow-hidden">
      <Header />      
      <Banner />
      <Nav />
      <About />
      <Services />
      <Work />
      <Contact />      
      <div className='h-[4000px]'></div> 
    </div>
  )

export default App