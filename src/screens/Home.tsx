import React from 'react';
import type {PropsWithChildren} from 'react';
import {SafeAreaView,Text,useColorScheme,View,TouchableOpacity,Image} from 'react-native';
import appStyles, { Gradient_Colors } from '../Styles/appStyles';
import LinearGradient from 'react-native-linear-gradient';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome, faUpload, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/homeStack';

type LoginScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Load_Excel'>;
interface LoginProps {
  navigation: LoginScreenNavigationProp;
}
const Home: React.FC<LoginProps> = ({ navigation }) => {
  return (
    <SafeAreaView style={appStyles.container_Gradient}>
      <LinearGradient colors={Gradient_Colors} style={appStyles.container_Gradient}>
        <View>
          <Image source={require('../images/OIP.jpg')} style={appStyles.imagen_BF} />
        </View>
        <View style={appStyles.content}>
            <View style={appStyles.home_container}>
              <View style={appStyles.container_icon}>
                <TouchableOpacity onPress={() => navigation.navigate('Load_Excel')} >
                  <FontAwesomeIcon icon={faUpload} size={50} color="#000000" />
                  <Text style={appStyles.text_icon}>Subir</Text>
                </TouchableOpacity>
              </View>
              <View style={appStyles.container_icon}>
              <TouchableOpacity onPress={() => navigation.navigate('Search')}>
                <FontAwesomeIcon icon={faMagnifyingGlass} size={50} color="#000000" />
                <Text style={appStyles.text_icon}>Buscar</Text>
              </TouchableOpacity>
              </View>
            </View>
            {/* ********************** Navbar ***************** */}
            <View style={appStyles.navbar_container}>
              <TouchableOpacity onPress={() => navigation.navigate('Load_Excel')}>
                <FontAwesomeIcon icon={faUpload} size={40} color="#696969" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <FontAwesomeIcon icon={faHome} size={40} color="#000000" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Search')}>
                <FontAwesomeIcon icon={faMagnifyingGlass} size={40} color="#696969" />
              </TouchableOpacity>
            </View>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
  }
  
  export default Home;