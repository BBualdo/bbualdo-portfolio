import React from 'react';

import { motion } from 'framer-motion';

import { fadeIn } from '../variants';

import { FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const [isCoppied, setIsCoppied] = React.useState(false);

  const copyToClipboard = () => {
    const emailAdress = 'mrseb10@gmail.com';

    navigator.clipboard.writeText(emailAdress)
      .then(() => {
        setIsCoppied(true);
        setTimeout(() => {
          setIsCoppied(false)
        }, 3000)
      })
  }

  return (
    <section id='contact' className='py-16 lg:section mb-28 lg:mb-0'>
      {isCoppied && <motion.div
      variants={fadeIn('right', 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: true, amount: 0.3}}
      className='fixed top-[20px] flex w-full justify-center items-center'>
        <div className='btn btn-sm flex items-center'>Copied to Clipboard!</div>
      </motion.div>}
      <div className="container mx-auto">
        <div className='flex flex-col items-center lg:flex-row'>
          {/* text */}
          <motion.div
          variants={fadeIn('right', 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.3}}
          className='flex-1 flex justify-start items-center'>
            <div>
              <h4 className='h3 text-xl uppercase text-accent font-medium mb-2 tracking-wide'>Get in touch</h4>
              <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>
                Let's work <br /> together!
              </h2>
            </div>
          </motion.div>
          {/* contact methods */}
          <motion.div 
          variants={fadeIn('left', 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.3}}
          className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-center'>
            <h2 className='xs:h3 xs:uppercase sm:h2 text-center leading-10'>How do <span className='text-accent font-bold'>you</span> want to <span className='text-accent font-bold'>contact me</span>?</h2>
            <div className='flex xs:flex-col xs: gap-y-12 sm:flex-row items-center justify-center gap-x-12 w-full'>
              <a href='https://www.linkedin.com/in/sebastian-opozda-641b1127b/' target='_blank' className='btn cursor-pointer p-4'>
                <FaLinkedin 
                fontSize={40}
                />
              </a>
              <a href='mailto:mrseb10@gmail.com' className='btn cursor-pointer p-4'>
                <FaEnvelope 
                fontSize={40}
                />
              </a>
              <div onClick={copyToClipboard} className='btn cursor-pointer p-4'>mrseb10@gmail.com</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact