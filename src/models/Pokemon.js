import axios from 'axios';

class Pokemon {
    constructor() {
        this.url = {
            pokemonDetails: 'https://pokeapi.co/api/v2/pokemon/',
            pokedex: 'https://pokeapi.co/api/v2/pokedex/',
        };
        this.data = {
            pokedex: {},
            pokemons: {},
        };
        this.pokedexIndexes = {
            1: 'national',
            2: 'kanto',
            3: 'original-johto',
            4: 'hoenn',
            5: 'original-sinnoh',
            6: 'extended-sinnoh',
            7: 'updated-johto',
            8: 'original-unova',
            9: 'updated-unova',
            11: 'conquest-gallery',
            12: 'kalos-central',
            13: 'kalos-coastal',
            14: 'kalos-mountain',
            15: 'updated-hoenn',
        };
        this.pokedexIndexedByRegionName = {};
        Object.keys(this.pokedexIndexes).map(key => {
            this.pokedexIndexedByRegionName[this.pokedexIndexes[key]] = key;
        });
    }

    async fetchPokedex(pokedexId) {
        if (this.data.pokedex[pokedexId]) {
            return this.data.pokedex[pokedexId];
        }
        const data = await axios.get(`${this.url.pokedex}${pokedexId}`);
        this.data.pokedex[pokedexId] = data.data;
        return this.data.pokedex[pokedexId];
    }

    async fetchPokemonDetails(pokemonId) {
        if (this.data.pokemons[pokemonId]) {
            return this.data.pokemons[pokemonId];
        }
        const data = await axios.get(`${this.url.pokemonDetails}${pokemonId}`);
        this.data.pokemons[pokemonId] = data.data;
        return this.data.pokemons[pokemonId];
    }

    getPokedexIndexedByRegionName() {
        return this.pokedexIndexedByRegionName;
    }
}

export default new Pokemon();
