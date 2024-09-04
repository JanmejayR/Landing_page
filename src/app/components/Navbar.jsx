'use client'
import { Link } from 'react-scroll';
import { motion } from 'framer-motion'

const Navbar = ({navIconClick , windowSize , handleNavIconClick }) => {
  return ( 

    <motion.div
    className=""
    initial="hidden"
    
    animate="visible"
    viewport={{ once: true, amount: 0.5 }}
    transition={{ delay: 0.2, duration: 0.5 }}
    variants={{
      hidden: { opacity: 0, y: -50 },
      visible: { opacity: 1, y: 0 },
    }}
  >
    <nav className={` ${navIconClick && windowSize.width <1024? " flex h-screen fixed z-10" : " hidden p-4 "} lg:flex lg:flex-row items-center   w-full top-0 lg:h-32   `}>
     
      <ul className={`w-full ${navIconClick && windowSize.width <1024 ? " flex flex-col items-center justify-center h-full transition-all duration-100 ease-in-out   bg-gray-500  rounded-md  bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 gap-5 " : ""} lg:flex lg:pl-20 space-x-0  lg:space-x-10 text-xl mt-2  `}>
        <li>
          <Link to="HOME"  smooth={true} duration={500} onClick={handleNavIconClick} className={` ${navIconClick && windowSize.width <768 ? " ml-10 ": " "}  link-effect transition-transform duration-300 hover:bg-[#0f8c7f] hover:bg-clip-padding hover:backdrop-filter hover:backdrop-blur-lg hover:bg-opacity-10 hover:translate-y-[-0.25rem]`}>
             <span className='link text-[#101010] font-medium font-lora'>HOME</span>
          </Link>
        </li>
        <li>
          <Link to="ABOUT"  smooth={true} duration={800} onClick={handleNavIconClick}  className='link-effect transition-transform duration-300 hover:bg-[#0f8c7f] hover:bg-clip-padding hover:backdrop-filter hover:backdrop-blur-lg hover:bg-opacity-10 hover:translate-y-[-0.25rem]'>
          <span className='link text-[#101010] font-medium font-lora'>ABOUT US </span>
          </Link>
        </li>
        <li>
          <Link to="FLAGSHIP_PROJECTS"  smooth={true} duration={1100} onClick={handleNavIconClick} className='link-effect transition-transform duration-300 hover:bg-[#0f8c7f] hover:bg-clip-padding hover:backdrop-filter hover:backdrop-blur-lg hover:bg-opacity-10 hover:translate-y-[-0.25rem]'>
          <span className='link text-[#101010] font-medium font-lora'>FLAGSHIP PROJECTS</span>
          </Link>
        </li>
        <li>
          <Link to="CONTACT_NOW"  smooth="easeInOutQuint"  duration={3000}  onClick={handleNavIconClick} className='link-effect transition-transform duration-300 hover:bg-[#0f8c7f] hover:bg-clip-padding hover:backdrop-filter hover:backdrop-blur-lg hover:bg-opacity-10 hover:translate-y-[-0.25rem]'>
          <span className='link text-[#101010] font-medium font-lora'>CONTACT NOW</span>
          </Link>
        </li>

        
      </ul>
    </nav>

    </motion.div>
   
  );
};

export default Navbar;
