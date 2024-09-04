import React , {useEffect} from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { Color } from 'three'
const Hologram_cube = ({ scale, position , rotation })=>{
  const group = React.useRef()
  const { nodes, materials, animations } = useGLTF('/scene.gltf')
  const { actions } = useAnimations(animations, group)


  useEffect(() => {
    // Play the animation
    if (actions && actions['Take 001']) {
      actions['Take 001'].play()
    }

     // Customize materials for a vibrant bluish shiny tone
     if (materials) {
      // Apply vibrant bluish colors
      materials.hexagon.color = new Color('#00aaff'); // Bright blue
      materials.glowing_edges.color = new Color('#66ccff'); // Lighter blue with a glow effect
      materials.thin_line.color = new Color('#1e90ff'); // Deep sky blue
      materials.blue_cube_mapped.color = new Color('#00bfff'); // Vivid blue for cubes
      materials.volume_light.color = new Color('#87cefa'); // Soft sky blue for volume light

      // Add some emissive glow for shiny effect
      materials.hexagon.emissive = new Color('#00ffff');
      materials.glowing_edges.emissive = new Color('#add8e6');
      materials.thin_line.emissive = new Color('#1e90ff');
      materials.blue_cube_mapped.emissive = new Color('#00bfff');
      materials.volume_light.emissive = new Color('#87ceeb');

      // Set emissive intensity and metalness for shininess
      for (const key in materials) {
        materials[key].emissiveIntensity = 0.7; // Increase the glow effect
        materials[key].metalness = 3; // Increase shininess
        materials[key].roughness = 0.3; // Slightly smooth surfaces for reflective shine
      }
    }
  }, [actions , materials])

  //rotation={[-Math.PI / 2, Math.PI / 2, 0]}
  // position={[-0.5,0.4,0] , rotation={[Math.PI / 2, 0, 0]
  return (
    <group ref={group} dispose={null} scale={scale} position={position}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={rotation} scale={0.84}>
          <group name="d4e286c425e847e78723a56ea435af67fbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="Concept_202" position={[0, 0.152, 0]} rotation={[-Math.PI / 0, 0, 0]} scale={0.001}>
                  <group name="Concept_203" rotation={[0, Math.PI / 2, 0]}>
                    <group name="Object_6" position={[-0.036, 0.072, -507.334]}>
                      <mesh name="Concept_203_hexagon__0" geometry={nodes.Concept_203_hexagon__0.geometry} material={materials.hexagon} />
                      <mesh name="Concept_203_glowing_edges_0" geometry={nodes.Concept_203_glowing_edges_0.geometry} material={materials.glowing_edges} />
                    </group>
                  </group>
                  <group name="Concept_2_orange_line01" position={[7.689, 0, 0]} rotation={[0.087, 1.571, 0]}>
                    <group name="Object_10" position={[-0.036, 0.072, -507.334]}>
                      <mesh name="Concept_2_orange_line01_thin_line_0" geometry={nodes.Concept_2_orange_line01_thin_line_0.geometry} material={materials.thin_line} />
                    </group>
                  </group>
                </group>
                <group name="Concept_201" position={[0, 0.152, 0]} rotation={[0.698, 0, -Math.PI / 4]} scale={0.005}>
                  <group name="Object_13" position={[0, 0, -12.5]}>
                    <mesh name="Concept_201_blue_cube_mapped_0" geometry={nodes.Concept_201_blue_cube_mapped_0.geometry} material={materials.blue_cube_mapped} />
                  </group>
                </group>
                <group name="Plane002" position={[-0.819, 0.167, -0.003]} rotation={[-Math.PI / 2, 0, 0]} scale={0.001}>
                  <group name="Object_16" position={[532.114, 0, -38.875]} rotation={[Math.PI / 2, 0, 1.52]}>
                    <mesh name="Plane002_volume_light_0" geometry={nodes.Plane002_volume_light_0.geometry} material={materials.volume_light} />
                  </group>
                </group>
                <group name="Concept_204" position={[0, 0.152, 0]} rotation={[0.698, 0, -Math.PI / 4]} scale={0.006}>
                  <group name="Object_19" position={[0, 0, -12.5]}>
                    <mesh name="Concept_204_blue_cube_mapped_0" geometry={nodes.Concept_204_blue_cube_mapped_0.geometry} material={materials.blue_cube_mapped} />
                  </group>
                </group>
                <group name="Plane004" position={[-0.819, 0.168, -0.003]} rotation={[-Math.PI / 2, 0, 0]} scale={0.001}>
                  <group name="Object_22" position={[532.598, -21.397, 16.451]} rotation={[1.572, -0.04, 1.602]}>
                    <mesh name="Plane004_volume_light_0" geometry={nodes.Plane004_volume_light_0.geometry} material={materials.volume_light} />
                  </group>
                </group>
                <group name="Plane005" position={[0.879, 0.143, -0.003]} rotation={[-Math.PI / 2, 0, 0]} scale={0.001}>
                  <group name="Object_25" position={[-533.066, 14.955, -16.481]} rotation={[-1.57, 0.028, -1.58]}>
                    <mesh name="Plane005_volume_light_0" geometry={nodes.Plane005_volume_light_0.geometry} material={materials.volume_light} />
                  </group>
                </group>
                <group name="Plane006" position={[0.879, 0.143, -0.003]} rotation={[-Math.PI / 2, 0, 0]} scale={0.001}>
                  <group name="Object_28" position={[-532.464, 0, 29.508]} rotation={[-Math.PI / 2, 0, -1.515]}>
                    <mesh name="Plane006_volume_light_0" geometry={nodes.Plane006_volume_light_0.geometry} material={materials.volume_light} />
                  </group>
                </group>
                <group name="Plane007" position={[-0.819, 0.167, -0.01]} rotation={[-Math.PI / 2, 0, 0]} scale={0.001}>
                  <group name="Object_31" position={[530.292, 29.795, -50.588]} rotation={[1.572, 0.056, 1.498]}>
                    <mesh name="Plane007_volume_light_0" geometry={nodes.Plane007_volume_light_0.geometry} material={materials.volume_light} />
                  </group>
                </group>
                <group name="Plane008" position={[0.879, 0.142, -0.01]} rotation={[-Math.PI / 2, 0, 0]} scale={0.001}>
                  <group name="Object_34" position={[-530.292, 29.795, -50.588]} rotation={[1.572, -0.056, -1.498]} scale={[-1, 1, 1]}>
                    <mesh name="Plane008_volume_light_0" geometry={nodes.Plane008_volume_light_0.geometry} material={materials.volume_light} />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')
export default Hologram_cube;
