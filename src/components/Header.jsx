import React from 'react';

import Logo from '../assets/bbualdo-logo.svg'

const Header = () => {
  return (
    <header className='py-8'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          <a href='#'>
            <img 
            src={Logo} 
            alt='bbualdo' 
            className='w-[250px]'
            />
          </a>
          <button className='btn btn-sm md:text-[14px] xs:text-[12px] xs:whitespace-nowrap'>Work with me</button>
        </div>
      </div>
    </header>
  )
}

export default Header