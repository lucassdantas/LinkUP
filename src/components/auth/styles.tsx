import { StyleSheet } from "react-native";  

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
        marginBottom:6,
        fontFamily:'Poppins_400Regular',
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
        fontSize:18,
        fontFamily:'Poppins'
    },
    forgetPasswordText:{
        textAlign:'right'
    }
})

