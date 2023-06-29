import {TouchableWithoutFeedback, Keyboard, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
//import Navigator from "./route/homeStack"
import Navigator from './route/homeStack';
//import HomeStack from './route/homeStack';
import DrawerStack from './route/drawer';

export default function App() {
  return (
    <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
      <NavigationContainer>
        <DrawerStack />
      </NavigationContainer>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
