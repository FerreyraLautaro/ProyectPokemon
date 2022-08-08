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
        <div className="container mx-8">
        <div className="grid grid-cols-4 gap-8 place-items-center place-content-center py-7">

            {pokemons.map(pokemon => {
                return (<PokemonItem pokemon={pokemon}/>)
            })}

        </div>
            
        </div>

 
    )
}

export default PokemonsRender