import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from '../src/screens/Login';
import Home from '../src/screens/Home';
import Load_Excel from '../src/screens/Load_Excel';
import Search from '../src/screens/Search';
import Questions from '../src/screens/Questions';

// Types of routes
export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  Load_Excel: undefined;
  Excel_proof: undefined;
  Search:undefined;
  Questions:undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function HomeStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Load_Excel"
          component={Load_Excel}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Search"
          component={Search}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Questions"
          component={Questions}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default HomeStack;
