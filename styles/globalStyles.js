import { StyleSheet } from "react-native";

const GlobalStyles=StyleSheet.create({
    container:{
        flex:1,
        padding:20,
    },
    gameCard:{
        fontSize:20,
        padding:10,
        borderWidth:1,
        borderRadius:10,
        borderColor:"grey",
        marginVertical:10,
        textAlign:"center"
    },
    reviewCard:{
        borderWidth:1,
        shadowOffset:10,
        shadowColor:"black",
        shadowOpacity:0.9,
        shadowRadius:10,
        marginVertical:10,
        borderRadius:10,
        borderColor:"grey",
        padding:10,
    },
    plusIcon:{
        alignSelf:"center",
        padding:20,
        fontSize:20,
        borderRadius:10,
        borderColor:"grey",
        borderWidth:.5
    }


})

export default GlobalStyles;