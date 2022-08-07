import React from "react";
import { Pokemon } from "./Pokemons";

interface Props {
    pokemon: Pokemon
}

const PokemonItem = ({pokemon}: Props) => {
    return (
        <div>
            <h1>{pokemon.name}</h1>
            <p>{pokemon.type}</p>
        </div>
    )
}

export default PokemonItem