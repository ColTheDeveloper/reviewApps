import { View, Text, ImageBackground ,StyleSheet} from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { TouchableWithoutFeedback } from "react-native-gesture-handler";


const Header=({title,navigation})=>{
    return(
        <View style={styles.Header} >    
            <TouchableWithoutFeedback onPress={()=>navigation.openDrawer()} > 
                <Ionicons name="menu" style={styles.icon} color="black" />
            </TouchableWithoutFeedback>    
           
            <Text style={styles.headerText}>{title}</Text>
        </View>
    )
}

export default Header;

const styles=StyleSheet.create({
    Header:{
        flexDirection:"row",
        gap:10,
        alignItems:"center",
        width:"98%",
        
    },     
    icon:{
        alignSelf:"center",
        fontSize:25
    },
    headerText:{
        flex:1,
        alignSelf:"center",
        fontSize:20,
    }

})

