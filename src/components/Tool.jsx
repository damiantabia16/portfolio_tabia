import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Tool = ({ tools }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <AnimatePresence>
      {tools &&
        tools[0].tools.map((tool, index) => (
          <motion.div
            key={tool.id}
            className='tool-card md:tool-card-md flex items-center bg-white p-[20px] w-full rounded-3xl mb-[10px] cursor-default relative'
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            ref={ref}
          >
            <div className={`${tool.name}-icon hide absolute md:relative`}>
              {tool.icon ? (
                <img
                  className='w-full max-w-[50px] h-full max-h-[50px]'
                  src={tool.icon}
                  alt={tool.name}
                />
              ) : null}
            </div>
            <div className={`${tool.name}-title m-auto`}>
              <h4 className='text-black tool-text text-[15px] md:text-[25px]'>
                {tool.name}
              </h4>
            </div>
          </motion.div>
        ))}
    </AnimatePresence>
  );
};

export default Tool;
