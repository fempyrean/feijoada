/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';
import colors from '../utils/colors';
import { Text } from './Text';

const Container = styled.TouchableOpacity``;
const Title = styled(Text).attrs(() => ({
    font: 'ExtraBod',
    size: 16,
}))`
    margin-vertical: 3px;
`;
const Date = styled(Text).attrs(() => ({
    font: 'Bold',
    size: 12,
}))``;
const Thumb = styled.Image.attrs(props => ({
    source:
        props.thumb || require('../assets/images/thumbnails/thumbnail1.png'),
}))`
    width: 130px;
    height: 100px;
    border-radius: 20px;
`;

export const News = props => {
    const { title, date, thumb } = props;
    return (
        <Container
            style={{
                flexDirection: 'row',
                marginVertical: 3,
                marginHorizontal: 8,
                paddingVertical: 10,
                borderBottomWidth: StyleSheet.hairlineWidth,
                borderBottomColor: colors.bg.lightGrey200,
            }}
        >
            <Container style={{ flex: 1 }}>
                <Title>{title}</Title>
                <Date>{date}</Date>
            </Container>
            <Thumb thumb={thumb} />
        </Container>
    );
};
