import React, { useEffect, useState } from 'react';
import type {PropsWithChildren} from 'react';
import {SafeAreaView,Text,View,TouchableOpacity,Image,TextInput, FlatList} from 'react-native';
import appStyles, { Gradient_Colors } from '../Styles/appStyles';
import LinearGradient from 'react-native-linear-gradient';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome, faUpload, faMagnifyingGlass, faPerson,faPersonDress } from '@fortawesome/free-solid-svg-icons';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/homeStack';
import { onRead_personal_information,deleteAllRecords, onCreate_personal_information} from '../Auditoria_DB';
import { Information_User } from '../Auditoria_DB';
import { handleUserClickExternal } from './Questions';

type LoginScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Search'>;
interface LoginProps {
  navigation: LoginScreenNavigationProp;
}

const Search:  React.FC<LoginProps> = ({ navigation }) => {
  const [usersearch, setUsersearch] = useState('');
  const [filteredData, setFilteredData] = useState<ListItem[]>([]);
  const [searchId, setSearchId] = useState<string>('');
  const [showData, setShowData] = useState<boolean>(false);
  const [dataproof, setDataproof] = useState<ListItem[]>([]);
  const [data, setData] = useState<ListItem[]>([]); 

useEffect(() => {
  const fetchData = async () => {
    try {
      const personalInformationFields = await Information_User();
      console.log('Campos de INFORACIONPERSONAL:', personalInformationFields);
      setData(personalInformationFields)
    } catch (error) {
      console.error('Error al obtener campos de la base de datos:', error);
    }
  };
  fetchData();
}, []);


interface ListItem {
  NOMBRES: string;
  APELLIDOS: string;
  GENERO: string;
  ESTADO: string;
  IDENTIFICACION: string;
  TELEFONO: string;
}
const renderItem = ({ item }: { item: ListItem }) => {
  const icon = item.GENERO === 'Masculino' ? faPerson : faPersonDress;
  const circleColor = item.ESTADO === 'Activo' ? 'green' : 'white';
  const handleUserClick = () => {
    if (item.ESTADO === 'Activo') {
      //console.log('Usuario clicado:', item.name);
      handleUserClickExternal(item.IDENTIFICACION);
      //navigation.navigate('Questions');
      //navigation.navigate('Questions', { identificacion_user: item.IDENTIFICACION } as { identificacion_user: string });
      navigation.navigate('Questions', { identificacion_user: item.IDENTIFICACION });
    } else {
      //console.log('No puedes hacer clic en usuarios no activos:', item.name);
    }
  };
  return (
    <TouchableOpacity onPress={handleUserClick} disabled={item.ESTADO !== 'Activo'}>
      <View style={appStyles.listItem}>
        <View style={appStyles.icon_user}>
          <FontAwesomeIcon icon={icon} size={40} color="#000000" />
        </View>
        <View style={appStyles.info_user}>
          <Text style={appStyles.txt_info_user}>{item.NOMBRES}</Text>
          <Text style={appStyles.txt_info_user}>{item.APELLIDOS}</Text>
          <Text style={appStyles.txt_info_user}>{item.IDENTIFICACION}</Text>
          <Text style={appStyles.txt_info_user}>{item.TELEFONO}</Text>
        </View>
        <View style={[appStyles.style_circle, { backgroundColor: circleColor }]}></View>
      </View>
    </TouchableOpacity>
  );
};
const handleSearch = () => {
  // Filtrar la lista de datos para mostrar solo la entrada con el ID ingresado
  const result = data.filter((item) => item.IDENTIFICACION === searchId);
  setFilteredData(result);
  setShowData(true);
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
            keyExtractor={(item) => item.NOMBRES}
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