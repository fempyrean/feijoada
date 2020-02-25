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
        console.log('POKEMONS', data);
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
