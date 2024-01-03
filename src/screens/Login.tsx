import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';


import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/homeStack';
import appStyles from '../Styles/appStyles';


type LoginScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;
interface LoginProps {
  navigation: LoginScreenNavigationProp;
}

function Login({ navigation }: LoginProps): JSX.Element {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Lógica de inicio de sesión aqui
    console.log('Login button pressed');

    // Navega a la pantalla Home
    navigation.navigate('Questions');
  };

  return (
    <SafeAreaView style={appStyles.container_safearea}>
      <View>
      <Image
          source={require('../images/OIP.jpg')} style={appStyles.imagen_BF}
        />
      </View>
      <View style={appStyles.content}>
        <Text style={appStyles.title}>Auditoria BVFE APP</Text>
        <Text style={appStyles.subtitle}>Optimiza tus tareas y agiliza tu día con nuestra aplicación.</Text>

        <TextInput
          style={appStyles.input_user}
          placeholder="Username"
          placeholderTextColor="#FFFFFF"
          value={username}
          onChangeText={(text) => setUsername(text)}
        />

        <TextInput
          style={appStyles.input_pass}
          placeholder="Password"
          placeholderTextColor="#FFFFFF"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />

        <TouchableOpacity style={appStyles.loginButton} onPress={handleLogin}>
          <Text style={appStyles.buttonText}>Ingresar</Text>
        </TouchableOpacity>

        <Text style={appStyles.txt_forgot} > Olvidaste tu 
        <Text style={appStyles.txt_forgot_two}> usuario </Text>o<Text style={appStyles.txt_forgot_two}> contraseña </Text>?</Text>
      </View>
    </SafeAreaView>
  );
}

export default Login;
