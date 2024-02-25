import React from 'react'
import centerimage from '../assets/pokemoncenter.png'

const Center = () => {
  return (
    <div className='flex justify-center  bg-stone-700'>
    <img src={centerimage}
    alt="pokemon logo"
    width={650}
    className='hover:scale-110 transition-all'

    />

    </div>
  )
}

export default Center