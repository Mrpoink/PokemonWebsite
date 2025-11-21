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
};