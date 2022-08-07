"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePokemon = exports.deletePokemon = exports.getPokemon = exports.getPokemons = exports.createPokemon = void 0;
const pokemon_1 = __importDefault(require("./pokemon"));
const createPokemon = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    const pokemonFound = yield pokemon_1.default.findOne({ img: body.img });
    if (pokemonFound)
        return res.status(301).json({ message: 'The IMG already Existing' });
    try {
        const pokemon = new pokemon_1.default(body);
        const pokemonCreated = yield pokemon.save();
        res.json(pokemonCreated);
    }
    catch (error) {
        res.json(error);
    }
});
exports.createPokemon = createPokemon;
const getPokemons = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const pokemons = yield pokemon_1.default.find();
        res.json(pokemons);
    }
    catch (error) {
        res.json(error);
    }
});
exports.getPokemons = getPokemons;
const getPokemon = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const pokemon = yield pokemon_1.default.findById(id);
        res.json(pokemon);
    }
    catch (error) {
        res.json(error);
    }
});
exports.getPokemon = getPokemon;
const deletePokemon = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const pokemonDelete = yield pokemon_1.default.findByIdAndDelete(id);
        res.json(pokemonDelete);
    }
    catch (error) {
        res.json(error);
    }
});
exports.deletePokemon = deletePokemon;
const updatePokemon = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const body = req.body;
    try {
        const pokemonUpdated = yield pokemon_1.default.findByIdAndUpdate(id, body, { new: true }); //New true es para que me devuelva el objeto ya modificado
        res.json(pokemonUpdated);
    }
    catch (error) {
        res.json(error);
    }
});
exports.updatePokemon = updatePokemon;
