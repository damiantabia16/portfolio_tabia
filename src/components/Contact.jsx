import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaWhatsapp, FaLinkedinIn, FaGithub } from "react-icons/fa";
import useScrollMotion from '../hooks/useScrollMotion.js' 

const Contact = () => {

  const [ref, controls] = useScrollMotion();
  const [contactRef, contactControls] = useScrollMotion();

  return (
    <section id='contact' className='px-[20px] py-[100px] max-w-[1200px] m-auto'>
        <div id="contact-container" className='flex m-auto'>
            <div id="contact-column" className='w-full flex items-center justify-center xl:justify-start'>
                <div id="contact-me" className='text-center xl:text-left'>
                    <motion.div
                        ref={ref}
                        id="available"
                        initial={{ opacity: 0, y: 40 }}
                        animate={controls}
                        transition={{ duration: 0.3, delay: 0 }}
                        style={{ opacity: 0, y: 40 }}
                    >
                        <h3 className='text-white font-title text-[28px] text-center xl:text-left font-bold'>Disponible para realizar trabajos <span className='text-[#ffdc00]'>freelance</span></h3>
                    </motion.div>
                    <motion.div
                    ref={contactRef}
                    id="contact-fonts"
                    className='text-white py-[20px] text-[20px]'
                    initial={{ opacity: 0, y: 40 }}
                    animate={contactControls}
                    transition={{ duration: 0.3, delay: 0 }}
                    style={{ opacity: 0, y: 40 }}
                    >
                        <Link to='mailto:damiantabia16@gmail.com' className='font-bold underline underline-offset-4 transition duration-300 hover:text-[#ffdc00]'>
                            damiantabia16@gmail.com
                        </Link>
                        <div id='wp-li-gh' className='flex flex-col my-[10px]'>
                            <span className='flex items-center justify-center xl:justify-start tracking-wider cursor-default'> 
                                <FaWhatsapp className='mr-[10px]' />
                                +54 9 11 6601 2019
                            </span>
                            <span className='flex items-center justify-center xl:justify-start'>
                                <Link to="https://www.linkedin.com/in/damiantabia/" target='_blank' className='flex items-center'>
                                    <FaLinkedinIn className='mr-[10px]' />
                                    linkedIn
                                </Link>
                            </span>
                            <span className='flex items-center justify-center xl:justify-start'>
                                <Link to="https://github.com/damiantabia16" target='_blank' className='flex items-center'>
                                    <FaGithub className='mr-[10px]' />
                                    gitHub
                                </Link>
                            </span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact