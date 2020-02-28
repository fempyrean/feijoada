/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
import React, { useState, useEffect } from 'react';
import {
    ScrollableContainer,
    Title,
    PokeballUpperRightCorner,
    Container,
} from '../../components';
import Pokemon from '../../models/Pokemon';

export default function Pokedex() {
    const [loading, setLoading] = useState(true);
    const [pokemons, setPokemons] = useState();

    function getPokemonDetails(data) {
        const details = [];
        data.pokemon_entries.map(async pokemon => {
            const pokemonDetails = await Pokemon.fetchPokemonDetails(
                pokemon.entry_number
            );
            details.push(pokemonDetails);
        });
        setPokemons(details);
    }

    useEffect(() => {
        async function getPokedexData() {
            const data = await Pokemon.fetchPokedex(2);
            getPokemonDetails(data);
        }
        getPokedexData();
    }, []);
    useEffect(() => {
        console.log('pokemons', pokemons);
        if (pokemons && pokemons.length > 0) {
            setLoading(false);
        }
    }, [pokemons]);

    function renderPokemons() {
        return pokemons.map(pokemon => {
            return <Title>{pokemon.name}</Title>;
        });
    }

    if (loading) {
        return (
            <Container>
                <Title>Carregando</Title>
            </Container>
        );
    }
    return (
        <Container>
            <ScrollableContainer>
                <PokeballUpperRightCorner />
                <Title>Pokedex</Title>
                {renderPokemons()}
            </ScrollableContainer>
        </Container>
    );
}
