import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import useScrollMotion from '../hooks/useScrollMotion.js'

const Hero = () => {

  const [ ref, controls ] = useScrollMotion();
  const [ intRef, intControls ] = useScrollMotion();

  const handleSmoothScroll = () => {
    let scrollToPosition = 0;

    const windowHeight = window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight;

    scrollToPosition = document.documentElement.scrollHeight - windowHeight;

    window.scrollTo({
    top: scrollToPosition,
    behavior: 'smooth',
    });
  };

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = 'CV_FrontEnd-TABIA_Damián_Ariel.pdf'; // Reemplaza con la ruta de tu archivo CV
    link.download = 'DAMIAN_TABIA_CV.pdf'; // Puedes personalizar el nombre del archivo

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
  };

  return (
    <section id='hero' className='px-[20px] font-title max-w-[1200px] m-auto'>
        <div id="hero-container">
            <div id="hero-column" className='h-[85vh] w-full flex'>
                <div id="hero-info" className='flex items-center content-center p-[10px] w-full flex-wrap text-white font-bold'>
                    <div id="title" className='flex justify-center items-center m-auto'>
                        <h1 className='text-[46px] text-center leading-none transition duration-300 hover:text-[#ffdc00] cursor-default md:text-[7.5vw]'>DAMIÁN TABIA</h1>
                    </div>
                    <motion.div
                        ref={ref}
                        id="sub-title"
                        className='w-full text-center'
                        initial={{ opacity: 0, y: 40 }}
                        animate={controls}
                        transition={{ duration: 0.3, delay: 0.05 }}
                        style={{ opacity: 0, y: 40 }}
                    >
                        <h3 className='md:text-[2vw]'>DESARROLLADOR FRONT END.</h3>
                    </motion.div>
                    <motion.div
                        ref={intRef}
                        id="interact"
                        className='w-full text-center flex justify-center text-[10px] md:text-[15px] mt-[40px]'
                        initial={{ opacity: 0, y: 40 }}
                        animate={intControls}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        style={{ opacity: 0, y: 40 }}
                    >
                        <Link to='/' onClick={() => handleSmoothScroll('contact')}>
                            <div className='cursor-pointer rounded-md p-[15px] mx-[20px] border border-white transition duration-300 hover:bg-white hover:text-[#111111]'>
                                <button className='tracking-[0.17em] font-normal'>Contáctame</button>
                            </div>
                        </Link>
                        <div onClick={handleDownloadCV} className='cursor-pointer rounded-md p-[15px] mx-[20px] border border-white transition duration-300 hover:bg-white hover:text-[#111111]'>
                            <button className='tracking-[0.17em] font-normal'>Descargar CV</button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero