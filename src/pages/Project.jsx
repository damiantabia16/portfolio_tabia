import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';
import data from '../objects/projects.json';
import toolsData from '../objects/tools.json';
import { FaLongArrowAltRight } from "react-icons/fa";

const Project = () => {

  const [ projectInfo, setProjectInfo ] = useState();
  const [ toolsInfo, setToolsInfo ] = useState([]);
  
  const { id } = useParams();

  useEffect(() => {
    console.log('id', id);
    console.log('data', data);
    const project = data.find((project) => project.id === parseInt(id, 10));

    if (project) {
      setProjectInfo(project)

      const toolsArray = toolsData[0].tools.filter((tool) => project.tools_ids.includes(tool.id));
      setToolsInfo(toolsArray);
    }
  }, [id]);

  const renderImages = () => {
    if (projectInfo && projectInfo.gallery_images) {
      return Object.keys(projectInfo.gallery_images).map((imageKey, index) => (
          <img
            key={index}
            src={`${process.env.PUBLIC_URL}/${projectInfo.gallery_images[imageKey]}`}
            alt={`Gallery Image ${index + 1}`}
            className="gallery-image mb-[10px]"
          />
        ))
    }
    return null;
  }

  return (
    <>
    <Navbar />
    <section id='project' className='px-[20px] py-[100px] max-w-[1200px] m-auto'>
      <div id='project-container' className='pb-[30px]'>
        <div id='project-title'>
          <h1 className='project-title text-white font-title text-[50px] font-bold tracking-normal leading-none my-[10px]'>{projectInfo ? projectInfo.project_title : ""}</h1>
          <div className='flex items-center'>
            <span className='text-[#ffdc00] mr-[3px] text-[.98em]'>•</span>
            <h3 className='text-white opacity-[50%] text-[.98em]'>{projectInfo ? projectInfo.categorie : ""}</h3>
          </div>
        </div>
        <div id="description" className='my-[60px]'>
          <p className='text-white text-[17px]'>{projectInfo ? projectInfo.project_description : ""}</p>
          <div id="tools" className='mt-[20px]'>
            <ul className='flex flex-wrap items-center gap-x-4 gap-y-3'>
              {toolsInfo.map(tool => (
                <li key={tool.id} className='bg-white rounded-full px-[15px] py-[7px] cursor-default'>
                  <span className='text-black font-bold text-[14px] flex items-center justify-center leading-none tracking-widest'>{tool.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div id="visit-btn">
          <Link to='https://damiantabia16.github.io/innobyte/' target='_blank'> 
            <button className='flex items-center text-white font-main tracking-widest font-bold transition duration-300 hover:text-[#ffdc00]'>
              <span>Visitar proyecto</span>
              <span className='ml-[5px]'>
                <FaLongArrowAltRight className='text-[20px]' />
              </span>
            </button>
          </Link>
        </div>
      </div>
      <div id="gallery">
        {renderImages()}
      </div>
    </section>
    </>
  )
}

export default Project