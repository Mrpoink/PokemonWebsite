import { useState } from 'react'
import Search from './components/Search';
import Battle from './components/doBattle';
import './App.css'

function App() {
  const [pokemon_party_1, setPokemonParty_1] = useState<any[]>([]);
  const [pokemon_party_2, setPokemonParty_2] = useState<any[]>([]);
  const [showBattle, setShowBattle] = useState(false);

  const addPokemonToParty_1 = (pokemon: any) => {
    setPokemonParty_1((prevParty) => [...prevParty, pokemon]);
  }

  const addPokemonToParty_2 = (pokemon: any) => {
    setPokemonParty_2((prevParty) => [...prevParty, pokemon]);
  }

  return (
    <>
      <h1>Pokemon Battle!!</h1>
      <Search returnedPokemon={addPokemonToParty_1} />
      <Search returnedPokemon={addPokemonToParty_2} />
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
        <button onClick={() => setShowBattle(true)}>Start Battle!</button>
        {!showBattle ? (
          <div>
            {/* Your existing party displays */}
          </div>
        ):(
          <Battle pokemon_1={pokemon_party_1[0]} pokemon_2={pokemon_party_2[0]} />
        )}
      </div>
    </>
  )
}

export default App;
