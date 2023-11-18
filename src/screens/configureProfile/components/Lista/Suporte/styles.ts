import styled from "styled-components/native";

export const Container = styled.View`


width: 40%;
height: 6%;
margin: 10px 0; 
padding: 2px;
margin-top: -58px;
`

export const Title  = styled.Text`
margin-top: 24px;
right: 48px;


font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
color: ${({ theme }) => theme.COLORS.GRAY_700}; 

`