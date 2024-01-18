import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { HiBars2 } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {

    const [ ulDisplay, setUlDisplay ] = useState(false);
    function handleDisplay() {
        setUlDisplay(!ulDisplay);
        setUlClose(false);
    }

    const [ ulClose, setUlClose ] = useState(false);
    function handleClose() {
        setUlClose(!ulClose);
        setUlDisplay(false);
    }

    let menuRef = useRef();

    useEffect(() => {
        let handler = (e) => {
            if (!menuRef.current.contains(e.target)) {
                setUlDisplay(false);
                setUlClose(true);
            }
        }

        document.addEventListener("mousedown", handler);

        return() => {
            document.removeEventListener("mousedown", handler);
        }

    })

    const [isFixed, setIsFixed] = useState(false);

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const shouldFixMenu = scrollPosition >= window.innerHeight * 0.5;
      setIsFixed(shouldFixMenu);
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
    
    const handleSmoothScroll = (id) => {
      let scrollToPosition = 0;
      const mobile = window.innerWidth < 480;

      if (id === 'hero') {
        scrollToPosition = 0;
      } else if (id === 'projects') {
        scrollToPosition = mobile ? 730 : 900;
      } else if (id === 'knowledge') {
        scrollToPosition = mobile ? 1450 : 1700;
      } else {
      const windowHeight = window.innerHeight ||
        document.documentElement.clientHeight ||
        document.body.clientHeight;

      scrollToPosition = document.documentElement.scrollHeight - windowHeight;
      }

      window.scrollTo({
      top: scrollToPosition,
      behavior: 'smooth',
      });

      handleClose();
    };

  return (
    <header>
        <div id="header-wrapper" className='h-[80px] px-[20px] md:px-[40px] md:h-[130px]'>
            <div id="inner-wrapper" className='h-full flex'>
                <div id="left-elements" className='flex font-bold items-center'>
                    <div id="bars" className='m-[0.6rem] min-w-[54px] lg:hidden'>
                        <HiBars2 onClick={handleDisplay} className='cursor-pointer text-white text-center w-[30px] h-[30px] transition duration-500 hover:text-[#ffdc00]'/>
                    </div>
                    <div id="name" className='flex items-center text-[2em] relative'>
                        <Link to='/' className='text-[#ffdc00] transition duration-200 hover:text-[#b29a00] absolute'>Tabia.</Link>
                    </div>
                </div>
                <div id="right-elements" className='flex w-full h-full'>
                    <nav id='site-nav' className='w-full h-full'>
                        <div id="mobile-nav" className={`fixed w-full h-screen fixed top-0 left-0 z-[30] overflow-hidden transition-transform duration-500 ${
                        ulDisplay ? 'translate-x-0' : '-translate-x-full'}`}>
                            <div id="close-bar" className={`bg-white h-[100px] w-full flex items-center justify-between px-[20px] lg:hidden transition-transform duration-300 ${
                            ulDisplay ? 'translate-x-0' : '-translate-x-full'}`}>
                                <div id="btn">
                                    <IoMdClose onClick={handleClose} className='cursor-pointer w-[30px] h-[30px] transition duration-500' />    
                                </div>
                            </div>
                            <div id="mobile-overlay" ref={menuRef} className={`bg-white absolute w-full h-screen px-[20px] transition-transform duration-300 lg:hidden ${
                            ulDisplay ? 'translate-x-0' : '-translate-x-full'}`}>
                                <div id="menu-wrapper">
                                    <ul id="mobile-nav" className='font-bold'>
                                        <li id='mbl-hero' className='mbl-item'>
                                            <Link to="/" onClick={() => handleSmoothScroll('hero')}>
                                                <span>#inicio</span>
                                            </Link>
                                        </li>
                                        <li id='mbl-projects' className='mbl-item'>
                                            <Link to="/" onClick={() => handleSmoothScroll('projects')}>
                                                <span>#proyectos</span>
                                            </Link>
                                        </li>
                                        <li id='mbl-knowledge' className='mbl-item'>
                                            <Link to="/" onClick={() => handleSmoothScroll('knowledge')}>
                                                <span>#conocimientos</span>
                                            </Link>
                                        </li>
                                        <li id='mbl-contact' className='mbl-item'>
                                            <Link to="/" onClick={() => handleSmoothScroll('contact')}>
                                                <span>#contacto</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div id="copyright" className='mt-[20px] text-[.94rem]'>
                                    &copy;2023. Hecho por <a href="" className='transition duration-500 hover:text-[#b29a00]'>Damián Tabia</a>.<br /> Todos los derechos reservados.
                                </div>
                            </div>
                        </div>
                        <div id="desktop-nav" className='hidden lg:flex text-white w-full h-full relative items-center px-[20px] max-w-[1200px] m-auto'>
                            <div id="inner-nav" className='w-full flex justify-center items-center'>
                                <ul id="full-nav" className={`flex font-bold z-30 ${isFixed ? 'fixed' : ''}`}>
                                    <li id='dsk-hero' className='dsk-item'>
                                        <Link to="/" onClick={() => handleSmoothScroll('hero')}>
                                            <span># inicio</span>
                                        </Link>
                                    </li>
                                    <li id='dsk-projects' className='dsk-item'>
                                        <Link to="/" onClick={() => handleSmoothScroll('projects')}>
                                            <span># proyectos</span>
                                        </Link>
                                    </li>
                                    <li id='dsk-knowledge' className='dsk-item'>
                                        <Link to="/" onClick={() => handleSmoothScroll('knowledge')}>
                                            <span># conocimientos</span>
                                        </Link>
                                    </li>
                                    <li id='dsk-contact' className='dsk-item'>
                                        <Link to="/" onClick={() => handleSmoothScroll('contact')}>
                                            <span># contacto</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Navbar