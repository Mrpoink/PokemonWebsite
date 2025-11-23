import '../App.css'

interface BattleProps {
    pokemon_1: any;
    pokemon_2: any;
    }

function Battle({ pokemon_1, pokemon_2 }: BattleProps) {

    //Add const doBattle logic here if we intend to go down that route

    const find_pokemon_stats = (pokemon: any) => {
        const stats: any = {};
        pokemon.stats.forEach((stat: any) => {
            stats[stat.stat.name] = stat.base_stat;
        });

        const hp = Math.floor(((2 * stats['hp'] + 31 + (252 / 4)) * 50) / 100) + 50 + 10;
        const attack = Math.floor((((2 * stats['attack'] + 31 + (252 / 4)) * 50) / 100) + 5);
        const defense = Math.floor((((2 * stats['defense'] + 31 + (252 / 4)) * 50) / 100) + 5);
        const speed = Math.floor((((2 * stats['speed'] + 31 + (252 / 4)) * 50) / 100) + 5);
        const spdef = Math.floor((((2 * stats['special-defense'] + 31 + (252 / 4)) * 50) / 100) + 5);
        const spatk = Math.floor((((2 * stats['special-attack'] + 31 + (252 / 4)) * 50) / 100) + 5);


        const availableMoves = pokemon.moves.slice(0, Math.min(4, pokemon.moves.length, 20));

        const selected_moves = [];

        const move_indices = new Set();

        while (selected_moves.length < Math.min(4, availableMoves.length)) {
            const randomIndex = Math.floor(Math.random() * availableMoves.length);
            if (!move_indices.has(randomIndex)) {
                move_indices.add(randomIndex);
                selected_moves.push({
                    name: availableMoves[randomIndex].move.name,
                    power: Math.floor(Math.random() * 100),
                    url: availableMoves[randomIndex].move.url
                });
            }
        }

        return {
            name: pokemon.name,
            hp,
            attack,
            defense,
            speed,
            spdef,
            spatk,
            selected_moves
        }
    }

    const pokemonState_1 = find_pokemon_stats(pokemon_1); //Save for Pokemon 1
    const pokemonState_2 = find_pokemon_stats(pokemon_2); //Save for Pokemon 2 (since it changes given the choice from the party)



    return (
        <div>
            <h2>Compare {pokemon_1.name} vs {pokemon_2.name}</h2>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                <div>
                    <h3>{pokemon_1.name}</h3>
                    <img src={pokemon_1.sprites.front_default} alt={pokemon_1.name} />
                    <table>
                        <thead>
                            <tr>
                                <th>Stat</th>
                                <th>Value</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>HP</td>
                                <td>{pokemonState_1.hp}</td>
                            </tr>
                            <tr>
                                <td>Attack</td>
                                <td>{pokemonState_1.attack}</td>
                            </tr>
                            <tr>
                                <td>Defense</td>
                                <td>{pokemonState_1.defense}</td>
                            </tr>
                            <tr>
                                <td>Speed</td>
                                <td>{pokemonState_1.speed}</td>
                            </tr>
                            <tr>
                                <td>Special Defense</td>
                                <td>{pokemonState_1.spdef}</td>
                            </tr>
                            <tr>
                                <td>Special Attack</td>
                                <td>{pokemonState_1.spatk}</td>
                            </tr>
                        </tbody>
                    </table>
                    <h4>Moves:</h4>
                    <ul>
                        {pokemonState_1.selected_moves.map((move: any, index: number) => (
                            <li key={index}>{move.name} (Power: {move.power})</li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3>{pokemon_2.name}</h3>
                    <img src={pokemon_2.sprites.front_default} alt={pokemon_2.name} />
                    <table>
                        <thead>
                            <tr>
                                <th>Stat</th>
                                <th>Value</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>HP</td>
                                <td>{pokemonState_2.hp}</td>
                            </tr>
                            <tr>
                                <td>Attack</td>
                                <td>{pokemonState_2.attack}</td>
                            </tr>
                            <tr>
                                <td>Defense</td>
                                <td>{pokemonState_2.defense}</td>
                            </tr>
                            <tr>
                                <td>Speed</td>
                                <td>{pokemonState_2.speed}</td>
                            </tr>
                            <tr>
                                <td>Special Defense</td>
                                <td>{pokemonState_2.spdef}</td>
                            </tr>
                            <tr>
                                <td>Special Attack</td>
                                <td>{pokemonState_2.spatk}</td>
                            </tr>
                        </tbody>
                    </table>
                    <h4>Moves:</h4>
                    <ul>
                        {pokemonState_2.selected_moves.map((move: any, index: number) => (
                            <li key={index}>{move.name} (Power: {move.power})</li>
                        ))}
                    </ul>
                </div>
            </div>

        </div>
    );


}

export default Battle