import { Plane } from '@react-three/drei'
import { TextureLoader } from 'three'
import { useMemo } from 'react'

const Certificates = () => {
  const texture = useMemo(() => new TextureLoader().load('./zertifikate.jpg'), []) // Load texture once and memoize

  return (
    <Plane args={[5, 5]} scale={7} rotation-x={Math.PI/2} position={[0, 57.5, -3]}>
      <meshBasicMaterial attach='material' map={texture} />
    </Plane>
  )
}

export default Certificates