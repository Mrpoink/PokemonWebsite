import '../App.css'

interface BattleProps {
    pokemon_1: any;
    pokemon_2: any;
    }

function Battle({ pokemon_1, pokemon_2 }: BattleProps) {

    const doBattle = (pokemon_1: any, pokemon_2: any) => {

        pokemon_1.stats.forEach((stat: any, index: number) => {
            const statName = stat.stat.name;
            const statValue1 = stat.base_stat;
            const statValue2 = pokemon_2.stats[index].base_stat;
            
            console.log(`${statName}: Player 1 - ${statValue1}, Player 2 - ${statValue2}`);
        });

    }

    return (
        <div>
            <h2>Battle Component</h2>
            {/* Battle logic will go here */}
        </div>
    );


}

export default Battle