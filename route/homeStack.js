import { NavigationContainer } from "@react-navigation/native";
import {createAppContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Review from "../screens/review";
import Home from "../screens/home";
import Header from "../shared/header";

const screen={
    Home:{
        screen:Home
    },
    Review:{
        screen:Review
    }
}

const Stack=createNativeStackNavigator()

const HomeStack=()=>{
    return(
        <Stack.Navigator>
            <Stack.Screen name="Homepage" component={Home} options={({navigation})=> {return {headerTitle:()=> <Header title="GameZone" navigation={navigation}/>,}}}/>
            <Stack.Screen name="Review" component={Review} />
        </Stack.Navigator>

    )
}

export default HomeStack;