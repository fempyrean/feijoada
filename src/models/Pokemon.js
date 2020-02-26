import axios from 'axios';

class Pokemon {
    constructor() {
        this.baseUrl = 'https://pokeapi.co/api/v2/pokemon/';
    }

    getPokemon = async (id) => {
        const data = await axios.get(`${this.baseUrl}${id}`);
        return data;
    }
}

export default new Pokemon();
