import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Pokedex = () => {
  const [allPokemon, setAllPokemon] = useState([])

  useEffect(() => {
    axios
      .get('https://pokeapi.co/api/v2/pokemon?limit=1279')
      .then((res) => {
        const newData = res.data.results.map((poke, index) => {
          poke.image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index + 1}.png`
          return poke
        })
        setAllPokemon(newData)
        console.log(newData)
      })
      .catch((err) => {
        console.error(err)
      })
  },[])

  const pokedexDisplay = allPokemon.map((poke) => {
    return (
      <div className='pokedex-card'>
        <img src={poke.image} />
        <h3>{poke.name}</h3>
      </div>
    )
  })

  return (
    <div className='main-page'>
      <h1>Pokedex</h1>
      <div className="pokedex-container">
        {pokedexDisplay}
      </div>
    </div>
  )
}

export default Pokedex