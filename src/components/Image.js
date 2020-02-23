import styled from 'styled-components/native';

export const Image = styled.Image``;

export const PokeballUpperRightCorner = styled(Image).attrs(() => ({
    source: require('../assets/images/pokeball.png'),
}))`
    opacity: 0.1;
    transform: rotateZ(25deg);
    width: 200px;
    height: 200px;
    position: absolute;
    right: -70px;
    top: -70px;
    z-index: -1;
`;
