import styled from "styled-components/native";

export const Container = styled.View`


width: 50%;
height: 100%;
margin: 32px 0;
padding: 5px;
margin-top: 25px;
right: 30px;

`

export const Title  = styled.Text`
margin-top: 40px;
right: 20px;
text-align: center;

font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
color: ${({ theme }) => theme.COLORS.GRAY_400}; 

`
export const Subtitle  = styled.Text`

text-align: center;
right: 12px;
font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
color: ${({ theme }) => theme.COLORS.GRAY_300}; 

`