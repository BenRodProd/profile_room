import { Plane } from '@react-three/drei'
import { TextureLoader } from 'three'
import { useMemo } from 'react'

const About = () => {
  const texture = useMemo(() => new TextureLoader().load('./about.jpg'), []) // Load texture once and memoize

  return (
    <Plane args={[5, 5]} scale={7} rotation-y={-Math.PI / 2} position={[60, -0, -3]}>
      <meshBasicMaterial attach='material' map={texture} />
    </Plane>
  )
}

export default About
