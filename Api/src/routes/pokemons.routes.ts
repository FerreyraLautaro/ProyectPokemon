import { Router } from "express";
import * as pokemonCtrl from './pokemons.controllers'

const router = Router();

router.get('/pokemons', pokemonCtrl.getPokemons)

router.get('/pokemons/:id', pokemonCtrl.getPokemon)

router.post('/pokemons', pokemonCtrl.createPokemon)

router.delete('/pokemons/:id', pokemonCtrl.deletePokemon)

router.patch('/pokemons/:id', pokemonCtrl.updatePokemon)

export default router