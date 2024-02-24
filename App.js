import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Home from './src/pages/Home';
import Teste from "./src/pages/Teste";

const Stack = createNativeStackNavigator();

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Teste" component={Teste} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}