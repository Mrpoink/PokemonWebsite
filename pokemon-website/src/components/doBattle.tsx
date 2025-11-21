import { useState } from 'react'
import './App.css'

function App() {
    const [pokemon_party_1, setPokemonParty_1] = useState([]);
    const [pokemon_party_2, setPokemonParty_2] = useState([]);

    return (
        <>
            <h1>Pokemon Battle!!</h1>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                <div>
                    <h2>Player 1 Party:</h2>
                    <ul>
                        {pokemon_party_1.map((pokemon: any, index: number) => (
                            <li key={index}>
                                {pokemon.name} (ID: {pokemon.id})
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h2>Player 2 Party:</h2>
                    <ul>
                        {pokemon_party_2.map((pokemon: any, index: number) => (
                            <li key={index}>
                                {pokemon.name} (ID: {pokemon.id})
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default App