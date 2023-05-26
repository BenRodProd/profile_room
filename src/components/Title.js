import { Plane } from '@react-three/drei'
import { TextureLoader } from 'three'
import { useMemo } from 'react'

const Title = () => {
  const texture = useMemo(() => new TextureLoader().load('./title.jpg'), []) // Load texture once and memoize

  return (
    <Plane args={[5, 5]} scale={7} rotation-x={(0.0, -5.3, -0)} position={[0, 0, -60]}>
      <meshBasicMaterial attach='material' map={texture} />
    </Plane>
  )
}

export default Title
