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

const Questions:  React.FC<LoginProps> = ({ navigation }) => {
return (
<SafeAreaView style={appStyles.container_Gradient}>
    <LinearGradient colors={Gradient_Colors} style={appStyles.container_Gradient}>
    <View>
        <Image source={require('../images/OIP.jpg')} style={appStyles.imagen_BF} />
    </View>
    <Text>Pantala de las preguntas</Text>
    <View style={appStyles.content}>
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

export default Questions;