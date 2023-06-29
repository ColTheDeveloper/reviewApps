import {View, Text,StyleSheet} from "react-native"
import GlobalStyles from "../styles/globalStyles"

const About=()=>{
    return(
        <View style={GlobalStyles.container}>
            <Text style={styles.header}>What is GameZone?</Text>
            <Text style={styles.paragraph}>GameZone is a Mobile App build by ColTheDeveloper to understand React Navigation, modal and also nesting stack</Text>
        </View>
    )
}
export default About

const styles=StyleSheet.create({
    header:{
        fontWeight:"bold",
        fontSize:30
    },
    paragraph:{
        paddingVertical:10,
        fontSize:20
    }
})