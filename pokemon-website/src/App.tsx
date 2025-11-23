import { useState } from 'react'
import Search from './components/Search';
import Battle from './components/doBattle';
import './App.css'

function App() {
  const [pokemon_party_1, setPokemonParty_1] = useState<any[]>([]);
  const [pokemon_party_2, setPokemonParty_2] = useState<any[]>([]);
  const [selectedPokemon_1, setSelectedPokemon_1] = useState<any>(null);
  const [selectedPokemon_2, setSelectedPokemon_2] = useState<any>(null);
  const [showBattle, setShowBattle] = useState(false);

  const addPokemonToParty_1 = (pokemon: any) => {
    setPokemonParty_1((prevParty) => [...prevParty, pokemon]);
  }

  const addPokemonToParty_2 = (pokemon: any) => {
    setPokemonParty_2((prevParty) => [...prevParty, pokemon]);
  }

  const selectPokemonForBattle_1 = (index: number) => {
    setSelectedPokemon_1(pokemon_party_1[index]);
  }

  const selectPokemonForBattle_2 = (index: number) => {
    setSelectedPokemon_2(pokemon_party_2[index]);
  }

  return (
    <>
      <h1>Pokemon Comparison!!</h1>
      <p>Selected Pokemon are automatically calculated at level 50 for comparison with a random move list and random power</p>
      {!showBattle ? (
        <>
          <Search returnedPokemon={addPokemonToParty_1} />
          <Search returnedPokemon={addPokemonToParty_2} />
          <div>
            <h2>Player 1 Party:</h2>
            <ul>
              {pokemon_party_1.map((pokemon: any, index: number) => (
                <li 
                  key={index}
                  onClick={() => selectPokemonForBattle_1(index)}
                  style={{ 
                    cursor: 'pointer', 
                    backgroundColor: selectedPokemon_1 === pokemon ? '#646cff' : 'transparent',
                    padding: '5px'
                  }}
                >
                  {pokemon.name} (ID: {pokemon.id}) {selectedPokemon_1 === pokemon}
                </li>
              ))}
            </ul>
            <h2>Player 2 Party:</h2>
            <ul>
              {pokemon_party_2.map((pokemon: any, index: number) => (
                <li 
                  key={index}
                  onClick={() => selectPokemonForBattle_2(index)}
                  style={{ 
                    cursor: 'pointer', 
                    backgroundColor: selectedPokemon_2 === pokemon ? '#646cff' : 'transparent',
                    padding: '5px'
                  }}
                >
                  {pokemon.name} (ID: {pokemon.id}) {selectedPokemon_2 === pokemon}
                </li>
              ))}
            </ul>
          </div>
          <button 
            onClick={() => setShowBattle(true)} 
            disabled={!selectedPokemon_1 || !selectedPokemon_2}
          >
            Start Comparison!
          </button>
        </>
      ) : (
        <>
          <Battle pokemon_1={selectedPokemon_1} pokemon_2={selectedPokemon_2} />
          <button onClick={() => setShowBattle(false)}>Back to Selection</button>
        </>
      )}
    </>
  )
}

export default App;
