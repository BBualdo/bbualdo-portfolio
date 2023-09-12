import React from 'react';

import Logo from '../assets/bbualdo-logo.svg'

const Header = () => {
  return (
    <header className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <a href='#'>
            <img 
            className=""
            src={Logo} 
            alt='bbualdo' />
          </a>
          <button className="btn btn-sm">Work with me</button>
        </div>
      </div>
    </header>
  )
}

export default Header