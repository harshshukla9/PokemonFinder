import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import PokemonImage from './Components/PokemonImage'
import Center from './Components/Center'

function App() {
 
  return (
    <>
  
   <Navbar/>
   <Center/>
   <PokemonImage/>
    </>
  )
}

export default App
