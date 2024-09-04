'use client'
import React from 'react'
import { useState , useEffect } from 'react'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Model from '../components/model/Model'
import ParticlesComponent from '../components/ParticlesComponent'
import NavMenuIcon from '../components/NavMenuIcon'
const HomePage = () => {

  const [navIconClick, setNavIconClick] = useState(false)
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  // Effect to update window size on resize
  useEffect(() => {
    // Function to update state with the current window dimensions
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    // Initial call to set the dimensions
    handleResize();

    // Event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup function to remove the event listener
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Determine model size based on window size
  const getModelSize = () => {
    if (windowSize.width < 768) {
      // Smaller size for mobile screens
      return { scale: [3.5, 3.5, 3.5], position: [0, 0, 2] ,  rotation: [0, 0, Math.PI/2]  };
    } else if (windowSize.width < 1024) {
      // Medium size for tablets or smaller desktops
      return { scale: [7, 6.8, 7], position: [0, 2, 0],   rotation: [0, 0, 0]  };
    } else {
      // Default size for larger screens
      return { scale: [7, 6.8, 7], position: [-0.5, 0.4, 0] , rotation:[-Math.PI / 2, Math.PI / 2, 0]  };
    }
  };

  function handleNavIconClick(){
    setNavIconClick(prev=> !prev)
  }

  return (

    <main id='home' className='w-full h-screen relative bg-radiant2-bg  text-[#7a65d1] '>
      <ParticlesComponent/>

<motion.div
          className=' w-full h-1/2 md:h-1/3 bottom-5   sm:bottom-0 md:bottom-32 lg:bottom-0  lg:w-[30rem] lg:h-full  lg:right-0  xl:right-64 2xl:right-8   absolute z-0 sm:z-10  '
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
      
       <Model  scale={getModelSize().scale} position={getModelSize().position} rotation={getModelSize().rotation} windowSize={windowSize} />
       
       </motion.div>
       
       <NavMenuIcon navIconClick={navIconClick} handleNavIconClick={handleNavIconClick}/>
      <Navbar navIconClick={navIconClick} windowSize={windowSize} handleNavIconClick={handleNavIconClick}/>
      <div className='w-full   absolute '>

      <motion.div
          className=""
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
       <div className=' pt-32 md:pl-16 xl:pt-56 lg:pl-32'>
       <h1 className='font-baskervville text-center lg:text-left  text-3xl sm:text-5xl xl:text-[5.5rem] text-[#101010]'>A VENTURE STUDIO</h1>
        <div>
          <h2  className=' font-serif text-lg sm:text-3xl text-center  pt-4 md:pt-2 md:text-3xl lg:text-4xl lg:text-left text-[#7C00FE]'>Advancing Human Intelligence</h2>
          <h2 className=' font-serif text-lg sm:text-3xl text-center  pt-4  md:text-3xl lg:text-4xl lg:text-left md:pt-2 text-[#7C00FE]'>Through Innovation</h2>
          
        </div>
       </div>
       </motion.div>
      </div>


     
      
      
    </main>
  )
}

export default HomePage