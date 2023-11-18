
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import styled from "styled-components/native";
import theme from "../../../theme";

export type ButomTypeStyleProps = any;

type Props = { 
  
  type: ButomTypeStyleProps;

}

export const Container = styled(TouchableOpacity) <Props>`

width:  250px;
  height: 50px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_200};
  border-radius: 5px;

  flex-direction: row;
  align-items: center;

  padding: 5px;
  margin-bottom: 160px ;
  
 
   

align-items: center;
justify-content: center;
`

export const Conta = styled.Text`

font-size: ${({}) => theme.FONT_SIZE.MD}px;
color: ${({}) => theme.COLORS.GRAY_700};
font-family: ${({}) => theme.FONT_FAMILY.REGULAR};
right: 55px;


` 


export const Title = styled.Text`
 
font-size: ${({}) => theme.FONT_SIZE.MD}px;
color: ${({}) => theme.COLORS.GRAY_700};
font-family: ${({}) => theme.FONT_FAMILY.REGULAR};
right: 75px;

`

 