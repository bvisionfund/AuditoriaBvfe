import React, { useState } from 'react';
import type {PropsWithChildren} from 'react';
import {SafeAreaView,Text,View,TouchableOpacity,Image,TextInput, FlatList} from 'react-native';
import appStyles, { Gradient_Colors } from '../Styles/appStyles';
import LinearGradient from 'react-native-linear-gradient';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome, faUpload, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/homeStack';
import { onRead, onCreate, deleteAllRecords } from '../database';

type LoginScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Search'>;
interface LoginProps {
  navigation: LoginScreenNavigationProp;
}

const Search:  React.FC<LoginProps> = ({ navigation }) => {
  const [usersearch, setUsersearch] = useState(''); 
  const [data, setData] = useState([
    "Text 1",
    "Text 2",
    "Text 3",
    "Text 4",
    "Text 5",
  ])
    return (
      <SafeAreaView style={appStyles.container_Gradient}>
        <LinearGradient colors={Gradient_Colors} style={appStyles.container_Gradient}>
            <View>
            <Image source={require('../images/OIP.jpg')} style={appStyles.imagen_BF} />
            </View>
            <View style={appStyles.content}>
              <Text style={appStyles.title}>Buscar por cédula/nombres</Text>
              {/* ************ Search Container****************** */}
              <View style={appStyles.search_container}>
                <Text style={appStyles.txt_search}>ID/Nombre</Text>
                <View style={appStyles.inputContainer}>
                  <TextInput
                    style={appStyles.search_input}
                    placeholder="Ingrese ID o nombre"
                    placeholderTextColor="#595252"
                    value={usersearch}
                    onChangeText={(text) => setUsersearch(text)}
                  />
                  <TouchableOpacity
                    style={appStyles.search_icon}
                    onPress={() => navigation.navigate('Search')}
                  >
                    <FontAwesomeIcon icon={faMagnifyingGlass} size={40} color="#000000" />
                  </TouchableOpacity>
                </View>
              </View>
              <FlatList
                data={data}
                renderItem={({ item }) => <Text>{item}</Text>}
                keyExtractor={(item) => item}
              />
              {/* ********************** Navbar ***************** */}
              <View style={appStyles.navbar_container}>
                  <TouchableOpacity onPress={() => navigation.navigate('Load_Excel')}>
                  <FontAwesomeIcon icon={faUpload} size={40} color="#696969" />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                  <FontAwesomeIcon icon={faHome} size={40} color="#696969" />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => navigation.navigate('Search')}>
                  <FontAwesomeIcon icon={faMagnifyingGlass} size={40} color="#000000" />
                  </TouchableOpacity>
              </View>
            </View>
        </LinearGradient>
      </SafeAreaView>
    );
  }
  
  export default Search;