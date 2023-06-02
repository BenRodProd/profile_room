"use client"

import { Canvas } from '@react-three/fiber';
import { Bloom, EffectComposer } from '@react-three/postprocessing';
import * as THREE from 'three';
import styled from 'styled-components';
import dynamic from 'next/dynamic';
import Title from '@/components/Title';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Tech from '@/components/TechStack';
import Certificates from '@/components/Certificates';
import Camera from '@/components/Camera';
import Particle from '@/components/Particles';

const Main = styled.div`
  display: flex;
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: black;
  overflow: hidden;
`;

const Common = dynamic(() => import('@/components/canvas/View').then((mod) => mod.Common), { ssr: false });

export default function Home() {
  return (
    <>
      <Main>
        <Canvas>
          <Camera />
          <EffectComposer>
         <Bloom minimapBlur luminanceThreshold={0.5} luminanceSmoothing={0.9} width={300} height={300} intensity={0.5}/>
          <Title />
          <About />
          <Projects />
          <Contact />
          <Tech />
          <Certificates />
          
          <Particle />
          <Common />
          </EffectComposer>
        </Canvas>
      </Main>
    </>
  );
}
