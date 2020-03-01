/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
import React, { useState, useEffect } from 'react';
import {
    ScrollableContainer,
    Title,
    PokeballUpperRightCorner,
    Container,
    PokemonCard,
} from '../../components';
import Pokemon from '../../models/Pokemon';

export default function Pokedex() {
    const [loading, setLoading] = useState(true);
    const [pokemons, setPokemons] = useState();

    useEffect(() => {
        async function getPokedex() {
            const data = await Pokemon.fetchPokedexDetails(2);
            setPokemons(data);
        }
        getPokedex();
    }, []);
    useEffect(() => {
        console.log('pokemons', pokemons);
        if (pokemons && pokemons.length > 0) {
            setLoading(false);
        }
    }, [pokemons]);

    function renderPokemons() {
        return pokemons.map(pokemon => {
            return <PokemonCard key={pokemon.name} pokemon={pokemon} />;
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
        <ScrollableContainer>
            <PokeballUpperRightCorner />
            <Title>Pokedex</Title>
            {renderPokemons()}
        </ScrollableContainer>
    );
}
