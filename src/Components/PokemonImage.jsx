import React, { useEffect, useRef, useState } from 'react'

const PokemonImage = () => {

  // <=================================LOGIC================================================>

  const [pokemonName,SetpokemonName]= useState('pikachu')
  const [pokemonData,SetpokemonData]= useState([])
  const [hp,SetHp]=useState('')
  const [attack,SetAttack]=useState('')
  const [defence,SetDefence]=useState('')
  const [spattack,SetSpattack]=useState('');
  const [spdefence,SetSpdefence]=useState('');
  const [speed,SetSpeed]=useState('')
  const [image,Setimage]=useState('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png')

  const inputref=useRef(null);


  // <=================================API CALL====================================================>

  useEffect(()=>{

    fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${pokemonName}`)
    .then((response)=>response.json())
    .then((response)=>{
      SetpokemonData(response)
      SetHp(response.stats[0].base_stat)
      SetAttack(response.stats[1].base_stat)
      SetDefence(response.stats[2].base_stat)
      SetSpattack(response.stats[3].base_stat)
      SetSpdefence(response.stats[4].base_stat)
      SetSpeed(response.stats[5].base_stat)
      Setimage(response.sprites.front_default)
    })
    .catch((e)=> alert('Enter a valid Name'))

  },[pokemonName])


  // <==========================SEARCH HANDLER============================================>


  const searchHandle = ()=>{

    SetpokemonName(inputref.current.value)
    inputref.current.value=""

  }

  const chooseRandom = ()=> {
      let no = Math.ceil(Math.random()*50+1)
      SetpokemonName(no)
  }



  

  return (
    <>
    <div className='w-full h-full   bg-stone-700 text-white sm:flex '>
  
    {/* <=====================================IMAGE RENDER  ====================================> */}
     <div className="w-1/2    rounded-md flex flex-col justify-center mx-auto items-center">
       <div className="carousel-item ">
       
         <img src={image}
         width={400}
          className=" object-cover scale-125 hover:scale-150" />
       
         </div> 

        <div className='text-2xl text-yellow-300 uppercase my-[-50]'>{pokemonData.name}</div>

      </div>
     
 


    {/* <=====================================INPUT SERACH  ====================================> */}

    <div className='w-1/2 h-1/2 my-10 sm:flex flex-col '>
      <div className="sm:flex flex-row">
      <div className="mx-auto  justify-evenly py-6 sm:flex flex-row">

      <input type="text" placeholder='Enter your Pokemon..'
      ref={inputref}
       className="input input-bordered input-info  max-w-xs px-19 mx-2" />
      <div className="flex flex-row px-[-1] ">
      <button className="btn btn-outline mx-2"
      onClick={searchHandle}>Search</button>
      <button className="btn btn-outline" onClick={chooseRandom}>Choose Random</button>
      </div>
      </div>
      </div>
    <div>


    {/* <=====================================INPUT FILELD  ====================================> */}

    <div className="">
  <div className="shadow grid justify-center justify-self-center   sm:grid-cols-3 grid-cols-2 gap-10 py-4">
  
  <div className="">
    <div className="text-secondary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
    </div>
    <div className="stat-title">Hp:</div>
    <div className="stat-value">{hp}</div>
  </div>
  
  <div className="">
    <div className="text-secondary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
    </div>
    <div className="stat-title">Attack:</div>
    <div className="stat-value">{attack}</div>

  </div>
  
  <div className="">
    <div className="text-secondary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
    </div>
    <div className="stat-title">Defence:</div>
    <div className="stat-value">{defence}</div>

  </div>

  <div className="">
    <div className="text-secondary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
    </div>
    <div className="stat-title">Sp. Attack:</div>
    <div className="stat-value">{spattack}</div>
 
  </div>

  <div className="">
    <div className="text-secondary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
    </div>
    <div className="stat-title">Sp.Defence:</div>
    <div className="stat-value">{spdefence}</div>

  </div>

  <div className="">
    <div className="text-secondary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
    </div>
    <div className="stat-title">Speed:</div>
    <div className="stat-value">{speed}</div>
  </div>
  
   </div>
   </div>

    </div>
    </div>
    </div>
    </>
  )
 
}

export default PokemonImage