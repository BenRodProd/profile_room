import { Plane } from '@react-three/drei'
import { TextureLoader } from 'three'
import { useMemo } from 'react'

const Contact = () => {
  const texture = useMemo(() => new TextureLoader().load('./contact.jpg'), []) // Load texture once and memoize
  const handlePlaneClick = (url) => {
    window.open(url, '_blank');
  };
  return (
    <>
    <Plane args={[5, 5]} scale={7} rotation-x={-Math.PI/2} position={[0, -37.5, -3]}>
      <meshBasicMaterial attach='material' map={texture} emissiveIntensity={10} toneMapped={false}/>
    </Plane>
    <Plane args={[25, 3, 1, 1]} scale={0.4} rotation-x={-Math.PI/2} position={[1.5, -36.5, -3]} onClick={() => handlePlaneClick('mailto:@benrodprod.com')}>
        <meshBasicMaterial attach='material'   opacity={0} transparent />
      </Plane>
      <Plane args={[6, 6, 1, 1]} scale={0.5} rotation-x={-Math.PI/2} position={[2, -36.5, 0.9]} onClick={() => handlePlaneClick('https://linkedin.com/in/benjamin-rodenstein')}>
        <meshBasicMaterial attach='material'  opacity={0} transparent />
      </Plane>
      <Plane args={[6, 6, 1, 1]} scale={0.45} rotation-x={-Math.PI/2} position={[-2, -36.5, 0.9]} onClick={() => handlePlaneClick('https://github.com/BenRodProd')}>
        <meshBasicMaterial attach='material'  opacity={0} transparent />
      </Plane>
    </>
  )
}

export default Contact
