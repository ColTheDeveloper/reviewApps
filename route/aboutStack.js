import { createNativeStackNavigator } from "@react-navigation/native-stack";
import About from "../screens/about";
import Header from "../shared/header";


const Stack = createNativeStackNavigator();

const AboutStack=()=>{
    return(
        <Stack.Navigator>
            <Stack.Screen name="AboutPage" component={About} options={({navigation})=>{return{headerTitle:()=> <Header title="About" navigation={navigation}/>}}}/>
        </Stack.Navigator>
    )
}

export default AboutStack;