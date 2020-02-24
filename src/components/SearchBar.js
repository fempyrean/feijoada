/* eslint-disable react/prop-types */
import React, { useRef } from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import colors from '../utils/colors';
import { fontFaces } from './Text';

const SearchBarContainer = styled.TouchableOpacity.attrs(() => ({
    activeOpacity: 0.9,
}))`
    flex-direction: row;
    align-items: center;
    background: ${colors.bg.lightGrey};
    border-radius: 10px;
    padding-horizontal: 10px;
    padding-vertical: 3px;
    margin-vertical: 10px;
`;
const SearchBarInput = styled.TextInput`
    flex: 1;
    font-size: 14px;
    font-family: ${fontFaces.Regular};
`;
const SearchBarIcon = styled(Icon).attrs(() => ({
    name: 'search',
    size: 21,
    color: '#000',
}))`
    margin-right: 5px;
`;

export const SearchBar = props => {
    const { placeholder = 'Search Pokemon, Moves, Ability, etc' } = props;
    const inputRef = useRef();

    return (
        <SearchBarContainer onPress={() => inputRef.current.focus()}>
            <SearchBarIcon />
            <SearchBarInput ref={inputRef} placeholder={placeholder} />
        </SearchBarContainer>
    );
};
