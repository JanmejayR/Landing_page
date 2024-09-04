'use client'
import { Suspense } from "react";
import { OrbitControls , Environment } from '@react-three/drei'
import { Canvas } from "@react-three/fiber";


import  Scene  from "../../../../public/Scene.jsx"


export default function Model({ scale, position , rotation ,  windowSize }){

    const isMediumScreen = windowSize.width < 1024;
  let minAzimuthAngle = isMediumScreen ? 0 : -Infinity; // Restrict azimuth for small screens
  let maxAzimuthAngle = isMediumScreen ? 0  : Infinity;  // Restrict azimuth for small screens
  let minPolarAngle = isMediumScreen ? 0 : Math.PI / 2; // Allow full rotation around x-axis on small screens
  let maxPolarAngle = isMediumScreen ? 0  : Math.PI / 2; 

  if(windowSize.width<768){
     minAzimuthAngle = 0; 
     maxAzimuthAngle =  0;  
     minPolarAngle =  Math.PI / 2; 
     maxPolarAngle =  Math.PI / 2; 
  }

    return(
        <>
        
        <Canvas className="w-screen h-screen ">
            
        <OrbitControls 
          enablePan={false} // Disable panning
          enableZoom={false} // Disable zoom
          enableRotate={true}
          minAzimuthAngle={minAzimuthAngle} 
          maxAzimuthAngle={maxAzimuthAngle} 
          minPolarAngle={minPolarAngle} // Set minimum polar angle
          maxPolarAngle={maxPolarAngle} // Set maximum polar angle
        />
           {/* Environment for reflections */}
           {/* <Environment preset="dawn" /> */}

{/* Ambient light for overall illumination */}
<ambientLight intensity={0} />

{/* Point light to simulate a glowing effect */}
<pointLight position={[0, 5, 5]} intensity={10} color="#7C00FE" distance={10} decay={2} />


{/* Directional light to simulate sunlight or a strong directional source */}
<directionalLight position={[5, 5, 5]} intensity={10} color="#7C00FE" shadow-mapSize-width={1024} shadow-mapSize-height={1024} />
            <Suspense fallback={null}>
           
                <Scene  scale={scale} position={position} rotation = {rotation} />
            </Suspense>
        </Canvas>
        </>
    )
}