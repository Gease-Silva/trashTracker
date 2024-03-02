import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Image } from 'react-native';
import Home from './src/pages/Home/index';
import Teste from './src/pages/Teste/index';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const MainTabScreen = () => (
  <Tab.Navigator
    tabBarOptions={{
      headerShown: false,
      activeTintColor: 'blue',
      inactiveTintColor: 'gray',
    }}
  >
    <Tab.Screen
      name="Home"
      component={Home}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color, size, focused }) => (
          <Image 
            source={require('./assets/Home.svg')}
            style={{width: size, height: size, tintColor: focused ? 'green' : color}}
          />
        ),
        headerShown: false,
      }}
    />
    <Tab.Screen
      name="Teste"
      component={Teste}
      options={{
        tabBarIcon: ({ color, size, focused }) => (
          <Image 
            source={require('./assets/Adicionar.svg')}
            style={{width: size, height: size, tintColor: focused ? 'green' : color}}
          />
        ),
        headerShown: false,
      }}
    />
    <Tab.Screen
      name="Teste"
      component={Teste}
      options={{
        tabBarIcon: ({ color, size, focused }) => (
          <Image 
            source={require('./assets/Adicionar.svg')}
            style={{width: size, height: size, tintColor: focused ? 'green' : color}}
          />
        ),
        headerShown: false,
      }}
    />
  </Tab.Navigator>
);

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen 
          name="Main" 
          component={MainTabScreen} 
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="Home" 
          component={Home} 
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="Teste" 
          component={Teste} 
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;