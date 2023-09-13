import React from 'react';

import CountUp from 'react-countup';

import { useInView } from 'react-intersection-observer';

import { motion } from 'framer-motion';

import { fadeIn } from '../variants';

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
    threshold: 0.5
  })
  return (
    <section id='about' className='section' ref={ref}>
      <div className="container mx-auto">
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
          {/* img */}
          <motion.div 
          variants={fadeIn('right', 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className='grid grid-cols-3 grid-rows-3 gap-x-6 lg:gap-x-10 gap-y-6 lg:gap-y-10 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top items-center'>
            <img 
            src={HTMLIcon} 
            alt='HTML'
            className='h-[100px] lg:h-[130px] xl:h-[160px] shadow-lg shadow-red-500 rounded-[24px] lg:rounded-[40px]'
            />
            <img 
            src={CSSIcon}
            alt='CSS'
            className='h-[100px] lg:h-[130px] xl:h-[160px] shadow-lg shadow-blue-600 rounded-[24px] lg:rounded-[40px]'
            />
            <img 
            src={JSIcon} 
            alt='JavaScript'
            className='h-[100px] lg:h-[130px] xl:h-[160px] shadow-lg shadow-yellow-500 rounded-[24px] lg:rounded-[40px]'
            />
            <img 
            src={ReactIcon}
            alt='React'
            className='h-[100px] lg:h-[130px] xl:h-[160px] shadow-lg shadow-cyan-300 rounded-[24px] lg:rounded-[40px]'
            />
            <img 
            src={TailwindIcon} alt='TailwindCSS'
            className='h-[100px] lg:h-[130px] xl:h-[160px] shadow-lg shadow-aqua rounded-[24px] lg:rounded-[40px]'
            />
            <img 
            src={VSCIcon} 
            alt='VSCode'
            className='h-[100px] lg:h-[130px] xl:h-[160px] shadow-lg shadow-blue-400 rounded-[24px] lg:rounded-[40px]'
            />
            <img 
            src={GitIcon} 
            alt='Git'
            className='h-[100px] lg:h-[130px] xl:h-[160px] shadow-lg shadow-red-700 rounded-[24px] lg:rounded-[40px]'
            />
            <img 
            src={ViteIcon} 
            alt='Vite'
            className='h-[100px] lg:h-[130px] xl:h-[160px] shadow-lg shadow-violet-700 rounded-[24px] lg:rounded-[40px]'
            />
            <img 
            src={FigmaIcon} 
            alt='Figma'
            className='h-[100px] lg:h-[130px] xl:h-[160px] shadow-lg shadow-green-600 rounded-[24px] lg:rounded-[40px]'
            />
          </motion.div>
          {/* text */}
          <motion.div 
          variants={fadeIn('left', 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className='flex-1'>
            <h2 className='h2 text-accent'>About me.</h2>
            <h3 className='h3 mb-4'>I'm a Freelance Frontend Developer with passion to code and eager to learn.</h3>
            <p className='mb-6'>
              {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. At vel voluptatibus saepe voluptatem aut! Amet aperiam pariatur non, porro perspiciatis eveniet temporibus excepturi quia vitae voluptatem optio ad. Corrupti, fugiat. */}
            </p>
            {/* stats */}
            {/* Maybe some skills in points /100 */}
            <div className='grid grid-cols-3 grid-rows-2 gap-x-6 lg:gap-x-10 gap-y-6 lg:gap-y-10 mb-12'>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {
                  inView 
                  ? <CountUp start={0} end={8} duration={6} /> 
                  : null}/10
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Time <br />
                  Managment
                </div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {
                  inView 
                  ? <CountUp start={0} end={10} duration={6} /> 
                  : null}/10
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Continuous <br />
                  Learning
                </div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {
                  inView 
                  ? <CountUp start={0} end={8} duration={6} /> 
                  : null}/10
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Critical Thinking
                </div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {
                  inView 
                  ? <CountUp start={0} end={9} duration={6} /> 
                  : null}/10
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Collaboration <br />
                  & Teamwork
                </div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {
                  inView 
                  ? <CountUp start={0} end={10} duration={6} /> 
                  : null}/10
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Creativity <br />
                  & Aesthetics
                </div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {
                  inView 
                  ? <CountUp start={0} end={9} duration={6} /> 
                  : null}/10
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Problem Solving
                </div>
              </div>
            </div>
            <div className='flex gap-x-8 items-center'>
              <button className='btn btn-lg'>Contact me</button>
              <a href='#' className='text-gradient btn-link'>My Portfolio</a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About