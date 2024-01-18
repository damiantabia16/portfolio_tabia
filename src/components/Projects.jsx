import React from 'react';
import { motion } from 'framer-motion';
import Card from './Card';
import projects from '../objects/projects.json';
import useScrollMotion from '../hooks/useScrollMotion.js'; 

const Projects = () => {
  
  const [ ref, controls ] = useScrollMotion();

  return (
    <section id='projects' className='px-[20px] py-[100px] max-w-[1200px] m-auto'>
      <motion.div
        id='projects-title'
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={controls}
        transition={{ duration: 0.3, delay: 0.05 }}
        style={{ opacity: 0, y: 40 }}
      >
        <h3 className='text-white text-center xl:text-left font-bold font-title text-[7.5vw] md:text-[70px]'>
          <span className='text-[#ffdc00]'>#</span> Proyectos
        </h3>
      </motion.div>
      <div id="projects-container" className='py-[60px] flex items-center justify-around'>
        <Card projects={projects} />
      </div>
    </section>
  );
};

export default Projects;
