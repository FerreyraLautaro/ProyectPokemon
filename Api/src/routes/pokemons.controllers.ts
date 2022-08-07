import { RequestHandler } from "express"
import Pokemon from "./pokemon"

export const createPokemon: RequestHandler = async (req, res) => {
    const body = req.body
    const pokemonFound = await Pokemon.findOne({img: body.img})
    if(pokemonFound) return res.status(301).json({message: 'The IMG already Existing'})

    try {
        const pokemon = new Pokemon(body)
        const pokemonCreated = await pokemon.save()
        res.json(pokemonCreated)
    } catch (error) {
        res.json(error)
    }
}

export const getPokemons: RequestHandler = async (req, res) => {
    try {
        const pokemons = await Pokemon.find()
        res.json(pokemons)
    } catch (error) {
        res.json(error)
    }
}

export const getPokemon: RequestHandler = async (req, res) => {
    const {id} = req.params
    try {
        const pokemon = await Pokemon.findById(id)
        res.json(pokemon)
    } catch (error) {
        res.json(error)
    }
}

export const deletePokemon: RequestHandler = async (req, res) => {
    const {id} = req.params
    try {
        const pokemonDelete = await Pokemon.findByIdAndDelete(id)
        res.json(pokemonDelete)
    } catch (error) {
        res.json(error)
    }
}

export const updatePokemon: RequestHandler = async (req, res) => {
    const {id} = req.params
    const body = req.body
    try {
        const pokemonUpdated = await Pokemon.findByIdAndUpdate(id, body, {new: true}) //New true es para que me devuelva el objeto ya modificado
        res.json(pokemonUpdated)
    } catch (error) {
        res.json(error)
    }
}