import styled from 'styled-components/native';
import { CaretLeft, UserCircle  } from "phosphor-react-native";

import theme from '../../../../theme';
export const Container = styled.View`

width: 100%;
flex: 1;
 flex-direction: row;
align-items: left;
justify-content: left;
padding: 10px;
margin-top: 100px;

`;

export const ImageIcon = styled(UserCircle ).attrs(({ theme }) => ({
    size : 115,
    
    color: theme.COLORS.GRAY_700,
    weight: 'duotone'

    
}))`
right: 25px;

margin-top: 32px;

`;


export const BackButton = styled.TouchableOpacity`



`;


export const BackIcon = styled(CaretLeft ).attrs(({ theme }) => ({
    size : 36,
    color: theme.COLORS.GRAY_700
}))`


right: 10px;
margin-top: -70px;


`;
