import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./Screens/HomeScreen";
import WelcomeScreen from "./Screens/WelcomeScreen";
import Splash from "./Screens/SplashScreen";


const App = () => {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Splash" screenOptions={{headerShown: false}}>
        
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="HomeScreen" component={Home} />
        
        
       

      </Stack.Navigator>
    </NavigationContainer>
  );

}

export default App;