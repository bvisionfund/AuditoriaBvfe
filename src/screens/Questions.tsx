import React, { useState } from 'react';
import type {PropsWithChildren} from 'react';
import {SafeAreaView,Text,View,TouchableOpacity,Image,TextInput, FlatList,ScrollView } from 'react-native';
import appStyles, { Colors } from '../Styles/appStyles';
import LinearGradient from 'react-native-linear-gradient';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome, faUpload, faMagnifyingGlass, faPerson,faPersonDress,faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/homeStack';
import { onRead, onCreate, deleteAllRecords } from '../database';
import { view } from 'rambdax';
import App from '../../App';

type LoginScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Search'>;
interface LoginProps {
  navigation: LoginScreenNavigationProp;
}

const Questions:  React.FC<LoginProps> = ({ navigation }) => {
    const [username, setUsername] = useState('');
return (
<SafeAreaView style={{ ...appStyles.container_Gradient, backgroundColor: Colors.background_questions }}>

<ScrollView>
    {/* ************** Container of personal information ************************* */}
    <View style={appStyles.container_information}>
        <View style={appStyles.container_info}>
            <Text style={appStyles.txt_title_personal_info}>Informacion Personal</Text>
            <TouchableOpacity style={appStyles.container_location}>
                <FontAwesomeIcon icon={faLocationDot} size={35} color="#000000" />
                <Text style={appStyles.txt_location}>Ver ubicación</Text>
            </TouchableOpacity>
            <Image source={require('../images/User.png')} style={appStyles.circle_image}/>   
        </View>
    </View>
    
        <View style={appStyles.content}>
            <Text style={appStyles.text_question}>Agencia</Text>
            <TextInput
                style={appStyles.input_answer}
                value={username}
                onChangeText={(text) => setUsername(text)}
            />
            <Text style={appStyles.text_question}>Asesor</Text>
            <TextInput
                style={appStyles.input_answer}
                value={username}
                onChangeText={(text) => setUsername(text)}
            />
            <Text style={appStyles.text_question}>Fecha</Text>
            <TextInput
                style={appStyles.input_answer}
                value={username}
                onChangeText={(text) => setUsername(text)}
            />
            <Text style={appStyles.text_question}>Revisado por</Text>
            <TextInput
                style={appStyles.input_answer}
                value={username}
                onChangeText={(text) => setUsername(text)}
            />
            <Text style={appStyles.text_question}>Nombre del Grupo/ Banca</Text>
            <TextInput
                style={appStyles.input_answer}
                value={username}
                onChangeText={(text) => setUsername(text)}
            />
            <Text style={appStyles.text_question}>N° de Expediente</Text>
            <TextInput
                style={appStyles.input_answer}
                value={username}
                onChangeText={(text) => setUsername(text)}
            />
            <Text style={appStyles.text_question}>N° Crédito</Text>
            <TextInput
                style={appStyles.input_answer}
                value={username}
                onChangeText={(text) => setUsername(text)}
            />
            <Text style={appStyles.text_question}>Fecha desembolso</Text>
            <TextInput
                style={appStyles.input_answer}
                value={username}
                onChangeText={(text) => setUsername(text)}
            />
            <Text style={appStyles.text_question}>Fecha vencimiento</Text>
            <TextInput
                style={appStyles.input_answer}
                value={username}
                onChangeText={(text) => setUsername(text)}
            />
            <Text style={appStyles.text_question}>Clientes</Text>
            <TextInput
                style={appStyles.input_answer}
                value={username}
                onChangeText={(text) => setUsername(text)}
            />
            <Text style={appStyles.text_question}>Monto</Text>
            <TextInput
                style={appStyles.input_answer}
                value={username}
                onChangeText={(text) => setUsername(text)}
            />
            <Text style={appStyles.text_question}>Identificación</Text>
            <TextInput
                style={appStyles.input_answer}
                value={username}
                onChangeText={(text) => setUsername(text)}
            />
            <Text style={appStyles.text_question}>Estado Civil</Text>
            <TextInput
                style={appStyles.input_answer}
                value={username}
                onChangeText={(text) => setUsername(text)}
            />
            <Text style={appStyles.text_question}>Nombre del Conyuge</Text>
            <TextInput
                style={appStyles.input_answer}
                value={username}
                onChangeText={(text) => setUsername(text)}
            />
            <Text style={appStyles.text_question}>N° menores de 18 años</Text>
            <TextInput
                style={appStyles.input_answer}
                value={username}
                onChangeText={(text) => setUsername(text)}
            />
            <Text style={appStyles.text_question}>N° de hijos patrocinados</Text>
            <TextInput
                style={appStyles.input_answer}
                value={username}
                onChangeText={(text) => setUsername(text)}
            />
            <Text style={appStyles.text_question}>Dirección</Text>
            <TextInput
                style={appStyles.input_answer}
                value={username}
                onChangeText={(text) => setUsername(text)}
            />
            <Text style={appStyles.text_question}>N° de Teléfono</Text>
            <TextInput
                style={appStyles.input_answer}
                value={username}
                onChangeText={(text) => setUsername(text)}
            />

            {/* ************** Container of personal information ************************* */}
            <View style={appStyles.container_information}>
                <View style={appStyles.container_info}>
                    <View style={appStyles.title_line}></View>
                    <Text style={appStyles.txt_title_encuesta}>Encuesta</Text>
                    <View style={appStyles.title_line}></View> 
                </View>
            </View>

            {/* <View style={appStyles.navbar_container}>
            <TouchableOpacity onPress={() => navigation.navigate('Load_Excel')}>
                <FontAwesomeIcon icon={faUpload} size={40} color="#696969" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <FontAwesomeIcon icon={faHome} size={40} color="#696969" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Search')}>
                <FontAwesomeIcon icon={faMagnifyingGlass} size={40} color="#000000" />
            </TouchableOpacity>
            </View> */}
        </View>
    </ScrollView>    
</SafeAreaView>
);
};

export default Questions;