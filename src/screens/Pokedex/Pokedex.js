/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
import React, { useState, useEffect } from 'react';
import {
    ScrollableContainer,
    Title,
    PokeballUpperRightCorner,
    Container,
} from '../../components';
import PokedexData from '../../models/Pokedex';
import Pokemon from '../../models/Pokemon';

export default function Pokedex() {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState();

    useEffect(() => {
        async function getPokedexData() {
            const dataPokedex = await PokedexData.fetchPokedex();
            setData(dataPokedex);
            setLoading(false);
        }
        getPokedexData();
    }, []);

    function renderPokemons() {
        const { pokemon_entries } = data;
        pokemon_entries.map(async (entry, index) => {
            if (index === 0) {
                const pokemon = await Pokemon.getPokemon(entry.entry_number);
            }
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
