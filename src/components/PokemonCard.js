/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { Text } from './Text';

const DEVICE_WIDTH = Dimensions.get('window').width;

const typesColors = {
    grass: 'green',
    fire: 'red',
    water: 'lightblue',
    electric: 'yellow',
    default: 'black',
};

const PokemonCardContainer = styled.TouchableOpacity`
    width: ${DEVICE_WIDTH / 2 - 30}px;
    background: ${props => props.background || 'green'};
    margin-vertical: 5px;
    flex-direction: row;
`;

const Container = styled.View``;

const PokemonName = styled(Text).attrs(() => ({}))``;

const PokemonTypeContainer = styled.View`
    flex: 1;
    background: ${props => props.background || 'green'};
`;
const PokemonTpyeText = styled(Text).attrs(() => ({}))``;

const PokemonType = ({ types }) => {
    function renderTypes() {
        const typesToRender = [];
        let primaryColor = null;

        types.map(type => {
            if (type.slot === 1) {
                primaryColor =
                    typesColors[type.type.name] || typesColors.default;
            }
        });

        types.map(type => {
            typesToRender.push(
                <PokemonTypeContainer background={primaryColor}>
                    <PokemonTpyeText>{type.type.name}</PokemonTpyeText>
                </PokemonTypeContainer>
            );
        });

        return typesToRender;
    }

    return renderTypes();
};

const PokemonSprite = styled.Image.attrs(props => ({
    source: props.source,
    resizeMode: 'contain',
}))`
    width: 80px;
    height: 100px;
`;

export const PokemonCard = ({ pokemon }) => {
    console.log(pokemon);
    const { types, name } = pokemon;

    function getBackgroundColor() {
        let bgColor = null;
        types.map(type => {
            if (type.slot === 1) {
                bgColor = typesColors[type.type.name] || typesColors.default;
            }
        });
        return bgColor;
    }

    return (
        <PokemonCardContainer background={getBackgroundColor()}>
            <Container>
                <PokemonName>
                    {name.charAt(0).toUpperCase() + name.substr(1)}
                </PokemonName>
                <PokemonType types={types} />
            </Container>
            <Container>
                <PokemonSprite
                    source={{
                        uri: pokemon.sprites.front_default,
                    }}
                />
            </Container>
        </PokemonCardContainer>
    );
};
