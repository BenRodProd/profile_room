import { Plane } from '@react-three/drei'
import { TextureLoader } from 'three'
import { useMemo } from 'react'

const About = () => {
  const texture = useMemo(() => new TextureLoader().load('./about.jpg'), []) // Load texture once and memoize
  const texture2 = useMemo(() => new TextureLoader().load('./greenline.png'), [])
  return (
    <>
    <Plane args={[5, 5]} scale={7} rotation-y={-Math.PI / 2} position={[60, -0, -3]}>
      <meshBasicMaterial attach='material'  map={texture} emissiveIntensity={10} toneMapped={false} />
    </Plane>
    <Plane args={[5, 5]} scale={24} rotation-y={-Math.PI / 2} position={[59.5, -0, -3]}>
      <meshBasicMaterial attach='material' map={texture2} transparent emissiveIntensity={10} toneMapped={false}/>
    </Plane>
    </>
  )
}

export default About
