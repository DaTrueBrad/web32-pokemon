import React from 'react'
import {Link} from "react-router-dom"

const Header = () => {
  return (
    <header>
      <h3>Pokedex</h3>
      <nav>
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/pokedex">
          <button>Pokedex</button>
        </Link>
        <Link to="/pokemon/1">
          <button>Test</button>
        </Link>
      </nav>
    </header>
  )
}

export default Header