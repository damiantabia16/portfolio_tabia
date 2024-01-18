import React from 'react'

const Footer = () => {
  return (
    <footer id='footer' className='px-[20px] py-[25px] max-w-[1200px] mx-auto'>
        <div>
            <div className='text-white opacity-[50%] text-[14px] flex flex-col md:flex-row md:justify-between'>
                <span>
                    &copy;2023. Hecho por <a href="" className='transition duration-300 hover:text-[#ffdc00]'>Damián Tabia</a>.
                </span>
                <span>
                    Todos los derechos reservados.
                </span>
            </div>
        </div>
    </footer>
  )
}

export default Footer