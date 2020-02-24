/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { Text, Image } from './index';

const DEVICE_WIDTH = Dimensions.get('window').width;

const SectionButtonContainer = styled.TouchableOpacity.attrs(() => ({
    elevation: 1,
}))`
    background: ${props => props.background || '#4ec1a6'};
    height: 90px;
    width: ${DEVICE_WIDTH / 2 - 20}px;
    border-radius: 20px;
    padding: 10px;
    overflow: hidden;
    justify-content: center;
    margin: 5px;
`;
const SectionButtonTitle = styled(Text).attrs(() => ({
    font: 'ExtraBold',
    size: 19,
}))`
    color: #fff;
`;
const Pokeball = styled(Image).attrs(() => ({
    source: require('../assets/images/pokeball.png'),
}))`
    width: 100px;
    height: 100px;
    position: absolute;
    right: -20px;
    top: -5px;
    opacity: 0.1;
`;

export const HomeSectionButton = props => {
    const { onPress = () => {}, background, title = '지은나' } = props;
    return (
        <SectionButtonContainer onPress={onPress} background={background}>
            <Pokeball />
            <SectionButtonTitle>{title}</SectionButtonTitle>
        </SectionButtonContainer>
    );
};
