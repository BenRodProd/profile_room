import { Plane } from '@react-three/drei'
import { TextureLoader } from 'three'
import { useMemo } from 'react'

const Projects = () => {
  const texture = useMemo(() => new TextureLoader().load('./projects.jpg'), []) // Load texture once and memoize
  const texture2 = useMemo(() => new TextureLoader().load('./greenline.png'), [])
  const handlePlaneClick = (url) => {
    window.open(url, '_blank');
  };
  return (
    <>
    <Plane args={[5, 5]} scale={7} rotation-y={Math.PI / 2} position={[-47, 0, -3]}>
      <meshBasicMaterial attach='material' map={texture} emissiveIntensity={10} toneMapped={false}/>
    </Plane>
     <Plane args={[5, 5]} scale={23}  rotation-y={Math.PI / 2} position={[-57, 0, -3]}>
     <meshBasicMaterial attach='material' map={texture2} transparent emissiveIntensity={10} toneMapped={false}/>
   </Plane>
   <Plane args={[10, 3, 1, 1]} scale={0.4} rotation-y={Math.PI / 2} position={[-40, 0.3, -2.1]} onClick={() => handlePlaneClick('https://benrodprod.github.io/TrashPlayer/')}>
        <meshBasicMaterial attach='material'  opacity={0} transparent />
      </Plane>
      <Plane args={[19, 3, 1, 1]} scale={0.4} rotation-y={Math.PI / 2} position={[-40, 3.3, -2.1]} onClick={() => handlePlaneClick('https://capstone-project-kohl-seven.vercel.app/')}>
        <meshBasicMaterial attach='material'  opacity={0} transparent />
      </Plane>
      <Plane args={[10, 3, 1, 1]} scale={0.4} rotation-y={Math.PI / 2} position={[-40, -2.3, -2.1]} onClick={() => handlePlaneClick('https://www.benjotrash.de')}>
        <meshBasicMaterial attach='material'  opacity={0} transparent />
      </Plane>
   </>
  )
}

export default Projects
