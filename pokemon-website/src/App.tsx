import React, { useState } from 'react'
import Search from './components/Search';
import './App.css'

interface Pokemon {
  addPokemonToParty: (pokemon: any) => void;
}

function App() {
  const [pokemon_party_1, setPokemonParty_1] = useState([]);
  const [pokemon_party_2, setPokemonParty_2] = useState([]);
  const [search, setSearch] = useState("");


  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  }

  const handleSearchSubmit_1 = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addPokemonToParty_1(search);
    setSearch("");
  }
  const handleSearchSubmit_2 = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addPokemonToParty_2(search);
    setSearch("");
  }

  
  const addPokemonToParty_1 = (pokemon: any) => {
    setPokemonParty_1((prevParty) => [...prevParty, pokemon]);
  }

  const addPokemonToParty_2 = (pokemon: any) => {
    setPokemonParty_2((prevParty) => [...prevParty, pokemon]);
  }



  return (
    <>
      <h1>Pokemon Battle!!</h1>
      <form onSubmit={handleSearchSubmit_1}>
        <input
          type="text"
          value={search}
          onChange={handleSearchChange}
          placeholder="Enter Pokémon name or ID"
        />
        <button type="submit">Add to Party</button>
      </form>
      <form onSubmit={handleSearchSubmit_2}>
        <input
          type="text"
          value={search}
          onChange={handleSearchChange}
          placeholder="Enter Pokémon name or ID"
        />
        <button type="submit">Add to Party</button>
      </form>
      <div>
        <h2>Player 1 Party:</h2>
        <ul>
          {pokemon_party_1.map((pokemon: any, index: number) => (
            <li key={index}>
              {pokemon.name} (ID: {pokemon.id})
            </li>
          ))}
        </ul>
        <h2>Player 2 Party:</h2>
        <ul>
          {pokemon_party_2.map((pokemon: any, index: number) => (
            <li key={index}>
              {pokemon.name} (ID: {pokemon.id})
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

