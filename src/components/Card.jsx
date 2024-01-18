import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import useScrollMotion from '../hooks/useScrollMotion.js'

const Card = ({ projects }) => {

    const [ref, controls] = useScrollMotion();

    const navigate = useNavigate();

    const [ mouseHover, setMouseHover ] = useState(false);

    function handleHover() {
        setMouseHover(!mouseHover);
    }

  return (
    <>
        {projects && projects.map(project => (
            <motion.article
                ref={ref}
                key={project.id}
                id={project.project_title}
                className='max-w-[540px] relative'
                initial={{ opacity: 0, y: 40 }}
                animate={controls}
                transition={{ duration: 0.3, delay: 0.2 }}
                style={{ opacity: 0, y: 40 }}
            >
                <div onMouseOver={handleHover} onMouseLeave={handleHover} id={`${project.project_title}-img`} className='max-w-[540px] max-h-[405px] relative overflow-hidden cursor-pointer rounded-t-lg'>
                    <img src={project.project_image} alt={project.project_title} className={`w-full h-full max-w-[540px] max-h-[405px] align-middle ${mouseHover ? 'scale-110' : 'scale-100'} transition duration-300 `} />
                    <div className={`absolute w-full h-full top-0 right-0 bottom-0 left-0 flex items-center justify-center bg-[#111111] opacity-[60%] ${mouseHover ? 'transform transition-transform translate-y-0' : 'transform transition-transform translate-y-full'}`}></div>
                    <button onClick={() => navigate(`proyecto/${project.id}`)} className={`absolute w-full h-full top-0 right-0 bottom-0 left-0 flex items-center justify-center text-white font-title text-[20px] ${mouseHover ? 'opacity-100' : 'opacity-0'} transition duration-300`}>
                        Mostrar proyecto
                    </button>
                </div>
                <div id={`${project.project_title}-details`} className='card-details p-[30px] bg-[#282828] rounded-b-lg'>
                    <h4 onClick={() => navigate(`proyecto/${project.id}`)} className='text-white font-title mb-[5px] text-[23px] cursor-pointer transition duration-300 hover:text-[#ffdc00] inline-block'>{project.project_title}</h4>
                    <h5 className='text-white text-[17px] font-title opacity-[50%]'>{project.categorie}</h5>
                </div>
            </motion.article>
        ))}
    </>
  )
}

export default Card