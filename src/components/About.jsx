import React from 'react';
import { motion } from 'framer-motion';
import me from '../me.png';
import useScrollMotion from '../hooks/useScrollMotion.js'

const About = () => {

  const [ ref, controls ] = useScrollMotion();
  const [ textRef, textControls ] = useScrollMotion();
  const [ imgRef, imgControls ] = useScrollMotion();

  return (
    <section id='about-me' className='px-[20px] lg:pt-[50px] pb-[100px] max-w-[1200px] m-auto'>
        <motion.div
            ref={ref}
            id='about-me-title'
            initial={{ opacity: 0, y: 40 }}
            animate={controls}
            transition={{ duration: 0.3, delay: 0 }}
            style={{ opacity: 0, y: 40 }}
        >
            <h3 className='text-white text-center xl:text-left font-bold font-title text-[7.5vw] md:text-[70px]'><span className='text-[#ffdc00]'>#</span> Sobre mí</h3>
        </motion.div>
        <div id="about-me-content" className='m-auto xl:m-0 flex flex-wrap items-center justify-center flex-grow'>
            <motion.div
                ref={textRef}
                className='w-full xl:w-2/3 max-w-[700px]'
                initial={{ opacity: 0, y: 40 }}
                animate={textControls}
                transition={{ duration: 0.3, delay: 0.2 }}
                style={{ opacity: 0, y: 40 }}
            >
                <p className='text-white text-[20px] my-[40px] text-center lg:text-left'>Hace aproximadamente un año me inicié en el mundo del <span className='text-[#ffdc00]'>desarollo web</span>. Mi enfoque principal luego de aprender acerca de HTML, CSS y JavaScript, se ha centrado en tecnologías como <span className='text-[#ffdc00]'>React</span> acompañado de un estilado web con <span className='text-[#ffdc00]'>Tailwind</span> ya que me permitía explorar el punto en común entre <span className='text-[#ffdc00]'>el diseño y la funcionalidad</span>.</p>
                <p className='text-white text-[20px] my-[20px] text-center lg:text-left'>Actualmente, estoy buscando <span className='text-[#ffdc00]'>perfeccionar mis habilidades</span> en React pero agregandole condimentos de mi curiosidad acerca del mundo del <span className='text-[#ffdc00]'>backend</span>, donde aspiro en un futuro comprender la totalidad del desarrollo de aplicaciones web. Encuentro una gran satisfacción en la <span className='text-[#ffdc00]'>resolución de problemas</span>, considerándolos no solo como obstáculos, sino como oportunidades para <span className='text-[#ffdc00]'>aprender y crecer</span>.</p>
            </motion.div>
            <motion.div
                ref={imgRef}
                id='developer-image'
                className='m-auto xl:w-1/3'
                initial={{ opacity: 0, x: 0 }}
                animate={imgControls}
                transition={{ duration: 0.3, delay: 0 }}
                style={{ opacity: 0, x: 0 }}
                whileHover={{ scale: 1.1 }}
            >
                <img src={me} alt="" className='overflow-x-hidden'/>
            </motion.div>
        </div>
    </section>
  )
}

export default About