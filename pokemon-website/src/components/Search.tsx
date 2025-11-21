import { useState } from 'react'
import '../App.css'

interface SearchProps {
    returnedPokemon: (pokemon: any) => void;
}

function Search({returnedPokemon}: SearchProps) {
  const [search, setSearch] = useState("");


  const searchPokemon = (search : string) => {

    fetch(`https://pokeapi.co/api/v2/pokemon/${search.toLowerCase()}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      }
      )
      .then((data) => {
        returnedPokemon(data);
        console.log(data);
      })
      .catch((error) => {
        console.error('There has been a problem with your fetch operation:', error);
      });
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  }

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    searchPokemon(search);
    setSearch("");
  }

  return (
    <form onSubmit={handleSearchSubmit}>
      <input
        type="text"
        value={search}
        onChange={handleSearchChange}
        placeholder="Enter Pokémon name or ID"
      />
      <button type="submit">Add to Party</button>
    </form>
  );
}

export default Search;