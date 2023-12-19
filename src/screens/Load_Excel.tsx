import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import DocumentPicker, { DocumentPickerResponse } from 'react-native-document-picker';
import LinearGradient from 'react-native-linear-gradient';
import appStyles, { Gradient_Colors } from '../Styles/appStyles';
import { BotonCalc } from '../components/CustomButtom';
import Icon from 'react-native-vector-icons/FontAwesome';



const UploadScreen = () => {
  const [selectedFile, setSelectedFile] = useState<null | DocumentPickerResponse>(null);

  const pickDocument = async () => {
    try {
      const result = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });

      if (result.length > 0) {
        setSelectedFile(result[0]);
      }
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // User cancelled the picker
      } else {
        throw err;
      }
    }
  };

  function handleAccion(numeroTexto: string): void {
    throw new Error('Function not implemented.');
  }

  return (
    <LinearGradient colors={Gradient_Colors} style={styles.container}>
      <View style={appStyles.overlay}>
        <Image source={require('../images/OIP.jpg')} style={appStyles.imagen_BF} />
      </View>
      <Text style={appStyles.title}></Text>
      
      <View style={appStyles.content}>
        {/* Load container */}
        <View style={appStyles.rectangle_load}>
          <Image source={require('D:/users/sajala/Desktop/Attentd_2/AuditoriaBvfe/src/images/Upload_icon.png')} style={appStyles.icon_load} />
          <Text style={appStyles.browse_txt} onPress={pickDocument}>Examinar</Text>
          <Text style={appStyles.formats_txt}>Formatos compatibles: XLSX </Text>
        </View>
        <Text style={appStyles.instruction}>Subiendo Archvio</Text>

        <View style={appStyles.rectangle_load_file}>
            <Text style={appStyles.name_file_txt}>Tu_archivo.XLSX</Text>
            {/* <Icon name="times-circle" size={40} color="red" style={appStyles.icon} /> */}
        </View>
        <Text style={{ alignSelf: 'center' }}>Barra de progreso</Text>
        <Text style={{ alignSelf: 'center' }}>%75 Completado</Text>

        <Text style={appStyles.instruction}>Archivo Subido</Text>

        <View style={appStyles.rectangle_load_file}>
            <Text style={appStyles.name_file_txt}>nombre_documento.XLSX</Text>
            {/* <Icon name="times-circle" size={40} color="red" style={appStyles.icon} /> */}
        </View>

        <TouchableOpacity style={appStyles.uploadButton}  >
          <Text style={appStyles.buttonText}>Cargar Archivo</Text>
        </TouchableOpacity>

      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedFileContainer: {
    marginTop: 20,
  },
  selectedFileText: {
    fontSize: 16,
  },
  imagen: {
    width: '100%',
    height: '100%',
    //resizeMode: 'cover',
  },
});

export default UploadScreen;
