import { View, Text ,StyleSheet} from "react-native"
import GlobalStyles from "../styles/globalStyles";


const Review=({navigation,route})=>{

    const item=route.params
    
    return(
        <View style={GlobalStyles.container}>
            <View style={GlobalStyles.reviewCard}>
                <Text style={styles.title}>{item.game}</Text>
                <Text style={styles.body}>{item.body}</Text>
                <Text><Text style={styles.ratingText}>Rating:</Text>{item.review}</Text>
            </View>
        </View>
    )
}
export default Review;

const styles=StyleSheet.create({
    title:{
        fontSize:20,
        fontWeight:"bold",
    },
    body:{
        fontSize:15,    
    },
    ratingText:{
        fontSize:17,
        fontWeight:"bold",
    },
})