import React from "react";
import { Pokemon } from "./Pokemons";

interface Props {
    pokemon: Pokemon
}

const PokemonItem = ({pokemon}: Props) => {
    return (
                  <div className="grid grid-cols-2 w-60 rounded-b-xl place-items-center bg-cyan-100 border-black  border shadow-xl">
                    <div className="col-span-2 w-30 h-60 overflow-auto bg-black">
                    <img className="rounded-t-xl border-b-2 border-black w-30 h-60 object-cover" src={`${pokemon.img}`} alt="" />
                    </div>
                    <h1 className="col-span-2 bg-cyan-600 font-bold border border-separate">{pokemon.name}</h1>
                    <h2 className="col-span-2">Type: {pokemon.type}</h2>
                    <p className="border-b-2 border-black">stats1</p>
                    <p className="border-b-2 border-black">stats4</p>
                    <p className="border-b-2 border-black">stats3</p>
                    <p className="border-b-2 border-black">stats2</p>
                </div>
    
    )
}

export default PokemonItem