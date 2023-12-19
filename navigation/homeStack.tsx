import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from '../src/screens/Login';
import Home from '../src/screens/Home';
import Load_Excel from '../src/screens/Load_Excel'
//import Load_Excel from '../screens/Load_Excel';

// Types of routes
export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  Load_Excel: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function HomeStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
        />
        <Stack.Screen
          name="Home"
          component={Home}
        />
        <Stack.Screen
          name="Load_Excel"
          component={Load_Excel}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default HomeStack;
