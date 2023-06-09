import { Plane } from '@react-three/drei'
import { TextureLoader } from 'three'
import { useMemo } from 'react'

const Tech = () => {
  const texture = useMemo(() => new TextureLoader().load('./tech.jpg'), []) // Load texture once and memoize
  const texture2 = useMemo(() => new TextureLoader().load('./greenline.png'), [])
  return (
    <>
    <Plane args={[5, 5]} scale={7} rotation-x={Math.PI} rotation-z={Math.PI} position={[0, 0, 54]}>
      <meshBasicMaterial attach='material' map={texture} emissiveIntensity={10} toneMapped={false} />
    </Plane>
    <Plane args={[5, 5]} scale={23} rotation-x={Math.PI} rotation-z={Math.PI} position={[0, 0, 54]}>
      <meshBasicMaterial attach='material' map={texture2} transparent emissiveIntensity={10} toneMapped={false}/>
    </Plane>
    </>
  )
}

export default Tech
