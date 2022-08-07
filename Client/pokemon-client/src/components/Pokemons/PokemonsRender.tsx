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
        <div className="flex mt-6">
            <div className="group relative">
            {pokemons.map(pokemon => {
                return (<PokemonItem pokemon={pokemon}/>)
            })}
            </div>
        </div>
 
    )
}

export default PokemonsRender