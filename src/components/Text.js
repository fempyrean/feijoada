import styled from 'styled-components/native';

const fontFaces = {
    Regular: 'CircularStd-Book',
    Medium: 'CircularStd-Medium',
    Bold: 'CircularStd-Bold',
    ExtraBold: 'CircularStd-Black',
};

export const Text = styled.Text`
    font-family: ${props => fontFaces[props.font] || fontFaces.Regular};
    font-size: ${props => props.size || '16'}px;
`;

export const Title = styled(Text).attrs(() => ({
    font: 'ExtraBold',
}))`
    font-size: ${props => props.size || '21'}px;
    line-height: 40px;
`;
