import axios from 'axios';

class Pokedex {
    constructor() {
        this.baseUrl = 'https://pokeapi.co/api/v2/pokedex/'
        this.currentIndex = 2;
        this.indexes = {
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
        this.pokedexes = {};

        /** Array com pokedexes indexadas por nome. nome => id */
        this.indexedByName = {};
        Object.keys(this.indexes).map(key => {
            this.indexedByName[this.indexes[key]] = key;
        });
    }

    fetchPokedex = async (id = this.currentIndex) => {
        if ( this.pokedexes[id] ) {
            return this.pokedexes[id];
        }
        const data = await axios.get(`${this.baseUrl}${this.currentIndex}`);
        this.pokedexes[data.data.id] = data.data;

        return data.data;
    }
}

export default new Pokedex();
