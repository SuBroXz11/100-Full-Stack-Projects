import React from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Skills from './Components/Skills';
import About from './Components/About';
import Project from './Components/Projects';
import GotoTop from './Components/GotoTop';
import Modal from './Components/Modal';
import { useGlobalContext } from './Context/Context';
import Button from './Components/Button';

export default function App() {
  const value = useGlobalContext();
  console.log(value);

  return (
    <>
      <Navbar />
      <Modal visible />
      <Hero />
      <Skills />
      <About />
      <Project />
      <GotoTop />
      <Button />
    </>
  );
}
