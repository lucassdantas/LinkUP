import { StyleSheet } from "react-native";  
import styled from "styled-components";

export const styles = StyleSheet.create({
    container:{
        padding:24,
        marginTop:32
    },
    buttonContainer:{
        flex:1,
        alignItems:'center',
        marginTop:32

    },
    backButtonContainer:{
        flexDirection:'row',
        alignItems:'center',
        marginBottom:32
    },
    titleContainer:{
        marginBottom:32
    },
    inputContainer:{
        marginBottom:32
    },
    forgetPasswordContainer:{
        marginTop:10
    },

    backButton:{
        fontSize:18
    },
    title:{
        color:"#504f4f",
        fontSize:32,
        fontWeight:'700',
    },
    label:{
        fontSize:16,
        letterSpacing:0.5,
        marginBottom:6
    },
    input:{
        borderRadius:25,
        borderColor:'#c9c9c9',
        borderWidth:1,
        padding:12
    },
    button:{
        backgroundColor:'#504f4f',
        alignSelf:"stretch",
        justifyContent:'center',
        alignItems:'center',
        height:50,
        borderRadius:25,
    },
    buttonText:{
        color:'#fff',
        fontSize:18
    },
    forgetPasswordText:{
        textAlign:'right'
    }
})

export const Button = styled.TouchableOpacity`
    background-color:${({theme}) => theme.COLORS.GRAY_700};
    width:100%;
    height:40px;
    
    border-radius:${({theme}) => theme.BUTTONS.RADIUS}px;
    text-align:center;
    display:flex;
    align-items:center;
    justify-content:center;

`
export const Title = styled.Text`
    font-family:${({theme}) => theme.FONT_FAMILY.BOLD};
    font-size:${({theme}) => theme.FONT_SIZE.TITLE}px;
    color:${({theme}) => theme.COLORS.GRAY_700};

`

export const ButtonText = styled.Text`
    font-family:${({theme}) => theme.FONT_FAMILY.REGULAR};
    font-size:${({theme}) => theme.FONT_SIZE.MD}px;
    color:${({theme}) => theme.COLORS.WHITE};

`

export const ForgotPasswordText = styled.Text`
    font-family:${({theme}) => theme.FONT_FAMILY.MEDIUM};
    font-size:${({theme}) => theme.FONT_SIZE.SM}px;
    color:${({theme}) => theme.COLORS.GRAY_700};

`