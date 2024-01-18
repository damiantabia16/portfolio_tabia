import React from 'react';
import background from '../background/hero_background.jpg';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Knowledge from '../components/Knowledge';
import About from '../components/About';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <>
        <div className='w-full h-full absolute z-[-1]'>
            <div className='w-full h-full absolute' style={{
                backgroundImage: `url(${background})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}>
            </div>
            <div className='absolute inset-0' style={{
                backgroundImage: 'linear-gradient(to top, #111111, transparent 30%)',}}>
            </div>
            <div className='absolute inset-0' style={{
                backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0.7), transparent 50%)',}}>    
            </div>
        </div>
        <Navbar />
        <Hero />
        <Projects />
        <Knowledge />
        <About />
        <Contact />
    </>
  )
}

export default Home