import React from "react"
import { Link } from "react-router-dom"

export default function NavBar() {
    return (
        <nav className="sticky top-0  bg-gray-800 columns-2 flex justify-around py-5 rounded-t-lg" >
            <Link className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" to='/'>Pokemons</Link>
            <Link className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" to='/new-pokemon'>Create Pokemon</Link>
        </nav>
    )
  }