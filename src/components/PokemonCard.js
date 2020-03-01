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
`;

const PokemonName = styled(Text).attrs(() => ({}))``;

const PokemonTypeContainer = styled.View`
    flex: 1;
    background: ${props => props.background || 'green'};
`;
const PokemonTpyeText = styled(Text).attrs(() => ({}))``;

const PokemonType = ({ type }) => {
    return (
        <PokemonTypeContainer>
            <PokemonTpyeText>{type}</PokemonTpyeText>
        </PokemonTypeContainer>
    );
};

export const PokemonCard = ({ pokemon }) => {
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

    function renderTypes() {
        return types.map(type => {
            return <PokemonType type={type.type.name} />;
        });
    }

    console.log('pokemon', pokemon);
    return (
        <PokemonCardContainer background={getBackgroundColor()}>
            <PokemonName>
                {name.charAt(0).toUpperCase() + name.substr(1)}
            </PokemonName>
            {renderTypes()}
        </PokemonCardContainer>
    );
};
