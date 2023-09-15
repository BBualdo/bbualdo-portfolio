import React from 'react';

import CountUp from 'react-countup';

import { useInView } from 'react-intersection-observer';

import { motion } from 'framer-motion';

import { fadeIn } from '../variants';

import { Link } from 'react-scroll';

import HTMLIcon from '../assets/HTML.svg';
import CSSIcon from '../assets/CSS.svg';
import JSIcon from '../assets/JavaScript.svg';
import ReactIcon from '../assets/React.svg';
import TailwindIcon from '../assets/TailwindCSS.svg';
import VSCIcon from '../assets/VSCode.svg';
import GitIcon from '../assets/Git.svg';
import ViteIcon from '../assets/Vite.svg';
import FigmaIcon from '../assets/Figma.svg';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.1
  })
  return (
    <section id='about' className='lg:mb-64 py-16 lg:section' ref={ref}>
      <div className="container mx-auto">
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0'>
          {/* img */}
          <motion.div 
          variants={fadeIn('right', 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.3 }}
          className='grid grid-cols-3 grid-rows-3 gap-x-6 lg:gap-x-10 gap-y-6 lg:gap-y-10 bg-about bg-contain bg-no-repeat md:h-[640px] xs:h-[320px] mix-blend-lighten bg-top items-center'>
            <img
            src={HTMLIcon} 
            alt='HTML'
            className='md:h-[130px] xs:h-[80px] lg:h-[130px] xl:h-[160px] shadow-lg shadow-red-500 xs:rounded-[20px] md:rounded-[28px] lg:rounded-[40px]'
            />
            <img
            src={CSSIcon}
            alt='CSS'
            className='md:h-[130px] xs:h-[80px] lg:h-[130px] xl:h-[160px] shadow-lg shadow-blue-600 xs:rounded-[20px] md:rounded-[28px] lg:rounded-[40px]'
            />
            <img
            src={JSIcon} 
            alt='JavaScript'
            className='md:h-[130px] xs:h-[80px] lg:h-[130px] xl:h-[160px] shadow-lg shadow-yellow-500 xs:rounded-[20px] md:rounded-[28px] lg:rounded-[40px]'
            />
            <img
            src={ReactIcon}
            alt='React'
            className='md:h-[130px] xs:h-[80px] lg:h-[130px] xl:h-[160px] shadow-lg shadow-cyan-300 xs:rounded-[20px] md:rounded-[28px] lg:rounded-[40px]'
            />
            <img
            src={TailwindIcon} alt='TailwindCSS'
            className='md:h-[130px] xs:h-[80px] lg:h-[130px] xl:h-[160px] shadow-lg shadow-aqua xs:rounded-[20px] md:rounded-[28px] lg:rounded-[40px]'
            />
            <img
            src={VSCIcon} 
            alt='VSCode'
            className='md:h-[130px] xs:h-[80px] lg:h-[130px] xl:h-[160px] shadow-lg shadow-blue-400 xs:rounded-[20px] md:rounded-[28px] lg:rounded-[40px]'
            />
            <img
            src={GitIcon} 
            alt='Git'
            className='md:h-[130px] xs:h-[80px] lg:h-[130px] xl:h-[160px] shadow-lg shadow-red-700 xs:rounded-[20px] md:rounded-[28px] lg:rounded-[40px]'
            />
            <img
            src={ViteIcon} 
            alt='Vite'
            className='md:h-[130px] xs:h-[80px] lg:h-[130px] xl:h-[160px] shadow-lg shadow-violet-700 xs:rounded-[20px] md:rounded-[28px] lg:rounded-[40px]'
            />
            <img
            src={FigmaIcon} 
            alt='Figma'
            className='md:h-[130px] xs:h-[80px] lg:h-[130px] xl:h-[160px] shadow-lg shadow-green-600 xs:rounded-[20px] md:rounded-[28px] lg:rounded-[40px]'
            />
          </motion.div>
          {/* text */}
          <motion.div 
          variants={fadeIn('left', 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.3 }}
          className='flex-1'>
            <h2 className='h2 xs:text-[24px] text-accent'>About me.</h2>
            <h3 className='h3 mb-4 xs:text-[20px]'>I'm a Freelance Frontend Developer with passion to code and eager to learn.</h3>
            <p className='mb-6 xs:text-[16px]'>
              I'm coding since June 2023. My adventure has started with basic <span className='text-orange-500 font-bold'>HTML</span> and <span className='text-blue-600 font-bold'>CSS</span> understanding with various courses and projects. Then I jumped right into <span className='text-yellow-500 font-bold'>JS</span> and after a month I understood basics and advanced features of this language. Now I master my <span className='text-cyan-300 font-bold'>React</span> skills day by day.
            </p>
            {/* stats */}
            <div className='grid grid-cols-3 grid-rows-2 gap-x-6 lg:gap-x-10 gap-y-6 lg:gap-y-10 mb-12'>
              <div>
                <div className='xs:text-[32px] md:text-[40px] font-tertiary text-gradient mb-2'>
                  {
                  inView 
                  ? <CountUp start={0} end={8} duration={5} delay={1} /> 
                  : null}/10
                </div>
                <div className='font-primary xs:text-[12px] md:text-[14px] text-sm tracking-[2px]'>
                  Time <br />
                  Managment
                </div>
              </div>
              <div>
                <div className='xs:text-[32px] md:text-[40px] font-tertiary text-gradient mb-2'>
                  {
                  inView 
                  ? <CountUp start={0} end={10} duration={5} delay={1} /> 
                  : null}/10
                </div>
                <div className='font-primary xs:text-[12px] md:text-[14px] text-sm tracking-[2px]'>
                  Continuous <br />
                  Learning
                </div>
              </div>
              <div>
                <div className='xs:text-[32px] md:text-[40px] font-tertiary text-gradient mb-2'>
                  {
                  inView 
                  ? <CountUp start={0} end={8} duration={5} delay={1} /> 
                  : null}/10
                </div>
                <div className='font-primary xs:text-[12px] md:text-[14px] text-sm tracking-[2px]'>
                  Critical Thinking
                </div>
              </div>
              <div>
                <div className='xs:text-[32px] md:text-[40px] font-tertiary text-gradient mb-2'>
                  {
                  inView 
                  ? <CountUp start={0} end={9} duration={5} delay={1} /> 
                  : null}/10
                </div>
                <div className='font-primary xs:text-[12px] md:text-[14px] text-sm tracking-[2px]'>
                  Collaboration <br />
                  & Teamwork
                </div>
              </div>
              <div>
                <div className='xs:text-[32px] md:text-[40px] font-tertiary text-gradient mb-2'>
                  {
                  inView 
                  ? <CountUp start={0} end={10} duration={5} delay={1} /> 
                  : null}/10
                </div>
                <div className='font-primary xs:text-[12px] md:text-[14px] text-sm tracking-[2px]'>
                  Creativity <br />
                  & Aesthetics
                </div>
              </div>
              <div>
                <div className='xs:text-[32px] md:text-[40px] font-tertiary text-gradient mb-2'>
                  {
                  inView 
                  ? <CountUp start={0} end={9} duration={5} delay={1} /> 
                  : null}/10
                </div>
                <div className='font-primary xs:text-[12px] md:text-[14px] text-sm tracking-[2px]'>
                  Problem Solving
                </div>
              </div>
            </div>
            <div className='flex gap-x-8 items-center'>
            <Link 
              to='contact'
              activeClass='active'
              smooth={true}
              spy={true} 
              className='btn btn-lg cursor-pointer flex items-center'>Contact me</Link>
              <a href='#work' className='text-gradient btn-link'>
                My Portfolio
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About