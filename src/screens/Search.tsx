import React, { useState } from 'react';
import type {PropsWithChildren} from 'react';
import {SafeAreaView,Text,View,TouchableOpacity,Image,TextInput, FlatList} from 'react-native';
import appStyles, { Gradient_Colors } from '../Styles/appStyles';
import LinearGradient from 'react-native-linear-gradient';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome, faUpload, faMagnifyingGlass, faPerson,faPersonDress } from '@fortawesome/free-solid-svg-icons';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/homeStack';
import { onRead, onCreate, deleteAllRecords } from '../database';
import { view } from 'rambdax';
import App from '../../App';

type LoginScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Search'>;
interface LoginProps {
  navigation: LoginScreenNavigationProp;
}

const Search:  React.FC<LoginProps> = ({ navigation }) => {
  const [usersearch, setUsersearch] = useState(''); 
  const [data, setData] = useState([
    {
        "name": "Santiago Ajala",
        "id": "1003818497",
        "phone": "0999969036",
        "status": "no active",
        "sex": "M"
    },
    {
        "name": "Saire Conejo",
        "id": "1003818407",
        "phone": "0999969036",
        "status": "active",
        "sex": "M"
    },
    {
        "name": "Andrea Pantoja",
        "id": "1003818097",
        "phone": "0999969036",
        "status": "no active",
        "sex": "F"
    },
    {
        "name": "Alenjandra Enriquez",
        "id": "1003818897",
        "phone": "0999969036",
        "status": "no active",
        "sex": "F"
    },
    /* {
        "name": "Jonathan Nu\u00f1ez",
        "id": "1003818497",
        "phone": "0999969036",
        "status": "active",
        "sex": "M"
    },
    {
        "name": "Sasha Ho",
        "id": "1003818497",
        "phone": "0999969036",
        "status": "active",
        "sex": "M"
    },
    {
        "name": "Abdullah Hadley",
        "id": "1003818497",
        "phone": "0999969036",
        "status": "active",
        "sex": "M"
    },
    {
        "name": "Thomas Stock",
        "id": "1003818497",
        "phone": "0999969036",
        "status": "active",
        "sex": "M"
    },
    {
        "name": "Veeti Seppanen",
        "id": "1003818497",
        "phone": "0999969036",
        "status": "no active",
        "sex": "M"
    },
    {
        "name": "Bonnie Riley",
        "id": "1003818497",
        "phone": "0999969036",
        "status": "no active",
        "sex": "F"
    } */
]);
const [filteredData, setFilteredData] = useState<ListItem[]>([]);
const [searchId, setSearchId] = useState<string>('');
  const [showData, setShowData] = useState<boolean>(false);

interface ListItem {
  name: string;
  id: string;
  phone: string;
  status: string;
  sex: string
}
const renderItem = ({ item }: { item: ListItem }) => {
  const icon = item.sex === 'M' ? faPerson : faPersonDress;
  const circleColor = item.status === 'active' ? 'white' : 'green';

  return (
    <View style={appStyles.listItem}>
      <View style={appStyles.icon_user}>
        <FontAwesomeIcon icon={icon} size={40} color="#000000" />
      </View>
      <View style={appStyles.info_user}>
        <Text style={appStyles.txt_info_user}>{item.name}</Text>
        <Text style={appStyles.txt_info_user}>{item.id}</Text>
        <Text style={appStyles.txt_info_user}>{item.phone}</Text>
      </View>
      <View style={[appStyles.style_circle, { backgroundColor: circleColor }]}></View>
    </View>
  );
};
const handleSearch = () => {
  // Filtrar la lista de datos para mostrar solo la entrada con el ID ingresado
  const result = data.filter((item) => item.id === searchId);
  setFilteredData(result);
  setShowData(true); // Mostrar datos después de la búsqueda
};

return (
  <SafeAreaView style={appStyles.container_Gradient}>
    <LinearGradient colors={Gradient_Colors} style={appStyles.container_Gradient}>
      <View>
        <Image source={require('../images/OIP.jpg')} style={appStyles.imagen_BF} />
      </View>
      <View style={appStyles.content}>
        <Text style={appStyles.title}>Buscar por cédula/nombres</Text>
        <View style={appStyles.search_container}>
          <Text style={appStyles.txt_search}>id/Nombre</Text>
          <View style={appStyles.inputContainer}>
            <TextInput
              style={appStyles.search_input}
              placeholder="Ingrese id o nombre"
              placeholderTextColor="#595252"
              value={searchId}
              onChangeText={(text) => setSearchId(text)}
            />
            <TouchableOpacity
              style={appStyles.search_icon}
              onPress={handleSearch}
            >
              <FontAwesomeIcon icon={faMagnifyingGlass} size={40} color="#000000" />
            </TouchableOpacity>
          </View>
        </View>
        {showData && (
          <FlatList
            data={filteredData}
            renderItem={renderItem}
            keyExtractor={(item) => item.name}
          />
        )}
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
};

export default Search;