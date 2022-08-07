import axios from "axios";

export const getPokemons = async () => {
  return await axios.get("http://localhost:9000/pokemons");
};
