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
    // Agrega tu lógica de inicio de sesión aquí
    console.log('Login button pressed');

    // Navega a la pantalla Home
    navigation.navigate('Load_Excel');
  };

  return (
    <SafeAreaView style={appStyles.container}>
      <View style={appStyles.overlay}>
      <Image
          source={require('D:/users/sajala/Desktop/Attentd_2/AuditoriaBvfe/src/images/OIP.jpg')} style={appStyles.imagen_BF} // Ajusta la ruta de la imagen
        />
      </View>
      <View style={styles.content}>
        {/* <Text style={styles.title}>Login Screen</Text> */}

        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={(text) => setUsername(text)}
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />

        <TouchableOpacity style={appStyles.loginButton} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  content: {
    width: '80%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
  },
  loginButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Login;
