import React from 'react';
import { motion } from 'framer-motion';
import Tool from './Tool'
import tools from '../objects/tools.json';
import useScrollMotion from '../hooks/useScrollMotion.js'

const Knowledge = () => {

  const [ ref, controls ] = useScrollMotion();
  const [ gridRef, gridControls ] = useScrollMotion();

  return (
    <section id='knowledge' className='px-[20px] lg:pt-[50px] pb-[100px] max-w-[1200px] m-auto relative'>
        <motion.div
          ref={ref}
          id='knowledge-title'
          initial={{ opacity: 0, y: 40 }}
          animate={controls}
          transition={{ duration: 0.3, delay: 0.05 }}
          style={{ opacity: 0, y: 40 }}
        >
            <h3 className='text-white text-center xl:text-left font-bold font-title text-[7.5vw] md:text-[70px]'><span className='text-[#ffdc00]'>#</span> Conocimientos</h3>
        </motion.div>
        <motion.div
          ref={gridRef}
          id="knowledge-container"
          className='relative py-[60px] flex flex-wrap items-center justify-around md:justify-start md:gap-x-3 w-full'
          initial={{ opacity: 0, y: 10 }}
          animate={gridControls}
          transition={{ duration: 0.3, delay: 0 }}
          style={{ opacity: 0, y: 10 }}
        >
            <Tool tools={tools} />
        </motion.div>
    </section>
  )
}

export default Knowledge