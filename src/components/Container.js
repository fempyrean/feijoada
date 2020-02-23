import styled from 'styled-components/native';
import colors from '../utils/colors';

export const Container = styled.View`
    flex: 1;
    background: ${props => props.background || colors.bg.white};
    padding: 15px;
`;
