import styled from 'styled-components/native';
import colors from '../utils/colors';

export const Container = styled.View.attrs()`
    flex: 1;
    background: ${props => props.background || colors.bg.white};
    padding: ${props => (props.noPadding ? '0px' : '0 10px')};
    flex-direction: ${props => (props.row ? 'row' : 'column')};
`;

export const ScrollableContainer = styled.ScrollView`
    flex: 1;
    background: ${props => props.background || colors.bg.white};
    padding: ${props => (props.noPadding ? '0px' : '0 10px')};
`;

export const View = styled.View`
    background: ${props => props.background || colors.bg.white};
`;
