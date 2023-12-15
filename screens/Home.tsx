import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

function Login(): JSX.Element {
    const isDarkMode = useColorScheme() === 'dark';
  
    return (
      <SafeAreaView >
        <View>
            <Text>Esta es la pantalla de Home xd con el navegator</Text>
        </View>
      </SafeAreaView>
    );
  }
  
  export default Login;