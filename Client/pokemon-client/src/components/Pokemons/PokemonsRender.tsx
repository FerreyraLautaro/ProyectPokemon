import React, { useEffect, useState } from "react";
import { Pokemon } from "./Pokemons";
import { getPokemons } from "../../Actions/actions";
import PokemonItem from "./Pokemon";

const PokemonsRender = () => {

    const [pokemons, setPokemons] = useState<Pokemon[]>([])

    const loadPokemons = async () => {
        const res = await getPokemons()
        setPokemons(res.data)
    }

    useEffect(() => {
        loadPokemons()
    }, [])

    return(
        <div>
            {pokemons.map(pokemon => {
                return <PokemonItem pokemon={pokemon}/>
            })}
        </div>
    )
}

export default PokemonsRender