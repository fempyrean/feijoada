import React from 'react';
import {
    ScrollableContainer,
    Title,
    PokeballUpperRightCorner,
    Container,
} from '../../components';
import PokedexData from '../../models/Pokedex';

export default function Pokedex() {
    return (
        <Container>
            <ScrollableContainer>
                <PokeballUpperRightCorner />
                <Title>Pokedex</Title>
            </ScrollableContainer>
        </Container>
    );
}
