import styled from "styled-components/native";

export const Container = styled.View`


width: 14%;
height: 4%;
margin: 10px 0; 
padding: 2px;
margin-top: 1px;
`

export const Title  = styled.Text`
margin-top: 10px;
right: 98px;


font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
color: ${({ theme }) => theme.COLORS.GRAY_700}; 

`
// export const Subtitle  = styled.Text`

// text-align: center;
// right: 12px;
// font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
// font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
// color: ${({ theme }) => theme.COLORS.GRAY_300}; 

