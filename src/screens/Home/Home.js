import React from 'react';
import {
    Container,
    Title,
    SearchBar,
    PokeballUpperRightCorner,
} from '../../components';

export default function Home() {
    return (
        <Container>
            <PokeballUpperRightCorner />
            <Title style={{ marginTop: 20, marginBottom: 15 }} size="28">
                What Pokemon{'\n'}are you looking for?
            </Title>
            <SearchBar />
        </Container>
    );
}
