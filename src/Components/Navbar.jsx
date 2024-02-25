import React from 'react'
import logo from '../assets/pokemonlogo.jpg'

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl"><img src={logo} className="w-10" alt='pokemon logo'/></a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1 font-bold text-2xl">
      <li className="hover:underline "><a>About Us</a></li>
    
   
    </ul>
  </div>
</div>
  )
}

export default Navbar