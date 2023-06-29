import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeStack from "./homeStack";
import AboutStack from "./aboutStack";
import About from "../screens/about";
import Header from "../shared/header";


const Drawer = createDrawerNavigator();

const DrawerStack=()=>{
    return(
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={HomeStack} options={{headerShown:false}}/>
            <Drawer.Screen name="About" component={AboutStack}  options={{headerShown:false}}/>
        </Drawer.Navigator>
    )
}
export default DrawerStack;