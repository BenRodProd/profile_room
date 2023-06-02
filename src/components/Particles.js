import React, { useEffect, useRef } from 'react';
import { Points, BufferGeometry, BufferAttribute, PointsMaterial, Color } from 'three';

const Particle = () => {
  const particleRef = useRef(null);

  useEffect(() => {
    const particleCount = 2000;
    const positions = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);
    const velocities = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      const index = i * 3;
      positions[index] = Math.random() * 200 - 100; // x position
      positions[index + 1] = Math.random() * 200 - 100; // y position
      positions[index + 2] = Math.random() * 200 - 100; // z position
      sizes[i] = Math.random() * 0.005; // particle size

      // Random initial velocities
      velocities[index] = Math.random() * 0.02 - 0.01; // x velocity
      velocities[index + 1] = Math.random() * 0.02 - 0.01; // y velocity
      velocities[index + 2] = Math.random() * 0.02 - 0.01; // z velocity
    }

    const geometry = new BufferGeometry();
    geometry.setAttribute('position', new BufferAttribute(positions, 3));
    geometry.setAttribute('size', new BufferAttribute(sizes, 1));

    const color = new Color(0x03fc13);
    const material = new PointsMaterial({
      size: 0.05,
      color: color,
      sizeAttenuation: true,
      transparent: true,
      alphaTest: 0.5,
      blending: 1, // THREE.AdditiveBlending
    });
    material.emissive = color;
    material.emissiveIntensity = 55.5;
    material.depthWrite = false;

    const particles = new Points(geometry, material);
    particleRef.current.add(particles);

    const animateParticles = () => {
      const positionsArray = particles.geometry.attributes.position.array;

      for (let i = 0; i < particleCount; i++) {
        const index = i * 3;

        // Update particle positions based on velocities
        positionsArray[index] += velocities[index];
        positionsArray[index + 1] += velocities[index + 1];
        positionsArray[index + 2] += velocities[index + 2];

        // Wrap particles around when they go out of bounds
        if (
          Math.abs(positionsArray[index]) > 100 ||
          Math.abs(positionsArray[index + 1]) > 100 ||
          Math.abs(positionsArray[index + 2]) > 100
        ) {
          positionsArray[index] = Math.random() * 200 - 100;
          positionsArray[index + 1] = Math.random() * 200 - 100;
          positionsArray[index + 2] = Math.random() * 200 - 100;

          // Reset velocities when wrapping around
          velocities[index] = Math.random() * 0.00002 - 0.00001; // x velocity
          velocities[index + 1] = Math.random() * 0.00002 - 0.00001; // y velocity
          velocities[index + 2] = Math.random() * 0.00002 - 0.00001; // z velocity
        }
      }

      particles.geometry.attributes.position.needsUpdate = true;

      requestAnimationFrame(animateParticles);
    };

    animateParticles();

    return () => {
      // Dispose of the particles when the component is unmounted
      particles.geometry.dispose();
      particles.material.dispose();
    };
  }, []);

  return <group ref={particleRef} />;
};

export default Particle;
